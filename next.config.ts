import type { NextConfig } from "next";

const gelistirme = process.env.NODE_ENV === "development";

/**
 * Güvenlik başlıkları — tüm yollara uygulanır.
 * Bilinen taviz: script-src ve style-src'de 'unsafe-inline' var. Next kendi
 * önyükleme betiğini satır içi gömüyor; nonce'a geçmek middleware gerektiriyor.
 * Statik pazarlama sitesinde kullanıcı girdisi sayfaya basılmadığı için XSS
 * yüzeyi yok denecek kadar küçük. Hesaplayıcı geldiğinde bu taviz yeniden ele alınır.
 */
const guvenlikBasliklari = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: blob:",
      "style-src 'self' 'unsafe-inline'",
      // 'unsafe-eval' YALNIZ geliştirmede: React dev modunda çağrı yığınını
      // yeniden kurmak için eval() kullanıyor. Üretim derlemesinde kullanmıyor.
      `script-src 'self' 'unsafe-inline'${gelistirme ? " 'unsafe-eval'" : ""}`,
      "font-src 'self'",
      // dev sunucusu HMR icin websocket aciyor
      `connect-src 'self'${gelistirme ? " ws: http://localhost:*" : ""}`, // kontrol:atla — dal yalnız geliştirmede
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  headers() {
    return Promise.resolve([{ source: "/(.*)", headers: guvenlikBasliklari }]);
  },
};

export default nextConfig;
