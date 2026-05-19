interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  badges?: string[];
}

const DEFAULT_BADGES = [
  '11 Years in Business',
  '24/7 Emergency Service',
  'Licensed Master Plumber/Gasfitter',
  'MDOT MBE Certified',
  'VA SWaM Certified',
  'Commercial & Residential',
  'Financing Available',
];

export default function TrustBadges({ variant = 'light', size = 'md', badges = DEFAULT_BADGES }: TrustBadgesProps) {
  const isLight = variant === 'light';
  const isSm = size === 'sm';

  const badgeStyle: React.CSSProperties = {
    fontFamily: 'Barlow Condensed, Arial, sans-serif',
    fontWeight: 700,
    fontSize: isSm ? '10px' : '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    padding: isSm ? '5px 12px' : '6px 14px',
    borderRadius: '2px',
    whiteSpace: 'nowrap',
    ...(isLight
      ? { background: 'rgba(0,158,198,0.1)', border: '1px solid rgba(0,158,198,0.3)', color: '#007BA0' }
      : { background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white' }),
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
      {badges.map((badge) => (
        <span key={badge} style={badgeStyle}>{badge}</span>
      ))}
    </div>
  );
}
