/**
 * BlogLayout — Definitive Mechanical Blog
 * Design: Navy/Cyan brand system, Playfair Display headings, Barlow body
 * Layout: 65% article body + 35% sticky sidebar (desktop), stacked on mobile
 * Sidebar: Call Now box (navy bg, teal button) + Related Services cards
 */

import { Link } from "wouter";
import { Phone, ArrowRight, Clock, Shield, Wrench, Zap } from "lucide-react";
import { PHONE, PHONE_DISPLAY, LICENSES } from "@/lib/constants";

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
        <div className="bg-[#009EC6] py-3 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-[#003060] font-bold">
              <Zap className="w-4 h-4 flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] text-sm uppercase tracking-wide">
                Is this an active emergency? Call (301) 679-5849 — 24/7 live dispatcher
              </span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1 text-[#003060] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide hover:underline whitespace-nowrap"
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
              <div className="bg-[#003060] rounded-sm p-6 text-white">
                <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[#009EC6] mb-2">
                  Need a plumber right now?
                </p>
                <p className="font-['Playfair_Display'] text-xl font-bold text-white mb-4 leading-snug">
                  24/7 Emergency Service
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#009EC6] text-[#003060] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide py-4 px-4 rounded-sm hover:bg-[#00b8e6] transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <p className="text-[#C0D8F0] font-['Barlow'] text-xs text-center">
                  24/7 live dispatcher · Licensed Master Plumber on every call
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-['Barlow']">
                    <Clock className="w-3 h-3 text-[#009EC6]" />
                    <span>Average response: 60–90 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-['Barlow'] mt-2">
                    <Shield className="w-3 h-3 text-[#009EC6]" />
                    <span>Licensed MD, DC, VA &amp; DE</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="border border-[#C0D8F0] rounded-sm overflow-hidden">
                  <div className="bg-[#003060] px-4 py-3">
                    <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[#009EC6]">
                      Related Services
                    </p>
                  </div>
                  <div className="divide-y divide-[#C0D8F0]">
                    {relatedServices.map((svc, i) => {
                      const Icon = svc.icon ? iconMap[svc.icon] : Wrench;
                      return (
                        <Link key={i} href={svc.href} className="flex items-start gap-3 p-4 hover:bg-[#F0F7FF] transition-colors group">
                          <div className="w-8 h-8 bg-[#009EC6]/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-[#009EC6]" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-['Barlow'] font-semibold text-[#003060] text-sm group-hover:text-[#009EC6] transition-colors">
                              {svc.title}
                            </p>
                            <p className="font-['Barlow'] text-[#484848] text-xs mt-0.5 leading-relaxed line-clamp-2">
                              {svc.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3 h-3 text-[#009EC6] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Request Service CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full border-2 border-[#003060] text-[#003060] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide py-3 px-4 rounded-sm hover:bg-[#003060] hover:text-white transition-colors"
              >
                Request Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="bg-[#003060] py-14 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[#009EC6] mb-3">
            Licensed Emergency Plumber · MD, DC &amp; Northern VA
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-8">
            Need a plumber now?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[#009EC6] text-[#003060] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-white hover:text-[#003060] transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="font-['Barlow'] text-[#C0D8F0] text-sm mt-6">
            MD Master Plumber #{LICENSES.md_master} | DC #{LICENSES.dc} | VA #{LICENSES.va_master}
          </p>
        </div>
      </div>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 w-full bg-[#009EC6] text-[#003060] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide h-14"
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
        background: "#C0D8F0",
        borderLeft: "4px solid #009EC6",
        padding: "20px 24px",
        fontFamily: "'Barlow', sans-serif",
        fontSize: "17px",
        lineHeight: "1.7",
        color: "#484848",
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
        background: variant === "warning" ? "#FEF3C7" : "#C0D8F0",
        borderLeft: `4px solid ${variant === "warning" ? "#D97706" : "#009EC6"}`,
        padding: "16px 20px",
        fontStyle: "italic",
        color: "#484848",
        fontFamily: "'Barlow', sans-serif",
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
      style={{ background: "#003060", padding: "32px" }}
    >
      <p
        style={{
          color: "#C0D8F0",
          fontFamily: "'Barlow Condensed', sans-serif",
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
          background: "#009EC6",
          color: "#003060",
          fontFamily: "'Barlow Condensed', sans-serif",
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
        📞 CALL {PHONE_DISPLAY}
      </a>
      <p
        style={{
          color: "#C0D8F0",
          fontFamily: "'Barlow', sans-serif",
          fontSize: "14px",
          margin: 0,
        }}
      >
        24/7 live dispatcher · Licensed Master Plumber on every call
      </p>
    </div>
  );
}

/** Related Services Card Block — 3-up grid */
export function RelatedServicesBlock({ services }: { services: Array<{ title: string; description: string; href: string; icon?: "wrench" | "zap" | "shield" | "phone" }> }) {
  return (
    <div className="mt-12 pt-10 border-t border-[#C0D8F0]">
      <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[#009EC6] mb-6">
        Related Services
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((svc, i) => {
          const Icon = svc.icon ? iconMap[svc.icon] : Wrench;
          return (
            <Link
              key={i}
              href={svc.href}
              className="border border-[#C0D8F0] rounded-sm p-4 hover:border-[#009EC6] transition-colors group"
              style={{ borderTop: "3px solid #009EC6" }}
            >
              <div className="w-8 h-8 bg-[#009EC6]/10 rounded-sm flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-[#009EC6]" />
              </div>
              <p className="font-['Barlow'] font-semibold text-[#003060] text-sm mb-1 group-hover:text-[#009EC6] transition-colors">
                {svc.title}
              </p>
              <p className="font-['Barlow'] text-[#484848] text-xs leading-relaxed mb-3 line-clamp-2">
                {svc.description}
              </p>
              <span className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-[#009EC6] flex items-center gap-1">
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
      <div className="w-10 h-10 bg-[#003060] rounded-full flex items-center justify-center flex-shrink-0">
        <Wrench className="w-5 h-5 text-[#009EC6]" />
      </div>
      <div>
        <p className="font-['Barlow'] font-semibold text-[#003060] text-sm">
          Definitive Mechanical Team
        </p>
        <p className="font-['Barlow'] text-[#787878] text-xs">
          Licensed Master Plumbers serving MD, DC &amp; Northern Virginia
        </p>
        <p className="font-['Barlow'] text-[#787878] text-xs">
          MD #{LICENSES.md_master} | DC #{LICENSES.dc} | VA #{LICENSES.va_master}
        </p>
        <p className="font-['Barlow'] text-[#787878] text-xs mt-1">
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
      className="font-['Playfair_Display'] font-bold leading-tight mb-4"
      style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#003060" }}
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
      className="font-['Playfair_Display'] font-semibold leading-snug mt-10 mb-4"
      style={{ fontSize: "clamp(22px, 3vw, 26px)", color: "#003060" }}
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
      style={{ fontSize: "16px", color: "#186090" }}
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
      style={{ fontFamily: "'Barlow', sans-serif", fontSize: "17px", color: "#484848" }}
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
      style={{ fontFamily: "'Barlow', sans-serif", fontSize: "17px", color: "#484848", listStyleType: "disc" }}
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
      style={{ fontSize: "13px", color: "#009EC6" }}
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
          <tr style={{ background: "#003060" }}>
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
            <tr key={ri} style={{ background: ri % 2 === 0 ? "#ffffff" : "#F0F0F0" }}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 font-['Barlow'] text-[#484848]"
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
        className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center font-['Playfair_Display'] font-bold text-2xl text-white"
        style={{ background: "#009EC6", minWidth: "48px" }}
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
      <ol className="flex flex-wrap items-center gap-1 font-['Barlow'] text-sm text-[#787878]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-[#C0D8F0]">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#009EC6] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#484848]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
