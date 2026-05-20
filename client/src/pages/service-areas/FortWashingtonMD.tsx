import { getServiceImage } from '@/lib/serviceImages';
import { ALL_SERVICES } from '@/lib/allServices';
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wrench, Wind, Building2
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
  { icon: AlertCircle, label: "Gas Leak Repair", href: "/gas-leak-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wrench, label: "Water Line Repair", href: "/water-line-repair" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
];

const faqs = [
  { question: "What plumbing services do you offer in Fort Washington, MD?", answer: "Full-service plumbing in Fort Washington including emergency service, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and faucet and toilet repair. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Fort Washington?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to work in Fort Washington and Prince George's County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 and WSSC Master Plumber/Gasfitter #73696 cover all plumbing work in Fort Washington and throughout Prince George's County." },
  { question: "Can you service sump pumps and basement drainage in Fort Washington?", answer: "Yes. We service sump pumps, ejector pumps, and basement drainage systems for Fort Washington homeowners. Call (301) 679-5849 for assessment and service." },
];

export default function FortWashingtonMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Fort Washington, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Fort Washington, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/fort-washington-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county"},
            {label:"Fort Washington, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  FORT WASHINGTON, MD  PRINCE GEORGE'S COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Fort Washington, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Fort Washington, Maryland — serving from our Largo, MD base. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and commercial plumbing available 24/7. Maryland Master Plumber/Gasfitter #96958, WSSC #73696. Upfront pricing in writing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber","WSSC #73696","24/7 Emergency","Near Fort Washington, MD","Serving from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/service-pipe-repair-Gy9WxRHpxjVJPBFqhKcJaH.webp" alt="Licensed plumber Fort Washington Maryland — Definitive Mechanical" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Fort Washington, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Fort Washington is a primarily residential community along the Potomac River in southern Prince George's County — characterized by well-established single-family neighborhoods, waterfront properties, and proximity to the National Harbor corridor. The housing stock ranges from mid-century homes to 1980s and 1990s construction, with a mix of plumbing systems that reflects that age range.
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
          <SectionHeading eyebrow="RESIDENTIAL PLUMBING" heading="What plumbing issues are common in Fort Washington homes?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Fort Washington's residential neighborhoods include a significant number of homes built in the 1960s through 1980s. Plumbing systems of this era frequently include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: GitBranch, title: "Original cast iron drain lines", body: "Approaching or past end of service life — camera inspection is recommended for homes of this age experiencing recurring drain issues." },
              { icon: Thermometer, title: "Aging water heaters", body: "Many Fort Washington homes are on their second or third water heater. When the current unit is 10+ years old, proactive replacement before failure is often more cost-effective than emergency replacement." },
              { icon: Droplets, title: "Sump pump and basement drainage systems", body: "Properties closer to the Potomac River watershed often have moisture management systems that require periodic service." },
              { icon: Flame, title: "Gas appliance service", body: "Fort Washington has a high proportion of gas-heated homes; gas line hookups for generators, standby power systems, and appliance upgrades are common service requests." },
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

            {/* S5: Commercial */}
      <section style={{ background:"linear-gradient(135deg, var(--brand-navy) 0%, #0a2a4a 100%)", position:"relative", overflow:"hidden" }} className="py-20">
        <div style={{ position:"absolute", top:0, right:0, width:"40%", height:"100%", background:"linear-gradient(to left, rgba(0,158,198,0.06), transparent)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">COMMERCIAL & GOVERNMENT</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-5">Commercial Plumbing in Fort Washington, MD</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">Definitive Mechanical serves commercial and government-adjacent facilities in Fort Washington and the National Harbor corridor. MDOT MBE Certified (Cert No. 20-134), CAGE Code 8HCF6. Maryland Master Plumber/Gasfitter #96958 and WSSC #73696 for all local plumbing work.</p>
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
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Fort Washington we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-navy)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/charles-county/waldorf-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Waldorf, MD</Link>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            {["Oxon Hill, MD","Accokeek, MD","Brandywine, MD","Clinton, MD","Temple Hills, MD","National Harbor, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
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
        heading="Need a licensed plumber in Fort Washington, MD?"
        subtext="Serving Fort Washington from our Largo, MD location. Maryland Master Plumber #96958  WSSC #73696  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
