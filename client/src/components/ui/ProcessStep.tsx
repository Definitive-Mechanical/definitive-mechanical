import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, icon, isLast = false }: ProcessStepProps) {
  const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<LucideProps>>)[icon] || Icons.CheckCircle;

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      {/* Left: number + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: '#fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '18px',
          flexShrink: 0,
        }}>
          {number}
        </div>
        {!isLast && (
          <div style={{ width: '2px', height: '40px', background: 'var(--border)', margin: '4px 0' }} />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingTop: '8px', paddingBottom: isLast ? '0' : '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: 'rgba(24,96,144,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <IconComponent size={14} color="var(--brand-blue)" />
          </div>
          <h4 style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            color: 'var(--brand-navy)',
            fontSize: '16px',
          }}>
            {title}
          </h4>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          color: 'var(--ink-2)',
          fontSize: '14px',
          lineHeight: 1.7,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}
