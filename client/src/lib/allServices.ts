/**
 * Canonical list of all Definitive Mechanical services.
 * Sourced from serviceCategories.ts — single source of truth.
 * Used by all city pages to ensure every city shows every service.
 */

export type { } from './serviceCategories';
import { ALL_SERVICES_FLAT, ALL_SERVICE_CATEGORIES } from './serviceCategories';

export interface CityServiceItem {
  label: string;
  href: string;
}

// Flat list for backward-compat with city pages that iterate ALL_SERVICES
export const ALL_SERVICES: CityServiceItem[] = ALL_SERVICES_FLAT;

// Categorized list for city pages that want to show category headers
export { ALL_SERVICE_CATEGORIES };
