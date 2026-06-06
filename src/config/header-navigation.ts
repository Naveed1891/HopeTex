import { routes } from "@/config/routes";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BadgeCheck,
  Banknote,
  BookOpen,
  Building2,
  CreditCard,
  FileCheck,
  FileText,
  Fingerprint,
  Globe2,
  HelpCircle,
  Landmark,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Search,
  Shield,
  Stamp,
  UserRound,
  Wallet,
} from "lucide-react";

export type HeaderNavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type HeaderNavOverview = {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
};

export type HeaderDropdownKey = "company" | "services" | "packages" | "about";

export type HeaderNavDropdown = {
  key: HeaderDropdownKey;
  label: string;
  overview?: HeaderNavOverview;
  /** @deprecated use overview — kept for active-route helpers */
  overviewHref?: string;
  links: HeaderNavLink[];
  layout?: "single" | "grid";
  /** Panel opens from the left edge of the nav item (extends right) */
  panelAlign?: "start" | "center" | "end";
};

export type HeaderNavEntry =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; dropdown: HeaderNavDropdown };

/** Top-level header navigation — simple labels, details in dropdowns */
export const headerNavigation: HeaderNavEntry[] = [
  { type: "link", label: "Home", href: routes.home },
  {
    type: "dropdown",
    dropdown: {
      key: "company",
      label: "Company Formation",
      layout: "single",
      panelAlign: "start",
      overview: {
        title: "View all formations",
        description: "UK, US, and global company setup in one place",
        href: routes.formations.index,
        icon: Building2,
      },
      overviewHref: routes.formations.index,
      links: [
        {
          label: "UK LTD Formation",
          href: routes.formations.ukLtd,
          description: "Register a UK limited company",
          icon: Landmark,
        },
        {
          label: "USA LLC Formation",
          href: routes.formations.usaLlc,
          description: "Form a US LLC in any state",
          icon: Building2,
        },
        {
          label: "International Registration",
          href: routes.formations.pkPvt,
          description: "Global and Pakistan private limited registration",
          icon: Globe2,
        },
        {
          label: "Company Name Search",
          href: routes.formations.index,
          description: "Check name availability before filing",
          icon: Search,
        },
        {
          label: "Registered Office Address",
          href: routes.operations.virtualAddress,
          description: "Official registered office for your entity",
          icon: MapPin,
        },
        {
          label: "Director Service Address",
          href: routes.operations.virtualAddress,
          description: "Privacy-friendly director correspondence",
          icon: UserRound,
        },
        {
          label: "Business Service Address",
          href: routes.operations.virtualAddress,
          description: "Professional business mailing address",
          icon: Mail,
        },
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      key: "services",
      label: "Services",
      layout: "grid",
      panelAlign: "start",
      overview: {
        title: "View all services",
        description: "Tax IDs, compliance, trademarks, and operations",
        href: routes.services.index,
        icon: Layers,
      },
      overviewHref: routes.services.index,
      links: [
        {
          label: "ITIN",
          href: routes.services.itin,
          description: "Individual taxpayer identification",
          icon: Fingerprint,
        },
        {
          label: "EIN",
          href: routes.services.ein,
          description: "Federal employer identification number",
          icon: FileText,
        },
        {
          label: "BOIR Filing",
          href: routes.services.boir,
          description: "Beneficial ownership information reports",
          icon: Shield,
        },
        {
          label: "Trademark",
          href: routes.services.trademark,
          description: "Protect your brand name and logo",
          icon: Stamp,
        },
        {
          label: "Seller Permit",
          href: routes.services.sellersPermit,
          description: "Sales tax registration where required",
          icon: BadgeCheck,
        },
        {
          label: "D-U-N-S",
          href: routes.services.duns,
          description: "Business credit identifier setup",
          icon: Globe2,
        },
        {
          label: "Annual Filing",
          href: routes.services.annualFiling,
          description: "Stay compliant with yearly reports",
          icon: FileCheck,
        },
        {
          label: "Address Services",
          href: routes.operations.index,
          description: "Virtual and service addresses",
          icon: MapPin,
        },
        {
          label: "Phone Numbers",
          href: routes.operations.phoneNumbers,
          description: "UK and US business phone lines",
          icon: Phone,
        },
        {
          label: "Banking Services",
          href: routes.banking.index,
          description: "Accounts, merchants, and payment setup",
          icon: Wallet,
        },
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      key: "packages",
      label: "Packages",
      layout: "single",
      panelAlign: "start",
      overview: {
        title: "All Packages",
        description: "Browse every HopeTex service package",
        href: routes.packages,
        icon: Package,
      },
      overviewHref: routes.packages,
      links: [
        {
          label: "UK LTD Packages",
          href: routes.formations.ukLtd,
          description: "UK company formation plans",
          icon: Landmark,
        },
        {
          label: "USA LLC Packages",
          href: routes.formations.usaLlc,
          description: "US LLC formation plans",
          icon: Building2,
        },
        {
          label: "PayPal Packages",
          href: routes.banking.index,
          description: "PayPal setup and verification",
          icon: ArrowRightLeft,
        },
        {
          label: "Bank Account Packages",
          href: routes.banking.corporateBanking,
          description: "UK/US banking support",
          icon: Banknote,
        },
        {
          label: "Stripe / Merchant Packages",
          href: routes.banking.merchants,
          description: "Merchant and payment setup",
          icon: CreditCard,
        },
        {
          label: "Phone Number Packages",
          href: routes.operations.phoneNumbers,
          description: "UK/US phone number services",
          icon: Phone,
        },
        {
          label: "Address Service Packages",
          href: routes.operations.virtualAddress,
          description: "Registered and service addresses",
          icon: MapPin,
        },
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      key: "about",
      label: "About",
      layout: "single",
      panelAlign: "start",
      links: [
        {
          label: "About Us",
          href: routes.company.about,
          description: "Our story, mission, and team",
          icon: Building2,
        },
        {
          label: "Contact Us",
          href: routes.company.contact,
          description: "Speak with our formation specialists",
          icon: MessageSquare,
        },
        {
          label: "FAQs",
          href: routes.resources.faqs,
          description: "Answers to common questions",
          icon: HelpCircle,
        },
        {
          label: "Blog",
          href: routes.resources.blog,
          description: "Guides, updates, and compliance tips",
          icon: BookOpen,
        },
      ],
    },
  },
  { type: "link", label: "Track Order", href: routes.trackOrder },
];

/** Flatten dropdown links for active-route detection */
export function headerDropdownLinks(dropdown: HeaderNavDropdown): HeaderNavLink[] {
  const links = [...dropdown.links];
  const overviewHref = dropdown.overview?.href ?? dropdown.overviewHref;
  if (overviewHref) {
    links.unshift({
      label: dropdown.overview?.title ?? dropdown.label,
      href: overviewHref,
    });
  }
  return links;
}

export function getDropdownOverview(
  dropdown: HeaderNavDropdown
): HeaderNavOverview | undefined {
  if (dropdown.overview) return dropdown.overview;
  if (dropdown.overviewHref) {
    return {
      title: `View all ${dropdown.label}`,
      description: "",
      href: dropdown.overviewHref,
    };
  }
  return undefined;
}
