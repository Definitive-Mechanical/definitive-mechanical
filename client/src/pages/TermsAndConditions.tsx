import { Helmet } from "react-helmet-async";
import BreadcrumbList from "@/components/ui/BreadcrumbList";

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Definitive Mechanical</title>
        <meta name="description" content="Terms and Conditions for Definitive Mechanical. Learn about the rules governing your use of our website and services." />
        <link rel="canonical" href="https://definitivemechanical.com/terms-and-conditions/" />
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "30vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]} />
          <div className="mt-8">
            <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              Legal
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }}>
              Terms and Conditions
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "8px" }}>
              Last Updated: May 27, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--brand-white)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "var(--brand-navy)", marginBottom: "32px" }}>
              Welcome to definitivemechanical.com (the "Site"), operated by Definitive Mechanical ("we," "us," or "our"). By using this Site, you agree to these Terms and Conditions. If you don't agree, please don't use the Site.
            </p>

            {[
              {
                number: "1",
                title: "Use of the Site",
                body: "You agree to use the Site only for lawful purposes. You won't attempt to access it in unauthorized ways, scrape it with bots, submit false information, or interfere with its operation.",
              },
              {
                number: "2",
                title: "Contact Form and Communications",
                body: "By submitting our contact form, you confirm the information you provide is accurate and you consent to be contacted by Definitive Mechanical by phone, text message, or email regarding your inquiry and our services. Submitting an inquiry does not create a binding agreement for work.",
              },
              {
                number: "3",
                title: "No Binding Quote",
                body: "Information on the Site is general and does not constitute a price quote, warranty, or guarantee of service. Any work we perform is governed by a separate written estimate or service agreement.",
              },
              {
                number: "4",
                title: "Tracking and Cookies",
                body: "The Site uses analytics and advertising technologies — which may include Google Analytics, Google Tag Manager, the Meta (Facebook) Pixel, and similar tools — to understand how visitors use the Site and to measure our marketing. By using the Site, you consent to this. See our Privacy Policy for details.",
              },
              {
                number: "5",
                title: "Intellectual Property",
                body: "All content on the Site — text, images, logos, and design — belongs to Definitive Mechanical or its licensors and is protected by copyright and trademark law. You may not copy, redistribute, or create derivative works from it without our written permission.",
              },
              {
                number: "6",
                title: "Disclaimer and Limitation of Liability",
                body: 'The Site is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Site. Our total liability to you for any claim related to the Site will not exceed $100.',
              },
              {
                number: "7",
                title: "Governing Law",
                body: "These Terms are governed by the laws of the State of Maryland. Any dispute will be resolved in the state or federal courts located in Prince George's County, Maryland.",
              },
              {
                number: "8",
                title: "Changes to These Terms",
                body: 'We may update these Terms at any time. The "Last Updated" date above reflects the most recent change. Your continued use of the Site means you accept the updated Terms.',
              },
            ].map((section) => (
              <div key={section.number} style={{ marginBottom: "36px" }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                  {section.number}. {section.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                  {section.body}
                </p>
              </div>
            ))}

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                9. Contact
              </h2>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                <p style={{ fontWeight: 700, color: "var(--brand-navy)", marginBottom: "4px" }}>Definitive Mechanical</p>
                <p style={{ margin: 0 }}>9701 Apollo Drive, Suite 100</p>
                <p style={{ margin: 0 }}>Largo, MD 20774</p>
                <p style={{ margin: 0 }}>
                  Phone:{" "}
                  <a href="tel:+13016795849" style={{ color: "var(--brand-blue)", textDecoration: "none" }}>
                    (301) 679-5849
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  Email:{" "}
                  <a href="mailto:info@definitivemechanical.com" style={{ color: "var(--brand-blue)", textDecoration: "none" }}>
                    info@definitivemechanical.com
                  </a>
                </p>
                <div style={{ marginTop: "12px" }}>
                  <p style={{ fontWeight: 700, color: "var(--brand-navy)", marginBottom: "4px" }}>Hours</p>
                  <p style={{ margin: 0 }}>Mon–Fri: 9am–5pm</p>
                  <p style={{ margin: 0 }}>Saturday: 9am–2pm</p>
                  <p style={{ margin: 0 }}>24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
