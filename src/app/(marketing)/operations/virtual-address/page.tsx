import { CategoryPageTemplate } from "@/components/templates/category-page-template";
import { buildMetadata } from "@/components/templates/page-layout";
import { operationsPages } from "@/lib/content";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Address Services",
  "Registered office, director, and business service addresses for UK and US companies."
);

export default function VirtualAddressPage() {
  return (
    <CategoryPageTemplate
      page={operationsPages["virtual-address"]}
      breadcrumbs={[
        { label: "Home", href: routes.home },
        { label: "Address Services", href: routes.operations.index },
        { label: "Virtual Address" },
      ]}
    />
  );
}
