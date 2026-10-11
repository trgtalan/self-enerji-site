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

const steps = ["Kitle", "Tüketim", "Çatı", "Konum", "Sonuç"];

function HomeIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 220 160"
      fill="none"
    >
      <defs>
        <linearGradient id="home-wall" x1="58" y1="67" x2="168" y2="150">
          <stop stopColor="#FFFDF5" />
          <stop offset="1" stopColor="#E2F5C4" />
        </linearGradient>
        <linearGradient id="home-roof" x1="58" y1="55" x2="174" y2="102">
          <stop stopColor="#315524" />
          <stop offset="1" stopColor="#4A7C2F" />
        </linearGradient>
        <linearGradient id="home-panel" x1="93" y1="58" x2="152" y2="85">
          <stop stopColor="#315A58" />
          <stop offset="1" stopColor="#172F2D" />
        </linearGradient>
        <filter id="home-shadow" filterUnits="userSpaceOnUse" x="20" y="22" width="190" height="140">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="9"
            floodColor="#26401D"
            floodOpacity=".18"
          />
        </filter>
      </defs>

      <circle cx="179" cy="36" r="18" fill="#F8B46F" opacity=".26" />
      <circle cx="179" cy="36" r="10" fill="#E8894A" />
      <path
        d="M179 12v8M179 52v8M155 36h8M195 36h8M162 19l6 6M190 47l6 6M196 19l-6 6M168 47l-6 6"
        stroke="#E8894A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <g filter="url(#home-shadow)">
        <path
          d="M52 87 109 40l59 47v58H52V87Z"
          fill="url(#home-wall)"
        />
        <path
          d="m40 90 68-57a4 4 0 0 1 5 0l69 57-9 11-63-51-61 51-9-11Z"
          fill="url(#home-roof)"
        />
        <path
          d="m84 72 24-20 47 38H105L84 72Z"
          fill="url(#home-panel)"
          stroke="#9CC7B5"
          strokeWidth="2"
        />
        <path d="m105 55 1 35M128 71l-1 19" stroke="#77A7A0" />
        <path d="m94 64 48 1M101 77h49" stroke="#77A7A0" />
        <rect x="72" y="101" width="27" height="23" rx="4" fill="#B9DB74" />
        <path d="M85.5 101v23M72 112.5h27" stroke="#7BA94B" />
        <path
          d="M119 99h26v46h-26V99Z"
          fill="#4A7C2F"
          stroke="#315524"
          strokeWidth="2"
        />
        <circle cx="138" cy="122" r="2" fill="#D9EFAD" />
        <path
          d="M42 145h139"
          stroke="#315524"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".26"
        />
      </g>
    </svg>
  );
}

function BusinessIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 220 160"
      fill="none"
    >
      <defs>
        <linearGradient id="factory-wall" x1="48" y1="74" x2="174" y2="146">
          <stop stopColor="#F7FBEF" />
          <stop offset="1" stopColor="#CDE99B" />
        </linearGradient>
        <linearGradient id="factory-roof" x1="45" y1="72" x2="183" y2="98">
          <stop stopColor="#26401D" />
          <stop offset="1" stopColor="#4A7C2F" />
        </linearGradient>
        <linearGradient id="factory-panel" x1="70" y1="52" x2="166" y2="83">
          <stop stopColor="#3C716B" />
          <stop offset="1" stopColor="#173330" />
        </linearGradient>
        <filter id="factory-shadow" filterUnits="userSpaceOnUse" x="20" y="23" width="190" height="140">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="9"
            floodColor="#26401D"
            floodOpacity=".18"
          />
        </filter>
      </defs>

      <circle cx="180" cy="34" r="10" fill="#E8894A" />
      <path
        d="M180 12v8M180 48v8M158 34h8M194 34h8M164 18l6 6M190 44l6 6M196 18l-6 6"
        stroke="#E8894A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <g filter="url(#factory-shadow)">
        <path
          d="M41 88h138v57H41V88Z"
          fill="url(#factory-wall)"
          stroke="#4A7C2F"
          strokeWidth="2"
        />
        <path
          d="M35 89 62 65h116l9 24H35Z"
          fill="url(#factory-roof)"
        />
        <path
          d="m67 70 13-14h82l8 27H55l12-13Z"
          fill="url(#factory-panel)"
          stroke="#9AC1B9"
          strokeWidth="2"
        />
        <path d="m89 56-7 27M116 56l-4 27M142 56l1 27" stroke="#79A9A2" />
        <path d="M63 69h103" stroke="#79A9A2" />
        <path
          d="M49 48h16v26H49V48Z"
          fill="#61765B"
          stroke="#40543A"
          strokeWidth="2"
        />
        <path d="M48 47h18" stroke="#26401D" strokeWidth="4" strokeLinecap="round" />
        <rect x="57" y="105" width="35" height="40" rx="3" fill="#4A7C2F" />
        <path d="M74.5 105v40" stroke="#9ACA68" strokeWidth="2" />
        <rect x="108" y="105" width="19" height="17" rx="3" fill="#A8D263" />
        <rect x="140" y="105" width="19" height="17" rx="3" fill="#A8D263" />
        <path
          d="M32 145h157"
          stroke="#315524"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".26"
        />
      </g>
    </svg>
  );
}

const options: AudienceOption[] = [
  {
    id: "home",
    eyebrow: "Konut",
    title: "Evim için",
    description: "Müstakil ev, apartman dairesi, site",
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
        <section
          aria-label="SelfCheck ilerleme durumu"
          className="relative overflow-hidden rounded-[24px] border border-white/80 bg-white/72 p-4 shadow-[0_18px_65px_rgba(38,64,29,0.10)] backdrop-blur-xl sm:rounded-[30px] sm:p-6"
        >
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-marka-acik to-transparent" />

          <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-murekkep text-marka-acik shadow-[0_8px_22px_rgba(38,64,29,.25)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                >
                  <path
                    d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3.6" fill="currentColor" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-marka-koyu">
                  SelfCheck
                </p>
                <p className="text-sm font-bold text-murekkep">Sistem keşfi</p>
              </div>
            </div>

            <span className="rounded-full border border-marka-yesil/20 bg-marka-en-acik/60 px-3 py-1.5 text-xs font-extrabold text-marka-koyu">
              1 / 5
            </span>
          </div>

          <ol className="grid grid-cols-5 gap-2" aria-label="Hesaplama adımları">
            {steps.map((step, index) => {
              const active = index === 0;

              return (
                <li
                  key={step}
                  aria-current={active ? "step" : undefined}
                  className="relative"
                >
                  <div
                    className={`mb-2 h-1.5 overflow-hidden rounded-full ${
                      active ? "bg-marka-yesil" : "bg-marka-koyu/12"
                    }`}
                  >
                    {active && (
                      <span className="block h-full w-full origin-left animate-[progress-in_.7s_ease-out_both] rounded-full bg-gradient-to-r from-marka-acik via-marka-yesil to-marka-koyu motion-reduce:animate-none" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-extrabold ${
                        active
                          ? "bg-murekkep text-white shadow-[0_5px_12px_rgba(38,64,29,.2)]"
                          : "bg-marka-koyu/8 text-murekkep-ikincil"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`hidden text-xs font-bold sm:block ${
                        active ? "text-murekkep" : "text-murekkep-ikincil/70"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="grid items-end gap-8 py-10 sm:py-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-16">
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

            <p className="mt-7 max-w-xl text-base font-medium leading-7 text-murekkep-ikincil sm:text-lg sm:leading-8">
              İhtiyacınızı doğru akışla değerlendirebilmemiz için önce kullanım
              tipini seçin. Sonraki adımlarda tüketim, çatı ve konum bilgilerinizi
              birlikte ele alacağız.
            </p>
          </header>

          <div
            aria-hidden="true"
            className="relative mx-auto hidden h-[230px] w-full max-w-md lg:block"
          >
            <div className="absolute left-14 top-3 h-44 w-44 animate-[soft-float_6s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-[#ffc786] to-[#e8894a] shadow-[0_25px_80px_rgba(232,137,74,.32)] motion-reduce:animate-none" />
            <div className="absolute left-[104px] top-[52px] h-24 w-24 rounded-full border border-white/45" />
            <div className="absolute bottom-1 right-3 w-72 rounded-[28px] border border-white/80 bg-white/68 p-5 shadow-[0_24px_70px_rgba(38,64,29,.15)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-murekkep text-marka-acik shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M4 16.5 9.2 11l3.3 3.2L20 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 6.5h5v5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-marka-koyu">
                    Adım adım
                  </p>
                  <p className="mt-1 text-sm font-bold text-murekkep">
                    Size uygun akışla ilerleyin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="audience-question"
          className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/78 p-5 shadow-[0_30px_90px_rgba(38,64,29,.14)] backdrop-blur-xl sm:rounded-[38px] sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-bl-[100%] bg-gradient-to-bl from-marka-acik/35 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-tr-[100%] bg-[#e8894a]/8" />

          <div className="relative mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-marka-koyu">
                Adım 01 · Kitle
              </p>
              <h2
                id="audience-question"
                className="text-2xl font-extrabold tracking-[-0.03em] text-murekkep sm:text-3xl"
              >
                Sistem nereye kurulacak?
              </h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-6 text-murekkep-ikincil">
              Seçiminiz, devamındaki soruları kullanım tipinize göre düzenler.
            </p>
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

        <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-center text-xs font-semibold leading-5 text-murekkep-ikincil/80 sm:text-sm">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-marka-koyu"
            fill="none"
          >
            <path
              d="M7 10V8a5 5 0 0 1 10 0v2M6 10h12v10H6V10Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Seçiminizi klavyedeki yön tuşlarıyla da değiştirebilirsiniz.
        </p>
      </div>

      <style>{`
        @keyframes soft-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes progress-in {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
