/**
 * Blog Post 3: How to Choose a Licensed Plumber in MD, DC, or VA
 * URL: /blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/
 * Schema: BlogPosting + FAQPage + BreadcrumbList
 * Emergency Bar: NO (buyer guide post)
 */

import { Helmet } from "react-helmet-async";
import {
  BlogLayout,
  FeaturedSnippet,
  CalloutBox,
  InlineCTA,
  RelatedServicesBlock,
  AuthorBlock,
  BlogH1,
  BlogH2,
  BlogEyebrow,
  BlogBreadcrumb,
  BlogP,
  BlogUL,
} from "@/components/layout/BlogLayout";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does it matter if my plumber is licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plumbing licensing protects public health. Licensed Master Plumbers have demonstrated competency through state testing, knowledge of plumbing codes, and proper installation requirements. Unlicensed work can void insurance coverage, create permit problems, and result in code violations that fall on the homeowner.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a Master Plumber and a regular plumber in Maryland, DC, and Virginia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The hierarchy is Apprentice → Journeyman → Master Plumber. A Master Plumber has passed the master exam, typically has 4–8 years of experience, and is qualified to supervise all plumbing work, pull permits, and take full responsibility for code compliance. Commercial and most permitted residential work legally requires a Master Plumber.",
      },
    },
    {
      "@type": "Question",
      name: "How do I verify a plumber's license in Maryland, DC, and Virginia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maryland: WSSC licensed contractor search at wsscwater.com and Maryland DPHLM license lookup. DC: DCRA license verification at dcra.dc.gov. Virginia: Virginia DPOR license lookup at dpor.virginia.gov. Definitive Mechanical: MD #96958, DC #PGM1002236, VA #2710064209.",
      },
    },
    {
      "@type": "Question",
      name: "What questions should I ask before hiring a plumber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for their Master Plumber license number, whether they'll pull a permit, if their technicians are employees or subcontractors, what the estimate includes and what could change the price, and for a certificate of insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the red flags to avoid when choosing a plumber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Red flags include: no license number provided, cash-only payment demand, no written estimate, pressure to start work immediately without explanation, unusually low quotes, and recommendations for major work without camera or diagnostic evidence.",
      },
    },
    {
      "@type": "Question",
      name: "Does it matter if my plumber is licensed in my specific jurisdiction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — significantly. Maryland, DC, and Virginia each require their own licenses. A plumber licensed only in Maryland cannot legally pull a permit or perform plumbing work in DC. Definitive Mechanical holds active licenses in Maryland, DC, Virginia, and Delaware.",
      },
    },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Licensed Plumber in MD, DC, or VA",
  description:
    "A practical guide to choosing a licensed plumber in Maryland, DC, or Virginia — how to verify credentials, what to ask, and the red flags to avoid. From Definitive Mechanical.",
  url: "https://definitivemechanical.com/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/",
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
  author: { "@type": "Organization", name: "Definitive Mechanical", url: "https://definitivemechanical.com" },
  publisher: {
    "@type": "Organization",
    name: "Definitive Mechanical",
    logo: { "@type": "ImageObject", url: "https://definitivemechanical.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://definitivemechanical.com/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://definitivemechanical.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://definitivemechanical.com/blog/" },
    { "@type": "ListItem", position: 3, name: "How to Choose a Licensed Plumber in MD, DC, or VA", item: "https://definitivemechanical.com/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/" },
  ],
};

export default function BlogPost3LicensedPlumber() {
  return (
    <>
      <Helmet>
        <title>How to Choose a Licensed Plumber in MD, DC, or VA (2026 Guide)</title>
        <meta name="description" content="A practical guide to choosing a licensed plumber in Maryland, DC, or Virginia — how to verify credentials, what to ask, and the red flags to avoid. From Definitive Mechanical." />
        <link rel="canonical" href="https://definitivemechanical.com/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/" />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <BlogLayout
        showEmergencyBar={false}
        relatedServices={[
          { title: "Licenses & Certifications", description: "View all active licenses across MD, DC, VA, and DE.", href: "/licenses-certifications", icon: "shield" },
          { title: "About Definitive Mechanical", description: "11 years serving the DC metro area — our story and credentials.", href: "/about", icon: "wrench" },
          { title: "Government & Municipal Plumbing", description: "MDOT MBE and SWaM certified for government contracts.", href: "/government-municipal-plumbing", icon: "shield" },
        ]}
      >
        <BlogBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "How to Choose a Licensed Plumber in MD, DC, or VA" },
          ]}
        />

        <BlogEyebrow>Buyer's Guide · 7 min read</BlogEyebrow>
        <BlogH1>How to Choose a Licensed Plumber in MD, DC, or VA</BlogH1>
        <AuthorBlock date="January 15, 2026" />

        <FeaturedSnippet>
          Choosing a licensed plumber in the DC metro area means verifying credentials in up to three separate jurisdictions — Maryland, DC, and Virginia each issue their own licenses. The fastest check: ask for the contractor's Master Plumber license number and verify it in the state's online database before they start work. Price alone is a poor guide — unlicensed plumbing work creates insurance gaps, permit problems, and code violations that fall on the homeowner.
        </FeaturedSnippet>

        <BlogH2>Why does it matter if my plumber is licensed?</BlogH2>
        <BlogP>
          Plumbing licensing exists to protect public health. Water supply and waste systems directly affect drinking water safety, indoor air quality (through sewer gas), and structural integrity. A licensed Master Plumber has demonstrated:
        </BlogP>
        <BlogUL>
          <li>Competency through state-administered testing</li>
          <li>Understanding of the relevant plumbing code (International Plumbing Code with state amendments)</li>
          <li>Knowledge of proper installation, repair, and safety requirements</li>
        </BlogUL>
        <BlogP>Practical reasons licensing matters to you:</BlogP>
        <BlogUL>
          <li><strong>Insurance coverage:</strong> Most homeowner's and commercial property insurance policies exclude damage caused by unlicensed contractors. If an unlicensed plumber makes an error that causes water damage, you may be responsible for the full repair cost.</li>
          <li><strong>Permit compliance:</strong> Many plumbing repairs and installations legally require a permit. Only licensed contractors can pull permits. Unpermitted work can block your home sale, void your warranty, and require expensive removal and correction.</li>
          <li><strong>Code compliance:</strong> Licensed plumbers know the local code amendments that apply in your jurisdiction — and violations discovered during a home inspection or sale can be costly to remediate.</li>
        </BlogUL>

        <BlogH2>What is the difference between a Master Plumber and a regular plumber in Maryland, DC, and Virginia?</BlogH2>
        <BlogP>The DC metro area license hierarchy works like this:</BlogP>
        <BlogUL>
          <li><strong>Apprentice Plumber:</strong> In training under a licensed journeyman or master plumber. Cannot perform work independently.</li>
          <li><strong>Journeyman Plumber:</strong> Licensed to perform plumbing work under the supervision of a Master Plumber. May work independently on smaller scopes in some jurisdictions.</li>
          <li><strong>Master Plumber:</strong> The highest license classification. Has passed the master plumber exam, typically has 4–8 years of experience (including apprenticeship), and is qualified to supervise all plumbing work, pull permits, and take full responsibility for the quality and code compliance of a job.</li>
        </BlogUL>
        <BlogP>
          Why it matters: In Maryland, DC, and Virginia, commercial plumbing work and most permitted residential work legally requires a Master Plumber to be the responsible party. Ask specifically whether the company dispatching to you has a Master Plumber on-staff who will be accountable for the work — not just a journeyman or apprentice working alone.
        </BlogP>

        <BlogH2>How do I verify a plumber's license in Maryland, DC, and Virginia?</BlogH2>
        <BlogP>Each jurisdiction has a separate online database for license verification:</BlogP>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Maryland:</p>
        <BlogUL>
          <li>WSSC licensed contractor search: wsscwater.com (for Prince George's and Montgomery County work)</li>
          <li>Maryland DPHLM license lookup (for state master plumber license)</li>
          <li>Definitive Mechanical: MD State Master Plumber #96958 | WSSC #73696</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Washington, DC:</p>
        <BlogUL>
          <li>DCRA license verification: dcra.dc.gov (search contractor license database)</li>
          <li>Definitive Mechanical: DC Master Plumber/Gasfitter #PGM1002236</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Virginia:</p>
        <BlogUL>
          <li>Virginia DPOR license lookup: dpor.virginia.gov</li>
          <li>Definitive Mechanical: VA Master Plumber/Gasfitter #2710064209 | Class A Contractor #2705181061</li>
        </BlogUL>

        <CalloutBox variant="info">
          A reputable plumbing contractor will have their license numbers on their website, on their estimate forms, and on their invoices. If a contractor can't give you a license number on request — that's a red flag.
        </CalloutBox>

        <InlineCTA />

        <BlogH2>What questions should I ask before hiring a plumber?</BlogH2>
        <BlogP>Before hiring any plumber for residential or commercial work in MD, DC, or VA:</BlogP>
        <BlogUL>
          <li><strong>1. "What is your Master Plumber license number for this jurisdiction?"</strong> This is the most important question. A licensed company should answer immediately and without hesitation. Verify in the state database.</li>
          <li><strong>2. "Will you pull a permit for this work?"</strong> Not all repairs require a permit, but significant work — water line replacement, sewer line repair, gas line work, water heater replacement — usually does. If a contractor says "we don't need a permit" for a major repair, ask them to explain why in writing.</li>
          <li><strong>3. "Are your technicians employees or subcontractors?"</strong> Some plumbing companies dispatch subcontractors who may not be covered by the company's insurance or who may not be licensed in the same jurisdiction. Ask directly.</li>
          <li><strong>4. "What does your estimate include and what could change the final price?"</strong> Get a written estimate — not a verbal range.</li>
          <li><strong>5. "Are you insured? Can I see a certificate of insurance?"</strong> A legitimate contractor carries general liability insurance and workers' compensation. Ask for a current COI before work begins.</li>
        </BlogUL>

        <BlogH2>What are the red flags to avoid when choosing a plumber?</BlogH2>
        <BlogUL>
          <li><strong>No license number provided:</strong> Any licensed plumber can give you their license number on request. If they can't, they're not licensed.</li>
          <li><strong>Cash-only payment demand:</strong> Legitimate contractors accept checks and credit cards. Cash-only demands are often associated with unlicensed operators who want no paper trail.</li>
          <li><strong>No written estimate:</strong> "I'll know the price once I get in there" is not acceptable for most repairs. A licensed professional can assess the scope and provide a written estimate before work begins in almost all cases.</li>
          <li><strong>Pressure to start work immediately without explanation:</strong> Emergency situations are different — but even in emergencies, a reputable plumber explains what they found and what they're going to do before they start.</li>
          <li><strong>Unusually low quote:</strong> A significantly below-market quote almost always means unlicensed work, cut-rate materials, skipped permits, or surprise charges added after the work is complete.</li>
          <li><strong>"I'll just need to replace the whole system" without camera or diagnostic evidence:</strong> For sewer line issues especially, reputable plumbers use video camera inspection before recommending excavation or full replacement. A recommendation for major work without evidence should prompt a second opinion.</li>
        </BlogUL>

        <BlogH2>Does it matter if my plumber is licensed in my specific jurisdiction?</BlogH2>
        <BlogP>
          Yes — significantly. Maryland, DC, and Virginia each require their own licenses, and individual Maryland counties (Howard County, Anne Arundel County, City of Rockville) require additional local licenses beyond the state credential.
        </BlogP>
        <BlogP>
          A plumber licensed only in Maryland cannot legally pull a permit or perform plumbing work in DC. A plumber licensed only in Virginia cannot legally work in DC or Maryland. This matters for emergency calls near state lines, for properties that straddle jurisdictions, and for any gas work — which requires a Master Gasfitter license that is also jurisdiction-specific.
        </BlogP>
        <BlogP>
          Definitive Mechanical holds active licenses in Maryland, DC, Virginia, and Delaware — independently in each jurisdiction, not on reciprocal arrangements.
        </BlogP>

        <BlogH2>How do I evaluate reviews and reputation for a plumber?</BlogH2>
        <BlogP>Review volume and rating are imperfect proxies for quality, but they're useful data points:</BlogP>
        <BlogUL>
          <li>Look for patterns in reviews — specific mentions of license, permit compliance, and honest pricing are more meaningful than generic "great service" comments</li>
          <li>A 4.8-star rating with 40 reviews from real customers in the target area is more meaningful than a 4.2-star rating with 800 reviews from an aggregator</li>
          <li>Check Google Business Profile reviews specifically — they're the hardest to game</li>
          <li>Check whether the plumber responds to reviews (positive and negative) — responsiveness indicates a real operation</li>
        </BlogUL>

        <CalloutBox variant="info">
          <strong>Choose a licensed Master Plumber in MD, DC &amp; VA</strong>
          <br />
          Definitive Mechanical holds Master Plumber and Master Gasfitter licenses in Maryland, Washington DC, Virginia, and Delaware. We provide written estimates before work begins, pull all required permits, and dispatch licensed technicians — not subcontractors — on every job.
          <br /><br />
          📞 Call (301) 679-5849 | Request Service →
          <br />
          MD Master Plumber #96958 | DC Master Plumber #PGM1002236 | VA Master Plumber #2710064209
        </CalloutBox>

        <RelatedServicesBlock
          services={[
            { title: "Licenses & Certifications", description: "View all active licenses across MD, DC, VA, and DE.", href: "/licenses-certifications", icon: "shield" },
            { title: "About Definitive Mechanical", description: "11 years serving the DC metro area — our story and credentials.", href: "/about", icon: "wrench" },
            { title: "Government & Municipal Plumbing", description: "MDOT MBE and SWaM certified for government contracts.", href: "/government-municipal-plumbing", icon: "shield" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
