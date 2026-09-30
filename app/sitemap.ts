import type { MetadataRoute } from "next"

import { getIndustryPath, industrySlugs } from "@/lib/industries"
import { siteConfig } from "@/lib/site-config"

// As /blog and other routes land, add one entry per route here — this file
// is the one place that needs updating.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...industrySlugs.map((slug) => ({
      url: `${siteConfig.url}${getIndustryPath(slug)}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
