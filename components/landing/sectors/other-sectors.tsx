"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getIndustryPath, industriesByLocale, industryIcons, industrySlugs, type IndustrySlug } from "@/lib/industries"

import { useLanguage } from "../language-provider"

const copy = {
  fr: { title: "Callora dans d'autres secteurs", all: "Voir tous les secteurs" },
  en: { title: "Callora in other industries", all: "See all industries" },
}

// Plain, always-rendered links so crawlers (and visitors) can move between
// sector pages — the navbar menu only mounts its links when opened.
export function OtherSectors({ current }: { current: IndustrySlug }) {
  const { locale } = useLanguage()
  const c = copy[locale]
  const content = industriesByLocale[locale]

  return (
    <nav aria-label={c.title} className="border-t border-border/70 py-16">
      <div className="page-container flex flex-col gap-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-heading text-xl font-semibold">{c.title}</h2>
          <Link href="/#secteurs" className="text-sm font-medium text-teal-foreground hover:underline">
            {c.all}
          </Link>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {industrySlugs
            .filter((slug) => slug !== current)
            .map((slug) => {
              const Icon = industryIcons[slug]
              return (
                <li key={slug}>
                  <Link
                    href={getIndustryPath(slug)}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <Icon className="size-4 text-teal" />
                    <span className="flex-1">{content[slug].name}</span>
                    <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </nav>
  )
}
