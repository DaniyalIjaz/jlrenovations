import { useId } from "react";

/**
 * Instagram glyph rendered with a gold gradient stroke so it sits on-brand
 * with the rest of the site (gold / black / white). Uses `useId` so multiple
 * instances on the same page don't collide on `<linearGradient>` ids.
 */
export default function InstagramIcon({ size = 16, className = "" }) {
  const rid = useId();
  const gradId = `ig-gold-${rid.replace(/:/g, "")}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d27f" />
          <stop offset="50%" stopColor="#d4a44a" />
          <stop offset="100%" stopColor="#a8801f" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
