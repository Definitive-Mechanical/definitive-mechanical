import { Helmet } from "react-helmet-async";
import { Phone, ShieldCheck, Award, FileText, Clock, Wrench, Building2, CheckCircle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Do you serve both small businesses and large commercial facilities in Maryland?", answer: "Yes. Definitive Mechanical serves commercial clients ranging from single-tenant retail spaces to multi-building institutional campuses. Our licensed Master Plumber and Master Gasfitter credentials apply regardless of project scale. We provide written scope and pricing before starting any commercial job." },
  { question: "Can you work on government-owned properties in Maryland?", answer: "Yes. Definitive Mechanical holds MDOT MBE Certification No. 20-134, which qualifies us for State of Maryland agency procurement, Prince George's County government contracts, Montgomery County projects, and University of Maryland facilities. We are familiar with government facility access and compliance requirements." },
  { question: "Are you registered in eMaryland Marketplace (eMMA)?", answer: "Yes. Definitive Mechanical is registered in eMaryland Marketplace Advantage (eMMA), the State of Maryland's procurement portal. Prime contractors and government agencies can find and engage us through the eMMA system using our MBE Cert No. 20-134 and NAICS Code 238220." },
  { question: "What is your typical response time for a commercial emergency in Maryland?", answer: "We dispatch 24/7 for commercial plumbing emergencies across Maryland. For active facility emergencies — pipe failures, sewer backups, gas leaks — we coordinate directly with property managers and building engineers. Response times vary by location and time of day; call (301) 679-5849 for live dispatch." },
  { question: "Do you provide preventative maintenance contracts for commercial properties?", answer: "Yes. We offer preventative maintenance programs for commercial properties including scheduled drain and sewer maintenance, annual backflow preventer certification, water heater inspection programs, and gas line safety checks. Contact us to discuss a maintenance schedule tailored to your facility." },
];

const COUNTIES = [
  { name: "Prince George's County", detail: "Joint Base Andrews-adjacent corridor, University of Maryland facilities, county government properties, Bowie/Mitchellville commercial developments. MDOT MBE credentials directly applicable." },
  { name: "Montgomery County", detail: "Rockville Pike commercial corridor, I-270 biotech and pharmaceutical corridor (Shady Grove), Bethesda office and medical buildings. City of Rockville local license #PLL-0002113 required and held." },
  { name: "Howard County", detail: "Columbia and Ellicott City commercial properties, Route 1 industrial corridor, Jessup logistics corridor. Howard County license #20020096958 required and held." },
  { name: "Anne Arundel County", detail: "BWI-adjacent logistics and commercial properties, Odenton/Crofton commercial. Anne Arundel license #A2-6139 held." },
  { name: "Charles County", detail: "Waldorf's fast-growing commercial corridor (MD-228/US-301), La Plata civic and government facilities." },
];

const DIFFERENTIATORS = [
  { icon: ShieldCheck, title: "Licensed in every Maryland jurisdiction we work in", body: "County-level licenses in Howard, Anne Arundel, and the City of Rockville, in addition to state and WSSC credentials. No permit surprises — we hold the right license before we start." },
  { icon: Award, title: "MDOT MBE certified for government and institutional procurement", body: "Cert No. 20-134. If your project uses State of Maryland, Prince George's County, or federal funding, our MBE status qualifies us for set-aside and preference programs." },
  { icon: FileText, title: "Upfront written scope before we start", body: "We provide written pricing and a documented scope of work before any commercial job begins. No change orders without your authorization." },
];

const EMERGENCIES = [
  "Active pipe failure in a commercial facility causing business interruption",
  "Sewer backup affecting multiple tenants or units",
  "Gas leak at a commercial property",
  "Water heater failure in a multi-tenant building",
  "Backflow preventer failure triggering a compliance violation",
];

export default function CommercialPlumberMaryland() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness", "Plumber"],
        "name": "Commercial Plumbing Maryland — Definitive Mechanical",
        "serviceType": "CommercialPlumbing",
        "areaServed": "Maryland",
        "provider": {
          "name": "Definitive Mechanical",
          "address": "9701 Apollo Drive, Suite 100, Largo, MD 20774",
          "telephone": "+13016795849"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
          { "@type": "ListItem", "position": 2, "name": "Commercial Plumbing", "item": "https://definitivemechanical.com/commercial-plumbing/" },
          { "@type": "ListItem", "position": 3, "name": "Commercial Plumber Maryland" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Commercial Plumber in Maryland | Licensed, MBE Certified | Definitive Mechanical</title>
        <meta name="description" content="Licensed commercial plumber serving Maryland across 5 counties. MBE Cert No. 20-134. Master Plumber #96958 + WSSC #73696. Call Definitive Mechanical: (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/commercial-plumber-maryland/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Commercial Plumbing", href: "/commercial-plumbing/" }, { label: "Commercial Plumber Maryland" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>Commercial Plumbing  Maryland  All Five Counties</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Licensed Commercial Plumber in Maryland
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical serves commercial property managers, facility directors, government procurement teams, and business owners across Maryland's five-county DC metro region. MDOT MBE Certified No. 20-134. Master Plumber #96958. WSSC #73696.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
          </div>
          {/* Trust Strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>
            {["MDOT MBE Cert 20-134", "VA SWaM Cert 815255", "Master Plumber MD/DC/VA/DE", "CAGE 8HCF6", "NAICS 238220", "11 Years in Business"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Commercial Services"
            heading="What commercial plumbing services do you provide in Maryland?"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Wrench, title: "Preventative Drain & Sewer Maintenance", body: "Scheduled drain cleaning and sewer maintenance programs for commercial properties — keeping your facility running without emergency interruptions." },
              { icon: ShieldCheck, title: "Backflow Preventer Installation & Certification", body: "Commercial backflow preventer installation and annual WSSC certification. We file all required documentation with WSSC on your behalf." },
              { icon: Building2, title: "Gas Line Repair & Installation", body: "Gas line repair and installation for commercial kitchens, industrial facilities, and multi-tenant buildings. Licensed Master Gasfitter on every job." },
              { icon: Clock, title: "Emergency Response for Facility Managers", body: "24/7 emergency response coordinated with property managers, building engineers, and facility staff. Live dispatcher — not an answering service." },
              { icon: FileText, title: "Water Heater Replacement", body: "Commercial water heater replacement in multi-tenant buildings, hotels, and institutional facilities. Tankless and traditional systems." },
              { icon: CheckCircle, title: "Commercial Water Line Repair", body: "Water line repair and replacement for commercial properties. We coordinate with Maryland county DPIE offices for permit compliance." },
              { icon: Building2, title: "New Commercial Build-Out Plumbing", body: "Code-compliant plumbing for new commercial build-outs. Permit coordination with Maryland county DPIE offices included." },
              { icon: Award, title: "Government Facility Plumbing", body: "MBE-certified plumbing services for Maryland state agencies, county government properties, and federally-funded projects." },
            ].map(s => (
              <div key={s.title} className="p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <s.icon size={28} style={{ color: "var(--brand-cyan)" }} className="mb-3" />
                <h3 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Section */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Service Area"
            heading="Which Maryland counties and markets do you serve commercially?"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {COUNTIES.map(c => (
              <div key={c.name} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-base mb-2" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.name}</h3>
                <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>What commercial plumbing situations require immediate response?</h2>
            <p className="text-white/80 text-lg mb-6" style={{ fontFamily: "'Barlow', sans-serif" }}>Commercial plumbing emergency in Maryland?</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 mb-8">
              {EMERGENCIES.map(e => (
                <li key={e} className="flex items-start gap-3 text-white/90" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  <CheckCircle size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  {e}
                </li>
              ))}
            </ul>
            <div className="text-center p-6 rounded-lg" style={{ background: "rgba(0,158,198,0.15)", border: "1px solid rgba(0,158,198,0.4)" }}>
              <p className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}> Call (301) 679-5849 — 24/7 live dispatcher</p>
              <p className="text-white/80 text-sm mb-4" style={{ fontFamily: "'Barlow', sans-serif" }}>We coordinate with property managers, building engineers, and facility staff.</p>
              <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Licensing"
            heading="Are you licensed for commercial plumbing throughout Maryland?"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ background: "var(--surface-1)", border: "2px solid var(--brand-navy)" }}>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>Maryland License Portfolio</h3>
              <ul className="space-y-2">
                {[
                  "MD State Master Plumber/Gasfitter #96958",
                  "WSSC License #73696",
                  "Howard County #20020096958",
                  "Anne Arundel County #A2-6139",
                  "City of Rockville #PLL-0002113",
                  "MD Home Improvement Contractor #134723",
                  "MDOT MBE Cert No. 20-134",
                  "CAGE Code 8HCF6 | NAICS 238220 | SIC 171",
                ].map(l => (
                  <li key={l} className="flex items-center gap-2 text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif" }}>
                    <ShieldCheck size={14} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic" style={{ color: "var(--ink-3)", fontFamily: "'Barlow', sans-serif" }}>
                Note: Definitive holds individual local licenses in every Maryland jurisdiction where they operate — not just the state credential. Most commercial contractors do not.
              </p>
            </div>
            <div className="space-y-6">
              {DIFFERENTIATORS.map(d => (
                <div key={d.title} className="flex gap-4">
                  <d.icon size={28} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.title}</h3>
                    <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backflow Compliance */}
      <section className="py-12" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A', fontFamily: 'var(--font-display)' }}>Commercial backflow certification and compliance in Maryland</h2>
            <p className="text-base mb-6" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              WSSC requires annual backflow preventer testing for all commercial properties in Prince George's and Montgomery County. Failure to certify by the WSSC deadline triggers violation notices and potential water service interruption. Definitive Mechanical performs annual backflow certification tests and files all required documentation with WSSC on the property owner's behalf.
            </p>
            <a href="/backflow-certification-maryland/" className="font-bold underline" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>
              → Learn about our Maryland Backflow Certification service
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="Commercial Plumbing Maryland — Frequently Asked Questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQS} variant="light" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
              { label: "Backflow Certification Maryland", href: "/backflow-certification-maryland/" },
              { label: "MBE Certified Contractor", href: "/mbe-certified-plumbing-contractor-maryland/" },
              { label: "Maryland Service Areas", href: "/service-areas/maryland/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "var(--brand-navy)", borderColor: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>Need a licensed commercial plumber in Maryland?</h2>
          <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}> Call (301) 679-5849</p>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>MD Master Plumber #96958 | WSSC #73696 | MDOT MBE Cert 20-134 | CAGE 8HCF6</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
            <BookNowButton variant="ghost" text="DOWNLOAD CAPABILITY STATEMENT" href="/capability-statement.pdf" size="lg" />
          </div>
          <p className="mt-6 text-white/50 text-xs" style={{ fontFamily: "'Barlow', sans-serif" }}>Definitive Mechanical  9701 Apollo Drive, Suite 100  Largo, MD 20774</p>
        </div>
      </section>
    </div>
  );
}
