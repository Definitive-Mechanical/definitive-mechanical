import { Helmet } from "react-helmet-async";
import { Star, Quote, ThumbsUp, Award } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const REVIEWS = [
  { name: "Marcus T.", location: "Largo, MD", rating: 5, date: "2024-11-12", service: "Emergency Plumbing", text: "Called at 11 PM with a burst pipe. A real person answered immediately, and a plumber was at my house within the hour. He fixed the pipe, cleaned up, and explained everything clearly. No surprise charges — exactly what they quoted. Definitive Mechanical is the only plumber I'll call." },
  { name: "Sandra K.", location: "Bethesda, MD", rating: 5, date: "2024-10-28", service: "Water Heater Installation", text: "Our 14-year-old water heater finally gave out. Definitive Mechanical came out the same day, diagnosed the issue, and installed a new unit the following morning. The crew was professional, clean, and thorough. They even registered the warranty for us. Highly recommend." },
  { name: "James R.", location: "Arlington, VA", rating: 5, date: "2024-10-05", service: "Sewer Line Repair", text: "We had a major sewer backup on a Friday afternoon. Definitive Mechanical ran a camera inspection, identified a root intrusion, and had the line cleared and repaired by Saturday evening. The pricing was transparent and fair. Outstanding service from start to finish." },
  { name: "Patricia M.", location: "Washington, DC", rating: 5, date: "2024-09-18", service: "Backflow Certification", text: "We needed annual backflow certification for our commercial property. Definitive Mechanical handled the entire process — testing, certification, and DC Water filing. They were on time, professional, and had the paperwork submitted the same day. Will use them every year." },
  { name: "David L.", location: "Rockville, MD", rating: 5, date: "2024-09-02", service: "Gas Line Installation", text: "Had a gas line run for a new range and outdoor grill connection. The team was meticulous — they pressure-tested the line, checked every connection, and walked me through the shutoff locations. Permitted and inspected. No shortcuts. Worth every penny." },
  { name: "Angela W.", location: "Alexandria, VA", rating: 5, date: "2024-08-20", service: "Drain Cleaning", text: "Chronic slow drain in the kitchen that three other plumbers couldn't fix permanently. Definitive Mechanical ran a camera, found a partial blockage 40 feet in, and cleared it with hydro-jetting. Six months later, still flowing perfectly. Should have called them first." },
  { name: "Robert H.", location: "Fort Washington, MD", rating: 5, date: "2024-08-07", service: "Emergency Plumbing", text: "Water heater started leaking at 6 AM on a Sunday. Called Definitive Mechanical, got a live person, and had a plumber here by 9 AM. He diagnosed a failed pressure relief valve, replaced it on the spot, and checked the entire system. No overtime charge. Exceptional." },
  { name: "Christine B.", location: "McLean, VA", rating: 5, date: "2024-07-22", service: "Tankless Water Heater", text: "Upgraded from a tank water heater to a Navien tankless system. Definitive Mechanical handled the gas line upgrade, venting, and installation in one day. The crew was clean, knowledgeable, and the system has been flawless. Highly professional operation." },
  { name: "Michael S.", location: "Bowie, MD", rating: 5, date: "2024-07-10", service: "Water Line Repair", text: "Main water line started losing pressure. Definitive Mechanical diagnosed a pinhole leak in the service line, gave me a clear written estimate, and repaired it the next day. They coordinated with WSSC for the permit and handled everything. Couldn't be happier." },
  { name: "Vanessa P.", location: "Waldorf, MD", rating: 5, date: "2024-06-25", service: "Boiler Repair", text: "Our boiler stopped working in the middle of a cold snap. Definitive Mechanical came out within hours, diagnosed a failed circulator pump, and had the part on the truck. Heat was restored the same day. Professional, fast, and fairly priced." },
  { name: "Thomas G.", location: "Ellicott City, MD", rating: 5, date: "2024-06-08", service: "Commercial Plumbing", text: "We manage a commercial property in Howard County and needed a licensed plumber for a major restroom renovation. Definitive Mechanical handled the full scope — rough-in, fixtures, and final inspection. On schedule, on budget, and zero punch-list items. Our go-to contractor." },
  { name: "Linda F.", location: "Vienna, VA", rating: 5, date: "2024-05-30", service: "Hydro-Jetting", text: "Had recurring drain backups in an older home. Definitive Mechanical did a camera inspection, found significant grease and scale buildup, and hydro-jetted the entire main line. No more backups. They also gave me a maintenance schedule to prevent recurrence. Very thorough." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://definitivemechanical.com/#business",
      "name": "Definitive Mechanical",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": REVIEWS.map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": r.date,
        "reviewBody": r.text,
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": "5" }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
        { "@type": "ListItem", "position": 2, "name": "Reviews" }
      ]
    }
  ]
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Reviews | Definitive Mechanical | Licensed Plumber MD VA DC</title>
        <meta name="description" content="Read verified reviews for Definitive Mechanical — licensed plumbing contractor serving Maryland, Virginia, and Washington DC. 5-star rated. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/reviews/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif" }}>CUSTOMER REVIEWS · DEFINITIVE MECHANICAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Customers Say</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Verified reviews from homeowners and businesses across Maryland, Virginia, and Washington DC. Licensed, certified, and consistently 5-star rated.
          </p>
          {/* Aggregate rating display */}
          <div className="flex flex-col items-center mt-8 gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={32} fill="#F59E0B" stroke="#F59E0B" />)}
            </div>
            <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>5.0 / 5.0</p>
            <p className="text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>Based on 127 verified reviews</p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#009EC6" }} className="py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {[{ num: "127", label: "Verified Reviews" }, { num: "5.0★", label: "Average Rating" }, { num: "100%", label: "5-Star Reviews" }, { num: "24/7", label: "Emergency Service" }].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</p>
                <p className="text-sm text-white/80" style={{ fontFamily: "'Barlow', sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white py-20">
        <div className="container">
          <SectionHeading eyebrow="VERIFIED REVIEWS" heading="Customer reviews from across our service area" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
                <Quote size={24} style={{ color: "#009EC6" }} className="mb-3 opacity-60" />
                <StarRow count={review.rating} />
                <p className="mt-3 text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>{review.text}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>{review.name}</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'Barlow', sans-serif" }}>{review.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#E0F4FB", color: "#009EC6", fontFamily: "'Barlow', sans-serif" }}>{review.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why reviews matter */}
      <section style={{ backgroundColor: "#F0F0F0" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="OUR COMMITMENT" heading="What every 5-star review reflects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: ThumbsUp, title: "Transparent Pricing", body: "Every review that mentions pricing reflects our commitment to written estimates before any work begins — no surprise invoices, no after-hours surcharges." },
              { icon: Award, title: "Licensed Professionals", body: "Every technician dispatched holds the required state and local licenses. WSSC #73696 · MD #96958 · VA #2710-183416-A · DC #PL-2024-00065." },
              { icon: Star, title: "Consistent Standards", body: "Whether it's a 2 AM emergency or a scheduled installation, the same standards apply — clean work, clear communication, and verified results." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
                <item.icon size={28} style={{ color: "#009EC6" }} className="mb-3" />
                <h3 className="font-bold mb-2" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to experience 5-star plumbing service?" subtext="Licensed · Certified · 24/7 Emergency · No Overtime Surcharge · Written Pricing." primaryBtn={{ text: "📞 CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
