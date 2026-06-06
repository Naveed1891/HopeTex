import { CategoryPageTemplate } from "@/components/templates/category-page-template";
import { buildMetadata } from "@/components/templates/page-layout";
import { operationsPages } from "@/lib/content";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Phone Number Services",
  "UK and US business phone numbers for professional global operations."
);

export default function PhoneNumbersPage() {
  return (
    <CategoryPageTemplate
      page={operationsPages["phone-numbers"]}
      breadcrumbs={[
        { label: "Home", href: routes.home },
        { label: "Address Services", href: routes.operations.index },
        { label: "Phone Numbers" },
      ]}
    />
  );
}
