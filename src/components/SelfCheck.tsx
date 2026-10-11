"use client";

import { useState } from "react";

/**
 * SelfCheck sihirbazı — ilk adım: kitle seçimi.
 * Konut ile işletme farklı sorular soruyor (sözleşme gücü, vardiya, malik onayı),
 * ayrım bu yüzden en başta yapılıyor.
 */

type Kitle = "ev" | "isletme";

const SECENEKLER: { id: Kitle; ad: string; not: string }[] = [
  { id: "ev", ad: "Evim için", not: "Müstakil ev, apartman dairesi, site" },
  { id: "isletme", ad: "İşletmem için", not: "Atölye, ticarethane, sanayi tesisi" },
];

function EvIkon() {
  return (
    <svg viewBox="0 0 48 40" width="48" height="40" aria-hidden fill="none" strokeLinejoin="round">
      <path d="M4 18 L24 4 L44 18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 15 L9 36 L39 36 L39 15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 36 L20 26 L28 26 L28 36" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function IsletmeIkon() {
  return (
    <svg viewBox="0 0 48 40" width="48" height="40" aria-hidden fill="none" strokeLinejoin="round">
      <path d="M4 36 L4 16 L16 8 L16 16 L28 8 L28 16 L40 8 L44 8 L44 36 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 36 L11 28 L19 28 L19 36" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M26 24 L36 24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export function SelfCheck() {
  const [kitle, setKitle] = useState<Kitle | null>(null);

  return (
    <div>
      <p id="soru-kitle" className="text-[1.06rem] font-medium tracking-[-0.02em] text-murekkep">
        Sistem nereye kurulacak?
      </p>

      <div
        role="radiogroup"
        aria-labelledby="soru-kitle"
        className="mt-6 grid gap-px border border-[#e4e7e0] bg-[#e4e7e0] sm:grid-cols-2"
      >
        {SECENEKLER.map((s) => {
          const secili = kitle === s.id;
          return (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={secili}
              onClick={() => setKitle(s.id)}
              className={`group flex items-start gap-6 p-7 text-left transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-murekkep sm:p-9 ${
                secili ? "bg-[#f4f8ee]" : "bg-white hover:bg-[#fbfaf7]"
              }`}
            >
              <span className={secili ? "text-marka-koyu" : "text-murekkep"}>
                {s.id === "ev" ? <EvIkon /> : <IsletmeIkon />}
              </span>
              <span className="flex-1">
                <span className="block text-[1.18rem] font-medium tracking-[-0.022em] text-murekkep">
                  {s.ad}
                </span>
                <span className="mt-1.5 block text-[0.92rem] leading-relaxed text-murekkep-ikincil">
                  {s.not}
                </span>
              </span>
              <span
                aria-hidden
                className={`mt-1 flex h-5 w-5 flex-none items-center justify-center border transition-colors ${
                  secili ? "border-marka-koyu bg-marka-koyu" : "border-[#c8d1c2]"
                }`}
              >
                {secili && <span className="h-1.5 w-1.5 bg-white" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
