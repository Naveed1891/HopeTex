import { CategoryPageTemplate } from "@/components/templates/category-page-template";
import { buildMetadata } from "@/components/templates/page-layout";
import { bankingPages } from "@/lib/content";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Stripe & Merchant Solutions",
  "Payment merchant and Stripe onboarding support for UK, US, and UAE businesses."
);

export default function MerchantsPage() {
  return (
    <CategoryPageTemplate
      page={bankingPages.merchants}
      breadcrumbs={[
        { label: "Home", href: routes.home },
        { label: "Banking & Payments", href: routes.banking.index },
        { label: "Merchant Solutions" },
      ]}
    />
  );
}
