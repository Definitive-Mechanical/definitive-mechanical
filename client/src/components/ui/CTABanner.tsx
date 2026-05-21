import BookNowButton from './BookNowButton';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn?: { text: string; href: string };
  variant?: 'navy' | 'gradient' | 'light';
}

export default function CTABanner({ heading, subtext, primaryBtn, secondaryBtn }: CTABannerProps) {
  return (
    <section style={{ background: 'white', padding: '80px 0', borderTop: '1px solid #E6E8EE', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--brand-blue), var(--brand-navy))',
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          color: '#0A0A0A',
          fontSize: 'clamp(22px, 2.8vw, 34px)',
          marginBottom: '16px',
          lineHeight: 1.05,
        }}>
          {heading}
        </h2>
        {subtext && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            color: 'var(--ink-2)',
            fontSize: '17px',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}>
            {subtext}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookNowButton variant="navy" text={primaryBtn.text} href={primaryBtn.href} size="lg" />
          {secondaryBtn && (
            <BookNowButton variant="ghost" text={secondaryBtn.text} href={secondaryBtn.href} size="lg" />
          )}
        </div>
      </div>
    </section>
  );
}
