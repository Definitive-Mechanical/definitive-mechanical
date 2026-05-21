import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Definitive Mechanical",
  "url": "https://definitivemechanical.com/contact/",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Definitive Mechanical",
    "telephone": "+13016795849",
    "email": "info@definitivemechanical.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9701 Apollo Drive, Suite 100",
      "addressLocality": "Largo",
      "addressRegion": "MD",
      "postalCode": "20774",
      "addressCountry": "US"
    }
  }
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission — in production, connect to a form backend
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Contact Definitive Mechanical | Request Plumbing Service — MD, DC & VA</title>
        <meta name="description" content="Contact Definitive Mechanical for plumbing service in MD, DC & Northern VA. Call (301) 679-5849 for 24/7 emergency service or submit a service request online." />
        <link rel="canonical" href="https://definitivemechanical.com/contact/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Emergency Top Bar */}
      <a href="tel:+13016795849" className="block w-full py-3 text-center" style={{ background: "var(--brand-cyan)", fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-navy)", textDecoration: "none" }}>
         Plumbing Emergency? Call (301) 679-5849 — Live Dispatcher Answering 24/7, 365 Days
      </a>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              CONTACT US  LARGO, MD  SERVING MD, DC & NORTHERN VIRGINIA
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              Contact Definitive Mechanical
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              For 24/7 emergency plumbing, call (301) 679-5849 — a live dispatcher answers every call. For non-emergency service requests, use the form below and we will respond within one business day.
            </p>
            <TrustBadges variant="dark" badges={["24/7 Emergency Line", "Licensed Master Plumber", "MD  DC  VA  DE", "MDOT MBE Certified"]} />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT — Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="GET IN TOUCH" heading="How to reach us" />

              {/* Emergency CTA */}
              <div className="rounded-md p-6 mb-8" style={{ background: "var(--brand-navy)" }}>
                <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-2">
                  24/7 EMERGENCY SERVICE
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.6 }} className="mb-4">
                  For burst pipes, sewer backups, gas leaks, or any plumbing emergency — call now. A live dispatcher answers every call.
                </p>
                <a href="tel:+13016795849" className="flex items-center justify-center gap-2 w-full py-4 rounded" style={{ background: "var(--brand-cyan)", color: "var(--brand-navy)", fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                  <Phone size={18} />
                  CALL (301) 679-5849
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={20} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }}>Phone</p>
                    <a href="tel:+13016795849" style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "16px", textDecoration: "none" }}>(301) 679-5849</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }}>Email</p>
                    <a href="mailto:info@definitivemechanical.com" style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "16px", textDecoration: "none" }}>info@definitivemechanical.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }}>Address</p>
                    <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.5 }}>9701 Apollo Drive, Suite 100<br />Largo, MD 20774</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }}>Hours</p>
                    <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.6 }}>
                      Mon-Fri: 9am-5pm<br />
                      Saturday: 9am-2pm<br />
                      <span style={{ color: "var(--brand-cyan)", fontWeight: 600 }}>24/7 Emergency Service</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Note */}
              <div className="mt-8 p-4 rounded" style={{ background: "var(--surface-1)" }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em" }} className="mb-1">SERVICE AREA</p>
                <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.6 }}>
                  Maryland (Prince George's, Montgomery, Howard, Anne Arundel, Charles Counties)  Washington DC  Northern Virginia (Fairfax, Arlington, Loudoun, Prince William Counties)
                </p>
              </div>
            </div>

            {/* RIGHT — dark navy lead form card */}
            <div className="lg:col-span-3">
              <div style={{ background: '#063B63', borderRadius: '12px', padding: '28px', boxShadow: '0 12px 28px rgba(6,59,99,0.18)' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <CheckCircle2 size={52} style={{ color: '#4FB3E8', margin: '0 auto 16px' }} />
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', textTransform: 'uppercase', color: 'white', marginBottom: '10px' }}>
                      Request Received!
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '20px' }}>
                      We typically respond within one business day. For urgent service, call us now.
                    </p>
                    <a href="tel:+13016795849" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E40613', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '13px 24px', borderRadius: '6px', textDecoration: 'none' }}>
                      <Phone size={16} /> CALL (301) 679-5849
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4FB3E8', margin: 0 }}>Free Estimate  No Obligation</p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', textTransform: 'uppercase', color: 'white', lineHeight: 1.1, margin: 0 }}>Request Service</h2>

                    {/* Name + Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>Full Name <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <input type="text" name="name" required placeholder="Your full name" value={form.name} onChange={handleChange}
                          style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>Phone Number <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <input type="tel" name="phone" required placeholder="(xxx) xxx-xxxx" value={form.phone} onChange={handleChange}
                          style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>Email Address</label>
                      <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange}
                        style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>

                    {/* Service + City */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>Service Needed <span style={{ color: '#ff6b6b' }}>*</span></label>
                        <select name="service" required value={form.service} onChange={handleChange}
                          style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(30,60,100,0.95)', color: form.service ? 'white' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}>
                          <option value="" disabled style={{ color: '#000' }}>Select a service...</option>
                          <option value="emergency" style={{ color: '#000' }}>24/7 Emergency Plumbing</option>
                          <option value="drain-cleaning" style={{ color: '#000' }}>Drain Cleaning</option>
                          <option value="water-heater-repair" style={{ color: '#000' }}>Water Heater Repair</option>
                          <option value="water-heater-installation" style={{ color: '#000' }}>Water Heater Installation</option>
                          <option value="tankless" style={{ color: '#000' }}>Tankless Water Heater</option>
                          <option value="sewer-line" style={{ color: '#000' }}>Sewer Line Repair/Installation</option>
                          <option value="hydro-jetting" style={{ color: '#000' }}>Hydro-Jetting</option>
                          <option value="video-camera" style={{ color: '#000' }}>Video Camera Inspection</option>
                          <option value="gas-line" style={{ color: '#000' }}>Gas Line Repair/Installation</option>
                          <option value="gas-leak" style={{ color: '#000' }}>Gas Leak Repair</option>
                          <option value="backflow" style={{ color: '#000' }}>Backflow Prevention/Certification</option>
                          <option value="water-line" style={{ color: '#000' }}>Water Line Repair/Installation</option>
                          <option value="boiler" style={{ color: '#000' }}>Boiler &amp; Furnace Repair</option>
                          <option value="faucet-toilet" style={{ color: '#000' }}>Faucet &amp; Toilet Repair</option>
                          <option value="commercial" style={{ color: '#000' }}>Commercial Plumbing</option>
                          <option value="government" style={{ color: '#000' }}>Government/Municipal Plumbing</option>
                          <option value="other" style={{ color: '#000' }}>Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>City / Location</label>
                        <input type="text" name="city" placeholder="City, State" value={form.city} onChange={handleChange}
                          style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '5px' }}>Describe the Problem <span style={{ color: '#ff6b6b' }}>*</span></label>
                      <textarea name="message" required rows={5} placeholder="Please describe the issue, when it started, and any relevant details..." value={form.message} onChange={handleChange}
                        style={{ width: '100%', padding: '11px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                    </div>

                    {/* Emergency warning */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(228,6,19,0.12)', border: '1px solid rgba(228,6,19,0.3)', borderRadius: '6px', padding: '10px 12px' }}>
                      <AlertTriangle size={15} style={{ color: '#ff6b6b', flexShrink: 0, marginTop: 1 }} />
                      <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>
                        <strong style={{ color: 'white' }}>For plumbing emergencies</strong> (burst pipes, gas leaks, sewer backups) — don't use this form. <a href="tel:+13016795849" style={{ color: '#4FB3E8', fontWeight: 700 }}>Call (301) 679-5849</a> for immediate 24/7 response.
                      </p>
                    </div>

                    <button type="submit" disabled={submitting}
                      style={{ width: '100%', background: submitting ? '#a00' : '#E40613', color: 'white', border: 'none', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                      {submitting ? 'Submitting...' : 'SUBMIT SERVICE REQUEST'}
                    </button>

                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', textAlign: 'center', margin: 0 }}>
                      We respond to non-emergency requests within one business day. For faster service, call (301) 679-5849.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="WHY CHOOSE US" heading="What to expect when you contact Definitive Mechanical" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: Phone, title: "Live Dispatcher 24/7", body: "A real person answers every call — day, night, weekends, and holidays. No voicemail, no call center." },
              { icon: CheckCircle2, title: "Written Pricing First", body: "We diagnose the problem and provide written pricing before any work begins. You approve it. We do the work." },
              { icon: MapPin, title: "Licensed in 4 States", body: "Master Plumber and Master Gasfitter licensed in Maryland, DC, Virginia, and Delaware." },
              { icon: Clock, title: "Same Rate Any Time", body: "All services have a trip fee. All services have a trip fee." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6 text-center" style={{ boxShadow: "0 2px 12px rgba(6,59,99,0.08)" }}>
                <item.icon size={32} style={{ color: "var(--brand-cyan)", margin: "0 auto 12px" }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: "var(--brand-navy)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-2">{item.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a plumber now? Don't wait."
        subtext="Licensed plumbing professionals dispatched — work performed under Master Plumber license. Upfront pricing before we start. Trip fee applies to all services."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "VIEW ALL SERVICES", href: "/plumbing" }}
        variant="gradient"
      />
    </>
  );
}
