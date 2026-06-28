"use client";

import type { ServiceId } from "@/core/config/site";

/**
 * Abstraktné brandové vizuály pre jednotlivé služby.
 * Vektorové (ostré na každom displeji, žiadne ťažké obrázky).
 * `light` prepína kontrast pre svetlé sekcie.
 */
export default function ServiceVisual({
  id,
  light = false,
}: {
  id: ServiceId;
  light?: boolean;
}) {
  const stroke = light ? "rgba(10,10,11,0.14)" : "rgba(255,255,255,0.12)";
  const faint = light ? "rgba(10,10,11,0.05)" : "rgba(255,255,255,0.04)";

  if (id === "web") {
    return (
      <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Ukážka tvorby webstránok">
        <defs>
          <linearGradient id="webG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8124" />
            <stop offset="100%" stopColor="#e55400" />
          </linearGradient>
        </defs>
        {/* browser frame */}
        <rect x="40" y="48" width="400" height="264" rx="18" fill={faint} stroke={stroke} />
        <line x1="40" y1="92" x2="440" y2="92" stroke={stroke} />
        <circle cx="66" cy="70" r="5" fill="url(#webG)" />
        <circle cx="84" cy="70" r="5" fill={stroke} />
        <circle cx="102" cy="70" r="5" fill={stroke} />
        {/* hero block */}
        <rect x="64" y="116" width="180" height="20" rx="6" fill="url(#webG)" />
        <rect x="64" y="146" width="240" height="10" rx="5" fill={stroke} />
        <rect x="64" y="164" width="200" height="10" rx="5" fill={stroke} />
        <rect x="64" y="196" width="92" height="30" rx="15" fill="url(#webG)" />
        {/* cards */}
        <rect x="280" y="116" width="136" height="80" rx="12" fill={faint} stroke={stroke} className="animate-pulse-glow" />
        <rect x="64" y="246" width="110" height="46" rx="12" fill={faint} stroke={stroke} />
        <rect x="190" y="246" width="110" height="46" rx="12" fill={faint} stroke={stroke} />
        <rect x="316" y="246" width="100" height="46" rx="12" fill="url(#webG)" opacity="0.18" />
        {/* cursor */}
        <g className="animate-float-slow">
          <path d="M360 196 l0 34 l9 -9 l7 15 l7 -3 l-7 -15 l13 0 z" fill={light ? "#0a0a0b" : "#f7f6f4"} />
        </g>
      </svg>
    );
  }

  if (id === "content") {
    return (
      <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Ukážka kreatívneho obsahu a vizualizácií">
        <defs>
          <linearGradient id="contG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8124" />
            <stop offset="100%" stopColor="#e55400" />
          </linearGradient>
        </defs>
        {/* stacked media frames */}
        <rect x="96" y="70" width="220" height="200" rx="18" fill={faint} stroke={stroke} transform="rotate(-8 206 170)" />
        <rect x="150" y="60" width="220" height="200" rx="18" fill={faint} stroke={stroke} transform="rotate(6 260 160)" />
        <rect x="130" y="84" width="220" height="200" rx="18" fill={light ? "rgba(255,106,0,0.08)" : "rgba(255,106,0,0.10)"} stroke="url(#contG)" />
        {/* play button */}
        <circle cx="240" cy="184" r="40" fill="url(#contG)" className="animate-pulse-glow" />
        <path d="M230 166 l26 18 l-26 18 z" fill="#fff" />
        {/* sparkles */}
        <g className="animate-float-slow">
          <path d="M380 96 l5 14 l14 5 l-14 5 l-5 14 l-5 -14 l-14 -5 l14 -5 z" fill="url(#contG)" />
        </g>
        <path d="M104 250 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3 z" fill={stroke} />
        <circle cx="400" cy="250" r="6" fill="url(#contG)" />
      </svg>
    );
  }

  // ai
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Ukážka AI automatizácií">
      <defs>
        <linearGradient id="aiG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8124" />
          <stop offset="100%" stopColor="#e55400" />
        </linearGradient>
      </defs>
      {/* connections */}
      <g stroke={stroke} strokeWidth="1.5">
        <line x1="90" y1="110" x2="240" y2="180" />
        <line x1="90" y1="250" x2="240" y2="180" />
        <line x1="240" y1="180" x2="390" y2="100" />
        <line x1="240" y1="180" x2="390" y2="180" />
        <line x1="240" y1="180" x2="390" y2="260" />
        <line x1="90" y1="110" x2="90" y2="250" />
      </g>
      {/* central core */}
      <circle cx="240" cy="180" r="54" fill="none" stroke="url(#aiG)" strokeWidth="2" className="animate-spin-slow" strokeDasharray="10 8" style={{ transformOrigin: "240px 180px" }} />
      <circle cx="240" cy="180" r="30" fill="url(#aiG)" className="animate-pulse-glow" />
      <path d="M232 172 h16 v16 h-16 z" fill="#fff" opacity="0.9" />
      {/* nodes */}
      {[
        [90, 110],
        [90, 250],
        [390, 100],
        [390, 180],
        [390, 260],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="12" fill={faint} stroke="url(#aiG)" strokeWidth="2" />
      ))}
      {/* orbiting particle */}
      <g className="animate-float-slow">
        <circle cx="240" cy="100" r="5" fill="url(#aiG)" />
      </g>
    </svg>
  );
}
