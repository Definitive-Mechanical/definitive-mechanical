import BookNowButton from './BookNowButton';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn?: { text: string; href: string };
  variant?: 'navy' | 'gradient';
}

export default function CTABanner({ heading, subtext, primaryBtn, secondaryBtn, variant = 'gradient' }: CTABannerProps) {
  const bg = variant === 'navy'
    ? '#003060'
    : 'linear-gradient(135deg, #003060 0%, #001830 60%, rgba(0,158,198,0.15) 100%)';

  return (
    <section style={{ background: bg, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Diagonal overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,158,198,0.05)',
        transform: 'skewY(-3deg)',
        transformOrigin: 'top left',
        pointerEvents: 'none',
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 700,
          color: 'white',
          fontSize: 'clamp(22px, 3vw, 32px)',
          marginBottom: '16px',
          lineHeight: 1.3,
        }}>
          {heading}
        </h2>
        {subtext && (
          <p style={{
            fontFamily: 'Barlow, Arial, sans-serif',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.8)',
            fontSize: '17px',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}>
            {subtext}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookNowButton variant="phone" text={primaryBtn.text} href={primaryBtn.href} size="lg" />
          {secondaryBtn && (
            <BookNowButton variant="outline" text={secondaryBtn.text} href={secondaryBtn.href} size="lg" />
          )}
        </div>
      </div>
    </section>
  );
}
