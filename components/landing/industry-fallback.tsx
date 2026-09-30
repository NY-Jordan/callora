"use client"

import { MessageCircleQuestion } from "lucide-react"

import { LinkButton } from "@/components/ui/button"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"

export function IndustryFallback() {
  const { t } = useLanguage()

  return (
    <section className="pb-24 sm:pb-28">
      <div className="page-container">
        <AnimateIn className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-12 text-center sm:px-12">
          <span className="flex size-11 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
            <MessageCircleQuestion className="size-5" />
          </span>
          <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            {t.industryFallback.title}
          </h3>
          <p className="max-w-lg text-base leading-7 text-muted-foreground">
            {t.industryFallback.description}
          </p>
          <p className="max-w-md text-sm leading-6 text-muted-foreground/80">
            {t.industryFallback.note}
          </p>
          <LinkButton href="#book-demo" size="lg" className="mt-2">
            {t.industryFallback.cta}
          </LinkButton>
        </AnimateIn>
      </div>
    </section>
  )
}
