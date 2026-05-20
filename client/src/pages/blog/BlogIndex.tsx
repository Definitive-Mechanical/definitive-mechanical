/**
 * Blog Index Page — /blog/
 * Lists all blog posts with cards, categories, and sidebar
 * Schema: Blog + BreadcrumbList
 */

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ArrowRight, Clock, BookOpen, Zap, Shield, Wrench } from "lucide-react";
import { BUSINESS, LICENSES } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;
const LICENSE_MD = LICENSES.maryland[0].number;
const LICENSE_DC = LICENSES.dc[0].number;
const LICENSE_VA = LICENSES.virginia[0].number;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://definitivemechanical.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://definitivemechanical.com/blog/" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Definitive Mechanical Plumbing Blog",
  description: "Expert plumbing guides, tips, and resources from licensed Master Plumbers serving Maryland, Washington DC, and Northern Virginia.",
  url: "https://definitivemechanical.com/blog/",
  publisher: {
    "@type": "Organization",
    name: "Definitive Mechanical",
    url: "https://definitivemechanical.com",
  },
};

const posts = [
  {
    title: "What Qualifies as a Plumbing Emergency?",
    description: "Not sure if your plumbing problem is an emergency? Learn which situations require an immediate call — and which ones can wait until morning.",
    href: "/blog/what-qualifies-as-a-plumbing-emergency",
    category: "Emergency Plumbing",
    readTime: "6 min read",
    date: "January 15, 2026",
    icon: Zap,
    featured: true,
  },
  {
    title: "How Much Does an Emergency Plumber Cost in MD, DC & VA?",
    description: "Emergency plumber pricing in Maryland, DC, and Northern Virginia — what to expect for dispatch fees, after-hours rates, and common repairs.",
    href: "/blog/emergency-plumber-cost-maryland-dc-va",
    category: "Cost Guide",
    readTime: "5 min read",
    date: "January 15, 2026",
    icon: BookOpen,
    featured: false,
  },
  {
    title: "How to Choose a Licensed Plumber in MD, DC, or VA",
    description: "A practical guide to choosing a licensed plumber in Maryland, DC, or Virginia — how to verify credentials, what to ask, and the red flags to avoid.",
    href: "/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia",
    category: "Buyer's Guide",
    readTime: "7 min read",
    date: "January 15, 2026",
    icon: Shield,
    featured: false,
  },
  {
    title: "What To Do Before the Plumber Arrives",
    description: "7 steps to take while waiting for an emergency plumber — how to minimize water damage, document the situation, and prepare for a faster repair.",
    href: "/blog/what-to-do-before-the-plumber-arrives",
    category: "Emergency Plumbing",
    readTime: "5 min read",
    date: "January 15, 2026",
    icon: Wrench,
    featured: false,
  },
];

export default function BlogIndex() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Helmet>
        <title>Plumbing Blog — Expert Guides from Definitive Mechanical</title>
        <meta name="description" content="Expert plumbing guides, cost breakdowns, and tips from licensed Master Plumbers serving Maryland, Washington DC, and Northern Virginia." />
        <link rel="canonical" href="https://definitivemechanical.com/blog/" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Bar */}
        <div className="bg-[var(--brand-navy)] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 font-sans text-sm text-[#C0D8F0]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-[#C0D8F0]/50">/</li>
                <li className="text-white">Blog</li>
              </ol>
            </nav>
            <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
              Expert Plumbing Resources
            </p>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
              Plumbing Blog
            </h1>
            <p className="font-sans text-[#C0D8F0] text-lg max-w-2xl">
              Practical guides, cost breakdowns, and expert advice from licensed Master Plumbers serving Maryland, Washington DC, and Northern Virginia.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Posts Column */}
            <div className="flex-1 min-w-0">
              {/* Featured Post */}
              <div className="mb-10">
                <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-4">
                  Featured Article
                </p>
                <Link href={featured.href} className="group block border border-[#C0D8F0] rounded-sm overflow-hidden hover:border-[var(--brand-cyan)] transition-colors" style={{ borderTop: "4px solid var(--brand-cyan)" }}>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide px-3 py-1 rounded-sm">
                        <Zap className="w-3 h-3" />
                        {featured.category}
                      </span>
                      <span className="font-sans text-[#787878] text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </span>
                      <span className="font-sans text-[#787878] text-sm">{featured.date}</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[var(--brand-navy)] mb-3 group-hover:text-[var(--brand-cyan)] transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="font-sans text-[var(--ink-2)] text-base leading-relaxed mb-5">
                      {featured.description}
                    </p>
                    <span className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide text-[var(--brand-cyan)] flex items-center gap-1">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Post Grid */}
              <div>
                <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-6">
                  All Articles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {rest.map((post, i) => {
                    const Icon = post.icon;
                    return (
                      <Link key={i} href={post.href} className="group block border border-[#C0D8F0] rounded-sm overflow-hidden hover:border-[var(--brand-cyan)] transition-colors" style={{ borderTop: "3px solid var(--brand-cyan)" }}>
                        <div className="p-5">
                          <div className="w-9 h-9 bg-[var(--brand-cyan)]/10 rounded-sm flex items-center justify-center mb-4">
                            <Icon className="w-4 h-4 text-[var(--brand-cyan)]" />
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-[var(--brand-cyan)]">
                              {post.category}
                            </span>
                            <span className="text-[#C0D8F0]">·</span>
                            <span className="font-sans text-[#787878] text-xs flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-['Playfair_Display'] text-lg font-bold text-[var(--brand-navy)] mb-2 group-hover:text-[var(--brand-cyan)] transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="font-sans text-[var(--ink-2)] text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.description}
                          </p>
                          <span className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-[var(--brand-cyan)] flex items-center gap-1">
                            Read Article <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Call Now */}
                <div className="bg-[var(--brand-navy)] rounded-sm p-6 text-white">
                  <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-2">
                    Need a plumber?
                  </p>
                  <p className="font-['Playfair_Display'] text-xl font-bold text-white mb-4 leading-snug">
                    24/7 Emergency Service
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide py-4 px-4 rounded-sm hover:bg-[#00b8e6] transition-colors mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-[#C0D8F0] font-sans text-xs text-center">
                    24/7 live dispatcher · Licensed Master Plumber
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-sans">
                      <Shield className="w-3 h-3 text-[var(--brand-cyan)]" />
                      <span>MD #{LICENSE_MD} | DC #{LICENSE_DC}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#C0D8F0] text-xs font-sans">
                      <Shield className="w-3 h-3 text-[var(--brand-cyan)]" />
                      <span>VA #{LICENSE_VA}</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="border border-[#C0D8F0] rounded-sm overflow-hidden">
                  <div className="bg-[var(--brand-navy)] px-4 py-3">
                    <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
                      Categories
                    </p>
                  </div>
                  <div className="divide-y divide-[#C0D8F0]">
                    {["Emergency Plumbing", "Cost Guide", "Buyer's Guide"].map((cat, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3">
                        <span className="font-sans text-[var(--ink-2)] text-sm">{cat}</span>
                        <span className="font-['Barlow_Condensed'] font-bold text-xs text-[var(--brand-cyan)]">
                          {cat === "Emergency Plumbing" ? "2" : "1"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Services */}
                <div className="border border-[#C0D8F0] rounded-sm overflow-hidden">
                  <div className="bg-[var(--brand-navy)] px-4 py-3">
                    <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
                      Popular Services
                    </p>
                  </div>
                  <div className="divide-y divide-[#C0D8F0]">
                    {[
                      { title: "Emergency Plumbing", href: "/emergency-plumbing" },
                      { title: "Drain Cleaning", href: "/drain-cleaning" },
                      { title: "Water Heater Repair", href: "/water-heater-repair" },
                      { title: "Sewer Line Repair", href: "/sewer-line-repair" },
                    ].map((svc, i) => (
                      <Link key={i} href={svc.href} className="flex items-center justify-between px-4 py-3 hover:bg-[#F0F7FF] transition-colors group">
                        <span className="font-sans text-[var(--ink-2)] text-sm group-hover:text-[var(--brand-cyan)] transition-colors">{svc.title}</span>
                        <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[var(--brand-navy)] py-14 px-4 mt-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-['Barlow_Condensed'] text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
              Licensed Emergency Plumber · MD, DC &amp; Northern VA
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-8">
              Need a plumber now?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors"
              >
                <Phone className="w-5 h-5" />
                CALL {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-white hover:text-[var(--brand-navy)] transition-colors"
              >
                REQUEST SERVICE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile sticky call bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide h-14"
          >
            <Phone className="w-4 h-4" />
            CALL {PHONE_DISPLAY} — 24/7 EMERGENCY
          </a>
        </div>
      </div>
    </>
  );
}
