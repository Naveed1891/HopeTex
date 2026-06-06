import { formationsBySlug, formationsCatalog } from "@/lib/content/catalog-formations";
import { homepageContent } from "@/lib/content/catalog-homepage";
import { aboutContent, contactContent, faqsContent } from "@/lib/content/catalog-company";
import { legalCatalog } from "@/lib/content/catalog-legal";
import { servicesBySlug, servicesCatalog } from "@/lib/content/catalog-services";
import {
  operationsCatalog,
  operationsPages,
} from "@/lib/content/catalog-operations";
import { bankingCatalog, bankingPages } from "@/lib/content/catalog-banking";

export * from "@/lib/content/types";
export { homepageContent, aboutContent, contactContent, faqsContent };
export { servicesCatalog, servicesBySlug, formationsCatalog, formationsBySlug };
export { legalCatalog };
export { operationsCatalog, operationsPages, bankingCatalog, bankingPages };

export function getService(slug: string) {
  return servicesBySlug[slug];
}

export function getFormation(slug: string) {
  return formationsBySlug[slug];
}

export function getLegal(slug: keyof typeof legalCatalog) {
  return legalCatalog[slug];
}

export function getAllServiceSlugs() {
  return servicesCatalog.map((s) => s.slug);
}

export function getAllFormationSlugs() {
  return formationsCatalog.map((f) => f.slug);
}
