export const siteConfig = {
  name: "HopeTex",
  legalName: "HopeTex Limited",
  tagline: "Where Ideas Become Companies",
  description:
    "HopeTex Limited — company formation, compliance, banking, and digital infrastructure for founders scaling across borders.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hopetex.com",
  companyNumber: "14684061",
  contact: {
    phone: "+923003477777",
    phoneDisplay: "+92 300 3477777",
    email: "info@hopetexx.com",
    supportEmail: "support@hopetexx.com",
    whatsapp: "https://wa.me/923003477777",
  },
  offices: [
    {
      label: "Pakistan",
      address: "13-E2, Wapda Town, Phase 1, Lahore, PK",
    },
    {
      label: "United Kingdom",
      address: "85 Dunstall Hill, Wolverhampton WV6 0SR, UK",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/HopeTexx",
    instagram: "https://www.instagram.com/hopetexx",
    linkedin: "https://www.linkedin.com/company/hopetex",
    pinterest: "https://www.pinterest.com/hopetex/",
    youtube: "https://www.youtube.com/@hopetexx",
    tiktok: "https://www.tiktok.com/@hopetex",
  },
} as const;
