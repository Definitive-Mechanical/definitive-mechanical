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
        border: '1px solid var(--border)',
        borderTop: '3px solid var(--brand-blue)',
        borderRadius: '8px',
        padding: '32px 28px 28px',
        transition: 'transform 0.22s var(--ease-out), box-shadow 0.22s var(--ease-out)',
        boxShadow: 'var(--shadow-1)',
        position: 'relative',
        display: 'block',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-2)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-1)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {featured && (
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--brand-blue)',
          color: 'white',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          padding: '3px 8px',
          borderRadius: '2px',
        }}>
          Most Popular
        </span>
      )}

      <div style={{
        width: '48px',
        height: '48px',
        background: 'rgba(0,117,186,0.08)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <IconComponent size={24} color="var(--brand-blue)" />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: 'var(--brand-navy)',
        fontSize: '20px',
        marginBottom: '10px',
        lineHeight: 1.15,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        color: 'var(--ink-2)',
        fontSize: '14px',
        lineHeight: 1.7,
        marginBottom: '20px',
      }}>
        {description}
      </p>

      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--brand-blue)',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        VIEW SERVICE →
      </span>
    </Link>
  );
}
