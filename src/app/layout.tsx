import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Self Enerji",
  description:
    "Çatınız için anahtar teslim güneş enerjisi kurulumu — keşif, izin süreçleri ve mahsuplaşma danışmanlığı.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
