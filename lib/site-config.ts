// Central place for site-wide constants used by metadata, sitemap, robots,
// and structured data. Update NEXT_PUBLIC_SITE_URL (env) once the production
// domain is confirmed — everything below derives from it.
export const siteConfig = {
  name: "Callora",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://callora.ai",
  defaultLocale: "fr" as const,
  locales: ["fr", "en"] as const,
  social: {
    twitter: "@callora_ai",
  },
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
