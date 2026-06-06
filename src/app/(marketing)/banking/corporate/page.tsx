import { CategoryPageTemplate } from "@/components/templates/category-page-template";
import { buildMetadata } from "@/components/templates/page-layout";
import { bankingPages } from "@/lib/content";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Bank Account Support",
  "UK and US business bank account setup guidance from HopeTex."
);

export default function CorporateBankingPage() {
  return (
    <CategoryPageTemplate
      page={bankingPages.corporate}
      breadcrumbs={[
        { label: "Home", href: routes.home },
        { label: "Banking & Payments", href: routes.banking.index },
        { label: "Bank Account Support" },
      ]}
    />
  );
}
