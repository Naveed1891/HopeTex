import { notFound } from "next/navigation";
import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { FormationPageTemplate } from "@/components/templates/formation-page-template";
import { getAllFormationSlugs, getFormation } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllFormationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (!formation) return {};
  return buildMetadata(formation.title, formation.subtitle);
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (!formation) notFound();

  return (
    <PageLayout>
      <FormationPageTemplate formation={formation} />
    </PageLayout>
  );
}
