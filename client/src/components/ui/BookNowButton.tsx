import { Link } from 'wouter';
import { Phone, ArrowRight } from 'lucide-react';

/**
 * BookNowButton — Dynamic contrast system
 *
 * bg prop tells the button what background it sits on:
 *   'light'  → white/light gray bg  → use BLUE filled button (blue on white = readable)
 *   'blue'   → blue bg              → use WHITE filled button (white on blue = readable)
 *   'dark'   → black/dark bg        → use WHITE filled button (white on dark = readable)
 *
 * type prop picks the button role:
 *   'primary'   → solid filled (bg-aware color)
 *   'secondary' → outlined (bg-aware border + text, transparent fill)
 *   'phone'     → same as primary but always shows phone icon
 */

type BgContext = 'light' | 'blue' | 'dark';
type ButtonType = 'primary' | 'secondary' | 'phone';

interface BookNowButtonProps {
  /** What background color context this button sits on */
  bg: BgContext;
  /** Visual role of the button */
  type?: ButtonType;
  text: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

// Color rules per background context
const STYLES: Record<BgContext, {
  primary: { bg: string; color: string; border: string; hoverBg: string; hoverColor: string; hoverBorder: string };
  secondary: { bg: string; color: string; border: string; hoverBg: string; hoverColor: string; hoverBorder: string };
}> = {
  // Light/white background → blue button, white outline secondary
  light: {
    primary:   { bg: 'var(--brand-blue)', color: 'white',              border: 'var(--brand-blue)',          hoverBg: 'var(--brand-blue-2)', hoverColor: 'white',              hoverBorder: 'var(--brand-blue-2)' },
    secondary: { bg: 'transparent',       color: 'var(--brand-blue)',  border: 'var(--brand-blue)',          hoverBg: 'var(--brand-blue)',   hoverColor: 'white',              hoverBorder: 'var(--brand-blue)' },
  },
  // Blue background → white button, white outline secondary
  blue: {
    primary:   { bg: 'white',             color: 'var(--brand-blue)',  border: 'white',                     hoverBg: 'rgba(255,255,255,0.88)', hoverColor: 'var(--brand-blue-2)', hoverBorder: 'white' },
    secondary: { bg: 'transparent',       color: 'white',              border: 'rgba(255,255,255,0.75)',     hoverBg: 'rgba(255,255,255,0.15)', hoverColor: 'white',              hoverBorder: 'white' },
  },
  // Dark/black background → white button, white outline secondary
  dark: {
    primary:   { bg: 'white',             color: 'var(--brand-navy)',  border: 'white',                     hoverBg: 'rgba(255,255,255,0.88)', hoverColor: 'var(--brand-navy)',   hoverBorder: 'white' },
    secondary: { bg: 'transparent',       color: 'white',              border: 'rgba(255,255,255,0.75)',     hoverBg: 'rgba(255,255,255,0.15)', hoverColor: 'white',              hoverBorder: 'white' },
  },
};

export default function BookNowButton({
  bg,
  type = 'primary',
  text,
  href,
  size = 'md',
  showIcon = true,
  className = '',
}: BookNowButtonProps) {
  const heights    = { sm: '40px', md: '48px', lg: '56px' };
  const fontSizes  = { sm: '12px', md: '13px', lg: '15px' };
  const paddings   = { sm: '0 16px', md: '0 24px', lg: '0 32px' };

  // phone type uses primary colors
  const role = type === 'phone' ? 'primary' : type;
  const colors = STYLES[bg][role];

  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    borderRadius: '2px',
    transition: 'all 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    minHeight: heights[size],
    padding: paddings[size],
    fontSize: fontSizes[size],
    textDecoration: 'none',
    cursor: 'pointer',
    border: `2px solid ${colors.border}`,
    background: colors.bg,
    color: colors.color,
    whiteSpace: 'nowrap' as const,
  };

  const hoverStyle: React.CSSProperties = {
    background: colors.hoverBg,
    color: colors.hoverColor,
    borderColor: colors.hoverBorder,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, hoverStyle);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = colors.bg;
    el.style.color = colors.color;
    el.style.borderColor = colors.border;
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  const icon = type === 'phone'
    ? <Phone size={size === 'lg' ? 18 : 15} />
    : <ArrowRight size={size === 'lg' ? 18 : 15} />;

  const content = (
    <>
      {showIcon && icon}
      {text}
    </>
  );

  if (href?.startsWith('tel:') || href?.startsWith('mailto:')) {
    return (
      <a href={href} style={baseStyle} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </a>
    );
  }

  if (href?.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={baseStyle} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </Link>
    );
  }

  return (
    <button style={baseStyle} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {content}
    </button>
  );
}
