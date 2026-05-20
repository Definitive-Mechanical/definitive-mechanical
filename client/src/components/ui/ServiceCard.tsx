import { Link } from 'wouter';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  iconName: string;
  featured?: boolean;
}

export default function ServiceCard({ title, description, href, iconName, featured }: ServiceCardProps) {
  const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<LucideProps>>)[iconName] || Icons.Wrench;

  return (
    <Link
      href={href}
      className="block no-underline group"
      style={{
        background: 'white',
        border: '1px solid #E6E8EE',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(6,59,99,0.08)',
        transition: 'transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)',
        display: 'block',
        position: 'relative',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(6,59,99,0.16)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(6,59,99,0.08)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Navy gradient icon header */}
      <div style={{
        aspectRatio: '4/3',
        background: 'linear-gradient(135deg, #063B63, #0a3a5e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {featured && (
          <span style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'var(--brand-cyan)',
            color: 'var(--brand-navy)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '3px 8px',
            borderRadius: '2px',
          }}>
            Most Popular
          </span>
        )}
        <IconComponent size={56} color="#4FB3E8" strokeWidth={1.8} />
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: '18px',
          color: 'var(--brand-navy)',
          marginBottom: '6px',
          lineHeight: 1.15,
        }}>
          {title}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          color: 'var(--ink-2)',
          fontSize: '13px',
          lineHeight: 1.5,
          marginBottom: '10px',
          margin: '6px 0 10px',
        }}>
          {description}
        </p>

        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: '#0075BA',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          Read more →
        </span>
      </div>
    </Link>
  );
}
