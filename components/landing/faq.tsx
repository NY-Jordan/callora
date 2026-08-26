"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

export function Faq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <AnimateIn className="mx-auto w-full max-w-2xl divide-y divide-border rounded-2xl border border-border bg-card">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground"
                  >
                    <Plus className="size-3.5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4.5 text-sm leading-6 text-muted-foreground sm:px-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </AnimateIn>
      </div>
    </section>
  )
}
