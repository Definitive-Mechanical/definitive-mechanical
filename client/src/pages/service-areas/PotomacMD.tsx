import { Helmet } from "react-helmet-async";
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
import { getServiceImage } from '@/lib/serviceImages';
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Wrench
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import CityMap from "@/components/ui/CityMap";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair", note: "commercial-grade and tankless" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair", note: "outdoor kitchens, generators, pool heaters" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification", note: "irrigation systems" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
];

const faqs = [
  { question: "What plumbing services do you offer in Potomac, MD?", answer: "Full-service plumbing in Potomac including emergency plumbing, water heater repair and installation, tankless water heaters, drain cleaning, sewer camera inspection, gas line installation for outdoor kitchens and generators, backflow certification for irrigation systems, and boiler service. Maryland licensed, WSSC licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Potomac?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Potomac and Montgomery County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 and WSSC Master Plumber/Gasfitter #73696 cover all plumbing work in Potomac and throughout Montgomery County." },
  { question: "Do you certify backflow preventers for irrigation systems in Potomac?", answer: "Yes. We provide annual irrigation backflow preventer testing and certification for Potomac properties and can manage annual compliance scheduling. Call (301) 679-5849." },
];

export default function PotomacMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Potomac, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Potomac, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & backflow certification. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/potomac-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},
            {label:"Potomac, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  POTOMAC, MD  MONTGOMERY COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Potomac, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Potomac, Maryland for estate homes, residential properties, and commercial facilities. Emergency plumbing, water heater repair, drain cleaning, gas line service, backflow certification, and sewer repair available 24/7. Maryland Master Plumber/Gasfitter #96958, WSSC #73696. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["MD Master Plumber #96958","WSSC #73696","24/7 Emergency","Estate Home Experience","Serving Potomac from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="white" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/manus-storage/city-potomac-md_21089d07.jpg" alt="Licensed plumber Potomac Maryland — Definitive Mechanical estate home service" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Potomac, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Potomac is one of the most affluent communities in the United States — characterized by large estate homes, significant lot sizes, extensive landscaping with irrigation systems, outdoor entertainment areas, and a residential profile that creates demand for premium plumbing service. Potomac's large homes have correspondingly complex plumbing systems — multiple water heaters or commercial-grade units, extensive irrigation systems with backflow requirements, gas lines serving outdoor kitchens and generators, and well-maintained but aging sewer laterals that benefit from periodic camera inspection.
          </p>
          {ALL_SERVICE_CATEGORIES.map((cat) => (

            <div key={cat.key} style={{ marginBottom: "36px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>

                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />

                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: '#0A0A0A' }}>{cat.title}</span>

                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {cat.items.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                      <img
                        src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                        alt={svc.label}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.25) 0%, rgba(3,24,56,0.55) 100%)" }} />
                    </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: '#0A0A0A', marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}  
              </div>
            </div>
          ))}  
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
                A live dispatcher answers every call — no voicemail, no answering service. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Upfront written pricing before any work begins.
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
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are most common for Potomac homes?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "High-demand water heating", body: "Potomac's larger homes require properly sized water heating systems. Tankless conversions are popular — eliminating standby heat loss and providing unlimited hot water for large households with high simultaneous demand." },
              { icon: ShieldCheck, title: "Irrigation backflow certification", body: "Potomac's landscaped estate properties frequently have irrigation systems requiring annual backflow preventer testing and certification. We provide annual certification and can manage compliance scheduling." },
              { icon: Flame, title: "Gas line service", body: "Outdoor entertainment areas — kitchens, fire features, pool and spa heaters, whole-home generators — are common in Potomac and each requires a permitted, licensed gas line installation." },
              { icon: GitBranch, title: "Sewer lateral inspection", body: "Potomac's mature tree canopy creates root intrusion risk for original sewer laterals. Camera inspection every 3-5 years is a prudent maintenance practice for properties with clay or aging PVC laterals." },
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
          <p style={{ fontFamily:"var(--font-display)", color: '#0A0A0A', fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">NEARBY SERVICE AREAS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color: '#0A0A0A', fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Potomac, MD We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <a key="Bethesda, MD" href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Bethesda, MD</a>
            <a key="Rockville, MD" href="/service-areas/maryland/montgomery-county/rockville-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Rockville, MD</a>
            <a key="Chevy Chase, MD" href="/service-areas/maryland/montgomery-county/chevy-chase-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Chevy Chase, MD</a>
            <span key="Great Falls, VA" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Great Falls, VA</span>
            <span key="North Potomac, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>North Potomac, MD</span>
            <span key="Cabin John, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Cabin John, MD</span>
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
      {/* ── S6b: CITY MAP ─────────────────────────────────────────── */}
      <CityMap
        q="Potomac, MD"
        label="Potomac, MD — Definitive Mechanical Service Area"
        zoom={13}
      />

      <CTABanner
        heading="Need a licensed plumber in Potomac, MD?"
        subtext="Serving Potomac from our Largo, MD location. Maryland Master Plumber #96958  WSSC #73696  24/7 Emergency  Estate Home Experience."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
