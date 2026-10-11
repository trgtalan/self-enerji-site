import type { Metadata } from "next";
import { Beliren } from "@/components/Beliren";
import { Etiket, Baglanti } from "@/components/Ogeler";

export const metadata: Metadata = {
  title: "SelfCheck",
  description:
    "Çatınıza uygun güneş enerjisi sistemini birlikte belirleyelim. Ücretsiz ve bağlayıcılığı yok.",
  alternates: { canonical: "/hesapla" },
};

/**
 * SelfCheck giriş sayfası.
 * Hesap motoru HENÜZ yok (`isler/hesap/`) — bu sürüm süreci anlatır ve
 * WhatsApp'a devreder. Sayı üretmez: doğrulanmamış rakam yazılmıyor.
 * Form da yok: form kişisel veri toplar, o da KVKK aydınlatma metnini gerektirir.
 *
 * Tasarım ana sayfayla aynı dil: beyaz zemin, çizgi ızgara, altı çizili eylem,
 * koyu mürekkep kapanış.
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
    metin: "Size özel, bağlayıcılığı olmayan bir değerlendirme ile dönüş yapıyoruz.",
  },
];

const WHATSAPP =
  "https://wa.me/4915256227461?text=" +
  encodeURIComponent("Merhaba, SelfCheck ile çatım için değerlendirme istiyorum.");

export default function HesaplaSayfasi() {
  return (
    <main>
      {/* ═══ Giriş ═══ */}
      <section className="mx-auto max-w-[1180px] px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-24">
        <Etiket>SelfCheck</Etiket>
        <h1 className="max-w-[20ch] text-[clamp(1.75rem,4.4vw,3rem)] font-normal leading-[1.06] tracking-[-0.034em] text-balance text-murekkep">
          Çatınıza uygun sistemi birlikte belirleyelim.
        </h1>
        <p className="mt-7 max-w-[52ch] text-[1.02rem] leading-relaxed text-murekkep-ikincil">
          Birkaç soruyla çatınızın üretebileceği enerjiyi ve uygun sistem
          büyüklüğünü çıkarıyoruz. Ücretsizdir, bağlayıcılığı yoktur.
        </p>
        <p className="mt-9">
          <Baglanti href={WHATSAPP} disari>
            WhatsApp&apos;tan başlatın
          </Baglanti>
        </p>
      </section>

      {/* ═══ Adımlar ═══ */}
      <section className="border-y border-[#e4e7e0] bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-24">
          <Beliren>
            <Etiket>Nasıl işliyor</Etiket>
          </Beliren>
          <ol className="mt-8 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {ADIMLAR.map((adim, i) => (
              <li key={adim.baslik} className={`relative belir belir-${Math.min(i, 3)}`}>
                <div className="flex items-center gap-3">
                  <span className="text-[0.78rem] font-medium tabular-nums text-marka-koyu">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#e4e7e0]" />
                </div>
                <h2 className="mt-5 text-[1.12rem] font-medium tracking-[-0.022em] text-murekkep">
                  {adim.baslik}
                </h2>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-murekkep-ikincil">
                  {adim.metin}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ Kapanış ═══ */}
      <section className="bg-murekkep">
        <div className="mx-auto max-w-[1180px] px-6 py-24 sm:px-10 sm:py-28">
          <Beliren>
            <h2 className="max-w-[18ch] text-[clamp(1.6rem,3.8vw,2.6rem)] font-normal leading-[1.08] tracking-[-0.032em] text-balance text-[#f2f8ea]">
              İlk adım bir mesaj.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.02rem] leading-relaxed text-[#cfe3bd]">
              Değerlendirme de ardından yapılan keşif de ücretsizdir; hiçbir aşamada
              ön ödeme istenmez.
            </p>
            <p className="mt-10">
              <Baglanti href={WHATSAPP} disari koyuZemin>
                WhatsApp&apos;tan başlatın
              </Baglanti>
            </p>
          </Beliren>
        </div>
      </section>
    </main>
  );
}
