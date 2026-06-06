import type { LegalContent } from "@/lib/content/types";
import { GlassCard } from "@/components/design-system/glass-card";
import { PageHero } from "@/components/templates/page-hero";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type LegalPageTemplateProps = {
  doc: LegalContent;
};

export function LegalPageTemplate({ doc }: LegalPageTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        description={
          doc.lastUpdated
            ? `Last updated ${doc.lastUpdated}`
            : doc.effectiveDate
              ? `Effective ${doc.effectiveDate}`
              : undefined
        }
      />
      <GlassCard hover={false} className="mx-auto max-w-3xl p-8 sm:p-10">
        <div className="space-y-10">
          {doc.sections.map((section) => (
            <ScrollReveal key={section.heading}>
              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                )}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </GlassCard>
    </>
  );
}
