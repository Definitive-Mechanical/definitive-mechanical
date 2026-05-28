/**
 * Sitemap — /sitemap/
 * Human-readable, SEO-friendly directory of every page on the site.
 * Designed to help visitors discover content and to give search engine
 * crawlers a clean, fully-hyperlinked index of internal pages.
 *
 * Follows the Definitive Mechanical design system:
 * - Navy var(--brand-navy), Cyan var(--brand-cyan)
 * - Barlow Condensed display, Public Sans body
 * - White cards with cyan top border
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Home as HomeIcon, Phone, MapPin, FileText, Star, Award, DollarSign,
  Zap, Droplets, Flame, Wrench, Shield, Thermometer, Building2, Landmark,
  BookOpen,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;
const CANONICAL = "https://definitivemechanical.com/sitemap";

// ─── Section data ───────────────────────────────────────────────────────────

type LinkItem = { label: string; href: string };
type SubSection = { title: string; links: LinkItem[] };
type Section = {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  description?: string;
  links?: LinkItem[];
  subsections?: SubSection[];
};

const sections: Section[] = [
  {
    Icon: HomeIcon,
    title: "MAIN PAGES",
    description: "Core informational pages about Definitive Mechanical.",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Reviews", href: "/reviews" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Financing Options", href: "/financing" },
      { label: "Licenses & Certifications", href: "/licenses-certifications" },
      { label: "All Plumbing Services", href: "/plumbing" },
      { label: "Services Directory", href: "/services" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    Icon: Zap,
    title: "EMERGENCY PLUMBING",
    description: "24/7 emergency plumbing service across MD, DC, and Northern VA.",
    links: [
      { label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
      { label: "Emergency Plumber — Alexandria, VA", href: "/emergency-plumber-alexandria-va" },
      { label: "Emergency Plumber — Arlington, VA", href: "/emergency-plumber-arlington-va" },
      { label: "Emergency Plumber — Bethesda, MD", href: "/emergency-plumber-bethesda-md" },
      { label: "Emergency Plumber — Bowie, MD", href: "/emergency-plumber-bowie-md" },
      { label: "Emergency Plumber — Largo, MD", href: "/emergency-plumber-largo-md" },
      { label: "Emergency Plumber — Rockville, MD", href: "/emergency-plumber-rockville-md" },
      { label: "Emergency Plumber — Washington, DC", href: "/emergency-plumber-washington-dc" },
    ],
  },
  {
    Icon: Droplets,
    title: "DRAIN & SEWER SERVICES",
    links: [
      { label: "Drain Cleaning", href: "/drain-cleaning" },
      { label: "Hydro-Jetting", href: "/hydro-jetting" },
      { label: "Video Camera Inspection", href: "/video-camera-inspection" },
      { label: "Sewer Line Repair", href: "/sewer-line-repair" },
      { label: "Sewer Line Installation", href: "/sewer-line-installation" },
    ],
  },
  {
    Icon: Flame,
    title: "WATER HEATERS",
    links: [
      { label: "Water Heater Repair", href: "/water-heater-repair" },
      { label: "Water Heater Installation", href: "/water-heater-installation" },
      { label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
    ],
  },
  {
    Icon: Droplets,
    title: "WATER LINE SERVICES",
    links: [
      { label: "Water Line Repair", href: "/water-line-repair" },
      { label: "Water Line Installation", href: "/water-line-installation" },
    ],
  },
  {
    Icon: Flame,
    title: "GAS SERVICES",
    links: [
      { label: "Gas Line Repair", href: "/gas-line-repair" },
      { label: "Gas Line Installation", href: "/gas-line-installation" },
      { label: "Gas Leak Repair", href: "/gas-leak-repair" },
    ],
  },
  {
    Icon: Shield,
    title: "BACKFLOW SERVICES",
    links: [
      { label: "Backflow Prevention", href: "/backflow-prevention" },
      { label: "Backflow Certification", href: "/backflow-certification" },
      { label: "Backflow Certification — Maryland", href: "/backflow-certification-maryland" },
      { label: "Backflow Certification — Virginia", href: "/backflow-certification-virginia" },
      { label: "Backflow Certification — Washington, DC", href: "/backflow-certification-washington-dc" },
      { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair" },
    ],
  },
  {
    Icon: Thermometer,
    title: "HEATING SERVICES",
    links: [
      { label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
      { label: "Boiler & Furnace Installation", href: "/boiler-furnace-installation" },
    ],
  },
  {
    Icon: Wrench,
    title: "RESIDENTIAL SERVICES",
    links: [
      { label: "Residential Plumbing", href: "/residential-plumbing" },
      { label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
    ],
  },
  {
    Icon: Building2,
    title: "COMMERCIAL PLUMBING",
    links: [
      { label: "Commercial Plumbing Overview", href: "/commercial-plumbing" },
      { label: "Commercial Plumber — Maryland", href: "/commercial-plumber-maryland" },
      { label: "Commercial Plumber — Washington, DC", href: "/commercial-plumber-washington-dc" },
      { label: "Commercial Plumber — Northern Virginia", href: "/commercial-plumber-northern-virginia" },
    ],
  },
  {
    Icon: Landmark,
    title: "GOVERNMENT & MUNICIPAL",
    links: [
      { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing" },
    ],
  },
  {
    Icon: Award,
    title: "CERTIFICATIONS",
    links: [
      { label: "MBE Certified Plumbing Contractor — Maryland", href: "/mbe-certified-plumbing-contractor-maryland" },
      { label: "SWaM Certified Plumbing Contractor — Virginia", href: "/swam-certified-plumbing-contractor-virginia" },
    ],
  },
  {
    Icon: MapPin,
    title: "SERVICE AREAS — MARYLAND",
    description: "Counties and cities we serve across Maryland.",
    subsections: [
      {
        title: "Maryland Overview",
        links: [{ label: "Maryland — All Areas", href: "/service-areas/maryland" }],
      },
      {
        title: "Anne Arundel County",
        links: [
          { label: "Anne Arundel County", href: "/service-areas/maryland/anne-arundel-county" },
          { label: "Crownsville, MD", href: "/service-areas/maryland/anne-arundel-county/crownsville-md" },
          { label: "Galesville, MD", href: "/service-areas/maryland/anne-arundel-county/galesville-md" },
          { label: "Riva, MD", href: "/service-areas/maryland/anne-arundel-county/riva-md" },
        ],
      },
      {
        title: "Charles County",
        links: [
          { label: "Charles County", href: "/service-areas/maryland/charles-county" },
          { label: "Bensville, MD", href: "/service-areas/maryland/charles-county/bensville-md" },
          { label: "Waldorf, MD", href: "/service-areas/maryland/charles-county/waldorf-md" },
        ],
      },
      {
        title: "Howard County",
        links: [
          { label: "Howard County", href: "/service-areas/maryland/howard-county" },
          { label: "Clarksville, MD", href: "/service-areas/maryland/howard-county/clarksville-md" },
          { label: "Ellicott City, MD", href: "/service-areas/maryland/howard-county/ellicott-city-md" },
          { label: "Fulton, MD", href: "/service-areas/maryland/howard-county/fulton-md" },
          { label: "Glenelg, MD", href: "/service-areas/maryland/howard-county/glenelg-md" },
          { label: "Highland, MD", href: "/service-areas/maryland/howard-county/highland-md" },
          { label: "Scaggsville, MD", href: "/service-areas/maryland/howard-county/scaggsville-md" },
          { label: "West Friendship, MD", href: "/service-areas/maryland/howard-county/west-friendship-md" },
        ],
      },
      {
        title: "Montgomery County",
        links: [
          { label: "Montgomery County", href: "/service-areas/maryland/montgomery-county" },
          { label: "Bethesda, MD", href: "/service-areas/maryland/montgomery-county/bethesda-md" },
          { label: "Brookmont, MD", href: "/service-areas/maryland/montgomery-county/brookmont-md" },
          { label: "Cabin John, MD", href: "/service-areas/maryland/montgomery-county/cabin-john-md" },
          { label: "Chevy Chase, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-md" },
          { label: "Chevy Chase View, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-view-md" },
          { label: "Chevy Chase Village, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-village-md" },
          { label: "Darnestown, MD", href: "/service-areas/maryland/montgomery-county/darnestown-md" },
          { label: "Martins Additions, MD", href: "/service-areas/maryland/montgomery-county/martins-additions-md" },
          { label: "Potomac, MD", href: "/service-areas/maryland/montgomery-county/potomac-md" },
          { label: "Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md" },
          { label: "Somerset, MD", href: "/service-areas/maryland/montgomery-county/somerset-md" },
          { label: "Travilah, MD", href: "/service-areas/maryland/montgomery-county/travilah-md" },
        ],
      },
      {
        title: "Prince George's County",
        links: [
          { label: "Prince George's County", href: "/service-areas/maryland/prince-georges-county" },
          { label: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md" },
          { label: "Brock Hall, MD", href: "/service-areas/maryland/prince-georges-county/brock-hall-md" },
          { label: "Croom, MD", href: "/service-areas/maryland/prince-georges-county/croom-md" },
          { label: "Fairwood, MD", href: "/service-areas/maryland/prince-georges-county/fairwood-md" },
          { label: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md" },
          { label: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md" },
          { label: "Queensland, MD", href: "/service-areas/maryland/prince-georges-county/queensland-md" },
          { label: "University Park, MD", href: "/service-areas/maryland/prince-georges-county/university-park-md" },
          { label: "Woodmore, MD", href: "/service-areas/maryland/prince-georges-county/woodmore-md" },
        ],
      },
    ],
  },
  {
    Icon: MapPin,
    title: "SERVICE AREAS — NORTHERN VIRGINIA",
    description: "Counties and cities we serve across Northern Virginia.",
    subsections: [
      {
        title: "Northern Virginia Overview",
        links: [{ label: "Northern Virginia — All Areas", href: "/service-areas/northern-virginia" }],
      },
      {
        title: "Arlington County",
        links: [
          { label: "Arlington County", href: "/service-areas/northern-virginia/arlington-county" },
          { label: "Arlington, VA", href: "/service-areas/northern-virginia/arlington-county/arlington-va" },
        ],
      },
      {
        title: "Fairfax County",
        links: [
          { label: "Fairfax County", href: "/service-areas/northern-virginia/fairfax-county" },
          { label: "Alexandria, VA", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va" },
          { label: "Crosspointe, VA", href: "/service-areas/northern-virginia/fairfax-county/crosspointe-va" },
          { label: "Difficult Run, VA", href: "/service-areas/northern-virginia/fairfax-county/difficult-run-va" },
          { label: "Dunn Loring, VA", href: "/service-areas/northern-virginia/fairfax-county/dunn-loring-va" },
          { label: "Floris, VA", href: "/service-areas/northern-virginia/fairfax-county/floris-va" },
          { label: "Great Falls, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-va" },
          { label: "Great Falls Crossing, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va" },
          { label: "McLean, VA", href: "/service-areas/northern-virginia/fairfax-county/mclean-va" },
          { label: "South Run, VA", href: "/service-areas/northern-virginia/fairfax-county/south-run-va" },
          { label: "Springfield, VA", href: "/service-areas/northern-virginia/fairfax-county/springfield-va" },
          { label: "Union Mill, VA", href: "/service-areas/northern-virginia/fairfax-county/union-mill-va" },
          { label: "Vienna, VA", href: "/service-areas/northern-virginia/fairfax-county/vienna-va" },
          { label: "Wolf Trap, VA", href: "/service-areas/northern-virginia/fairfax-county/wolf-trap-va" },
        ],
      },
      {
        title: "Loudoun County",
        links: [
          { label: "Loudoun County", href: "/service-areas/northern-virginia/loudoun-county" },
          { label: "Belmont, VA", href: "/service-areas/northern-virginia/loudoun-county/belmont-va" },
          { label: "Brambleton, VA", href: "/service-areas/northern-virginia/loudoun-county/brambleton-va" },
          { label: "Broadlands, VA", href: "/service-areas/northern-virginia/loudoun-county/broadlands-va" },
          { label: "One Loudoun, VA", href: "/service-areas/northern-virginia/loudoun-county/one-loudoun-va" },
        ],
      },
      {
        title: "Prince William County",
        links: [
          { label: "Prince William County", href: "/service-areas/northern-virginia/prince-william-county" },
          { label: "Buckhall, VA", href: "/service-areas/northern-virginia/prince-william-county/buckhall-va" },
          { label: "Bull Run Mountain Estates, VA", href: "/service-areas/northern-virginia/prince-william-county/bull-run-mountain-estates-va" },
          { label: "Independent Hill, VA", href: "/service-areas/northern-virginia/prince-william-county/independent-hill-va" },
        ],
      },
    ],
  },
  {
    Icon: MapPin,
    title: "SERVICE AREAS — WASHINGTON, DC",
    description: "Neighborhoods and wards we serve across Washington, DC.",
    subsections: [
      {
        title: "Washington, DC Overview",
        links: [
          { label: "Washington, DC — All Areas", href: "/service-areas/washington-dc" },
          { label: "Washington, DC (City Page)", href: "/service-areas/washington-dc/washington-dc" },
        ],
      },
      {
        title: "Neighborhoods",
        links: [
          { label: "Capitol Hill", href: "/service-areas/washington-dc/capitol-hill" },
          { label: "Dupont Circle", href: "/service-areas/washington-dc/dupont-circle" },
          { label: "Georgetown", href: "/service-areas/washington-dc/georgetown" },
          { label: "Navy Yard", href: "/service-areas/washington-dc/navy-yard" },
          { label: "NoMa", href: "/service-areas/washington-dc/noma" },
        ],
      },
      {
        title: "Wards",
        links: [
          { label: "Ward 1", href: "/service-areas/washington-dc/ward-1" },
          { label: "Ward 2", href: "/service-areas/washington-dc/ward-2" },
          { label: "Ward 3", href: "/service-areas/washington-dc/ward-3" },
          { label: "Ward 4", href: "/service-areas/washington-dc/ward-4" },
          { label: "Ward 5", href: "/service-areas/washington-dc/ward-5" },
          { label: "Ward 6", href: "/service-areas/washington-dc/ward-6" },
          { label: "Ward 7", href: "/service-areas/washington-dc/ward-7" },
          { label: "Ward 8", href: "/service-areas/washington-dc/ward-8" },
        ],
      },
    ],
  },
  {
    Icon: BookOpen,
    title: "BLOG & RESOURCES",
    description: "Helpful articles about plumbing in Maryland, DC, and Virginia.",
    links: [
      { label: "Blog Home", href: "/blog" },
      { label: "Emergency Plumber Cost — Maryland, DC, VA", href: "/blog/emergency-plumber-cost-maryland-dc-va" },
      { label: "How to Choose a Licensed Plumber", href: "/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia" },
      { label: "What Qualifies as a Plumbing Emergency", href: "/blog/what-qualifies-as-a-plumbing-emergency" },
      { label: "What to Do Before the Plumber Arrives", href: "/blog/what-to-do-before-the-plumber-arrives" },
    ],
  },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function Sitemap() {
  // Count all links for the hero
  const totalLinks = sections.reduce((sum, s) => {
    const direct = s.links?.length ?? 0;
    const sub = s.subsections?.reduce((acc, ss) => acc + ss.links.length, 0) ?? 0;
    return sum + direct + sub;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Sitemap | Definitive Mechanical — Licensed Plumbing in MD, DC & Northern VA</title>
        <meta
          name="description"
          content="Complete directory of every page on Definitive Mechanical — plumbing services, emergency response, service areas across Maryland, Washington DC, and Northern Virginia."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          background: 'var(--brand-navy)',
          padding: '80px 0 60px',
          position: 'relative',
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--brand-cyan)',
              marginBottom: '12px',
            }}
          >
            COMPLETE SITE DIRECTORY
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: 'white',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.1,
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Sitemap
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '17px',
              lineHeight: 1.7,
              maxWidth: '720px',
            }}
          >
            Every page on the Definitive Mechanical website, organized for easy navigation. {totalLinks}+ pages
            covering our full range of plumbing services and every neighborhood we serve across Maryland,
            Washington DC, and Northern Virginia.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ background: '#F0F0F0', padding: '64px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <SitemapCard key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-navy)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: 'white',
              fontSize: 'clamp(24px, 4vw, 36px)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '12px',
            }}
          >
            Can't Find What You're Looking For?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '16px',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto 24px',
            }}
          >
            Call our live dispatcher 24/7 — we'll get you the right plumbing professional for the job.
          </p>
          <a
            href={`tel:${PHONE}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--brand-cyan)',
              color: 'var(--brand-navy)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '16px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            <Phone size={20} /> CALL {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}

// ─── Card component ─────────────────────────────────────────────────────────

function SitemapCard({ section }: { section: Section }) {
  const { Icon, title, description, links, subsections } = section;
  return (
    <div
      style={{
        background: 'white',
        borderTop: '3px solid var(--brand-cyan)',
        borderRadius: '6px',
        padding: '24px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '6px',
            background: 'var(--brand-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={20} style={{ color: 'var(--brand-cyan)' }} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--brand-navy)',
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Description */}
      {description && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            color: '#4A5560',
            fontSize: '13px',
            lineHeight: 1.6,
            marginBottom: '14px',
          }}
        >
          {description}
        </p>
      )}

      {/* Direct links (flat lists) */}
      {links && <LinkList links={links} />}

      {/* Subsections (nested lists, e.g. for service areas) */}
      {subsections &&
        subsections.map((sub) => (
          <div key={sub.title} style={{ marginBottom: '14px' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--brand-blue)',
                marginBottom: '8px',
                marginTop: '6px',
              }}
            >
              {sub.title}
            </p>
            <LinkList links={sub.links} />
          </div>
        ))}
    </div>
  );
}

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {links.map((l) => (
        <li key={l.href} style={{ padding: '4px 0' }}>
          <Link
            href={l.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--brand-navy)',
              textDecoration: 'none',
              lineHeight: 1.5,
              borderBottom: '1px solid transparent',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-blue)';
              (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--brand-cyan)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-navy)';
              (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent';
            }}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
