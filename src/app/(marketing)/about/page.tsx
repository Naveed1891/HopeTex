import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { SectionBlock } from "@/components/templates/section-block";
import { Timeline } from "@/components/motion/timeline";
import { AboutBenefits } from "@/components/marketing/about-benefits";
import { aboutContent } from "@/lib/content";

export const metadata = buildMetadata("About", aboutContent.description);

export default function AboutPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title={aboutContent.headline}
          description={aboutContent.description}
        />
      }
    >
      <SectionBlock title="Our process">
        <Timeline
          steps={aboutContent.processSteps.map((s) => ({
            id: String(s.step),
            title: s.title,
            description: s.description,
            step: s.step,
          }))}
        />
      </SectionBlock>
      <SectionBlock title="Why HopeTex" stagger>
        <AboutBenefits benefits={aboutContent.benefits} />
      </SectionBlock>
    </PageLayout>
  );
}
