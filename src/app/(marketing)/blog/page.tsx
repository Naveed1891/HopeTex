import { PageLayout, buildMetadata } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { CatalogGrid } from "@/components/marketing/catalog-grid";
import { routes } from "@/config/routes";

export const metadata = buildMetadata(
  "Blog",
  "Guides and insights for global founders."
);

const posts = [
  {
    title: "US LLC formation for non-residents",
    description: "A complete guide to incorporating in the United States from abroad.",
    href: routes.resources.blog,
  },
  {
    title: "EIN vs ITIN: what you need",
    description: "Understanding US tax identification for international founders.",
    href: routes.resources.blog,
  },
  {
    title: "BOIR filing explained",
    description: "Corporate Transparency Act requirements for US entities.",
    href: routes.resources.blog,
  },
];

export default function BlogPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Resources & insights"
          description="Practical guides for formation, compliance, and global expansion."
        />
      }
    >
      <CatalogGrid items={posts.map((p) => ({ ...p, icon: "FileText" as const }))} />
    </PageLayout>
  );
}
