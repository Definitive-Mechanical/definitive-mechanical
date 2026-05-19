export const BUSINESS = {
  name: 'Definitive Mechanical',
  legalName: 'Definitive Mechanical LLC',
  phone: '(301) 679-5849',
  phoneRaw: '+13016795849',
  email: 'info@definitivemechanical.com',
  address: {
    street: '9701 Apollo Drive, Suite 100',
    city: 'Largo',
    state: 'MD',
    zip: '20774',
    full: '9701 Apollo Drive, Suite 100, Largo, MD 20774',
  },
  hours: {
    weekdays: 'Mon–Fri 9am–5pm',
    saturday: 'Sat 9am–2pm',
    emergency: '24/7 Emergency Service',
    display: 'Mon–Fri 9am–5pm | Sat 9am–2pm | 24/7 Emergency',
  },
  website: 'https://definitivemechanical.com',
  facebook: 'https://www.facebook.com/profile.php?id=61563503684959',
  gmb: 'https://www.google.com/search?q=definitive+mechanical',
  financing: 'https://www.mysynchrony.com/mmc/S6240351600',
  yearsInBusiness: 11,
  tradeExperience: 25,
  tagline: 'Quality You Can Trust',
  description: 'Licensed plumbing, gas & mechanical contractor serving Maryland, Washington DC & Northern Virginia.',
  rating: 4.8,
  reviewCount: 40,
  serviceArea: 'Maryland, Washington DC & Northern Virginia',
}

export const LICENSES = {
  maryland: [
    { type: 'Master Plumber / Master Gasfitter', authority: 'State of Maryland', number: '96958' },
    { type: 'Master Plumber / Master Gasfitter', authority: 'WSSC', number: '73696' },
    { type: 'Master Plumber / Master Gasfitter', authority: 'Howard County, MD', number: '20020096958' },
    { type: 'Master Plumber / Master Gasfitter', authority: 'Anne Arundel County, MD', number: 'A2-6139' },
    { type: 'Master Plumber / Master Gasfitter', authority: 'City of Rockville, MD', number: 'PLL-0002113' },
    { type: 'Home Improvement Contractor', authority: 'State of Maryland', number: '134723' },
    { type: 'Home Improvement Salesman', authority: 'State of Maryland', number: '109901' },
  ],
  virginia: [
    { type: 'Master Plumber / Master Gasfitter', authority: 'State of Virginia', number: '2710064209' },
    { type: 'Class A Contractor', authority: 'State of Virginia', number: '2705181061' },
  ],
  dc: [
    { type: 'Master Plumber / Master Gasfitter', authority: 'District of Columbia', number: 'PGM1002236' },
  ],
  delaware: [
    { type: 'Master Plumber / Master Gasfitter', authority: 'State of Delaware', number: 'PL-0012866' },
  ],
  epa: [
    { type: 'Universal EPA 608 Certification', authority: 'U.S. EPA', number: 'YbKLqI5cGf' },
  ],
}

export const CERTIFICATIONS = {
  mdotMBE: { name: 'MDOT MBE', certNo: '20-134', authority: 'Maryland Department of Transportation' },
  swam: { name: 'Virginia SWaM', certNo: '815255', authority: 'Virginia SBSD' },
  cage: '8HCF6',
  naics: '238220',
  sic: '171',
}

export const SERVICES_CORE = [
  { name: '24/7 Emergency Plumbing', href: '/emergency-plumbing', icon: 'AlertTriangle' },
  { name: 'Drain Cleaning', href: '/drain-cleaning', icon: 'Droplets' },
  { name: 'Water Heater Repair', href: '/water-heater-repair', icon: 'Flame' },
  { name: 'Sewer Line Repair', href: '/sewer-line-repair', icon: 'GitBranch' },
  { name: 'Gas Line Repair', href: '/gas-line-repair', icon: 'Zap' },
  { name: 'Backflow Certification', href: '/backflow-certification', icon: 'ShieldCheck' },
  { name: 'Commercial Plumbing', href: '/commercial-plumbing', icon: 'Building2' },
  { name: 'Government / Municipal', href: '/government-municipal-plumbing', icon: 'Landmark' },
  { name: 'Water Heater Installation', href: '/water-heater-installation', icon: 'Thermometer' },
  { name: 'Hydro-Jetting', href: '/hydro-jetting', icon: 'Waves' },
  { name: 'Video Camera Inspection', href: '/video-camera-inspection', icon: 'Camera' },
  { name: 'Sewer Line Installation', href: '/sewer-line-installation', icon: 'Network' },
  { name: 'Gas Line Installation', href: '/gas-line-installation', icon: 'Flame' },
  { name: 'Gas Leak Repair', href: '/gas-leak-repair', icon: 'AlertCircle' },
  { name: 'Backflow Prevention', href: '/backflow-prevention', icon: 'Shield' },
  { name: 'Water Line Repair', href: '/water-line-repair', icon: 'Wrench' },
  { name: 'Water Line Installation', href: '/water-line-installation', icon: 'Wrench' },
  { name: 'Tankless Water Heaters', href: '/tankless-water-heaters', icon: 'Thermometer' },
  { name: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair', icon: 'Flame' },
  { name: 'Faucet & Toilet Repair', href: '/faucet-toilet-repair', icon: 'Droplets' },
]

export const SERVICE_AREAS = {
  maryland: {
    name: 'Maryland',
    counties: ["Prince George's County", 'Montgomery County', 'Howard County', 'Anne Arundel County', 'Charles County'],
    cities: ['Largo', 'Bowie', 'Fort Washington', 'Rockville', 'Bethesda', 'Potomac', 'Waldorf', 'Ellicott City', 'Chevy Chase', 'Darnestown'],
  },
  dc: {
    name: 'Washington DC',
    areas: ['All DC Wards', 'Georgetown', 'Capitol Hill', 'Dupont Circle', 'Navy Yard', 'NoMa'],
  },
  nova: {
    name: 'Northern Virginia',
    counties: ['Fairfax County', 'Arlington County', 'Loudoun County', 'Prince William County'],
    cities: ['Alexandria', 'Arlington', 'McLean', 'Springfield', 'Vienna', 'Great Falls'],
  },
}

export const META_DEFAULTS = {
  siteName: 'Definitive Mechanical',
  title: 'Licensed Plumbing in MD, DC & Northern VA | Definitive Mechanical',
  description: 'Definitive Mechanical provides licensed plumbing, gas, emergency, commercial & residential service across MD, DC & Northern VA. 24/7. MDOT MBE & VA SWaM Certified. Call (301) 679-5849.',
}

export const TESTIMONIALS = [
  { quote: "I was extremely impressed — they were prompt, courteous, and professional. If you need plumbers, ask for DJ and Keon.", name: "Michael F.", location: "Largo, MD", service: "Emergency Plumbing" },
  { quote: "Keon and his team were on top of it from the beginning. I was greeted well over the phone, and felt as if Keon was invested in my problem before being hired for the job.", name: "Charles R.", location: "DMV Area", service: "Plumbing" },
  { quote: "Everything went extremely well. They were punctual, which I really liked. Cleaned up after themselves which I also liked. Very professional and courteous. This is my second time hiring this company.", name: "Millie H.", location: "Prince George's County, MD", service: "Plumbing Service" },
  { quote: "Service was excellent. They were prompt, professional and diagnosed and replaced my toilet the same day, and left the bathroom spotless. I would definitely use Definitive Mechanical again.", name: "Gayle T.", location: "Maryland", service: "Toilet Repair" },
  { quote: "I was thoroughly impressed with the punctuality, professionalism, and responsiveness of the representative from Definitive Mechanical. Both issues were fixed immediately. Would definitely recommend.", name: "Shekida S.", location: "DMV Area", service: "Plumbing" },
  { quote: "The price was fantastic, and the guys from Definitive were able to start right away. They worked extremely hard to finish the job and did not cut any corners.", name: "Bryan M.", location: "Maryland", service: "Plumbing" },
  { quote: "They went over and beyond what was expected. My family constantly talks about the dedication and patience of these men throughout the period WSSC needed to fix the water main problem.", name: "Dorothy W.", location: "Maryland", service: "Water Line Service" },
  { quote: "Definitive Mechanical provided prompt and excellent same-day service. Very professional!", name: "Lakisha B.", location: "Maryland", service: "Emergency Service" },
]
