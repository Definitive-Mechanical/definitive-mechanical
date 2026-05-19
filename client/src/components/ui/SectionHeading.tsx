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
          fontFamily: 'Barlow Condensed, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: light ? 'rgba(255,255,255,0.7)' : '#009EC6',
          marginBottom: '12px',
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontWeight: 700,
        color: light ? 'white' : '#003060',
        fontSize: 'clamp(22px, 3vw, 36px)',
        lineHeight: 1.25,
        marginBottom: subtext ? '16px' : '0',
      }}>
        {heading}
      </h2>
      {subtext && (
        <p style={{
          fontFamily: 'Barlow, Arial, sans-serif',
          fontWeight: 400,
          color: light ? 'rgba(255,255,255,0.75)' : '#787878',
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
