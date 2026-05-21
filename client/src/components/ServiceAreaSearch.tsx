// ServiceAreaSearch — Zip code service area lookup widget
// Design: Navy var(--brand-navy) / Cyan var(--brand-cyan) brand system
// Barlow Condensed display, Public Sans body

import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { MapPin, CheckCircle, XCircle, Phone, ArrowRight, Search } from 'lucide-react';
import { lookupZip } from '@/lib/serviceAreaZips';
import { BUSINESS } from '@/lib/constants';

interface ServiceAreaSearchProps {
  /** 'hero' = large version for homepage hero; 'inline' = compact for hub pages */
  variant?: 'hero' | 'inline';
}

export default function ServiceAreaSearch({ variant = 'inline' }: ServiceAreaSearchProps) {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<ReturnType<typeof lookupZip> | null>(null);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (zip.trim().length < 5) {
      inputRef.current?.focus();
      return;
    }
    const match = lookupZip(zip);
    setResult(match);
    setSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZip(val);
    if (searched) {
      setSearched(false);
      setResult(null);
    }
  };

  const isHero = variant === 'hero';

  return (
    <div style={{ width: '100%', maxWidth: isHero ? '520px' : '480px' }}>
      {/* Label */}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: isHero ? '12px' : '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: isHero ? 'rgba(255,255,255,0.7)' : 'var(--brand-cyan)',
        marginBottom: '10px',
      }}>
        Check If We Service Your Area
      </p>

      {/* Input Row */}
      <div style={{ display: 'flex', gap: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <MapPin
            size={16}
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--brand-cyan)',
              pointerEvents: 'none',
            }}
          />
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            placeholder="Enter your zip code"
            value={zip}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={5}
            style={{
              width: '100%',
              height: isHero ? '56px' : '48px',
              paddingLeft: '40px',
              paddingRight: '12px',
              fontFamily: 'var(--font-body)',
              fontSize: isHero ? '16px' : '15px',
              color: 'var(--brand-navy)',
              background: 'white',
              border: 'none',
              outline: 'none',
              borderRadius: '2px 0 0 2px',
            }}
          />
        </div>
        <button
          onClick={handleSearch}
          style={{
            height: isHero ? '56px' : '48px',
            padding: '0 20px',
            background: 'var(--brand-cyan)',
            color: 'var(--brand-navy)',
            border: 'none',
            borderRadius: '0 2px 2px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand-blue-2)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand-cyan)'; }}
        >
          <Search size={15} />
          Check
        </button>
      </div>

      {/* Result Panel */}
      {searched && result && (
        <div
          style={{
            marginTop: '12px',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}
        >
          {result.served ? (
            /* ---- YES, WE SERVE YOU ---- */
            <div style={{ background: 'white' }}>
              {/* Green header bar */}
              <div style={{ background: '#059669', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={20} style={{ color: 'white', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', margin: 0 }}>
                    Great news — we serve your area!
                  </p>
                </div>
              </div>
              {/* Details */}
              <div style={{ padding: '16px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--brand-navy)' }}>{result.city}</strong>
                  {result.county ? `, ${result.county}` : ''}
                  {result.stateLabel ? ` — ${result.stateLabel}` : ''}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {result.cityPageHref && (
                    <Link
                      href={result.cityPageHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--brand-cyan)',
                        textDecoration: 'none',
                      }}
                    >
                      <ArrowRight size={14} />
                      View {result.city} Service Page
                    </Link>
                  )}
                  {result.countyPageHref && (
                    <Link
                      href={result.countyPageHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--brand-navy)',
                        textDecoration: 'none',
                      }}
                    >
                      <ArrowRight size={14} />
                      View {result.county} Hub
                    </Link>
                  )}
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'var(--brand-blue)',
                      color: 'white',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '10px 16px',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      marginTop: '4px',
                      width: 'fit-content',
                    }}
                  >
                    <Phone size={14} />
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* ---- OUTSIDE SERVICE AREA ---- */
            <div style={{ background: 'white' }}>
              {/* Amber header bar */}
              <div style={{ background: '#B45309', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <XCircle size={20} style={{ color: 'white', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', margin: 0 }}>
                  Outside our standard area
                </p>
              </div>
              <div style={{ padding: '16px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', marginBottom: '12px' }}>
                  We don&apos;t currently have a listed page for zip code <strong>{zip}</strong>, but we may still be able to help — call us to confirm.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--brand-blue)',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '10px 16px',
                    borderRadius: '2px',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={14} />
                  Call {BUSINESS.phone}
                </a>
                <Link
                  href="/service-areas"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--brand-cyan)',
                    textDecoration: 'none',
                    marginLeft: '16px',
                  }}
                >
                  View All Areas →
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
