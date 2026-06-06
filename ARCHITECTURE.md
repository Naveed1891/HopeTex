# HopeTex Platform — Architecture

Premium global formation SaaS built on **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**, and **next-themes**.

Content source of truth: `/content/**/*.md` (not wired to pages yet).

---

## Design philosophy

| Principle | Implementation |
|-----------|----------------|
| Fintech-grade trust | Restrained motion, glass surfaces, mesh gradients, tabular pricing |
| Not a legacy agency site | No WordPress patterns, no legal-firm layouts |
| Content-only reuse | Markdown drives copy/pricing/forms — visual system is net-new |
| Performance | Lazy Motion, `optimizePackageImports`, reduced-motion fallbacks |
| Accessibility | Skip link, focus rings, semantic landmarks, ARIA on nav |

### Brand tokens

| Token | Value |
|-------|-------|
| Primary | `#6c177c` |
| Primary accent | `#b83bb2` |
| Secondary | `#009ddb` |
| Secondary dark | `#1e5a92` |

Defined in `src/app/globals.css` as CSS variables + Tailwind `@theme` mappings.

---

## Route structure (App Router)

```
src/app/
├── layout.tsx                 # Root: fonts, metadata, providers
├── globals.css                # Design system tokens
├── robots.ts / sitemap.ts     # SEO foundation
│
├── (marketing)/               # Public marketing shell
│   ├── layout.tsx             # Header, footer, mega menu, WhatsApp
│   └── page.tsx               # ⚠ Shell preview only (not production home)
│
├── (dashboard)/               # Authenticated client area shell
│   ├── layout.tsx             # Sidebar + header
│   └── dashboard/page.tsx     # Dashboard UI preview
│
└── (auth)/                    # Auth shell (split panel)
    └── layout.tsx
```

### Planned routes (not implemented)

| Segment | Paths |
|---------|-------|
| **Formation** | `/formation`, `/formation/usa-llc`, `/formation/uk-ltd`, `/formation/pk-pvt` |
| **Services** | `/services/ein`, `/itin`, `/boir`, `/duns`, `/trademark`, `/sellers-permit`, `/annual-filing` |
| **Operations** | `/operations/virtual-address`, `/operations/phone-numbers` |
| **Banking** | `/banking/merchants`, `/banking/corporate` |
| **Packages** | `/packages` |
| **Resources** | `/blog`, `/blog/[slug]`, `/faqs` |
| **Company** | `/about`, `/contact`, `/complaint` |
| **Legal** | `/legal/privacy`, `/legal/terms`, `/legal/refund` |
| **Utility** | `/track-order` |
| **Auth** | `/login`, `/register`, `/forgot-password` |
| **Dashboard** | `/dashboard`, `/dashboard/orders`, `/dashboard/orders/[id]`, `/dashboard/documents`, `/dashboard/companies`, `/dashboard/billing`, `/dashboard/support`, `/dashboard/settings` |

Canonical map: `src/config/routes.ts`

---

## Configuration layer

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Brand, contact, offices, social |
| `src/config/routes.ts` | All hrefs + route groups |
| `src/config/navigation.ts` | Mega menu, footer, dashboard nav |
| `src/config/pricing.ts` | Plan model + US LLC tiers from packages.md |
| `src/config/forms.ts` | Service form schemas (EIN, ITIN, LLC) |

---

## Component system

```
src/components/
├── ui/                    # shadcn primitives (Button, Card, Input, Sheet, Tabs…)
├── brand/                 # Logo
├── layout/                # Header, Footer, MegaMenu, MobileNav, UtilityBar
├── motion/                # PageTransition, ScrollReveal, Timeline, AnimatedCard…
├── providers/             # Theme, Motion, AppProviders
├── templates/             # PageShell, PageHero, SectionBlock, FaqAccordion…
├── forms/                 # FormFieldRenderer, ServiceFormWizard
├── pricing/               # PricingCard, PricingGrid
└── dashboard/             # Sidebar, Header, StatCard, EmptyState
```

### Page templates (compose pages in phase 2)

- **PageShell** — mesh background, optional hero, content container
- **PageHero** — eyebrow, gradient title, CTAs
- **SectionBlock** — titled sections with scroll reveal / stagger
- **SplitFeature** — alternating two-column features
- **FaqAccordion** — accessible disclosure list

### Service forms

Config-driven multi-step wizard (`ServiceFormWizard`) with animated step transitions and sidebar timeline.

### Pricing

Region tabs → staggered plan cards with compare-at pricing, feature checklist, magnetic CTAs.

### Dashboard UI

Sidebar navigation, header with search, stat cards, empty states — preview at `/dashboard`.

---

## Motion system

| Pattern | Component / util |
|---------|------------------|
| Page enter | `PageTransition` + `fadeIn` |
| Scroll reveal | `ScrollReveal` + `fadeUp` |
| Stagger lists | `StaggerChildren` + `staggerContainer` |
| Timelines | `Timeline` |
| Cards | `AnimatedCard` (lift on hover) |
| Magnetic CTAs | `MagneticWrap` + `useMagnetic` |
| Backgrounds | `AnimatedBackground` (orbs / grid) |
| Reduced motion | `useReducedMotion` → disables animations |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — premium, not bouncy.

Framer Motion loaded via `LazyMotion` + `domAnimation` for smaller bundles.

---

## Layout shells

### Marketing
- Utility bar (social, phone, email, sign in)
- Sticky glass header + mega menu + mobile sheet
- Footer (4 columns + offices + regulatory)
- Floating WhatsApp widget

### Dashboard
- Fixed sidebar (lg+)
- Top header with search + notifications
- Scrollable main canvas

### Auth
- Split panel: brand quote left, form right
- Shared motion + mesh background

---

## Theming

- `next-themes` with `class` strategy
- Light / dark / system
- `ThemeToggle` in header and dashboard
- CSS variables swap in `.dark`

---

## Performance & SEO checklist

- [x] `optimizePackageImports` for lucide, framer-motion, radix
- [x] Font `display: swap` (Geist)
- [x] Image formats AVIF/WebP in `next.config.ts`
- [x] `robots.ts` + `sitemap.ts` from route config
- [x] Reduced motion media query overrides
- [ ] Content pages + MDX pipeline (phase 2)
- [ ] Dynamic sitemap for blog posts (phase 2)
- [ ] Lighthouse audit on production build (phase 2)

---

## Phase 2 — Page generation

1. MDX/content loader reading `/content`
2. Implement routes from `routes.ts` using templates
3. Wire `pricing.ts` + `forms.ts` to checkout/API
4. Auth + dashboard data layer
5. Replace shell preview homepage with real homepage from `homepage.md`

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000 — shell preview
npm run build    # production build
npm run typecheck
```

| URL | Purpose |
|-----|---------|
| `/` | Shell preview (design system validation) |
| `/dashboard` | Dashboard UI shell |
