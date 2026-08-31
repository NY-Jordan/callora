import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

// Single-page marketing site today. As /ai-receptionist, /industries/*, and
// /blog land, add one entry per route here — this file is the one place
// that needs updating.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
