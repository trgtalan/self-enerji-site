"use client";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Kilit } from "@/components/Logo";

/**
 * Üst çubuk — solda marka, sağda menü düğmesi.
 *
 * Menü sağdan kayan bir sütun olarak açılır. İstemci bileşeni: panelin
 * bağlantıya tıklayınca, örtüye tıklayınca ve Esc ile kapanması gerekiyor —
 * bunlar `<details>` ile yapılamıyordu.
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

  useEffect(() => {
    if (!acik) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAcik(false);
    document.addEventListener("keydown", esc);
    const eskiTasma = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = eskiTasma;
    };
  }, [acik]);

  return (
    <>
      <nav className="sticky top-0 z-[70] border-b border-[#e4e7e0]/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6 sm:px-10">
          <a href="#" aria-label="Self Enerji — sayfa başı" className="flex-none">
            <Kilit yukseklik={32} />
          </a>

          <button
            type="button"
            aria-expanded={acik}
            aria-controls="ana-menu"
            onClick={() => setAcik((a) => !a)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-murekkep"
          >
            <span aria-hidden className="relative block h-[13px] w-[22px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute left-0 block h-px w-full bg-murekkep transition-transform duration-300 motion-reduce:transition-none"
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
        </div>
      </nav>

      {/* Örtü — tıklanınca kapanır. Kapalıyken tıklamayı geçirir. */}
      <div
        aria-hidden
        onClick={() => setAcik(false)}
        className={`fixed inset-0 z-[60] bg-murekkep/25 transition-opacity duration-300 motion-reduce:transition-none ${
          acik ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sağdan kayan sütun */}
      <aside
        id="ana-menu"
        aria-label="Menü"
        className={`fixed right-0 top-0 z-[65] flex h-full w-[min(84vw,340px)] flex-col border-l border-[#e4e7e0] bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
          acik ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[68px] flex-none" />
        <div className="flex flex-col overflow-y-auto px-7 pb-10 sm:px-9">
          {BAGLANTILAR.map((b, i) => {
            const sinif = `block border-b border-[#eef0ec] py-[18px] text-[1.22rem] tracking-[-0.022em] text-murekkep transition-opacity hover:opacity-55 ${
              i === BAGLANTILAR.length - 1 ? "border-b-0" : ""
            }`;
            return b.href.startsWith("#") ? (
              <a
                key={b.ad}
                href={b.href}
                tabIndex={acik ? 0 : -1}
                onClick={() => setAcik(false)}
                className={sinif}
              >
                {b.ad}
              </a>
            ) : (
              <Link
                key={b.ad}
                href={b.href}
                tabIndex={acik ? 0 : -1}
                onClick={() => setAcik(false)}
                className={sinif}
              >
                {b.ad}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
