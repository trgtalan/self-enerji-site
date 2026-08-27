/**
 * Sık sorulanlar — itiraz karşılama.
 *
 * `<details>` ile kurulur: JS yok, açık gelen bölüm arama motoruna da
 * tarayıcının kendi "sayfada bul" aramasına da görünür kalır.
 * Ok işareti CSS ile döner; hareket azaltma tercihinde döner ama animasyonsuz.
 */

const SORULAR = [
  {
    soru: "Çatımın kaç metrekaresi gerekir?",
    cevap:
      "Kaba bir ölçü olarak her 1 kW kurulu güç için eğimli çatıda yaklaşık 6, düz çatıda yaklaşık 5,5 m² kullanılabilir alan gerekir. Kullanılabilir alan, çatının tamamı değildir: baca, çatı penceresi, klima dış ünitesi ve gölge düşen bölgeler çıkarılır. Kesin alan keşifte ölçülür.",
  },
  {
    soru: "Tüm elektrik ihtiyacımı karşılayabilir miyim?",
    cevap:
      "Çatı alanı yetiyorsa ve sözleşme gücünüz uygunsa yıllık tüketiminizin tamamını karşılayacak bir sistem kurulabilir. Kurulabilecek gücün üst sınırını üç şey belirler: çatının net kullanılabilir alanı ve taşıma kapasitesi, faturanızdaki sözleşme gücü ve dağıtım şirketinin onayladığı bağlantı gücü.",
  },
  {
    soru: "Faturam nasıl etkilenir?",
    cevap:
      "Ürettiğiniz elektriği o anda kullanıyorsanız faturaya hiç yansımaz. Kullanmadığınız fazla üretim şebekeye gider ve mahsuplaşmaya girer; o dönem şebekeden çektiğiniz elektrikle karşılıklı olarak dengelenir. Mahsuplaşmanın yöntemi ve dönemi mevzuata bağlıdır, mevzuat değişebilir.",
  },
  {
    soru: "Hangi izinler gerekir, kim yürütür?",
    cevap:
      "Sırasıyla dağıtım şirketine çağrı mektubu başvurusu, elektrik ve statik projelerin hazırlanması, TEDAŞ onayı, bağlantı ve sistem kullanım anlaşmaları, kurulum bitince geçici kabul gerekir. Bu resmî işlemleri biz yürütürüz. Sizden beklenen, tapu ve yapı kullanma izni gibi binaya ait evrakları temin etmenizdir.",
  },
  {
    soru: "Elektrik kesildiğinde sistem çalışır mı?",
    cevap:
      "Şebekeye bağlı bir sistem, kesinti sırasında güvenlik gereği kendini durdurur — aksi hâlde hatta çalışan ekipler için tehlike doğar. Kesintide de elektrik istiyorsanız sisteme batarya eklenmesi gerekir. Bu, sistemin bedelini belirgin biçimde değiştirir; keşifte konuşulur.",
  },
  {
    soru: "Sistemin ömrü ne kadar, bakım ister mi?",
    cevap:
      "Paneller 25-30 yıl çalışacak şekilde üretilir ve üreticiler genellikle 25 yıllık performans garantisi verir. İnvertör daha kısa ömürlüdür ve sistemin ilk değişecek parçasıdır. Bakım yükü düşüktür: yılda bir görsel kontrol ve tozlu dönemlerde temizlik. Verilecek garantinin süresi ve kapsamı seçilen markaya göre değişir, teklifte yazılı olarak belirtilir.",
  },
  {
    soru: "Apartman veya site çatısına kurulabilir mi?",
    cevap:
      "Ortak çatı, kat maliklerinin yazılı onayını gerektirir. Bu onay alınmadan proje başvurusu yapılamaz. Onay süreci mülk sahiplerinin yürüteceği bir iştir; biz çatının teknik uygunluğunu ve kurulabilecek gücü keşifle ortaya koyar, başvuru dosyasını hazırlarız.",
  },
]

export function Sorular() {
  return (
    <div className="mt-14 border-t border-[#e4e7e0]">
      {SORULAR.map((s) => (
        <details
          key={s.soru}
          className="group border-b border-[#e4e7e0] [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-murekkep">
            <h3 className="flex-1 text-[1.06rem] font-medium tracking-[-0.02em] text-murekkep">
              {s.soru}
            </h3>
            <span
              aria-hidden
              className="mt-1.5 block h-[9px] w-[9px] flex-none border-b border-r border-[#7c8a73] transition-transform duration-200 rotate-45 group-open:-rotate-[135deg] motion-reduce:transition-none"
            />
          </summary>
          <p className="max-w-[68ch] pb-7 pr-12 text-[0.97rem] leading-relaxed text-murekkep-ikincil">
            {s.cevap}
          </p>
        </details>
      ))}
    </div>
  );
}
