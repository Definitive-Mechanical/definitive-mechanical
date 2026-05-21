import { getServiceImage } from '@/lib/serviceImages';
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wind, Building2, Landmark
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
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing" },
  { icon: Landmark, label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Springfield, VA?", answer: "Full-service plumbing in Springfield including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler service, and commercial plumbing. Virginia licensed, SWaM certified. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Springfield?", answer: "Yes. Emergency service available 24/7. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Fairfax County?", answer: "Yes. Virginia State Master Plumber/Gasfitter #2710064209 and Virginia Class A Contractor #2705181061 authorize all plumbing and gas work in Springfield and throughout Fairfax County." },
  { question: "Do you serve commercial properties in Springfield?", answer: "Yes. We serve commercial properties, retail centers, restaurants, and office buildings in Springfield and the surrounding Fairfax County area. Virginia SWaM Cert No. 815255. Call (301) 679-5849." },
];

export default function SpringfieldVA() {
  return (
    <>
      <Helmet>
        <title>Plumber in Springfield, VA | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Springfield, VA? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Virginia licensed. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/springfield-va/" />
      </Helmet>

      <section style={{ minHeight: "60vh", position: "relative", overflow: "hidden", background: "#111" }} className="py-20">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Northern Virginia",href:"/service-areas/northern-virginia"},
            {label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county"},
            {label:"Springfield, VA"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  SPRINGFIELD, VA  FAIRFAX COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Springfield, VA
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Springfield, Virginia for homeowners and businesses throughout Fairfax County. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and commercial plumbing available 24/7. Virginia Master Plumber/Gasfitter #2710064209, Class A Contractor #2705181061. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["VA Master Plumber/Gasfitter #2710064209","VA Class A Contractor #2705181061","VA SWaM Cert 815255","24/7 Emergency","Serving Springfield from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton bg="dark" variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton bg="dark" variant="secondary" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/city-page-hero-plumber-LiK4eLEJT6Nfxt9Ly3GS3e.webp" alt="Licensed plumber Springfield Virginia — VA Master Plumber #2710064209" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Springfield, VA?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Springfield is a major residential and commercial hub in Fairfax County — home to the Springfield Town Center, the Springfield Interchange (one of the busiest highway interchanges in Northern Virginia), and a dense mix of single-family neighborhoods, townhome communities, and commercial development. Springfield's residential stock includes a significant number of homes from the 1960s through 1980s where original sewer laterals, water service lines, and water heaters are approaching or past end of service life.
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
              <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,160,200,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,160,200,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "130px", overflow: "hidden" }}>
                    <img
                      src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                      alt={svc.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                  </div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", color: "var(--brand-blue)", marginBottom: "4px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-blue)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}  
              </div>
            </div>
          ))}  
        </div>
      </section>

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
              <a href="tel:+13016795849" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#dc2626", color:"white", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"15px", textTransform:"uppercase", letterSpacing:"0.08em", padding:"14px 28px", borderRadius:"3px", textDecoration:"none" }}>CALL (301) 679-5849</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{emoji:"",title:"Burst Pipe",body:"Immediate shut-off and repair to prevent water damage."},{emoji:"",title:"Sewer Backup",body:"Camera diagnosis and hydro-jet clearing, same visit."},{emoji:"",title:"Gas Leak",body:"Licensed gasfitter response — evacuate and call us."},{emoji:"",title:"No Hot Water",body:"Water heater diagnosis and same-day replacement available."}].map((card,i)=>(
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

      <section style={{ background:"#F4F7FA" }} className="py-16">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-blue)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">NEARBY SERVICE AREAS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"var(--brand-blue)", fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Springfield We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {[{label:"Alexandria, VA",href:"/service-areas/northern-virginia/fairfax-county/alexandria-va"},{label:"Vienna, VA",href:"/service-areas/northern-virginia/fairfax-county/vienna-va"},{label:"McLean, VA",href:"/service-areas/northern-virginia/fairfax-county/mclean-va"}].map((a,i)=>(
              <a key={i} href={a.href} style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-blue)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", display:"inline-block" }}>{a.label}</a>
            ))}
            {["Burke, VA","Lorton, VA","Annandale, VA","Newington, VA","Fort Belvoir, VA"].map((c,i)=>(
              <span key={i} style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>{c}</span>
            ))}
          </div>
          <a href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>View Full Service Area →</a>
        </div>
      </section>

      <section style={{ background: "#fff" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"rgba(255,255,255,0.8)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a licensed plumber in Springfield, VA?"
        subtext="Serving Springfield from our Largo, MD location. VA Master Plumber #2710064209  SWaM Cert 815255  Class A Contractor  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
