import { ReviewsSection } from "@/components/home/reviews-section";
import { CinematicHero } from "@/components/marketing/cinematic-hero";
import { HomepageSections } from "@/components/marketing/homepage-sections";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "HopeTex Limited - Where Ideas Become Companies" },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <ReviewsSection />
      <HomepageSections />
    </>
  );
}
