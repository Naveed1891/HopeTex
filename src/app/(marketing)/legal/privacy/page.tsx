import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/content";

export const metadata = buildMetadata("Privacy Policy");

export default function PrivacyPage() {
  const doc = getLegal("privacy");
  return (
    <PageLayout narrow>
      <LegalPageTemplate doc={doc} />
    </PageLayout>
  );
}
