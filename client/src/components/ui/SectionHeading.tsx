interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, heading, subtext, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '48px', textAlign: centered ? 'center' : 'left' }}>
      {eyebrow && (
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: light ? 'rgba(255,255,255,0.7)' : 'var(--brand-cyan)',
          marginBottom: '12px',
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: light ? 'white' : 'var(--brand-navy)',
        fontSize: 'clamp(26px, 3.5vw, 42px)',
        lineHeight: 1.1,
        marginBottom: subtext ? '16px' : '0',
      }}>
        {heading}
      </h2>
      {subtext && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          color: light ? 'rgba(255,255,255,0.75)' : 'var(--ink-2)',
          fontSize: '16px',
          lineHeight: 1.7,
          maxWidth: centered ? '672px' : 'none',
          margin: centered ? '0 auto' : '0',
        }}>
          {subtext}
        </p>
      )}
    </div>
  );
}
