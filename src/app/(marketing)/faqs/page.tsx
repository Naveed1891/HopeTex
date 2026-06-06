import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { FaqAccordion } from "@/components/templates/faq-accordion";
import { faqsContent } from "@/lib/content";

export const metadata = buildMetadata(
  "FAQs",
  "Answers to common questions about HopeTex formation and compliance services."
);

export default function FaqsPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Frequently asked questions"
          description="Everything you need to know about working with HopeTex."
        />
      }
      narrow
    >
      <SectionBlock>
        <FaqAccordion
          items={faqsContent.map((f, i) => ({
            id: `faq-${i}`,
            ...f,
          }))}
        />
      </SectionBlock>
    </PageLayout>
  );
}
