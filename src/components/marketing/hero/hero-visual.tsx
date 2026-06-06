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
        "hero-visual relative z-10 flex min-h-[480px] w-full min-w-0 items-center justify-center overflow-visible",
        "max-lg:min-h-[520px] lg:min-h-[560px]"
      )}
      aria-hidden
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easePremium }}
    >
      <div
        className={cn(
          "hero-statue-layer pointer-events-none absolute inset-y-[-4rem] right-[-3rem] z-0 hidden w-[clamp(520px,38vw,680px)] max-w-[680px] lg:block",
          "xl:inset-y-[-5rem] xl:right-[-3.5rem]"
        )}
        aria-hidden
      >
        <Image
          src={marketingImages.heroSkylineStatue}
          alt=""
          fill
          priority
          quality={85}
          sizes="(min-width: 1024px) 680px, 0px"
          className="hero-statue-image object-cover opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,transparent_0%,transparent_42%,rgba(255,255,255,0.72)_70%,rgba(255,255,255,0.96)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-[#eef8ff] via-[#eef8ff]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#eef8ff] via-[#eef8ff]/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-[#f8f4ff] via-[#f8f4ff]/50 to-transparent" />
      </div>

      <div
        className={cn(
          "visual-cards hero-cards relative z-20 mx-auto flex w-full max-w-[720px] min-w-0 items-center justify-center gap-[clamp(1rem,2.5vw,1.75rem)]",
          "translate-x-[clamp(0rem,2.5vw,2.25rem)]",
          "max-lg:translate-x-0 max-lg:flex-col max-lg:gap-5"
        )}
      >
        <HeroProcessCard />
        <div className="shrink-0 max-lg:flex max-lg:w-full max-lg:justify-center lg:mt-8">
          <HeroSuccessCard />
        </div>
      </div>
    </m.div>
  );
}
