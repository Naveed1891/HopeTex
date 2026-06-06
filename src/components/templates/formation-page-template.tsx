"use client";

import type { FormationContent } from "@/lib/content/types";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { FaqAccordion } from "@/components/templates/faq-accordion";
import { Timeline } from "@/components/motion/timeline";
import { DepthCard } from "@/components/motion/depth-card";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { ButtonLink } from "@/components/ui/button-link";
import { routes } from "@/config/routes";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type FormationPageTemplateProps = {
  formation: FormationContent;
};

export function FormationPageTemplate({ formation }: FormationPageTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow="Company formation"
        title={formation.headline}
        description={formation.subtitle}
        actions={
          <>
            <ButtonLink href={routes.packages} variant="premium" size="lg">
              View packages
            </ButtonLink>
            <ButtonLink href={routes.client.register} variant="premiumOutline" size="lg">
              Get started
            </ButtonLink>
          </>
        }
      />

      <SectionBlock title="Formation process">
        <Timeline
          steps={formation.processSteps.map((s) => ({
            id: String(s.step),
            title: s.title,
            description: s.description,
            step: s.step,
          }))}
        />
      </SectionBlock>

      <SectionBlock title="The HopeTex advantage" stagger>
        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formation.benefits.map((b) => (
            <m.div key={b.title} variants={fadeUp}>
              <DepthCard>
                <h3 className="font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </DepthCard>
            </m.div>
          ))}
        </StaggerChildren>
      </SectionBlock>

      {formation.faqs.length > 0 && (
        <SectionBlock title="Frequently asked questions">
          <FaqAccordion
            items={formation.faqs.map((f, i) => ({
              id: `${formation.slug}-faq-${i}`,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </SectionBlock>
      )}
    </>
  );
}
