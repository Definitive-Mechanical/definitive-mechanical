/**
 * Canonical list of all 18 Definitive Mechanical services.
 * Used by all city pages to ensure every city shows every service.
 * Labels are SEO-optimised display names; hrefs are canonical route paths.
 * All hrefs correspond to existing routes in App.tsx.
 */

export interface CityServiceItem {
  label: string;
  href: string;
}

export const ALL_SERVICES: CityServiceItem[] = [
  { label: "24/7 Emergency Plumbing",              href: "/emergency-plumbing" },
  { label: "Drain Cleaning & Hydro-Jetting",       href: "/drain-cleaning" },
  { label: "Water Heater Repair",                  href: "/water-heater-repair" },
  { label: "Water Heater Installation",            href: "/water-heater-installation" },
  { label: "Tankless Water Heaters",               href: "/tankless-water-heaters" },
  { label: "Sewer Line Repair",                    href: "/sewer-line-repair" },
  { label: "Water Line Repair & Installation",     href: "/water-line-repair" },
  { label: "Gas Line Repair & Installation",       href: "/gas-line-repair" },
  { label: "Gas Leak Repair",                      href: "/gas-leak-repair" },
  { label: "Backflow Prevention & Certification",  href: "/backflow-certification" },
  { label: "Video Camera Inspection",              href: "/video-camera-inspection" },
  { label: "Hydro-Jetting",                        href: "/hydro-jetting" },
  { label: "Boiler & Furnace Repair",              href: "/boiler-furnace-repair" },
  { label: "Faucet & Toilet Repair",               href: "/faucet-toilet-repair" },
  { label: "Sewer Line Installation",              href: "/sewer-line-installation" },
  { label: "Water Line Installation",              href: "/water-line-installation" },
  { label: "Commercial Plumbing",                  href: "/commercial-plumbing" },
  { label: "Residential Plumbing",                 href: "/residential-plumbing" },
];
