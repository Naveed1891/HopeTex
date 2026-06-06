import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { PricingGrid } from "@/components/pricing/pricing-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Packages & Pricing",
  "US LLC formation packages — Essential, Enhanced, Elite, and Pro."
);

export default function PackagesPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          eyebrow="Pricing"
          title="Packages built for every stage"
          description="Transparent US LLC formation pricing. State fees apply separately. Upgrade anytime as your business grows."
          actions={
            <ButtonLink href={routes.client.register} variant="premium" size="lg">
              Get started
            </ButtonLink>
          }
        />
      }
    >
      <SectionBlock>
        <PricingGrid />
      </SectionBlock>
    </PageLayout>
  );
}
