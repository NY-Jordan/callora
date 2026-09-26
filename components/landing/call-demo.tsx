"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { ClipboardCheck, MicIcon, PhoneCall, RotateCcw, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { callDemoSpeakers } from "@/lib/mock-data"

import { useBrowserCall } from "./browser-call-provider"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const REVEAL_DELAYS = [500, 1700, 2500, 3700]
const RESULT_DELAY = 900

export function CallDemo() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: "-100px" })
  const [visibleCount, setVisibleCount] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const { openCall, callEnabled } = useBrowserCall()
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
  }

  const play = useCallback(() => {
    clearTimers()
    setVisibleCount(0)
    setShowResult(false)

    callDemoSpeakers.forEach((_, i) => {
      const timeout = setTimeout(() => setVisibleCount(i + 1), REVEAL_DELAYS[i])
      timeouts.current.push(timeout)
    })

    const resultTimeout = setTimeout(
      () => setShowResult(true),
      REVEAL_DELAYS[REVEAL_DELAYS.length - 1] + RESULT_DELAY
    )
    timeouts.current.push(resultTimeout)
  }, [])

  useEffect(() => {
    if (!inView) return
    const startTimeout = setTimeout(play, 0)
    return () => {
      clearTimeout(startTimeout)
      clearTimers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const lastMessageShown = visibleCount === callDemoSpeakers.length

  return (
    <section id="demo" className="py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.callDemo.eyebrow}
          title={t.callDemo.title}
          description={t.callDemo.description}
        />

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-teal/30 bg-teal-soft/40 px-6 py-8 text-center">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-teal" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">{t.browserTest.title}</p>
          <p className="max-w-md text-sm text-muted-foreground">{t.browserTest.description}</p>
          <Button size="lg" className="gap-2" onPress={openCall} isDisabled={!callEnabled}>
            <MicIcon className="size-4" />
            {t.callDemo.liveCta}
          </Button>
        </div>

        <div ref={containerRef} className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-teal-soft text-teal-foreground">
                  <PhoneCall className="size-3.5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.callDemo.incomingCall}</p>
                  <p className="text-xs text-muted-foreground">{t.callDemo.oraSubtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={play}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <RotateCcw className="size-3" />
                {t.callDemo.replay}
              </button>
            </div>

            <div className="flex min-h-[320px] flex-col gap-3 p-5">
              {callDemoSpeakers.map((speaker, i) => (
                <AnimatePresence key={i}>
                  {visibleCount > i ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={speaker === "patient" ? "flex justify-start" : "flex justify-end"}
                    >
                      <div
                        className={
                          speaker === "patient"
                            ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-2.5 text-sm leading-6 text-foreground"
                            : "max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm leading-6 text-brand-foreground"
                        }
                      >
                        <p className="mb-1 text-[11px] font-medium tracking-wide uppercase opacity-60">
                          {speaker === "patient" ? t.callDemo.speakerPatient : t.callDemo.speakerOra}
                        </p>
                        {t.callDemo.script[i]?.text}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              ))}

              {!lastMessageShown && visibleCount > 0 && visibleCount < callDemoSpeakers.length ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={
                    callDemoSpeakers[visibleCount] === "patient" ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <span className="flex items-center gap-1 rounded-2xl bg-secondary px-3.5 py-2.5">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="size-1.5 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: dot * 0.15 }}
                      />
                    ))}
                  </span>
                </motion.div>
              ) : null}
            </div>
          </div>

          <AnimatePresence>
            {showResult ? (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-teal-foreground">
                  <Sparkles className="size-4" />
                  <p className="text-xs font-medium tracking-wide uppercase">{t.callDemo.synced}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning">
                    <ClipboardCheck className="size-4" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t.callDemo.newRequest}
                    </p>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {t.callDemo.cleaning}
                    </p>
                    <p className="text-sm text-warning">{t.callDemo.status}</p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">{t.callDemo.summary}</p>
              </motion.div>
            ) : (
              <div className="hidden rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground lg:flex lg:items-center lg:justify-center lg:min-h-[200px]">
                {t.callDemo.waiting}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
