import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const kok = "https://selfenerji.com";
  return [
    { url: kok, changeFrequency: "monthly", priority: 1 },
    { url: `${kok}/hesapla`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${kok}/sorular`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
