import { getIndustryPath, industriesByLocale, type IndustrySlug } from "@/lib/industries"
import { industrySeoByLocale } from "@/lib/industry-seo"
import { absoluteUrl, siteConfig } from "@/lib/site-config"
import { translations } from "@/lib/translations"

// JSON-LD builders. Each function returns a plain object matching a
// schema.org type actually represented on the page — nothing here should be
// rendered unless the corresponding content genuinely exists in the DOM.

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description:
      "Callora is a platform of AI assistants that help businesses across industries answer calls and handle incoming requests when their team is unavailable.",
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.defaultLocale,
  }
}

// SoftwareApplication is used (rather than Service) because Callora is a
// SaaS product with a dashboard, not a professional service booked directly.
export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} — Ora`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Ora, Callora's phone assistant, answers business calls 24/7, handles routine requests, and syncs call summaries to a dashboard — adapting to each industry's workflow.",
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0.30",
      priceCurrency: "EUR",
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      availability: "https://schema.org/InStock",
      description: "Usage-based early-access pricing: €0.30 per minute of calls handled, no fixed subscription.",
    },
  }
}

// Sourced from the actual French FAQ copy rendered on the page (default
// locale), so this stays truthful to what a crawler sees server-rendered.
export function faqJsonLd() {
  const items = translations[siteConfig.defaultLocale].faq.items
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

// One @graph per sector page: breadcrumb, the sector-specific service, and
// the FAQ rendered on that page (default locale, as server-rendered).
export function industryJsonLd(slug: IndustrySlug) {
  const industry = industriesByLocale[siteConfig.defaultLocale][slug]
  const seo = industrySeoByLocale[siteConfig.defaultLocale][slug]
  const url = absoluteUrl(getIndustryPath(slug))

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Secteurs", item: absoluteUrl("/#secteurs") },
          { "@type": "ListItem", position: 3, name: industry.name, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${siteConfig.name} — ${seo.serviceType}`,
        serviceType: seo.serviceType,
        description: seo.description,
        url,
        provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        audience: { "@type": "BusinessAudience", audienceType: seo.audience },
        offers: {
          "@type": "Offer",
          price: "0.30",
          priceCurrency: "EUR",
          description: "Tarif à l'usage : 0,30 € par minute d'appel traitée, sans abonnement.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: seo.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }
}
