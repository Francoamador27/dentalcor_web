import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// Se genera como archivo estático (out/robots.txt) en el build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Rutas privadas del admin. Las landings de clínicas (/c/...) quedan indexables.
      disallow: ["/auth/", "/admin-dash", "/superadmin-dash", "/mi-cuenta", "/select-tenant", "/editor-web"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
