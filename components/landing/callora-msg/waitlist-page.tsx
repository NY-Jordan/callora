"use client"

import { AnimateIn } from "../animate-in"
import { useSectorCopy } from "../sectors/kit"
import { SectionHeading } from "../section-heading"
import { WaitlistForm } from "./waitlist-form"

const copy = {
  fr: {
    eyebrow: "Callora Msg",
    title: "Rejoignez la liste d'attente",
    description: "Quelques questions rapides pour réserver votre place avant l'ouverture des premiers accès.",
  },
  en: {
    eyebrow: "Callora Msg",
    title: "Join the waitlist",
    description: "A few quick questions to reserve your spot before early access opens.",
  },
}

export function WaitlistPage() {
  const c = useSectorCopy(copy)

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-grid-fade absolute inset-0 -z-10" />
      <div className="page-container flex flex-col items-center gap-12">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <AnimateIn delay={0.1} className="w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <WaitlistForm />
        </AnimateIn>
      </div>
    </section>
  )
}
