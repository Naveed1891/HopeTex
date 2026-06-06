/**
 * Canonical route map — single source of truth for App Router paths.
 * Pages are not implemented yet; this drives nav, sitemap, and links.
 */

export const routes = {
  home: "/",

  formations: {
    index: "/formation",
    usaLlc: "/formation/usa-llc",
    ukLtd: "/formation/uk-ltd",
    pkPvt: "/formation/pk-pvt",
  },

  services: {
    index: "/services",
    ein: "/services/ein",
    itin: "/services/itin",
    boir: "/services/boir",
    duns: "/services/duns",
    trademark: "/services/trademark",
    sellersPermit: "/services/sellers-permit",
    annualFiling: "/services/annual-filing",
  },

  operations: {
    index: "/operations",
    virtualAddress: "/operations/virtual-address",
    phoneNumbers: "/operations/phone-numbers",
  },

  banking: {
    index: "/banking",
    merchants: "/banking/merchants",
    corporateBanking: "/banking/corporate",
  },

  packages: "/packages",

  resources: {
    blog: "/blog",
    blogPost: (slug: string) => `/blog/${slug}` as const,
    faqs: "/faqs",
  },

  company: {
    about: "/about",
    contact: "/contact",
    complaint: "/complaint",
  },

  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
    refund: "/legal/refund",
  },

  trackOrder: "/track-order",

  client: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
  },

  admin: {
    partners: "/admin/partners",
  },

  dashboard: {
    root: "/dashboard",
    orders: "/dashboard/orders",
    order: (id: string) => `/dashboard/orders/${id}` as const,
    documents: "/dashboard/documents",
    companies: "/dashboard/companies",
    invoices: "/dashboard/invoices",
    tickets: "/dashboard/tickets",
    chat: "/dashboard/chat",
    billing: "/dashboard/billing",
    support: "/dashboard/support",
    settings: "/dashboard/settings",
  },
} as const;

export type RouteKey = keyof typeof routes;

/** Route groups for Next.js App Router layout segmentation */
export const routeGroups = {
  marketing: "(marketing)",
  dashboard: "(dashboard)",
  auth: "(auth)",
} as const;
