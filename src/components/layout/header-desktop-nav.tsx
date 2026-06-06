"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { HeaderDropdownPanel } from "@/components/layout/header-dropdown-menu";
import { headerNavLinkClass } from "@/components/layout/nav-link-styles";
import {
  headerDropdownLinks,
  headerNavigation,
  type HeaderDropdownKey,
  type HeaderNavDropdown,
} from "@/config/header-navigation";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useId, useRef, useState } from "react";

function isDropdownActive(dropdown: HeaderNavDropdown, pathname: string) {
  return headerDropdownLinks(dropdown).some(
    (l) => pathname === l.href || pathname.startsWith(`${l.href}/`)
  );
}

type HeaderDropdownTriggerProps = {
  dropdown: HeaderNavDropdown;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
};

function HeaderDropdownTrigger({
  dropdown,
  isOpen,
  onOpen,
  onToggle,
  onClose,
}: HeaderDropdownTriggerProps) {
  const pathname = usePathname();
  const panelId = useId();
  const active = isDropdownActive(dropdown, pathname);
  const align = dropdown.panelAlign ?? "start";

  return (
    <div className="header-dropdown-trigger" onMouseEnter={onOpen}>
      <button
        type="button"
        className={cn(
          headerNavLinkClass(active || isOpen),
          "inline-flex items-center gap-1 border-0 bg-transparent"
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={isOpen ? panelId : undefined}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
      >
        {dropdown.label}
        <ChevronDown
          className={cn(
            "size-3.5 opacity-60 transition-transform duration-150",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          id={panelId}
          className={cn(
            "header-dropdown-anchor pointer-events-auto z-[100]",
            align === "center" && "header-dropdown-anchor--center",
            align === "end" && "header-dropdown-anchor--end"
          )}
          onMouseEnter={onOpen}
        >
          <HeaderDropdownPanel dropdown={dropdown} onClose={onClose} align={align} />
        </div>
      )}
    </div>
  );
}

export function HeaderDesktopNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<HeaderDropdownKey | null>(null);

  const openDropdown = useCallback((key: HeaderDropdownKey) => {
    setActiveDropdown(key);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((key: HeaderDropdownKey) => {
    setActiveDropdown((current) => (current === key ? null : key));
  }, []);

  useEffect(() => {
    closeDropdown();
  }, [pathname, closeDropdown]);

  useEffect(() => {
    if (!activeDropdown) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };

    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current?.contains(e.target as Node)) return;
      closeDropdown();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [activeDropdown, closeDropdown]);

  return (
    <nav
      ref={navRef}
      className="relative hidden min-w-0 items-center gap-0.5 overflow-visible min-[900px]:flex min-[900px]:max-xl:gap-0 xl:gap-1"
      aria-label="Main navigation"
      onMouseLeave={closeDropdown}
    >
      {headerNavigation.map((entry) => {
        if (entry.type === "link") {
          const linkActive =
            entry.href === routes.home
              ? pathname === routes.home
              : pathname === entry.href || pathname.startsWith(`${entry.href}/`);

          return (
            <Link
              key={entry.label}
              href={entry.href}
              className={headerNavLinkClass(linkActive)}
              onMouseEnter={closeDropdown}
            >
              {entry.label}
            </Link>
          );
        }

        const { dropdown } = entry;
        const isOpen = activeDropdown === dropdown.key;

        return (
          <HeaderDropdownTrigger
            key={dropdown.key}
            dropdown={dropdown}
            isOpen={isOpen}
            onOpen={() => openDropdown(dropdown.key)}
            onToggle={() => toggleDropdown(dropdown.key)}
            onClose={closeDropdown}
          />
        );
      })}
    </nav>
  );
}
