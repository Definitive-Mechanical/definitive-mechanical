/**
 * Services Directory — /services/
 * Clean visual directory of all services organized by category.
 * Follows the exact Definitive Mechanical design system:
 * - Navy #003060, Cyan #009EC6, Light blue #C0D8F0, Off-white #F0F0F0
 * - Playfair Display headings, Barlow Condensed labels, Barlow body
 * - White cards with cyan top border, rounded-md, hover shadow
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Zap, Droplets, Flame, Wrench, Shield, Thermometer,
  Phone, ArrowRight, CheckCircle2
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;

const categories = [
  {
    Icon: Zap,
    label: "EMERGENCY PLUMBING",
    badge: "24/7 AVAILABLE",
    note: "Live dispatcher on call around the clock. We respond in 45–75 minutes.",
    services: [
      { label: "24/7 Emergency Plumbing", href: "/emergency-plumbing/" },
      { label: "Emergency Plumber Largo, MD", href: "/emergency-plumber-largo-md/" },
      { label: "Emergency Plumber Bowie, MD", href: "/emergency-plumber-bowie-md/" },
      { label: "Emergency Plumber Rockville, MD", href: "/emergency-plumber-rockville-md/" },
      { label: "Emergency Plumber Bethesda, MD", href: "/emergency-plumber-bethesda-md/" },
      { label: "Emergency Plumber Washington, DC", href: "/emergency-plumber-washington-dc/" },
      { label: "Emergency Plumber Alexandria, VA", href: "/emergency-plumber-alexandria-va/" },
      { label: "Emergency Plumber Arlington, VA", href: "/emergency-plumber-arlington-va/" },
    ],
  },
  {
    Icon: Droplets,
    label: "DRAIN & SEWER",
    badge: null,
    note: "",
    services: [
      { label: "Drain Cleaning", href: "/drain-cleaning/" },
      { label: "Hydro-Jetting", href: "/hydro-jetting/" },
      { label: "Video Camera Inspection", href: "/video-camera-inspection/" },
      { label: "Sewer Line Repair", href: "/sewer-line-repair/" },
      { label: "Sewer Line Installation", href: "/sewer-line-installation/" },
    ],
  },
  {
    Icon: Flame,
    label: "WATER HEATERS",
    badge: "FINANCING AVAILABLE",
    note: "",
    services: [
      { label: "Water Heater Repair", href: "/water-heater-repair/" },
      { label: "Water Heater Installation", href: "/water-heater-installation/" },
      { label: "Tankless Water Heaters", href: "/tankless-water-heaters/" },
    ],
  },
  {
    Icon: Flame,
    label: "GAS LINE SERVICES",
    badge: "MASTER GASFITTER",
    note: "Licensed Master Gasfitter in MD, DC & VA.",
    services: [
      { label: "Gas Line Repair", href: "/gas-line-repair/" },
      { label: "Gas Line Installation", href: "/gas-line-installation/" },
      { label: "Gas Leak Repair", href: "/gas-leak-repair/" },
    ],
  },
  {
    Icon: Droplets,
    label: "WATER LINES",
    badge: null,
    note: "",
    services: [
      { label: "Water Line Repair", href: "/water-line-repair/" },
      { label: "Water Line Installation", href: "/water-line-installation/" },
    ],
  },
  {
    Icon: Shield,
    label: "BACKFLOW SERVICES",
    badge: "WSSC CERTIFIED #73696",
    note: "",
    services: [
      { label: "Backflow Prevention", href: "/backflow-prevention/" },
      { label: "Annual Backflow Certification", href: "/backflow-certification/" },
      { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
      { label: "Backflow Certification — Maryland", href: "/backflow-certification-maryland/" },
      { label: "Backflow Certification — DC", href: "/backflow-certification-washington-dc/" },
      { label: "Backflow Certification — Virginia", href: "/backflow-certification-virginia/" },
    ],
  },
  {
    Icon: Wrench,
    label: "FIXTURES",
    badge: null,
    note: "",
    services: [
      { label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair/" },
    ],
  },
  {
    Icon: Thermometer,
    label: "HEATING",
    badge: null,
    note: "",
    services: [
      { label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair/" },
      { label: "Boiler & Furnace Installation", href: "/boiler-furnace-installation/" },
    ],
  },
];

const commercialLinks = [
  { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
  { label: "Commercial Plumber — Maryland", href: "/commercial-plumber-maryland/" },
  { label: "Commercial Plumber — Washington DC", href: "/commercial-plumber-washington-dc/" },
  { label: "Commercial Plumber — Northern Virginia", href: "/commercial-plumber-northern-virginia/" },
  { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
  { label: "MBE Certified Contractor — Maryland", href: "/mbe-certified-plumbing-contractor-maryland/" },
  { label: "SWaM Certified Contractor — Virginia", href: "/swam-certified-plumbing-contractor-virginia/" },
];

const residentialLinks = [
  { label: "Residential Plumbing", href: "/residential-plumbing/" },
  { label: "Licenses & Certifications", href: "/licenses-certifications/" },
  { label: "Financing Available", href: "/financing/" },
];

export default function ServicesDirectory() {
  return (
    <>
      <Helmet>
        <title>All Plumbing Services | Definitive Mechanical — MD, DC & VA</title>
        <meta
          name="description"
          content="Browse all plumbing services offered by Definitive Mechanical — emergency, drain & sewer, water heaters, gas lines, backflow, fixtures, and heating across MD, DC & Northern VA."
        />
        <link rel="canonical" href="https://definitivemechanical.com/services/" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-[#F0F0F0] py-2 px-4 border-b border-[#C0D8F0]">
        <div className="max-w-6xl mx-auto">
          <nav className="font-['Barlow'] text-sm text-[#787878]">
            <Link href="/" className="hover:text-[#009EC6] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[#484848]">All Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#003060] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[#009EC6] mb-3">
            Licensed Plumbing Services · Maryland · Washington DC · Northern Virginia
          </p>
          <h1 className="font-['Playfair_Display'] font-bold text-white text-[clamp(28px,4vw,38px)] leading-tight mb-5 max-w-3xl">
            All Plumbing Services
          </h1>
          <p className="font-['Barlow'] text-white/90 text-[17px] leading-relaxed max-w-2xl mb-8">
            Definitive Mechanical is a licensed Master Plumber and Master Gasfitter in Maryland, Washington DC, and Virginia. We handle residential, commercial, and government plumbing — from 24/7 emergency response to full system installations. Upfront pricing in writing before work begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["11 Years in Business", "Licensed Master Plumber/Gasfitter MD · DC · VA", "MDOT MBE Cert 20-134", "VA SWaM Cert 815255", "24/7 Emergency", "Financing Available"].map((t) => (
              <span key={t} className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-wide text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#003060] text-[clamp(22px,3vw,30px)] mb-10">
            Browse Services by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const { Icon } = cat;
              return (
                <div
                  key={cat.label}
                  className="bg-white border border-[#C0D8F0] rounded-md overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderTop: "3px solid #009EC6" }}
                >
                  <div className="p-6">
                    <div className="w-10 h-10 bg-[#009EC6]/10 rounded-sm flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#009EC6]" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <p className="font-['Barlow_Condensed'] font-bold text-[#186090] text-xs uppercase tracking-widest">
                        {cat.label}
                      </p>
                      {cat.badge && (
                        <span className="font-['Barlow_Condensed'] text-[9px] font-bold uppercase tracking-wider bg-[#009EC6]/15 text-[#009EC6] px-2 py-0.5 rounded-full whitespace-nowrap">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {cat.services.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className="font-['Barlow'] text-[#484848] text-sm hover:text-[#009EC6] transition-colors flex items-center gap-1"
                          >
                            <ArrowRight className="w-3 h-3 text-[#009EC6] flex-shrink-0" />
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {cat.note && (
                      <p className="font-['Barlow'] text-[#787878] text-xs leading-relaxed border-t border-[#C0D8F0] pt-3">
                        {cat.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial & Residential Links */}
      <section className="bg-[#F0F0F0] py-14 px-4 border-t border-[#C0D8F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#003060] text-[clamp(22px,3vw,30px)] mb-10">
            Commercial, Government & Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial */}
            <div className="bg-white border border-[#C0D8F0] rounded-md p-6" style={{ borderTop: "3px solid #003060" }}>
              <p className="font-['Barlow_Condensed'] font-bold text-[#003060] text-xs uppercase tracking-widest mb-4">
                COMMERCIAL & GOVERNMENT
              </p>
              <ul className="space-y-2">
                {commercialLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Barlow'] text-[#484848] text-sm hover:text-[#009EC6] transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="w-3 h-3 text-[#009EC6] flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Residential + Credentials */}
            <div className="bg-white border border-[#C0D8F0] rounded-md p-6" style={{ borderTop: "3px solid #003060" }}>
              <p className="font-['Barlow_Condensed'] font-bold text-[#003060] text-xs uppercase tracking-widest mb-4">
                RESIDENTIAL & CREDENTIALS
              </p>
              <ul className="space-y-2 mb-6">
                {residentialLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Barlow'] text-[#484848] text-sm hover:text-[#009EC6] transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="w-3 h-3 text-[#009EC6] flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#C0D8F0] pt-4 space-y-2">
                {[
                  "MD Master Plumber #96958",
                  "DC Master Plumber #PGM1002236",
                  "VA Master Plumber #2710064209",
                  "WSSC Backflow Tester #73696",
                  "MDOT MBE Cert 20-134",
                  "VA SWaM Cert 815255",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#009EC6] flex-shrink-0" />
                    <span className="font-['Barlow'] text-[#484848] text-xs">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[#003060] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-semibold text-white text-[clamp(22px,3vw,30px)] mb-5">
            Plumbing Emergency? We Respond 24/7.
          </h2>
          <p className="font-['Barlow'] text-[#C0D8F0] text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Our emergency line is answered by a live person, not a call center. We dispatch immediately for burst pipes, sewer backups, gas leaks, flooding, and any situation where delay causes significant damage.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-[#009EC6] text-[#003060] font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide py-5 px-10 rounded-sm hover:bg-[#00b8e6] transition-colors"
          >
            <Phone className="w-5 h-5" />
            CALL {PHONE_DISPLAY} — 24/7
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F7F9FC] py-12 px-4 border-t border-[#C0D8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-bold text-[#003060] text-[clamp(22px,3vw,30px)] mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="font-['Barlow'] text-[#484848] text-[17px] leading-relaxed mb-6 max-w-xl mx-auto">
            Call us and describe what you are experiencing. We will tell you exactly what is needed and give you a written estimate before any work begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-[#003060] text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#004080] transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#003060] text-[#003060] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#003060] hover:text-white transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
