import type { MetadataRoute } from "next"

import { getIndustryPath, industrySlugs } from "@/lib/industries"
import { absoluteUrl } from "@/lib/site-config"

// As /blog and other routes land, add one entry per route here — this file
// is the one place that needs updating.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    ...industrySlugs.map((slug) => ({
      url: absoluteUrl(getIndustryPath(slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/callora-msg"), lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/conditions-generales-utilisation"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/politique-de-confidentialite"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ]
}
