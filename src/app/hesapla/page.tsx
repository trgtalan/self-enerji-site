import type { Metadata } from "next";
import { SelfCheck } from "@/components/SelfCheck";

export const metadata: Metadata = { title: "SelfCheck", description: "Çatınıza uygun güneş enerjisi sistemini birlikte belirleyelim. Ücretsiz ve bağlayıcılığı yok.", alternates: { canonical: "/hesapla" } };

export default function HesaplaPage() {
  return <SelfCheck />;
}
