import { getServiceImage } from '@/lib/serviceImages';
import { ALL_SERVICES } from '@/lib/allServices';
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Wrench, Building2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair", href: "/water-line-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Ellicott City, MD?", answer: "Full-service plumbing in Ellicott City including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial plumbing. Howard County licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Ellicott City?", answer: "Yes. Emergency service available 24/7. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Howard County?", answer: "Yes. Definitive Mechanical holds Howard County Master Plumber/Gasfitter License #MP-0000215 in addition to Maryland State #96958 and WSSC #73696. Howard County requires its own municipal license for permitted work within the county." },
  { question: "Do you serve both Old Ellicott City and the newer Ellicott City communities?", answer: "Yes. We serve the full Ellicott City area — from the historic Old Ellicott City district with its older building stock to the newer residential and commercial communities in the western Howard County corridor. Call (301) 679-5849." },
];

export default function EllicottCityMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Ellicott City, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Ellicott City, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Howard County licensed. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/howard-county/ellicott-city-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Howard County",href:"/service-areas/maryland/howard-county"},
            {label:"Ellicott City, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  ELLICOTT CITY, MD  HOWARD COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Ellicott City, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Ellicott City, Maryland for homeowners and businesses throughout Howard County. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and backflow certification available 24/7. Howard County Master Plumber/Gasfitter #MP-0000215. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Howard County Master Plumber #MP-0000215","MD State #96958","24/7 Emergency","Serving Ellicott City from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Ellicott City Maryland — Howard County Master Plumber #MP-0000215" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Ellicott City, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Ellicott City is one of Howard County's most established and desirable communities — a mix of the historic Old Ellicott City district along the Patapsco River and the extensive residential and commercial development that has grown westward along US-40 and Route 108. Definitive Mechanical holds Howard County Master Plumber/Gasfitter License #MP-0000215 — a county-specific credential required for permitted plumbing work within Howard County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SERVICES.map((svc, i) => (
              <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "130px", overflow: "hidden" }}>
                    <img
                      src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                      alt={svc.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.2) 0%, rgba(3,24,56,0.5) 100%)" }} />
                  </div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", color: "var(--brand-navy)", marginBottom: "4px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* S3: Emergency */}
      <section style={{ background: "var(--brand-navy)", position: "relative", overflow: "hidden" }} className="py-20">
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.15) 0%, transparent 65%)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily:"var(--font-display)", color:"#ef4444", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">24/7 EMERGENCY SERVICE</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(28px,4vw,42px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.05 }} className="mb-5">Emergency Plumbing Available Around the Clock</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
                A live dispatcher answers every call — no voicemail, no answering service. Licensed Master Plumber dispatched. No overtime surcharge. Upfront written pricing before any work begins.
              </p>
              <a href="tel:+13016795849" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#dc2626", color:"white", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"15px", textTransform:"uppercase", letterSpacing:"0.08em", padding:"14px 28px", borderRadius:"3px", textDecoration:"none", transition:"background 0.2s" }}>
                CALL (301) 679-5849
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "", title: "Burst Pipe", body: "Immediate shut-off and repair to prevent water damage." },
                { emoji: "", title: "Sewer Backup", body: "Camera diagnosis and hydro-jet clearing, same visit." },
                { emoji: "", title: "Gas Leak", body: "Licensed gasfitter response — evacuate and call us." },
                { emoji: "", title: "No Hot Water", body: "Water heater diagnosis and same-day replacement available." },
              ].map((card, i) => (
                <div key={i} style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px", padding:"20px 16px" }}>
                  <div style={{ fontSize:"28px", marginBottom:"8px" }}>{card.emoji}</div>
                  <p style={{ fontFamily:"var(--font-display)", color:"white", fontWeight:700, fontSize:"14px", textTransform:"uppercase", marginBottom:"6px" }}>{card.title}</p>
                  <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.7)", fontSize:"13px", lineHeight:1.5 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are common in Ellicott City?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: GitBranch, title: "Old Ellicott City historic district", body: "The historic district's older building stock — some dating to the 19th century — has plumbing systems that have been updated over generations but may still include original cast iron drains, aged water service lines, and boiler-based heating systems. Camera inspection before purchase is strongly recommended." },
              { icon: Thermometer, title: "Residential water heater service", body: "Ellicott City's active residential market includes homes across multiple decades of construction. Water heater replacement, tankless conversions, and gas appliance hookups are frequent service calls." },
              { icon: Flame, title: "Gas line service", body: "Kitchen renovations, outdoor entertainment additions, and whole-home generator installations frequently require new or upgraded gas line work in Ellicott City's residential market." },
              { icon: Droplets, title: "Commercial drain maintenance", body: "Ellicott City's commercial corridors along US-40 and Route 108 include restaurants and retail with ongoing commercial drain cleaning and backflow certification needs." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-navy)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* S7: Nearby */}
      <section style={{ background:"#F4F7FA" }} className="py-16">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-navy)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">NEARBY SERVICE AREAS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"var(--brand-navy)", fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Ellicott City, MD We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span key="Columbia, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Columbia, MD</span>
            <span key="Catonsville, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Catonsville, MD</span>
            <span key="Laurel, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Laurel, MD</span>
            <a key="Rockville, MD" href="/service-areas/maryland/montgomery-county/rockville-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Rockville, MD</a>
          </div>
          <a href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>View Full Service Area →</a>
        </div>
      </section>

            {/* S8: FAQ */}
      <section style={{ background: "var(--brand-navy)" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Ellicott City, MD?"
        subtext="Serving Ellicott City from our Largo, MD location. Howard County Master Plumber #MP-0000215  MD State #96958  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
