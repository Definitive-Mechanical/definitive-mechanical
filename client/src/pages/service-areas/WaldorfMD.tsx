import { getServiceImage } from '@/lib/serviceImages';
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
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
import CityMap from "@/components/ui/CityMap";

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
  { question: "What plumbing services do you offer in Waldorf, MD?", answer: "Full-service plumbing in Waldorf including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial plumbing. Maryland licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Waldorf?", answer: "Yes. Emergency service available 24/7. We serve Waldorf from our Largo, MD location via MD-5/Branch Avenue. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Charles County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 covers all plumbing work in Waldorf and throughout Charles County." },
  { question: "Do you serve commercial properties in Waldorf?", answer: "Yes. We serve commercial properties, retail centers, restaurants, and office buildings in Waldorf and the surrounding Charles County area. MDOT MBE Certified (Cert No. 20-134). Call (301) 679-5849." },
];

export default function WaldorfMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Waldorf, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Waldorf, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Maryland licensed. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/charles-county/waldorf-md/" />                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context": "https://schema.org", "@type": ["LocalBusiness", "Plumber"], "name": "Definitive Mechanical", "telephone": "+13016795849", "address": {"@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774", "addressCountry": "US"}, "areaServed": {"@type": "City", "name": "Waldorf"}, "geo": {"@type": "GeoCoordinates", "latitude": 38.6318, "longitude": -76.9197}, "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "40"}}`}} />
        </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Charles County",href:"/service-areas/maryland/charles-county"},
            {label:"Waldorf, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  WALDORF, MD  CHARLES COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Waldorf, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Waldorf, Maryland for homeowners, businesses, and commercial properties throughout Charles County. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and commercial plumbing available 24/7. Maryland Master Plumber/Gasfitter #96958. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency","Serving Waldorf from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="white" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="block">
              <img src="/images/city-waldorf-md.webp" alt="Licensed plumber Waldorf Maryland — Definitive Mechanical" loading="eager" className="rounded-lg w-full city-hero-img" style={{ objectFit:"cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Waldorf, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Waldorf is the largest community in Charles County and one of the fastest-growing areas in the DMV — a major residential and commercial hub with significant new construction alongside established neighborhoods from the 1970s through 1990s. Waldorf plumbing keywords carry some of the highest cost-per-click values in our service area ($47.10 CPC), reflecting the density of demand and the active homeowner market in this community.
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
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", color: '#0A0A0A', marginBottom: "4px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: '#0A0A0A', fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Learn more →</span>
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
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing challenges are common in Waldorf homes and businesses?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "Water heater replacement", body: "Waldorf's active residential market includes a large number of homes from the 1980s and 1990s where original water heaters have been replaced once or twice — and the current units are now approaching the end of their service life." },
              { icon: GitBranch, title: "Sewer line service", body: "Older Waldorf neighborhoods have original sewer laterals that benefit from periodic camera inspection and hydro-jetting to address root intrusion and grease accumulation." },
              { icon: Flame, title: "Gas line service", body: "Waldorf has a high proportion of gas-heated homes. Gas appliance hookups, tankless water heater installations, and generator gas line connections are frequent service requests." },
              { icon: Building2, title: "Commercial plumbing", body: "Waldorf's active commercial corridors along US-301 and MD-228 include restaurants, retail, and service businesses with ongoing commercial drain and backflow certification needs." },
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
          <h2 style={{ fontFamily:"var(--font-display)", color: '#0A0A0A', fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Waldorf, MD We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <a key="Fort Washington, MD" href="/service-areas/maryland/prince-georges-county/fort-washington-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Fort Washington, MD</a>
            <a key="Largo, MD" href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Largo, MD</a>
            <span key="La Plata, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>La Plata, MD</span>
            <span key="Clinton, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Clinton, MD</span>
            <span key="Brandywine, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Brandywine, MD</span>
            <span key="White Plains, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>White Plains, MD</span>
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
        q="Waldorf, MD"
        label="Waldorf, MD — Definitive Mechanical Service Area"
        zoom={13}
      />

      <CTABanner
        heading="Need a licensed plumber in Waldorf, MD?"
        subtext="Serving Waldorf from our Largo, MD location. Maryland Master Plumber #96958  MDOT MBE Certified  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
