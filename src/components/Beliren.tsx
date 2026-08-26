/**
 * Görünür alana girince beliren sarmalayıcı — CSS scroll-driven animation.
 *
 * JS kullanılmıyor: IntersectionObserver ile yapılsaydı içerik JS gelene kadar
 * görünmez olurdu (SEO ve erişilebilirlik sorunu). Burada animasyon
 * desteklenmeyen tarayıcıda içerik doğrudan görünür kalır — bozulma yok.
 *
 * Hareket azaltma tercihinde animasyon hiç tanımlanmaz.
 */
export function Beliren({
  children,
  gecikme,
  className = "",
}: {
  children: React.ReactNode;
  /** 0-3 arası kademe; ızgarada sıralı belirme için */
  gecikme?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const kademe = gecikme ? ` belir-${gecikme}` : "";
  return <div className={`belir${kademe} ${className}`}>{children}</div>;
}
