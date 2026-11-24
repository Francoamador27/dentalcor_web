import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "@/config/site";

// Se genera como archivo estático (out/sitemap.xml) en el build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
