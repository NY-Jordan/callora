"use client"

import {
  ArrowRightLeft,
  CheckCircle2,
  ChevronDown,
  MessageSquareText,
  PhoneMissed,
  PhoneOutgoing,
  Users,
  XCircle,
} from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const missedIcons = [PhoneMissed, XCircle, ArrowRightLeft]
const answeredIcons = [PhoneOutgoing, MessageSquareText, Users, CheckCircle2]

function FlowColumn({
  title,
  tone,
  steps,
  icons,
}: {
  title: string
  tone: "danger" | "success"
  steps: string[]
  icons: (typeof PhoneMissed)[]
}) {
  const isDanger = tone === "danger"
  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-2xl border p-6 sm:p-8 ${
        isDanger
          ? "border-danger/20 bg-danger-soft/40"
          : "border-success/20 bg-success-soft/40"
      }`}
    >
      <p
        className={`text-xs font-semibold tracking-wide uppercase ${
          isDanger ? "text-danger" : "text-success"
        }`}
      >
        {title}
      </p>
      {steps.map((label, i) => {
        const Icon = icons[i]
        return (
          <div key={label} className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card px-4 py-2.5 shadow-sm">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                  isDanger ? "bg-danger-soft text-danger" : "bg-success-soft text-success"
                }`}
              >
                <Icon className="size-3.5" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
            {i < steps.length - 1 ? (
              <ChevronDown className="size-4 text-muted-foreground/50" />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export function RoiSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.roi.eyebrow}
          title={t.roi.title}
          description={t.roi.description}
        />

        <AnimateStagger className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          <AnimateStaggerItem>
            <FlowColumn
              title={t.roi.missedTitle}
              tone="danger"
              steps={t.roi.missedSteps}
              icons={missedIcons}
            />
          </AnimateStaggerItem>
          <AnimateStaggerItem>
            <FlowColumn
              title={t.roi.answeredTitle}
              tone="success"
              steps={t.roi.answeredSteps}
              icons={answeredIcons}
            />
          </AnimateStaggerItem>
        </AnimateStagger>

        <AnimateIn className="mx-auto max-w-lg text-center text-sm text-muted-foreground">
          {t.roi.disclaimer}
        </AnimateIn>
      </div>
    </section>
  )
}
