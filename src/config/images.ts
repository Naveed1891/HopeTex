/** Centralized image paths — components import from here only. */

/** 3D orbit center hub and navbar icon circle — single shared asset */
export const brandHubImage = "/favicon.png" as const;

export const marketingImages = {
  /** Homepage hero — pre-blended right-side visual (cards, statue, left fade) */
  heroRightVisual: "/images/hero/hero-right-visual.png",
  /** Homepage hero — skyline / Statue of Liberty only (no UI baked in) */
  heroSkylineStatue: "/images/hero/usa-skyline-statue.png",
  brand: {
    icon: brandHubImage,
    mark: "/images/brand/hopetex-mark.png",
    logo: "/images/brand/hopetex-logo.png",
  },
  features: {
    bankingPayments: "/images/marketing/features/banking-payments.png",
    addressContact: "/images/marketing/features/address-contact.png",
  },
  credentials: {
    acsp: "/images/credentials/acsp-logo.png",
    caa: "/images/credentials/caa-logo.png",
    irs: "/images/credentials/irs-logo.png",
  },
  partners: {
    mercury: "/images/partners/mercury.svg",
    brex: "/images/partners/brex.svg",
    airwallex: "/images/partners/airwallex.svg",
    payoneer: "/images/partners/payoneer.svg",
    paypal: "/images/partners/paypal.svg",
    stripe: "/images/partners/stripe.svg",
    pingpong: "/images/partners/pingpong.svg",
    perfectMoney: "/images/partners/perfect-money.svg",
    sunrate: "/images/partners/sunrate.svg",
    tide: "/images/partners/tide.svg",
    revolut: "/images/partners/revolut.svg",
    slash: "/images/partners/slash.svg",
    wise: "/images/partners/wise.svg",
    worldFirst: "/images/partners/world-first.svg",
    zyla: "/images/partners/zyla.svg",
  },
} as const;

export type PartnerId = keyof typeof marketingImages.partners;
