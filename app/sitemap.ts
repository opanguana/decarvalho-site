import type { MetadataRoute } from "next";
import { getAllStaticRoutes, getSite } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSite();
  const base = site.baseUrl.replace(/\/$/, "");
  const routes = getAllStaticRoutes();
  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
