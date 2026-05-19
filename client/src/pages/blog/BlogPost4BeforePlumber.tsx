/**
 * Blog Post 4: What To Do Before the Plumber Arrives
 * URL: /blog/what-to-do-before-the-plumber-arrives/
 * Schema: BlogPosting + HowTo + FAQPage + BreadcrumbList
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
  BlogH3,
  BlogEyebrow,
  BlogBreadcrumb,
  BlogP,
  BlogUL,
  HowToStep,
} from "@/components/layout/BlogLayout";
import { PHONE, PHONE_DISPLAY, LICENSES } from "@/lib/constants";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What To Do Before the Plumber Arrives",
  description: "Steps to take while waiting for an emergency plumber to minimize water damage and prepare for the repair.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Shut off the water supply",
      text: "Locate and close the appropriate shutoff valve — fixture shutoff, section shutoff, or main shutoff — to stop the flow of water.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document the damage",
      text: "Take photos and video of the damage before any cleanup. Your insurance company will need this documentation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Remove standing water if safe",
      text: "Use towels, mops, or a wet-dry vacuum to remove standing water from floors and surfaces. Do not use electrical equipment in flooded areas.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Move valuables out of the water path",
      text: "Move furniture, electronics, documents, and other valuables away from water-affected areas.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Locate your main shutoff valve and know where it is",
      text: "Find your main water shutoff valve so you can direct the plumber to it immediately upon arrival.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Prepare access to the problem area",
      text: "Clear the path to the affected area — move furniture, open cabinet doors, and ensure the plumber can access the shutoff valves and the problem location.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Note what you observed",
      text: "Write down when the problem started, what you heard or saw, and what you've done so far. This helps the plumber diagnose faster.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I do first when I have a plumbing emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shut off the water supply first — at the fixture shutoff if it's a localized problem, or at the main shutoff if the problem is widespread or you can't find the fixture shutoff. Then call your emergency plumber.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the main water shutoff valve in my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Maryland, DC, and Northern Virginia, the main shutoff is typically located in the basement near the front foundation wall, in a utility closet, or in a crawl space. It may also be in a meter box outside near the street.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a plunger on a sewer backup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Do not use a plunger on a backed-up main sewer line. Plunging a main line backup can push sewage further into the system and make the situation worse. Stop all water use and call a licensed plumber.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use chemical drain cleaner for a clog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemical drain cleaners are not recommended for serious clogs. They can damage PVC and older pipes, create hazardous fumes, and leave caustic chemicals in standing water that the plumber will need to work around. For a serious clog, call a plumber.",
      },
    },
    {
      "@type": "Question",
      name: "What should I tell the plumber when I call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell them: (1) the nature of the problem, (2) whether you've shut off the water, (3) your address, (4) any relevant access information (gate codes, parking, building entry), and (5) whether there are any known hazards like asbestos insulation on pipes.",
      },
    },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What To Do Before the Plumber Arrives",
  description:
    "7 steps to take while waiting for an emergency plumber — how to minimize water damage, document the situation, and prepare for a faster repair. From Definitive Mechanical.",
  url: "https://definitivemechanical.com/blog/what-to-do-before-the-plumber-arrives/",
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
  author: { "@type": "Organization", name: "Definitive Mechanical", url: "https://definitivemechanical.com" },
  publisher: {
    "@type": "Organization",
    name: "Definitive Mechanical",
    logo: { "@type": "ImageObject", url: "https://definitivemechanical.com/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://definitivemechanical.com/blog/what-to-do-before-the-plumber-arrives/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://definitivemechanical.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://definitivemechanical.com/blog/" },
    { "@type": "ListItem", position: 3, name: "What To Do Before the Plumber Arrives", item: "https://definitivemechanical.com/blog/what-to-do-before-the-plumber-arrives/" },
  ],
};

export default function BlogPost4BeforePlumber() {
  return (
    <>
      <Helmet>
        <title>What To Do Before the Plumber Arrives — 7 Steps (2026)</title>
        <meta name="description" content="7 steps to take while waiting for an emergency plumber — how to minimize water damage, document the situation, and prepare for a faster repair. From Definitive Mechanical." />
        <link rel="canonical" href="https://definitivemechanical.com/blog/what-to-do-before-the-plumber-arrives/" />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <BlogLayout
        showEmergencyBar={true}
        relatedServices={[
          { title: "24/7 Emergency Plumbing", description: "Licensed Master Plumber response 24 hours a day, 7 days a week.", href: "/emergency-plumbing", icon: "zap" },
          { title: "Emergency Plumber Largo MD", description: "Fast emergency response in Largo and Prince George's County.", href: "/emergency-plumber-largo-md", icon: "phone" },
          { title: "Drain Cleaning", description: "Professional drain cleaning and hydro-jetting services.", href: "/drain-cleaning", icon: "wrench" },
        ]}
      >
        <BlogBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "What To Do Before the Plumber Arrives" },
          ]}
        />

        <BlogEyebrow>Emergency Plumbing Guide · 5 min read</BlogEyebrow>
        <BlogH1>What To Do Before the Plumber Arrives</BlogH1>
        <AuthorBlock date="January 15, 2026" />

        <FeaturedSnippet>
          The most important thing to do before the plumber arrives is shut off the water supply — at the fixture shutoff, section shutoff, or main shutoff, depending on the severity. Then document the damage with photos, remove standing water if safe, and move valuables out of the water path. These steps take 10–15 minutes and can prevent thousands of dollars in additional damage.
        </FeaturedSnippet>

        <BlogH2>Why what you do before the plumber arrives matters</BlogH2>
        <BlogP>
          The average emergency plumber response time in the DC metro area is 60–90 minutes. In a burst pipe situation, that's 200–400 gallons of water per hour at full line pressure — if the water is still running. Shutting off the water supply immediately and taking a few preparatory steps can mean the difference between a $500 repair and a $15,000 water damage restoration project.
        </BlogP>
        <BlogP>
          This guide gives you the 7 steps to take while waiting for your plumber — in order of priority.
        </BlogP>

        <BlogH2>The 7 steps to take before the plumber arrives</BlogH2>

        <HowToStep number={1}>
          <BlogH3>Shut off the water supply</BlogH3>
          <BlogP>
            This is always the first step — before anything else. The goal is to stop the flow of water as quickly as possible. There are three levels of shutoff:
          </BlogP>
          <BlogUL>
            <li><strong>Fixture shutoff:</strong> The oval or straight valve under a sink or behind a toilet. Turn clockwise to close. Use this for leaks localized to a single fixture.</li>
            <li><strong>Section shutoff:</strong> Some homes have shutoff valves for individual floors, bathrooms, or sections of the house. These are typically ball valves (quarter-turn) or gate valves (multi-turn) in utility spaces.</li>
            <li><strong>Main shutoff:</strong> Shuts off all water to the entire property. In Maryland, DC, and Northern Virginia, this is typically in the basement near the front foundation wall, in a utility closet, or in a crawl space. Turn clockwise to close (gate valve) or a quarter-turn to close (ball valve).</li>
          </BlogUL>
          <CalloutBox variant="warning">
            If you can't find the main shutoff valve, call your water utility's emergency line. WSSC (Prince George's and Montgomery County): (301) 206-4002. DC Water: (202) 612-3400. They can shut off the water at the street meter.
          </CalloutBox>
        </HowToStep>

        <HowToStep number={2}>
          <BlogH3>Document the damage before any cleanup</BlogH3>
          <BlogP>
            Take photos and video of the damage before you touch anything. Walk through the affected area and document:
          </BlogP>
          <BlogUL>
            <li>The source of the leak or backup</li>
            <li>All areas with standing water</li>
            <li>Any damaged materials (flooring, drywall, furniture, personal property)</li>
            <li>The water meter reading (if accessible)</li>
          </BlogUL>
          <BlogP>
            Your homeowner's insurance company will require documentation of the damage to process a claim. Photos taken before cleanup are far more useful than photos taken after. Email them to yourself immediately so they're timestamped.
          </BlogP>
        </HowToStep>

        <HowToStep number={3}>
          <BlogH3>Remove standing water if safe to do so</BlogH3>
          <BlogP>
            Once the water supply is off, start removing standing water to reduce damage to flooring, subfloor, and walls. Use:
          </BlogP>
          <BlogUL>
            <li>Towels and mops for small amounts</li>
            <li>A wet-dry vacuum for larger volumes</li>
            <li>Buckets to remove water from sinks or tubs that are overflowing</li>
          </BlogUL>
          <CalloutBox variant="warning">
            Do not use electrical equipment — including wet-dry vacuums — in areas with significant standing water until you've confirmed there's no electrical hazard. If water has reached electrical outlets, panels, or appliances, stay out of the area and call your utility's emergency line.
          </CalloutBox>
          <BlogP>
            Do not attempt to clean up sewage backup without personal protective equipment (gloves, eye protection, N95 mask). Sewage contains pathogens that are dangerous without proper PPE.
          </BlogP>
        </HowToStep>

        <HowToStep number={4}>
          <BlogH3>Move valuables out of the water path</BlogH3>
          <BlogP>
            Move furniture, electronics, documents, area rugs, and other valuables away from water-affected areas. Lift furniture off wet flooring to prevent staining and warping — place aluminum foil or plastic wrap under furniture legs if you can't move the piece entirely.
          </BlogP>
          <BlogP>
            Open cabinet doors and drawers in affected areas to allow air circulation and prevent mold development. If you have a fan, position it to move air through the wet area.
          </BlogP>
        </HowToStep>

        <InlineCTA />

        <HowToStep number={5}>
          <BlogH3>Locate your main shutoff valve and note its location</BlogH3>
          <BlogP>
            If you haven't already found your main shutoff valve, find it now — before the plumber arrives. The plumber will need to know where it is, and having it identified speeds up the diagnostic process. Common locations in DC metro area homes:
          </BlogP>
          <BlogUL>
            <li><strong>Basement homes (common in PG County, Montgomery County, Howard County):</strong> Front wall of the basement, near where the water main enters the house</li>
            <li><strong>Slab homes (common in parts of Northern Virginia):</strong> In a utility closet, under the kitchen sink, or in a mechanical room</li>
            <li><strong>Condos and apartments:</strong> In a utility closet within the unit, or in a shared mechanical room (building management may need to shut off)</li>
            <li><strong>Townhouses:</strong> Often in the basement or in a utility closet on the main level</li>
          </BlogUL>
        </HowToStep>

        <HowToStep number={6}>
          <BlogH3>Prepare access to the problem area</BlogH3>
          <BlogP>
            Clear the path to the affected area so the plumber can work efficiently:
          </BlogP>
          <BlogUL>
            <li>Move furniture away from the problem area</li>
            <li>Open cabinet doors under sinks</li>
            <li>Clear the area around the water heater, sump pump, or other equipment</li>
            <li>If the problem is behind a wall, note which wall and what's on the other side</li>
            <li>If you have a crawl space, unlock the access hatch</li>
          </BlogUL>
          <BlogP>
            Also prepare access to the property itself: unlock gates, note parking restrictions, and if you're in a building, alert the front desk or building manager that a plumber is coming.
          </BlogP>
        </HowToStep>

        <HowToStep number={7}>
          <BlogH3>Note what you observed — write it down</BlogH3>
          <BlogP>
            Write down (or type into your phone) the following before the plumber arrives:
          </BlogP>
          <BlogUL>
            <li>When you first noticed the problem</li>
            <li>What you heard (sounds of rushing water, banging, gurgling)</li>
            <li>What you saw (water location, color, smell)</li>
            <li>What you've done so far (shut off which valve, removed water, etc.)</li>
            <li>Any relevant history (recent work done on the plumbing, known issues)</li>
          </BlogUL>
          <BlogP>
            This information helps the plumber diagnose faster and reduces the time spent on-site before the actual repair begins.
          </BlogP>
        </HowToStep>

        <BlogH2>What should I tell the plumber when I call?</BlogH2>
        <BlogP>When you call the emergency line, be ready to tell the dispatcher:</BlogP>
        <BlogUL>
          <li>The nature of the problem (burst pipe, sewer backup, no water, gas smell, etc.)</li>
          <li>Whether you've been able to shut off the water</li>
          <li>Your full address including unit number if applicable</li>
          <li>Any access information (gate codes, building entry procedures, parking)</li>
          <li>Whether there are any known hazards (asbestos insulation on pipes in older homes, electrical near the water)</li>
          <li>Your callback number</li>
        </BlogUL>
        <BlogP>
          The more information you can provide, the better the plumber can prepare — bringing the right parts and equipment for your specific situation.
        </BlogP>

        <BlogH2>What should I NOT do before the plumber arrives?</BlogH2>
        <BlogUL>
          <li><strong>Don't use chemical drain cleaners for serious clogs or backups.</strong> They can damage pipes, create hazardous fumes, and leave caustic chemicals in standing water the plumber will need to work in.</li>
          <li><strong>Don't plunge a backed-up main sewer line.</strong> Plunging a main line backup pushes sewage further into the system and can make the situation significantly worse.</li>
          <li><strong>Don't use electrical equipment in flooded areas.</strong> Water and electricity are a dangerous combination.</li>
          <li><strong>Don't attempt to repair gas lines yourself.</strong> Gas work requires a licensed Master Gasfitter. If you smell gas, leave the building and call 911.</li>
          <li><strong>Don't flush toilets or run water</strong> if you have a sewer backup — every gallon of water use makes the backup worse.</li>
        </BlogUL>

        <CalloutBox variant="info">
          <strong>Call Definitive Mechanical — 24/7 Emergency Plumbing in MD, DC &amp; VA</strong>
          <br />
          When you call (301) 679-5849, you reach a live dispatcher — not an answering service. We dispatch a Licensed Master Plumber on every emergency call, typically arriving within 60–90 minutes in the DC metro area.
          <br /><br />
          MD Master Plumber #{LICENSES.md_master} | DC #{LICENSES.dc} | VA #{LICENSES.va_master}
        </CalloutBox>

        <RelatedServicesBlock
          services={[
            { title: "24/7 Emergency Plumbing", description: "Licensed Master Plumber response 24 hours a day, 7 days a week.", href: "/emergency-plumbing", icon: "zap" },
            { title: "Emergency Plumber Largo MD", description: "Fast emergency response in Largo and Prince George's County.", href: "/emergency-plumber-largo-md", icon: "phone" },
            { title: "Drain Cleaning", description: "Professional drain cleaning and hydro-jetting services.", href: "/drain-cleaning", icon: "wrench" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
