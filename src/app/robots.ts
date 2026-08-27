import type { MetadataRoute } from "next";

/* YAYIN ÖNCESİ: site hazır olana kadar tarama kapalı. Alan adı bağlanınca
   allow: "/" yapılacak ve layout.tsx'teki `robots: { index: false }` kalkacak. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: "https://selfenerji.com/sitemap.xml",
  };
}
