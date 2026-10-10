import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/landing/footer"
import { IndustryPage } from "@/components/landing/industry-page"
import { Navbar } from "@/components/landing/navbar"
import { getIndustryPath, industrySlugs, type IndustrySlug } from "@/lib/industries"
import { industrySeoByLocale } from "@/lib/industry-seo"
import { siteConfig } from "@/lib/site-config"
import { industryJsonLd } from "@/lib/structured-data"

export const dynamicParams = false

export function generateStaticParams() {
  return industrySlugs.map((secteur) => ({ secteur }))
}

function isIndustrySlug(value: string): value is IndustrySlug {
  return (industrySlugs as readonly string[]).includes(value)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ secteur: string }>
}): Promise<Metadata> {
  const { secteur } = await params
  if (!isIndustrySlug(secteur)) return {}

  const seo = industrySeoByLocale[siteConfig.defaultLocale][secteur]
  const path = getIndustryPath(secteur)
  const socialTitle = `${seo.title} — ${siteConfig.name}`

  // openGraph/twitter are redefined in full: Next merges metadata shallowly,
  // so anything left out here would silently fall back to the homepage copy.
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: seo.description,
    },
  }
}

export default async function IndustryRoute({
  params,
}: {
  params: Promise<{ secteur: string }>
}) {
  const { secteur } = await params
  if (!isIndustrySlug(secteur)) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryJsonLd(secteur)) }}
      />
      <Navbar />
      <main className="flex-1">
        <IndustryPage slug={secteur} />
      </main>
      <Footer />
    </>
  )
}
