"use client"

import { motion } from "framer-motion"
import { ArrowRight, PhoneCall } from "lucide-react"

import { Button, LinkButton } from "@/components/ui/button"

import { useBrowserCall } from "./browser-call-provider"
import { DashboardPreview } from "./dashboard-preview"
import { useLanguage } from "./language-provider"

export function Hero() {
  const { t } = useLanguage()
  const { openCall } = useBrowserCall()

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28">
      <div className="bg-grid-fade absolute inset-0 -z-10" />

      <div className="page-container grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-teal" />
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-xl text-lg leading-7 text-pretty text-muted-foreground sm:text-xl sm:leading-8"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <LinkButton href="#book-demo" size="lg" className="gap-2">
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </LinkButton>
            <Button variant="outline" size="lg" className="gap-2" onPress={openCall}>
              <span className="flex size-5 items-center justify-center rounded-full bg-teal-soft text-teal-foreground">
                <PhoneCall className="size-3" strokeWidth={2.5} />
              </span>
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"
          >
            {t.hero.badges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-x-6">
                {i > 0 ? <span className="h-1 w-1 rounded-full bg-border" /> : null}
                <span>{badge}</span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
