import Link from "next/link";
import { Gunes } from "@/components/Gunes";
import { Kilit } from "@/components/Logo";
import { SistemSemasi } from "@/components/SistemSemasi";
import { Beliren } from "@/components/Beliren";
import { Sorular } from "@/components/Sorular";

/* Ana sayfa — bir enerji firmasının sayfası. SelfCheck yalnız bir bölüm.
   Sıra üç bağımsız model incelemesiyle doğrulandı: araç geriye, keşif öne.
   Metin karara bağlanmadı. */

const CATILAR = [
  {
    baslik: "Müstakil konut",
    metin:
      "Sistem yıllık tüketiminize göre boyutlandırılır. Gündüz üretilen elektrik doğrudan evde kullanılır, fazlası mahsuplaşmaya girer.",
  },
  {
    baslik: "Apartman ve site",
    metin:
      "Ortak çatı, kat maliklerinin yazılı onayını gerektirir. Ortak alan tüketiminin nasıl karşılanacağı baştan netleştirilir.",
  },
  {
    baslik: "Atölye ve işletme",
    metin:
      "Trapez sac ve sandviç panel çatılar kuruluma uygundur. Gündüz çalışan bir işletme ürettiğinin neredeyse tamamını doğrudan tüketir.",
  },
]

const SUREC = [
  {
    baslik: "Yerinde keşif",
    metin:
      "Çatıyı yerinde inceleriz: yön, gölgelenme, çatının durumu ve bağlantı noktası. Keşif ve ardından hazırlanan teklif ücretsizdir.",
  },
  {
    baslik: "Proje ve izinler",
    metin:
      "Projeyi hazırlar, dağıtım şirketi başvurusunu yürütürüz. Süre; başvurunun kapsamına, şebeke koşullarına ve evrak durumuna bağlıdır.",
  },
  {
    baslik: "Kurulum",
    metin: "Montaj, elektrik işleri ve devreye alma tek ekip tarafından yürütülür.",
  },
  {
    baslik: "Devreye alma",
    metin:
      "Kabul işlemleri tamamlanır, sistem şebekeye bağlanır ve mahsuplaşma başlar.",
  },
];


export default function AnaSayfa() {
  return (
    <>
      <Nav />

      {/* ═══ Açılış ═══ */}
      <header className="relative h-[min(96vh,880px)] min-h-[540px] overflow-hidden">
        <Gunes className="absolute inset-0 block h-full w-full" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1180px] flex-col px-6 sm:px-10">
          <div className="h-[70px] sm:h-[78px]" />

          <div className="mt-[4vh] sm:mt-[5vh]">
            <h1 className="mx-auto max-w-[19ch] text-center text-[clamp(1.75rem,5vw,3.4rem)] font-normal leading-[1.03] tracking-[-0.034em] text-balance text-murekkep">
              Çatı üstü güneş enerjisi — projelendirmeden devreye almaya.
            </h1>

            <p className="mx-auto mt-7 w-full max-w-[48ch] text-center text-[clamp(0.95rem,1.4vw,1.09rem)] leading-relaxed tracking-[-0.01em] text-murekkep-ikincil">
              Mersin ve çevresinde konut, apartman ve işletme çatılarına güneş
              enerjisi sistemleri kuruyoruz. Keşif yerinde ve ücretsizdir.
            </p>

            <p className="mt-9 text-center">
              <Baglanti href="/hesapla">Çatınızı SelfCheck ile ölçün</Baglanti>
            </p>
          </div>
        </div>
      </header>

      {/* ═══ Firma ═══ */}
      <section className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-28">
        <Beliren>
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
            <div>
              <Etiket>Firma</Etiket>
              <h2 className="text-[clamp(1.55rem,3.4vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.032em] text-balance text-murekkep">
                Her çatı ayrı bir sistem gerektirir.
              </h2>
            </div>
            <div className="lg:pt-11">
              <p className="text-[1.02rem] leading-relaxed text-murekkep-ikincil">
                SELF Enerji, mühendisler tarafından kurulan bir mühendislik firmasıdır.
                Bir çatıya ne kurulabileceğini yönü, eğimi ve taşıma kapasitesi kadar
                yapının tipi de belirler: müstakil evde tüketim profili, apartmanda
                malik onayı, atölyede sözleşme gücü ve vardiya düzeni öne çıkar.
              </p>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-murekkep-ikincil">
                Kurulumda kullanılan ekipman garantilidir; garanti kapsamı ve koşulları
                teklif aşamasında yazılı olarak belirtilir.
              </p>
            </div>
          </div>
        </Beliren>

        <div className="mt-16 grid gap-px bg-[#e4e7e0] md:grid-cols-3">
          {CATILAR.map((k, i) => (
            <Beliren key={k.baslik} gecikme={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              <div className="h-full bg-white p-7 lg:p-8">
                <span className="block h-px w-9 bg-marka-yesil" />
                <h3 className="mt-6 text-[1.06rem] font-medium tracking-[-0.02em] text-murekkep">
                  {k.baslik}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-murekkep-ikincil">
                  {k.metin}
                </p>
              </div>
            </Beliren>
          ))}
        </div>
      </section>

      {/* ═══ Sistem şeması ═══ */}
      <section id="nasil-calisir" className="border-y border-[#e4e7e0] bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-24">
          <Beliren>
            <div className="max-w-[54ch]">
              <Etiket>Nasıl çalışır</Etiket>
              <h2 className="text-[clamp(1.5rem,3.2vw,2.3rem)] font-normal leading-[1.12] tracking-[-0.03em] text-balance text-murekkep">
                Çatıda üretilen elektrik, evinizde kullanılır; fazlası şebekeye gider.
              </h2>
            </div>
          </Beliren>

          <Beliren gecikme={1}>
            <div className="mt-12">
              <SistemSemasi />
            </div>
          </Beliren>
        </div>
      </section>

      {/* ═══ Süreç ═══ */}
      <section id="surec" className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-28">
        <Beliren>
          <Etiket>Süreç</Etiket>
          <h2 className="max-w-[20ch] text-[clamp(1.5rem,3.2vw,2.3rem)] font-normal leading-[1.12] tracking-[-0.03em] text-balance text-murekkep">
            Dört adım, tek muhatap.
          </h2>
          <p className="mt-6 max-w-[54ch] text-[1.02rem] leading-relaxed text-murekkep-ikincil">
            Projelendirme, dağıtım şirketiyle yürütülen başvurular, kurulum ve devreye
            alma aynı çatı altında yapılır — aralarda muhatap değişmez.
          </p>
        </Beliren>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {SUREC.map((adim, i) => (
            <li key={adim.baslik} className={`relative belir belir-${Math.min(i, 3)}`}>
              <div className="flex items-center gap-3">
                <span className="text-[0.78rem] font-medium tabular-nums text-marka-koyu">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#e4e7e0]" />
              </div>
              <h3 className="mt-5 text-[1.12rem] font-medium tracking-[-0.022em] text-murekkep">
                {adim.baslik}
              </h3>
              <p className="mt-2.5 text-[0.94rem] leading-relaxed text-murekkep-ikincil">
                {adim.metin}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ SelfCheck ═══ */}
      <section className="border-y border-[#e4e7e0] bg-[#fbfaf7]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-x-16 gap-y-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <Beliren>
            <Etiket>SelfCheck</Etiket>
            <h2 className="max-w-[19ch] text-[clamp(1.5rem,3.2vw,2.3rem)] font-normal leading-[1.12] tracking-[-0.03em] text-balance text-murekkep">
              Çatınıza ne sığar, üç soruda görün.
            </h2>
            <p className="mt-7 max-w-[52ch] text-[1.02rem] leading-relaxed text-murekkep-ikincil">
              Tesis tipinizi, yıllık elektrik tüketiminizi ve çatı alanınızı girin;
              yaklaşık panel sayısını, kurulabilir gücü ve tahmini yıllık üretimi
              hemen ekranda görün. Kayıt yok, form yok, bekleme yok.
            </p>
            <p className="mt-4 max-w-[52ch] text-[0.94rem] leading-relaxed text-[#7c8a73]">
              Sonuç bir ön değerlendirmedir. Çatının yönü, gölgelenme ve taşıma
              kapasitesi yerinde keşifte ölçülür.
            </p>
            <p className="mt-8">
              <Baglanti href="/hesapla">SelfCheck&apos;i açın</Baglanti>
            </p>
          </Beliren>

          <Beliren gecikme={1}>
            <div className="border border-[#e4e7e0] bg-white">
              <div className="flex items-center gap-2 border-b border-[#e4e7e0] px-5 py-3">
                <span className="h-1.5 w-1.5 rounded-full bg-marka-yesil" />
                <span className="text-[0.76rem] font-medium uppercase tracking-[0.09em] text-[#7c8a73]">
                  SelfCheck
                </span>
              </div>
              <ol className="divide-y divide-[#e4e7e0]">
                {["Tesis tipi", "Yıllık tüketim", "Çatı alanı"].map((ad, i) => (
                  <li key={ad} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-6 w-6 flex-none items-center justify-center border border-[#e4e7e0] text-[0.72rem] font-medium tabular-nums text-[#7c8a73]">
                      {i + 1}
                    </span>
                    <span className="text-[0.96rem] text-murekkep">{ad}</span>
                  </li>
                ))}
              </ol>
              <div className="border-t border-[#e4e7e0] bg-[#f4f8ee] px-5 py-5">
                <p className="text-[0.76rem] font-medium uppercase tracking-[0.09em] text-[#7c8a73]">
                  Sonuç
                </p>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-murekkep">
                  Yaklaşık panel sayısı, kurulabilir güç ve tahmini yıllık üretim
                  aralığı.
                </p>
              </div>
            </div>
          </Beliren>
        </div>
      </section>

      {/* ═══ Sık sorulanlar ═══ */}
      <section id="sorular">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-28">
          <Beliren>
            <Etiket>Sık sorulanlar</Etiket>
            <h2 className="max-w-[22ch] text-[clamp(1.5rem,3.2vw,2.3rem)] font-normal leading-[1.12] tracking-[-0.03em] text-balance text-murekkep">
              Kurulum öncesi en çok sorulanlar.
            </h2>
          </Beliren>
          <Beliren gecikme={1}>
            <Sorular />
          </Beliren>
        </div>
      </section>

      {/* ═══ Kapanış ═══ */}
      <section id="iletisim" className="bg-murekkep">
        <div className="mx-auto max-w-[1180px] px-6 py-24 sm:px-10 sm:py-32">
          <Beliren>
            <h2 className="max-w-[16ch] text-[clamp(1.8rem,4.4vw,3rem)] font-normal leading-[1.06] tracking-[-0.032em] text-balance text-[#f2f8ea]">
              Çatınız için ücretsiz keşif.
            </h2>
            <p className="mt-7 max-w-[46ch] text-[1.02rem] leading-relaxed text-[#cfe3bd]">
              Çatınızın uygunluğunu yerinde değerlendirelim. Keşif de ardından
              hazırlanan teklif de tümüyle ücretsizdir; hiçbir aşamada ön ödeme
              istenmez ve teklif sizi bağlamaz.
            </p>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <a
                href="https://wa.me/4915256227461"
                className="border-b border-[#c3e57a] pb-1 text-[1.02rem] text-[#f2f8ea] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3e57a]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:trgtalan@gmail.com"
                className="border-b border-[#c3e57a] pb-1 text-[1.02rem] text-[#f2f8ea] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3e57a]"
              >
                E-posta
              </a>
            </div>
          </Beliren>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-3 px-6 py-8 text-[0.83rem] text-[#7c8a73] sm:px-10">
        <span>SELF Mühendislik ve San. Tic. Ltd. Şti.</span>
        <span>Akdeniz, Mersin</span>
      </footer>
    </>
  );
}

/* ——— sayfa içi yardımcılar ——— */

/** Üst çubuk — sayfayla birlikte yapışır. Menü açma düğmesi yok: dar ekranda
    ikincil bağlantılar gizlenir, birincil ikisi kalır. */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e4e7e0]/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-[1180px] items-center justify-between gap-6 px-6 sm:h-[78px] sm:px-10">
        <a href="#" aria-label="SELF Enerji — sayfa başı" className="flex-none">
          <Kilit yukseklik={34} />
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <NavBag href="#nasil-calisir" gizli>
            Nasıl çalışır
          </NavBag>
          <NavBag href="#surec" gizli>
            Süreç
          </NavBag>
          <NavBag href="#sorular" gizli>
            Sorular
          </NavBag>
          <NavBag href="#iletisim" gizli>
            Keşif talebi
          </NavBag>
          <Link
            href="/hesapla"
            className="border border-murekkep px-4 py-2 text-[0.86rem] tracking-[-0.01em] text-murekkep transition-colors hover:bg-murekkep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-murekkep"
          >
            SelfCheck
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavBag({
  href,
  children,
  gizli,
}: {
  href: string;
  children: React.ReactNode;
  /** dar ekranda gizlenir */
  gizli?: boolean;
}) {
  const sinif = `text-[0.9rem] tracking-[-0.01em] text-murekkep-ikincil transition-colors hover:text-murekkep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep${
    gizli ? " hidden md:inline" : ""
  }`;
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

function Etiket({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.11em] text-[#7c8a73]">
      {children}
    </p>
  );
}

function Baglanti({ href, children }: { href: string; children: React.ReactNode }) {
  const sinif =
    "inline-block border-b border-murekkep pb-0.5 text-[1rem] tracking-[-0.01em] text-murekkep transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-murekkep";
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
