import { Helmet } from "react-helmet-async";
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
import { getServiceImage } from '@/lib/serviceImages';
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Building2, Key
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Rockville MD" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "MDOT MBE Certified" },
];

const faqs = [
  { question: "What plumbing services do you offer in Rockville, MD?", answer: "Full-service plumbing in Rockville including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial plumbing for businesses and government facilities. Licensed specifically for Rockville: City of Rockville Master Plumber/Gasfitter #PLL-0002113. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Rockville?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. See our dedicated Emergency Plumber Rockville MD page." },
  { question: "Are you licensed specifically for the City of Rockville?", answer: "Yes. In addition to our Maryland State (MD #96958) and WSSC (#73696) licenses, Definitive Mechanical holds a City of Rockville Master Plumber/Gasfitter license (#PLL-0002113) — a municipal license required for work within the City of Rockville's jurisdiction." },
  { question: "Do you provide commercial backflow certification in Rockville?", answer: "Yes. We provide annual backflow preventer testing, certification, and report filing for commercial properties in Rockville. We can also manage annual certification scheduling for property managers with multiple properties. Call (301) 679-5849." },
];

export default function RockvilleMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Rockville, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Rockville, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/rockville-md/" />
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
            {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},
            {label:"Rockville, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  ROCKVILLE, MD  MONTGOMERY COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Rockville, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Rockville, Maryland for homes, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, backflow certification, and commercial plumbing available 24/7. Licensed for Rockville specifically: City of Rockville Master Plumber/Gasfitter #PLL-0002113. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["City of Rockville Master Plumber #PLL-0002113","WSSC #73696","MD State #96958","24/7 Emergency","MDOT MBE Certified"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton bg="dark" variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton bg="dark" variant="secondary" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/city-page-hero-plumber-LiK4eLEJT6Nfxt9Ly3GS3e.webp" alt="Licensed plumber Rockville Maryland — City of Rockville license #PLL-0002113" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Rockville, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Rockville is Montgomery County's county seat and one of the most economically significant cities in the DMV — a dense mix of established residential neighborhoods, major commercial corridors, government offices, healthcare facilities, and high-density mixed-use development. Definitive Mechanical serves the full range of Rockville plumbing needs from residential homeowners in neighborhoods like Twinbrook and Fallsgrove to commercial and government facilities throughout the city.
          </p>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Importantly: Definitive Mechanical holds a City of Rockville Master Plumber/Gasfitter license (#PLL-0002113) — a municipal license required for work within the City of Rockville's jurisdiction, separate from the state and WSSC licenses. This is a detail many DMV plumbing contractors overlook, and a credential that demonstrates our commitment to full compliance within every jurisdiction where we work.
          </p>

          {/* Rockville Credential Callout */}
          <div className="border-2 rounded-lg p-5 max-w-2xl mx-auto mb-8 flex items-start gap-4" style={{ borderColor:"var(--brand-cyan)" }}>
            <Key size={28} style={{ color:"var(--brand-cyan)", flexShrink:0, marginTop:2 }} />
            <div>
              <p style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-blue)", fontSize:"13px", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"6px" }}>
                CITY OF ROCKVILLE MUNICIPAL LICENSE
              </p>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>
                City of Rockville Master Plumber/Gasfitter #PLL-0002113 — issued by the City of Rockville, required for permitted plumbing work within the City's municipal jurisdiction. Many DMV plumbing contractors hold the state (#96958) and WSSC (#73696) credentials but not this specific Rockville municipal license.
              </p>
            </div>
          </div>

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
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are most common for Rockville homes and businesses?" />
          <div className="max-w-3xl">
            <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-blue)", fontSize:"15px" }} className="mb-2">Residential:</p>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
              Rockville's housing stock spans from mid-century Twinbrook ranchers (1950s-1960s, often with original cast iron drain lines and galvanized water supply that have been updated over decades) to newer construction in Fallsgrove, King Farm, and Rockville Town Square where modern systems are reaching their first major service milestones. Common residential calls in Rockville include water heater replacement (gas and electric), drain cleaning in mid-century homes, sewer camera inspection before home purchase, and gas line service for kitchen renovations and outdoor appliance additions.
            </p>
            <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-blue)", fontSize:"15px" }} className="mb-2 mt-6">Commercial:</p>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
              Rockville's commercial corridor — particularly along MD-355/Rockville Pike — includes restaurants, retail, medical offices, and government-adjacent businesses with backflow certification requirements, commercial drain maintenance needs, and gas system service. We provide backflow certification program management for commercial properties in Rockville.
            </p>
            <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-blue)", fontSize:"15px" }} className="mb-2 mt-4">Government facilities:</p>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }}>
              Rockville's municipal facilities, county offices, and government-adjacent properties are candidates for our MBE-certified commercial and government plumbing services.
            </p>
          </div>
        </div>
      </section>

            {/* S5: Commercial */}
      <section style={{ background:"linear-gradient(135deg, var(--brand-navy) 0%, #0a2a4a 100%)", position:"relative", overflow:"hidden" }} className="py-20">
        <div style={{ position:"absolute", top:0, right:0, width:"40%", height:"100%", background:"linear-gradient(to left, rgba(0,158,198,0.06), transparent)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p style={{ fontFamily:"var(--font-display)", color:"rgba(255,255,255,0.8)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">COMMERCIAL & GOVERNMENT</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-5">Commercial Plumbing in Rockville, MD</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">Rockville's dense commercial corridor along Veirs Mill Road and Rockville Pike, plus its role as Montgomery County seat, creates significant demand for commercial plumbing. MDOT MBE Certified (Cert No. 20-134), WSSC #73696, CAGE Code 8HCF6.</p>
              <a href="/commercial-plumbing" style={{ color:"rgba(255,255,255,0.8)", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>Learn more about commercial plumbing →</a>
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
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Rockville we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-blue)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Bethesda, MD</Link>
            <Link href="/service-areas/maryland/montgomery-county/potomac-md" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Potomac, MD</Link>
            {["Gaithersburg, MD","Germantown, MD","North Bethesda, MD","Derwood, MD","Travilah, MD","Darnestown, MD","Cabin John, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/service-areas/maryland/montgomery-county" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>Montgomery County Plumbing Services →</Link>
            <Link href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
          </div>
        </div>
      </section>

            {/* S8: FAQ */}
      <section style={{ background: "#fff" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"rgba(255,255,255,0.8)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Rockville, MD?"
        subtext="Serving Rockville from our Largo, MD location. City of Rockville #PLL-0002113  WSSC #73696  MD State #96958  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
