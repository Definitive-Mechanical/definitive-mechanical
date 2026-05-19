import { Helmet } from "react-helmet";
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
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Alexandria VA" },
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

const alexAreas = [
  { icon: Building2, title: "Old Town Alexandria", body: "The 18th and 19th century townhomes of Old Town are among the oldest residential structures in Northern Virginia. Plumbing in these properties has been updated over generations, but original terra cotta sewer laterals, aged cast iron drains, and boiler-based heating systems are not uncommon. Camera inspection before purchase is strongly recommended for Old Town properties." },
  { icon: Building2, title: "Del Ray and Rosemont", body: "Mid-century residential neighborhoods with active renovation markets. Water heater replacement, kitchen and bathroom fixture upgrades, and gas line installations for renovated kitchens are common service requests." },
  { icon: Building2, title: "Potomac Yard and Carlyle", body: "High-density newer development with building-wide plumbing systems, commercial backflow compliance requirements, and commercial water heater and mechanical system service needs." },
  { icon: Landmark, title: "Route 1 commercial corridor and government facilities", body: "Restaurant drain maintenance, backflow certification, and government facility plumbing. Virginia SWaM Cert No. 815255 supports procurement for Virginia state and local government agencies operating in Alexandria." },
];

const faqs = [
  { question: "What plumbing services do you offer in Alexandria, VA?", answer: "Full-service plumbing in Alexandria including emergency plumbing, drain cleaning, water heater repair and installation, tankless water heaters, sewer camera inspection, gas line service, backflow certification, boiler service, and commercial and government plumbing. Virginia licensed, SWaM certified. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Virginia?", answer: "Yes. Virginia State Master Plumber/Gasfitter #2710064209 and Virginia Class A Contractor #2705181061. We also hold Virginia SWaM Certification No. 815255 for Virginia government procurement." },
  { question: "Do you provide emergency plumbing in Alexandria?", answer: "Yes. 24/7 emergency service available. We serve Alexandria via the Capital Beltway Wilson Bridge. A live dispatcher answers every call. No overtime surcharge. Call (301) 679-5849." },
  { question: "Do you serve government agencies and contractors in Alexandria?", answer: "Yes. Virginia SWaM Cert No. 815255 and CAGE Code 8HCF6 support Virginia state, local, and federal procurement in Alexandria. We can serve as a prime contractor or subcontractor for government plumbing work." },
];

export default function AlexandriaVA() {
  return (
    <>
      <Helmet>
        <title>Plumber in Alexandria, VA | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Alexandria, VA? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/alexandria-va/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Northern Virginia",href:"/service-areas/northern-virginia"},
            {label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county"},
            {label:"Alexandria, VA"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · ALEXANDRIA, VA · NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Alexandria, VA
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Alexandria, Virginia for homeowners, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and backflow certification available 24/7. Virginia Master Plumber/Gasfitter #2710064209, Class A Contractor #2705181061, SWaM Cert No. 815255. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["VA Master Plumber/Gasfitter #2710064209","VA Class A Contractor #2705181061","VA SWaM Cert 815255","24/7 Emergency","Serving Alexandria from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img src="https://placehold.co/700x500/186090/C0D8F0?text=Plumber+Alexandria+VA+Licensed" alt="Licensed plumber Alexandria Virginia — VA Master Plumber #2710064209, SWaM Certified" loading="eager" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Alexandria, VA?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Alexandria is one of the most historically significant and densely populated cities in Northern Virginia — a mix of pre-Civil War townhomes in Old Town, mid-20th century residential neighborhoods in Del Ray and Rosemont, newer high-rise development in Potomac Yard, and a major commercial and government corridor along Route 1 and Duke Street. Each part of Alexandria presents a different plumbing service profile.
          </p>

          {/* VA Credentials */}
          <div className="mb-8 max-w-2xl">
            <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }} className="mb-3">Virginia credentials that matter in Alexandria:</p>
            {[
              "Virginia State Master Plumber/Gasfitter #2710064209",
              "Virginia Class A Contractor #2705181061 — required for projects over $120,000",
              "Virginia SWaM Certification No. 815255 — eligible for Virginia government procurement",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} style={{ color:"#009EC6", flexShrink:0 }} />
                <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"15px" }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5" style={{ borderTopColor:"#009EC6" }}>
                  <svc.icon size={20} style={{ color:"#009EC6", flexShrink:0, marginTop:2 }} />
                  <div>
                    <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:500, color:"#003060", fontSize:"14px" }}>{svc.label}</p>
                    {svc.note && <p style={{ fontFamily:"'Barlow',sans-serif", color:"#666", fontSize:"12px", marginTop:2 }}>{svc.note}</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Emergency */}
      <section className="py-16" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Alexandria?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Alexandria is available 24/7. We serve Alexandria from our Largo, MD base — accessible via the Wilson Bridge on the Capital Beltway. Alexandria emergency plumbing carries some of the highest keyword values in our service area, reflecting the density of demand and the urgency of plumbing needs in this densely populated city.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              A live dispatcher answers every call. Licensed Virginia Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are specific to Alexandria?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {alexAreas.map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"#009EC6" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"#009EC6" }} />
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Commercial */}
      <section className="py-16" style={{ background:"#003060" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Alexandria, VA" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            SWaM Cert 815255 + CAGE 8HCF6 + VA credentials for Alexandria commercial and government work.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["VA #2710064209","SWaM Cert 815255","Class A #2705181061"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"#003060", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Alexandria we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/northern-virginia/arlington-county/arlington-va" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Arlington, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/mclean-va" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>McLean, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/springfield-va" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Springfield, VA</Link>
            <Link href="/service-areas/washington-dc" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Washington DC</Link>
            {["Annandale, VA","Falls Church, VA","Fort Belvoir, VA","Mount Vernon, VA"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/service-areas/northern-virginia" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>Northern Virginia Plumbing →</Link>
            <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>Full Service Area →</Link>
          </div>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Alexandria, VA" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Alexandria, VA?"
        subtext="Serving Alexandria from our Largo, MD location. VA Master Plumber #2710064209 · SWaM Cert 815255 · Class A Contractor · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
