import { notFound } from "next/navigation";
import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { getAllServiceSlugs, getService } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata(service.title, service.description);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <PageLayout>
      <ServicePageTemplate service={service} />
    </PageLayout>
  );
}
