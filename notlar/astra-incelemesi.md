# Site incelemesi — openai.gpt-6-astra, 2026-10-11

Rol: dijital ürün stratejisti ve web tasarım direktörü. Girdi: sitenin durum belgesi. Maliyet: 0,13 USD.

## 1. TEŞHİS

- **Gelir üretecek akış henüz çalışmıyor.** SelfCheck ilk seçimde bitiyor; hesaplama, sonuç, iletişim kaydı ve satışa aktarım yok. Reklamla büyüyen bu modelde öncelik daha fazla sayfa değil, ziyaretçiyi bağlamıyla birlikte satış ekibine ulaştıran tek bir uçtan uca yol kurmak.
- **Marka, girişten değerlendirmeye geçerken kimlik değiştiriyor.** Ana sayfa sahibinin reddettiği minimalist dili, SelfCheck ise katmanlı bir ürün arayüzünü taşıyor. Premium mühendislik hizmetinde bu kopukluk, reklamdan gelen kişinin karşısında bütünlüklü bir şirket ve süreç görmesini zorlaştırır; ana sayfa rötuş değil, yeniden tasarım gerektiriyor.
- **Bilgilendirme var, karar mimarisi eksik.** Ana sayfa hizmeti anlatıyor fakat SelfCheck, keşif ve iletişim kanallarını ortak bir yolculukta birleştirmiyor; sihirbaz da apartmanla müstakil evi henüz ayırmıyor. Satış ekibinin hazırlıklı araması için yalnız telefon değil, tüketimin kime ait olduğu, çatı durumu ve başvuranın rolü gibi anlamlı bağlam gerekir.

## 2. TASARIM DİLİ

- **Yön: katmanlı, sıcak, teknik bir premium dil.** SelfCheck temel alınmalı; fakat cam efektleri çoğaltılmamalı. Açık nötr/yeşilimsi zemin, koyu yeşil ana butonlar, açık yeşil seçili durumlar; turuncu yalnız güneş ve sınırlı vurgu için kullanılmalı. Minimalist ana sayfaya geri dönülmemeli.
- **Biçim ve derinlik:** Logonun yuvarlatılmış katlarını çağrıştıran kartlar, kontrollü köşe yarıçapları, ince sınırlar ve yumuşak gölgeler. Yarı saydamlık yalnız özel yüzeylerde; form alanları opak ve okunaklı. Manrope korunabilir: güçlü başlık, rahat gövde metni, belirgin sayısal sonuç hiyerarşisi. Rastgele süsler yerine mevcut izometrik çizimler ve teknik şemalar kullanılmalı.
- **Açılış ve Hakkımızda:** Beğenilen güneş korunmalı; metin ve belirgin SelfCheck butonu güneşten bağımsız, okunaklı bir katmanda durmalı. Hakkımızda bölümü uzun bir manifesto yerine mühendislik yaklaşımı ve üç tesis kartıyla kurulmalı; kartlar SelfCheck’i ilgili seçimle açmalı.
- **SelfCheck, Süreç ve Nasıl Çalışır:** SelfCheck tanıtımı gerçek arayüz bileşenlerinden oluşan bir ürün vitrini olmalı; uydurma sonuç gösterilmemeli. Süreç, her aşamada ne yapılacağını ve sonraki adımı gösteren bağlantılı kartlara dönüşmeli. Elektrik akış şeması korunup yeni yüzey ve renk sistemiyle bütünleştirilmeli.
- **Sorular, kapanış ve gezinme:** SSS ve `/sorular` aynı kart/akordeon diline taşınmalı. Kapanış, ücretsiz keşif talebini aynı kayıt sistemine bağlamalı; WhatsApp ikincil seçenek kalmalı. SelfCheck üst çubukta hamburger dışında görünmeli. Ayrı wordmark arayışı, çalışan akışın önüne geçmemeli.

## 3. SELFCHECK

- **Akış:** Tesis tipi → tüketim → çatı → konum → sonuç. İlk seçim altında müstakil/apartman ayrımı açılmalı; apartmanda ortak alan mı bağımsız bölüm mü olduğu sorulmalı. İşletmede çalışma düzeni, diğerlerinde kullanım zamanı gibi yalnız değerlendirmeyi veya satış hazırlığını etkileyen koşullu sorular gösterilmeli.
- **Girdiler:** Tüketimde dönem ve kWh birimi açık olmalı; “bilmiyorum” yolu bulunmalı. Çatı adımında yaklaşık kullanılabilir alan, çatı tipi ve kullanım/onay durumu; konumda ön değerlendirmeye yetecek il/ilçe alınmalı. Eksik bilgi, kullanıcıyı çıkmaza sokmamalı; sonucu sınırlamalı.
- **Etkileşim:** Anlamlı ilerleme göstergesi, geri dönünce korunan yanıtlar, yerinde hata açıklamaları ve mobilde görünür devam düğmesi kullanılmalı. Kullanıcı sonuçtan girdilerini düzenleyebilmeli; hesap için iletişim bilgisi zorunlu tutulmamalı.
- **Sonucun değeri:** Hesap motorunun desteklediği ölçüde yaklaşık panel sayısı, kurulabilir güç ve yıllık üretim aralığı; yanında girdiler, varsayımlar ve belirsizlikler gösterilmeli. Ayrıca keşifte netleşecek gölgelenme, taşıyıcılık ve elektrik bağlantısı başlıkları bulunmalı. Motor veya yeterli girdi yoksa sayı yerine eksiklerin özeti verilmeli; sahte kesinlik üretilmemeli.
- **İletişim talebi:** İlk yararlı sonuç gösterildikten sonra, aynı ekranda **“Bu ön değerlendirmeyi mühendislik ekibiyle netleştirin, ücretsiz keşif planlayın”** karşılığında ad ve telefon istenmeli; aranma zamanı isteğe bağlı olmalı. E-posta, tam adres ve belge yükleme bu aşamada zorunlu olmamalı.
- **Satışa aktarım:** Kayıt; iletişim bilgisiyle birlikte yanıtları, sonucu ve reklam kaynağını taşımalı. Sunucu doğrulaması, kalıcı kayıt, ekip bildirimi, hata/tekrar deneme ve başarı ekranı kurulmalı. KVKK aydınlatması veri alınırken sunulmalı; pazarlama izni hizmet talebiyle birleştirilmemeli.

## 4. SIRALI İŞ LİSTESİ

1. **SelfCheck’in girdi–çıktı ve dallanma sözleşmesini kesinleştir** — hesap motoru, arayüz ve satışın farklı ihtiyaçlara göre gelişmesini önler.
2. **Kalan adımları, geri dönüşü ve eksik bilgi yollarını geliştir** — reklam ziyaretçisinin bugün karşılaştığı çıkmazı kaldırır.
3. **Lead kaydı, ekip bildirimi ve KVKK katmanını kur** — tamamlanan değerlendirmelerin kaybolmadan satışa ulaşmasını sağlar.
4. **Sonuç ekranını hesap motoruna ve keşif formuna bağla** — fiyat göstermeden değer üretip dönüşüm döngüsünü tamamlar.
5. **Başlangıç, adım terkleri, sonuç ve başarılı kayıt olaylarını ölç** — reklam bütçesi büyümeden gerçek darboğazları görünür kılar; iletişim bilgilerini analitiğe göndermez.
6. **SelfCheck yönünde ortak tasarım bileşenlerini oluştur** — ana sayfayı eski dile yamamak yerine bütün siteyi aynı temele taşır.
7. **Ana sayfayı bölüm bölüm yeniden kur, gezinmeyi SelfCheck merkezli yap** — reklam vaadiyle çalışan değerlendirme akışını birleştirir.
8. **`/sorular` ve doğrudan keşif yolunu ortak sisteme taşı** — yan yollarda tasarım ve kayıt kopukluğu bırakmaz.
9. **Mobil akışı ve WebGL performansını test et; hafif güneş alternatifi ekle** — görsel etki uğruna yüklenme ve form kullanımını riske atmaz.
10. **Uçtan uca kabul testi sonrası alan adı, kurumsal kimlik ve indeksleme geçişini yap** — demo koşullarını erken açmadan reklam yayınına hazır bir sistem çıkarır.

