"use client"

import { AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          description={t.howItWorks.description}
        />

        <AnimateStagger className="relative grid gap-8 sm:grid-cols-3">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border sm:block" />
          {t.howItWorks.steps.map((step) => (
            <AnimateStaggerItem key={step.number}>
              <div className="relative flex flex-col gap-4">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-card font-heading text-sm font-semibold text-foreground">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.detail}</p>
                </div>
              </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
