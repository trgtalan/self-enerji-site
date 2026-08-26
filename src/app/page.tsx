import Link from "next/link";
import { Gunes } from "@/components/Gunes";
import { Isaret } from "@/components/Logo";

/* Açılış sahnesi. Güneş kadrajı doldurur ve alttan taşar — yönün karakteri
   kompozisyondan geliyor, o yüzden tuval tam ekran.

   Başlık metni HENÜZ KARARA BAĞLANMADI. Buradaki cümle bir öneri.
   Sayfanın geri kalanı (bölüm sırası, metinler) da açık. */

export default function AnaSayfa() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <Gunes className="absolute inset-0 block h-full w-full" />

      <div className="relative z-10 flex min-h-dvh flex-col px-6 pt-7 pb-10 sm:px-10 sm:pt-9">
        <Isaret yukseklik={44} animasyonlu />

        <div className="mt-[9vh] sm:mt-[11vh]">
          <h1 className="mx-auto w-full max-w-[16ch] text-center text-[clamp(1.75rem,5.2vw,3.25rem)] font-normal leading-[1.04] tracking-[-0.03em] text-balance text-[#26401d]">
            Güneş enerjisi, çatınıza bakarak başlar.
          </h1>

          <p className="mx-auto mt-6 w-full max-w-[46ch] text-center text-[clamp(0.95rem,1.4vw,1.0625rem)] leading-relaxed tracking-[-0.01em] text-[#4c5c45]">
            Çatınızı ve elektrik ihtiyacınızı yerinde değerlendiriyoruz; izin ve
            mevzuat süreçleriyle birlikte kurulumu anahtar teslim yürütüyoruz.
            Keşif ücretsizdir.
          </p>

          <p className="mt-7 text-center">
            <Link
              href="/hesapla"
              className="inline-block border-b border-[#26401d] pb-0.5 text-[0.9375rem] tracking-[-0.01em] text-[#26401d] transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#26401d]"
            >
              Değerlendirme sürecini görün
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
