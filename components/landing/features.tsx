"use client"

import {
  AlertTriangle,
  Clock,
  ClipboardList,
  FileText,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const icons = [Clock, MessageCircle, FileText, AlertTriangle, ClipboardList, LayoutDashboard]

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="product" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <AnimateStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, i) => {
            const Icon = icons[i]
            return (
              <AnimateStaggerItem key={feature.title}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">{feature.detail}</p>
                  </div>
                </div>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>

        <AnimateIn className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-8 text-center">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t.features.comingNextLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {t.features.comingNext.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="max-w-md text-xs text-muted-foreground/80">{t.features.comingNextNote}</p>
        </AnimateIn>
      </div>
    </section>
  )
}
