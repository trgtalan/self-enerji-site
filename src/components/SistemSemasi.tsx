/**
 * Çatı üstü GES şeması — güneşten şebekeye enerji yolu.
 *
 * Fotoğraf yerine teknik çizim. İki düzen var: geniş ekranda yatay akış,
 * dar ekranda dikey akış. Tek çizimi yatay kaydırmaya bırakmak kötü bir
 * deneyimdi — mobilde 327px kutuya 720px içerik sığmıyordu.
 *
 * Akış noktaları hat boyunca ilerler; hareket azaltma tercihinde durur
 * (globals.css içindeki `.akis` kuralı).
 */

const MUREKKEP = "#26401d";
const YESIL = "#4a7c2f";
const PANEL = "#e2f5c4";
const ISIN = "#e8a35c";
const HAT = "#c8d1c2";
const SONUK = "#7c8a73";

/* ——— ortak parçalar ——— */

function Ev({ x, y }: { x: number; y: number }) {
  // Beşik çatı. Paneller güneye bakan sol eğime, eğime paralel oturur.
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* gövde */}
      <path d="M14 50 L14 112 L146 112 L146 50" fill="none" stroke={MUREKKEP} strokeWidth="1.5" />
      {/* çatı */}
      <path d="M0 50 L80 6 L160 50" fill="none" stroke={MUREKKEP} strokeWidth="1.5" strokeLinejoin="round" />
      {/* panel dizisi — çatının güneye bakan eğimini kaplar, eğime paralel */}
      <g stroke={YESIL} strokeWidth="1.1" fill={PANEL}>
        <path d="M12 43 L38 28.7 L38 19.5 L12 33.8 Z" />
        <path d="M41 27 L67 12.7 L67 3.5 L41 17.8 Z" />
      </g>
      {/* hücre çizgileri — panel yüzeyini böler */}
      <g stroke={YESIL} strokeWidth="0.5" opacity="0.5">
        <line x1="20.7" y1="38.2" x2="20.7" y2="29" />
        <line x1="29.3" y1="33.5" x2="29.3" y2="24.2" />
        <line x1="49.7" y1="22.2" x2="49.7" y2="13" />
        <line x1="58.3" y1="17.4" x2="58.3" y2="8.2" />
      </g>
      {/* kapı — evin ev olduğunu belli eden tek detay */}
      <path d="M36 112 L36 88 L56 88 L56 112" fill="none" stroke={MUREKKEP} strokeWidth="1" opacity="0.45" />
    </g>
  );
}

function Invertor({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="64" height="78" fill="none" stroke={MUREKKEP} strokeWidth="1.5" />
      {/* DC → AC: düz çizgi dalgaya dönüşür */}
      <path d="M12 46 L30 46" fill="none" stroke={YESIL} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M30 46 q6 -11 12 0 q6 11 12 0" fill="none" stroke={YESIL} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="32" cy="22" r="2.4" fill="#7fb843" />
    </g>
  );
}

function Sayac({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="64" height="78" fill="none" stroke={MUREKKEP} strokeWidth="1.5" />
      <circle cx="32" cy="30" r="15" fill="none" stroke={YESIL} strokeWidth="1.2" />
      <line x1="32" y1="30" x2="32" y2="19" stroke={YESIL} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="32" y1="30" x2="40" y2="35" stroke={YESIL} strokeWidth="1.2" strokeLinecap="round" />
      <g stroke={MUREKKEP} strokeWidth="0.9" opacity="0.35">
        <line x1="14" y1="58" x2="50" y2="58" />
        <line x1="14" y1="66" x2="38" y2="66" />
      </g>
    </g>
  );
}

function Direk({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={MUREKKEP} strokeWidth="1.5" fill="none">
      <line x1="30" y1="8" x2="30" y2="112" />
      <line x1="2" y1="26" x2="58" y2="26" />
      <line x1="8" y1="46" x2="52" y2="46" />
      <path d="M14 26 L30 43 L46 26" strokeWidth="0.9" opacity="0.4" />
    </g>
  );
}

function Isinlar({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={ISIN} strokeWidth="1.2" strokeLinecap="round" opacity="0.8">
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={i * 22} y1={0} x2={i * 22 + 46} y2={54} markerEnd="url(#sema-ok)" />
      ))}
    </g>
  );
}

function Tanimlar() {
  return (
    <defs>
      <marker id="sema-ok" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5.5" markerHeight="5.5" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill={ISIN} />
      </marker>
    </defs>
  );
}

/** Hat üzerinde ilerleyen enerji noktası. */
function Akis({
  x1,
  y1,
  x2,
  y2,
  gecikme,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  gecikme: string;
}) {
  const dikey = x1 === x2;
  return (
    <circle r="3" cx={x1} cy={y1} fill="#7fb843">
      <animate
        attributeName={dikey ? "cy" : "cx"}
        from={dikey ? y1 : x1}
        to={dikey ? y2 : x2}
        dur="1.7s"
        begin={gecikme}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.15;0.85;1"
        dur="1.7s"
        begin={gecikme}
        repeatCount="indefinite"
      />
    </circle>
  );
}

const DURAKLAR = [
  { ad: "Panel", alt: "Doğru akım" },
  { ad: "İnvertör", alt: "Alternatif akıma çevirir" },
  { ad: "Pano ve sayaç", alt: "Ölçüm ve dağıtım" },
  { ad: "Şebeke", alt: "Fazlası mahsuplaşır" },
];

/* ——— geniş ekran: yatay akış ——— */

function Yatay() {
  const x = [90, 400, 620, 850]; // ev, invertör, sayaç, direk
  const zeminY = 214;
  const hatY = 175; // kutuların dikey ortası — zemin çizgisiyle çakışmaz
  return (
    <svg
      viewBox="0 0 960 330"
      className="block w-full"
      role="img"
      aria-label="Çatı üstü güneş enerjisi sistemi: panelden invertöre, panodan şebekeye enerji yolu"
    >
      <Tanimlar />
      <Isinlar x={44} y={40} />
      <text x="40" y="28" fill="#b8752f" fontSize="12.5" fontWeight="500">
        Güneş
      </text>

      <Ev x={x[0]} y={102} />
      <Invertor x={x[1]} y={136} />
      <Sayac x={x[2]} y={136} />
      <Direk x={x[3]} y={102} />

      <line x1="40" y1={zeminY} x2="920" y2={zeminY} stroke="#e4e7e0" strokeWidth="1" />

      <g stroke={HAT} strokeWidth="1.2">
        <line x1="250" y1={hatY} x2={x[1]} y2={hatY} />
        <line x1={x[1] + 64} y1={hatY} x2={x[2]} y2={hatY} />
        <line x1={x[2] + 64} y1={hatY} x2={x[3] + 30} y2={hatY} />
      </g>

      <g className="akis">
        <Akis x1={250} y1={hatY} x2={x[1]} y2={hatY} gecikme="0s" />
        <Akis x1={x[1] + 64} y1={hatY} x2={x[2]} y2={hatY} gecikme="0.55s" />
        <Akis x1={x[2] + 64} y1={hatY} x2={x[3] + 30} y2={hatY} gecikme="1.1s" />
      </g>

      <g textAnchor="middle">
        {DURAKLAR.map((d, i) => {
          const mx = [x[0] + 80, x[1] + 32, x[2] + 32, x[3] + 30][i];
          return (
            <g key={d.ad}>
              <text x={mx} y="288" fill={MUREKKEP} fontSize="13" fontWeight="500">
                {d.ad}
              </text>
              <text x={mx} y="306" fill={SONUK} fontSize="11">
                {d.alt}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ——— dar ekran: dikey akış ——— */

function Dikey() {
  /* Ölçekli konumlar: ev translate(28,96) scale(.86) → 96..192,
     invertör 300..367, sayaç 450..517, direk 607..696.
     hatX, kutuların dikey ortasına denk gelir: 76 + 64*0.86/2 ≈ 104. */
  const hatX = 104;
  const evAlt = 192;
  const y = [96, 300, 450, 600]; // ev, invertör, sayaç, direk
  return (
    <svg
      viewBox="0 0 340 760"
      className="block w-full"
      role="img"
      aria-label="Çatı üstü güneş enerjisi sistemi: panelden invertöre, panodan şebekeye enerji yolu"
    >
      <Tanimlar />
      <g transform="translate(18 26) scale(0.85)">
        <Isinlar x={0} y={0} />
      </g>
      <text x="14" y="18" fill="#b8752f" fontSize="12.5" fontWeight="500">
        Güneş
      </text>

      <g transform={`translate(28 ${y[0]}) scale(0.86)`}>
        <Ev x={0} y={0} />
      </g>
      <g transform={`translate(76 ${y[1]}) scale(0.86)`}>
        <Invertor x={0} y={0} />
      </g>
      <g transform={`translate(76 ${y[2]}) scale(0.86)`}>
        <Sayac x={0} y={0} />
      </g>
      <g transform={`translate(78 ${y[3]}) scale(0.86)`}>
        <Direk x={0} y={0} />
      </g>

      <g stroke={HAT} strokeWidth="1.2">
        <line x1={hatX} y1={evAlt} x2={hatX} y2={y[1]} />
        <line x1={hatX} y1={y[1] + 68} x2={hatX} y2={y[2]} />
        <line x1={hatX} y1={y[2] + 68} x2={hatX} y2={y[3] + 8} />
      </g>

      <g className="akis">
        <Akis x1={hatX} y1={evAlt} x2={hatX} y2={y[1]} gecikme="0s" />
        <Akis x1={hatX} y1={y[1] + 68} x2={hatX} y2={y[2]} gecikme="0.55s" />
        <Akis x1={hatX} y1={y[2] + 68} x2={hatX} y2={y[3] + 8} gecikme="1.1s" />
      </g>

      <g>
        {DURAKLAR.map((d, i) => {
          const ty = [evAlt + 22, y[1] + 34, y[2] + 34, y[3] + 56][i];
          return (
            <g key={d.ad}>
              <text x="170" y={ty} fill={MUREKKEP} fontSize="13.5" fontWeight="500">
                {d.ad}
              </text>
              <text x="170" y={ty + 18} fill={SONUK} fontSize="11.5">
                {d.alt}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function SistemSemasi() {
  return (
    <figure className="m-0">
      <div className="hidden sm:block">
        <Yatay />
      </div>
      <div className="mx-auto max-w-[340px] sm:hidden">
        <Dikey />
      </div>
    </figure>
  );
}
