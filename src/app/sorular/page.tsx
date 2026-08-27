import type { Metadata } from "next";
import Link from "next/link";
import { Sorular } from "@/components/Sorular";

export const metadata: Metadata = {
  title: "Sorular — Self Enerji",
  description:
    "Çatı üstü güneş enerjisi kurulumu hakkında en çok sorulanlar: gereken çatı alanı, izin süreçleri, mahsuplaşma, ömür ve bakım.",
};

/** Sık sorulanlar — ana sayfadan ayrıldı, menüden erişiliyor. */
export default function SorularSayfasi() {
  return (
    <main className="mx-auto max-w-[1180px] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24">
      <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.11em] text-[#7c8a73]">
        Sık sorulanlar
      </p>
      <h1 className="max-w-[22ch] text-[clamp(1.7rem,4vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.032em] text-balance text-murekkep">
        Kurulum öncesi en çok sorulanlar.
      </h1>
      <p className="mt-6 max-w-[56ch] text-[1.02rem] leading-relaxed text-murekkep-ikincil">
        Konut sahibiyle atölye sahibi aynı şeyleri sormuyor; sorular iki başlık
        altında ayrıldı. Aradığınızı bulamazsanız keşif talebinde sorabilirsiniz.
      </p>

      <Sorular />

      <div className="mt-16 border-t border-[#e4e7e0] pt-10">
        <p className="text-[1.02rem] leading-relaxed text-murekkep-ikincil">
          Çatınızın uygunluğunu yerinde değerlendirelim. Keşif de ardından
          hazırlanan teklif de tümüyle ücretsizdir.
        </p>
        <p className="mt-6">
          <Link
            href="/#iletisim"
            className="inline-block border-b border-murekkep pb-0.5 text-[1rem] tracking-[-0.01em] text-murekkep transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep"
          >
            Ücretsiz keşif talep edin
          </Link>
        </p>
      </div>
    </main>
  );
}
