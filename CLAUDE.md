# Self Enerji — site

Ortak kurallar `~/.claude/CLAUDE.md` içindeki `aiw` bloğundan gelir. Burada yalnız
bu projeye özgü olan var.

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

## Sıra — ilk deploy en başta

Bölüm yazmadan önce boş Next iskeleti gerçek adrese çıkar. Orada bir kez doğrulanır:
build komutu, çıktı klasörü, çalışma zamanı sürümü, alan adı. Bunlar bitmiş projede
ilk kez denendiğinde hepsi aynı anda patlar.

Sıra: iskelet → deploy → Hero → diğer bölümler. Her bölüm kendi commit'i ve kendi
deploy'u ile gider.

## Bu projede karşılığı olmayanlar

İlk sürümde ayrı API, veri deposu, Supabase/Firebase ve giriş/yetki **yok**; form
WhatsApp'a gidiyor. Bu yüzden CORS, RLS, bellekte veri tutma ve arayüzde yetki
kontrolü için bugün önlem yazılmadı — olmayan sistemin bakımı üstlenilmez.

**Hesaplayıcı geldiğinde bu madde yeniden açılır:** o an sunucu tarafı hesap,
girdi doğrulama ve hız sınırı gerekir.

## İletişim kanalları

Bilinen: WhatsApp `wa.me/4915256227461`, e-posta `trgtalan@gmail.com`.
Bilinmeyen: telefon, adres, Instagram. Yer tutucu konmaz; bilgi geldiğinde eklenir.
