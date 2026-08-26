"use client"

import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/translations"

import { useLanguage } from "./language-provider"

const options: { value: Locale; label: string }[] = [
  { value: "fr", label: "FR" },
  { value: "en", label: "EN" },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          aria-pressed={locale === option.value}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === option.value
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
