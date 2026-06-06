import dynamic from "next/dynamic";
import { SectionSkeleton } from "@/components/marketing/section-skeleton";

const TrustedByFounders = dynamic(
  () =>
    import("@/components/marketing/trusted-by-founders").then(
      (mod) => mod.TrustedByFounders
    ),
  { loading: () => <SectionSkeleton className="min-h-[320px]" /> }
);

const TrustedCredentials = dynamic(
  () =>
    import("@/components/home/trusted-credentials").then(
      (mod) => mod.TrustedCredentials
    ),
  { loading: () => <SectionSkeleton className="min-h-[420px]" /> }
);

const FeatureShowcaseSection = dynamic(
  () =>
    import("@/components/marketing/feature-showcase").then(
      (mod) => mod.FeatureShowcaseSection
    ),
  { loading: () => <SectionSkeleton className="min-h-[520px]" /> }
);

const HowItWorks = dynamic(
  () => import("@/components/home/how-it-works").then((mod) => mod.HowItWorks),
  { loading: () => <SectionSkeleton className="min-h-[480px]" /> }
);

const WhyChooseUs = dynamic(
  () => import("@/components/home/why-choose-us").then((mod) => mod.WhyChooseUs),
  { loading: () => <SectionSkeleton className="min-h-[520px]" /> }
);

const EmpowerBusinessSection = dynamic(
  () =>
    import("@/components/home/empower-business-section").then(
      (mod) => mod.EmpowerBusinessSection
    ),
  { loading: () => <SectionSkeleton className="min-h-[420px]" /> }
);

const FaqSection = dynamic(
  () => import("@/components/home/faq-section").then((mod) => mod.FaqSection),
  { loading: () => <SectionSkeleton className="min-h-[480px]" /> }
);

export function HomepageSections() {
  return (
    <>
      <TrustedByFounders />
      <TrustedCredentials />
      <FeatureShowcaseSection />
      <HowItWorks />
      <WhyChooseUs />
      <EmpowerBusinessSection />
      <FaqSection />
    </>
  );
}
