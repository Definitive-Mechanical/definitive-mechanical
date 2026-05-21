import BookNowButton from './BookNowButton';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn?: { text: string; href: string };
  variant?: 'navy' | 'gradient';
}

export default function CTABanner({ heading, subtext, primaryBtn, secondaryBtn }: CTABannerProps) {
  return (
    <section style={{
      background: 'var(--brand-navy)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle blue left-edge accent rule — matches design system CTAStrip */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 6,
        background: 'var(--brand-blue)',
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: 'white',
          fontSize: 'clamp(28px, 4vw, 44px)',
          marginBottom: '16px',
          lineHeight: 1.1,
        }}>
          {heading}
        </h2>
        {subtext && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.78)',
            fontSize: '17px',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}>
            {subtext}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookNowButton bg="dark" variant="primary" text={primaryBtn.text} href={primaryBtn.href} size="lg" />
          {secondaryBtn && (
            <BookNowButton bg="dark" variant="secondary" text={secondaryBtn.text} href={secondaryBtn.href} size="lg" />
          )}
        </div>
      </div>
    </section>
  );
}
