"use client";

import { useEffect, useRef } from "react";

/**
 * Açılış görseli — WebGL ile gerçek zamanlı çizilen güneş.
 * Kütüphane ve görsel dosyası yok; tek fragment shader.
 *
 * Onaylanan yön (B): BlueYard okuması. Üç karar buradan geliyor —
 *  1. küre kadrajın altında oturur ve taşar,
 *  2. yüzey doku değil parçacık serpintisidir,
 *  3. diskin sert sınırı yoktur; zerreler kenardan dışarı saçılır.
 * Işık veren cisim olması korundu: limb darkening yerinde, merkez sıcak.
 *
 * Hareket azaltma tercihi açıkken tek kare çizilir, imleç etkileşimi kapanır.
 */

const KOSE_SHADER = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

const YUZ_SHADER = `
precision highp float;
uniform vec2 u_merkez;   // diskin ekran merkezi, piksel
uniform float u_R;       // disk yarıçapı, piksel
uniform float u_time;    // saniye
uniform vec2 u_imlec;    // imleç konumu, piksel
uniform float u_yakin;   // 0..1 — imlecin etkisi, JS tarafında yumuşatılır
uniform vec2 u_res;

vec3 hash3(vec3 p){
  p = vec3(dot(p,vec3(127.1,311.7,74.7)),
           dot(p,vec3(269.5,183.3,246.1)),
           dot(p,vec3(113.5,271.9,124.6)));
  return fract(sin(p)*43758.5453);
}
float hash1(vec3 p){
  p=fract(p*0.3183099+vec3(0.71,0.113,0.419)); p*=17.0;
  return fract(p.x*p.y*p.z*(p.x+p.y+p.z));
}
float gur(vec3 x){
  vec3 i=floor(x),f=fract(x); f=f*f*(3.0-2.0*f);
  return mix(mix(mix(hash1(i+vec3(0.,0.,0.)),hash1(i+vec3(1.,0.,0.)),f.x),
                 mix(hash1(i+vec3(0.,1.,0.)),hash1(i+vec3(1.,1.,0.)),f.x),f.y),
             mix(mix(hash1(i+vec3(0.,0.,1.)),hash1(i+vec3(1.,0.,1.)),f.x),
                 mix(hash1(i+vec3(0.,1.,1.)),hash1(i+vec3(1.,1.,1.)),f.x),f.y),f.z);
}
float fbm(vec3 p){
  float s=0.0,a=0.5;
  for(int i=0;i<4;i++){ s+=a*gur(p); p*=2.03; a*=0.5; }
  return s;
}

/* Hücre başına bir zerre; boyu hash'e bağlı. Doku değil SERPİNTİ —
   bu ayrım yönün tamamını taşıyor. */
float serpinti(vec3 q, float olcek, float esik){
  vec3 p=q*olcek;
  vec3 i=floor(p); vec3 f=fract(p)-0.5;
  vec3 o=hash3(i)-0.5;
  float h=hash1(i+vec3(11.3,7.1,3.7));
  float d=length(f-o*0.62);
  float boy=0.14+h*0.25;
  return smoothstep(boy,boy*0.25,d)*step(esik,h);
}

void main(){
  vec2 d=(gl_FragCoord.xy-u_merkez)/u_R; float r=length(d); float t=u_time;

  vec2 im=(u_imlec-u_merkez)/u_R; float imr=length(im);
  float sicak=u_yakin*exp(-dot(d-im,d-im)*2.0);

  /* Zemin saf beyaz değil: aşağı doğru çok hafif şeftaliye döner.
     Atmosfer hissi buradan geliyor — beyazdan tek sapma bu. */
  float dikey=clamp(gl_FragCoord.y/u_res.y,0.0,1.0);
  vec3 col=mix(vec3(1.000,0.968,0.938), vec3(1.0,0.995,0.988), dikey);

  float z=sqrt(max(0.0,1.0-min(r,1.0)*min(r,1.0)));
  float don=t*0.055;                       // hareketin ana kaynağı: dönme
  float cs=cos(don), sn=sin(don);
  vec3 p0=vec3(d,z);
  vec3 p=vec3(p0.x*cs-p0.z*sn, p0.y, p0.x*sn+p0.z*cs);

  vec3 buk=vec3(fbm(p*2.1+vec3(0.,0.,t*0.006)),
                fbm(p*2.1+vec3(5.2,1.3,t*0.006)),
                fbm(p*2.1+vec3(9.1,7.7,t*0.006)))-0.5;
  vec3 pw=p+buk*(0.52+sicak*0.26);

  // zerreler eşit dağılmaz, adalar hâlinde toplanır ve limbe doğru yoğunlaşır
  float kume=fbm(pw*2.6+vec3(0.,0.,t*0.010));
  float kume2=fbm(pw*5.4+vec3(3.1,0.7,t*0.014));
  float yogun=smoothstep(0.20,0.62,kume*0.65+kume2*0.35);
  yogun*=0.55+0.85*smoothstep(0.15,0.98,r);

  float s1=serpinti(pw,20.0,0.10);
  float s2=serpinti(pw+vec3(4.1,0.3,2.2),38.0,0.22);
  float s3=serpinti(pw+vec3(1.7,6.2,9.4),68.0,0.34);
  float toz=(s1*0.42+s2*0.34+s3*0.24)*yogun;

  // limb darkening — Eddington yaklaşımı. Bu ışık veren bir cisim.
  float mu=max(z,0.0);
  float ld=0.30+0.70*mu;
  float genis=fbm(p*3.0+vec3(0.,0.,t*0.009))*0.66+fbm(p*7.0+vec3(t*0.008,0.,0.))*0.34;
  float v=ld*(0.30+genis*0.80)+toz*0.88+sicak*0.14;

  vec3 sc=mix(vec3(0.82,0.30,0.18),vec3(0.96,0.50,0.26),smoothstep(0.08,0.38,v));
  sc=mix(sc,vec3(1.00,0.70,0.40),smoothstep(0.36,0.66,v));
  sc=mix(sc,vec3(1.00,0.93,0.76),smoothstep(0.68,0.94,v));
  sc=mix(sc,vec3(1.00,0.99,0.94),smoothstep(0.92,1.16,v));

  // sert kesim yok: gövde r=1'e doğru söner, zerreler dışarı taşar
  float govde=1.0-smoothstep(0.90,1.005,r);
  col=mix(col,sc,govde);

  /* Dış toz ekran düzleminde üretilir. Küre koordinatında üretilirse r>1'de
     z sıfırlanır ve zerreler gerilip virgüle döner. */
  vec3 dp=vec3(d*1.45, t*0.022);
  float disToz=serpinti(dp,15.0,0.24)*0.58
             + serpinti(dp+vec3(3.3,1.7,0.0),27.0,0.40)*0.42;
  float sacak=smoothstep(1.30,0.94,r)*step(0.90,r)*(0.55+yogun*0.95);
  float yon=imr>0.001?max(dot(normalize(d),im/imr),0.0):0.0;
  sacak*=1.0+0.60*u_yakin*yon*yon;        // imleç tozu kendi yönüne sürükler
  col=mix(col,vec3(1.00,0.72,0.44),clamp(disToz*sacak,0.0,1.0)*0.80);

  float hale=smoothstep(1.85,0.94,r)*step(0.90,r)*0.30;
  col=mix(col,vec3(1.00,0.84,0.68),hale);

  gl_FragColor=vec4(min(col,vec3(1.0)),1.0);
}`;

export function Gunes({ className }: { className?: string }) {
  const tuvalRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = tuvalRef.current;
    if (!cv) return;

    const gl = cv.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) {
      // WebGL yoksa sessizce sıcak bir zemin bırak — yer tutucu konmuyor.
      cv.style.background =
        "radial-gradient(120% 90% at 50% 118%, #ffd9a8 0%, #ffb069 26%, #fff4ea 62%, #fff 84%)";
      return;
    }

    const der = (tur: number, kaynak: string) => {
      const o = gl.createShader(tur)!;
      gl.shaderSource(o, kaynak);
      gl.compileShader(o);
      if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(o));
      }
      return o;
    };

    const pr = gl.createProgram()!;
    gl.attachShader(pr, der(gl.VERTEX_SHADER, KOSE_SHADER));
    gl.attachShader(pr, der(gl.FRAGMENT_SHADER, YUZ_SHADER));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(pr));
      return;
    }
    gl.useProgram(pr);

    const tampon = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const konum = gl.getAttribLocation(pr, "a");
    gl.enableVertexAttribArray(konum);
    gl.vertexAttribPointer(konum, 2, gl.FLOAT, false, 0, 0);

    const U = (ad: string) => gl.getUniformLocation(pr, ad);
    const uM = U("u_merkez"), uR = U("u_R"), uT = U("u_time");
    const uI = U("u_imlec"), uY = U("u_yakin"), uS = U("u_res");

    let W = 1, H = 1, R = 1, MX = 0, MY = 0;
    let hx = 0, hy = 0, ix = 0, iy = 0, yakin = 0, hedef = 0, ilk = true;

    const boyutla = () => {
      const D = Math.min(window.devicePixelRatio || 1, 1.25);
      W = cv.width = Math.max(1, Math.floor(cv.clientWidth * D));
      H = cv.height = Math.max(1, Math.floor(cv.clientHeight * D));
      gl.viewport(0, 0, W, H);
      R = Math.max(W * 0.5, H * 0.54);
      MX = W * 0.5;
      MY = -H * 0.16; // küre kadrajın altında oturur
      gl.uniform1f(uR, R);
      gl.uniform2f(uM, MX, MY);
      gl.uniform2f(uS, W, H);
      if (ilk) { ix = MX; iy = MY + R * 0.6; hx = ix; hy = iy; ilk = false; }
    };

    boyutla();
    const gozlemci = new ResizeObserver(boyutla);
    gozlemci.observe(cv);

    const azalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const imlecTasi = (e: PointerEvent) => {
      const k = cv.getBoundingClientRect();
      const D = W / k.width;
      hx = (e.clientX - k.left) * D;
      hy = (k.height - (e.clientY - k.top)) * D;
      const dr = Math.hypot(hx - MX, hy - MY) / R;
      hedef = Math.max(0, 1 - Math.max(0, dr - 0.35) / 1.15);
    };
    const imlecCikti = () => { hedef = 0; };

    if (!azalt) {
      cv.addEventListener("pointermove", imlecTasi, { passive: true });
      cv.addEventListener("pointerleave", imlecCikti);
    }

    let istek = 0;
    const kare = (ms: number) => {
      ix += (hx - ix) * 0.075;
      iy += (hy - iy) * 0.075;
      yakin += (hedef - yakin) * 0.045;
      gl.uniform2f(uI, ix, iy);
      gl.uniform1f(uY, yakin);
      gl.uniform1f(uT, ms * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      istek = requestAnimationFrame(kare);
    };

    if (azalt) {
      gl.uniform2f(uI, MX, MY);
      gl.uniform1f(uY, 0);
      gl.uniform1f(uT, 9);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else {
      istek = requestAnimationFrame(kare);
    }

    return () => {
      cancelAnimationFrame(istek);
      gozlemci.disconnect();
      cv.removeEventListener("pointermove", imlecTasi);
      cv.removeEventListener("pointerleave", imlecCikti);
      gl.deleteProgram(pr);
      gl.deleteBuffer(tampon);
    };
  }, []);

  return (
    <canvas
      ref={tuvalRef}
      className={className}
      aria-hidden="true"
    />
  );
}
