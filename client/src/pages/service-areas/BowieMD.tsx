import { Helmet } from "react-helmet-async";
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
import { getServiceImage } from '@/lib/serviceImages';
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wrench, Wind, Building2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "live dispatcher, licensed plumber dispatched" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Video Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Bowie, MD?", answer: "We offer the full range of plumbing services in Bowie — emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair and installation, backflow certification, boiler and furnace service, and faucet and toilet repair. Commercial and government plumbing available. Call (301) 679-5849." },
  { question: "How quickly can you respond to a plumbing emergency in Bowie?", answer: "We dispatch from our Largo, MD location — minutes from most Bowie neighborhoods. A live dispatcher answers 24/7. Licensed plumbing professionals dispatched — work performed under Master Plumber license. Call (301) 679-5849 for an honest ETA at the time of your call." },
  { question: "Are you licensed to work in Bowie and Prince George's County?", answer: "Yes. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC Master Plumber/Gasfitter License #73696, which covers plumbing work throughout Prince George's County including Bowie." },
  { question: "Do you offer financing for water heater replacement in Bowie?", answer: "Yes. Consumer financing is available through Synchrony for eligible services including water heater replacement and installation. Apply at mysynchrony.com/mmc/S6240351600. Call (301) 679-5849 to discuss." },
];

export default function BowieMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Bowie, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Bowie, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/bowie-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ minHeight: "60vh", position: "relative", overflow: "hidden", background: "#111" }} className="py-20">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county"},
            {label:"Bowie, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  BOWIE, MD  PRINCE GEORGE'S COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Bowie, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Bowie, Maryland — serving from our Largo, MD location just minutes away. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and commercial plumbing available 24/7. Maryland Master Plumber/Gasfitter #96958. Upfront pricing in writing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber","WSSC #73696","MD #96958","24/7 Emergency","Serving Bowie from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton bg="dark" variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton bg="dark" variant="secondary" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/city-page-hero-plumber-LiK4eLEJT6Nfxt9Ly3GS3e.webp" alt="Licensed plumber Bowie Maryland — Definitive Mechanical serving from Largo MD" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Bowie, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Bowie is one of the largest cities in Prince George's County and one of the most active markets in our service area. We serve homeowners, businesses, and commercial properties throughout Bowie — from the established neighborhoods near Belair at Bowie to the newer development corridors along Route 50 and Route 301.
          </p>
          {ALL_SERVICE_CATEGORIES.map((cat) => (

            <div key={cat.key} style={{ marginBottom: "36px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>

                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />

                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--brand-blue)" }}>{cat.title}</span>

                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {cat.items.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,160,200,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,160,200,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                      <img
                        src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                        alt={svc.label}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                    </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: "var(--brand-blue)", marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-blue)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
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
      <section style={{ background: "#fff", position: "relative", overflow: "hidden" }} className="py-20">
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
          <SectionHeading eyebrow="RESIDENTIAL PLUMBING" heading="What plumbing challenges are common in Bowie, MD homes?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Bowie's residential profile spans several decades of construction. The older Belair at Bowie neighborhoods — developed from the late 1950s through the 1970s — contain homes with original cast iron drain lines, galvanized supply piping, and water heaters and boilers that have been through multiple replacement cycles. The newer communities along the Route 301 corridor feature more modern plumbing systems but are reaching the age where water heater replacements and sewer camera inspections become prudent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "Water heater repair and replacement", body: "Both the aging original stock in older neighborhoods and more recent tank failures in homes from the 1990s and 2000s. Financing through Synchrony available for replacement." },
              { icon: GitBranch, title: "Sewer camera inspection and cleaning", body: "Many older Bowie neighborhoods have mature tree canopy above their sewer laterals, making root intrusion one of the most common causes of recurring drain problems." },
              { icon: Flame, title: "Gas line service", body: "Bowie has a high proportion of gas-heated homes. Gas appliance hookups, line repairs, and tankless conversions are frequent requests." },
              { icon: Droplets, title: "Drain cleaning", body: "Particularly in older kitchen lines where decades of grease accumulation builds behind walls and under floors." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-blue)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* S5: Commercial */}
      <section style={{ background:"linear-gradient(135deg, var(--brand-navy) 0%, #0a2a4a 100%)", position:"relative", overflow:"hidden" }} className="py-20">
        <div style={{ position:"absolute", top:0, right:0, width:"40%", height:"100%", background:"linear-gradient(to left, rgba(0,158,198,0.06), transparent)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">COMMERCIAL & GOVERNMENT</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-5">Commercial Plumbing in Bowie, MD</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">Bowie's growing commercial base along Route 301 and Annapolis Road creates demand for commercial plumbing services. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134) and holds CAGE Code 8HCF6 for government procurement in Prince George's County.</p>
              <a href="/commercial-plumbing" style={{ color:"var(--brand-cyan)", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>Learn more about commercial plumbing →</a>
            </div>
            <div className="flex flex-col gap-3">
              {["MD Master Plumber #96958", "WSSC #73696", "MDOT MBE Cert 20-134", "CAGE 8HCF6"].map((b,i)=>(
                <span key={i} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", color:"white", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"6px 14px", borderRadius:"2px" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S7: Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Bowie we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-blue)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            <Link href="/service-areas/maryland/prince-georges-county/fort-washington-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Fort Washington, MD</Link>
            {["Upper Marlboro, MD","Mitchellville, MD","Glenn Dale, MD","Crofton, MD","Odenton, MD","Davidsonville, MD","Fairwood, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

            {/* S8: FAQ */}
      <section style={{ background: "#fff" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="light" />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Bowie, MD?"
        subtext="Serving Bowie from our Largo, MD location. Maryland Master Plumber/Gasfitter #96958  WSSC #73696  24/7 Emergency  Upfront Pricing."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE IN BOWIE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
