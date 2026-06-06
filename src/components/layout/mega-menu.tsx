"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mainNavLinkClass } from "@/components/layout/nav-link-styles";
import { mainNavigation, type NavGroup, type NavLink } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { transitionBase } from "@/lib/motion";

function flattenColumnLinks(group: NavGroup): NavLink[] {
  return group.columns?.flatMap((col) => col.links) ?? [];
}

function isWideMegaMenu(group: NavGroup): boolean {
  return Boolean(group.featured && group.columns?.length);
}

function FeaturedCard({
  item,
  onClose,
}: {
  item: NavLink;
  onClose: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={cn(
        "group flex h-full min-h-[280px] flex-col rounded-xl border border-border",
        "bg-surface-2 p-8 transition-all duration-200",
        "hover:border-primary/30 hover:bg-accent/50 hover:shadow-md",
        "dark:hover:border-primary/40 dark:hover:bg-accent/30"
      )}
    >
      {Icon && (
        <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-tint-brand text-primary">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      )}
      <h3 className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
        {item.label}
      </h3>
      {item.description && (
        <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      )}
      <span className="mt-auto pt-8 text-sm font-medium text-brand-secondary-dark dark:text-brand-secondary">
        Learn more →
      </span>
    </Link>
  );
}

function ServiceLinkCard({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={cn(
        "group flex h-full min-h-[100px] flex-col rounded-xl border border-border bg-card p-5",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-primary/25 hover:bg-accent/60 hover:shadow-md",
        "dark:bg-surface-1 dark:hover:bg-accent/40"
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
              "bg-muted text-muted-foreground transition-colors",
              "group-hover:bg-primary/10 group-hover:text-primary"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </span>
        )}
        <span className="whitespace-nowrap text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {link.label}
        </span>
      </div>
      {link.description && (
        <p className="mt-3 line-clamp-2 text-[13px] leading-snug text-muted-foreground">
          {link.description}
        </p>
      )}
    </Link>
  );
}

function WideMegaPanel({
  group,
  onClose,
}: {
  group: NavGroup;
  onClose: () => void;
}) {
  const links = flattenColumnLinks(group);

  return (
    <m.div
      role="region"
      aria-label={`${group.label} menu`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={transitionBase}
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-popover shadow-xl",
        "min-w-[min(100vw-2rem,900px)] max-w-[min(100vw-2rem,1100px)]",
        "w-[min(100vw-2rem,1100px)]"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,300px)_1fr]">
        {group.featured && (
          <div className="border-b border-border p-6 lg:border-b-0 lg:border-r lg:p-8">
            <FeaturedCard item={group.featured} onClose={onClose} />
          </div>
        )}
        <div className="p-6 lg:p-8">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {group.label}
          </p>
          <ul className="grid list-none grid-cols-1 gap-4 p-0 m-0 sm:grid-cols-2 sm:gap-6">
            {links.map((link) => (
              <li key={link.href} className="min-w-0">
                <ServiceLinkCard link={link} onClose={onClose} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </m.div>
  );
}

function CompactMegaPanel({
  group,
  onClose,
}: {
  group: NavGroup;
  onClose: () => void;
}) {
  const links = group.links ?? [];

  return (
    <m.div
      role="region"
      aria-label={`${group.label} menu`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={transitionBase}
      className="max-w-[min(100vw-2rem,320px)] overflow-hidden rounded-xl border border-border bg-popover p-3 shadow-xl"
    >
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className={cn(
                "group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                "hover:bg-accent dark:hover:bg-accent/50"
              )}
            >
              {link.icon && (
                <link.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
              )}
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-sm font-medium text-foreground">
                  {link.label}
                </span>
                {link.description && (
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {link.description}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </m.div>
  );
}

function MegaPanel({ group, onClose }: { group: NavGroup; onClose: () => void }) {
  if (isWideMegaMenu(group)) {
    return <WideMegaPanel group={group} onClose={onClose} />;
  }
  return <CompactMegaPanel group={group} onClose={onClose} />;
}

function NavItem({
  group,
  alignRight = false,
  isOpen,
  onOpenChange,
}: {
  group: NavGroup;
  alignRight?: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const hasDropdown = Boolean(group.columns?.length || group.links?.length);
  const isActive =
    group.href === pathname ||
    group.columns?.some((c) => c.links.some((l) => l.href === pathname)) ||
    group.links?.some((l) => l.href === pathname);

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  if (!hasDropdown && group.href) {
    return (
      <Link href={group.href} className={mainNavLinkClass(isActive)}>
        {group.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        className={cn(
          mainNavLinkClass(isOpen || isActive),
          "inline-flex items-center gap-1 border-0 bg-transparent"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => onOpenChange(!isOpen)}
      >
        {group.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <div
            className={cn(
              "absolute top-full z-[100] max-h-[min(70vh,calc(100svh-6rem))] max-w-[calc(100vw-2rem)] overflow-y-auto pt-3",
              alignRight ? "right-0 left-auto" : "left-0"
            )}
          >
            <MegaPanel group={group} onClose={close} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MegaMenu() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <>
      {mainNavigation.map((group, index) => (
        <NavItem
          key={group.label}
          group={group}
          alignRight={index >= mainNavigation.length - 2}
          isOpen={openLabel === group.label}
          onOpenChange={(open) => setOpenLabel(open ? group.label : null)}
        />
      ))}
    </>
  );
}
