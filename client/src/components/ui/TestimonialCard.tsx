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
      borderLeft: '4px solid #009EC6',
      borderRadius: '6px',
      padding: '32px',
      boxShadow: '0 2px 12px rgba(0,48,96,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large quote mark */}
      <span style={{
        position: 'absolute',
        top: '-10px',
        left: '16px',
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '72px',
        color: '#009EC6',
        opacity: 0.15,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        "
      </span>

      <StarRating rating={5} count={0} />

      <p style={{
        fontFamily: 'Barlow, Arial, sans-serif',
        fontWeight: 400,
        fontStyle: 'italic',
        color: '#484848',
        fontSize: '15px',
        lineHeight: 1.7,
        margin: '12px 0 16px',
      }}>
        "{quote}"
      </p>

      <div>
        <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '14px', marginBottom: '2px' }}>
          {name}
        </p>
        <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 400, color: '#787878', fontSize: '13px' }}>
          {location} · {service}
        </p>
      </div>
    </div>
  );
}
