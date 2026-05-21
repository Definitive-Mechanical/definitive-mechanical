import { Helmet } from "react-helmet-async";
import { DollarSign, CheckCircle2, Clock, ShieldCheck, CreditCard, Phone } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  { question: "What financing is available for plumbing repairs and installations?", answer: "Definitive Mechanical offers financing through Synchrony Financial. Qualified applicants can finance plumbing repairs, water heater installations, sewer line work, and other services. Apply online at the link above or call (301) 679-5849 to discuss financing options before your service appointment." },
  { question: "What types of plumbing work can I finance?", answer: "Most plumbing services are eligible for financing, including water heater repair and installation, tankless water heater conversions, sewer line repair and replacement, gas line work, drain cleaning, backflow prevention, and commercial plumbing projects. Call (301) 679-5849 to confirm eligibility for your specific project." },
  { question: "How do I apply for plumbing financing?", answer: "Apply online through Synchrony at https://www.mysynchrony.com/mmc/S6240351600. You can also call (301) 679-5849 and our team can walk you through the process before your service appointment." },
  { question: "Does financing affect my service appointment?", answer: "No. You can schedule your service appointment and apply for financing simultaneously. We can discuss financing options when we provide your written estimate before work begins." },
  { question: "Do you offer same-day financing approval?", answer: "Synchrony financing decisions are typically made quickly. Call (301) 679-5849 to discuss your project and financing options — we can help coordinate the application with your service appointment." },
];

export default function Financing() {
  return (
    <>
      <Helmet>
        <title>Plumbing Financing in MD, DC & VA | Synchrony | Definitive Mechanical</title>
        <meta name="description" content="Finance your plumbing repair or installation with Definitive Mechanical. Synchrony financing available for water heaters, sewer lines, gas lines & more. MD, DC & VA. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/financing/" />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: "45vh", position: "relative", overflow: "hidden", background: "#111" }} className="py-16">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Financing" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                PLUMBING FINANCING  MD, DC & NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
                Plumbing Financing Available
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.7 }} className="mb-6">
                Definitive Mechanical offers financing through Synchrony Financial for qualified customers. Don't let cost delay a necessary repair — financing options are available for water heater replacements, sewer line work, gas line installations, and more across Maryland, Washington DC, and Northern Virginia.
              </p>
              <TrustBadges variant="dark" badges={["Synchrony Financing", "Quick Application", "Licensed Master Plumber", "MD  DC  VA  DE"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://www.mysynchrony.com/mmc/S6240351600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-4 px-8 rounded transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--brand-blue)", color: "white", fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}
                >
                  <CreditCard size={18} />
                  APPLY FOR FINANCING
                </a>
                <a
                  href="tel:+13016795849"
                  className="inline-flex items-center gap-2 py-4 px-8 rounded border-2 transition-all hover:-translate-y-0.5"
                  style={{ background: "transparent", color: "white", borderColor: "white", fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}
                >
                  <Phone size={18} />
                  CALL (301) 679-5849
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="rounded-lg p-10 text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <CreditCard size={64} style={{ color: "var(--brand-cyan)", margin: "0 auto 16px" }} />
                <p style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "24px", fontWeight: 700 }}>Synchrony</p>
                <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "4px" }}>Financing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="HOW IT WORKS" heading="How does plumbing financing work with Definitive Mechanical?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { step: "01", icon: CreditCard, title: "Apply Online", body: "Apply through Synchrony's secure online portal at mysynchrony.com. The application takes a few minutes and decisions are typically fast." },
              { step: "02", icon: Phone, title: "Schedule Service", body: "Call (301) 679-5849 to schedule your service appointment. Let us know you've applied for financing and we'll coordinate accordingly." },
              { step: "03", icon: CheckCircle2, title: "Approve & Proceed", body: "We provide written pricing before any work begins. Once you approve the estimate, we complete the work and you pay through your Synchrony account." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-md" style={{ background: "var(--surface-1)" }}>
                <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "36px", fontWeight: 700, lineHeight: 1 }} className="mb-4">{item.step}</p>
                <item.icon size={32} style={{ color: "var(--brand-blue)", margin: "0 auto 12px" }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-blue)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-3">{item.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can Be Financed */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <SectionHeading eyebrow="ELIGIBLE SERVICES" heading="What plumbing services can be financed?" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              "Water Heater Repair & Replacement",
              "Tankless Water Heater Installation",
              "Sewer Line Repair & Replacement",
              "Gas Line Installation & Repair",
              "Drain Cleaning & Hydro-Jetting",
              "Backflow Prevention & Certification",
              "Water Line Repair & Installation",
              "Boiler & Furnace Repair",
              "Commercial Plumbing Projects",
              "Video Camera Inspection",
              "Emergency Plumbing Repairs",
              "Faucet & Fixture Replacement",
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.9)", fontSize: "14px" }}>{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.mysynchrony.com/mmc/S6240351600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-10 rounded transition-all hover:-translate-y-0.5"
              style={{ background: "#fff", color: "#fff", fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}
            >
              <CreditCard size={20} />
              APPLY FOR FINANCING NOW
            </a>
          </div>
        </div>
      </section>

      {/* Why Finance */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="WHY FINANCE" heading="Why finance a plumbing repair or installation?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, title: "Manage large unexpected costs", body: "A sewer line replacement, water heater installation, or gas line repair can run $1,500-$8,000+. Financing spreads that cost over time without delaying a necessary repair." },
              { icon: Clock, title: "Don't delay a critical repair", body: "Delaying a plumbing repair often increases the damage and the final cost. Financing allows you to address the problem immediately without waiting to save up." },
              { icon: ShieldCheck, title: "Protect your home's value", body: "Deferred plumbing maintenance — especially sewer lines, water heaters, and water lines — can affect your home's value and insurability. Financing keeps your home protected." },
              { icon: CheckCircle2, title: "Transparent pricing, no surprises", body: "Definitive Mechanical provides written pricing before any work begins. You know the full cost before you approve the work — financing or not." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-md" style={{ background: "var(--surface-1)" }}>
                <item.icon size={28} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-blue)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-2">{item.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.6 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing financing FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to get started? Apply for financing or call us today."
        subtext="Synchrony financing available for qualified customers. Written pricing before any work begins. Licensed Master Plumber on every job."
        primaryBtn={{ text: "APPLY FOR FINANCING", href: "https://www.mysynchrony.com/mmc/S6240351600" }}
        secondaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        variant="gradient"
      />
    </>
  );
}
