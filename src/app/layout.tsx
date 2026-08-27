import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

/* Yazı tipi kararı GEÇİCİ. latin-ext alt kümesi Türkçe için zorunlu:
   ı, İ, ş, ğ, ç, ö, ü bu alt kümede. */
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selfenerji.com"),
  title: {
    default: "Çatı Üstü Güneş Enerjisi Sistemleri — Self Enerji",
    template: "%s — Self Enerji",
  },
  description:
    "Konut, apartman ve işletme çatılarına güneş enerjisi sistemleri kuruyoruz. Projelendirme, izin süreçleri, kurulum ve devreye alma tek elden. Keşif yerinde ve ücretsizdir.",
  alternates: { canonical: "/" },
  /* YAYIN ÖNCESİ: site henüz hazır değil, arama motorlarına kapalı.
     Alan adı bağlanıp içerik bitince bu satır ve robots.ts'teki disallow
     birlikte kaldırılacak. */
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="font-[family-name:var(--font-manrope)] antialiased">
        <Nav />
        {children}
        <footer className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-3 px-6 py-8 text-[0.83rem] text-[#7c8a73] sm:px-10">
          <span>SELF Mühendislik ve San. Tic. Ltd. Şti.</span>
          <span>Akdeniz, Mersin</span>
        </footer>
      </body>
    </html>
  );
}
