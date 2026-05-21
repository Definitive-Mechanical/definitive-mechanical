import { Link } from 'wouter';
import { Phone, ArrowRight } from 'lucide-react';

interface BookNowButtonProps {
  variant: 'phone' | 'white' | 'navy' | 'outline' | 'ghost';
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
    fontFamily: 'var(--font-display)',
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

  // phone variant = red ONLY when it is an actual tel: call link
  // For non-tel hrefs using variant="phone", treat as white
  const isEmergencyCall = href?.startsWith('tel:');
  const effectiveVariant = variant === 'phone' && !isEmergencyCall ? 'white' : variant;

  const variantStyles: Record<string, React.CSSProperties> = {
    phone: { background: 'var(--brand-blue)', color: 'white', borderColor: 'var(--brand-blue)' },
    white: { background: 'white', color: 'var(--brand-navy)', borderColor: 'white' },
    navy: { background: 'var(--brand-blue)', color: 'white', borderColor: 'var(--brand-blue)' },
    outline: { background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.7)' },
    ghost: { background: 'transparent', color: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' },
  };

  const hoverStyles: Record<string, React.CSSProperties> = {
    phone: { background: '#005fa3', borderColor: '#005fa3', boxShadow: '0 4px 20px rgba(0,117,186,0.35)', transform: 'translateY(-2px)' },
    white: { background: '#f0f4f8', borderColor: '#f0f4f8', transform: 'translateY(-2px)' },
    navy: { background: '#005fa3', borderColor: '#005fa3', transform: 'translateY(-2px)' },
    outline: { background: 'white', color: 'var(--brand-navy)', borderColor: 'white', transform: 'translateY(-2px)' },
    ghost: { background: 'var(--brand-blue)', color: 'white', transform: 'translateY(-2px)' },
  };

  const style = { ...baseStyle, ...variantStyles[effectiveVariant] };
  const icon = (variant === 'phone' || effectiveVariant === 'phone')
    ? <Phone size={size === 'lg' ? 18 : 15} />
    : <ArrowRight size={size === 'lg' ? 18 : 15} />;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, hoverStyles[effectiveVariant]);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, variantStyles[effectiveVariant]);
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
