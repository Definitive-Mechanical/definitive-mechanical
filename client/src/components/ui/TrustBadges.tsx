/**
 * TrustBadges — Design System CertBar
 * Uses the actual SVG badge images: mdot-mbe, va-swam, cage, google-reviews, years, dmv
 * Variant "dark" = on navy background (hero), "light" = on white/paper background
 */

interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  /** Pass badge keys to filter: 'mdot-mbe' | 'va-swam' | 'cage' | 'google-reviews' | 'years' | 'dmv' */
  badges?: string[];
}

const ALL_BADGES = [
  { key: 'mdot-mbe', src: '/manus-storage/mdot-mbe_6828ed58.svg', alt: 'MDOT MBE Certified — Minority Business Enterprise' },
  { key: 'va-swam', src: '/manus-storage/va-swam_8af52c17.svg', alt: 'Virginia SWaM — Small Women-Owned Minority Business' },
  { key: 'cage', src: '/manus-storage/cage_583d6988.svg', alt: 'Federal CAGE Code 8HCF6' },
  { key: 'google-reviews', src: '/manus-storage/google-reviews_bff3e9fc.svg', alt: '4.8 on Google — 40+ Verified Reviews' },
  { key: 'years', src: '/manus-storage/years_b9ac7de5.svg', alt: '11 Years Serving the DMV' },
  { key: 'dmv', src: '/manus-storage/dmv_30e2ff57.svg', alt: 'Serving MD · DC · VA' },
];

export default function TrustBadges({ variant = 'dark', size = 'md', badges }: TrustBadgesProps) {
  const filtered = badges
    ? ALL_BADGES.filter(b => badges.includes(b.key))
    : ALL_BADGES;

  const imgHeight = size === 'sm' ? '52px' : '64px';

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: size === 'sm' ? '12px' : '16px',
        alignItems: 'center',
      }}
    >
      {filtered.map((badge) => (
        <img
          key={badge.key}
          src={badge.src}
          alt={badge.alt}
          style={{
            height: imgHeight,
            width: 'auto',
            display: 'block',
            opacity: variant === 'dark' ? 0.95 : 1,
          }}
        />
      ))}
    </div>
  );
}
