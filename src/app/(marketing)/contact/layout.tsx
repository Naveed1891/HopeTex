import { buildMetadata } from "@/components/templates/page-layout";
import { contactContent } from "@/lib/content";

export const metadata = buildMetadata("Contact", contactContent.description);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
