# Proje envanteri — Self Enerji

İşletmenin amacı ve içeriği — metin, sekme yapısı, bölüm isimleri, hero
animasyonu, hesaplama akışının tarifi. Kod, komut veya talimat dosyası
içermez; bunlar ayrıca da alınmayacak, çünkü bayat.

## Şimdi kurulmayacaklar — zaten karara bağlı, yeniden sorulmaz

BASLA.md kuralı: **ilk sürüm sayı içermeden kurulur.** Bu envanterdeki iki
parça sayı/hesap üretiyor, o yüzden şimdi kurulmuyor:

- HowItWorks → *Örnek Hesaplama* sekmesi (4.000 kWh / 6 kWp / 6.000 kWh).
- Hesaplama akışı bölümünün tamamı (`/hesapla` — SelfCheck sihirbazı ve
  sonuç ekranı).

**Hesaplayıcıya bağlanan her öğe onunla birlikte ertelenir.** Var olmayan
sayfaya link kurulmaz, "yakında" yazısı da konmaz. Bunlar şimdi kurulmuyor:
Header menüsündeki *Hesaplayıcı*, IntroCards'ın *Tasarrufunu hesapla* kartı,
Hero ve FinalCta'daki hesaplayıcı çağrıları. Hesaplayıcı geldiğinde hepsi
birlikte gelir.

**Referanslar da şimdi kurulmuyor:** işletmeye ait referans verisi henüz
derlenmedi. Menüdeki *Referanslar* öğesi bu yüzden yok.

Geri kalan her şey — bölüm sırası, Hero, IntroCards'ın diğer iki kartı,
HowItWorks'ün diğer iki sekmesi, WhyUs, Faq, FinalCta, Footer — şimdi
kurulur. Sırayla ilerlenir, hangisinden başlanacağı ek soru gerektirmez.

## Bölüm isimleri (ana sayfa sırası)

Header → HeroSahne → IntroCards → HowItWorks → WhyUs → Faq → FinalCta → Footer

Header menüsü — dördü de tanımlı: *Hizmetler* (sayfa içi, WhyUs bölümüne),
*Hesaplayıcı* (hesaplayıcı sayfasına), *Referanslar* (ayrı sayfa),
*İletişim* (ayrı sayfa).

Şimdi kurulan menü, hedefi var olan iki öğeden ibaret: **Hizmetler · İletişim.**

## Hero — "SelfCheck" carousel

İki slayt, sadece elle geçiş (otomatik yok): sol/sağ ok + alttaki noktalar.

**Slayt 1 — marka:** animasyonlu logo + başlık + CTA, koyu zemin.
> İhtiyacınız olan güneş enerjisi gücünü **SelfCheck** ile anında öğrenin.
> Evinize özel tasarruf ve sistem büyüklüğü — birkaç adımda, ücretsiz.
> [SelfCheck'i başlat →]

**Slayt 2 — kanıt:** tam ekran ev fotoğrafı, metinsiz.

**Açık nokta — kararı bekliyor.** Slayt 1'in başlığı da CTA'sı da hesaplayıcıya
dayanıyor. Hesaplayıcı ertelendiğinde bu slaytın söyleyecek sözü kalmıyor.
İki yol var, seçim kullanıcınındır: ya hesaplayıcı ilk sürüme girer, ya da
slayt 1'e hesaplayıcıdan bağımsız yeni bir başlık ve CTA (keşif talebi)
yazılır. Bu seçilene kadar Hero kurulmaz.

### Logo animasyonu

SVG "akan kurdele": logonun ana çizgisi kısa bir sürede (~2 saniye) baştan
sona çizilerek belirir, sayfa açılışında bir kez ve sonra her 10 saniyede
bir kendiliğinden tekrar eder (tıklama yok). "SELF" harfleri ayrıca
çizilerek belirir. Hareketi azaltma tercihi açık olan kullanıcıda animasyon
oynamaz, logo son hâliyle durur.

## IntroCards — 3 giriş kartı

1. **Güneş enerjisini anla** → "Nasıl çalışır" (sayfa içi `#nasil-calisir`)
2. **Tasarrufunu hesapla** → "Ücretsiz hesapla" (hesaplayıcıya link)
   — *şimdi kurulmuyor, hesaplayıcıyla birlikte gelir*
3. **Uzmana danış** → "Teklif iste" (`/iletisim`)

Her kartın arkasında konusuna uygun hafif CSS animasyonu: dönen güneş,
yükselen ₺ işareti ve altın para, yayılan sinyal halkası.

## HowItWorks — sekme yapısı

Üç sekme: **Nasıl Çalışır?** · **Örnek Hesaplama** · **Kontrol Listesi**

- *Nasıl Çalışır?*: "Bir güneş enerjisi sistemiyle kendi elektriğinizi
  doğrudan çatınızda üretirsiniz..." + ev illüstrasyonu.
- *Örnek Hesaplama* **(şimdi kurulmuyor — sayı içeriyor)**: "Yıllık 4.000 kWh
  tüketen bir ev, 6 kWp'lik bir sistemle yılda yaklaşık 6.000 kWh üretim
  yapabilir..."
- *Kontrol Listesi*: çatı yönü / gölgelenme / çatı yaşı-kapasitesi / yıllık
  tüketim / elektrikli araç-ısı pompası planı — 5 madde.

## WhyUs — 6 neden

Anahtar teslim kurulum · İzin ve mevzuat süreçleri · Mahsuplaşma
danışmanlığı · Kaliteli ekipman ve garanti · Yerinde ücretsiz keşif ·
Şeffaf fiyatlandırma. (Her biri ikon + başlık + tek cümle.)

## Faq — 6 soru

Maliyet ne kadar · Çatı uygun mu · Kış/bulutlu günde üretim var mı · Hangi
izinler ne kadar sürer · Bakım gerekir mi · Amorti süresi ne kadar.
(Cevaplar sayı içermez, genel bilgilendirme niteliğinde.)

## FinalCta — kapanış bandı

Hero ile aynı koyu zemin; sayfayı boşlukta bitirmemek için tek güçlü çağrı.

> Çatınızın potansiyelini **bugün** öğrenin.
> Doğrudan bize yazın — size özel, bağlayıcılığı olmayan bir teklif hazırlayalım.
> [WhatsApp'tan yazın]

Buradaki ikinci buton (hesaplayıcıya giden "Ücretsiz Hesapla") hesaplayıcıyla
birlikte gelir; şimdi tek buton kurulur.

## Hesaplama akışı (`/hesapla`) — şimdi kurulmuyor, sayı üretiyor

**Giriş ekranı — SelfCheckIntro, 4 adım anlatımı:**
SelfCheck'i Başlatın → Kişisel Bilgilerinizi Girin → Raporunuz Hazırlanıyor
→ Arama Bekleyin.

**Sihirbaz adımları (dinamik, çatı tipine göre):**
tesisTipi → konum → tüketim → sözleşme gücü → çatıTipi → çatıAlanı →
(eğimliyse) çatıEğimi → çatıYönü

- **tesisTipi**: Mesken / (muhtemelen Ticarethane/Sanayi — ikon: Home,
  Building2, Briefcase, Factory) — "Kurulum yapılacak alan için tesis
  tipinizi seçin."
- Sonuçta: sistem gücü (kWp), panel sayısı, tahmini yıllık üretim, karşılama
  oranı. Ticarethane/sanayi için ayrıca mali fayda (öz tüketim tasarrufu +
  şebekeye satış geliri, ₺).
- Sonuç WhatsApp'a paylaşılabilir metin olarak hazırlanıyor; ticari/sanayi
  sonuçlar ayrı bir rapor sayfasına yönleniyor.

**Hesaplamanın ne yaptığının tarifi:** Kullanıcının verdiği konum ve çatı
bilgisinden (yön, eğim, alan) o çatının güneşten yılda ne kadar elektrik
üretebileceği tahmin ediliyor. Bu tahmin, kullanıcının girdiği yıllık
tüketimle karşılaştırılıp ihtiyacı karşılayacak sistem büyüklüğü (kaç kWp,
kaç panel) ve tüketimin yüzde kaçının karşılanacağı bulunuyor. Ticari/sanayi
kullanıcılar için ayrıca, üretilen enerjinin ne kadarının kendi tüketiminde
kullanılıp ne kadarının şebekeye satılacağı üzerinden yıllık parasal fayda
hesaplanıyor. Bu, sabit bir metin değil; girdiye göre değişen bir hesaptır —
taşınacaksa hesaplayan bir mekanizma (form + hesap mantığı) olarak
kurulması gerekir, salt kopyalanacak metin olarak değil.

## Footer / İletişim

Bilinen: WhatsApp `wa.me/4915256227461`, e-posta `trgtalan@gmail.com`.

Bilinmeyen: telefon, açık adres, Instagram — henüz yok. Footer bu ikisiyle
kurulur, diğer kanallar için yer tutucu konmaz, o kanallar sayfada
görünmez. Bilgi geldiğinde eklenir.

## Not

Bu dosya okuma ve çıkarma işidir, tasarım kararı değildir. Hangi bölümün
yeni projede kullanılacağı, hangisinin atlanacağı senin kararın.
