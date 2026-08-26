# Self Enerji — site

Ortak kurallar `~/.claude/CLAUDE.md` içindeki `aiw` bloğundan gelir. Burada yalnız
bu projeye özgü olan var. Satır tavanı 160.

**Kapsam:** Bu dosya sitenin kurulması ve yayına alınmasıyla ilgilenir. KVKK metni,
hesap formülleri, mevzuat araştırması gibi işler ayrı oturumlarda `isler/` altındaki
konu klasörlerinde üretilir; buradan okunur, burada yeniden araştırılmaz. Her
klasörde ne yapılacağını anlatan bir `CLAUDE.md` var. Açık işler: `isler/hesap/`,
`isler/kvkk/`, `isler/mevzuat/`, `isler/rapor/`.

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
ve ücretsiz. Ekipman garantili. **Müşteri:** öncelikle ev sahibi; ticarethane ve
sanayi sonra.

**Sitede cevaplanan sorular:** Maliyet neye göre belirlenir · Çatım uygun mu ·
Hangi izinler, ne kadar sürer · Kendini ne zaman amorti eder. Kışın/bulutlu günde
üretim ve bakım soruları **siteye girmez** — satış öncesi engel değil, keşif ve
teklif aşamasının konusu; sayfa yoksa teknik SSS'ye döner.

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
köşelere yarıçap verildi.

**C renkleri** (26 Ağustos 2026): sıcak yeşil. Üst kattaki teal `#12494e` güneşin
turuncusuyla çatıştığı için bırakıldı; üç kat da aynı yeşil ailesinden.
`--color-marka-koyu` `#4a7c2f` · `--color-marka-yesil` `#7fb843` ·
`--color-marka-acik` `#c3e57a`.

Sayfada `Kilit` kullanılır — işaret **ve** firma adı birlikte. Yalnız `Isaret`
kullanmak markayı adsız bırakır.

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
fragment shader, kütüphane ve görsel dosyası yok. Üç karar: küre kadrajın altında
oturup taşar · yüzey doku değil parçacık serpintisidir · diskin sert sınırı yoktur.
Ayrıntı ve gerekçeler bileşenin kendi yorumlarında.

BlueYard'ın küresinden **alınmayan** şey: o ışık alan bir cisim. Bu ışık veren bir
cisim — limb darkening yerinde. **Zemin saf beyaz değil**, aşağı doğru hafifçe
şeftaliye döner; beyazdan tek sapma bu ve geri alınabilir.

Elenen yönler, tekrar önerilmez: gerçekçi plazma (A), litografi (L), hasat (H),
koyu zeminde yeşil gezegen, Canvas 2D güneş.

## Ana sayfa — kuruldu, metni geçici

Yedi bölüm: açılış → firma → **sistem şeması** → süreç → maliyet → SelfCheck →
keşif/iletişim.

**SelfCheck sayfanın konusu değil, bir bölümü.** Sıra üç bağımsız model
incelemesiyle doğrulandı: araç geriye, keşif talebi öne. Kapanışın eylemi keşif
talebidir, araç değil.

Görsel elemanlar — fotoğraf olmadığı için hepsi çizim ve yapı: `SistemSemasi.tsx`
(güneşten şebekeye enerji yolu, akış animasyonlu), dört sütunlu kapsam ızgarası,
numaralı süreç ızgarası, maliyet değişkenleri tablosu, SelfCheck arayüz önizlemesi,
tam genişlik yeşil kapanış yüzeyi.

`Beliren` kaydırmayla belirme sağlar — **CSS `animation-timeline: view()`, JS yok.**
IntersectionObserver ile yapılsaydı içerik JS gelene kadar görünmezdi; desteklemeyen
tarayıcıda içerik doğrudan görünür kalıyor.

**Metin karara bağlanmadı** — cümleler öneri. Ev fotoğrafı yok.

Hero'da güneş kadrajın alt yarısında durur (`MY = -0.30H`, `R = max(0.54W, 0.60H)`);
korona `r≈1.3`'e taştığı için daha yukarıda konumlanırsa metin turuncu zemine düşer.

**Tema light, zemin açıkça boyanır.** `globals.css` içinde `html{color-scheme:light}`
ve `body{background:#fff}`. Tanımsız bırakılırsa tarayıcı koyu temayı seçiyor ve
sayfa okunmaz hâle geliyor — bir kez yaşandı.

## `/hesapla` — bilinen borç

Sayfa var, **hesap yapmıyor**: süreci dört adımda anlatıp WhatsApp'a devrediyor.
Form yok. **Tasarım sistemine de uymuyor** — koyu zemin, yuvarlak köşeler ve dolu
renkli buton kullanıyor; üçü de DESIGN.md'ye aykırı. Ana sayfa yeni dile geçti, bu
sayfa eskide kaldı. `--color-zemin-koyu` belirteci yalnız burada yaşıyor.

## Açık kalanlar — karar kullanıcınındır

1. **Ana sayfanın kurgusu ve metni.** Sıradaki iş.
2. **Yazı tipi.** DESIGN.md Instrument Sans diyor; şu an Manrope yüklü. Türkçe için
   `latin-ext` alt kümesi zorunlu.
3. **`/hesapla`'nın yeni tasarım diline taşınması.**

## Yayın

**Canlı: https://self-enerji-site.vercel.app** — Vercel, GitHub `main` dalına bağlı;
her `push` yayına gider. İlk deploy 25 Ağustos 2026'da boş iskeletle yapıldı ve build
komutu, çalışma zamanı sürümü, HTTPS, 308 yönlendirmesi ve güvenlik başlıkları orada
doğrulandı. Üretim CSP'sinde `unsafe-eval` yok.

**Esneklik maddesi henüz düşmedi** — ortak `CLAUDE.md`'deki süreli madde ilk sürüm
yayına girdiğinde düşer; SelfCheck çalışmadan ilk sürüm sayılmaz.

## Bugün olmayanlar

Ayrı API, veri deposu, giriş/yetki ve form **yok**; bu yüzden CORS, RLS ve yetki
kontrolü için önlem yazılmadı. **SelfCheck geldiğinde hepsi açılır:** sunucu tarafı
hesap, girdi doğrulama, hız sınırı, KVKK metinleri (`isler/kvkk/`), Maps anahtarı
kısıtı ve CSP genişletmesi.

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
