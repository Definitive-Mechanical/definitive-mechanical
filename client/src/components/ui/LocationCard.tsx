import { Link } from 'wouter';

interface LocationCardProps {
  city: string;
  state: string;
  href: string;
  description?: string;
}

export default function LocationCard({ city, state, href, description }: LocationCardProps) {
  return (
    <Link
      href={href}
      className="block no-underline"
      style={{
        background: 'white',
        border: '1px solid #E8EFF5',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 12px rgba(29,108,163,0.08)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(6,59,99,0.16)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(29,108,163,0.08)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Header */}
      <div style={{
        height: '80px',
        background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-blue))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'white',
          fontSize: '18px',
        }}>
          {city}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          color: 'var(--brand-navy)',
          fontSize: '16px',
          marginBottom: description ? '8px' : '12px',
        }}>
          {city}, {state}
        </p>
        {description && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            color: 'var(--ink-2)',
            fontSize: '13px',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}>
            {description}
          </p>
        )}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'var(--brand-cyan)',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          View Service Area →
        </span>
      </div>
    </Link>
  );
}
