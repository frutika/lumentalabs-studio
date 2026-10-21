/**
 * The redesign's wordmark glyph: a rounded square with the accent "lumen" dot.
 * Decorative - it always sits next to the studio name, which is the link text.
 * The favicon and social card still use public/media/logo-mark.svg.
 */
export default function BrandMark({ size = 22 }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="20" rx="6" stroke="var(--text)" strokeWidth="1.5" />
      <circle cx="15" cy="7" r="3" fill="var(--accent)" />
      <path d="M5 17 L12 10" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
