interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  /** light=true → on dark/blue/photo backgrounds */
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '48px', textAlign: centered ? 'center' : 'left' }}>
      {eyebrow && (
        <p style={{
          fontFamily: 'var(--font-label)',
          fontWeight: 600,
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: 'var(--brand-blue)',
          marginBottom: '14px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--brand-blue)', flexShrink: 0 }} />
          {eyebrow}
        </p>
      )}
      <h2 style={{color: '#ffffff'}}>
        {heading}
      </h2>
      {subtext && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          color: '#ffffff',
          fontSize: '17px',
          lineHeight: 1.7,
          maxWidth: centered ? '60ch' : 'none',
          margin: centered ? '0 auto' : '0', color: '#ffffff',
        }}>
          {subtext}
        </p>
      )}
    </div>
  );
}

import React from 'react';
