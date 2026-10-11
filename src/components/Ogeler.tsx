import Link from "next/link";

/* Sayfalar arasında ortak yazı öğeleri — ana sayfa, /hesapla ve /sorular aynı
   dili konuşsun diye tek yerde. */

export function Etiket({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.11em] text-[#7c8a73]">
      {children}
    </p>
  );
}

/** Eylem bağlantısı — renkli buton yok, altı çizili metin. */
export function Baglanti({
  href,
  children,
  koyuZemin = false,
  disari = false,
}: {
  href: string;
  children: React.ReactNode;
  koyuZemin?: boolean;
  /** başka siteye gider; yeni sekmede açılır */
  disari?: boolean;
}) {
  const sinif = koyuZemin
    ? "inline-block border-b border-[#c3e57a] pb-1 text-[1.02rem] tracking-[-0.01em] text-[#f2f8ea] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3e57a]"
    : "inline-block border-b border-murekkep pb-0.5 text-[1rem] tracking-[-0.01em] text-murekkep transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep";
  if (disari)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sinif}>
        {children}
      </a>
    );
  return href.startsWith("#") ? (
    <a href={href} className={sinif}>
      {children}
    </a>
  ) : (
    <Link href={href} className={sinif}>
      {children}
    </Link>
  );
}
