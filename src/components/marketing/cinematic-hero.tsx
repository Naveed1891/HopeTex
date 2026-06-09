"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingImages } from "@/config/images";
import { routes } from "@/config/routes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CinematicHero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="cinematic-hero"
      className={cn(
        "hero-section relative isolate min-h-[calc(100svh-76px)] overflow-hidden text-foreground",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]"
      )}
    >
      {/* Hero background artwork — full section, highest quality (unoptimized WebP) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={marketingImages.heroRightVisual}
          alt=""
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="hero-artwork-image object-cover object-[right_center]"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#fbf7ff_0%,#fbf7ff_28%,rgba(251,247,255,0.92)_40%,rgba(251,247,255,0.5)_52%,rgba(251,247,255,0.12)_62%,transparent_75%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-[#fbf7ff]/80 to-transparent max-lg:h-40 max-lg:from-[#fbf7ff]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#e7f7ff] via-[#f8f4ff]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-20 bg-gradient-to-l from-[#e7f7ff]/45 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative z-20 w-full max-w-[900px]">
            <m.span
              initial={reduced ? false : "hidden"}
              animate={reduced ? undefined : "visible"}
              variants={fadeUp}
              className="ref-badge mb-6 max-lg:mx-auto max-lg:flex max-lg:w-fit"
            >
              <Crown className="h-4 w-4 shrink-0 text-purple-700" aria-hidden />
              #1 US COMPANY FORMATION SERVICE
            </m.span>

            <h1 className="mt-6 max-w-[900px] text-[clamp(3rem,5vw,5.7rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950">
              <span className="block">
                Start Your{" "}
                
                
              </span>
              <span className="inline bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  US LLC
                </span>
              <span className="block">with HopeTex</span>
              
            </h1>

            <p className="hero-subtitle mt-6 max-w-[650px] text-[clamp(1.05rem,1.1vw,1.22rem)] leading-[1.7] tracking-[-0.01em] text-slate-600">
              Launch, manage, and scale your business across the US, UK, and global markets with
              HopeTex.
            </p>
            <m.div
              initial={reduced ? false : "hidden"}
              animate={reduced ? undefined : "visible"}
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
              initial={reduced ? false : "hidden"}
              animate={reduced ? undefined : "visible"}
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
        </div>
      </div>
    </section>
  );
}
