"use client"

import { motion } from "framer-motion"
import { BedDouble, Car, Coffee, Luggage, Moon, PlaneLanding, Sun, Sunrise, Utensils, CalendarX } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, Kicker, TryOraCta, useSectorCopy } from "./kit"

const requestIcons = [BedDouble, PlaneLanding, Car, Coffee, Utensils, CalendarX]

const copy = {
  fr: {
    badge: "Hôtels & hébergements",
    clock: "03:12",
    scenario: "Un client appelle depuis l'aéroport : son vol est retardé, il arrivera après minuit.",
    scenarioAnswer: "Callora le rassure, note l'heure d'arrivée et prévient la réception.",
    title: "Votre réception ferme parfois. Votre téléphone, jamais.",
    subtitle:
      "Nuit, rush des check-out, équipe réduite : Callora répond aux demandes de réservation et aux questions de vos clients à toute heure, et transmet le reste à votre équipe.",
    dayKicker: "24 heures à l'hôtel",
    dayTitle: "Chaque heure a ses appels.",
    moments: [
      { time: "07:30", icon: "sunrise", text: "Demande de check-out tardif" },
      { time: "11:00", icon: "sun", text: "Disponibilités pour le week-end prochain" },
      { time: "15:20", icon: "sun", text: "« Avez-vous un parking ? »" },
      { time: "19:45", icon: "moon", text: "Réservation pour un groupe de 6" },
      { time: "23:50", icon: "moon", text: "Arrivée tardive après un vol retardé" },
      { time: "03:12", icon: "moon", text: "Question sur l'heure du petit-déjeuner" },
    ],
    requestsKicker: "Conciergerie",
    requestsTitle: "Les demandes que vous configurez, Callora les traite.",
    requests: [
      { title: "Réservations", detail: "Dates, nombre de personnes, type de chambre : la demande est complète pour votre équipe." },
      { title: "Arrivées tardives", detail: "Heure d'arrivée notée, la réception est prévenue." },
      { title: "Parking & accès", detail: "Itinéraire, stationnement, navettes : réponse directe." },
      { title: "Petit-déjeuner", detail: "Horaires, options, service en chambre selon vos consignes." },
      { title: "Restaurant", detail: "Horaires et demandes de table transmises." },
      { title: "Annulations", detail: "Demande enregistrée et transmise selon votre politique." },
    ],
    reportKicker: "Passation",
    reportTitle: "Le matin, la réception sait exactement ce qui s'est passé cette nuit.",
    reportText: "Chaque appel de la nuit est résumé dans le tableau de bord. L'équipe du matin reprend sans rien réécouter.",
    reportHeader: "Appels de la nuit · 23h – 7h",
    report: [
      { time: "23:50", who: "M. Andersen", what: "Arrivée tardive confirmée vers 1h", tag: "Réception prévenue" },
      { time: "01:15", who: "Nouveau client", what: "Demande de réservation 14–16 juin, 2 adultes", tag: "À confirmer" },
      { time: "03:12", who: "Chambre 204", what: "Horaires du petit-déjeuner", tag: "Répondu" },
      { time: "06:40", who: "Mme Kovač", what: "Demande de taxi pour 8h", tag: "À traiter" },
    ],
    ctaTitle: "Une réception qui ne dort jamais, sans recruter de veilleur.",
  },
  en: {
    badge: "Hotels & lodging",
    clock: "03:12",
    scenario: "A guest calls from the airport: their flight is delayed and they'll arrive after midnight.",
    scenarioAnswer: "Callora reassures them, logs the arrival time, and notifies the front desk.",
    title: "Your front desk sometimes closes. Your phone never does.",
    subtitle:
      "Overnight, check-out rush, lean staffing: Callora answers booking requests and guest questions around the clock, and passes everything else to your team.",
    dayKicker: "24 hours at the hotel",
    dayTitle: "Every hour has its calls.",
    moments: [
      { time: "07:30", icon: "sunrise", text: "Late check-out request" },
      { time: "11:00", icon: "sun", text: "Availability for next weekend" },
      { time: "15:20", icon: "sun", text: "“Do you have parking?”" },
      { time: "19:45", icon: "moon", text: "Booking for a group of 6" },
      { time: "23:50", icon: "moon", text: "Late arrival after a delayed flight" },
      { time: "03:12", icon: "moon", text: "Question about breakfast hours" },
    ],
    requestsKicker: "Concierge",
    requestsTitle: "The requests you configure, Callora handles.",
    requests: [
      { title: "Bookings", detail: "Dates, guests, room type: the request is complete for your team." },
      { title: "Late arrivals", detail: "Arrival time logged, front desk notified." },
      { title: "Parking & access", detail: "Directions, parking, shuttles: answered directly." },
      { title: "Breakfast", detail: "Hours, options, room service per your instructions." },
      { title: "Restaurant", detail: "Opening hours and table requests passed on." },
      { title: "Cancellations", detail: "Request logged and passed on per your policy." },
    ],
    reportKicker: "Handover",
    reportTitle: "In the morning, the front desk knows exactly what happened overnight.",
    reportText: "Every overnight call is summarized in the dashboard. The morning team picks up without replaying anything.",
    reportHeader: "Overnight calls · 11pm – 7am",
    report: [
      { time: "23:50", who: "Mr. Andersen", what: "Late arrival confirmed around 1am", tag: "Front desk notified" },
      { time: "01:15", who: "New guest", what: "Booking request June 14–16, 2 adults", tag: "To confirm" },
      { time: "03:12", who: "Room 204", what: "Breakfast hours", tag: "Answered" },
      { time: "06:40", who: "Mrs. Kovač", what: "Taxi request for 8am", tag: "To handle" },
    ],
    ctaTitle: "A front desk that never sleeps, without hiring a night porter.",
  },
}

const momentIcon = { sunrise: Sunrise, sun: Sun, moon: Moon }

export function HotelsPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: night sky, big clock */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[oklch(0.18_0.06_270)] via-[oklch(0.22_0.07_285)] to-[oklch(0.3_0.08_300)] pt-16 pb-24 text-white sm:pt-24 lg:pt-28"
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute size-0.5 rounded-full bg-white/70"
            style={{ top: `${(i * 37) % 70}%`, left: `${(i * 53) % 100}%`, opacity: 0.3 + ((i * 7) % 7) / 10 }}
          />
        ))}
        <div className="page-container relative grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
              <Luggage className="size-3.5" />
              {c.badge}
            </span>
            <h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-pretty text-white/70">{c.subtitle}</p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <DemoCta variant="secondary" />
              <TryOraCta className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-7xl font-light tracking-tight text-white sm:text-8xl"
            >
              {c.clock}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex max-w-sm flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
            >
              <p className="text-sm leading-6 text-white/80">{c.scenario}</p>
              <p className="text-sm leading-6 font-medium text-teal-soft">{c.scenarioAnswer}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 24h strip */}
      <section className="py-24 sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn className="flex flex-col gap-3">
            <Kicker>{c.dayKicker}</Kicker>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{c.dayTitle}</h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute top-[22px] right-0 left-0 h-1.5 rounded-full bg-gradient-to-r from-warning via-info to-[oklch(0.3_0.08_290)]" />
            <AnimateStagger className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {c.moments.map((m) => {
                const Icon = momentIcon[m.icon as keyof typeof momentIcon]
                const night = m.icon === "moon"
                return (
                  <AnimateStaggerItem key={m.time} className="flex flex-col items-start gap-3">
                    <span
                      className={cn(
                        "flex size-12 items-center justify-center rounded-full ring-4 ring-background",
                        night ? "bg-brand text-brand-foreground" : "bg-warning-soft text-warning"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-lg font-semibold">{m.time}</span>
                    <p className="text-sm text-muted-foreground">{m.text}</p>
                  </AnimateStaggerItem>
                )
              })}
            </AnimateStagger>
          </div>
        </div>
      </section>

      {/* Requests grid */}
      <section className="border-t border-border/70 bg-secondary/40 py-24 sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn className="flex max-w-2xl flex-col gap-3">
            <Kicker>{c.requestsKicker}</Kicker>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{c.requestsTitle}</h2>
          </AnimateIn>
          <AnimateStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.requests.map((r, i) => {
              const Icon = requestIcons[i]
              return (
                <AnimateStaggerItem key={r.title}>
                  <div className="flex h-full gap-4 rounded-2xl bg-card p-6 ring-1 ring-border">
                    <Icon className="size-6 shrink-0 text-teal" />
                    <div className="flex flex-col gap-1">
                      <p className="font-heading font-semibold">{r.title}</p>
                      <p className="text-sm leading-6 text-muted-foreground">{r.detail}</p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      {/* Morning handover report */}
      <section className="py-24 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.reportKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.reportTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.reportText}</p>
          </AnimateIn>
          <AnimateIn delay={0.1} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-brand px-5 py-3.5 text-sm font-medium text-brand-foreground">
              <Moon className="size-4" />
              {c.reportHeader}
            </div>
            <ul className="divide-y divide-border">
              {c.report.map((r) => (
                <li key={r.time} className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-5 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{r.time}</span>
                  <div>
                    <p className="text-sm font-semibold">{r.who}</p>
                    <p className="text-sm text-muted-foreground">{r.what}</p>
                  </div>
                  <span className="hidden rounded-full bg-secondary px-2.5 py-1 text-xs font-medium sm:inline">{r.tag}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <AnimateIn className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-[oklch(0.2_0.06_270)] to-[oklch(0.3_0.08_300)] px-6 py-16 text-center text-white">
            <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight">{c.ctaTitle}</h2>
            <DemoCta variant="secondary" />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
