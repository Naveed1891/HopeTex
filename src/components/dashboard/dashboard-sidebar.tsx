"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { dashboardNavigation } from "@/config/navigation";
import { routes } from "@/config/routes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Building2,
  CreditCard,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  Package,
  Receipt,
  Settings,
  Ticket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Package,
  Building2,
  FileText,
  Receipt,
  Ticket,
  MessageSquare,
  LifeBuoy,
  Settings,
  CreditCard,
};

const sections = [
  { id: "main", label: "Workspace" },
  { id: "support", label: "Support" },
  { id: "account", label: "Account" },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col border-r border-border bg-surface-1 lg:flex">
      <div className="flex h-[4.25rem] items-center border-b border-border px-5">
        <Logo showWordmark />
      </div>
      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto p-4" aria-label="Dashboard">
        {sections.map((section) => {
          const items = dashboardNavigation.filter(
            (i) => i.section === section.id
          );
          if (!items.length) return null;

          return (
            <div key={section.id}>
              <p className="mb-2 px-3 text-caption font-semibold uppercase tracking-wider text-muted-foreground">
                {section.label}
              </p>
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const Icon = iconMap[item.icon] ?? LayoutDashboard;
                  const active =
                    pathname === item.href ||
                    (item.href !== routes.dashboard.root &&
                      pathname.startsWith(item.href));

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          active
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {item.soon && (
                          <Badge
                            variant="secondary"
                            className="h-5 px-1.5 text-[10px] font-medium"
                          >
                            Soon
                          </Badge>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
