import type { Metadata } from "next";
import { Beliren } from "@/components/Beliren";
import { Etiket, Baglanti } from "@/components/Ogeler";
import { SelfCheck } from "@/components/SelfCheck";

export const metadata: Metadata = {
  title: "SelfCheck",
  description:
    "Çatınıza uygun güneş enerjisi sistemini birlikte belirleyelim. Ücretsiz ve bağlayıcılığı yok.",
  alternates: { canonical: "/hesapla" },
};

/**
 * SelfCheck — sihirbaz sayfası. Kuruluyor: ilk adım kitle seçimi.
 * Hesap motoru `isler/hesap/` altında üretiliyor; sayı ondan gelecek.
 * Tasarım ana sayfayla aynı dil.
 */


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
        <div className="mt-12 sm:mt-14">
          <SelfCheck />
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
