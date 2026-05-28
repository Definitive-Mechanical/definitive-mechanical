/**
 * Service image map — compressed WebP versions (75% quality, max 1200px wide)
 * Original JPGs: 4–6MB each → WebP: 23–133KB each (~99% size reduction)
 * Keys cover both canonical slugs AND all route path variations used in App.tsx.
 */

export const SERVICE_IMAGES: Record<string, string> = {
  // Emergency & Drain
  "emergency-plumbing":                    "/images/service-emergency-plumbing.webp",
  "24-7-emergency-plumbing":               "/images/service-emergency-plumbing.webp",
  "drain-cleaning":                        "/images/service-drain-cleaning.webp",
  "hydro-jetting":                         "/images/service-hydro-jetting.webp",
  "video-camera-inspection":               "/images/service-video-camera-inspection.webp",

  // Water Heaters
  "water-heater-repair":                   "/images/service-water-heater-repair.webp",
  "water-heater-installation":             "/images/service-water-heater-installation.webp",
  "tankless-water-heater":                 "/images/service-tankless-water-heater.webp",
  "tankless-water-heaters":                "/images/service-tankless-water-heater.webp",
  "water-heater":                          "/images/service-water-heater.webp",

  // Sewer Lines
  "sewer-line-repair":                     "/images/service-sewer-line-repair.webp",
  "sewer-line-installation":               "/images/service-sewer-line-installation.webp",
  "sewer-line":                            "/images/service-sewer-line.webp",

  // Water Lines & Pipe
  "water-line-repair":                     "/images/service-water-line-repair.webp",
  "water-line-installation":               "/images/service-water-line-installation.webp",
  "pipe-repair":                           "/images/service-pipe-repair.webp",

  // Gas Lines
  "gas-line-repair":                       "/images/service-gas-line-repair.webp",
  "gas-line-installation":                 "/images/service-gas-line-installation.webp",
  "gas-line":                              "/images/service-gas-line.webp",
  "gas-leak-repair":                       "/images/service-gas-leak-repair.webp",

  // Backflow — all route variants
  "backflow-prevention":                   "/images/service-backflow-prevention.webp",
  "backflow-certification":                "/images/service-backflow-prevention.webp",
  "backflow-preventer-repair":             "/images/service-backflow-prevention.webp",
  "backflow-certification-maryland":       "/images/service-backflow-prevention.webp",
  "backflow-certification-dc":             "/images/service-backflow-prevention.webp",
  "backflow-certification-virginia":       "/images/service-backflow-prevention.webp",

  // Boiler / Furnace
  "boiler-repair":                         "/images/service-boiler-repair.webp",
  "boiler-furnace-repair":                 "/images/service-boiler-repair.webp",
  "boiler-furnace-installation":           "/images/service-boiler-repair.webp",

  // Fixtures
  "faucet-fixture":                        "/images/service-faucet-fixture.webp",
  "faucet-toilet-repair":                  "/images/service-faucet-fixture.webp",
  "toilet-repair":                         "/images/service-toilet-repair.webp",

  // Water Softener
  "water-softener":                        "/images/service-water-softener.webp",
  "water-softener-installation":           "/images/service-water-softener.webp",

  // Commercial & Government
  "commercial-plumbing":                   "/images/service-commercial-plumbing.webp",
  "commercial-plumber-maryland":           "/images/service-commercial-plumbing.webp",
  "commercial-plumber-dc":                 "/images/service-commercial-plumbing.webp",
  "commercial-plumber-northern-virginia":  "/images/service-commercial-plumbing.webp",
  "government-municipal-plumbing":         "/images/service-government-municipal-plumbing.webp",
  "mbe-certified-plumbing-contractor-maryland": "/images/service-mbe-certified-contractor.webp",
  "residential-plumbing":                  "/images/service-pipe-repair.webp",
};

/**
 * Returns the WebP image path for a given service slug or href.
 * Strips leading slashes and normalises before lookup.
 * Falls back to the emergency plumbing image if slug not found.
 */
export function getServiceImage(slug: string): string {
  const normalised = slug.replace(/^\//, "").toLowerCase().trim();
  return SERVICE_IMAGES[normalised] ?? SERVICE_IMAGES["emergency-plumbing"];
}
