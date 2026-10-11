"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type AudienceId = "home" | "business";

type AudienceOption = {
  id: AudienceId;
  title: string;
  description: string;
  eyebrow: string;
  icon: ReactNode;
};


function HomeIllustration() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 220 160" fill="none">
      <circle cx="188" cy="30" r="16" fill="#F8B46F" opacity=".22" />
      <circle cx="188" cy="30" r="9" fill="#E8894A" />
      <path d="M202.0 30.0 L208.0 30.0 M174.0 30.0 L168.0 30.0 M188.0 44.0 L188.0 50.0 M188.0 16.0 L188.0 10.0 M197.9 39.9 L202.1 44.1 M178.1 39.9 L173.9 44.1 M197.9 20.1 L202.1 15.9 M178.1 20.1 L173.9 15.9" stroke="#E8894A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M17.8 147.3 L159.8 147.3" stroke="#26401D" strokeWidth="4" strokeLinecap="round" opacity=".14" />
      <path d="M45.0 66.7 L158.9 66.7 L178.2 88.5 L64.2 88.5 Z" fill="#315524" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M137.0 68.5 L146.0 68.5 L146.0 54.5 L137.0 54.5 Z" fill="#7C8A73" stroke="#26401D" strokeWidth="1.2" />
      <path d="M138.0 146.0 L169.9 127.4 L169.9 87.4 L153.9 66.7 L138.0 106.0 Z" fill="#EEF4E2" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M149.2 125.5 L158.7 119.9 L158.7 105.9 L149.2 111.5 Z" fill="#CFE6A6" stroke="#26401D" strokeWidth="1" />
      <path d="M34.0 146.0 L138.0 146.0 L138.0 106.0 L34.0 106.0 Z" fill="#FFFDF5" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M46.0 133.0 L66.0 133.0 L66.0 117.0 L46.0 117.0 Z M74.0 133.0 L94.0 133.0 L94.0 117.0 L74.0 117.0 Z" fill="#CFE6A6" stroke="#26401D" strokeWidth="1" />
      <path d="M56.0 133.0 L56.0 117.0 M46.0 125.0 L66.0 125.0 M84.0 133.0 L84.0 117.0 M74.0 125.0 L94.0 125.0" stroke="#26401D" strokeWidth=".7" opacity=".55" />
      <path d="M98.5 146.0 L113.5 146.0 L113.5 119.0 L98.5 119.0 Z" fill="#4A7C2F" stroke="#26401D" strokeWidth="1.2" />
      <path d="M25.7 110.9 L139.7 110.9 L158.9 66.7 L45.0 66.7 Z" fill="#3D6A2A" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M38.9 102.8 L54.6 102.8 L60.5 89.1 L44.9 89.1 Z M58.6 102.8 L74.2 102.8 L80.1 89.1 L64.5 89.1 Z M78.2 102.8 L93.8 102.8 L99.7 89.1 L84.1 89.1 Z M97.8 102.8 L113.4 102.8 L119.4 89.1 L103.7 89.1 Z M117.4 102.8 L133.0 102.8 L139.0 89.1 L123.3 89.1 Z M46.1 86.5 L61.7 86.5 L67.7 72.8 L52.0 72.8 Z M65.7 86.5 L81.3 86.5 L87.3 72.8 L71.6 72.8 Z M85.3 86.5 L100.9 86.5 L106.9 72.8 L91.3 72.8 Z M104.9 86.5 L120.5 86.5 L126.5 72.8 L110.9 72.8 Z M124.5 86.5 L140.1 86.5 L146.1 72.8 L130.5 72.8 Z" fill="#22394A" stroke="#9FB9C9" strokeWidth=".8" strokeLinejoin="round" />
      <path d="M41.9 96.0 L57.5 96.0 M44.2 102.8 L50.1 89.1 M49.4 102.8 L55.3 89.1 M61.5 96.0 L77.2 96.0 M63.8 102.8 L69.7 89.1 M69.0 102.8 L74.9 89.1 M81.1 96.0 L96.8 96.0 M83.4 102.8 L89.3 89.1 M88.6 102.8 L94.5 89.1 M100.8 96.0 L116.4 96.0 M103.0 102.8 L108.9 89.1 M108.2 102.8 L114.2 89.1 M120.4 96.0 L136.0 96.0 M122.6 102.8 L128.6 89.1 M127.8 102.8 L133.8 89.1 M49.1 79.6 L64.7 79.6 M51.3 86.5 L57.2 72.8 M56.5 86.5 L62.4 72.8 M68.7 79.6 L84.3 79.6 M70.9 86.5 L76.9 72.8 M76.1 86.5 L82.1 72.8 M88.3 79.6 L103.9 79.6 M90.5 86.5 L96.5 72.8 M95.7 86.5 L101.7 72.8 M107.9 79.6 L123.5 79.6 M110.1 86.5 L116.1 72.8 M115.3 86.5 L121.3 72.8 M127.5 79.6 L143.1 79.6 M129.7 86.5 L135.7 72.8 M134.9 86.5 L140.9 72.8" stroke="#6F8FA3" strokeWidth=".5" opacity=".8" />
      <path d="M45.0 66.7 L158.9 66.7" stroke="#26401D" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function BusinessIllustration() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 220 160" fill="none">
      <circle cx="198" cy="26" r="16" fill="#F8B46F" opacity=".22" />
      <circle cx="198" cy="26" r="9" fill="#E8894A" />
      <path d="M212.0 26.0 L218.0 26.0 M184.0 26.0 L178.0 26.0 M198.0 40.0 L198.0 46.0 M198.0 12.0 L198.0 6.0 M207.9 35.9 L212.1 40.1 M188.1 35.9 L183.9 40.1 M207.9 16.1 L212.1 11.9 M188.1 16.1 L183.9 11.9" stroke="#E8894A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M3.8 151.3 L171.8 151.3" stroke="#26401D" strokeWidth="4" strokeLinecap="round" opacity=".14" />
      <path d="M144.0 150.0 L191.3 122.5 L191.3 80.5 L144.0 108.0 Z" fill="#E4EAD9" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M147.3 148.1 L147.3 106.1 M150.6 146.2 L150.6 104.2 M153.9 144.2 L153.9 102.2 M157.2 142.3 L157.2 100.3 M160.5 140.4 L160.5 98.4 M163.8 138.5 L163.8 96.5 M167.1 136.6 L167.1 94.6 M170.4 134.6 L170.4 92.6 M173.7 132.7 L173.7 90.7 M177.0 130.8 L177.0 88.8 M180.3 128.9 L180.3 86.9 M183.6 127.0 L183.6 85.0 M186.9 125.0 L186.9 83.0 M190.2 123.1 L190.2 81.1" stroke="#26401D" strokeWidth=".6" opacity=".35" />
      <path d="M12.0 150.0 L144.0 150.0 L144.0 108.0 L12.0 108.0 Z" fill="#F4F6EF" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M68.0 150.0 L68.0 108.0 M104.0 150.0 L104.0 108.0 M140.0 150.0 L140.0 108.0" stroke="#26401D" strokeWidth=".6" opacity=".28" />
      <path d="M72.7 150.0 L98.7 150.0 L98.7 120.0 L72.7 120.0 Z M107.0 150.0 L133.0 150.0 L133.0 120.0 L107.0 120.0 Z" fill="#B9C3AE" stroke="#26401D" strokeWidth="1.1" />
      <path d="M72.7 146.0 L98.7 146.0 M72.7 142.0 L98.7 142.0 M72.7 138.0 L98.7 138.0 M72.7 134.0 L98.7 134.0 M72.7 130.0 L98.7 130.0 M72.7 126.0 L98.7 126.0 M72.7 122.0 L98.7 122.0 M107.0 146.0 L133.0 146.0 M107.0 142.0 L133.0 142.0 M107.0 138.0 L133.0 138.0 M107.0 134.0 L133.0 134.0 M107.0 130.0 L133.0 130.0 M107.0 126.0 L133.0 126.0 M107.0 122.0 L133.0 122.0" stroke="#26401D" strokeWidth=".6" opacity=".45" />
      <path d="M18.0 128.0 L27.0 128.0 L27.0 116.0 L18.0 116.0 Z M30.0 128.0 L39.0 128.0 L39.0 116.0 L30.0 116.0 Z M42.0 128.0 L51.0 128.0 L51.0 116.0 L42.0 116.0 Z M54.0 128.0 L63.0 128.0 L63.0 116.0 L54.0 116.0 Z M18.0 144.0 L27.0 144.0 L27.0 134.0 L18.0 134.0 Z M30.0 144.0 L39.0 144.0 L39.0 134.0 L30.0 134.0 Z" fill="#CFE6A6" stroke="#26401D" strokeWidth=".9" />
      <path d="M44.0 150.0 L56.0 150.0 L56.0 133.0 L44.0 133.0 Z" fill="#4A7C2F" stroke="#26401D" strokeWidth="1.1" />
      <path d="M12.0 108.0 L144.0 108.0 L191.3 80.5 L59.3 80.5 Z" fill="#C9D3BD" stroke="#26401D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12.0 108.0 L144.0 108.0 L144.0 105.0 L12.0 105.0 Z" fill="#7C8A73" stroke="#26401D" strokeWidth="1" />
      <path d="M29.4 100.3 L46.4 100.3 L44.4 94.9 L27.4 94.9 Z M49.4 100.3 L66.4 100.3 L64.4 94.9 L47.4 94.9 Z M69.4 100.3 L86.4 100.3 L84.4 94.9 L67.4 94.9 Z M89.4 100.3 L106.4 100.3 L104.4 94.9 L87.4 94.9 Z M109.4 100.3 L126.4 100.3 L124.4 94.9 L107.4 94.9 Z M129.4 100.3 L146.4 100.3 L144.4 94.9 L127.4 94.9 Z M39.4 94.4 L56.4 94.4 L54.4 89.1 L37.4 89.1 Z M59.4 94.4 L76.4 94.4 L74.4 89.1 L57.4 89.1 Z M79.4 94.4 L96.4 94.4 L94.4 89.1 L77.4 89.1 Z M99.4 94.4 L116.4 94.4 L114.4 89.1 L97.4 89.1 Z M119.4 94.4 L136.4 94.4 L134.4 89.1 L117.4 89.1 Z M139.4 94.4 L156.4 94.4 L154.4 89.1 L137.4 89.1 Z M49.4 88.6 L66.4 88.6 L64.4 83.2 L47.4 83.2 Z M69.4 88.6 L86.4 88.6 L84.4 83.2 L67.4 83.2 Z M89.4 88.6 L106.4 88.6 L104.4 83.2 L87.4 83.2 Z M109.4 88.6 L126.4 88.6 L124.4 83.2 L107.4 83.2 Z M129.4 88.6 L146.4 88.6 L144.4 83.2 L127.4 83.2 Z M149.4 88.6 L166.4 88.6 L164.4 83.2 L147.4 83.2 Z M59.5 82.7 L76.5 82.7 L74.5 77.4 L57.5 77.4 Z M79.5 82.7 L96.5 82.7 L94.5 77.4 L77.5 77.4 Z M99.5 82.7 L116.5 82.7 L114.5 77.4 L97.5 77.4 Z M119.5 82.7 L136.5 82.7 L134.5 77.4 L117.5 77.4 Z M139.5 82.7 L156.5 82.7 L154.5 77.4 L137.5 77.4 Z M159.5 82.7 L176.5 82.7 L174.5 77.4 L157.5 77.4 Z" fill="#22394A" stroke="#9FB9C9" strokeWidth=".7" strokeLinejoin="round" />
      <path d="M28.4 97.6 L45.4 97.6 M35.0 100.3 L33.0 94.9 M40.7 100.3 L38.7 94.9 M48.4 97.6 L65.4 97.6 M55.0 100.3 L53.0 94.9 M60.7 100.3 L58.7 94.9 M68.4 97.6 L85.4 97.6 M75.0 100.3 L73.0 94.9 M80.7 100.3 L78.7 94.9 M88.4 97.6 L105.4 97.6 M95.0 100.3 L93.0 94.9 M100.7 100.3 L98.7 94.9 M108.4 97.6 L125.4 97.6 M115.0 100.3 L113.0 94.9 M120.7 100.3 L118.7 94.9 M128.4 97.6 L145.4 97.6 M135.0 100.3 L133.0 94.9 M140.7 100.3 L138.7 94.9 M38.4 91.8 L55.4 91.8 M45.1 94.4 L43.1 89.1 M50.7 94.4 L48.7 89.1 M58.4 91.8 L75.4 91.8 M65.1 94.4 L63.1 89.1 M70.7 94.4 L68.7 89.1 M78.4 91.8 L95.4 91.8 M85.1 94.4 L83.1 89.1 M90.7 94.4 L88.7 89.1 M98.4 91.8 L115.4 91.8 M105.1 94.4 L103.1 89.1 M110.7 94.4 L108.7 89.1 M118.4 91.8 L135.4 91.8 M125.1 94.4 L123.1 89.1 M130.7 94.4 L128.7 89.1 M138.4 91.8 L155.4 91.8 M145.1 94.4 L143.1 89.1 M150.7 94.4 L148.7 89.1 M48.4 85.9 L65.4 85.9 M55.1 88.6 L53.1 83.2 M60.8 88.6 L58.8 83.2 M68.4 85.9 L85.4 85.9 M75.1 88.6 L73.1 83.2 M80.8 88.6 L78.8 83.2 M88.4 85.9 L105.4 85.9 M95.1 88.6 L93.1 83.2 M100.8 88.6 L98.8 83.2 M108.4 85.9 L125.4 85.9 M115.1 88.6 L113.1 83.2 M120.8 88.6 L118.8 83.2 M128.4 85.9 L145.4 85.9 M135.1 88.6 L133.1 83.2 M140.8 88.6 L138.8 83.2 M148.4 85.9 L165.4 85.9 M155.1 88.6 L153.1 83.2 M160.8 88.6 L158.8 83.2 M58.5 80.1 L75.5 80.1 M65.2 82.7 L63.1 77.4 M70.8 82.7 L68.8 77.4 M78.5 80.1 L95.5 80.1 M85.2 82.7 L83.1 77.4 M90.8 82.7 L88.8 77.4 M98.5 80.1 L115.5 80.1 M105.2 82.7 L103.1 77.4 M110.8 82.7 L108.8 77.4 M118.5 80.1 L135.5 80.1 M125.2 82.7 L123.1 77.4 M130.8 82.7 L128.8 77.4 M138.5 80.1 L155.5 80.1 M145.2 82.7 L143.1 77.4 M150.8 82.7 L148.8 77.4 M158.5 80.1 L175.5 80.1 M165.2 82.7 L163.1 77.4 M170.8 82.7 L168.8 77.4" stroke="#6F8FA3" strokeWidth=".45" opacity=".8" />
      <path d="M66.6 85.4 L74.6 85.4 L74.6 45.4 L66.6 45.4 Z" fill="#8E9A84" stroke="#26401D" strokeWidth="1.2" />
      <path d="M66.6 53.4 L74.6 53.4" stroke="#E8894A" strokeWidth="2" />
    </svg>
  );
}

const options: AudienceOption[] = [
  {
    id: "home",
    eyebrow: "Konut",
    title: "Evim için",
    description: "Müstakil ev, apartman ve site ortak kullanım alanları",
    icon: <HomeIllustration />,
  },
  {
    id: "business",
    eyebrow: "Ticari",
    title: "İşletmem için",
    description: "Atölye, ticarethane, sanayi tesisi",
    icon: <BusinessIllustration />,
  },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="m5 12 4.2 4.2L19 6.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SelfCheck() {
  const [selected, setSelected] = useState<AudienceId | null>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectAndFocus(index: number) {
    const option = options[index];
    setSelected(option.id);
    optionRefs.current[index]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % options.length;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + options.length) % options.length;
    }

    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      selectAndFocus(nextIndex);
    }
  }

  const selectedOption = options.find((option) => option.id === selected);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4f8ee] text-murekkep">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(circle at 86% 10%, rgba(232,137,74,.22), transparent 28%), radial-gradient(circle at 10% 42%, rgba(195,229,122,.38), transparent 35%), linear-gradient(145deg, #f8fbf3 0%, #edf5e5 48%, #f9f5ea 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-[0.34]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,124,47,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,47,.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[430px] w-[430px] rounded-full border border-white/70 bg-white/30 shadow-[0_0_100px_rgba(232,137,74,0.18)] backdrop-blur-sm"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[42%] -z-10 h-80 w-80 rounded-full bg-marka-acik/20 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="py-10 sm:py-14 lg:py-16">
          <header className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-marka-yesil/25 bg-white/70 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-marka-koyu shadow-[0_8px_26px_rgba(38,64,29,.08)] backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marka-yesil opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-marka-koyu" />
              </span>
              SelfCheck
            </div>

            <h1 className="max-w-[16ch] text-[clamp(2.35rem,6vw,5.2rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-murekkep">
              Çatınıza uygun sistemi{" "}
              <span className="relative inline-block text-marka-koyu">
                birlikte
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#e8894a]"
                  viewBox="0 0 260 18"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 12C67 3 168 4 256 8"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    opacity=".8"
                  />
                </svg>
              </span>{" "}
              belirleyelim.
            </h1>

          </header>

        </div>

        <section
          aria-labelledby="audience-question"
          className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/78 p-5 shadow-[0_30px_90px_rgba(38,64,29,.14)] backdrop-blur-xl sm:rounded-[38px] sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-bl-[100%] bg-gradient-to-bl from-marka-acik/35 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-tr-[100%] bg-[#e8894a]/8" />

          <div className="relative mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="audience-question"
                className="text-2xl font-extrabold tracking-[-0.03em] text-murekkep sm:text-3xl"
              >
                Sistem nereye kurulacak?
              </h2>
            </div>
          </div>

          <div
            role="radiogroup"
            aria-labelledby="audience-question"
            className="relative grid gap-4 lg:grid-cols-2 lg:gap-6"
          >
            {options.map((option, index) => {
              const isSelected = selected === option.id;

              return (
                <button
                  key={option.id}
                  ref={(element) => {
                    optionRefs.current[index] = element;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-describedby={`${option.id}-description`}
                  tabIndex={isSelected || (selected === null && index === 0) ? 0 : -1}
                  onClick={() => setSelected(option.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group relative min-h-[285px] overflow-hidden rounded-[26px] border-2 p-5 text-left transition-[transform,border-color,box-shadow,background-color] duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-marka-acik/70 focus-visible:ring-offset-4 focus-visible:ring-offset-white motion-reduce:transition-none sm:min-h-[300px] sm:rounded-[30px] sm:p-7 ${
                    isSelected
                      ? "border-marka-yesil bg-[#f5faed] shadow-[0_24px_55px_rgba(74,124,47,.20)] lg:-translate-y-1"
                      : "border-marka-koyu/10 bg-white/85 shadow-[0_14px_36px_rgba(38,64,29,.08)] hover:-translate-y-1 hover:border-marka-yesil/55 hover:shadow-[0_24px_55px_rgba(38,64,29,.14)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute right-5 top-5 z-20 grid h-8 w-8 place-items-center rounded-full border-2 transition-colors ${
                      isSelected
                        ? "border-marka-koyu bg-murekkep text-white"
                        : "border-marka-koyu/20 bg-white/80 text-transparent"
                    }`}
                  >
                    <CheckIcon />
                  </span>

                  <span className="grid h-full grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_190px] sm:gap-5">
                    <span className="relative z-10 flex h-full flex-col justify-end">
                      <span className="mb-3 block w-fit rounded-full bg-marka-en-acik px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-marka-koyu">
                        {option.eyebrow}
                      </span>
                      <span className="block text-2xl font-extrabold tracking-[-0.03em] text-murekkep sm:text-3xl">
                        {option.title}
                      </span>
                      <span
                        id={`${option.id}-description`}
                        className="mt-2 block max-w-xs text-sm font-medium leading-6 text-murekkep-ikincil"
                      >
                        {option.description}
                      </span>
                      <span
                        className={`mt-5 inline-flex items-center gap-2 text-sm font-extrabold transition-colors ${
                          isSelected
                            ? "text-marka-koyu"
                            : "text-murekkep-ikincil group-hover:text-marka-koyu"
                        }`}
                      >
                        {isSelected ? "Seçildi" : "Bu seçeneği seç"}
                        <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                          <ArrowIcon />
                        </span>
                      </span>
                    </span>

                    <span className="relative mx-auto block h-36 w-full max-w-[220px] sm:h-48">
                      <span
                        aria-hidden="true"
                        className={`absolute inset-4 rounded-full blur-2xl transition-colors ${
                          isSelected ? "bg-marka-acik/55" : "bg-marka-acik/25"
                        }`}
                      />
                      <span className="relative block h-full w-full transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none">
                        {option.icon}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className={`relative grid transition-[grid-template-rows,opacity,margin] duration-500 motion-reduce:transition-none ${
              selected
                ? "mt-7 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 rounded-[22px] border border-marka-yesil/20 bg-marka-en-acik/38 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex items-center gap-3" aria-live="polite">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-marka-koyu text-white shadow-[0_8px_20px_rgba(74,124,47,.22)]">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-murekkep-ikincil">
                      Seçiminiz
                    </p>
                    <p className="font-extrabold text-murekkep">
                      {selectedOption?.title}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {}}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-murekkep px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(38,64,29,.28)] transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-marka-koyu hover:shadow-[0_18px_38px_rgba(38,64,29,.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-marka-acik focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  Devam
                  <span className="text-marka-acik transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`


        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
