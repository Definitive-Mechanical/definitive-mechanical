import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wind, Building2, Landmark, CheckCircle2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Arlington VA" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Video Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: AlertCircle, label: "Gas Leak Repair", href: "/gas-leak-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "SWaM Certified" },
  { icon: Landmark, label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Arlington, VA?", answer: "Full-service plumbing in Arlington including emergency plumbing, drain cleaning, water heater repair and installation, sewer camera inspection, gas line service, backflow certification, boiler service, and commercial and government plumbing. Virginia licensed, SWaM certified. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Arlington County?", answer: "Yes. Virginia State Master Plumber/Gasfitter #2710064209 and Virginia Class A Contractor #2705181061 authorize all plumbing and gas work in Arlington County. Virginia SWaM Cert No. 815255 supports government procurement." },
  { question: "Do you provide emergency plumbing in Arlington?", answer: "Yes. 24/7 emergency service available. A live dispatcher answers every call. Licensed Virginia Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
];

export default function ArlingtonVA() {
  return (
    <>
      <Helmet>
        <title>Plumber in Arlington, VA | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Arlington, VA? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/arlington-county/arlington-va/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Northern Virginia",href:"/service-areas/northern-virginia"},
            {label:"Arlington County",href:"/service-areas/northern-virginia/arlington-county"},
            {label:"Arlington, VA"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  ARLINGTON, VA  ARLINGTON COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Arlington, VA
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Arlington, Virginia for homeowners, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and backflow certification available 24/7. Virginia Master Plumber/Gasfitter #2710064209, Class A Contractor #2705181061, Virginia SWaM Cert 815255. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["VA Master Plumber/Gasfitter #2710064209","VA Class A Contractor #2705181061","VA SWaM Cert 815255","24/7 Emergency","Serving Arlington from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Arlington Virginia 24/7 emergency — VA Master Plumber #2710064209" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Arlington, VA?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Arlington County is one of the most densely populated jurisdictions in Virginia — home to the Pentagon, Amazon HQ2, Reagan National Airport, and a dense mix of high-rise residential, office, hospitality, and government facilities alongside established single-family neighborhoods in Clarendon, Arlington Forest, and Westover.
          </p>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Arlington emergency plumbing carries some of the highest per-click values in our entire service area — $139-$141 CPC for emergency plumber keywords, reflecting the combination of dense population, high property values, and the urgency that comes with plumbing emergencies in a market where downtime is expensive.
          </p>

          {/* VA Credentials */}
          <div className="mb-8 max-w-2xl">
            {[
              "Virginia State Master Plumber/Gasfitter #2710064209",
              "Virginia Class A Contractor #2705181061",
              "Virginia SWaM Certification No. 815255 — eligible for Virginia government procurement",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} style={{ color:"var(--brand-cyan)", flexShrink:0 }} />
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"15px" }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ background: "linear-gradient(135deg, #063B63, #0a3a5e)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
                    <svc.icon size={40} color="#4FB3E8" strokeWidth={1.8} />
                  </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: "var(--brand-navy)", marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
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
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are common in Arlington?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Building2, title: "Established residential neighborhoods", body: "Many Arlington single-family homes date from the 1940s-1960s and have undergone significant renovation over the decades — but sewer laterals and water service lines in these neighborhoods often have not been replaced. Camera inspection of original clay or cast iron sewer lines is valuable for any Arlington home in this age range." },
              { icon: Building2, title: "High-rise residential and mixed-use", body: "The Rosslyn-Ballston corridor and Crystal City area have significant concentrations of high-rise condominiums and apartments where in-unit plumbing repair, water heater replacement, and commercial backflow compliance are ongoing needs." },
              { icon: Landmark, title: "Government and defense facilities", body: "The Pentagon and surrounding defense-contractor facilities, DOD-adjacent offices in Crystal City, and federal agencies with Arlington addresses create demand for MBE/SWaM-eligible commercial and government plumbing services." },
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
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-5">Commercial Plumbing in Arlington, VA</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">Arlington's dense commercial and government corridor — Pentagon, Crystal City, Rosslyn — creates significant demand for licensed commercial plumbing. Definitive Mechanical holds SWaM Cert 815255, CAGE Code 8HCF6, and VA Class A Contractor #2705181061 for all commercial and government procurement.</p>
              <a href="/commercial-plumbing" style={{ color:"var(--brand-cyan)", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>Learn more about commercial plumbing →</a>
            </div>
            <div className="flex flex-col gap-3">
              {["VA #2710064209", "SWaM Cert 815255", "Class A #2705181061", "CAGE 8HCF6"].map((b,i)=>(
                <span key={i} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", color:"white", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"6px 14px", borderRadius:"2px" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* S7: Nearby */}
      <section style={{ background:"#F4F7FA" }} className="py-16">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-navy)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">NEARBY SERVICE AREAS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"var(--brand-navy)", fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Arlington, VA We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <a key="Alexandria, VA" href="/service-areas/northern-virginia/fairfax-county/alexandria-va" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Alexandria, VA</a>
            <a key="McLean, VA" href="/service-areas/northern-virginia/fairfax-county/mclean-va" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>McLean, VA</a>
            <a key="Washington DC" href="/service-areas/washington-dc" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-navy)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Washington DC</a>
            <span key="Falls Church, VA" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Falls Church, VA</span>
            <span key="Tysons, VA" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Tysons, VA</span>
            <span key="Rosslyn, VA" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Rosslyn, VA</span>
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
        heading="Need a licensed plumber in Arlington, VA?"
        subtext="Serving Arlington from our Largo, MD location. VA Master Plumber #2710064209  SWaM Cert 815255  Class A Contractor  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
