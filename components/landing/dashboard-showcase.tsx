"use client"

import {
  LayoutGrid,
  Phone,
  Settings,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react"

import { dashboardCalls, dashboardStatValues } from "@/lib/mock-data"

import { AnimateIn } from "./animate-in"
import { useLanguage } from "./language-provider"
import { SectionHeading } from "./section-heading"
import { StatusBadge } from "./status-badge"

const sidebarIcons = [LayoutGrid, Phone, Users, UserRound, Sparkles, Settings]

export function DashboardShowcase() {
  const { t } = useLanguage()
  const { sidebar, statLabels, tableHeaders, calls } = t.dashboardShowcase

  return (
    <section className="border-t border-border/70 bg-secondary/30 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.dashboardShowcase.eyebrow}
          title={t.dashboardShowcase.title}
          description={t.dashboardShowcase.description}
        />

        <AnimateIn className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-25px_rgba(15,23,42,0.3)]">
          <div className="flex items-center gap-2 border-b border-border/70 px-5 py-3.5">
            <span className="size-2.5 rounded-full bg-danger/40" />
            <span className="size-2.5 rounded-full bg-warning/40" />
            <span className="size-2.5 rounded-full bg-success/40" />
            <span className="ml-3 text-xs text-muted-foreground">
              {t.dashboardShowcase.browserUrl}
            </span>
          </div>

          <div className="flex">
            <aside className="hidden w-56 shrink-0 flex-col gap-1 border-r border-border/70 p-4 lg:flex">
              {sidebar.map((label, i) => {
                const Icon = sidebarIcons[i]
                const active = i === 0
                return (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium ${
                      active ? "bg-brand text-brand-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    {label}
                  </div>
                )
              })}
            </aside>

            <div className="flex min-w-0 flex-1 flex-col gap-6 p-5 sm:p-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {t.dashboardShowcase.overview}
                </h3>
                <p className="text-sm text-muted-foreground">{t.dashboardShowcase.dateLine}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {statLabels.map((label, i) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border/70 bg-background p-4"
                  >
                    <p className="font-heading text-2xl font-semibold tabular-nums text-foreground">
                      {dashboardStatValues[i]}
                    </p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto rounded-xl border border-border/70">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/70 text-xs text-muted-foreground">
                      <th className="px-4 py-3 font-medium">{tableHeaders.caller}</th>
                      <th className="px-4 py-3 font-medium">{tableHeaders.reason}</th>
                      <th className="px-4 py-3 font-medium">{tableHeaders.status}</th>
                      <th className="px-4 py-3 font-medium">{tableHeaders.time}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardCalls.map((call, i) => (
                      <tr key={call.id} className="border-b border-border/50 last:border-0">
                        <td className="px-4 py-3">
                          <p className="font-medium text-foreground">{calls[i]?.caller}</p>
                          <p className="text-xs text-muted-foreground">{call.phone}</p>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{calls[i]?.reason}</td>
                        <td className="px-4 py-3">
                          <StatusBadge status={call.status} />
                        </td>
                        <td className="px-4 py-3 text-muted-foreground tabular-nums">
                          {call.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
