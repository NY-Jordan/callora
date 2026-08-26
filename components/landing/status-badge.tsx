"use client"

import { cn } from "@/lib/utils"
import { statusStyles, type CallStatus } from "@/lib/mock-data"

import { useLanguage } from "./language-provider"

export function StatusBadge({
  status,
  className,
}: {
  status: CallStatus
  className?: string
}) {
  const { t } = useLanguage()
  const style = statusStyles[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        style.bg,
        style.text,
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", style.dot)} />
      {t.statusLabels[status]}
    </span>
  )
}
