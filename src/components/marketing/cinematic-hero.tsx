"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import { HeroVisual } from "@/components/marketing/hero";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CinematicHero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="cinematic-hero"
      className={cn(
        "hero-section relative isolate min-h-[calc(100svh-76px)] overflow-hidden text-foreground",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#f7f1ff_42%,#e7f7ff_100%)]"
      )}
      aria-labelledby="cinematic-hero-title"
    >
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden />

      <div
        className={cn(
          "hero-inner relative z-10 mx-auto grid min-h-[760px] w-full min-w-0 max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-20",
          "sm:px-8",
          "lg:grid-cols-[minmax(640px,0.86fr)_minmax(680px,1.14fr)] lg:gap-12 lg:px-10 lg:py-24",
          "xl:gap-14 xl:px-12",
          "2xl:max-w-[1480px] 2xl:px-14"
        )}
      >
        <m.div
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "visible"}
          variants={staggerContainer}
          className={cn(
            "hero-copy relative z-20 w-full min-w-0 max-w-[720px] justify-self-start overflow-visible text-left",
            "max-md:mx-auto max-md:text-center"
          )}
        >
          <m.span variants={fadeUp} className="ref-badge mb-6 max-md:mx-auto">
            <Crown className="h-4 w-4 shrink-0 text-purple-700" aria-hidden />
            #1 US COMPANY FORMATION SERVICE
          </m.span>
          <h1
            id="cinematic-hero-title"
            className={cn(
              "hero-title max-w-[720px] overflow-visible text-[clamp(3.2rem,4.15vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.052em] text-slate-950",
              "max-md:mx-auto max-md:text-[clamp(2.15rem,7.5vw,2.85rem)]"
            )}
          >
            <span className="block whitespace-nowrap max-sm:whitespace-normal">
              Start Your{" "}
              <span className="hero-gradient-text">US LLC</span>
            </span>
            <span className="block whitespace-nowrap max-sm:whitespace-normal">
              &{" "}
              <span className="hero-gradient-text">Global Business</span>
            </span>
            <span className="block whitespace-nowrap max-sm:whitespace-normal">
              with HopeTex
            </span>
          </h1>
          <p
            className={cn(
              "hero-subtitle mt-6 max-w-[620px] text-lg leading-[1.75] tracking-[-0.01em] text-slate-600 sm:text-xl",
              "max-md:mx-auto max-md:text-base max-md:leading-[1.7]"
            )}
          >
            Launch, manage, and scale your business across the US, UK, and global markets with
            HopeTex.
          </p>
          <m.div
            variants={fadeUp}
            className={cn(
              "mt-9 flex flex-wrap items-center gap-4",
              "max-md:justify-center max-sm:flex-col max-sm:items-stretch"
            )}
          >
            <Button variant="premium" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#get-started">
                Start your company
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="premiumOutline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href={routes.services.index}>Explore services</Link>
            </Button>
          </m.div>
          <m.div
            variants={fadeUp}
            className={cn(
              "type-label mt-8 flex items-center gap-3 text-sm text-muted-foreground",
              "max-md:justify-center"
            )}
          >
            <Link href={routes.client.login} className="text-brand-secondary hover:underline">
              Client portal
            </Link>
            <span aria-hidden>·</span>
            <Link href={routes.trackOrder} className="hover:text-foreground hover:underline">
              Track order
            </Link>
          </m.div>
        </m.div>

        <HeroVisual />
      </div>
    </section>
  );
}
