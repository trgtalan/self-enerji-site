# SEO incelemesi — openai.gpt-5.6-sol, 2026-08-27

Rol: teknik SEO uzmanı. Girdi: sayfa metinleri, metadata, başlık hiyerarşisi, teknik durum.
Maliyet: 0,33 USD (iki çağrı; ilki token sınırına takıldı).

## 1. Teknik eksikler — önem sırası

> Bunların hiçbiri tek başına “sıralama artışı” sağlamaz; asıl etki indeksleme ve sinyal bütünlüğüdür.

1. **Canonical — yüksek öncelik:** Geçici Vercel adresi ile yeni alan adı arasındaki sinyallerin bölünmesini ve yinelenen URL riskini önler.
2. **Sitemap — orta öncelik:** Üç sayfalık site zaten taranabilir; yine de keşfi, Search Console takibini ve yeni sayfaların indekslenmesini kolaylaştırır.
3. **JSON-LD — orta/düşük:** Doğrudan sıralama sinyali değildir; `LocalBusiness` işletmeyi anlamlandırır, `FAQPage` ise artık çoğu ticari sitede zengin sonuç garantilemez.
4. **robots.txt — düşük:** Dosyanın olmaması taramayı engellemez; esas faydası sitemap adresini bildirmek ve ileride yanlış engellemeleri kontrol etmektir.
5. **metadataBase — teknik bağımlılık:** Kendi başına SEO sinyali değildir; Next.js’in canonical ve sosyal URL’leri doğru, mutlak adreslerle üretmesini sağlar.
6. **Open Graph/Twitter — SEO açısından süs:** Organik sıralamayı etkilemez; yalnızca WhatsApp ve sosyal medya paylaşım görünümünü iyileştirir.

**Not:** Mevcut genel `<title>Self Enerji</title>`, yukarıdaki eksiklerin çoğundan daha ciddi bir arama görünürlüğü sorunudur.

---

## 2. Hedef sorgular

- Mersin çatı üstü GES kurulumu
- Mersin güneş paneli kurulumu
- Mersin işletme çatısı GES kurulumu
- Mersin apartman güneş enerjisi kurulumu
- Akdeniz Mersin GES firması

---

## 3. Yapı

- **SSS’yi tamamen ayrı sayfaya taşımak yanlış; hibrit yapı doğru.**
- Ana sayfada 4–6 kritik soru ve kısa cevap kalmalı; `/sorular` tüm yanıtların merkezi olmalı.
- Aynı cevapları iki sayfada birebir çoğaltmayın; ana sayfada özetleyip ayrıntıya bağlantı verin.
- **Konut/apartman ile işletme ayrı hizmet sayfalarında olmalı.**
- Ana sayfa iki kitleyi özetlemeli; `/konut-apartman-ges` ve `/isletme-cati-ges` farklı ihtiyaç, izin ve tüketim niyetlerini hedeflemeli.
- `/sorular` sayfasındaki sorular `h3` değil, `h1` altındaki `h2` olmalı.

---

## 4. Başlık hiyerarşisi

- Mevcut H1 anlamsal olarak kabul edilebilir; fakat **Mersin** ve **kurulum** niyetini taşımadığı için SEO açısından zayıf.
- Tam H1:

**Mersin’de Çatı Üstü Güneş Enerjisi (GES) Kurulumu**

- Mevcut “projelendirmeden devreye almaya” ifadesini H1 altındaki destek metnine taşıyın.

---

## 5. Alan adı

- **Otomatik bir Google cezası yok; fakat vercel.app üzerinde kalmak ticari ve SEO açısından pahalıdır.**
- Geçici adreste oluşan indeks, bağlantı ve kullanıcı sinyalleri daha sonra taşınmak zorunda kalır.
- Marka güveni, tıklama oranı ve reklam açılış sayfası algısı zayıflar.
- **Aciliyet: kritik — reklam veya indeksleme büyümeden, tercihen hemen alınmalı.**
- Özel alan adı birincil yapılmalı; tüm `vercel.app` URL’leri karşılıklarına kalıcı `308/301` ile yönlendirilmelidir.

---

## 6. İlk 30 gün

1. **Alan adını alın:** Vercel’de birincil yapın, HTTPS’i doğrulayın ve Vercel alt alan adını kalıcı yönlendirin.
2. **Metadata’yı düzeltin:** `metadataBase`, sayfa bazlı title/description ve kendine referans veren canonical ekleyin.
3. **Tarama altyapısını kurun:** `sitemap.ts`, `robots.ts`, Search Console Domain Property ve sitemap gönderimini tamamlayın.
4. **Sayfa yapısını ayırın:** Mevcut metinlerle konut/apartman ve işletme hizmet sayfalarını oluşturup ana sayfadan bağlayın.
5. **SSS yapısını düzeltin:** Ana sayfada özet bırakın, `/sorular` sayfasında soruları `h2` yapın ve tekrarları azaltın.
6. **Yapısal veri ekleyin:** Yalnız görünür ve doğrulanmış bilgilerle `LocalBusiness`, alt sayfalarda `BreadcrumbList`, uygun SSS içeriğinde `FAQPage` kullanın.
7. **Yerel görünürlük ve performansı başlatın:** Google Business Profile doğrulamasını başlatın; mobil PageSpeed’de WebGL’nin LCP/INP etkisini ölçüp yalnız sorun varsa hafifletin.

