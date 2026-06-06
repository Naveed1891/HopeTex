import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Fingerprint,
  Landmark,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
} from "lucide-react";
import { FooterBackToTop } from "@/components/layout/footer-interactive";
import { Logo } from "@/components/brand/logo";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  colorClass: string;
};

const servicesLinks: FooterLink[] = [
  { label: "US LLC Formation", href: routes.formations.usaLlc, icon: Building2 },
  { label: "ITIN", href: routes.services.itin, icon: Fingerprint },
  { label: "EIN", href: routes.services.ein, icon: Fingerprint },
  { label: "BOIR", href: routes.services.boir, icon: Shield },
  { label: "TM Registration", href: routes.services.trademark, icon: Scale },
];

const quickLinks: FooterLink[] = [
  { label: "About us", href: routes.company.about, icon: Link2 },
  { label: "Privacy Policy", href: routes.legal.privacy, icon: Link2 },
  { label: "Terms & Condition", href: routes.legal.terms, icon: Link2 },
  { label: "Refund Policy", href: routes.legal.refund, icon: Link2 },
  { label: "FAQs", href: routes.resources.faqs, icon: Link2 },
  { label: "Blog", href: routes.resources.blog, icon: Link2 },
];

const contactLinks: FooterLink[] = [
  {
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    external: true,
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    external: true,
    icon: Mail,
  },
  {
    label: "Call",
    href: `tel:${siteConfig.contact.phone}`,
    external: true,
    icon: Phone,
  },
  { label: "Complaint", href: routes.company.complaint, icon: MessageCircle },
  { label: "Contact Us", href: routes.company.contact, icon: Phone },
];

const socialLinks: SocialLink[] = [
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/hopetex/",
    colorClass: "text-[#E60023]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M12.05 2C6.5 2 3 5.77 3 10.62c0 3.06 1.72 4.78 2.76 4.78.43 0 .67-1.2.67-1.54 0-.4-1.01-1.25-1.01-2.91 0-3.46 2.62-5.91 6.01-5.91 2.92 0 5.07 1.65 5.07 4.67 0 2.25-.9 6.49-3.82 6.49-1.05 0-1.89-.87-1.89-1.93 0-1.66 1.15-3.27 1.15-5.04 0-2.95-4.2-2.42-4.2 1.14 0 .75.1 1.58.44 2.25-.64 2.77-1.95 6.87-1.95 9.67 0 .86.12 1.7.2 2.56.15.16.08.14.3.06 2.16-2.97 2.08-3.55 3.07-7.42.53 1.01 1.9 1.56 2.98 1.56 4.58 0 6.63-4.45 6.63-8.52C20 5.83 16.57 2 12.05 2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hopetex.pk/",
    colorClass: "text-[#E4405F]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5zm8.9 1.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@hopetexx",
    colorClass: "text-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M23 12c0 3.55-.42 5.59-.77 6.69a2.9 2.9 0 0 1-2.04 2.04C19.09 21.08 17.05 21.5 12 21.5s-7.09-.42-8.19-.77a2.9 2.9 0 0 1-2.04-2.04C1.42 17.59 1 15.55 1 12s.42-5.59.77-6.69A2.9 2.9 0 0 1 3.8 3.27C4.9 2.92 6.94 2.5 12 2.5s7.09.42 8.19.77a2.9 2.9 0 0 1 2.04 2.04c.35 1.1.77 3.14.77 6.69zM10 8.75v6.5l5.75-3.25L10 8.75z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/HopeTexx",
    colorClass: "text-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M13.7 22v-8.2h2.8l.42-3.2h-3.22V8.56c0-.92.26-1.55 1.58-1.55h1.69V4.14c-.3-.04-1.3-.14-2.46-.14-2.44 0-4.12 1.49-4.12 4.23v2.35H7.6v3.2h2.77V22h3.33z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hopetex",
    colorClass: "text-slate-900",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M15.7 3c.23 1.89 1.3 3.52 3.03 4.42v2.8a7.36 7.36 0 0 1-3.03-.95v5.9a5.17 5.17 0 1 1-5.17-5.17c.32 0 .64.03.95.1v2.9a2.36 2.36 0 1 0 1.41 2.17V3h2.8z" />
      </svg>
    ),
  },
];

const officeItems = [
  {
    title: "Pakistan Office",
    address: "13-E2, Wapda Town, Phase 1, Lahore, PK",
    icon: Building2,
    extra: null as string | null,
  },
  {
    title: "UK Office",
    address: "85 Dunstall Hill, Wolverhampton WV6 0SR, UK",
    icon: Landmark,
    extra: `UK: Company number (${siteConfig.companyNumber})`,
  },
] as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-slate-900 after:mt-2 after:block after:h-0.5 after:w-8 after:rounded-full after:bg-gradient-to-r after:from-violet-600 after:to-sky-500">
      {children}
    </h3>
  );
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {links.map((link) => {
        const Icon = link.icon;
        const content = (
          <>
            {Icon && (
              <span className="footer-link-icon" aria-hidden>
                <Icon className="h-3.5 w-3.5 stroke-[1.75]" />
              </span>
            )}
            <span>{link.label}</span>
          </>
        );

        const className =
          "footer-link-item group inline-flex w-full items-center gap-2.5 text-sm text-slate-600 transition-colors duration-200 hover:text-violet-600";

        return (
          <li key={`${link.label}-${link.href}`}>
            {link.external ? (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link href={link.href} className={className}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function SocialLinkList() {
  return (
    <ul className="mt-4 space-y-2.5">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="footer-link-item group inline-flex w-full items-center gap-2.5 text-sm text-slate-600 transition-colors duration-200 hover:text-violet-600"
          >
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_6px_16px_-10px_rgba(31,41,55,.25)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_22px_-10px_rgba(124,58,237,.28)]",
                item.colorClass
              )}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function OfficeMapVisual() {
  return (
    <div className="relative h-[4.5rem] min-h-[4.5rem] overflow-hidden rounded-2xl bg-gradient-to-r from-white/40 to-sky-50/50">
      <svg viewBox="0 0 360 90" className="h-full w-full opacity-75" aria-hidden>
        <defs>
          <pattern id="footerMapDots" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1.8" cy="1.8" r="1" fill="#c4b5fd" />
          </pattern>
        </defs>
        <path
          d="M20 58 C70 30 150 24 220 40 C280 52 320 48 340 42"
          fill="none"
          stroke="#c7d2fe"
          strokeWidth="1.25"
        />
        <rect x="24" y="14" width="312" height="58" rx="18" fill="url(#footerMapDots)" opacity="0.45" />
        <circle cx="128" cy="48" r="4" fill="#7c3aed" />
        <circle cx="248" cy="38" r="4" fill="#0ea5e9" />
      </svg>
      <MapPin className="absolute left-[34%] top-[48%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-violet-600" />
      <MapPin className="absolute left-[66%] top-[38%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-sky-500" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer relative mt-auto overflow-hidden bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_45%,#e7f7ff_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1560px] overflow-hidden rounded-[38px] border border-white/80 bg-white/82 px-6 py-7 shadow-[0_28px_90px_rgba(31,41,55,.10)] backdrop-blur-xl sm:px-9 lg:px-11">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-violet-300/18 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl"
          aria-hidden
        />

        <div className="relative z-[1]">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-[1.3fr_0.8fr_1fr_0.9fr_0.8fr] xl:gap-8">
            <div className="min-w-0">
              <Logo />
              
             
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                HopeTex Limited provides expert business consulting and digital marketing
                services, including company registration, PayPal solutions, and payment gateway
                approvals for seamless online business setup.
              </p>
            </div>

            <div>
              <FooterHeading>Services</FooterHeading>
              <FooterLinkList links={servicesLinks} />
            </div>

            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinkList links={quickLinks} />
            </div>

            <div>
              <FooterHeading>Contact Details</FooterHeading>
              <FooterLinkList links={contactLinks} />
            </div>

            <div>
              <FooterHeading>Social Links</FooterHeading>
              <SocialLinkList />
            </div>
          </div>

          <div className="mt-7 border-t border-purple-100/70 pt-6">
            <div className="grid items-center gap-5 rounded-[28px] border border-purple-100/70 bg-white/55 p-4 shadow-[0_16px_50px_rgba(31,41,55,.06)] backdrop-blur md:grid-cols-[1fr_1fr_1.15fr] md:p-5">
              {officeItems.map((office, idx) => {
                const Icon = office.icon;
                return (
                  <div
                    key={office.title}
                    className={cn(
                      "flex items-start gap-3.5",
                      idx === 0 && "md:border-r md:border-purple-100/80 md:pr-5"
                    )}
                  >
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-100/80 bg-gradient-to-br from-violet-50 to-sky-50 text-violet-600 shadow-[0_8px_20px_-12px_rgba(124,58,237,.35)]">
                      <Icon className="h-5 w-5 stroke-[1.6]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-700">
                        {office.title}
                      </p>
                      <p className="mt-1 flex items-start gap-1.5 text-sm leading-relaxed text-slate-600">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" aria-hidden />
                        <span>{office.address}</span>
                      </p>
                      {office.extra && (
                        <p className="mt-1 text-sm font-medium text-sky-600">{office.extra}</p>
                      )}
                    </div>
                  </div>
                );
              })}
              <OfficeMapVisual />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-purple-100/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <Shield className="h-4 w-4 shrink-0 text-violet-500/80" aria-hidden />
              Copyright© 2024 HopeTex Limited. All Rights Reserved
            </p>
            <FooterBackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
