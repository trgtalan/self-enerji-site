import Link from "next/link";
import { Gunes } from "@/components/Gunes";
import { Isaret } from "@/components/Logo";
import { Nav } from "@/components/Nav";
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

      {/* ═══ Açılış — yalnız marka ═══ */}
      <header className="relative h-[min(94vh,860px)] min-h-[520px] overflow-hidden">
        <Gunes className="absolute inset-0 block h-full w-full" />

        <div className="relative z-10 flex h-full flex-col items-center justify-start px-6 pt-[24vh] sm:pt-[26vh]">
          <h1 className="flex flex-col items-center gap-3">
            <span aria-hidden className="block">
              <Isaret yukseklik={124} animasyonlu />
            </span>
            <span className="text-center text-[clamp(1.45rem,5vw,2.6rem)] font-semibold leading-none tracking-[0.26em] sm:tracking-[0.32em]">
              <span className="text-murekkep">SELF</span>{" "}
              <span className="font-medium text-marka-koyu">ENERJİ</span>
            </span>
          </h1>
        </div>
      </header>
      {/* ═══ Hakkımızda ═══ */}
      <section id="hakkimizda" className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 sm:py-28">
        <Beliren>
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
            <div>
              <Etiket>Hakkımızda</Etiket>
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
      {/* ═══ SelfCheck ═══ */}
      <section id="selfcheck" className="border-y border-[#e4e7e0] bg-[#fbfaf7]">
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
