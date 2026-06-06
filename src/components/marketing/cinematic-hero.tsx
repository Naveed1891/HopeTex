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
          "hero-inner relative z-10 mx-auto grid w-full min-w-0 max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-16",
          "min-h-0 sm:px-8 lg:min-h-[760px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-10 lg:py-20",
          "xl:gap-14 xl:px-12"
        )}
      >
        <m.div
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "visible"}
          variants={staggerContainer}
          className={cn(
            "hero-copy relative z-20 w-full min-w-0 max-w-[720px] justify-self-start overflow-visible text-left",
            "max-lg:mx-auto max-lg:text-center"
          )}
        >
          <m.span variants={fadeUp} className="ref-badge mb-6 max-lg:mx-auto">
            <Crown className="h-4 w-4 shrink-0 text-purple-700" aria-hidden />
            #1 US COMPANY FORMATION SERVICE
          </m.span>
          <h1
            id="cinematic-hero-title"
            className={cn(
              "hero-title max-w-[720px] overflow-visible text-[clamp(3.1rem,4vw,5.25rem)] font-extrabold leading-[1.03] tracking-[-0.052em] text-slate-950",
              "max-sm:text-[clamp(2.15rem,7.5vw,2.85rem)] max-lg:mx-auto"
            )}
          >
            <span className="block">
              Start Your{" "}
              <span className="hero-gradient-text">US LLC</span>
            </span>
            <span className="block">
              &{" "}
              <span className="hero-gradient-text">Global Business</span>
            </span>
            <span className="block">with HopeTex</span>
          </h1>
          <p
            className={cn(
              "hero-subtitle mt-6 max-w-[620px] text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.75] tracking-[-0.01em] text-slate-600",
              "max-lg:mx-auto max-lg:leading-[1.7]"
            )}
          >
            Launch, manage, and scale your business across the US, UK, and global markets with
            HopeTex.
          </p>
          <m.div
            variants={fadeUp}
            className={cn(
              "mt-9 flex flex-wrap items-center gap-4",
              "max-lg:justify-center max-sm:flex-col max-sm:items-stretch"
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
              "max-lg:justify-center"
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
