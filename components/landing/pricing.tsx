"use client"

import { useMemo, useState } from "react"
import { Check } from "lucide-react"

import { LinkButton } from "@/components/ui/button"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const RATE_PER_MINUTE = 0.3
const MIN_MINUTES = 0
const MAX_MINUTES = 2000
const DEFAULT_MINUTES = 300

export function Pricing() {
  const { t, locale } = useLanguage()
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES)

  const formattedCost = useMemo(() => {
    const cost = minutes * RATE_PER_MINUTE
    return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-IE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(cost)
  }, [minutes, locale])

  return (
    <section id="pricing" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <AnimateIn className="w-full max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-teal via-brand to-teal" />
            <div className="flex flex-col gap-6 p-8">
              <div className="flex flex-col gap-1">
                <span className="w-fit rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold tracking-wide text-teal-foreground uppercase">
                  {t.pricing.badge}
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl font-semibold text-foreground">
                    {t.pricing.rateValue}
                  </span>
                  <span className="text-sm text-muted-foreground">{t.pricing.ratePerMinute}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-secondary/30 p-5">
                <p className="text-sm font-medium text-foreground">{t.pricing.calculator.label}</p>

                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="pricing-minutes" className="text-xs text-muted-foreground">
                    {t.pricing.calculator.inputLabel}
                  </label>
                  <input
                    type="number"
                    min={MIN_MINUTES}
                    max={MAX_MINUTES}
                    value={minutes}
                    onChange={(e) => {
                      const next = Number(e.target.value)
                      setMinutes(Number.isFinite(next) ? Math.min(Math.max(next, MIN_MINUTES), MAX_MINUTES) : 0)
                    }}
                    className="w-20 shrink-0 rounded-lg border border-border bg-background px-2 py-1 text-right text-sm text-foreground tabular-nums outline-none focus:border-ring focus:ring-3 focus:ring-ring/20"
                  />
                </div>

                <input
                  type="range"
                  min={MIN_MINUTES}
                  max={MAX_MINUTES}
                  step={10}
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className="accent-brand w-full"
                  aria-label={t.pricing.calculator.inputLabel}
                />

                <div className="flex items-baseline justify-between border-t border-border/70 pt-3">
                  <span className="text-sm text-muted-foreground">{t.pricing.calculator.resultLabel}</span>
                  <span className="font-heading text-2xl font-semibold text-foreground tabular-nums">
                    {formattedCost}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground/80">{t.pricing.calculator.helper}</p>
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

              <LinkButton href="#book-demo" size="lg" className="w-full">
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
