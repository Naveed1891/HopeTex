import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { FeaturePoints, type FeaturePoint } from "@/components/marketing/feature-showcase/feature-points";
import { SectionEyebrow } from "@/components/marketing/feature-showcase/section-eyebrow";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureRowProps = {
  eyebrowIcon: LucideIcon;
  eyebrow: string;
  headline: React.ReactNode;
  description: string;
  points: FeaturePoint[];
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
  reverse?: boolean;
};

export function FeatureRow({
  eyebrowIcon,
  eyebrow,
  headline,
  description,
  points,
  imageSrc,
  imageAlt,
  imagePriority = false,
  reverse = false,
}: FeatureRowProps) {
  return (
    <article
      className={cn(
        "feature-row-panel",
        reverse && "feature-row-panel--reverse"
      )}
    >
      <div
        className={cn(
          "feature-row-grid",
          reverse && "feature-row-grid--reverse"
        )}
      >
        <ScrollReveal className="feature-row-copy">
          <SectionEyebrow icon={eyebrowIcon} label={eyebrow} />
          <h3 className="feature-row-headline">{headline}</h3>
          <div className="feature-row-divider" aria-hidden />
          <p className="feature-row-description">{description}</p>
          <FeaturePoints items={points} />
          <Button variant="premium" size="lg" className="mt-9 w-full sm:w-auto" asChild>
            <Link href="#get-started">
              Let&apos;s Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="feature-row-visual">
          <div className="feature-row-visual__frame">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={720}
              height={560}
              priority={imagePriority}
              quality={85}
              loading={imagePriority ? undefined : "lazy"}
              className="feature-row-visual__img"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 560px"
            />
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
