/**
 * Brand-accurate inline SVG icons for review platforms and
 * trade certifications. Each accepts standard SVG props so the
 * caller can size them via `width` / `height` / `className`.
 *
 * Drawn from scratch — no third-party logo files required.
 * Colors approximate each brand's published guidelines.
 */
import type { SVGProps } from "react";

/* ─────────────────────────────────────────────────────────────
   Review Platforms
   ──────────────────────────────────────────────────────────── */

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84a10.13 10.13 0 0 1-4.4 6.65v5.52h7.1c4.16-3.83 6.58-9.47 6.58-16.18Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.32l-7.1-5.52c-1.97 1.32-4.49 2.1-7.46 2.1-5.74 0-10.6-3.87-12.34-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.66 28.19a13.24 13.24 0 0 1 0-8.38v-5.7H4.34a22 22 0 0 0 0 19.78l7.32-5.7Z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2A21.99 21.99 0 0 0 4.34 14.11l7.32 5.7C13.4 14.62 18.26 10.75 24 10.75Z"
      />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#1877F2" />
      <path
        fill="#fff"
        d="M28.7 25.5h4.18l.66-5.15h-4.84v-3.29c0-1.49.41-2.5 2.55-2.5h2.72V10a36.4 36.4 0 0 0-3.97-.2c-3.94 0-6.64 2.4-6.64 6.82v3.8H19v5.15h4.36V40h5.34V25.5Z"
      />
    </svg>
  );
}

export function YelpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#D32323" />
      <path
        fill="#fff"
        d="M22.6 8.5c.62-.18 1.16.07 1.42.69l.06.18 2.46 11.1c.16.7-.18 1.18-.85 1.32l-.18.02h-.18a1.06 1.06 0 0 1-.79-.36L18.5 14.5a1.16 1.16 0 0 1 .26-1.65l.16-.09 3.68-2.26Zm10.04 11.85c.7 0 1.2.47 1.27 1.13l.01.18-.07 4.32c-.02.7-.5 1.18-1.16 1.2h-.16l-4.28-.74a1.16 1.16 0 0 1-.92-1.48l.07-.16 1.97-3.74c.23-.43.66-.71 1.18-.71h.09Zm-3.36 10.6 3.8 2.06c.6.32.78.93.49 1.55l-.1.18-2.46 3.55a1.16 1.16 0 0 1-1.6.31l-.15-.1-3.18-2.85a1.16 1.16 0 0 1 .04-1.74l.14-.1 2.05-1.36a1.16 1.16 0 0 1 .97-.18l.1.05Zm-9.7-.95 1.32 3.85c.21.62-.02 1.18-.6 1.46l-.18.07-4.27 1.36c-.66.21-1.27-.13-1.46-.78l-.04-.18-.74-4.16a1.16 1.16 0 0 1 1.07-1.4l.18-.01 3.8.08a1.16 1.16 0 0 1 .92.71Zm-4.74-12.34 8.43 5.16c.6.37.7 1.04.3 1.62l-.12.14-2.78 2.81a1.16 1.16 0 0 1-1.7-.02l-.11-.13-5.5-7.5a1.36 1.36 0 0 1 1.48-2.08Z"
      />
    </svg>
  );
}

export function AngiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#FF6153" />
      <path
        fill="#fff"
        d="M24 11 12 37.5h5.4l2.2-5h8.8l2.2 5H36L24 11Zm-2.4 16.5L24 22l2.4 5.5h-4.8Z"
      />
    </svg>
  );
}

export function BbbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#005A9C" />
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#fff"
        letterSpacing="0.5"
      >
        BBB
      </text>
      <text
        x="24"
        y="34"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="12"
        fill="#fff"
      >
        A+
      </text>
      <line
        x1="10"
        y1="25"
        x2="38"
        y2="25"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function NextdoorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#8ED500" />
      <path
        fill="#fff"
        d="M24 11c-7.18 0-13 5.82-13 13v13h6V24a7 7 0 0 1 14 0v13h6V24c0-7.18-5.82-13-13-13Z"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Trade Certifications
   ──────────────────────────────────────────────────────────── */

export function NfpaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Shield silhouette */}
      <path
        d="M24 3 6 8v15.5C6 33 14 41 24 45c10-4 18-12 18-21.5V8L24 3Z"
        fill="#A02822"
      />
      <path
        d="M24 6 9 10v13c0 8 6.6 15 15 18 8.4-3 15-10 15-18V10L24 6Z"
        fill="#fff"
      />
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#A02822"
        letterSpacing="0.5"
      >
        NFPA
      </text>
      <text
        x="24"
        y="34"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="11"
        fill="#A02822"
      >
        211
      </text>
    </svg>
  );
}

export function CsiaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="10" fill="#1e3a5f" />
      {/* Chimney silhouette */}
      <path
        d="M16 14h16v4h-2v18h-12V18h-2v-4Z"
        fill="#f97316"
      />
      <path
        d="M20 18h8v18h-8V18Z"
        fill="#1e3a5f"
      />
      <text
        x="24"
        y="44"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="7"
        fill="#fff"
        letterSpacing="0.5"
      >
        CSIA
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Star (for review counts)
   ──────────────────────────────────────────────────────────── */
export function StarSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12 2.5 14.94 9 22 9.6l-5.36 4.62L18.18 21 12 17.27 5.82 21l1.54-6.78L2 9.6 9.06 9 12 2.5Z"
      />
    </svg>
  );
}
