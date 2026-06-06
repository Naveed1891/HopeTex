"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HeaderMobileMenuItemRow,
  HeaderMobileMenuOverview,
} from "@/components/layout/header-dropdown-menu";
import {
  getDropdownOverview,
  headerDropdownLinks,
  headerNavigation,
  type HeaderNavDropdown,
} from "@/config/header-navigation";
import { utilityLinks } from "@/config/navigation";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

function MobileAccordionSection({
  dropdown,
  onNavigate,
}: {
  dropdown: HeaderNavDropdown;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = headerDropdownLinks(dropdown).some(
    (l) => pathname === l.href || pathname.startsWith(`${l.href}/`)
  );

  return (
    <div className="mobile-nav-accordion">
      <button
        type="button"
        className={cn(
          "mobile-nav-accordion__trigger",
          (open || active) && "mobile-nav-accordion__trigger--active"
        )}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{dropdown.label}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 opacity-50 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          "mobile-nav-accordion__panel grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <ul className="mobile-nav-accordion__list overflow-hidden">
          {getDropdownOverview(dropdown) && (
            <li className="pb-1">
              <HeaderMobileMenuOverview
                overview={getDropdownOverview(dropdown)!}
                onClose={onNavigate}
              />
            </li>
          )}
          {dropdown.links.map((link) => (
            <li key={`${dropdown.label}-${link.label}-${link.href}`}>
              <HeaderMobileMenuItemRow link={link} onClose={onNavigate} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const close = () => setSheetOpen(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="min-[900px]:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="header-menu-trigger"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="mobile-nav-sheet flex w-full flex-col border-border/80 bg-surface-1 p-0 sm:max-w-[min(100%,22rem)]"
      >
        <SheetHeader className="border-b border-border/60 px-5 py-4 text-left">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
          aria-label="Mobile navigation"
        >
          {headerNavigation.map((entry) => {
            if (entry.type === "link") {
              const active =
                entry.href === routes.home
                  ? pathname === routes.home
                  : pathname === entry.href ||
                    pathname.startsWith(`${entry.href}/`);

              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  onClick={close}
                  className={cn(
                    "mobile-nav-top-link",
                    active && "mobile-nav-top-link--active"
                  )}
                >
                  {entry.label}
                </Link>
              );
            }

            return (
              <MobileAccordionSection
                key={entry.dropdown.label}
                dropdown={entry.dropdown}
                onNavigate={close}
              />
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 border-t border-border/60 px-5 py-5">
          <Link
            href={utilityLinks.clientPortal.href}
            onClick={close}
            className={cn(
              buttonVariants({ variant: "premiumOutline", size: "default" }),
              "w-full"
            )}
          >
            {utilityLinks.clientPortal.label}
          </Link>
          <Link
            href={utilityLinks.getStarted.href}
            onClick={close}
            className={cn(buttonVariants({ variant: "premium", size: "default" }), "w-full")}
          >
            {utilityLinks.getStarted.label}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
