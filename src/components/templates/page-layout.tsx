import { PageShell } from "@/components/templates/page-shell";
import type { ReactNode } from "react";
import type { Metadata } from "next";

type PageLayoutProps = {
  children: ReactNode;
  hero?: ReactNode;
  fullBleedHero?: boolean;
  narrow?: boolean;
};

export function PageLayout({
  children,
  hero,
  fullBleedHero,
  narrow,
}: PageLayoutProps) {
  return (
    <PageShell hero={hero} fullBleedHero={fullBleedHero} narrow={narrow}>
      {children}
    </PageShell>
  );
}

export function buildMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
