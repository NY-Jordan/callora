"use client"

import { Check } from "lucide-react"

import { LinkButton } from "@/components/ui/button"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <AnimateIn className="w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-teal via-brand to-teal" />
            <div className="flex flex-col gap-6 p-8">
              <div className="flex flex-col gap-1">
                <span className="w-fit rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold tracking-wide text-teal-foreground uppercase">
                  {t.pricing.badge}
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-sm text-muted-foreground">{t.pricing.startingAt}</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl font-semibold text-foreground">
                    $149
                  </span>
                  <span className="text-sm text-muted-foreground">{t.pricing.perMonth}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {t.pricing.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <LinkButton href="#demo" size="lg" className="w-full">
                {t.pricing.cta}
              </LinkButton>

              <p className="text-center text-xs text-muted-foreground">{t.pricing.note}</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
