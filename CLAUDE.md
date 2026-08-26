# Self Enerji — site

Ortak kurallar `~/.claude/CLAUDE.md` içindeki `aiw` bloğundan gelir. Burada yalnız
bu projeye özgü olan var.

Next'in kendi ajan kılavuzu: @AGENTS.md — `next dev` tarafından üretilir ve
güncellenir, elle düzenlenmez. Sürüme özgü API bilgisi için
`node_modules/next/dist/docs/` okunur; ezberden Next kodu yazılmaz.

## Ne

İşletmenin web sitesi. Yeni bir işletme değil — aynı işin yeniden kurulan sitesi.
İçerik ve yapı `proje-envanteri.md`'de çıkarılmış durumda; metin oradan uyarlanarak
bu projede yeniden yazılır.

**Eski projenin kaynak kodu, `.claude/` klasörü, talimat dosyaları ve komutları
hiçbir şekilde kopyalanmaz.** Bayat.

## Görev dağılımı

**Kullanıcı:** neyin doğru, gerekli ve yeterli olduğuna karar verir. İşletmeye ait
gerçek veri (kapasite, referans, kurulum sayısı) ondadır — ama bu veri henüz derlenmedi
ve ilk sürüm için gerekli değil.

**Asistan:** yazar, koşturur, ölçer. Karar vermez, önden tasarlamaz.

## İlk sürümün kapsamı

Sayı içeren her şey ertelendi (`proje-envanteri.md` → *Şimdi kurulmayacaklar*):
hesaplayıcı (`/hesapla`), Örnek Hesaplama sekmesi, ve hesaplayıcıya bağlanan her
öğe — Header'daki *Hesaplayıcı*, IntroCards'ın 2. kartı, Hero ve FinalCta'daki
hesaplayıcı çağrıları. Var olmayan sayfaya link kurulmaz, "yakında" yazısı konmaz.

Referanslar da ertelendi — veri derlenmedi.

Kurulan: Header (*Hizmetler · İletişim*) → HeroSahne → IntroCards (2 kart) →
HowItWorks (2 sekme) → WhyUs → Faq → FinalCta → Footer.

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

## Bekleyen karar — kullanıcınındır

1. **Hero slayt 1.** Başlığı da CTA'sı da hesaplayıcıya dayanıyor, hesaplayıcı
   ertelendi. Ya hesaplayıcı ilk sürüme girer, ya slayt 1'e hesaplayıcıdan bağımsız
   yeni bir başlık ve CTA (keşif talebi) yazılır. Seçilene kadar Hero kurulmaz.

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
