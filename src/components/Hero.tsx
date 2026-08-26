import Link from "next/link";
import { Isaret } from "@/components/Logo";

/**
 * Hero — tek sahne.
 * Envanterdeki ikinci slayt (tam ekran ev fotoğrafı) HENÜZ kurulmadı: gerçek
 * kurulum fotoğrafı yok ve yer tutucu konmuyor. Fotoğraf geldiğinde bu bölüm
 * carousel'e döner; şimdilik tek sahne olduğu için ok ve nokta da yok.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] flex-col items-center justify-center gap-9 overflow-hidden bg-zemin-koyu px-6 py-24 text-center">
      <Isaret yukseklik={104} animasyonlu />

      <div className="flex max-w-2xl flex-col gap-5">
        <h1 className="text-balance text-3xl font-extrabold leading-[1.18] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          İhtiyacınız olan güneş enerjisi gücünü{" "}
          <span className="text-marka-acik">SelfCheck</span> ile öğrenin.
        </h1>
        <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Evinize özel tasarruf ve sistem büyüklüğü — birkaç adımda, ücretsiz.
        </p>
      </div>

      <Link
        href="/hesapla"
        className="group inline-flex items-center gap-2.5 rounded-full bg-marka-acik px-7 py-3.5 text-base font-bold text-zemin-koyu transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marka-acik"
      >
        SelfCheck&apos;i başlat
        <svg
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
        </svg>
      </Link>
    </section>
  );
}
