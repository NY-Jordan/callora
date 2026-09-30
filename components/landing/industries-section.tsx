"use client"

import { ArrowRight } from "lucide-react"

import { getIndustryPath, industriesByLocale, industryIcons, industrySlugs } from "@/lib/industries"

import { AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

export function IndustriesSection() {
  const { t, locale } = useLanguage()
  const content = industriesByLocale[locale]

  return (
    <section id="secteurs" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.industries.eyebrow}
          title={t.industries.title}
          description={t.industries.description}
        />

        <AnimateStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industrySlugs.map((slug) => {
            const Icon = industryIcons[slug]
            const item = content[slug]
            return (
              <AnimateStaggerItem key={slug}>
                <a
                  href={getIndustryPath(slug)}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.shortDetail}</p>
                  </div>
                  <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-teal-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {t.industries.viewPage}
                    <ArrowRight className="size-3.5" />
                  </span>
                </a>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>

        <p className="text-center text-xs text-muted-foreground/80">{t.industries.disclaimer}</p>
      </div>
    </section>
  )
}
