"use client"

import { Plus } from "lucide-react"

import type { IndustrySlug } from "@/lib/industries"
import { industrySeoByLocale } from "@/lib/industry-seo"

import { AnimateIn } from "../animate-in"
import { useLanguage } from "../language-provider"
import { SectionHeading } from "../section-heading"

// Native <details> keeps every answer in the server-rendered HTML, matching
// the FAQPage JSON-LD emitted by the route.
export function SectorFaq({ slug }: { slug: IndustrySlug }) {
  const { t, locale } = useLanguage()
  const { faq } = industrySeoByLocale[locale][slug]

  return (
    <section id="faq" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-12">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <AnimateIn className="mx-auto w-full max-w-2xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faq.map((item, i) => (
            <details key={item.question} open={i === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4.5 sm:px-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm font-medium text-foreground sm:text-base">{item.question}</h3>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-transform group-open:rotate-45">
                  <Plus className="size-3.5" />
                </span>
              </summary>
              <p className="px-5 pb-4.5 text-sm leading-6 text-muted-foreground sm:px-6">{item.answer}</p>
            </details>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}
