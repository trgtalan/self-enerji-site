# Self Enerji — site

Ortak kurallar `~/.claude/CLAUDE.md` içindeki `aiw` bloğundan gelir. Burada yalnız
bu projeye özgü olan var. Satır tavanı 160.

**Kapsam:** Bu dosya sitenin kurulması ve yayına alınmasıyla ilgilenir. KVKK metni,
hesap formülleri, mevzuat araştırması gibi işler ayrı oturumlarda `isler/<konu>/`
altında üretilir; buradan okunur, burada yeniden araştırılmaz. Klasör o işe
başlarken açılır — boş klasör açılmaz.

Next'in kendi kılavuzu @AGENTS.md — `next dev` üretir, elle düzenlenmez. Sürüme
özgü API için `node_modules/next/dist/docs/` okunur; ezberden Next kodu yazılmaz.

## Ne

İşletmenin web sitesi. Yeni bir işletme değil — aynı işin yeniden kurulan sitesi.

**Eski siteden yalnız felsefe alınır, görüntü alınmaz.** Bölüm sırası, başlıklar,
hero kurgusu, kart yapısı, bileşen isimleri, metinler ve tasarım kararları
devralınmaz. `notlar/eski-site-envanteri.md` **şartname değildir**; oradan sayfa
kurulmaz.

## Felsefe — alınan tek şey

**Ne yapılıyor:** Çatıya anahtar teslim güneş enerjisi kurulumu. İzin ve mevzuat
süreçlerini işletme yürütüyor. Mahsuplaşma danışmanlığı veriliyor. Keşif yerinde
ve ücretsiz. Fiyatlandırma şeffaf. Ekipman garantili.

**Müşteri:** Öncelikle ev sahibi. Ticarethane ve sanayi sonra gelir.

**Müşterinin sitede sorduğu şeyler:** Maliyet neye göre belirlenir · Çatım uygun
mu · Hangi izinler, ne kadar sürer · Kendini ne zaman amorti eder.

Kışın/bulutlu günde üretim ve bakım soruları **siteye girmez** — bunlar satış
öncesi engel değil, keşif ve teklif aşamasının konusudur. Siteye konursa sayfa
teknik SSS'ye döner.

**Uygunluğu belirleyen:** Çatı yönü · gölgelenme · çatının yaşı ve taşıma
kapasitesi · yıllık elektrik tüketimi · elektrikli araç veya ısı pompası planı.

**Ton:** Doğrulanmamış rakam yok — kapasite, referans, kurulum sayısı, tasarruf
oranı, amorti süresi hiçbiri elde değil. Var olmayan sayfaya link kurulmaz,
"yakında" yazılmaz, yer tutucu konmaz.

**Fiyat sitede verilmez — karara bağlandı.** Premium mühendislik hizmeti satılıyor;
her sistem kendine hastır, dolayısıyla her sistemin bedeli farklıdır. Fiyat yalnız
ücretsiz keşiften sonra verilir. "Ortalama yatırım aralığı", "başlangıç paketi" ve
benzeri fiyat çapası önerileri **reddedildi**, tekrar önerilmez.

## Marka — karara bağlandı

**Y6 yönü** (25 Ağustos 2026): yuvarlatılmış origami. Üç kat ve hareket korundu,
köşelere yarıçap verildi. Üst kattaki teal kasıtlı bir renk kararı.

Renkler logodan ölçüldü, seçilmedi. `globals.css` içinde `@theme`:
`--color-marka-teal` `#12494e` · `--color-marka-yesil` `#5aa03a` ·
`--color-marka-acik` `#a8e87f`.

Varlıklar `public/marka/`: `self-isaret.svg`, `self-isaret-tek-renk.svg`
(`currentColor` — kaşe ve tek renk baskı), `self-ikon.svg`. Favicon
`src/app/icon.svg`. Bileşen `src/components/Logo.tsx` — `Isaret` ve `Kilit`.
Açılma animasyonu üç katı sırayla açar; `prefers-reduced-motion` açıkken durur.

## Tasarım sistemi — `DESIGN.md`

BlueYard Capital referansı, kullanıcı tarafından verildi. **Beyaz tuval,
Instrument Sans, sıfır köşe yarıçapı, gölge yok, renkli buton yok** — eylemler
altı çizili metin bağlantısıdır.

**Mürekkep grafit değil koyu yeşil.** DESIGN.md `#3a3a3e` diyor; kullanıcı kararıyla
`#26401d` oldu, ikincil metin `#4c5c45`. Şu an `page.tsx` içinde sabit hex olarak
duruyor — `@theme` belirtecine taşınacak.

## Açılış görseli — karara bağlandı

**B yönü** (26 Ağustos 2026): BlueYard okuması. `src/components/Gunes.tsx` — WebGL
fragment shader, kütüphane ve görsel dosyası yok.

Yönü tanımlayan üç karar:

1. **Küre kadrajın altında oturur ve taşar.** Karakter kompozisyondan geliyor —
   küçük karede anlaşılmaz.
2. **Yüzey doku değil parçacık serpintisi.** Zerreler adalar hâlinde toplanır,
   limbe doğru yoğunlaşır.
3. **Diskin sert sınırı yok.** Gövde söner, zerreler dışarı saçılır.

BlueYard'ın küresinden **alınmayan** şey: o ışık alan bir cisim. Bu ışık veren bir
cisim — limb darkening yerinde, merkez sıcak.

**Zemin saf beyaz değil**, aşağı doğru hafifçe şeftaliye döner. Beyazdan tek sapma
bu, geri alınabilir. Hareket azaltma tercihinde tek kare çizilir.

Elenen yönler, tekrar önerilmez: gerçekçi plazma (A), litografi (L), hasat
(H — kenar marka yeşiline sönüyor), koyu zeminde yeşil gezegen, Canvas 2D güneş.

## Hero — kuruldu, metni geçici

Tam ekran güneş + işaret + başlık + alt metin + `/hesapla` bağlantısı.
**Metin karara bağlanmadı** — oradaki cümleler öneri. Ev fotoğrafı yok.

## `/hesapla` — bilinen borç

Sayfa var, **hesap yapmıyor**: süreci dört adımda anlatıp WhatsApp'a devrediyor.
Form yok — form kişisel veri toplar, o da KVKK metnini gerektirir.

**Tasarım sistemine uymuyor.** Koyu zemin (`bg-zemin-koyu`), `rounded-full` /
`rounded-2xl` köşeler ve dolu renkli buton kullanıyor; üçü de DESIGN.md'ye aykırı.
Ana sayfa yeni dile geçti, bu sayfa eski dilde kaldı. Ana sayfa bitince düzeltilir.
`--color-zemin-koyu` belirteci yalnız burada yaşıyor.

Sihirbaz, hesap mantığı ve sonuç ekranı sonra gelir; o gün KVKK, girdi doğrulama
ve hız sınırı maddeleri birlikte açılır.

## Açık kalanlar — karar kullanıcınındır

1. **Ana sayfanın kurgusu ve metni.** Sıradaki iş.
2. **Yazı tipi.** DESIGN.md Instrument Sans diyor; şu an Manrope yüklü. Türkçe için
   `latin-ext` alt kümesi zorunlu.
3. **`/hesapla`'nın yeni tasarım diline taşınması.**

## Yayın

**Canlı: https://self-enerji-site.vercel.app** — Vercel, GitHub `main` dalına bağlı.
Her `push` otomatik derlenip yayına gider. Her bölüm kendi commit'i ile.

İlk deploy 25 Ağustos 2026'da boş iskeletle yapıldı; build komutu, çalışma zamanı
sürümü, HTTPS, 308 yönlendirmesi ve güvenlik başlıkları orada doğrulandı. Üretim
CSP'sinde `unsafe-eval` yok.

**Esneklik maddesi henüz düşmedi.** Ortak `CLAUDE.md`'deki süreli madde "ilk sürüm
yayına girdiğinde" düşer. Yayında olan Hero'dan ibaret; ilk sürüm değil.

## Bu projede karşılığı olmayanlar

Ayrı API, veri deposu, Supabase/Firebase, giriş/yetki ve form **yok**. Bu yüzden
CORS, RLS ve arayüzde yetki kontrolü için önlem yazılmadı — olmayan sistemin bakımı
üstlenilmez. **Hesaplayıcı geldiğinde bu madde yeniden açılır:** o an sunucu tarafı
hesap, girdi doğrulama ve hız sınırı gerekir.

## KVKK — ertelendi

Aydınlatma metni yok. **Tetiği: iletişim formu yayına girdiğinde.** Analitik
eklenirse çerez onayı da gerekir. Ondan önce siteye eklenmez.

## Firma kimliği

**SELF Mühendislik ve San. Tic. Ltd. Şti.** — Akdeniz/Mersin.

Referans ve rakam yokken güven buradan kurulur: gerçek unvan, gerçek yer, gerçek
muhatap. Üç bağımsız model incelemesi de aynı boşluğu işaret etti.

**Kişi adı sitede görünmez** — yalnız unvan. Kullanıcı kararı.

**Eksik:** açık adres, hizmet bölgesinin sınırı (yalnız Mersin mi, çevre iller de
mi), sabit telefon. Yer tutucu konmaz.

## İletişim kanalları

Bilinen: WhatsApp `wa.me/4915256227461`, e-posta `trgtalan@gmail.com`. WhatsApp öne
çıkarılmıyor. Telefon, adres ve Instagram yok; bilgi geldiğinde eklenir.
