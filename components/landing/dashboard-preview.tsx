"use client"

import { motion } from "framer-motion"
import { PhoneIncoming, TrendingUp } from "lucide-react"

import { heroRecentCalls, todayStats } from "@/lib/mock-data"

import { useLanguage } from "./language-provider"
import { StatusBadge } from "./status-badge"

export function DashboardPreview() {
  const { t } = useLanguage()
  const { title, live, stats, recentCalls, banner } = t.hero.dashboard

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative w-full max-w-[480px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/25 via-transparent to-brand/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
        <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <p className="text-sm font-medium text-foreground">{title}</p>
          </div>
          <span className="text-xs text-muted-foreground">{live}</span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border/70 sm:grid-cols-4">
          {[
            { label: stats.calls, value: todayStats.totalCalls },
            { label: stats.answered, value: todayStats.answeredByAI },
            { label: stats.escalated, value: todayStats.escalated },
            { label: stats.followUps, value: todayStats.followUps },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-3.5">
              <p className="font-heading text-xl font-semibold tabular-nums text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-3">
          {heroRecentCalls.map((call, i) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-3 py-2.5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-muted-foreground">
                <PhoneIncoming className="size-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                  {recentCalls[i]?.caller}
                </p>
                <p className="truncate text-xs text-muted-foreground">{recentCalls[i]?.reason}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <StatusBadge status={call.status} />
                <span className="text-[11px] text-muted-foreground">{call.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute -bottom-6 -left-8 hidden items-center gap-2.5 rounded-xl border border-border/80 bg-card px-4 py-3 shadow-lg sm:flex"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-teal-soft text-teal-foreground">
          <TrendingUp className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{banner.title}</p>
          <p className="text-xs text-muted-foreground">{banner.subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
