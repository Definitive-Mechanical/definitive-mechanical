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
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #001830 100%)", minHeight: "60vh" }} className="py-20">
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
              <p style={{ fontFamily:"'var(--font-display)'", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · ARLINGTON, VA · ARLINGTON COUNTY
              </p>
              <h1 style={{ fontFamily:"'var(--font-display)'", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Arlington, VA
              </h1>
              <p style={{ fontFamily:"'var(--font-body)'", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
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
          <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Arlington County is one of the most densely populated jurisdictions in Virginia — home to the Pentagon, Amazon HQ2, Reagan National Airport, and a dense mix of high-rise residential, office, hospitality, and government facilities alongside established single-family neighborhoods in Clarendon, Arlington Forest, and Westover.
          </p>
          <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Arlington emergency plumbing carries some of the highest per-click values in our entire service area — $139–$141 CPC for emergency plumber keywords, reflecting the combination of dense population, high property values, and the urgency that comes with plumbing emergencies in a market where downtime is expensive.
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
                <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"15px" }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow:"0 1px 4px rgba(6,59,99,0.08)", border:"1px solid #E8EFF5", borderTop:"3px solid #009EC6" }}>
                  <svc.icon size={20} style={{ color:"var(--brand-cyan)", flexShrink:0, marginTop:2 }} />
                  <div>
                    <p style={{ fontFamily:"'var(--font-body)'", fontWeight:500, color:"var(--brand-navy)", fontSize:"14px" }}>{svc.label}</p>
                    {svc.note && <p style={{ fontFamily:"'var(--font-body)'", color:"#666", fontSize:"12px", marginTop:2 }}>{svc.note}</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Emergency */}
      <section className="py-16" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Arlington?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Arlington is available 24/7. We serve Arlington from our Largo, MD base — accessible via the Capital Beltway and I-395. A live dispatcher answers every call. Licensed Virginia Master Plumber dispatched. No overtime surcharge.
            </p>
            <p className="mt-4">
              <Link href="/emergency-plumbing" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>
                See our dedicated Emergency Plumber Arlington VA page →
              </Link>
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are common in Arlington?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Building2, title: "Established residential neighborhoods", body: "Many Arlington single-family homes date from the 1940s–1960s and have undergone significant renovation over the decades — but sewer laterals and water service lines in these neighborhoods often have not been replaced. Camera inspection of original clay or cast iron sewer lines is valuable for any Arlington home in this age range." },
              { icon: Building2, title: "High-rise residential and mixed-use", body: "The Rosslyn-Ballston corridor and Crystal City area have significant concentrations of high-rise condominiums and apartments where in-unit plumbing repair, water heater replacement, and commercial backflow compliance are ongoing needs." },
              { icon: Landmark, title: "Government and defense facilities", body: "The Pentagon and surrounding defense-contractor facilities, DOD-adjacent offices in Crystal City, and federal agencies with Arlington addresses create demand for MBE/SWaM-eligible commercial and government plumbing services." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"'var(--font-body)'", fontWeight:600, color:"var(--brand-navy)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Commercial */}
      <section className="py-16" style={{ background:"var(--brand-navy)" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Arlington, VA" light />
          <p style={{ fontFamily:"'var(--font-body)'", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            VA SWaM Cert 815255 + Pentagon/Amazon HQ2/DOD facilities context + CAGE 8HCF6 for federal procurement in Arlington.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["VA #2710064209","SWaM Cert 815255","Class A #2705181061","CAGE 8HCF6"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"var(--brand-navy)", fontFamily:"'var(--font-display)'", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Arlington we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'var(--font-display)'", fontWeight:700, color:"var(--brand-navy)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/northern-virginia/fairfax-county/alexandria-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Alexandria, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/mclean-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>McLean, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/vienna-va" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Vienna, VA</Link>
            <Link href="/service-areas/washington-dc" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Washington DC</Link>
            <Link href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Bethesda, MD</Link>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/service-areas/northern-virginia" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>Northern Virginia Plumbing →</Link>
            <Link href="/service-areas" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>Full Service Area →</Link>
          </div>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Arlington, VA" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Arlington, VA?"
        subtext="Serving Arlington from our Largo, MD location. VA Master Plumber #2710064209 · SWaM Cert 815255 · Class A Contractor · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
