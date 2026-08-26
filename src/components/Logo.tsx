/**
 * Self Enerji işareti — onaylanan Y6 yönü (yuvarlatılmış origami).
 * Kaynak SVG: public/marka/self-isaret.svg. Buradaki kopya bileşen içinde
 * yaşar çünkü animasyon ve tek renk kullanımı için katlara erişim gerekir.
 */

type IsaretProps = {
  /** piksel cinsinden yükseklik; genişlik orandan çıkar */
  yukseklik?: number;
  /** true ise üç kat sırayla açılır */
  animasyonlu?: boolean;
  /** true ise currentColor kullanır — tek renk baskı ve kaşe için */
  tekRenk?: boolean;
  className?: string;
};

const ORAN = 68 / 132; // viewBox genişlik / yükseklik

/* Onaylanan C yönü — sıcak yeşil. Üst kattaki teal, güneşin turuncusuyla
   çatıştığı için bırakıldı; üç kat da aynı yeşil ailesinden.
   Renk değişikliği kullanıcı kararıdır, sorulmadan değiştirilmez. */
const KATLAR = [
  { d: "M56,6 L56,26 L0,54 L0,34 Z", renk: "#4a7c2f", sinif: "kat kat-1" },
  { d: "M0,36 L0,56 L56,84 L56,64 Z", renk: "#7fb843", sinif: "kat kat-2" },
  { d: "M56,66 L56,86 L0,114 L0,94 Z", renk: "#c3e57a", sinif: "kat kat-3" },
];

export function Isaret({
  yukseklik = 48,
  animasyonlu = false,
  tekRenk = false,
  className,
}: IsaretProps) {
  return (
    <svg
      viewBox="-6 -6 68 132"
      width={Math.round(yukseklik * ORAN)}
      height={yukseklik}
      className={[animasyonlu ? "marka-animasyon" : "", className].filter(Boolean).join(" ")}
      role="img"
      aria-label="Self Enerji"
    >
      <g strokeLinejoin="round" strokeWidth={11}>
        {KATLAR.map((kat) => {
          const renk = tekRenk ? "currentColor" : kat.renk;
          return (
            <path key={kat.d} className={kat.sinif} d={kat.d} fill={renk} stroke={renk} />
          );
        })}
      </g>
    </svg>
  );
}

type KilitProps = {
  yukseklik?: number;
  animasyonlu?: boolean;
  /** koyu zeminde kullanım */
  koyuZemin?: boolean;
};

/**
 * Yatay kilit: işaret + "SELF ENERJİ".
 * Yazı tipi kararı henüz verilmedi — şimdilik sistem yığını kullanılıyor.
 */
export function Kilit({ yukseklik = 40, animasyonlu = false, koyuZemin = false }: KilitProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <Isaret yukseklik={yukseklik} animasyonlu={animasyonlu} />
      <span
        className="font-semibold leading-none tracking-[0.22em]"
        style={{ fontSize: yukseklik * 0.52 }}
      >
        <span style={{ color: koyuZemin ? "#e8f4ea" : "#26401d" }}>SELF</span>{" "}
        <span className="font-medium" style={{ color: koyuZemin ? "#c3e57a" : "#4a7c2f" }}>
          ENERJİ
        </span>
      </span>
    </span>
  );
}
