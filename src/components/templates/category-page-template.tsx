import { GlassCard } from "@/components/design-system/glass-card";
import { CTASection } from "@/components/design-system/cta-section";
import { Breadcrumb } from "@/components/design-system/breadcrumb";
import { PageLayout } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { FaqAccordion } from "@/components/templates/faq-accordion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PrimaryButtonLink } from "@/components/design-system/primary-button-link";
import { ButtonLink } from "@/components/ui/button-link";
import { routes } from "@/config/routes";
import { Check } from "lucide-react";
import type { CategoryPageData } from "@/lib/content/catalog-operations";

type CategoryPageTemplateProps = {
  page: CategoryPageData;
  breadcrumbs: { label: string; href?: string }[];
  showTiers?: boolean;
};

export function CategoryPageTemplate({
  page,
  breadcrumbs,
  showTiers = true,
}: CategoryPageTemplateProps) {
  return (
    <PageLayout
      hero={
        <>
          <Breadcrumb items={breadcrumbs} />
          <PageHero
            eyebrow={page.eyebrow}
            title={page.title}
            titleHighlight={page.titleHighlight}
            description={page.description}
            actions={
              <ButtonLink href={routes.company.contact} variant="premium" size="lg">
                Talk to an expert
              </ButtonLink>
            }
          />
        </>
      }
    >
      <SectionBlock title="Why founders choose HopeTex">
        <ul className="grid gap-4 sm:grid-cols-2">
          {page.benefits.map((benefit) => (
            <ScrollReveal key={benefit}>
              <GlassCard className="flex items-start gap-3 p-5" hover={false}>
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 via-violet-600 to-sky-500 text-white">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{benefit}</span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </ul>
      </SectionBlock>

      {showTiers && page.tiers && page.tiers.length > 0 && (
        <SectionBlock title="Packages & pricing">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.tiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.04}>
                <GlassCard hover={false} className="flex h-full flex-col">
                  <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                    {tier.price}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {tier.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
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

      {page.faqs && page.faqs.length > 0 && (
        <SectionBlock title="Common questions">
          <FaqAccordion
            items={page.faqs.map((faq, index) => ({
              id: `faq-${index}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </SectionBlock>
      )}

      <SectionBlock>
        <CTASection
          title="Ready to move forward?"
          highlight="forward"
          description="Speak with HopeTex specialists and get the right package for your business."
          primaryHref={routes.company.contact}
          primaryLabel="Contact us"
          secondaryHref={routes.packages}
          secondaryLabel="View all packages"
        />
      </SectionBlock>
    </PageLayout>
  );
}
