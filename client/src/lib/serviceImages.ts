/**
 * Service image map — maps service slugs to their /manus-storage/ CDN paths.
 * Each image is a professional plumbing photo generated for Definitive Mechanical.
 * Used in ServiceCard, Tier1CityPage service grids, and service detail page heroes.
 *
 * Keys cover both canonical slugs AND all route path variations used in App.tsx.
 */

export const SERVICE_IMAGES: Record<string, string> = {
  // Emergency & Drain
  "emergency-plumbing": "/manus-storage/service-emergency-plumbing_ac2151e7.jpg",
  "drain-cleaning": "/manus-storage/service-drain-cleaning_a7ba7686.jpg",
  "hydro-jetting": "/manus-storage/service-hydro-jetting_38a6c214.jpg",
  "video-camera-inspection": "/manus-storage/service-video-camera-inspection_8f462e65.jpg",

  // Water Heaters
  "water-heater-repair": "/manus-storage/service-water-heater-repair_03e68d7c.jpg",
  "water-heater-installation": "/manus-storage/service-water-heater-installation_e7176034.jpg",
  "tankless-water-heater": "/manus-storage/service-tankless-water-heater_ac5bee74.jpg",
  "tankless-water-heaters": "/manus-storage/service-tankless-water-heater_ac5bee74.jpg",
  "water-heater": "/manus-storage/service-water-heater_3e7e530f.jpg",

  // Sewer Lines
  "sewer-line-repair": "/manus-storage/service-sewer-line-repair_e3bf8f22.jpg",
  "sewer-line-installation": "/manus-storage/service-sewer-line-installation_7a990abe.jpg",
  "sewer-line": "/manus-storage/service-sewer-line_b67ebb6b.jpg",

  // Water Lines
  "water-line-repair": "/manus-storage/service-water-line-repair_c662e76d.jpg",
  "water-line-installation": "/manus-storage/service-water-line-repair_c662e76d.jpg",
  "pipe-repair": "/manus-storage/service-pipe-repair_f934d611.jpg",

  // Gas Lines
  "gas-line-repair": "/manus-storage/service-gas-line-repair_29e6c51c.jpg",
  "gas-line-installation": "/manus-storage/service-gas-line-installation_ab0456c1.jpg",
  "gas-line": "/manus-storage/service-gas-line_b2a761bf.jpg",
  "gas-leak-repair": "/manus-storage/service-gas-leak-repair_426928c3.jpg",

  // Backflow — all route variants
  "backflow-prevention": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",
  "backflow-certification": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",
  "backflow-preventer-repair": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",
  "backflow-certification-maryland": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",
  "backflow-certification-dc": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",
  "backflow-certification-virginia": "/manus-storage/service-backflow-prevention_3ef7968a.jpg",

  // Boiler / Furnace
  "boiler-repair": "/manus-storage/service-boiler-repair_fe1a2660.jpg",
  "boiler-furnace-repair": "/manus-storage/service-boiler-repair_fe1a2660.jpg",
  "boiler-furnace-installation": "/manus-storage/service-boiler-repair_fe1a2660.jpg",

  // Fixtures
  "faucet-fixture": "/manus-storage/service-faucet-fixture_20f87571.jpg",
  "faucet-toilet-repair": "/manus-storage/service-faucet-fixture_20f87571.jpg",
  "toilet-repair": "/manus-storage/service-toilet-repair_a68d5ba6.jpg",

  // Water Softener
  "water-softener": "/manus-storage/service-water-softener_0d85c8fc.jpg",

  // Commercial & Government
  "commercial-plumbing": "/manus-storage/service-commercial-plumbing_88f441f4.jpg",
  "commercial-plumber-maryland": "/manus-storage/service-commercial-plumbing_88f441f4.jpg",
  "commercial-plumber-dc": "/manus-storage/service-commercial-plumbing_88f441f4.jpg",
  "commercial-plumber-northern-virginia": "/manus-storage/service-commercial-plumbing_88f441f4.jpg",
  "government-municipal-plumbing": "/manus-storage/service-commercial-plumbing_88f441f4.jpg",
  "residential-plumbing": "/manus-storage/service-pipe-repair_f934d611.jpg",
};

/**
 * Returns the image path for a given service slug.
 * Strips leading slashes and normalises before lookup.
 * Falls back to the emergency plumbing image if slug not found.
 */
export function getServiceImage(slug: string): string {
  const normalised = slug.replace(/^\//, "").toLowerCase();
  return SERVICE_IMAGES[normalised] ?? SERVICE_IMAGES["emergency-plumbing"];
}
