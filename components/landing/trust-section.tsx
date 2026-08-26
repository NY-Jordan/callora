"use client"

import { Clock, Lock, ShieldCheck, Users } from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"

const indicatorIcons = [Clock, ShieldCheck, Users, Lock]

export function TrustSection() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border/70 bg-secondary/30 py-14">
      <div className="page-container flex flex-col gap-10">
        <AnimateIn className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">{t.trust.title}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70 grayscale">
            {t.trust.practices.map((name) => (
              <span
                key={name}
                className="font-heading text-lg font-semibold tracking-tight text-foreground/60"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80">{t.trust.footnote}</p>
        </AnimateIn>

        <AnimateStagger className="grid grid-cols-2 gap-4 border-t border-border/70 pt-8 sm:grid-cols-4">
          {t.trust.indicators.map((label, i) => {
            const Icon = indicatorIcons[i]
            return (
              <AnimateStaggerItem key={label}>
                <div className="flex items-center justify-center gap-2 text-center sm:justify-start sm:text-left">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-teal-foreground ring-1 ring-border">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>
      </div>
    </section>
  )
}
