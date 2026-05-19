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
        border: '1px solid #E8EFF5',
        borderTop: '3px solid #009EC6',
        borderRadius: '6px',
        padding: '32px',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,48,96,0.08)',
        position: 'relative',
        display: 'block',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,48,96,0.16)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,48,96,0.08)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {featured && (
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: '#009EC6',
          color: 'white',
          fontFamily: 'Barlow Condensed, Arial, sans-serif',
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
        background: 'rgba(0,158,198,0.1)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <IconComponent size={24} color="#009EC6" />
      </div>

      <h3 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontWeight: 600,
        color: '#003060',
        fontSize: '18px',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'Barlow, Arial, sans-serif',
        fontWeight: 400,
        color: '#484848',
        fontSize: '14px',
        lineHeight: 1.7,
        marginBottom: '20px',
      }}>
        {description}
      </p>

      <span style={{
        fontFamily: 'Barlow Condensed, Arial, sans-serif',
        fontWeight: 700,
        color: '#009EC6',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        VIEW SERVICE →
      </span>
    </Link>
  );
}
