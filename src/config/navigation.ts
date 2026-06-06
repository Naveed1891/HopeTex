import { routes } from "@/config/routes";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  FileCheck,
  FileText,
  Fingerprint,
  Globe2,
  HelpCircle,
  Landmark,
  Layers,
  MessageSquare,
  Scale,
  Shield,
  Stamp,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  featured?: NavLink;
  columns?: {
    title: string;
    links: NavLink[];
  }[];
  links?: NavLink[];
};

/** International-first primary navigation */
export const mainNavigation: NavGroup[] = [
  {
    label: "Company Formation",
    href: routes.formations.index,
    featured: {
      label: "US LLC Formation",
      href: routes.formations.usaLlc,
      description:
        "Incorporate in any US state with guided filing, compliance tooling, and portal access.",
      icon: Building2,
    },
    columns: [
      {
        title: "Formation",
        links: [
          {
            label: "US LLC Formation",
            href: routes.formations.usaLlc,
            description: "All 50 states and DC",
            icon: Building2,
          },
          {
            label: "UK LTD Formation",
            href: routes.formations.ukLtd,
            description: "Companies House registration",
            icon: Landmark,
          },
          {
            label: "International Registration",
            href: routes.formations.pkPvt,
            description: "Global entity setup",
            icon: Globe2,
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: routes.services.index,
    featured: {
      label: "EIN",
      href: routes.services.ein,
      description: "US employer ID for banking, tax, and payroll.",
      icon: Fingerprint,
    },
    columns: [
      {
        title: "Services",
        links: [
          {
            label: "EIN",
            href: routes.services.ein,
            description: "Employer identification number",
            icon: Fingerprint,
          },
          {
            label: "ITIN",
            href: routes.services.itin,
            description: "Individual taxpayer ID",
            icon: FileCheck,
          },
          {
            label: "BOIR",
            href: routes.services.boir,
            description: "Beneficial ownership report",
            icon: Shield,
          },
          {
            label: "D-U-N-S",
            href: routes.services.duns,
            description: "Business credit identifier",
            icon: Layers,
          },
          {
            label: "Trademark",
            href: routes.services.trademark,
            description: "Brand name protection",
            icon: Scale,
          },
          {
            label: "Seller Permit",
            href: routes.services.sellersPermit,
            description: "Sales tax registration",
            icon: Stamp,
          },
          {
            label: "Annual Filing",
            href: routes.services.annualFiling,
            description: "State compliance reports",
            icon: FileCheck,
          },
        ],
      },
    ],
  },
  {
    label: "Packages",
    href: routes.packages,
  },
  {
    label: "Resources",
    links: [
      {
        label: "Blog",
        href: routes.resources.blog,
        description: "Guides and insights",
        icon: FileText,
      },
      {
        label: "FAQs",
        href: routes.resources.faqs,
        description: "Answers to common questions",
        icon: HelpCircle,
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "About",
        href: routes.company.about,
        description: "Our story and mission",
        icon: Building2,
      },
      {
        label: "Contact",
        href: routes.company.contact,
        description: "Reach our global team",
        icon: MessageSquare,
      },
      {
        label: "Complaint",
        href: routes.company.complaint,
        description: "Submit feedback",
        icon: FileText,
      },
    ],
  },
];

export const utilityLinks = {
  trackOrder: { label: "Track Order", href: routes.trackOrder },
  clientPortal: { label: "Client Portal", href: routes.client.login },
  getStarted: { label: "Get Started", href: routes.client.register },
};

export const footerNavigation = {
  formation: [
    { label: "US LLC Formation", href: routes.formations.usaLlc },
    { label: "UK LTD Formation", href: routes.formations.ukLtd },
    { label: "International Registration", href: routes.formations.pkPvt },
  ],
  compliance: [
    { label: "EIN", href: routes.services.ein },
    { label: "ITIN", href: routes.services.itin },
    { label: "BOIR", href: routes.services.boir },
    { label: "Trademark", href: routes.services.trademark },
    { label: "D-U-N-S", href: routes.services.duns },
    { label: "Seller Permit", href: routes.services.sellersPermit },
    { label: "Annual Filing", href: routes.services.annualFiling },
  ],
  company: [
    { label: "About", href: routes.company.about },
    { label: "Contact", href: routes.company.contact },
    { label: "FAQs", href: routes.resources.faqs },
    { label: "Blog", href: routes.resources.blog },
  ],
  legal: [
    { label: "Privacy", href: routes.legal.privacy },
    { label: "Terms", href: routes.legal.terms },
    { label: "Refund policy", href: routes.legal.refund },
  ],
} as const;

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: string;
  section?: "main" | "support" | "account";
  badge?: string;
  soon?: boolean;
};

export const dashboardNavigation: DashboardNavItem[] = [
  { label: "Overview", href: routes.dashboard.root, icon: "LayoutDashboard", section: "main" },
  { label: "Orders", href: routes.dashboard.orders, icon: "Package", section: "main" },
  { label: "Documents", href: routes.dashboard.documents, icon: "FileText", section: "main" },
  { label: "Companies", href: routes.dashboard.companies, icon: "Building2", section: "main" },
  { label: "Invoices", href: routes.dashboard.invoices, icon: "Receipt", section: "main", soon: true },
  { label: "Tickets", href: routes.dashboard.tickets, icon: "Ticket", section: "support", soon: true },
  { label: "Chat", href: routes.dashboard.chat, icon: "MessageSquare", section: "support", soon: true },
  { label: "Support", href: routes.dashboard.support, icon: "LifeBuoy", section: "support" },
  { label: "Settings", href: routes.dashboard.settings, icon: "Settings", section: "account" },
];
