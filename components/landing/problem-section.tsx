"use client"

import { Moon, PhoneMissed, Users } from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const icons = [Users, Moon, PhoneMissed]

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand py-24 sm:py-28">
      <div className="page-container flex flex-col items-center gap-14">
        <SectionHeading
          tone="dark"
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          description={t.problem.description}
        />

        <AnimateStagger className="grid w-full gap-5 sm:grid-cols-3">
          {t.problem.situations.map((situation, i) => {
            const Icon = icons[i]
            return (
              <AnimateStaggerItem key={situation.title}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {situation.title}
                    </h3>
                    <p className="text-sm leading-6 text-white/60">{situation.detail}</p>
                  </div>
                </div>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>

        <AnimateIn delay={0.15}>
          <p className="max-w-xl text-center text-lg font-medium text-balance text-white/85">
            {t.problem.closing}
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
