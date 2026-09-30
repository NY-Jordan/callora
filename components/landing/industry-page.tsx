"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ArrowRight, Clock, PlayCircle, Users } from "lucide-react"

import { LinkButton } from "@/components/ui/button"
import { type IndustrySlug, industriesByLocale } from "@/lib/industries"

import { AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { CallDemo } from "./call-demo"
import { Faq } from "./faq"
import { Features } from "./features"
import { FinalCta } from "./final-cta"
import { BookDemoForm } from "./book-demo-form"
import { HowItWorks } from "./how-it-works"
import { useLanguage } from "./language-provider"
import { Pricing } from "./pricing"
import { SectionHeading } from "./section-heading"
import { VideoDemo } from "./video-demo"

const painIcons = [Users, Clock, AlertTriangle]

export function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const { t, locale } = useLanguage()
  const industry = industriesByLocale[locale][slug]

  return (
    <>
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
              {industry.name}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
            >
              {industry.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-xl text-lg leading-7 text-pretty text-muted-foreground sm:text-xl sm:leading-8"
            >
              {industry.subhead}
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
              <LinkButton href="#how-it-works" variant="outline" size="lg" className="gap-2">
                <PlayCircle className="size-4" />
                {t.hero.ctaSecondary}
              </LinkButton>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <VideoDemo />
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/30 py-24 sm:py-28">
        <div className="page-container flex flex-col items-center gap-14">
          <SectionHeading eyebrow={t.problem.eyebrow} title={t.problem.title} description={industry.subhead} />

          <AnimateStagger className="grid w-full gap-5 sm:grid-cols-3">
            {industry.painPoints.map((point, i) => {
              const Icon = painIcons[i]
              return (
                <AnimateStaggerItem key={point.title}>
                  <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-lg font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{point.detail}</p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      <CallDemo />
      <HowItWorks />
      <Features />
      <Pricing />
      <Faq />
      <FinalCta />
      <BookDemoForm />
    </>
  )
}
