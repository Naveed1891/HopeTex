import { cn } from "@/lib/utils";

const navLinkBase =
  "relative shrink-0 px-2.5 py-2 text-sm font-medium tracking-[-0.01em] transition-colors duration-200 xl:px-3";

const navLinkActive =
  "text-foreground after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-primary after:content-[''] xl:after:left-3 xl:after:right-3";

const navLinkIdle =
  "text-muted-foreground hover:text-foreground";

/** Shared top-level nav link styles (Home + simple nav items) */
export function mainNavLinkClass(active?: boolean) {
  return cn(navLinkBase, active ? navLinkActive : navLinkIdle);
}

const headerNavUnderline =
  "after:pointer-events-none after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-primary after:content-[''] after:transition-opacity after:duration-200 xl:after:left-3 xl:after:right-3";

/** Premium header nav — hover underline + tint matches dropdown triggers */
export function headerNavLinkClass(active?: boolean) {
  return cn(
    navLinkBase,
    "rounded-lg transition-[color,background] duration-200",
    headerNavUnderline,
    active
      ? "text-foreground after:opacity-100"
      : "text-muted-foreground after:opacity-0 hover:bg-accent/55 hover:text-foreground hover:after:opacity-100"
  );
}
