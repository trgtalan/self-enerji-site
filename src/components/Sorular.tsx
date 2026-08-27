/**
 * Sık sorulanlar — iki kitle, iki liste.
 *
 * Konut sahibiyle atölye sahibi aynı soruları sormuyor: biri kat malikleri
 * muvafakatini, öteki sözleşme gücünü ve üretimin aksamasını soruyor.
 * Sekme CSS ile çalışır (gizli radio + peer): JS yok, iki listenin metni de
 * her zaman DOM'da — arama motoru ikisini de görür.
 *
 * `<details>` açılır kapanır; ok işareti CSS ile döner.
 */

type Soru = { soru: string; cevap: string };

const KONUT: Soru[] = [
  {
    soru: "Çatımın kaç metrekaresi gerekir?",
    cevap:
      "Kaba bir ölçü olarak her 1 kW kurulu güç için eğimli çatıda yaklaşık 6, düz çatıda yaklaşık 5,5 m² kullanılabilir alan gerekir. Kullanılabilir alan çatının tamamı değildir: baca, çatı penceresi, klima dış ünitesi ve gölge düşen bölgeler çıkarılır. Kesin alan keşifte ölçülür.",
  },
  {
    soru: "Tüm elektrik ihtiyacımı karşılayabilir miyim?",
    cevap:
      "Çatı alanı yetiyorsa ve sözleşme gücünüz uygunsa yıllık tüketiminizin tamamını karşılayacak bir sistem kurulabilir. Üst sınırı üç şey belirler: çatının net kullanılabilir alanı ve taşıma kapasitesi, faturanızdaki sözleşme gücü ve dağıtım şirketinin onayladığı bağlantı gücü.",
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
      "Paneller 25-30 yıl çalışacak şekilde üretilir ve üreticiler genellikle 25 yıllık performans garantisi verir. İnvertör daha kısa ömürlüdür ve sistemin ilk değişecek parçasıdır. Bakım yükü düşüktür: yılda bir görsel kontrol ve tozlu dönemlerde temizlik. Garantinin süresi ve kapsamı seçilen markaya göre değişir, teklifte yazılı olarak belirtilir.",
  },
  {
    soru: "Apartman veya site çatısına kurulabilir mi?",
    cevap:
      "Ortak çatı, kat maliklerinin yazılı onayını gerektirir. Bu onay alınmadan proje başvurusu yapılamaz. Onay süreci mülk sahiplerinin yürüteceği bir iştir; biz çatının teknik uygunluğunu ve kurulabilecek gücü keşifle ortaya koyar, başvuru dosyasını hazırlarız.",
  },
];

const ISLETME: Soru[] = [
  {
    soru: "Atölyemin çatısı kuruluma uygun mu?",
    cevap:
      "Sanayi yapılarında en sık karşılaşılan trapez sac ve sandviç panel çatılar kuruluma uygundur; taşıyıcıya sabitleme yöntemi çatı tipine göre değişir. Belirleyici olan çatı malzemesi değil, mevcut taşıyıcı sistemin ek yükü kaldırıp kaldırmadığıdır. Bu, statik hesapla ortaya konur.",
  },
  {
    soru: "Sözleşme gücüm kurulabilecek gücü sınırlar mı?",
    cevap:
      "Evet, en sık karşılaşılan sınır budur. Lisanssız üretimde kurulacak güç, abonelik sözleşmenizdeki güçle ilişkilidir. Çatınız daha büyük bir sisteme yetse bile sözleşme gücü buna izin vermeyebilir; gerekirse güç artırımı başvurusu ayrı bir süreç olarak yürütülür.",
  },
  {
    soru: "Gündüz çalışan bir işletme için sistem daha mı verimli?",
    cevap:
      "Evet. Üretim güneşin olduğu saatlerde olur; o saatlerde çalışan bir atölye ürettiğinin neredeyse tamamını doğrudan tüketir. Bu, elektriği şebekeye verip mahsuplaşmayı beklemekten daha avantajlıdır. Vardiya düzeniniz sistemin boyutlandırılmasını doğrudan etkiler.",
  },
  {
    soru: "Faturam nasıl etkilenir?",
    cevap:
      "Ürettiğiniz elektriği anında tükettiğiniz ölçüde faturanızdaki enerji bedeli düşer. Fazla üretim şebekeye gider ve mahsuplaşmaya girer. Ticarethane ve sanayi aboneliklerinde tarife yapısı meskenden farklıdır; hangi kalemlerin düşeceği tüketim profilinize göre değerlendirilir.",
  },
  {
    soru: "Hangi izinler gerekir, kim yürütür?",
    cevap:
      "Dağıtım şirketine çağrı mektubu başvurusu, elektrik ve statik projelerin hazırlanması, TEDAŞ onayı, bağlantı ve sistem kullanım anlaşmaları, kurulum sonrası geçici kabul. Bu işlemleri biz yürütürüz. Sizden beklenen, yapı ruhsatı ve iskân gibi binaya ait evrakları temin etmenizdir.",
  },
  {
    soru: "Kiracıyım, kurulum yaptırabilir miyim?",
    cevap:
      "Başvuru abonelik sahibi adına yapılır, ancak çatıya kalıcı ekipman monte edileceği için mülk sahibinin yazılı onayı gerekir. Kira süresi sistemin ömründen kısaysa, sözleşme bitiminde sistemin ne olacağı baştan yazılı olarak belirlenmelidir.",
  },
  {
    soru: "Üretimimiz aksar mı?",
    cevap:
      "Montaj çatıda yürür; elektrik bağlantısı ve devreye alma sırasında kısa süreli enerji kesintisi gerekir. Bu kesinti önceden planlanır ve mümkün olduğunca vardiya dışına alınır. Kurulum süresi sistemin büyüklüğüne göre değişir, keşif sonrası takvim olarak verilir.",
  },
  {
    soru: "Sistemin ömrü ne kadar, bakım ister mi?",
    cevap:
      "Paneller 25-30 yıl çalışacak şekilde üretilir; üreticiler genellikle 25 yıllık performans garantisi verir. İnvertör daha kısa ömürlüdür. Sanayi bölgelerinde toz ve partikül yükü yüksek olduğu için temizlik aralığı konuta göre daha sıktır; bu, üretim kaybını önlemenin en ucuz yoludur.",
  },
];

function Liste({ sorular }: { sorular: Soru[] }) {
  return (
    <div className="border-t border-[#e4e7e0]">
      {sorular.map((s) => (
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
              className="mt-1.5 block h-[9px] w-[9px] flex-none rotate-45 border-b border-r border-[#7c8a73] transition-transform duration-200 group-open:-rotate-[135deg] motion-reduce:transition-none"
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

const SEKME =
  "cursor-pointer border-b-2 border-transparent pb-3 text-[0.97rem] tracking-[-0.01em] text-[#7c8a73] transition-colors hover:text-murekkep";

export function Sorular() {
  return (
    <div className="sss mt-12">
      <input type="radio" name="sss" id="sss-konut" defaultChecked className="sr-only" />
      <input type="radio" name="sss" id="sss-isletme" className="sr-only" />

      <div className="sss-cubuk flex gap-8 border-b border-[#e4e7e0]">
        <label htmlFor="sss-konut" className={SEKME}>
          Konut ve apartman
        </label>
        <label htmlFor="sss-isletme" className={SEKME}>
          Atölye ve işletme
        </label>
      </div>

      <div className="sss-konut">
        <Liste sorular={KONUT} />
      </div>
      <div className="sss-isletme">
        <Liste sorular={ISLETME} />
      </div>
    </div>
  );
}
