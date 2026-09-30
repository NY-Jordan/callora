import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/landing/footer"
import { IndustryPage } from "@/components/landing/industry-page"
import { Navbar } from "@/components/landing/navbar"
import { defaultLocale } from "@/lib/translations"
import { getIndustryPath, industriesByLocale, industrySlugs, type IndustrySlug } from "@/lib/industries"

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

  const industry = industriesByLocale[defaultLocale][secteur]

  return {
    title: `Callora pour ${industry.name.toLowerCase()}`,
    description: industry.metaDescription,
    alternates: { canonical: getIndustryPath(secteur) },
    robots: { index: true, follow: true },
    openGraph: {
      title: `Callora pour ${industry.name.toLowerCase()}`,
      description: industry.metaDescription,
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
      <Navbar />
      <main className="flex-1">
        <IndustryPage slug={secteur} />
      </main>
      <Footer />
    </>
  )
}
