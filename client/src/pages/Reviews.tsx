import { Helmet } from "react-helmet-async";
import { Star, Quote, ThumbsUp, Award } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const REVIEWS = [
  {
    name: "Teresa Salemi",
    location: "Largo, MD",
    rating: 5,
    date: "2024-10-01",
    service: "Drain Cleaning",
    text: "We have now been using Definitive for about 13+ years. They are always quick to respond, thorough in their explanation and work. Keon came late in the day, diagnosed the problem quickly, and offered to fix it that night. He even reached out to WSSC on our behalf. Our technicians are always VERY clear and detailed in the estimate of work and then follow through. I cannot recommend them enough!"
  },
  {
    name: "Pamela U. Minor",
    location: "Largo, MD",
    rating: 5,
    date: "2024-09-15",
    service: "Plumbing Repair",
    text: "It was not the first time we used Definitive and they have become our #1 and only plumbing and mechanical service provider. The technicians arrived right on time and their professionalism was evident from the get-go. They meticulously inspected, diagnosed, and repaired the issue — and took the time to explain the problem in understandable terms. They maintained a clean and organized workspace, leaving my home in the same condition they found it, if not better. Five stars without a doubt!"
  },
  {
    name: "William Maxwell",
    location: "Maryland",
    rating: 5,
    date: "2024-10-20",
    service: "Faucet & Valve Repair",
    text: "After trying to get a reliable plumber for a few months to repair valves and faucet in my kitchen, I finally found the right company to do the job in Definitive Mechanical. The master plumber was very knowledgeable and did an excellent job. I will recommend Definitive Mechanical to anyone seeking high quality service and expertise."
  },
  {
    name: "george guo",
    location: "Maryland",
    rating: 5,
    date: "2024-08-01",
    service: "Plumbing Service",
    text: "Keon, the technician, demonstrated not only his professional experience when dealing with all aged problems at the job site, but also his great attention to making me happy at every step. I didn't spend more than 5 minutes cleaning after his work simply because he was well prepared to avoid any mess. Definitive Mechanical can be definitely creditable in delivering what they promise. Appreciate so much for this service."
  },
  {
    name: "Aneeya Walters",
    location: "Maryland",
    rating: 5,
    date: "2020-06-01",
    service: "Emergency Plumbing",
    text: "The service was absolutely impeccable! We were in the middle of an event with hundreds of people and called for a short notice repair. Not only was he responsive, but he understood the urgency and came to our rescue right away! This company is bar-none professional, skilled, and they truly care for their customer. Other companies tack on so many additional fees and hidden charges — Not Definitive! He was thorough in explaining his price and the work required. My husband and I give this company 5 stars, but would give 10 if we could!"
  },
  {
    name: "Cash Fulton",
    location: "Maryland",
    rating: 5,
    date: "2024-02-01",
    service: "Plumbing Service",
    text: "I found Definitive Mechanical through their high quality reviews. The reviews didn't lie — Keon and his team are the definition of what true professionals are. 10/10 highly recommended, I will be with Definitive Mechanical for life!"
  },
  {
    name: "Chrissy Fennell",
    location: "Maryland",
    rating: 5,
    date: "2018-01-01",
    service: "Emergency Pipe Repair",
    text: "Definitive Plumbing came to our rescue big time after we had pipes burst and flood our home! Keon did an amazing job finding the sources and rerouting the plumbing to get us up and running again. We can't thank him and the company enough. I've already recommended them to friends and will certainly use them for any future plumbing needs!"
  },
  {
    name: "Evelyn Ross",
    location: "Maryland",
    rating: 5,
    date: "2023-01-01",
    service: "Toilet & Pipe Repair",
    text: "I've used this company on several occasions and referred them to my family and friends. They are quite professional with great customer service. The technician was very detailed and explained what I needed to have done. I didn't feel they were overcharging me. I am very pleased with their service."
  },
  {
    name: "Shekida Anna Smith-Sandy",
    location: "Maryland",
    rating: 5,
    date: "2018-01-01",
    service: "Multiple Services",
    text: "I've worked with Definitive Plumbing & Heating for a number of years and have always had a great experience. The representatives are always on time, courteous, and professional. Most importantly, I've never had an issue with the materials used and I've never had to call to address the same issue twice. They rebuilt my toilet, replaced my kitchen faucet, sealed water lines, and replaced the garbage disposal. I couldn't be happier. Would definitely recommend."
  },
  {
    name: "Marterese Green",
    location: "Maryland",
    rating: 5,
    date: "2023-03-01",
    service: "Emergency Plumbing",
    text: "It was an emergency water issue at midnight. I went online and found Definitive — very professional and prompt. They took care of my issue and gave me informative information moving forward."
  },
  {
    name: "LARIKUS SCOTT",
    location: "Maryland",
    rating: 5,
    date: "2018-01-01",
    service: "Emergency Service",
    text: "We called them in a crunch and they delivered. It's hard to find a more professional service than these guys. They were on-time and really explained what the labor would be. I'd recommend Definitive any day."
  },
  {
    name: "Kayla Jackson",
    location: "Maryland",
    rating: 5,
    date: "2018-06-01",
    service: "24/7 Emergency",
    text: "I love that they're 24 hours, really came in handy when I needed it. Superb service — definitely recommend!!"
  },
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
        "ratingValue": "4.8",
        "reviewCount": "40",
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
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #001830 100%)", minHeight: "40vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>CUSTOMER REVIEWS · DEFINITIVE MECHANICAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Customers Say</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Verified reviews from homeowners and businesses across Maryland, Virginia, and Washington DC. Licensed, certified, and consistently 4.8-star rated on Google.
          </p>
          {/* Aggregate rating display */}
          <div className="flex flex-col items-center mt-8 gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={32} fill="#F59E0B" stroke="#F59E0B" />)}
            </div>
            <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4.8 / 5.0</p>
            <p className="text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>Based on 40 Google reviews</p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--brand-cyan)" }} className="py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {[{ num: "40", label: "Google Reviews" }, { num: "4.8★", label: "Average Rating" }, { num: "13+", label: "Years in Business" }, { num: "24/7", label: "Emergency Service" }].map((s) => (
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
                <Quote size={24} style={{ color: "var(--brand-cyan)" }} className="mb-3 opacity-60" />
                <StarRow count={review.rating} />
                <p className="mt-3 text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>{review.text}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>{review.name}</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'Barlow', sans-serif" }}>{review.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#E0F4FB", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>{review.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why reviews matter */}
      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="OUR COMMITMENT" heading="What every 5-star review reflects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: ThumbsUp, title: "Transparent Pricing", body: "Every review that mentions pricing reflects our commitment to written estimates before any work begins — no surprise invoices, no after-hours surcharges." },
              { icon: Award, title: "Licensed Professionals", body: "Every technician dispatched holds the required state and local licenses. WSSC #73696 · MD #96958 · VA #2710-183416-A · DC #PL-2024-00065." },
              { icon: Star, title: "Consistent Standards", body: "Whether it's a 2 AM emergency or a scheduled installation, the same standards apply — clean work, clear communication, and verified results." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm">
                <item.icon size={28} style={{ color: "var(--brand-cyan)" }} className="mb-3" />
                <h3 className="font-bold mb-2" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>{item.title}</h3>
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
