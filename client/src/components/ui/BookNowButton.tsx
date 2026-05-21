import React from 'react';
import { Link } from 'wouter';
import { Phone, ArrowRight } from 'lucide-react';

/**
 * BookNowButton — Design System v2
 *
 * 4 button variants with clear contrast rules:
 *
 *  variant="primary"          → cyan-blue PILL    → works on ANY background
 *  variant="secondary"        → outlined ink      → on white/light backgrounds only
 *  variant="secondary-light"  → outlined white    → on dark/blue/photo backgrounds only
 *  variant="emergency"        → red PILL          → phone/24-7 CTAs only
 *  variant="phone"            → alias for emergency
 *
 * bg prop (optional helper):
 *  bg="light"  → if variant omitted, renders "primary"
 *  bg="blue"   → if variant omitted, renders "primary"
 *  bg="dark"   → if variant omitted, renders "primary"
 *
 * The bg prop is also used by parent sections to auto-pick the right
 * secondary variant when two buttons appear side-by-side.
 */

type BgContext = 'light' | 'blue' | 'dark';
type ButtonType = 'primary' | 'secondary' | 'secondary-light' | 'emergency' | 'phone';

interface BookNowButtonProps {
  /** What background this button sits on — drives auto secondary variant */
  bg?: BgContext;
  /** Explicit button variant — overrides bg-based auto-selection */
  variant?: ButtonType;
  text: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

function getStyle(type: ButtonType, size: 'sm' | 'md' | 'lg'): React.CSSProperties {
  const pad   = { sm: '10px 18px', md: '13px 24px', lg: '16px 32px' }[size];
  const fs    = { sm: '13px', md: '15px', lg: '16px' }[size];

  const base: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: fs,
    padding: pad,
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)',
  };

  switch (type) {
    case 'primary':
      return { ...base, background: 'var(--brand-blue)', color: '#fff', borderRadius: '999px' };

    case 'secondary':
      return { ...base, background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', borderRadius: '4px' };

    case 'secondary-light':
      return { ...base, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)', borderRadius: '4px' };

    case 'emergency':
    case 'phone':
      return {
        ...base,
        background: 'var(--emergency)',
        color: '#fff',
        borderRadius: '999px',
        fontFamily: 'var(--font-label)',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        fontSize: size === 'lg' ? '14px' : '13px',
        padding: size === 'lg' ? '14px 26px' : pad,
      };
    default:
      return { ...base, background: 'var(--brand-blue)', color: '#fff', borderRadius: '999px' };
  }
}

function getHoverStyle(type: ButtonType): React.CSSProperties {
  switch (type) {
    case 'primary':
      return { background: 'var(--brand-blue-hover)', boxShadow: 'var(--shadow-brand)' };
    case 'secondary':
      return { background: 'var(--ink)', color: '#fff' };
    case 'secondary-light':
      return { background: '#fff', color: 'var(--brand-navy)', borderColor: '#fff' };
    case 'emergency':
    case 'phone':
      return { background: 'var(--emergency-hover)' };
    default:
      return { background: 'var(--brand-blue-hover)' };
  }
}

function resolveType(variant?: ButtonType, bg?: BgContext): ButtonType {
  if (variant === 'phone') return 'emergency'; // phone is alias for emergency
  if (variant) return variant;
  return 'primary'; // default to primary on any background
}

export default function BookNowButton({
  bg = 'light',
  variant,
  text,
  href = '/contact',
  size = 'md',
  showIcon = true,
  className = '',
}: BookNowButtonProps) {
  const resolvedType = resolveType(variant, bg);
  const [hovered, setHovered] = React.useState(false);

  const style = {
    ...getStyle(resolvedType, size),
    ...(hovered ? getHoverStyle(resolvedType) : {}),
  };

  const icon = resolvedType === 'emergency'
    ? <Phone size={size === 'lg' ? 16 : 14} />
    : <ArrowRight
        size={size === 'lg' ? 16 : 14}
        style={{
          transition: 'transform 120ms cubic-bezier(0.22,1,0.36,1)',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        }}
      />;

  const content = (
    <>
      {showIcon && icon}
      {text}
    </>
  );

  const events = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.transform = 'translateY(1px)';
    },
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.transform = '';
    },
  };

  if (resolvedType === 'emergency') {
    return (
      <a href="tel:+13016795849" style={style} className={className} {...events}>
        {content}
      </a>
    );
  }

  if (href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} style={style} className={className} {...events}>
        {content}
      </a>
    );
  }

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style} className={className} {...events}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} style={style} className={className} {...events}>
      {content}
    </Link>
  );
}
