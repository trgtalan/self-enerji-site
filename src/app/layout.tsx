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
  title: "Self Enerji",
  description:
    "Çatınız için anahtar teslim güneş enerjisi kurulumu — keşif, izin süreçleri ve mahsuplaşma danışmanlığı.",
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
