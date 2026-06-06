import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { CatalogGrid } from "@/components/marketing/catalog-grid";
import { servicesCatalog } from "@/lib/content";
import { routes } from "@/config/routes";
import type { CatalogItem } from "@/components/marketing/catalog-grid";

const icons: Record<string, NonNullable<CatalogItem["icon"]>> = {
  ein: "Fingerprint",
  itin: "FileCheck",
  boir: "Shield",
  duns: "Layers",
  trademark: "Scale",
  "sellers-permit": "Stamp",
  "annual-filing": "FileCheck",
};

export const metadata = buildMetadata(
  "Compliance Services",
  "EIN, ITIN, BOIR, D-U-N-S, trademark, and ongoing US compliance."
);

export default function ServicesIndexPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Compliance"
          title="Stay compliant as you scale"
          description="Tax IDs, regulatory filings, and corporate authority services — handled by experts who understand global founders."
        />
      }
    >
      <CatalogGrid
        items={servicesCatalog.map((s) => ({
          title: s.title,
          description: s.description,
          href: `${routes.services.index}/${s.slug}`,
          icon: icons[s.slug],
        }))}
      />
    </PageLayout>
  );
}
