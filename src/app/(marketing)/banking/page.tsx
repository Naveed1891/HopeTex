import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { CatalogGrid } from "@/components/marketing/catalog-grid";
import { CTASection } from "@/components/design-system/cta-section";
import { SectionBlock } from "@/components/templates/section-block";
import { GlassCard } from "@/components/design-system/glass-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { bankingCatalog, bankingPages } from "@/lib/content";
import { routes } from "@/config/routes";
import { PrimaryButtonLink } from "@/components/design-system/primary-button-link";
import { ButtonLink } from "@/components/ui/button-link";
import { Check } from "lucide-react";

export const metadata = buildMetadata(
  "Banking & Payment Solutions",
  "PayPal, business banking, and merchant account support for global founders."
);

export default function BankingIndexPage() {
  const page = bankingPages.index;

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
      <SectionBlock title="Solutions we support">
        <CatalogGrid items={bankingCatalog} />
      </SectionBlock>

      {page.tiers && (
        <SectionBlock id="paypal-packages" title="PayPal packages">
          <div className="grid gap-5 md:grid-cols-2">
            {page.tiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.04}>
                <GlassCard hover={false} className="flex h-full flex-col">
                  <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                    {tier.price}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <PrimaryButtonLink href={routes.company.contact} variant="tier">
                    Get started
                  </PrimaryButtonLink>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </SectionBlock>
      )}

      <SectionBlock>
        <CTASection
          title="Ready to unlock payments?"
          highlight="payments"
          description="From PayPal to Stripe and business banking — HopeTex guides you through every step."
          primaryHref={routes.company.contact}
          primaryLabel="Contact us"
          secondaryHref={routes.banking.merchants}
          secondaryLabel="Merchant solutions"
        />
      </SectionBlock>
    </PageLayout>
  );
}
