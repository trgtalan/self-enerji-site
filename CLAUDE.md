# Self Enerji — site

Ortak kurallar `~/.claude/CLAUDE.md` içindeki `aiw` bloğundan gelir. Burada yalnız
bu projeye özgü olan var.

Next'in kendi ajan kılavuzu: @AGENTS.md — `next dev` tarafından üretilir ve
güncellenir, elle düzenlenmez. Sürüme özgü API bilgisi için
`node_modules/next/dist/docs/` okunur; ezberden Next kodu yazılmaz.

## Ne

İşletmenin web sitesi. Yeni bir işletme değil — aynı işin yeniden kurulan sitesi.

**Eski siteden yalnız felsefe alınır, görüntü alınmaz.** Kaynak kod, `.claude/`
klasörü, talimat dosyaları, bölüm sırası, bileşen isimleri, metinler ve tasarım
kararları kopyalanmaz. `notlar/eski-site-envanteri.md` **şartname değildir** —
yalnızca işletmenin ne yaptığını hatırlatan bir kayıttır; oradan sayfa kurulmaz.

## Felsefe — alınan tek şey

İşin kendisi hakkında doğru olan, tasarımdan bağımsız duran maddeler:

**Ne yapılıyor:** Çatıya anahtar teslim güneş enerjisi kurulumu. İzin ve mevzuat
süreçleri işletme tarafından yürütülüyor. Mahsuplaşma danışmanlığı veriliyor.
Keşif yerinde ve ücretsiz. Fiyatlandırma şeffaf. Ekipman garantili.

**Müşteri kim:** Öncelikle ev sahibi. Ticarethane ve sanayi sonra gelir.

**Müşterinin gerçekte sorduğu şeyler:** Maliyeti ne kadar · Çatım uygun mu ·
Kışın ve bulutlu günde üretim olur mu · Hangi izinler, ne kadar sürer ·
Bakım gerekir mi · Kendini ne zaman amorti eder.

**Uygunluğu belirleyen şeyler:** Çatı yönü · gölgelenme · çatının yaşı ve taşıma
kapasitesi · yıllık elektrik tüketimi · elektrikli araç veya ısı pompası planı.

**Ton:** İlk sürümde doğrulanmamış rakam yok. Kapasite, referans ve kurulum
sayısı verisi henüz derlenmedi.

**İletişim:** WhatsApp ve e-posta. Telefon, adres ve Instagram henüz yok;
yer tutucu konmuyor.

Bunun dışındaki her şey — bölüm sırası, başlıklar, hero kurgusu, kart yapısı,
sekmeler, "SelfCheck" adı — **eski sitenin görüntüsüdür ve devralınmaz.**

## Görev dağılımı

**Kullanıcı:** neyin doğru, gerekli ve yeterli olduğuna karar verir. İşletmeye ait
gerçek veri (kapasite, referans, kurulum sayısı) ondadır — ama bu veri henüz derlenmedi
ve ilk sürüm için gerekli değil.

**Asistan:** yazar, koşturur, ölçer. Karar vermez, önden tasarlamaz.

## İlk sürümün kapsamı

**Sayfa yapısı henüz kararsız.** Eski envanterdeki sıra (Header → Hero →
IntroCards → HowItWorks → WhyUs → Faq → FinalCta → Footer) devralınmadı;
yeni yapı yukarıdaki felsefeden kurulacak.

Değişmeyen kısıt: **ilk sürümde doğrulanmamış rakam yok.** Hesap üreten her
şey ertelendi. Referanslar da ertelendi — veri derlenmedi. Var olmayan sayfaya
link kurulmaz, "yakında" yazısı konmaz.

## Marka — karara bağlandı

**Y6 yönü onaylandı** (25 Ağustos 2026): yuvarlatılmış origami. Mevcut logonun üç
katı ve hareketi korundu, köşelere yarıçap verildi, keskin uç kaldırıldı. Üst
kattaki teal atılmadı — kasıtlı bir renk kararına dönüştü.

Renkler logodan ölçüldü, seçilmedi. `globals.css` içinde `@theme` belirteçleri:

| | |
|---|---|
| `--color-marka-teal` | `#12494e` — üst kat, koyu metin |
| `--color-marka-yesil` | `#5aa03a` — orta kat |
| `--color-marka-acik` | `#a8e87f` — alt kat |
| `--color-zemin-koyu` | `#0d2f33` — Hero zemini, teal'den türetildi |

Varlıklar: `public/marka/self-isaret.svg` (tam renk), `self-isaret-tek-renk.svg`
(`currentColor` — kaşe, tek renk baskı), `self-ikon.svg` (kap sürümü).
Favicon `src/app/icon.svg`. Bileşen: `src/components/Logo.tsx` — `Isaret` ve `Kilit`.

Açılma animasyonu üç katı sırayla açar; `prefers-reduced-motion` açıkken logo son
hâliyle durur.

**Henüz kararsız:** yazı tipi. `Kilit` bileşenindeki "SELF ENERJİ" şimdilik sistem
yığınıyla diziliyor. Matbaa için yazısı outline'lanmış kilit dosyası, yazı tipi
seçildikten sonra üretilir.

Orijinal PNG `public/marka/self-logo.png` olarak duruyor — karşılaştırma için,
sitede kullanılmıyor.

## Hesaplayıcı — karara bağlandı

**`/hesapla` ilk sürüme girdi ama hesap yapmıyor.** Kullanıcı kararı: sayfa var
olsun, sayı üretmesin. Böylece "var olmayan sayfaya link kurulmaz" kuralı da
korunuyor — Hero'daki buton gerçek bir sayfaya gidiyor.

Sayfa süreci dört adımda anlatıyor ve WhatsApp'a devrediyor. **Form yok** —
form kişisel veri toplar, o da KVKK aydınlatma metnini gerektirir.

Sihirbaz, hesap mantığı ve sonuç ekranı sonra gelir; o gün KVKK, girdi doğrulama
ve hız sınırı maddeleri de birlikte açılır.

## Hero — kuruldu, metni geçici

Tam ekran güneş + işaret + başlık + alt metin + `/hesapla` bağlantısı.

**Metin HENÜZ KARARA BAĞLANMADI.** Şu anki başlık ("Güneş enerjisi, çatınıza
bakarak başlar.") ve alt metin birer öneri; sayfanın geri kalanı da açık.
Renkli buton yok — DESIGN.md gereği bağlantı altı çizili metin.

**Ev fotoğrafı kurulmadı** — gerçek kurulum fotoğrafı yok, yer tutucu konmuyor.

## Tasarım sistemi — `DESIGN.md`

Sitenin tasarım dili `DESIGN.md`'de yazılı (BlueYard Capital referansı, kullanıcı
tarafından verildi). **Tema: light.** Beyaz tuval, grafit mürekkep `#3a3a3e`,
Instrument Sans, sıfır köşe yarıçapı, gölge yok. Renk yalnız kart yüzeyinde ve
saç teli çizgide; buton rengi yok — hayalet buton kullanılıyor.

**Bilinen çelişki, karar bekliyor:** DESIGN.md paleti (şeftali, lavanta, füşya,
grafit) marka yeşiliyle akraba değil. Şimdilik yeşil yalnız logoda; sayfa
DESIGN.md paletiyle yürüyor. Alternatif: şeftalinin yerini marka yeşili alır.

## Açılış görseli — karara bağlandı

**B yönü onaylandı** (26 Ağustos 2026): BlueYard okuması. `src/components/Gunes.tsx`
— WebGL fragment shader, kütüphane ve görsel dosyası yok.

Yönü tanımlayan üç karar:

1. **Küre kadrajın altında oturur ve taşar.** Merkez `-0.16 × yükseklik`, yarıçap
   kadrajdan büyük. Karakter kompozisyondan geliyor — küçük karede anlaşılmaz.
2. **Yüzey doku değil parçacık serpintisi.** Hücre başına bir zerre, boyu hash'e
   bağlı; zerreler adalar hâlinde toplanır ve limbe doğru yoğunlaşır.
3. **Diskin sert sınırı yok.** Gövde `r=1`'e doğru söner, zerreler dışarı saçılır.

BlueYard'ın küresinden **alınmayan** şey: o ışık alan bir cisim (üstü aydınlık,
altı karanlık). Bu ışık veren bir cisim — limb darkening yerinde, merkez sıcak.

**Zemin saf beyaz değil.** Aşağı doğru çok hafif şeftaliye döner; atmosfer hissi
buradan geliyor. Beyazdan tek sapma bu, geri alınabilir.

Hareket azaltma tercihinde tek kare çizilir, imleç etkileşimi kapanır.

Elenen yönler: gerçekçi plazma (A — "ekran koruyucu" gibi duruyor), litografi
(L — gravür, basamaklı ton), hasat (H — kenar marka yeşiline sönüyor). Daha
öncesinde koyu zeminde yeşil gezegen ve Canvas 2D güneş reddedilmişti.

## Bekleyen kararlar — kullanıcınındır

1. **Palet çelişkisi.** Yukarıda yazılı.
2. **Yazı tipi.** DESIGN.md Instrument Sans diyor. Türkçe için `latin-ext`
   alt kümesi zorunlu.
3. **Güneşin boyutu, yeri ve etkileşimi.**

## WhatsApp

Öne çıkarılmıyor. Bağlanacağı biliniyor, yeri geldiğinde eklenecek.

## Teknoloji — karar verildi

**Next.js.** Gerekçe: görsel optimizasyonu (`next/image`), ileride gelecek
`/hesapla` sayfası için hazır yönlendirme, ve envanterdeki bileşen adlarının
doğrudan karşılığı. Animasyon ve yüksek çözünürlük bu kararın gerekçesi değil —
onlar CSS/SVG işi, çerçeveden bağımsız.

Sürüm ve dağıtım biçimi (statik dışa aktarım mı, Node sunucu mu) kurulum anında
belirlenir; şimdi yazılmaz.

## Yayın

**Canlı: https://self-enerji-site.vercel.app** — Vercel, GitHub `main` dalına
bağlı. Her `push` otomatik derlenip yayına gider.

İlk deploy 25 Ağustos 2026'da boş iskeletle yapıldı ve orada doğrulandı: build
komutu, çıktı klasörü, çalışma zamanı sürümü, HTTPS, HTTP→HTTPS yönlendirmesi
(308) ve güvenlik başlıklarının tamamı. Üretim CSP'sinde `unsafe-eval` yok.

Sıra: iskelet → **deploy (bitti)** → Hero → diğer bölümler. Her bölüm kendi
commit'i ve kendi deploy'u ile gider.

**Not — esneklik maddesi henüz düşmedi.** Ortak `CLAUDE.md`'deki süreli madde
"sitenin ilk sürümü yayına girdiğinde" düşer; yayında olan şu an boş iskelet,
ilk sürüm değil. Madde, bölümler tamamlanıp yayına girdiğinde düşer.

## Bu projede karşılığı olmayanlar

İlk sürümde ayrı API, veri deposu, Supabase/Firebase ve giriş/yetki **yok**; form
WhatsApp'a gidiyor. Bu yüzden CORS, RLS, bellekte veri tutma ve arayüzde yetki
kontrolü için bugün önlem yazılmadı — olmayan sistemin bakımı üstlenilmez.

**Hesaplayıcı geldiğinde bu madde yeniden açılır:** o an sunucu tarafı hesap,
girdi doğrulama ve hız sınırı gerekir.

## KVKK — ertelendi

Aydınlatma metni yok, kullanıcı kararıyla ertelendi. **Tetiği: iletişim formu
yayına girdiğinde.** Form kişisel veri topluyorsa metin gerekir; analitik
eklenirse çerez onayı da gerekir. Ondan önce siteye eklenmez.

## İletişim kanalları

Bilinen: WhatsApp `wa.me/4915256227461`, e-posta `trgtalan@gmail.com`.
Bilinmeyen: telefon, adres, Instagram. Yer tutucu konmaz; bilgi geldiğinde eklenir.
