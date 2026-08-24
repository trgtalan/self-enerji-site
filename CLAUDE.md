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

## Bekleyen iki karar — kullanıcınındır

1. **Teknoloji.** Statik HTML mi, Astro mı, Next mi? Envanterdeki bileşen isimleri
   (Header, HeroSahne, FinalCta) React alışkanlığından geliyor ama karar verilmedi.
2. **Hero slayt 1.** Başlığı da CTA'sı da hesaplayıcıya dayanıyor, hesaplayıcı
   ertelendi. Ya hesaplayıcı ilk sürüme girer, ya slayt 1'e hesaplayıcıdan bağımsız
   yeni bir başlık ve CTA (keşif talebi) yazılır. Seçilene kadar Hero kurulmaz.

## İletişim kanalları

Bilinen: WhatsApp `wa.me/4915256227461`, e-posta `trgtalan@gmail.com`.
Bilinmeyen: telefon, adres, Instagram. Yer tutucu konmaz; bilgi geldiğinde eklenir.
