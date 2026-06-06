"use client";

import type { ServiceContent } from "@/lib/content/types";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { FaqAccordion } from "@/components/templates/faq-accordion";
import { Timeline } from "@/components/motion/timeline";
import { DepthCard } from "@/components/motion/depth-card";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { formatCurrency } from "@/lib/utils";
import { routes } from "@/config/routes";
import { getServiceForm } from "@/config/forms";
import { ServiceFormWizard } from "@/components/forms/service-form-wizard";
import { Check } from "lucide-react";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type ServicePageTemplateProps = {
  service: ServiceContent;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const form = getServiceForm(service.id);
  const defaultSteps = [
    {
      id: "1",
      title: "Submit application",
      step: 1,
      description: "Complete our secure intake form with your business details.",
    },
    {
      id: "2",
      title: "Expert review",
      step: 2,
      description: "Our team reviews your application for accuracy.",
    },
    {
      id: "3",
      title: "Authority filing",
      step: 3,
      description: "We file with the relevant authority on your behalf.",
    },
    {
      id: "4",
      title: "Receive documents",
      step: 4,
      description: "Official documents delivered to your portal.",
    },
  ];

  const steps =
    service.processSteps.length > 0
      ? service.processSteps.map((s) => ({
          id: String(s.step),
          title: s.title,
          description: s.description,
          step: s.step,
        }))
      : defaultSteps;

  return (
    <>
      <PageHero
        eyebrow="Compliance service"
        title={service.title}
        description={service.description}
        badge={
          service.price
            ? `From ${formatCurrency(service.price.amount, service.price.currency)}`
            : undefined
        }
        actions={
          <>
            <ButtonLink href={routes.client.register} variant="premium" size="lg">
              Start application
            </ButtonLink>
            <ButtonLink href={routes.company.contact} variant="premiumOutline" size="lg">
              Talk to an expert
            </ButtonLink>
          </>
        }
      />

      {service.benefits.length > 0 && (
        <SectionBlock title="Why founders choose HopeTex" stagger>
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b) => (
              <m.div key={b} variants={fadeUp}>
                <DepthCard className="flex gap-3 p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
                  <p className="text-sm leading-relaxed">{b}</p>
                </DepthCard>
              </m.div>
            ))}
          </StaggerChildren>
        </SectionBlock>
      )}

      <SectionBlock title="How it works">
        <Timeline steps={steps} />
      </SectionBlock>

      {service.faqs.length > 0 && (
        <SectionBlock
          title="Frequently asked questions"
          description="Clear answers before you apply."
        >
          <FaqAccordion
            items={service.faqs.map((f, i) => ({
              id: `${service.slug}-faq-${i}`,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </SectionBlock>
      )}

      {form && (
        <SectionBlock title="Start your application" id="apply">
          <ScrollReveal>
            <ServiceFormWizard config={form} />
          </ScrollReveal>
        </SectionBlock>
      )}
    </>
  );
}
