import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/content";

export const metadata = buildMetadata("Terms & Conditions");

export default function TermsPage() {
  const doc = getLegal("terms");
  return (
    <PageLayout narrow>
      <LegalPageTemplate doc={doc} />
    </PageLayout>
  );
}
