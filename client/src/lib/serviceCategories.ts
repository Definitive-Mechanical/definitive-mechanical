// Canonical service categories used across mega menu, city pages, and homepage
// Every service belongs to exactly one category

export const SERVICE_CATEGORY_RESIDENTIAL = {
  key: 'residential',
  title: 'Residential Services',
  label: 'FOR HOMEOWNERS',
  color: 'var(--brand-cyan)',
  items: [
    { label: 'Water Heater Repair', href: '/water-heater-repair' },
    { label: 'Water Heater Installation', href: '/water-heater-installation' },
    { label: 'Tankless Water Heaters', href: '/tankless-water-heaters' },
    { label: 'Faucet & Toilet Repair', href: '/faucet-toilet-repair' },
    { label: 'Drain Cleaning', href: '/drain-cleaning' },
    { label: 'Sewer Line Repair', href: '/sewer-line-repair' },
    { label: 'Water Line Repair', href: '/water-line-repair' },
    { label: 'Water Line Installation', href: '/water-line-installation' },
    { label: 'Video Camera Inspection', href: '/video-camera-inspection' },
  ],
};

export const SERVICE_CATEGORY_EMERGENCY = {
  key: 'emergency',
  title: 'Emergency & Drain',
  label: 'EMERGENCY',
  color: '#E84F4F',
  items: [
    { label: 'Emergency Plumbing (24/7)', href: '/emergency-plumbing' },
    { label: 'Gas Leak Repair', href: '/gas-leak-repair' },
    { label: 'Hydro-Jetting', href: '/hydro-jetting' },
    { label: 'Sewer Line Installation', href: '/sewer-line-installation' },
    { label: 'Gas Line Repair', href: '/gas-line-repair' },
    { label: 'Gas Line Installation', href: '/gas-line-installation' },
  ],
};

export const SERVICE_CATEGORY_COMMERCIAL = {
  key: 'commercial',
  title: 'Commercial & Specialty',
  label: 'COMMERCIAL & SPECIALTY',
  color: 'var(--brand-blue)',
  items: [
    { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
    { label: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair' },
    { label: 'Backflow Prevention', href: '/backflow-prevention' },
    { label: 'Backflow Certification', href: '/backflow-certification' },
    { label: 'Government / Municipal', href: '/government-municipal-plumbing' },
    { label: 'MBE Certified Contractor', href: '/mbe-certified-plumbing-contractor-maryland' },
  ],
};

// Flat list of all services in display order (residential first)
export const ALL_SERVICE_CATEGORIES = [
  SERVICE_CATEGORY_RESIDENTIAL,
  SERVICE_CATEGORY_EMERGENCY,
  SERVICE_CATEGORY_COMMERCIAL,
];

// Flat list for grids that don't need categories
export const ALL_SERVICES_FLAT = [
  ...SERVICE_CATEGORY_RESIDENTIAL.items,
  ...SERVICE_CATEGORY_EMERGENCY.items,
  ...SERVICE_CATEGORY_COMMERCIAL.items,
];
