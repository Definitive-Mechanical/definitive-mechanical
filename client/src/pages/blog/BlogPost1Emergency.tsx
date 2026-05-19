/**
 * Blog Post 1: What Qualifies as a Plumbing Emergency?
 * URL: /blog/what-qualifies-as-a-plumbing-emergency/
 * Schema: BlogPosting + FAQPage + BreadcrumbList
 * Emergency Bar: YES
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
      name: "What is a plumbing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A plumbing emergency is a situation that requires immediate professional response because delay will cause significant property damage, a health hazard, or loss of an essential service. The defining characteristics are speed of damage and severity of consequence — not just inconvenience.",
      },
    },
    {
      "@type": "Question",
      name: "Is a burst pipe a plumbing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always. A burst pipe at full line pressure can release 200–400 gallons of water per hour. Shut off the main water valve immediately and call your plumber's emergency line.",
      },
    },
    {
      "@type": "Question",
      name: "Is a sewer backup a plumbing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A sewer backup is a health emergency as well as a plumbing emergency. Stop all water use immediately, do not attempt cleanup without PPE, and call a licensed plumber's emergency line.",
      },
    },
    {
      "@type": "Question",
      name: "Is a gas leak a plumbing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and it's a safety emergency before it's a plumbing emergency. Leave the building immediately, call 911 from outside, then call your gas utility's emergency line.",
      },
    },
    {
      "@type": "Question",
      name: "What plumbing problems are NOT emergencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slow drains, dripping faucets, running toilets, low water pressure, lukewarm water, and minor under-sink leaks you can control by closing a valve are not emergencies and can wait for a scheduled appointment.",
      },
    },
    {
      "@type": "Question",
      name: "When should I call a plumber's emergency line vs. regular line?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call the emergency line for active flooding, burst pipes, sewer backup reaching fixtures, gas smell, water heater tank rupture, or complete loss of water. Call the regular line for dripping faucets, slow drains, running toilets, and minor leaks you can control.",
      },
    },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Qualifies as a Plumbing Emergency?",
  description:
    "Not sure if your plumbing problem is an emergency? Learn which situations require an immediate call — and which ones can wait until morning. From Definitive Mechanical.",
  url: "https://definitivemechanical.com/blog/what-qualifies-as-a-plumbing-emergency/",
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
  author: {
    "@type": "Organization",
    name: "Definitive Mechanical",
    url: "https://definitivemechanical.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Definitive Mechanical",
    logo: {
      "@type": "ImageObject",
      url: "https://definitivemechanical.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://definitivemechanical.com/blog/what-qualifies-as-a-plumbing-emergency/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://definitivemechanical.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://definitivemechanical.com/blog/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Qualifies as a Plumbing Emergency?",
      item: "https://definitivemechanical.com/blog/what-qualifies-as-a-plumbing-emergency/",
    },
  ],
};

export default function BlogPost1Emergency() {
  return (
    <>
      <Helmet>
        <title>What Qualifies as a Plumbing Emergency? (2026 Guide)</title>
        <meta
          name="description"
          content="Not sure if your plumbing problem is an emergency? Learn which situations require an immediate call — and which ones can wait until morning. From Definitive Mechanical."
        />
        <link rel="canonical" href="https://definitivemechanical.com/blog/what-qualifies-as-a-plumbing-emergency/" />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <BlogLayout
        showEmergencyBar={true}
        relatedServices={[
          { title: "24/7 Emergency Plumbing", description: "Licensed Master Plumber response 24 hours a day, 7 days a week.", href: "/emergency-plumbing", icon: "zap" },
          { title: "Emergency Plumber Largo MD", description: "Fast emergency response in Largo and Prince George's County.", href: "/emergency-plumber-largo-md", icon: "phone" },
          { title: "Water Heater Repair", description: "Same-day water heater repair and emergency replacement.", href: "/water-heater-repair", icon: "wrench" },
        ]}
      >
        <BlogBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "What Qualifies as a Plumbing Emergency?" },
          ]}
        />

        <BlogEyebrow>Emergency Plumbing Guide · 6 min read</BlogEyebrow>
        <BlogH1>What Qualifies as a Plumbing Emergency?</BlogH1>
        <AuthorBlock date="January 15, 2026" />

        <FeaturedSnippet>
          Not every plumbing problem is an emergency — but some situations can't wait. A plumbing emergency is any active event causing water damage, posing a health hazard, or cutting off water service to your home. Burst pipes, sewer backups, gas leaks, and flooding always qualify. Slow drains and dripping faucets generally do not.
        </FeaturedSnippet>

        <BlogH2>What is a plumbing emergency?</BlogH2>
        <BlogP>
          A plumbing emergency is a situation that requires immediate professional response because delay will cause significant property damage, a health hazard, or loss of an essential service. The defining characteristics are speed of damage and severity of consequence — not just inconvenience.
        </BlogP>
        <BlogP>The most common genuine plumbing emergencies are:</BlogP>
        <BlogUL>
          <li>Burst pipes with active water flow</li>
          <li>Sewer backups that have reached fixtures</li>
          <li>Gas leaks or suspected gas leaks</li>
          <li>Flooding from a failed water heater, appliance, or supply line</li>
          <li>Complete loss of water to the property</li>
          <li>Overflowing toilet that cannot be stopped</li>
        </BlogUL>

        <BlogH2>Is a burst pipe a plumbing emergency?</BlogH2>
        <BlogP>
          Yes — always. A burst pipe at full line pressure can release 200–400 gallons of water per hour. At that rate, a 30-minute delay before shutting off the water can mean thousands of dollars in structural and contents damage. If you have a burst pipe:
        </BlogP>
        <BlogUL>
          <li>Find your main water shutoff valve and turn it off immediately (clockwise to close).</li>
          <li>Call your plumber's emergency line.</li>
          <li>Document the damage with photos before any cleanup — your insurance company will need this.</li>
        </BlogUL>
        <BlogP>
          A licensed plumber can typically complete a pipe repair in 1–3 hours once on-site. The damage from waiting is almost always more expensive than the repair itself.
        </BlogP>

        <BlogH2>Is a sewer backup a plumbing emergency?</BlogH2>
        <BlogP>
          Yes. A sewer backup is a health emergency as well as a plumbing emergency. Sewage contains bacteria including E. coli, Salmonella, and Hepatitis A — pathogens that make your home uninhabitable until professionally remediated. When sewage backs up into floor drains, toilets, or tubs, every minute of additional water use makes the contamination worse.
        </BlogP>
        <BlogP>If you have a sewer backup:</BlogP>
        <BlogUL>
          <li>Stop all water use immediately. Do not flush, run faucets, or use any drains.</li>
          <li>Do not attempt to clean up sewage without personal protective equipment.</li>
          <li>Call a licensed plumber's emergency line immediately.</li>
        </BlogUL>

        <BlogH2>Is a gas leak a plumbing emergency?</BlogH2>
        <CalloutBox variant="warning">
          Yes — and it's a safety emergency before it's a plumbing emergency. If you smell gas (a rotten egg or sulfur odor), you should:
          <ul className="mt-2 space-y-1 pl-4 list-disc not-italic">
            <li>Leave the building immediately. Do not use any electrical switches, appliances, or your cell phone inside.</li>
            <li>Call 911 from outside the building.</li>
            <li>Call your gas utility's emergency line (Washington Gas: (844) 927-6427 in Maryland/Virginia).</li>
            <li>Once the scene is secured, call a licensed Master Gasfitter for the repair.</li>
          </ul>
          <p className="mt-2">Gas leaks are never a wait-until-morning problem. Accumulated natural gas can ignite from a spark as small as a light switch.</p>
        </CalloutBox>

        <InlineCTA />

        <BlogH2>Is a water heater failure a plumbing emergency?</BlogH2>
        <BlogP>It depends on what kind of failure. Some water heater failures are emergencies; others are urgent but not emergency-level situations.</BlogP>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Emergency situations:</p>
        <BlogUL>
          <li>Water heater tank rupture with active flooding — shut the cold supply valve and call immediately</li>
          <li>Gas smell from the water heater — follow gas leak protocol above</li>
          <li>Water heater making extreme banging or rumbling sounds combined with pressure relief valve discharge — risk of pressure vessel failure</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Urgent but not emergency:</p>
        <BlogUL>
          <li>No hot water (pilot light out, thermostat failure, burned heating element) — schedule same-day or next-day service</li>
          <li>Lukewarm water — schedule service within a few days</li>
          <li>Water heater leaking slowly from fittings — schedule service soon; monitor the leak</li>
        </BlogUL>

        <BlogH2>What plumbing problems are NOT emergencies?</BlogH2>
        <BlogP>Most plumbing problems can wait for a scheduled appointment during regular business hours:</BlogP>
        <BlogUL>
          <li>Slow drains — uncomfortable, but not an emergency unless they back up completely</li>
          <li>Dripping faucets — wasteful, but not causing acute damage; schedule repair</li>
          <li>Running toilet — schedule repair; does not require an emergency call</li>
          <li>Low water pressure — typically a fixture or valve issue; schedule diagnostic</li>
          <li>Water heater providing lukewarm water — schedule service</li>
          <li>Minor under-sink leak — turn the supply valves off under the sink, schedule repair</li>
        </BlogUL>
        <BlogP>
          The rule of thumb: if stopping the problem requires you to shut off a water supply valve or leave a room unusable, call your plumber's regular line as soon as it opens. If stopping the problem requires you to shut off the main water supply to the whole house — call the emergency line.
        </BlogP>

        <BlogH2>What should I do while waiting for an emergency plumber?</BlogH2>
        <BlogP>The most important actions while waiting for an emergency plumber:</BlogP>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>For water-related emergencies:</p>
        <BlogUL>
          <li>Shut off the water supply at the appropriate valve (fixture shutoff, section shutoff, or main)</li>
          <li>Move valuables away from the water path</li>
          <li>Document the damage with photos and video</li>
          <li>Start removing standing water if safe to do so (towels, wet vac)</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>For gas emergencies:</p>
        <BlogUL>
          <li>Do not re-enter the building</li>
          <li>Keep others away from the building</li>
          <li>Wait for the utility and emergency responders to clear the scene</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>For sewer backups:</p>
        <BlogUL>
          <li>Cease all water use</li>
          <li>Do not attempt to use plungers or chemical cleaners on a backed-up main line — they won't help and may make things worse</li>
          <li>Keep children and pets away from affected areas</li>
        </BlogUL>

        <BlogH2>When should I call a plumber's emergency line vs. regular line?</BlogH2>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Call the emergency line (24/7) for:</p>
        <BlogUL>
          <li>Active flooding or burst pipe</li>
          <li>Sewer backup reaching fixtures</li>
          <li>Gas smell anywhere in the property</li>
          <li>Water heater tank rupture</li>
          <li>Complete loss of water to the whole property</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Call the regular line (schedule next available) for:</p>
        <BlogUL>
          <li>Dripping faucets, slow drains, running toilets</li>
          <li>Water heater not heating adequately</li>
          <li>Low water pressure at fixtures</li>
          <li>Minor leaks you can control by closing a valve</li>
        </BlogUL>
        <p className="font-['Barlow'] font-semibold text-[#003060] mb-2" style={{ fontSize: "16px" }}>Call the regular line with a same-day urgency for:</p>
        <BlogUL>
          <li>Toilet not flushing in a single-bathroom home</li>
          <li>Water heater completely out in cold weather</li>
          <li>Drain that is completely blocked but not backing up into fixtures yet</li>
        </BlogUL>

        <CalloutBox variant="info">
          <strong>Call Definitive Mechanical for plumbing emergencies in MD, DC &amp; VA</strong>
          <br />
          Definitive Mechanical provides 24/7 emergency plumbing service throughout Maryland, Washington DC, and Northern Virginia. Our emergency line is staffed by a live person — not an answering service. Licensed Master Plumber on every emergency call.
          <br />
          <br />
          📞 Call (301) 679-5849 — 24/7 Emergency Line
          <br />
          MD Master Plumber #96958 | DC Master Plumber #PGM1002236 | VA Master Plumber #2710064209
        </CalloutBox>

        <RelatedServicesBlock
          services={[
            { title: "24/7 Emergency Plumbing", description: "Licensed Master Plumber response 24 hours a day, 7 days a week.", href: "/emergency-plumbing", icon: "zap" },
            { title: "Emergency Plumber Largo MD", description: "Fast emergency response in Largo and Prince George's County.", href: "/emergency-plumber-largo-md", icon: "phone" },
            { title: "Water Heater Repair", description: "Same-day water heater repair and emergency replacement.", href: "/water-heater-repair", icon: "wrench" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
