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
  /** koyu zemin varyantı: üst kat açılır, yoksa zemine gömülüyor */
  koyuZemin?: boolean;
  className?: string;
};

const ORAN = 68 / 132; // viewBox genişlik / yükseklik

/* Açık zeminde üst kat koyu teal. Koyu zeminde o teal (#12494e) Hero zeminine
   (#0d2f33) gömülüyor — ölçüldü, gözle doğrulandı — bu yüzden koyu zemin
   varyantında üst kat açık teal'e çıkıyor. Şekil aynı, sadece ton değişiyor. */
const KATLAR = [
  { d: "M56,6 L56,26 L0,54 L0,34 Z", acik: "#12494e", koyu: "#4fa8a4", sinif: "kat kat-1" },
  { d: "M0,36 L0,56 L56,84 L56,64 Z", acik: "#5aa03a", koyu: "#7fd05c", sinif: "kat kat-2" },
  { d: "M56,66 L56,86 L0,114 L0,94 Z", acik: "#a8e87f", koyu: "#d6f5b8", sinif: "kat kat-3" },
];

export function Isaret({
  yukseklik = 48,
  animasyonlu = false,
  tekRenk = false,
  koyuZemin = false,
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
          const renk = tekRenk ? "currentColor" : koyuZemin ? kat.koyu : kat.acik;
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
      <Isaret yukseklik={yukseklik} animasyonlu={animasyonlu} koyuZemin={koyuZemin} />
      <span
        className="font-semibold leading-none tracking-[0.22em]"
        style={{ fontSize: yukseklik * 0.52 }}
      >
        <span style={{ color: koyuZemin ? "#e8f4ea" : "#12494e" }}>SELF</span>{" "}
        <span className="font-medium" style={{ color: koyuZemin ? "#a8e87f" : "#5aa03a" }}>
          ENERJİ
        </span>
      </span>
    </span>
  );
}
