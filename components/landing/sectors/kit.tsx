"use client"

import type * as React from "react"
import { ArrowRight, PhoneCall } from "lucide-react"

import { Button, LinkButton } from "@/components/ui/button"
import type { Locale } from "@/lib/translations"
import { cn } from "@/lib/utils"

import { useBrowserCall } from "../browser-call-provider"
import { useLanguage } from "../language-provider"

// Each sector page owns its own copy and layout; this file only holds the
// few primitives they all need (locale-aware copy, CTAs, small labels).

export function useSectorCopy<T>(copy: Record<Locale, T>) {
  const { locale } = useLanguage()
  return copy[locale]
}

export function DemoCta({
  className,
  variant = "default",
  label,
}: {
  className?: string
  variant?: "default" | "secondary" | "outline"
  label?: string
}) {
  const { t } = useLanguage()
  return (
    <LinkButton href="#book-demo" size="lg" variant={variant} className={cn("gap-2", className)}>
      {label ?? t.hero.ctaPrimary}
      <ArrowRight className="size-4" />
    </LinkButton>
  )
}

export function TryOraCta({ className, label }: { className?: string; label?: string }) {
  const { t } = useLanguage()
  const { openCall, callEnabled } = useBrowserCall()
  return (
    <Button size="lg" variant="outline" className={cn("gap-2", className)} onPress={openCall} isDisabled={!callEnabled}>
      <PhoneCall className="size-4" />
      {label ?? t.finalCta.ctaSecondary}
    </Button>
  )
}

export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("text-xs font-semibold tracking-[0.18em] text-teal uppercase", className)}>{children}</span>
  )
}
