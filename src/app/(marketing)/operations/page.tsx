import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { CatalogGrid } from "@/components/marketing/catalog-grid";
import { CTASection } from "@/components/design-system/cta-section";
import { SectionBlock } from "@/components/templates/section-block";
import { operationsCatalog, operationsPages } from "@/lib/content";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = buildMetadata(
  "Address & Phone Services",
  "Professional address and phone number services for UK and US businesses."
);

export default function OperationsIndexPage() {
  const page = operationsPages.index;

  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          titleHighlight={page.titleHighlight}
          description={page.description}
          actions={
            <ButtonLink href={routes.company.contact} variant="premium" size="lg">
              Get started
            </ButtonLink>
          }
        />
      }
    >
      <SectionBlock>
        <CatalogGrid items={operationsCatalog} />
      </SectionBlock>
      <SectionBlock>
        <CTASection
          title="Need the right address or phone setup?"
          highlight="address"
          description="HopeTex helps you choose the right operational package for banking, compliance, and global credibility."
          primaryHref={routes.company.contact}
          primaryLabel="Contact us"
          secondaryHref={routes.packages}
          secondaryLabel="View packages"
        />
      </SectionBlock>
    </PageLayout>
  );
}
