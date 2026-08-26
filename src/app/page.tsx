import Link from "next/link";
import { Gunes } from "@/components/Gunes";
import { Kilit } from "@/components/Logo";

/* Ana sayfa — bir enerji firmasının sayfası. SelfCheck yalnız bir bölüm;
   sayfanın konusu değil. Bölüm sırası üç bağımsız model incelemesiyle
   doğrulandı: araç geriye, keşif talebi öne.

   Metin karara bağlanmadı. */

const SUREC = [
  {
    baslik: "Yerinde keşif",
    metin:
      "Çatıyı yerinde inceleriz: yön, gölgelenme, çatının durumu ve bağlantı noktası. Keşif ücretsizdir.",
  },
  {
    baslik: "Proje ve izinler",
    metin:
      "Projeyi hazırlar, dağıtım şirketi başvurusunu yürütürüz. Sürenin ne kadar olacağı başvurunun kapsamına, şebeke koşullarına ve evrak durumuna bağlıdır; değerlendirme sonrasında paylaşılır.",
  },
  {
    baslik: "Kurulum",
    metin:
      "Montaj, elektrik işleri ve devreye alma tek ekip tarafından yürütülür.",
  },
  {
    baslik: "Mahsuplaşma",
    metin:
      "Ürettiğiniz elektriğin faturanıza nasıl yansıyacağı konusunda danışmanlık veririz.",
  },
];

const KAPSAM = [
  "Projelendirme",
  "İzin ve mevzuat süreçleri",
  "Kurulum ve devreye alma",
  "Mahsuplaşma danışmanlığı",
];

export default function AnaSayfa() {
  return (
    <>
      {/* ——— Açılış ——— */}
      <header className="relative h-[min(96vh,880px)] min-h-[540px] overflow-hidden">
        <Gunes className="absolute inset-0 block h-full w-full" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1100px] flex-col px-6 pt-7 sm:px-10 sm:pt-9">
          <Kilit yukseklik={38} animasyonlu />

          <div className="mt-[6vh] sm:mt-[7vh]">
            <h1 className="mx-auto max-w-[19ch] text-center text-[clamp(1.75rem,5vw,3.4rem)] font-normal leading-[1.03] tracking-[-0.034em] text-balance text-murekkep">
              Çatı üstü güneş enerjisi — projelendirmeden devreye almaya.
            </h1>

            <p className="mx-auto mt-7 w-full max-w-[48ch] text-center text-[clamp(0.95rem,1.4vw,1.09rem)] leading-relaxed tracking-[-0.01em] text-murekkep-ikincil">
              Mersin ve çevresinde çatı üstü güneş enerjisi sistemleri kuruyoruz.
              Projelendirme, izin süreçleri, kurulum ve devreye alma tek elden
              yürütülür. Keşif yerinde ve ücretsizdir.
            </p>

            <p className="mt-8 text-center">
              <Baglanti href="#iletisim">Ücretsiz keşif talep edin</Baglanti>
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 sm:px-10">
        {/* ——— Kim yapıyor ——— */}
        <Bolum etiket="Firma">
          <Baslik>Projeden devreye alınmaya kadar tek muhatap.</Baslik>
          <Metin>
            SELF Mühendislik, kurucusu enerji mühendisi olan bir mühendislik
            firmasıdır. Sistemin tasarımı, dağıtım şirketiyle yürütülen başvuru ve
            onay süreçleri, kurulum ve devreye alma aynı çatı altında yapılır.
          </Metin>
          <Metin>
            Kurulumda kullanılan ekipman garantilidir; garanti kapsamı ve koşulları
            teklif aşamasında yazılı olarak belirtilir.
          </Metin>

          <ul className="mt-8 grid max-w-[60ch] grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {KAPSAM.map((k) => (
              <li
                key={k}
                className="border-t border-[#e4e7e0] py-3.5 text-[0.97rem] text-murekkep-ikincil"
              >
                {k}
              </li>
            ))}
          </ul>

          <div className="mt-9 max-w-[60ch] border-t border-[#e4e7e0] pt-6">
            <p className="text-[1.05rem] font-medium text-murekkep">
              SELF Mühendislik ve San. Tic. Ltd. Şti.
            </p>
            <p className="mt-1 text-[0.97rem] text-murekkep-ikincil">Akdeniz, Mersin</p>
          </div>
        </Bolum>

        {/* ——— Süreç ——— */}
        <Bolum etiket="Süreç">
          <Baslik>Keşiften devreye almaya.</Baslik>
          <ol className="mt-2 max-w-[62ch]">
            {SUREC.map((adim, i) => (
              <li
                key={adim.baslik}
                className="grid grid-cols-[1.9rem_1fr] gap-5 border-t border-[#e4e7e0] py-6"
              >
                <span className="pt-1.5 text-xs font-medium tabular-nums text-[#7c8a73]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[1.08rem] font-medium tracking-[-0.02em] text-murekkep">
                    {adim.baslik}
                  </h3>
                  <p className="mt-1.5 text-[0.97rem] leading-relaxed text-murekkep-ikincil">
                    {adim.metin}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Bolum>

        {/* ——— Maliyet ——— */}
        <Bolum etiket="Maliyet">
          <Baslik>Fiyat, keşiften sonra sisteme özel hazırlanır.</Baslik>
          <Metin>
            Kurulum bedelini çatının yapısı, sistemin kapsamı, yıllık tüketiminiz,
            gelecekteki elektrik ihtiyacınız ve seçilen ekipman birlikte belirler.
            Her sistem bu değişkenlere göre ayrı boyutlandırılır.
          </Metin>
          <Metin>
            Teklifte seçilen ekipman, kurulum kapsamı, garanti koşulları ve
            yürütülecek izin süreçleri açıkça gösterilir — böylece yalnız toplam
            bedeli değil, bedelin neye karşılık geldiğini de görürsünüz.
          </Metin>
        </Bolum>

        {/* ——— SelfCheck ——— */}
        <Bolum etiket="SelfCheck">
          <Baslik>Başlamadan önce bir ön fikir.</Baslik>
          <Metin>
            SelfCheck, tesisinizin türü, yıllık elektrik tüketiminiz ve çatı
            alanınızdan yola çıkarak çatınıza yaklaşık kaç panel yerleştirilebileceğini
            ve tahmini yıllık üretimi gösterir. Sonucu görmek için kayıt gerekmez.
          </Metin>
          <Metin>
            Araç yalnız bu üç veriyle çalışır: çatının yönü, gölgelenme durumu ve
            taşıma kapasitesi <strong className="font-medium text-murekkep">hesaba
            katılmaz</strong>. Bunlar yerinde keşifte belirlenir ve sonucu değiştirir.
            SelfCheck bir ön değerlendirmedir, fizibilite raporu değildir.
          </Metin>
          <p className="mt-7">
            <Baglanti href="/hesapla">SelfCheck&apos;i açın</Baglanti>
          </p>
        </Bolum>
      </main>

      {/* ——— Kapanış ——— */}
      <section
        id="iletisim"
        className="mx-auto max-w-[1100px] border-t border-[#e4e7e0] px-6 py-20 text-center sm:px-10 sm:py-24"
      >
        <h2 className="mx-auto max-w-[20ch] text-[clamp(1.5rem,3.4vw,2.4rem)] font-normal leading-[1.12] tracking-[-0.03em] text-balance text-murekkep">
          Çatınız için ücretsiz keşif.
        </h2>
        <p className="mx-auto mt-6 max-w-[46ch] text-[0.97rem] leading-relaxed text-murekkep-ikincil">
          Çatınızın uygunluğunu yerinde değerlendirelim. Keşif ücretsizdir.
        </p>
        <p className="mt-9 text-[0.92rem] text-[#7c8a73]">
          <a
            href="https://wa.me/4915256227461"
            className="border-b border-[#e4e7e0] transition-colors hover:text-murekkep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep"
          >
            WhatsApp
          </a>
          <span className="px-2.5 text-[#c8d1c2]">·</span>
          <a
            href="mailto:trgtalan@gmail.com"
            className="border-b border-[#e4e7e0] transition-colors hover:text-murekkep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep"
          >
            E-posta
          </a>
        </p>
      </section>

      <footer className="mx-auto max-w-[1100px] border-t border-[#e4e7e0] px-6 py-7 text-[0.82rem] text-[#7c8a73] sm:px-10">
        SELF Mühendislik ve San. Tic. Ltd. Şti. · Akdeniz, Mersin
      </footer>
    </>
  );
}

/* ——— sayfa içi yardımcılar ——— */

function Bolum({ etiket, children }: { etiket: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#e4e7e0] py-16 sm:py-20">
      <p className="mb-5 text-[0.69rem] font-medium uppercase tracking-[0.1em] text-[#7c8a73]">
        {etiket}
      </p>
      {children}
    </section>
  );
}

function Baslik({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 max-w-[22ch] text-[clamp(1.45rem,3.2vw,2.25rem)] font-normal leading-[1.14] tracking-[-0.03em] text-balance text-murekkep">
      {children}
    </h2>
  );
}

function Metin({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 max-w-[62ch] text-[1rem] leading-relaxed text-murekkep-ikincil last:mb-0">
      {children}
    </p>
  );
}

function Baglanti({ href, children }: { href: string; children: React.ReactNode }) {
  const sinif =
    "inline-block border-b border-murekkep pb-0.5 text-[0.97rem] tracking-[-0.01em] text-murekkep transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep";
  return href.startsWith("#") ? (
    <a href={href} className={sinif}>
      {children}
    </a>
  ) : (
    <Link href={href} className={sinif}>
      {children}
    </Link>
  );
}
