/**
 * BlogLayout — Definitive Mechanical Blog
 * Design: Navy/Cyan brand system, Barlow Condensed display, Public Sans body
 * Layout: 65% article body + 35% sticky sidebar (desktop), stacked on mobile
 * Sidebar: Call Now box (navy bg, teal button) + Related Services cards
 */

import { Link } from "wouter";
import { Phone, ArrowRight, Clock, Shield, Wrench, Zap } from "lucide-react";
import { BUSINESS, LICENSES } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;
const LICENSE_MD = LICENSES.maryland[0].number;
const LICENSE_DC = LICENSES.dc[0].number;
const LICENSE_VA = LICENSES.virginia[0].number;

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon?: "wrench" | "zap" | "shield" | "phone";
}

interface BlogLayoutProps {
  children: React.ReactNode;
  showEmergencyBar?: boolean;
  relatedServices?: RelatedService[];
}

const iconMap = {
  wrench: Wrench,
  zap: Zap,
  shield: Shield,
  phone: Phone,
};

export function BlogLayout({ children, showEmergencyBar = false, relatedServices = [] }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Bar */}
      {showEmergencyBar && (
        <div className="bg-[var(--brand-cyan)] py-3 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-[var(--brand-navy)] font-bold">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] text-sm uppercase tracking-wide">
                Is this an active emergency? Call (301) 679-5849 — 24/7 live dispatcher
              </span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1 text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide hover:underline whitespace-nowrap"
            >
              Call Now <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Article Body — 65% */}
          <article className="flex-1 min-w-0 prose-none">
            {children}
          </article>

          {/* Sticky Sidebar — 35% */}
          <aside className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Call Now Box */}
              <div className="bg-[var(--brand-navy)] rounded-sm p-6 text-white">
                <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-2">
                  Need a plumber right now?
                </p>
                <p className="font-['Barlow_Condensed'] uppercase tracking-wide text-xl font-bold text-white mb-4 leading-snug">
                  24/7 Emergency Service
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide py-4 px-4 rounded-sm hover:bg-[var(--brand-blue-hover)] transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <p className="text-[#C0D8F0] font-sans text-xs text-center">
                  24/7 live dispatcher  Licensed plumbing professionals — work under Master Plumber license
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-sans">
                    <Clock className="w-3 h-3 text-[var(--brand-cyan)]" />
                    <span>Average response: 60-90 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-sans mt-2">
                    <Shield className="w-3 h-3 text-[var(--brand-cyan)]" />
                    <span>Licensed MD, DC, VA &amp; DE</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="border border-[#C0D8F0] rounded-sm overflow-hidden">
                  <div className="bg-[var(--brand-navy)] px-4 py-3">
                    <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
                      Related Services
                    </p>
                  </div>
                  <div className="divide-y divide-[#C0D8F0]">
                    {relatedServices.map((svc, i) => {
                      const Icon = svc.icon ? iconMap[svc.icon] : Wrench;
                      return (
                        <Link key={i} href={svc.href} className="flex items-start gap-3 p-4 hover:bg-[#F0F7FF] transition-colors group">
                          <div className="w-8 h-8 bg-[var(--brand-cyan)]/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-[var(--brand-cyan)]" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-sans font-semibold text-[var(--brand-navy)] text-sm group-hover:text-[var(--brand-cyan)] transition-colors">
                              {svc.title}
                            </p>
                            <p className="font-sans text-[var(--ink-2)] text-xs mt-0.5 leading-relaxed line-clamp-2">
                              {svc.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Request Service CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide py-3 px-4 rounded-sm hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
              >
                Request Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="bg-[var(--brand-navy)] py-14 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            Licensed Emergency Plumber  MD, DC &amp; Northern VA
          </p>
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide text-3xl md:text-4xl font-bold text-white mb-8">
            Need a plumber now?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[var(--brand-blue-hover)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-white hover:text-[var(--brand-navy)] transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="font-sans text-[#C0D8F0] text-sm mt-6">
            MD Master Plumber #{LICENSE_MD} | DC #{LICENSE_DC} | VA #{LICENSE_VA}
          </p>
        </div>
      </div>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide h-14"
        >
          <Phone className="w-4 h-4" />
          CALL {PHONE_DISPLAY} — 24/7 EMERGENCY
        </a>
      </div>
    </div>
  );
}

/** Featured Snippet Block — pale blue bg, teal left border */
export function FeaturedSnippet({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-sm mb-8"
      style={{
        background: "var(--surface-1)",
        borderLeft: "4px solid var(--brand-cyan)",
        padding: "20px 24px",
        fontFamily: 'var(--font-body)',
        fontSize: "17px",
        lineHeight: "1.7",
        color: "var(--ink-2)",
      }}
    >
      {children}
    </div>
  );
}

/** Callout Box — pale blue (default) or warning amber */
export function CalloutBox({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warning" }) {
  return (
    <div
      className="rounded-sm my-7"
      style={{
        background: variant === "warning" ? "#FEF3C7" : "var(--surface-1)",
        borderLeft: `4px solid ${variant === "warning" ? "#D97706" : "var(--brand-cyan)"}`,
        padding: "16px 20px",
        fontStyle: "italic",
        color: "var(--ink-2)",
        fontFamily: 'var(--font-body)',
        fontSize: "16px",
        lineHeight: "1.7",
      }}
    >
      {children}
    </div>
  );
}

/** Inline CTA Block — navy background, mid-post */
export function InlineCTA() {
  return (
    <div
      className="rounded-sm my-10 text-center"
      style={{ background: "#fff", padding: "32px" }}
    >
      <p
        style={{
          color: "var(--surface-1)",
          fontFamily: 'var(--font-label)',
          fontSize: "13px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: "0 0 8px",
        }}
      >
        Need a plumber right now?
      </p>
      <a
        href={`tel:${PHONE}`}
        style={{
          display: "block",
          background: "#fff",
          color: "var(--brand-navy)",
          fontFamily: 'var(--font-label)',
          fontWeight: 700,
          fontSize: "18px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          padding: "18px 32px",
          borderRadius: "2px",
          textDecoration: "none",
          marginBottom: "12px",
        }}
      >
         CALL {PHONE_DISPLAY}
      </a>
      <p
        style={{
          color: "var(--surface-1)",
          fontFamily: 'var(--font-body)',
          fontSize: "14px",
          margin: 0,
        }}
      >
        24/7 live dispatcher  Licensed plumbing professionals — work under Master Plumber license
      </p>
    </div>
  );
}

/** Related Services Card Block — 3-up grid */
export function RelatedServicesBlock({ services }: { services: Array<{ title: string; description: string; href: string; icon?: "wrench" | "zap" | "shield" | "phone" }> }) {
  return (
    <div className="mt-12 pt-10 border-t border-[#C0D8F0]">
      <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-6">
        Related Services
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((svc, i) => {
          const Icon = svc.icon ? iconMap[svc.icon] : Wrench;
          return (
            <Link
              key={i}
              href={svc.href}
              className="border border-[#C0D8F0] rounded-sm p-4 hover:border-[var(--brand-cyan)] transition-colors group"
              style={{ borderTop: "3px solid var(--brand-cyan)" }}
            >
              <div className="w-8 h-8 bg-[var(--brand-cyan)]/10 rounded-sm flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-[var(--brand-cyan)]" />
              </div>
              <p className="font-sans font-semibold text-[var(--brand-navy)] text-sm mb-1 group-hover:text-[var(--brand-cyan)] transition-colors">
                {svc.title}
              </p>
              <p className="font-sans text-[var(--ink-2)] text-xs leading-relaxed mb-3 line-clamp-2">
                {svc.description}
              </p>
              <span className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-[var(--brand-cyan)] flex items-center gap-1">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** Author Block */
export function AuthorBlock({ date }: { date: string }) {
  return (
    <div className="flex items-start gap-3 mb-6 pb-6 border-b border-[#C0D8F0]">
      <div className="w-10 h-10 bg-[var(--brand-navy)] rounded-full flex items-center justify-center flex-shrink-0">
        <Wrench className="w-5 h-5 text-[var(--brand-cyan)]" />
      </div>
      <div>
        <p className="font-sans font-semibold text-[var(--brand-navy)] text-sm">
          Definitive Mechanical Team
        </p>
        <p className="font-sans text-[#787878] text-xs">
          Licensed plumbing professionals serving MD, DC &amp; Northern Virginia
        </p>
        <p className="font-sans text-[#787878] text-xs">
          MD #{LICENSE_MD} | DC #{LICENSE_DC} | VA #{LICENSE_VA}
        </p>
        <p className="font-sans text-[#787878] text-xs mt-1">
          Published: {date}
        </p>
      </div>
    </div>
  );
}

/** Blog H1 */
export function BlogH1({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="font-['Barlow_Condensed'] uppercase tracking-wide font-bold leading-tight mb-4"
      style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "var(--brand-navy)" }}
    >
      {children}
    </h1>
  );
}

/** Blog H2 */
export function BlogH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold leading-snug mt-10 mb-4"
      style={{ fontSize: "clamp(22px, 3vw, 26px)", color: "var(--brand-navy)" }}
    >
      {children}
    </h2>
  );
}

/** Blog H3 */
export function BlogH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-['Barlow_Condensed'] font-bold uppercase tracking-wide mt-6 mb-3"
      style={{ fontSize: "16px", color: "var(--brand-blue)" }}
    >
      {children}
    </h3>
  );
}

/** Blog Body Text */
export function BlogP({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 leading-[1.75]"
      style={{ fontFamily: 'var(--font-body)', fontSize: "17px", color: "var(--ink-2)" }}
    >
      {children}
    </p>
  );
}

/** Blog List */
export function BlogUL({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className="mb-6 space-y-2 pl-5"
      style={{ fontFamily: 'var(--font-body)', fontSize: "17px", color: "var(--ink-2)", listStyleType: "disc" }}
    >
      {children}
    </ul>
  );
}

/** Blog Eyebrow */
export function BlogEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-['Barlow_Condensed'] font-bold uppercase tracking-widest mb-3"
      style={{ fontSize: "13px", color: "var(--brand-cyan)" }}
    >
      {children}
    </p>
  );
}

/** Pricing Table */
export function PricingTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-sm border border-[#C0D8F0]">
      <table className="w-full min-w-[400px] text-sm">
        <thead>
          <tr style={{ background: "#fff" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-['Barlow_Condensed'] font-bold uppercase tracking-wide text-white"
                style={{ fontSize: "13px" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "#ffffff" : "var(--surface-1)" }}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 font-sans text-[var(--ink-2)]"
                  style={{ fontWeight: ci === 1 ? 500 : 400 }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** HowTo Step — numbered with teal counter */
export function HowToStep({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mt-10 mb-2">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center font-['Barlow_Condensed'] uppercase tracking-wide font-bold text-2xl text-white"
        style={{ background: "#fff", minWidth: "48px" }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

/** Breadcrumb */
export function BlogBreadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 font-sans text-sm text-[#787878]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-[#C0D8F0]">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--brand-cyan)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--ink-2)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
