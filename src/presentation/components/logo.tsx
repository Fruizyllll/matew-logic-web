import Image from "next/image";

const WORDMARK_LIGHT = "/matewlogic-logo-light.png"; // text biely + gradient M (pre tmavé pozadie)
const WORDMARK_RATIO = 290 / 103;

/**
 * Vektorová značka „M“ v brandovom gradiente (magenta → oranžová).
 * Vektor = ostrá pri akomkoľvek priblížení (používa sa v intro zoome).
 */
export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ml-m" x1="8" y1="50" x2="92" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ec0a72" />
          <stop offset="0.5" stopColor="#f5301a" />
          <stop offset="1" stopColor="#f5530f" />
        </linearGradient>
      </defs>
      <path
        d="M9 84 L30 18 L50 52 L70 18 L91 84"
        stroke="url(#ml-m)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Plné logo (wordmark) — reálny obrázok firmy.
 * Svetlá verzia (biely text) pre tmavé pozadie webu.
 */
export default function Logo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={WORDMARK_LIGHT}
      alt="MatewLogic"
      width={Math.round(height * WORDMARK_RATIO)}
      height={height}
      priority
      className={className}
    />
  );
}
