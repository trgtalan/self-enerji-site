/**
 * Sık sorulanlar — itiraz karşılama.
 *
 * `<details>` ile kurulur: JS yok, açık gelen bölüm arama motoruna da
 * tarayıcının kendi "sayfada bul" aramasına da görünür kalır.
 * Ok işareti CSS ile döner; hareket azaltma tercihinde döner ama animasyonsuz.
 */

const SORULAR = [
  {
    soru: "Çatım zarar görür mü, sızdırır mı?",
    cevap:
      "Montaj öncesi çatının taşıma kapasitesi hesaplanır. Bağlantı noktaları çatı tipine uygun kenetlerle ve sızdırmazlık elemanlarıyla yapılır; kiremit kırılması veya membran delinmesi gereken durumlarda yalıtım yeniden sağlanır. Çatının mevcut durumu keşifte değerlendirilir — yenilenmesi gereken bir çatıya kurulum önerilmez.",
  },
  {
    soru: "Dağıtım şirketi izin vermezse ne olur?",
    cevap:
      "Başvuru bölgenizin dağıtım şirketine yapılır ve sonuç şebekenin o noktadaki kapasitesine bağlıdır. Kapasite yetersizse başvuru reddedilebilir ya da daha düşük bir güçle onaylanabilir. Bu ihtimal keşifte konuşulur; başvuru sonucu belli olmadan kurulum başlamaz.",
  },
  {
    soru: "Fırtınada paneller uçar mı?",
    cevap:
      "Taşıyıcı sistem, kurulumun yapılacağı bölgenin rüzgâr ve kar yüküne göre seçilir ve çatının taşıyıcı elemanlarına sabitlenir. Panellerin kendisi de rüzgâr ve dolu yüküne karşı sertifikalıdır; sertifika değerleri teklifte yer alır.",
  },
  {
    soru: "İnvertör birkaç yıl sonra bozulursa ne olur?",
    cevap:
      "İnvertör sistemin en çok yıpranan parçasıdır ve üretici garantisi kapsamındadır. Garanti süresi ve kapsamı markaya göre değişir; teklifte hangi markanın kaç yıl garantiyle verildiği yazılı olarak belirtilir.",
  },
  {
    soru: "Apartman çatısına kurulabilir mi?",
    cevap:
      "Ortak çatı, kat malikleri kurulunun kararına bağlıdır. Karar alınmadan proje başvurusu yapılamaz. Karar süreci mülk sahiplerinin işidir; biz teknik uygunluğu ve kurulabilecek gücü keşifle ortaya koyarız.",
  },
];

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
