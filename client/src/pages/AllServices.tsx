import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame, AlertCircle, ShieldCheck, Wind, Wrench, Building2, Landmark, Camera, Waves, Network, Home } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const serviceGroups = [
  {
    category: "Emergency & Drain",
    services: [
      { icon: AlertTriangle, name: "24/7 Emergency Plumbing", href: "/emergency-plumbing", desc: "Burst pipes, sewer backups, gas leaks — live dispatcher 24/7/365." },
      { icon: Droplets, name: "Drain Cleaning", href: "/drain-cleaning", desc: "Clogged drains, slow drains, floor drains, kitchen and bathroom lines." },
      { icon: Waves, name: "Hydro-Jetting", href: "/hydro-jetting", desc: "High-pressure water jetting for stubborn grease, scale, and root intrusion." },
      { icon: Camera, name: "Video Camera Inspection", href: "/video-camera-inspection", desc: "HD sewer camera inspection with recorded footage and written report." },
    ]
  },
  {
    category: "Sewer Line",
    services: [
      { icon: GitBranch, name: "Sewer Line Repair", href: "/sewer-line-repair", desc: "Trenchless and traditional sewer line repair for residential and commercial." },
      { icon: Network, name: "Sewer Line Installation", href: "/sewer-line-installation", desc: "New sewer lateral installation, replacement, and tie-in to municipal main." },
    ]
  },
  {
    category: "Water Heater",
    services: [
      { icon: Thermometer, name: "Water Heater Repair", href: "/water-heater-repair", desc: "Gas, electric, and tankless water heater repair — same-day service available." },
      { icon: Thermometer, name: "Water Heater Installation", href: "/water-heater-installation", desc: "New water heater installation with permit and inspection coordination." },
      { icon: Zap, name: "Tankless Water Heaters", href: "/tankless-water-heaters", desc: "Tankless water heater installation, conversion, and maintenance." },
    ]
  },
  {
    category: "Gas Line",
    services: [
      { icon: Flame, name: "Gas Line Repair", href: "/gas-line-repair", desc: "Licensed Master Gasfitter gas line repair in MD, DC, VA, and DE." },
      { icon: Flame, name: "Gas Line Installation", href: "/gas-line-installation", desc: "New gas line installation for appliances, generators, and outdoor kitchens." },
      { icon: AlertCircle, name: "Gas Leak Repair", href: "/gas-leak-repair", desc: "Emergency gas leak detection and repair — evacuate and call immediately." },
    ]
  },
  {
    category: "Backflow Prevention",
    services: [
      { icon: ShieldCheck, name: "Backflow Prevention", href: "/backflow-prevention", desc: "Backflow preventer installation and replacement for residential and commercial." },
      { icon: ShieldCheck, name: "Backflow Certification", href: "/backflow-certification", desc: "Annual backflow preventer testing and certification for all jurisdictions." },
      { icon: ShieldCheck, name: "Backflow Preventer Repair", href: "/backflow-preventer-repair", desc: "Repair and rebuild of failed or non-compliant backflow prevention assemblies." },
    ]
  },
  {
    category: "Water Line",
    services: [
      { icon: Wrench, name: "Water Line Repair", href: "/water-line-repair", desc: "Main water line repair, leak detection, and trenchless pipe lining." },
      { icon: Wrench, name: "Water Line Installation", href: "/water-line-installation", desc: "New water service line installation and meter connection." },
    ]
  },
  {
    category: "Boiler & HVAC",
    services: [
      { icon: Wind, name: "Boiler & Furnace Repair", href: "/boiler-furnace-repair", desc: "Residential and commercial boiler repair, maintenance, and emergency service." },
      { icon: Wind, name: "Boiler & Furnace Installation", href: "/boiler-furnace-installation", desc: "New boiler and furnace installation with gas line and venting." },
    ]
  },
  {
    category: "Fixtures & Residential",
    services: [
      { icon: Home, name: "Faucet & Toilet Repair", href: "/faucet-toilet-repair", desc: "Faucet repair and replacement, toilet repair, fixture installation." },
      { icon: Home, name: "Residential Plumbing", href: "/residential-plumbing", desc: "Full-service residential plumbing for homeowners across MD, DC, and VA." },
    ]
  },
  {
    category: "Commercial & Government",
    services: [
      { icon: Building2, name: "Commercial Plumbing", href: "/commercial-plumbing", desc: "Commercial plumbing for offices, retail, restaurants, and multi-family." },
      { icon: Landmark, name: "Government & Municipal", href: "/government-municipal-plumbing", desc: "Government and municipal plumbing — MDOT MBE and VA SWaM certified." },
    ]
  },
];

export default function AllServices() {
  return (
    <>
      <Helmet>
        <title>All Plumbing Services in MD, DC & Northern VA | Definitive Mechanical</title>
        <meta name="description" content="Full list of plumbing services from Definitive Mechanical — emergency plumbing, drain cleaning, water heater, sewer line, gas line, backflow, commercial & government. Licensed in MD, DC, VA & DE. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/plumbing/" />
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "All Plumbing Services" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              LICENSED PLUMBING SERVICES · MD, DC & NORTHERN VIRGINIA
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              All Plumbing Services
            </h1>
            <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              Definitive Mechanical provides licensed plumbing, gas, and mechanical services for residential, commercial, and government clients across Maryland, Washington DC, and Northern Virginia. Master Plumber and Master Gasfitter licensed in four states. MDOT MBE and Virginia SWaM Certified.
            </p>
            <TrustBadges variant="dark" badges={["MD Master Plumber #96958", "DC Plumber #PGM1002236", "VA Master Plumber #2710064209", "24/7 Emergency"]} />
            <div className="flex flex-wrap gap-4 mt-8">
              <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
              <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          {serviceGroups.map((group, gi) => (
            <div key={gi} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.15em" }}>{group.category}</p>
                <div className="flex-1 h-px" style={{ background: "#E8EFF5" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.services.map((svc, si) => (
                  <Link key={si} href={svc.href}>
                    <div className="bg-white rounded-md p-6 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ borderTopColor: "#009EC6", boxShadow: "0 2px 12px rgba(0,48,96,0.08)", border: "1px solid #E8EFF5", borderTop: "4px solid #009EC6" }}>
                      <svc.icon size={28} style={{ color: "#009EC6", marginBottom: "12px" }} />
                      <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }} className="mb-2">{svc.name}</p>
                      <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "14px", lineHeight: 1.6 }}>{svc.desc}</p>
                      <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "12px" }}>Learn More →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading="Licensed, certified, and accountable in every jurisdiction we serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "MD Master Plumber/Gasfitter", number: "#96958" },
              { label: "DC Master Plumber/Gasfitter", number: "#PGM1002236" },
              { label: "VA Master Plumber/Gasfitter", number: "#2710064209" },
              { label: "DE Master Plumber/Gasfitter", number: "#PL-0012866" },
              { label: "MDOT MBE Certified", number: "Cert No. 20-134" },
              { label: "VA SWaM Certified", number: "Cert No. 815255" },
              { label: "CAGE Code", number: "8HCF6" },
              { label: "EPA 608 Certified", number: "#YbKLqI5cGf" },
            ].map((cred, i) => (
              <div key={i} className="bg-white rounded-md p-4 text-center" style={{ boxShadow: "0 2px 8px rgba(0,48,96,0.06)" }}>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-1">{cred.label}</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "13px", fontWeight: 600 }}>{cred.number}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/licenses-certifications" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              View Full Licenses & Certifications →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure which service you need? Call us."
        subtext="A live dispatcher answers every call 24/7. We'll help you identify the problem and schedule the right service."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
