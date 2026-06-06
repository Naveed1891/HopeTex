import Link from "next/link";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { GradientHeading, GradientText } from "@/components/design-system/gradient-heading";
import { SectionBadge } from "@/components/design-system/section-badge";
import { ButtonLink } from "@/components/ui/button-link";
import { routes } from "@/config/routes";

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <div className="relative flex min-h-screen flex-col bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]">
        <SiteHeader />
        <main
          id="main-content"
          className="relative flex flex-1 flex-col items-center justify-center px-5 py-24 sm:px-8"
        >
          <div
            className="pointer-events-none absolute -left-[8%] top-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-[6%] bottom-20 h-80 w-80 rounded-full bg-sky-300/22 blur-3xl"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-xl text-center">
            <SectionBadge>Page not found</SectionBadge>
            <GradientHeading as="h1" className="mt-8">
              This page doesn&apos;t{" "}
              <GradientText>exist.</GradientText>
            </GradientHeading>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              The link may be outdated or the page may have moved. Explore our
              services or return to the homepage.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={routes.home} variant="premium" size="lg">
                Back to Home
              </ButtonLink>
              <ButtonLink href={routes.services.index} variant="premiumOutline" size="lg">
                Explore Services
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              Need help?{" "}
              <Link href={routes.company.contact} className="font-medium text-violet-600 hover:underline">
                Contact HopeTex
              </Link>
            </p>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
