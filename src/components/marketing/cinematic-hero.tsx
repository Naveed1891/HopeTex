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
      <div
        className="hero-artwork-layer pointer-events-none absolute inset-y-0 left-[26%] right-0 z-0 hidden lg:block"
        aria-hidden
      >
        <Image
          src={marketingImages.heroRightVisual}
          alt=""
          fill
          priority
          quality={90}
          sizes="(min-width: 1536px) 1180px, (min-width: 1024px) 74vw, 100vw"
          className="object-cover"
          style={{
            objectPosition: "right center",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 4%, rgba(0,0,0,0.55) 8%, rgba(0,0,0,0.88) 12%, #000 16%, #000 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 4%, rgba(0,0,0,0.55) 8%, rgba(0,0,0,0.88) 12%, #000 16%, #000 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-[-120px] z-10 w-[200px] bg-white/95 blur-[56px]" />
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-[34%] w-[11%] bg-gradient-to-br from-white via-[#fbf7ff]/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[34%] w-[11%] bg-gradient-to-tr from-white via-[#fbf7ff]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[12%] bg-gradient-to-b from-[#f8f4ff]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[14%] bg-gradient-to-t from-[#e7f7ff]/35 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-l from-[#e7f7ff]/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
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
