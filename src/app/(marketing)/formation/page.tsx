import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { CatalogGrid } from "@/components/marketing/catalog-grid";
import { formationsCatalog } from "@/lib/content";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";

const icons: Record<string, "Building2" | "Landmark" | "Globe2"> = {
  "usa-llc": "Building2",
  "uk-ltd": "Landmark",
  "pk-pvt": "Globe2",
};

export const metadata = buildMetadata(
  "Company Formation",
  "US LLC, UK LTD, and international entity registration."
);

export default function FormationIndexPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Company formation"
          title="Incorporate anywhere you grow"
          description="Entity formation across the United States, United Kingdom, and international jurisdictions — with compliance built in from day one."
          actions={
            <ButtonLink href={routes.packages} variant="premium" size="lg">
              Compare packages
            </ButtonLink>
          }
        />
      }
    >
      <CatalogGrid
        items={formationsCatalog.map((f) => ({
          title: f.title,
          description: f.subtitle,
          href:
            f.slug === "usa-llc"
              ? routes.formations.usaLlc
              : f.slug === "uk-ltd"
                ? routes.formations.ukLtd
                : routes.formations.pkPvt,
          icon: icons[f.slug] ?? "Building2",
        }))}
      />
    </PageLayout>
  );
}
