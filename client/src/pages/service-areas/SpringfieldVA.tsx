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
  { question: "Do you provide 24/7 emergency plumbing in Springfield?", answer: "Yes. Emergency service available 24/7. A live dispatcher answers every call. Licensed Virginia Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
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

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Northern Virginia",href:"/service-areas/northern-virginia"},
            {label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county"},
            {label:"Springfield, VA"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"'var(--font-display)'", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · SPRINGFIELD, VA · FAIRFAX COUNTY
              </p>
              <h1 style={{ fontFamily:"'var(--font-display)'", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Springfield, VA
              </h1>
              <p style={{ fontFamily:"'var(--font-body)'", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Springfield, Virginia for homeowners and businesses throughout Fairfax County. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and commercial plumbing available 24/7. Virginia Master Plumber/Gasfitter #2710064209, Class A Contractor #2705181061. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["VA Master Plumber/Gasfitter #2710064209","VA Class A Contractor #2705181061","VA SWaM Cert 815255","24/7 Emergency","Serving Springfield from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Springfield Virginia — VA Master Plumber #2710064209" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Springfield, VA?" />
          <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Springfield is a major residential and commercial hub in Fairfax County — home to the Springfield Town Center, the Springfield Interchange (one of the busiest highway interchanges in Northern Virginia), and a dense mix of single-family neighborhoods, townhome communities, and commercial development. Springfield's residential stock includes a significant number of homes from the 1960s through 1980s where original sewer laterals, water service lines, and water heaters are approaching or past end of service life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow:"0 1px 4px rgba(6,59,99,0.08)", border:"1px solid #E8EFF5", borderTop:"3px solid var(--brand-cyan)" }}>
                  <svc.icon size={20} style={{ color:"var(--brand-cyan)", flexShrink:0, marginTop:2 }} />
                  <p style={{ fontFamily:"'var(--font-body)'", fontWeight:500, color:"var(--brand-navy)", fontSize:"14px" }}>{svc.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Springfield?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }}>
              Yes. Emergency plumbing in Springfield is available 24/7. A live dispatcher answers every call. Licensed Virginia Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Springfield we also serve" />
          <div className="mb-3">
            <Link href="/service-areas/northern-virginia/fairfax-county/alexandria-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Alexandria, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/vienna-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Vienna, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/mclean-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>McLean, VA</Link>
            {["Burke, VA","Lorton, VA","Annandale, VA","Newington, VA","Fort Belvoir, VA"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      <section className="py-20" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Springfield, VA" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a licensed plumber in Springfield, VA?"
        subtext="Serving Springfield from our Largo, MD location. VA Master Plumber #2710064209 · SWaM Cert 815255 · Class A Contractor · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
