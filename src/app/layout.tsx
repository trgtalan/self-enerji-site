import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
      <body className="font-[family-name:var(--font-manrope)] antialiased">{children}</body>
    </html>
  );
}
