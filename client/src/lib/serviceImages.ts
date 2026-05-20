/**
 * Service image map — compressed WebP versions (75% quality, max 1200px wide)
 * Original JPGs: 4–6MB each → WebP: 23–133KB each (~99% size reduction)
 * Keys cover both canonical slugs AND all route path variations used in App.tsx.
 */

export const SERVICE_IMAGES: Record<string, string> = {
  // Emergency & Drain
  "emergency-plumbing":                    "/manus-storage/service-emergency-plumbing_c2ea2831.webp",
  "24-7-emergency-plumbing":               "/manus-storage/service-emergency-plumbing_c2ea2831.webp",
  "drain-cleaning":                        "/manus-storage/service-drain-cleaning_85675762.webp",
  "hydro-jetting":                         "/manus-storage/service-hydro-jetting_e0ce3d72.webp",
  "video-camera-inspection":               "/manus-storage/service-video-camera-inspection_a80ee887.webp",

  // Water Heaters
  "water-heater-repair":                   "/manus-storage/service-water-heater-repair_eb0f11ba.webp",
  "water-heater-installation":             "/manus-storage/service-water-heater-installation_b7268454.webp",
  "tankless-water-heater":                 "/manus-storage/service-tankless-water-heater_e4ff5b8e.webp",
  "tankless-water-heaters":                "/manus-storage/service-tankless-water-heater_e4ff5b8e.webp",
  "water-heater":                          "/manus-storage/service-water-heater_7dee83c2.webp",

  // Sewer Lines
  "sewer-line-repair":                     "/manus-storage/service-sewer-line-repair_5b4e6ab3.webp",
  "sewer-line-installation":               "/manus-storage/service-sewer-line-installation_5ef0c622.webp",
  "sewer-line":                            "/manus-storage/service-sewer-line_608c86f0.webp",

  // Water Lines & Pipe
  "water-line-repair":                     "/manus-storage/service-water-line-repair_19c1bddd.webp",
  "water-line-installation":               "/manus-storage/service-water-line-repair_19c1bddd.webp",
  "pipe-repair":                           "/manus-storage/service-pipe-repair_97801b59.webp",

  // Gas Lines
  "gas-line-repair":                       "/manus-storage/service-gas-line-repair_ba3ce19e.webp",
  "gas-line-installation":                 "/manus-storage/service-gas-line-installation_15ea462f.webp",
  "gas-line":                              "/manus-storage/service-gas-line_6882fb53.webp",
  "gas-leak-repair":                       "/manus-storage/service-gas-leak-repair_d5b82a39.webp",

  // Backflow — all route variants
  "backflow-prevention":                   "/manus-storage/service-backflow-prevention_a9ee0c58.webp",
  "backflow-certification":                "/manus-storage/service-backflow-prevention_a9ee0c58.webp",
  "backflow-preventer-repair":             "/manus-storage/service-backflow-prevention_a9ee0c58.webp",
  "backflow-certification-maryland":       "/manus-storage/service-backflow-prevention_a9ee0c58.webp",
  "backflow-certification-dc":             "/manus-storage/service-backflow-prevention_a9ee0c58.webp",
  "backflow-certification-virginia":       "/manus-storage/service-backflow-prevention_a9ee0c58.webp",

  // Boiler / Furnace
  "boiler-repair":                         "/manus-storage/service-boiler-repair_ac413440.webp",
  "boiler-furnace-repair":                 "/manus-storage/service-boiler-repair_ac413440.webp",
  "boiler-furnace-installation":           "/manus-storage/service-boiler-repair_ac413440.webp",

  // Fixtures
  "faucet-fixture":                        "/manus-storage/service-faucet-fixture_179c658a.webp",
  "faucet-toilet-repair":                  "/manus-storage/service-faucet-fixture_179c658a.webp",
  "toilet-repair":                         "/manus-storage/service-toilet-repair_b641f6c9.webp",

  // Water Softener
  "water-softener":                        "/manus-storage/service-water-softener_d8202344.webp",
  "water-softener-installation":           "/manus-storage/service-water-softener_d8202344.webp",

  // Commercial & Government
  "commercial-plumbing":                   "/manus-storage/service-commercial-plumbing_9b61a6cf.webp",
  "commercial-plumber-maryland":           "/manus-storage/service-commercial-plumbing_9b61a6cf.webp",
  "commercial-plumber-dc":                 "/manus-storage/service-commercial-plumbing_9b61a6cf.webp",
  "commercial-plumber-northern-virginia":  "/manus-storage/service-commercial-plumbing_9b61a6cf.webp",
  "government-municipal-plumbing":         "/manus-storage/service-commercial-plumbing_9b61a6cf.webp",
  "residential-plumbing":                  "/manus-storage/service-pipe-repair_97801b59.webp",
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
