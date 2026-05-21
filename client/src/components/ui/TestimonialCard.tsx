import StarRating from './StarRating';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  service: string;
}

export default function TestimonialCard({ quote, name, location, service }: TestimonialCardProps) {
  return (
    <div style={{
      background: 'white',
      borderLeft: '4px solid var(--brand-cyan)',
      borderRadius: '6px',
      padding: '32px',
      boxShadow: '0 2px 12px rgba(29,108,163,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large quote mark */}
      <span style={{
        position: 'absolute',
        top: '-10px',
        left: '16px',
        fontFamily: 'var(--font-display)',
        fontSize: '72px',
        color: 'var(--brand-cyan)',
        opacity: 0.15,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        "
      </span>

      <StarRating rating={5} count={0} />

      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--ink-2)',
        fontSize: '15px',
        lineHeight: 1.7,
        margin: '12px 0 16px',
      }}>
        "{quote}"
      </p>

      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '2px' }}>
          {name}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--ink-3)', fontSize: '13px' }}>
          {location}  {service}
        </p>
      </div>
    </div>
  );
}
