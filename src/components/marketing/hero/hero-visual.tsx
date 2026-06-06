"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { HeroProcessCard } from "@/components/marketing/hero/hero-process-card";
import { HeroSuccessCard } from "@/components/marketing/hero/hero-success-card";
import { marketingImages } from "@/config/images";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={cn(
        "hero-visual relative z-10 min-h-[560px] w-full min-w-0 overflow-visible",
        "max-xl:min-h-[560px] max-lg:min-h-[520px] max-md:min-h-[720px]"
      )}
      aria-hidden
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easePremium }}
    >
      <div
        className={cn(
          "hero-statue-layer pointer-events-none absolute inset-y-[-90px] right-[-70px] z-0 hidden w-[680px] lg:block",
          "xl:right-[-90px] xl:w-[720px]"
        )}
        aria-hidden
      >
        <Image
          src={marketingImages.heroSkylineStatue}
          alt=""
          fill
          priority
          quality={85}
          sizes="680px"
          className="object-cover opacity-[0.76]"
          style={{ objectPosition: "76% center" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,transparent_0%,transparent_42%,rgba(255,255,255,0.72)_70%,rgba(255,255,255,0.96)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-[#eef8ff] via-[#eef8ff]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#eef8ff] via-[#eef8ff]/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-[#f8f4ff] via-[#f8f4ff]/50 to-transparent" />
      </div>

      <div
        className={cn(
          "visual-cards hero-cards relative z-20 flex min-h-[560px] w-full items-center justify-center gap-6",
          "lg:-translate-x-12 xl:-translate-x-16 xl:gap-7 2xl:-translate-x-20",
          "max-xl:min-h-[560px] max-lg:min-h-[530px] max-lg:gap-5",
          "max-md:min-h-0 max-md:translate-x-0 max-md:flex-col max-md:gap-5"
        )}
      >
        <HeroProcessCard />
        <div className="shrink-0 min-[900px]:mt-8 max-md:mt-0 max-md:flex max-md:w-full max-md:justify-center">
          <HeroSuccessCard />
        </div>
      </div>
    </m.div>
  );
}
