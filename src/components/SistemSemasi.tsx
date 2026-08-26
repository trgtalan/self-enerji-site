"use client";

/**
 * Çatı üstü GES şeması — güneşten şebekeye enerji yolu.
 *
 * Fotoğraf yerine teknik çizim: bir mühendislik firmasının sayfasında doğal
 * durur, uydurma veri gerektirmez. Akış noktaları hat boyunca ilerler;
 * hareket azaltma tercihinde durur.
 *
 * Ölçüler viewBox içinde sabit; sayfa genişliğine göre ölçeklenir.
 */

const DURAKLAR = [
  { x: 232, ad: "Panel", alt: "Doğru akım" },
  { x: 452, ad: "İnvertör", alt: "Alternatif akıma çevirir" },
  { x: 672, ad: "Pano ve sayaç", alt: "Ölçüm ve dağıtım" },
  { x: 892, ad: "Şebeke", alt: "Fazlası mahsuplaşır" },
];

export function SistemSemasi() {
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 980 330"
        className="block w-full"
        role="img"
        aria-label="Çatı üstü güneş enerjisi sistemi: panelden invertöre, panodan şebekeye enerji yolu"
      >
        <defs>
          <marker
            id="ok"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="#7c8a73" />
          </marker>
        </defs>

        {/* ——— güneş ışınları: sol üstten panele ——— */}
        <g stroke="#e8a35c" strokeWidth="1.25" strokeLinecap="round">
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={70 + i * 26}
              y1={38}
              x2={140 + i * 26}
              y2={112}
              markerEnd="url(#ok)"
              opacity={0.75}
            />
          ))}
        </g>
        <text x="62" y="26" className="fill-[#b8752f] text-[13px]" fontWeight="500">
          Güneş
        </text>

        {/* ——— çatı ve panel ——— */}
        <g>
          {/* çatı eğimi */}
          <path
            d="M150 196 L232 132 L314 196"
            fill="none"
            stroke="#26401d"
            strokeWidth="1.5"
          />
          {/* ev gövdesi */}
          <path d="M164 196 L164 262 L300 262 L300 196" fill="none" stroke="#26401d" strokeWidth="1.5" />
          {/* panel dizisi — çatı eğimine oturur */}
          <g stroke="#4a7c2f" strokeWidth="1.25" fill="#e2f5c4">
            <path d="M176 186 L236 139 L268 139 L212 186 Z" />
            <path d="M218 186 L274 139 L306 139 L262 186 Z" opacity="0.72" />
          </g>
          {/* panel hücre çizgileri */}
          <g stroke="#4a7c2f" strokeWidth="0.6" opacity="0.5">
            <line x1="196" y1="171" x2="252" y2="152" />
            <line x1="238" y1="171" x2="290" y2="152" />
          </g>
        </g>

        {/* ——— invertör ——— */}
        <g>
          <rect x="418" y="168" width="68" height="80" fill="none" stroke="#26401d" strokeWidth="1.5" />
          <path d="M434 200 L452 200 L452 216 L470 216" fill="none" stroke="#4a7c2f" strokeWidth="1.5" />
          <circle cx="452" cy="186" r="2.5" fill="#7fb843" />
        </g>

        {/* ——— pano ve sayaç ——— */}
        <g>
          <rect x="640" y="168" width="64" height="80" fill="none" stroke="#26401d" strokeWidth="1.5" />
          <circle cx="672" cy="196" r="15" fill="none" stroke="#4a7c2f" strokeWidth="1.25" />
          <line x1="672" y1="196" x2="672" y2="186" stroke="#4a7c2f" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="672" y1="196" x2="680" y2="201" stroke="#4a7c2f" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="654" y1="228" x2="690" y2="228" stroke="#26401d" strokeWidth="1" opacity="0.4" />
        </g>

        {/* ——— şebeke direği ——— */}
        <g stroke="#26401d" strokeWidth="1.5" fill="none">
          <line x1="892" y1="140" x2="892" y2="262" />
          <line x1="862" y1="160" x2="922" y2="160" />
          <line x1="868" y1="182" x2="916" y2="182" />
          <path d="M876 160 L892 178 L908 160" strokeWidth="0.9" opacity="0.45" />
        </g>

        {/* ——— zemin ——— */}
        <line x1="40" y1="262" x2="940" y2="262" stroke="#e4e7e0" strokeWidth="1" />

        {/* ——— hatlar ——— */}
        <g stroke="#c8d1c2" strokeWidth="1.25" fill="none">
          <line x1="314" y1="208" x2="418" y2="208" />
          <line x1="486" y1="208" x2="640" y2="208" />
          <line x1="704" y1="208" x2="892" y2="208" />
        </g>

        {/* ——— akan enerji ——— */}
        <g className="akis">
          {[
            { x1: 314, x2: 418, gecikme: "0s" },
            { x1: 486, x2: 640, gecikme: "0.55s" },
            { x1: 704, x2: 892, gecikme: "1.1s" },
          ].map((h) => (
            <circle key={h.x1} r="3" cy="208" fill="#7fb843">
              <animate
                attributeName="cx"
                from={h.x1}
                to={h.x2}
                dur="1.7s"
                begin={h.gecikme}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="1.7s"
                begin={h.gecikme}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* ——— etiketler ——— */}
        <g textAnchor="middle">
          {DURAKLAR.map((d) => (
            <g key={d.ad}>
              <text x={d.x} y="292" className="fill-[#26401d] text-[13.5px]" fontWeight="500">
                {d.ad}
              </text>
              <text x={d.x} y="311" className="fill-[#7c8a73] text-[11.5px]">
                {d.alt}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </figure>
  );
}
