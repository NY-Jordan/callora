import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // No private/app routes exist yet. Add disallow rules here
      // (e.g. "/app/", "/dashboard/") once the authenticated product ships.
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
