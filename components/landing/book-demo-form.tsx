"use client"

import { useActionState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { submitBookDemo, type BookDemoState } from "@/lib/actions/book-demo"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"

const initialState: BookDemoState = { status: "idle" }

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"

export function BookDemoForm() {
  const { t } = useLanguage()
  const [state, formAction, pending] = useActionState(submitBookDemo, initialState)
  const { labels, timeSlotOptions } = t.bookDemo

  return (
    <section id="book-demo" className="border-t border-border/70 py-24 sm:py-28">
      <div className="page-container flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow={t.bookDemo.eyebrow}
          title={t.bookDemo.title}
          description={t.bookDemo.description}
        />

        <AnimateIn className="w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {state.status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-success-soft text-success">
                <CheckCircle2 className="size-6" />
              </span>
              <p className="font-heading text-lg font-semibold text-foreground">
                {t.bookDemo.successTitle}
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">{t.bookDemo.successBody}</p>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.name}</span>
                  <input name="name" type="text" required className={fieldClass} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.email}</span>
                  <input name="email" type="email" required className={fieldClass} />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.practice}</span>
                  <input name="practice" type="text" required className={fieldClass} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.phone}</span>
                  <input name="phone" type="tel" className={fieldClass} />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.date}</span>
                  <input name="date" type="date" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">{labels.timeSlot}</span>
                  <select name="timeSlot" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      —
                    </option>
                    {timeSlotOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-foreground">{labels.notes}</span>
                <textarea name="notes" rows={3} className={fieldClass} />
              </label>

              {state.status === "error" ? (
                <p className="text-sm text-danger" role="alert">
                  {t.bookDemo.errors[state.error ?? "sendFailed"]}
                </p>
              ) : null}

              <Button type="submit" size="lg" isPending={pending} className="mt-1 w-full">
                {pending ? t.bookDemo.submitting : t.bookDemo.submit}
              </Button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  )
}
