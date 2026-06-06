"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { HeaderDesktopNav } from "@/components/layout/header-desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { utilityLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-visible">
      <AnnouncementBanner />
      <div className="site-header-bar overflow-visible">
        <div className="header-inner mx-auto flex h-[4.125rem] w-full min-w-0 max-w-[1440px] items-center gap-2 overflow-visible px-4 sm:gap-3 sm:px-6 lg:h-[4.25rem] lg:gap-3 lg:px-8 xl:px-10">
          <Logo className="shrink-0 lg:-ml-0.5" />

          <div className="hidden min-w-0 flex-1 justify-center overflow-visible min-[900px]:flex">
            <HeaderDesktopNav />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
            <Link
              href={utilityLinks.clientPortal.href}
              className={cn(
                buttonVariants({ variant: "premiumOutline", size: "sm" }),
                "hidden shrink-0 xl:inline-flex lg:max-xl:px-3 lg:max-xl:text-xs"
              )}
            >
              {utilityLinks.clientPortal.label}
            </Link>
            <Link
              href={utilityLinks.getStarted.href}
              className={cn(
                buttonVariants({ variant: "premium", size: "sm" }),
                "hidden shrink-0 sm:inline-flex lg:max-xl:px-3 lg:max-xl:text-xs"
              )}
            >
              {utilityLinks.getStarted.label}
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
