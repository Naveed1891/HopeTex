"use client";

import Link from "next/link";
import { ArrowRight, Package as PackageIcon } from "lucide-react";
import { m } from "framer-motion";
import {
  getDropdownOverview,
  type HeaderNavDropdown,
  type HeaderNavLink,
  type HeaderNavOverview,
} from "@/config/header-navigation";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

const dropdownMotion = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.12, ease: easePremium },
  },
};

type MenuItemProps = {
  link: HeaderNavLink;
  onClose: () => void;
  className?: string;
};

export function HeaderMenuItemRow({ link, onClose, className }: MenuItemProps) {
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={cn("header-menu-item", className)}
    >
      {Icon && (
        <span className="header-menu-item__icon" aria-hidden>
          <Icon className="size-[1.05rem]" strokeWidth={1.75} />
        </span>
      )}
      <span className="header-menu-item__body">
        <span className="header-menu-item__title">{link.label}</span>
        {link.description && (
          <span className="header-menu-item__desc">{link.description}</span>
        )}
      </span>
      <ArrowRight className="header-menu-item__arrow" aria-hidden />
    </Link>
  );
}

type OverviewProps = {
  overview: HeaderNavOverview;
  onClose: () => void;
  featured?: boolean;
};

export function HeaderMenuOverviewCard({
  overview,
  onClose,
  featured = false,
}: OverviewProps) {
  const Icon = overview.icon ?? PackageIcon;

  return (
    <Link
      href={overview.href}
      onClick={onClose}
      className={cn(
        "header-menu-overview",
        featured && "header-menu-overview--featured"
      )}
    >
      <span className="header-menu-overview__icon" aria-hidden>
        <Icon className="size-[1.15rem]" strokeWidth={1.75} />
      </span>
      <span className="header-menu-overview__body">
        <span className="header-menu-overview__title">{overview.title}</span>
        {overview.description && (
          <span className="header-menu-overview__desc">{overview.description}</span>
        )}
      </span>
      <ArrowRight className="header-menu-overview__arrow" aria-hidden />
    </Link>
  );
}

type PanelProps = {
  dropdown: HeaderNavDropdown;
  onClose: () => void;
  align?: "start" | "center" | "end";
};

function dropdownPanelVariant(label: string): string {
  switch (label) {
    case "Company Formation":
      return "header-dropdown-panel--formation";
    case "Services":
      return "header-dropdown-panel--services-menu";
    case "Packages":
      return "header-dropdown-panel--packages-menu";
    case "About":
      return "header-dropdown-panel--about-menu";
    default:
      return "";
  }
}

export function HeaderDropdownPanel({ dropdown, onClose, align = "start" }: PanelProps) {
  const overview = getDropdownOverview(dropdown);
  const isPackages = dropdown.label === "Packages";
  const isGrid = dropdown.layout === "grid";
  const isFeaturedOverview = isPackages || Boolean(overview?.description);

  return (
    <m.div
      role="menu"
      aria-label={`${dropdown.label} menu`}
      {...dropdownMotion}
      className={cn(
        "header-dropdown-panel",
        dropdownPanelVariant(dropdown.label),
        isGrid && "header-dropdown-panel--grid",
        align === "end" && "header-dropdown-panel--align-end"
      )}
    >
      {overview && (
        <>
          <HeaderMenuOverviewCard
            overview={overview}
            onClose={onClose}
            featured={isFeaturedOverview}
          />
          <div className="header-dropdown-divider" role="presentation" />
        </>
      )}

      <div
        className={cn(
          isGrid ? "header-dropdown-grid" : "header-dropdown-stack"
        )}
      >
        {dropdown.links.map((link) => (
          <HeaderMenuItemRow
            key={`${dropdown.label}-${link.label}-${link.href}`}
            link={link}
            onClose={onClose}
          />
        ))}
      </div>
    </m.div>
  );
}

/** Mobile accordion row — same content hierarchy, compact layout */
export function HeaderMobileMenuItemRow({
  link,
  onClose,
}: MenuItemProps) {
  const Icon = link.icon;

  return (
    <Link href={link.href} onClick={onClose} className="header-mobile-menu-item">
      {Icon && (
        <span className="header-mobile-menu-item__icon" aria-hidden>
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
      )}
      <span className="header-mobile-menu-item__body">
        <span className="header-mobile-menu-item__title">{link.label}</span>
        {link.description && (
          <span className="header-mobile-menu-item__desc">{link.description}</span>
        )}
      </span>
      <ArrowRight className="header-mobile-menu-item__arrow" aria-hidden />
    </Link>
  );
}

export function HeaderMobileMenuOverview({
  overview,
  onClose,
}: OverviewProps) {
  const Icon = overview.icon;

  return (
    <Link href={overview.href} onClick={onClose} className="header-mobile-menu-overview">
      {Icon && (
        <span className="header-mobile-menu-item__icon" aria-hidden>
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
      )}
      <span className="header-mobile-menu-item__body">
        <span className="header-mobile-menu-item__title">{overview.title}</span>
        {overview.description && (
          <span className="header-mobile-menu-item__desc">{overview.description}</span>
        )}
      </span>
      <ArrowRight className="header-mobile-menu-item__arrow" aria-hidden />
    </Link>
  );
}
