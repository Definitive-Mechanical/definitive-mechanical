/**
 * Services Directory — /services/
 * Clean visual directory of all services organized by category.
 * Designed for user navigation — not the SEO hub (that's /plumbing/).
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Zap, Droplets, Flame, Wrench, Shield, Thermometer,
  Phone, ArrowRight, ChevronRight
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;

const categories = [
  {
    icon: Zap,
    color: "bg-red-600",
    lightColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    label: "Emergency Plumbing",
    badge: "24/7 AVAILABLE",
    badgeColor: "bg-red-600 text-white",
    description: "Burst pipes, sewage backups, gas leaks, no hot water — we dispatch immediately, around the clock.",
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
    icon: Droplets,
    color: "bg-[#003060]",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-[#003060]",
    label: "Drain & Sewer",
    badge: null,
    badgeColor: "",
    description: "Clogged drains, sewer line failures, hydro-jetting, and video camera diagnosis.",
    services: [
      { label: "Drain Cleaning", href: "/drain-cleaning/" },
      { label: "Hydro-Jetting", href: "/hydro-jetting/" },
      { label: "Video Camera Inspection", href: "/video-camera-inspection/" },
      { label: "Sewer Line Repair", href: "/sewer-line-repair/" },
      { label: "Sewer Line Installation", href: "/sewer-line-installation/" },
    ],
  },
  {
    icon: Flame,
    color: "bg-orange-600",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    label: "Water Heaters",
    badge: "FINANCING AVAILABLE",
    badgeColor: "bg-[#009EC6] text-white",
    description: "Repair, replacement, and new installation — traditional tank and tankless systems.",
    services: [
      { label: "Water Heater Repair", href: "/water-heater-repair/" },
      { label: "Water Heater Installation", href: "/water-heater-installation/" },
      { label: "Tankless Water Heaters", href: "/tankless-water-heaters/" },
    ],
  },
  {
    icon: Flame,
    color: "bg-yellow-600",
    lightColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-700",
    label: "Gas Line Services",
    badge: "MASTER GASFITTER",
    badgeColor: "bg-yellow-600 text-white",
    description: "Licensed Master Gasfitters in MD, DC & VA. Gas line repair, new installations, and emergency leak response.",
    services: [
      { label: "Gas Line Repair", href: "/gas-line-repair/" },
      { label: "Gas Line Installation", href: "/gas-line-installation/" },
      { label: "Gas Leak Repair", href: "/gas-leak-repair/" },
    ],
  },
  {
    icon: Droplets,
    color: "bg-[#009EC6]",
    lightColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-[#009EC6]",
    label: "Water Lines",
    badge: null,
    badgeColor: "",
    description: "Water service line repair and full replacement — from the meter to the house.",
    services: [
      { label: "Water Line Repair", href: "/water-line-repair/" },
      { label: "Water Line Installation", href: "/water-line-installation/" },
    ],
  },
  {
    icon: Shield,
    color: "bg-green-700",
    lightColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    label: "Backflow Services",
    badge: "WSSC CERTIFIED",
    badgeColor: "bg-green-700 text-white",
    description: "WSSC, DC Water, Fairfax Water, and Loudoun Water certified backflow testing and repair.",
    services: [
      { label: "Backflow Prevention", href: "/backflow-prevention/" },
      { label: "Annual Backflow Certification", href: "/backflow-certification/" },
      { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
    ],
  },
  {
    icon: Wrench,
    color: "bg-slate-600",
    lightColor: "bg-slate-50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    label: "Fixtures",
    badge: null,
    badgeColor: "",
    description: "Faucets, fixtures, toilets, and shut-off valves — residential and commercial.",
    services: [
      { label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair/" },
    ],
  },
  {
    icon: Thermometer,
    color: "bg-purple-700",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    label: "Heating",
    badge: null,
    badgeColor: "",
    description: "Boiler and furnace repair and installation — hydronic heating systems.",
    services: [
      { label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair/" },
      { label: "Boiler & Furnace Installation", href: "/boiler-furnace-installation/" },
    ],
  },
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

      {/* Page Header */}
      <section className="bg-[#003060] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[#009EC6] mb-3">
            Licensed Plumbing · Maryland · Washington DC · Northern Virginia
          </p>
          <h1 className="font-['Playfair_Display'] font-bold text-white text-[clamp(26px,4vw,38px)] leading-tight mb-4 max-w-2xl">
            All Plumbing Services
          </h1>
          <p className="font-['Barlow'] text-white/85 text-[17px] leading-relaxed max-w-2xl mb-8">
            Licensed Master Plumber and Master Gasfitter in Maryland, DC, and Virginia. Residential, commercial, and government. 24/7 emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-[#009EC6] text-[#003060] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide py-3 px-7 rounded-sm hover:bg-[#00b8e6] transition-colors"
            >
              <Phone className="w-4 h-4" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide py-3 px-7 rounded-sm hover:bg-white hover:text-[#003060] transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className={`rounded-sm border ${cat.borderColor} ${cat.lightColor} overflow-hidden flex flex-col`}
                >
                  {/* Card Header */}
                  <div className={`${cat.color} px-5 py-4 flex items-center gap-3`}>
                    <div className="bg-white/20 rounded-full p-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                        {cat.label}
                      </h2>
                    </div>
                    {cat.badge && (
                      <span className={`font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${cat.badgeColor}`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="px-5 py-4 flex-1 flex flex-col">
                    <p className="font-['Barlow'] text-[#484848] text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <ul className="space-y-1 flex-1">
                      {cat.services.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className={`flex items-center gap-2 font-['Barlow'] text-[15px] ${cat.textColor} hover:underline py-0.5 group`}
                          >
                            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA Strip */}
      <section className="bg-red-600 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-7 h-7 text-white flex-shrink-0" />
            <div>
              <p className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide">
                Plumbing Emergency?
              </p>
              <p className="font-['Barlow'] text-white/90 text-sm">
                Live dispatcher available 24/7 — we respond in 45–75 minutes.
              </p>
            </div>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-white text-red-600 font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-3 px-8 rounded-sm hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            CALL {PHONE_DISPLAY}
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
            Call us and describe what you're experiencing. We'll tell you exactly what's needed and give you a written estimate before any work begins.
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
