import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface StatsCardProps {
  number: string;
  label: string;
  icon: string;
  bg?: string;
}

export default function StatsCard({ number, label, icon, bg = 'white' }: StatsCardProps) {
  const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<LucideProps>>)[icon] || Icons.Award;

  return (
    <div style={{
      background: bg,
      borderRadius: '4px',
      padding: '24px',
      boxShadow: '0 2px 12px rgba(0,160,200,0.08)',
      textAlign: 'center',
    }}>
      <IconComponent size={28} color="#6090C0" />
      <p style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--brand-cyan)',
        fontSize: '48px',
        lineHeight: 1,
        margin: '8px 0 4px',
      }}>
        {number}
      </p>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: 'var(--ink-2)',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        {label}
      </p>
    </div>
  );
}
