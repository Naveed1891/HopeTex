import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/content";

export const metadata = buildMetadata("Refund Policy");

export default function RefundPage() {
  const doc = getLegal("refund");
  return (
    <PageLayout narrow>
      <LegalPageTemplate doc={doc} />
    </PageLayout>
  );
}
