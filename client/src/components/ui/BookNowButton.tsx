import { Link } from 'wouter';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface BookNowButtonProps {
  variant: 'phone' | 'navy' | 'outline' | 'ghost';
  text: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export default function BookNowButton({
  variant,
  text,
  href,
  size = 'md',
  showIcon = true,
  className = '',
}: BookNowButtonProps) {
  const heights = { sm: '40px', md: '48px', lg: '56px' };
  const fontSizes = { sm: '12px', md: '13px', lg: '15px' };
  const paddings = { sm: '0 16px', md: '0 24px', lg: '0 32px' };

  const baseStyle: React.CSSProperties = {
    fontFamily: 'Barlow Condensed, Arial, sans-serif',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    minHeight: heights[size],
    padding: paddings[size],
    fontSize: fontSizes[size],
    textDecoration: 'none',
    cursor: 'pointer',
    border: '2px solid transparent',
    whiteSpace: 'nowrap' as const,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    phone: { background: '#009EC6', color: '#003060', borderColor: '#009EC6' },
    navy: { background: '#003060', color: 'white', borderColor: '#003060' },
    outline: { background: 'transparent', color: 'white', borderColor: 'white' },
    ghost: { background: 'transparent', color: '#009EC6', borderColor: '#009EC6' },
  };

  const hoverStyles: Record<string, React.CSSProperties> = {
    phone: { background: '#007BA0', borderColor: '#007BA0', boxShadow: '0 4px 20px rgba(0,158,198,0.35)', transform: 'translateY(-2px)' },
    navy: { background: '#002050', borderColor: '#002050', transform: 'translateY(-2px)' },
    outline: { background: 'white', color: '#003060', transform: 'translateY(-2px)' },
    ghost: { background: '#009EC6', color: 'white', transform: 'translateY(-2px)' },
  };

  const style = { ...baseStyle, ...variantStyles[variant] };
  const icon = variant === 'phone' ? <Phone size={size === 'lg' ? 18 : 15} /> : <ArrowRight size={size === 'lg' ? 18 : 15} />;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, hoverStyles[variant]);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, variantStyles[variant]);
    (e.currentTarget as HTMLElement).style.transform = '';
    (e.currentTarget as HTMLElement).style.boxShadow = '';
  };

  const content = (
    <>
      {showIcon && icon}
      {text}
    </>
  );

  if (href?.startsWith('tel:') || href?.startsWith('mailto:')) {
    return (
      <a href={href} style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </a>
    );
  }

  if (href?.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </Link>
    );
  }

  return (
    <button style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {content}
    </button>
  );
}
