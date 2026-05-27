import { Helmet } from "react-helmet-async";
import BreadcrumbList from "@/components/ui/BreadcrumbList";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Definitive Mechanical</title>
        <meta name="description" content="Privacy Policy for Definitive Mechanical. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://definitivemechanical.com/privacy-policy/" />
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "30vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <div className="mt-8">
            <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              Legal
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }}>
              Privacy Policy
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
              Definitive Mechanical ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect from visitors to definitivemechanical.com (the "Site"), how we use it, and your rights.
            </p>

            {/* Section 1 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                1. Information We Collect
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                <strong>Information you provide.</strong> When you submit our contact form, we collect your name, phone number, email address, and any details you include in your message.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                <strong>Information collected automatically.</strong> When you visit the Site, we and our third-party tools may automatically collect your IP address, browser type, device information, pages viewed, referring URL, approximate location, and how you interact with the Site.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                2. How We Use Your Information
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                We use the information we collect to:
              </p>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", paddingLeft: "24px", margin: 0 }}>
                <li>Respond to your inquiry and provide the services you've requested</li>
                <li>Contact you by phone, text, or email about your inquiry and our services</li>
                <li>Operate, maintain, and improve the Site</li>
                <li>Measure the effectiveness of our advertising and marketing</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                3. Third-Party Tools and Tracking
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                We use third-party tools that may set cookies or collect data about your visit, including:
              </p>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", paddingLeft: "24px", marginBottom: "12px" }}>
                <li><strong>Google Analytics and Google Tag Manager</strong> — for site analytics and measurement</li>
                <li><strong>Meta (Facebook) Pixel</strong> — to measure and optimize our advertising on Meta platforms</li>
                <li><strong>Google Workspace (Gmail)</strong> — to receive and respond to form submissions and email</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                These providers may use the information they collect according to their own privacy policies. You can opt out of Google Analytics at{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-blue)" }}>
                  tools.google.com/dlpage/gaoptout
                </a>{" "}
                and adjust Meta ad preferences in your Facebook or Instagram account settings.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                4. How We Share Your Information
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                We do not sell your personal information. We may share it with:
              </p>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", paddingLeft: "24px", margin: 0 }}>
                <li><strong>Service providers</strong> who help us operate the Site, send communications, or run our business (e.g., hosting, email, CRM, advertising platforms)</li>
                <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
                <li><strong>A successor entity</strong> if our business is sold or merged</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                5. Cookies
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                The Site uses cookies and similar technologies for analytics, advertising, and basic functionality. You can control cookies through your browser settings, but disabling them may affect how the Site works for you.
              </p>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                6. Your Rights
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                Depending on where you live, you may have the right to:
              </p>
              <ul style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", paddingLeft: "24px", marginBottom: "12px" }}>
                <li>Access the personal information we hold about you</li>
                <li>Request that we correct or delete it</li>
                <li>Opt out of targeted advertising or the sale/sharing of your information</li>
                <li>Withdraw consent to be contacted at any time (reply STOP to texts, or unsubscribe from emails)</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444", marginBottom: "12px" }}>
                To exercise any of these rights, contact us using the information in Section 10. We will respond within the time required by applicable law.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                <strong>California, Maryland, Virginia, Colorado, Connecticut, and other state residents:</strong> You have additional rights under your state's privacy laws, including the right to know what personal information we collect and to request its deletion. We do not sell personal information as defined under these laws.
              </p>
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                7. Data Retention and Security
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                We keep your information only as long as needed to respond to your inquiry, provide services, and meet our legal obligations. We use reasonable security measures to protect your information, but no system is 100% secure.
              </p>
            </div>

            {/* Section 8 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                8. Children's Privacy
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                The Site is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us with personal information, please contact us and we will delete it.
              </p>
            </div>

            {/* Section 9 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                9. Changes to This Policy
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
                We may update this Privacy Policy from time to time. The "Last Updated" date above reflects the most recent change. Your continued use of the Site means you accept the updated policy.
              </p>
            </div>

            {/* Section 10 */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: "18px", fontWeight: 700, color: "var(--brand-navy)", marginBottom: "10px" }}>
                10. Contact Us
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
