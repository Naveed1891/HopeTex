import type { MetadataRoute } from "next";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

/** Static route list for SEO — expand as pages ship */
function collectRoutes(obj: Record<string, unknown>, acc: string[] = []): string[] {
  for (const value of Object.values(obj)) {
    if (typeof value === "string" && value.startsWith("/")) {
      acc.push(value);
    } else if (typeof value === "object" && value !== null) {
      collectRoutes(value as Record<string, unknown>, acc);
    }
  }
  return acc;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...new Set(collectRoutes(routes as unknown as Record<string, unknown>))];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));
}
