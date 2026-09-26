"use client"

import { ArrowRight, PhoneCall } from "lucide-react"

import { Button, LinkButton } from "@/components/ui/button"

import { AnimateIn } from "./animate-in"
import { useBrowserCall } from "./browser-call-provider"
import { useLanguage } from "./language-provider"

export function FinalCta() {
  const { t } = useLanguage()
  const { openCall, callEnabled } = useBrowserCall()

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="page-container">
        <AnimateIn className="relative flex flex-col items-center gap-7 overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="bg-grid-fade absolute inset-0 -z-0 opacity-20" />
          <h2 className="font-heading max-w-2xl text-3xl leading-[1.1] font-semibold text-balance text-white sm:text-4xl lg:text-[2.75rem]">
            {t.finalCta.title}
          </h2>
          <p className="max-w-lg text-lg leading-7 text-pretty text-white/70">
            {t.finalCta.subhead}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#book-demo" size="lg" variant="secondary" className="gap-2">
              {t.finalCta.ctaPrimary}
              <ArrowRight className="size-4" />
            </LinkButton>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onPress={openCall} isDisabled={!callEnabled}
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white">
                <PhoneCall className="size-3" strokeWidth={2.5} />
              </span>
              {t.finalCta.ctaSecondary}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
