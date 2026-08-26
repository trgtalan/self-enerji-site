import type { Metadata } from "next";
import Link from "next/link";
import { Isaret } from "@/components/Logo";

export const metadata: Metadata = {
  title: "SelfCheck — Self Enerji",
  description:
    "Çatınıza uygun güneş enerjisi sistemini birlikte belirleyelim. Ücretsiz ve bağlayıcılığı yok.",
};

/**
 * SelfCheck giriş sayfası.
 * Hesap mantığı ve sihirbaz HENÜZ yok — bu sürüm süreci anlatır ve WhatsApp'a
 * devreder. Sayı üretmez, çünkü ilk sürümde doğrulanmamış rakam yazılmıyor.
 * Form da yok: form kişisel veri toplar, o da KVKK aydınlatma metnini gerektirir.
 */

const ADIMLAR = [
  {
    baslik: "Yazın",
    metin: "WhatsApp'tan bize ulaşın. Uzun bir form doldurmanız gerekmiyor.",
  },
  {
    baslik: "Çatınızı konuşalım",
    metin:
      "Konum, çatı yönü, eğim ve yıllık elektrik tüketiminiz — birkaç soru yeterli.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Çatınızın üretebileceği enerjiyi ve uygun sistem büyüklüğünü sizin için çıkarıyoruz.",
  },
  {
    baslik: "Sonucu paylaşalım",
    metin:
      "Size özel, bağlayıcılığı olmayan bir değerlendirme ile dönüş yapıyoruz.",
  },
];

const WHATSAPP =
  "https://wa.me/4915256227461?text=" +
  encodeURIComponent("Merhaba, SelfCheck ile çatım için değerlendirme istiyorum.");

export default function HesaplaSayfasi() {
  return (
    <main className="min-h-dvh bg-zemin-koyu px-6 py-20 text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-14">
        <header className="flex flex-col items-center gap-6 text-center">
          <Link href="/" aria-label="Ana sayfaya dön">
            <Isaret yukseklik={64} />
          </Link>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            <span className="text-marka-acik">SelfCheck</span> nasıl işliyor?
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-white/70">
            Çatınıza uygun güneş enerjisi sistemini birlikte belirliyoruz.
            Ücretsiz, bağlayıcılığı yok.
          </p>
        </header>

        <ol className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {ADIMLAR.map((adim, i) => (
            <li
              key={adim.baslik}
              className="flex gap-5 border-b border-white/10 px-6 py-6 last:border-b-0"
            >
              <span
                className="mt-0.5 flex size-8 flex-none items-center justify-center rounded-full bg-marka-acik text-sm font-bold text-zemin-koyu"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <h2 className="text-lg font-bold">{adim.baslik}</h2>
                <p className="text-pretty leading-relaxed text-white/70">{adim.metin}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-marka-acik px-7 py-3.5 text-base font-bold text-zemin-koyu transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marka-acik"
          >
            WhatsApp&apos;tan başlat
          </a>
          <Link
            href="/"
            className="text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </main>
  );
}
