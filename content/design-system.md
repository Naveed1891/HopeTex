# Comprehensive UI/UX Specification: Unified HopeTex Application
Target: Cursor AI / Replit AI Composer
Framework Stack: Next.js/React with Tailwind CSS

## 1. Unified Information Architecture (The Single Menu)
The new application must consolidate all services natively under a single domain. No external routing.

- Top Utility Bar:
  - Left: [Social Links Component] (Facebook, Instagram, LinkedIn, Pinterest, YouTube, TikTok)
  - Right: Contact details (+923003477777 | info@hopetexx.com) | [Client Area Button]
- Main Responsive Navbar:
  - Brand Logo: [HopeTex / HopeTexx Unified Corporate Variant]
  - Link 1: Home
  - Link 2: Company Formation (Dropdown Grid)
    - USA LLC Formation (`/formation/usa-llc`)
    - UK LTD Formation (`/formation/uk-ltd`)
    - Pakistan Company Registration (`/formation/pk-pvt`)
  - Link 3: Corporate Services (Mega Dropdown Menu)
    - Column A (Identity & Tax): EIN Setup (`/services/ein`), ITIN Processing (`/services/itin`), BOIR Compliance (`/services/boir`)
    - Column B (E-Commerce Setup): US Seller's Permit (`/services/sellers-permit`), Trademark Registration (`/services/trademark`)
    - Column C (Corporate Authority): D-U-N-S Number Setup (`/services/duns`), US Entity Annual Filing (`/services/annual-filing`)
  - Link 4: Infrastructure & Operations (Dropdown)
    - Business Addresses (UK & US Virtual Offices) (`/operations/virtual-address`)
    - Dedicated Business Phone Numbers (UK & US Lines) (`/operations/phone-numbers`)
  - Link 5: Banking & Payments (Dropdown)
    - Merchant Gateways (Stripe UAE/UK/USA, PayPal UK/USA, SumUp Setup)
    - Corporate Banking (UK/USA Digital Bank Account Introductions)
  - Link 6: Packages & Pricing Matrix (`/packages`)
  - Action CTA: [Track Order] (Accent Highlight Button linked to `/track-order`)

## 2. Global Branding & Component Styles
- Theme Concept: Premium Fintech / Neomorphic Corporate Minimalist
- Primary Color Accent: Tech Trust Blue (`#0B4F6C` or similar professional blue token)
- Secondary Color Accent: Growth Green or Premium Gold for package highlights
- Structural Layout: CSS Flex/Grid configurations optimizing responsive breakpoints (Mobile to Ultra-Wide)

## 3. Section Wireframe Ordering (Homepage Content Array)
- Hero Block: 
  - Text Content: "Simplifying Global Company Formation"
  - Body: "HopeTex Limited streamlines international business registration..."
  - Form integration: Live dynamic search element mockup: [Check Name Availability Tool]
- Trust Slider:
  - Marquee displaying high-contrast SVG partner logos: Wise, Mercury, PayPal, Payoneer, SumUp, Stripe, Authorize.net, Novopayment.
- Dynamic Pricing Tabs:
  - Toggles for [Pakistan Services] | [US Services] | [UK Services] displaying clear product cards, 5-star badges, and feature lists.
- Core Value Propositions (Two-Column Split Layout with alternating images):
  1. Financial Infrastructure: "Empowering Global Financial Success"
  2. Corporate Presence: "Professional Address & Contact Solutions"
- Interactive Step Wizard:
  - Process flow (1. Search Name -> 2. Select Package -> 3. Fill Online Form -> 4. Company Registered)
- Features Grid (8-card modern element array mapping the "Why Choose Us" sections):
  - Global Edge, Secure Transactions, Efficiency Unleashed, Tailored Solutions, Client-Centric Focus, Timely Support, Strategic Growth, Global Connections.
- Comprehensive Accordion FAQ System:
  - Clean collapsible disclosure elements mapping out the 8 primary financial/taxation questions (PayPal differences, EIN definition, Account Top-ups, Money Availability).

## 4. Persistent Communication Widgets
- Bottom Right: Floating WhatsApp CTA Widget linking to `https://wa.me/923003477777` with pre-filled support text template.
- Footer Structure: 
  - Row 1: Brand Pitch & Office Address Directories (Lahore, PK Office vs. Wolverhampton, UK Office).
  - Row 2: Regulatory Disclosures (UK Company Registration Number: 14684061).