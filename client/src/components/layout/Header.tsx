import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import {
  Phone, Menu, X, ChevronDown, ChevronRight
} from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Commercial & Gov', href: '/commercial-plumbing', hasDropdown: 'commercial' },
  { label: 'Service Areas', href: '/service-areas', hasDropdown: 'areas' },
  { label: 'About', href: '/about' },
  { label: 'Financing', href: '/financing' },
  { label: 'Contact', href: '/contact' },
];

const MEGA_MENU = {
  col1: {
    title: 'Emergency & Drain',
    items: [
      { label: 'Emergency Plumbing (24/7)', href: '/emergency-plumbing' },
      { label: 'Drain Cleaning', href: '/drain-cleaning' },
      { label: 'Hydro-Jetting', href: '/hydro-jetting' },
      { label: 'Video Camera Inspection', href: '/video-camera-inspection' },
      { label: 'Sewer Line Repair', href: '/sewer-line-repair' },
      { label: 'Sewer Line Installation', href: '/sewer-line-installation' },
    ],
  },
  col2: {
    title: 'Water, Gas & More',
    items: [
      { label: 'Water Heater Repair', href: '/water-heater-repair' },
      { label: 'Water Heater Installation', href: '/water-heater-installation' },
      { label: 'Tankless Water Heaters', href: '/tankless-water-heaters' },
      { label: 'Gas Line Repair', href: '/gas-line-repair' },
      { label: 'Gas Line Installation', href: '/gas-line-installation' },
      { label: 'Gas Leak Repair', href: '/gas-leak-repair' },
    ],
  },
  col3: {
    title: 'Backflow & Fixtures',
    items: [
      { label: 'Backflow Prevention', href: '/backflow-prevention' },
      { label: 'Backflow Certification', href: '/backflow-certification' },
      { label: 'Water Line Repair', href: '/water-line-repair' },
      { label: 'Water Line Installation', href: '/water-line-installation' },
      { label: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair' },
      { label: 'Faucet & Toilet Repair', href: '/faucet-toilet-repair' },
    ],
  },
};

const COMMERCIAL_DROPDOWN = [
  { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
  { label: 'Government / Municipal', href: '/government-municipal-plumbing' },
  { label: 'MBE Certified Plumber MD', href: '/mbe-certified-plumbing-contractor-maryland' },
  { label: 'SWaM Certified Plumber VA', href: '/swam-certified-plumbing-contractor-virginia' },
];

const AREAS_DROPDOWN = [
  { label: 'Maryland', href: '/service-areas/maryland' },
  { label: 'Washington DC', href: '/service-areas/washington-dc' },
  { label: 'Northern Virginia', href: '/service-areas/northern-virginia' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobile = (key: string) => {
    setMobileExpanded(prev => prev === key ? null : key);
  };

  return (
    <>
      {/* Emergency Announcement Bar — single line sm+, two-line stacked on xs */}
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="fixed top-0 left-0 right-0 z-[101] no-underline flex items-center justify-center"
        style={{ background: 'var(--brand-red)' }}
      >
        {/* sm+ : single row */}
        <span
          className="hidden sm:flex items-center gap-2"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'white', height: '36px', whiteSpace: 'nowrap' }}
        >
          <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: 'white', animation: 'pulse-dot 1.4s ease-in-out infinite', flexShrink: 0 }} />
          24/7 Emergency Plumbing — Call Now: {BUSINESS.phone}
          <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: 'white', animation: 'pulse-dot 1.4s ease-in-out infinite 0.7s', flexShrink: 0 }} />
        </span>
        {/* xs only : two stacked centered lines */}
        <span
          className="sm:hidden flex flex-col items-center text-center"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'white', padding: '6px 0', lineHeight: 1.5 }}
        >
          <span className="flex items-center gap-1">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'pulse-dot 1.4s ease-in-out infinite', flexShrink: 0 }} />
            24/7 Emergency Plumbing
          </span>
          <span>Call Now: {BUSINESS.phone}</span>
        </span>
      </a>

      {/* Desktop Header */}
      <header
        className="fixed left-0 right-0 z-[100] transition-shadow duration-300 announcement-offset header-height"
        style={{
          background: 'var(--brand-navy)',
          boxShadow: scrolled ? 'var(--shadow-hero)' : '0 2px 8px rgba(6,59,99,0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo — new SVG */}
          <Link href="/" className="flex items-center no-underline" style={{ flexShrink: 0 }}>
            <img
              src="/manus-storage/logo-knockout_7a8a46a2.svg"
              alt="Definitive Mechanical — Licensed Plumbing MD, DC & VA"
              style={{ height: '44px', width: 'auto', display: 'block' }}
              onError={(e) => {
                // Fallback to old PNG if SVG fails
                (e.currentTarget as HTMLImageElement).src = '/manus-storage/definitive-mechanical-logo_0084eea2.png';
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMega) setMegaOpen(true);
                  if (item.hasDropdown === 'commercial') setCommercialOpen(true);
                  if (item.hasDropdown === 'areas') setAreasOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.hasMega) setMegaOpen(false);
                  if (item.hasDropdown === 'commercial') setCommercialOpen(false);
                  if (item.hasDropdown === 'areas') setAreasOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 no-underline transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.88)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
                >
                  {item.label}
                  {(item.hasMega || item.hasDropdown) && <ChevronDown size={12} />}
                </Link>

                {/* Services Megamenu */}
                {item.hasMega && megaOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] shadow-2xl"
                    style={{
                      background: 'var(--brand-navy-2)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderTop: '3px solid var(--brand-blue)',
                      borderRadius: '0 0 8px 8px',
                    }}
                  >
                    <div className="grid grid-cols-3 gap-0 p-6">
                      {[MEGA_MENU.col1, MEGA_MENU.col2, MEGA_MENU.col3].map((col) => (
                        <div key={col.title} className="px-4">
                          <p style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 700,
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.18em',
                            color: 'var(--brand-cyan)',
                            marginBottom: '12px',
                          }}>
                            {col.title}
                          </p>
                          {col.items.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-1.5 no-underline transition-colors duration-150"
                              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}
                              onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 24px' }}>
                      <Link href="/services" className="no-underline" style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--brand-cyan)',
                      }}>
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Commercial Dropdown */}
                {item.hasDropdown === 'commercial' && commercialOpen && (
                  <div
                    className="absolute top-full left-0 w-64 shadow-2xl"
                    style={{
                      background: 'var(--brand-navy-2)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderTop: '3px solid var(--brand-blue)',
                      borderRadius: '0 0 8px 8px',
                    }}
                  >
                    <div className="py-2">
                      {COMMERCIAL_DROPDOWN.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-5 py-2.5 no-underline transition-colors duration-150"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Areas Dropdown */}
                {item.hasDropdown === 'areas' && areasOpen && (
                  <div
                    className="absolute top-full left-0 w-64 shadow-2xl"
                    style={{
                      background: 'var(--brand-navy-2)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderTop: '3px solid var(--brand-blue)',
                      borderRadius: '0 0 8px 8px',
                    }}
                  >
                    <div className="py-2">
                      {AREAS_DROPDOWN.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-5 py-2.5 no-underline transition-colors duration-150"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Phone CTA — red primary per design system */}
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 no-underline dm-btn dm-btn-primary"
            style={{ fontSize: '13px', letterSpacing: '0.08em', borderRadius: '6px', minHeight: '44px', padding: '0 20px' }}
          >
            <Phone size={15} />
            CALL {BUSINESS.phone}
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center"
            style={{ width: '48px', height: '48px', color: 'white', background: 'none', border: 'none' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Spacer — sm+: 36px bar + 72px header = 108px; xs: 42px bar + 56px header = 98px */}
      <div style={{ height: '108px' }} className="hidden sm:block" />
      <div style={{ height: '98px' }} className="sm:hidden" />

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col"
          style={{ background: 'var(--brand-navy-dark)' }}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Link href="/" className="flex items-center no-underline" onClick={() => setMobileOpen(false)}>
              <img
                src="/manus-storage/logo-knockout_7a8a46a2.svg"
                alt="Definitive Mechanical"
                style={{ height: '38px', width: 'auto', display: 'block' }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/manus-storage/definitive-mechanical-logo_0084eea2.png';
                }}
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ width: '48px', height: '48px', color: 'white', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile CTAs */}
          <div className="px-4 pt-4 pb-2 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 no-underline dm-btn dm-btn-primary"
              style={{ height: '56px', fontSize: '15px', borderRadius: '6px' }}
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={18} />
              CALL {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center no-underline dm-btn dm-btn-outline on-dark"
              style={{ height: '48px', fontSize: '14px', borderRadius: '6px' }}
              onClick={() => setMobileOpen(false)}
            >
              REQUEST SERVICE
            </Link>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', key: 'services', groups: [
                MEGA_MENU.col1,
                MEGA_MENU.col2,
                MEGA_MENU.col3,
              ]},
              { label: 'Commercial & Gov', key: 'commercial', subItems: COMMERCIAL_DROPDOWN },
              { label: 'Service Areas', key: 'areas', subItems: AREAS_DROPDOWN },
              { label: 'About', href: '/about' },
              { label: 'Financing', href: '/financing' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center no-underline"
                    style={{
                      minHeight: '52px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'white',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between"
                      style={{
                        minHeight: '52px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: mobileExpanded === item.key ? 'var(--brand-cyan)' : 'white',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                      onClick={() => item.key && toggleMobile(item.key)}
                    >
                      {item.label}
                      <ChevronRight
                        size={16}
                        style={{
                          transform: mobileExpanded === item.key ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.2s',
                          color: 'var(--brand-cyan)',
                        }}
                      />
                    </button>
                    {mobileExpanded === item.key && (
                      <div className="pb-3">
                        {'groups' in item && item.groups ? (
                          <>
                            {item.groups.map((group) => (
                              <div key={group.title} style={{ marginBottom: '12px' }}>
                                <p style={{
                                  fontFamily: 'var(--font-body)',
                                  fontWeight: 700,
                                  fontSize: '10px',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.18em',
                                  color: 'var(--brand-cyan)',
                                  padding: '8px 0 4px 16px',
                                  margin: 0,
                                }}>
                                  {group.title}
                                </p>
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className="flex items-center gap-2 no-underline"
                                    style={{
                                      fontFamily: 'var(--font-body)',
                                      fontSize: '14px',
                                      color: 'rgba(255,255,255,0.75)',
                                      padding: '7px 0 7px 16px',
                                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                                    }}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <ChevronRight size={12} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            <div style={{ padding: '8px 0 4px 16px' }}>
                              <Link
                                href="/services"
                                className="no-underline"
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontWeight: 700,
                                  fontSize: '12px',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.12em',
                                  color: 'var(--brand-cyan)',
                                }}
                                onClick={() => setMobileOpen(false)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          </>
                        ) : ('subItems' in item && item.subItems) ? (
                          item.subItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 no-underline"
                              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.75)', paddingLeft: '16px' }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))
                        ) : null}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}


    </>
  );
}
