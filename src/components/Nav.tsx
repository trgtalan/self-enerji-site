"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Üst çubuk — yalnız menü düğmesi. Marka açılışta duruyor, burada tekrarlanmıyor.
 *
 * İstemci bileşeni: menünün bağlantıya tıklayınca, dışarı tıklayınca ve Esc ile
 * kapanması gerekiyor. Bunlar `<details>` ile yapılamıyordu — menü açık kalıyordu.
 */

const BAGLANTILAR = [
  { ad: "Hakkımızda", href: "#hakkimizda" },
  { ad: "SelfCheck", href: "/hesapla" },
  { ad: "Süreç", href: "#surec" },
  { ad: "Nasıl çalışır", href: "#nasil-calisir" },
  { ad: "Sorular", href: "#sorular" },
  { ad: "Keşif talebi", href: "#iletisim" },
];

export function Nav() {
  const [acik, setAcik] = useState(false);
  const kutu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!acik) return;
    const disari = (e: MouseEvent) => {
      if (kutu.current && !kutu.current.contains(e.target as Node)) setAcik(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAcik(false);
    document.addEventListener("mousedown", disari);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", disari);
      document.removeEventListener("keydown", esc);
    };
  }, [acik]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e4e7e0]/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-end px-6 sm:px-10">
        <div ref={kutu} className="relative">
          <button
            type="button"
            aria-expanded={acik}
            aria-controls="ana-menu"
            onClick={() => setAcik((a) => !a)}
            className="flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-murekkep"
          >
            <span aria-hidden className="relative block h-[13px] w-[22px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute left-0 block h-px w-full bg-murekkep transition-transform duration-200 motion-reduce:transition-none"
                  style={{
                    top: i === 0 ? 0 : i === 1 ? "6px" : "12px",
                    transform: acik
                      ? i === 0
                        ? "translateY(6px) rotate(45deg)"
                        : i === 1
                          ? "scaleX(0)"
                          : "translateY(-6px) rotate(-45deg)"
                      : undefined,
                  }}
                />
              ))}
            </span>
            <span className="sr-only">Menü</span>
          </button>

          {acik && (
            <div
              id="ana-menu"
              className="absolute right-0 top-[calc(100%+14px)] w-[228px] border border-[#e4e7e0] bg-white py-2 shadow-[0_12px_32px_rgba(38,64,29,0.07)]"
            >
              {BAGLANTILAR.map((b) =>
                b.href.startsWith("#") ? (
                  <a
                    key={b.ad}
                    href={b.href}
                    onClick={() => setAcik(false)}
                    className="block px-5 py-3 text-[0.95rem] text-murekkep-ikincil transition-colors hover:bg-[#f4f8ee] hover:text-murekkep"
                  >
                    {b.ad}
                  </a>
                ) : (
                  <Link
                    key={b.ad}
                    href={b.href}
                    onClick={() => setAcik(false)}
                    className="block px-5 py-3 text-[0.95rem] text-murekkep-ikincil transition-colors hover:bg-[#f4f8ee] hover:text-murekkep"
                  >
                    {b.ad}
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
