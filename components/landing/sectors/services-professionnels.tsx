"use client"

import { motion } from "framer-motion"
import { Briefcase, Calculator, ClipboardList, Headset, PhoneIncoming, Sparkles, TrendingUp, UserRound } from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, Kicker, TryOraCta, useSectorCopy } from "./kit"

const deptIcons = [TrendingUp, Headset, Calculator, UserRound]

const copy = {
  fr: {
    badge: "Services professionnels",
    title: "Un appel entrant, la bonne personne au bout du fil.",
    subtitle:
      "Comptabilité, conseil, agence, bureau d'études, services informatiques : Callora répond pour votre entreprise, comprend ce que veut l'appelant et l'oriente vers le bon service.",
    incoming: "Appel entrant",
    depts: ["Commercial", "Support client", "Comptabilité", "Direction"],
    whoKicker: "Pour qui",
    whoTitle: "Pour toutes les entreprises dont le téléphone est une source d'affaires.",
    who: [
      "Cabinets d'expertise comptable",
      "Cabinets de conseil",
      "Agences marketing & web",
      "Architectes & bureaux d'études",
      "Services informatiques & MSP",
      "Assurances & courtage",
      "Entreprises de nettoyage",
      "Artisans & BTP",
      "Organismes de formation",
      "Agences de recrutement",
    ],
    whoNote: "Votre activité n'est pas dans la liste ? Callora s'adapte à votre vocabulaire et à vos process.",
    summaryKicker: "Après chaque appel",
    summaryTitle: "Un résumé exploitable, pas un message vocal de 2 minutes.",
    summaryText:
      "Qui a appelé, pour quoi, avec quel niveau d'urgence et ce qu'il attend comme suite. Votre équipe agit en quelques secondes.",
    email: {
      from: "Tableau de bord Callora",
      subject: "Nouvelle demande commerciale · Société Arcadis Bâtiment",
      lines: [
        ["Contact", "Nadia Ferreira, responsable achats"],
        ["Besoin", "Devis pour la maintenance informatique de 3 sites (≈ 45 postes)"],
        ["Échéance", "Décision prévue fin du mois"],
        ["Urgence", "Moyenne"],
        ["Suite attendue", "Rappel par un commercial avant jeudi"],
      ],
      routed: "Transmis à : Équipe commerciale",
    },
    ctaTitle: "Chaque appel est une opportunité. Traitez-les toutes.",
  },
  en: {
    badge: "Professional services",
    title: "One incoming call, the right person on the line.",
    subtitle:
      "Accounting, consulting, agencies, engineering firms, IT services: Callora answers for your business, understands what the caller wants, and routes them to the right team.",
    incoming: "Incoming call",
    depts: ["Sales", "Customer support", "Accounting", "Management"],
    whoKicker: "Who it's for",
    whoTitle: "For any business where the phone brings in work.",
    who: [
      "Accounting firms",
      "Consulting firms",
      "Marketing & web agencies",
      "Architects & engineering firms",
      "IT services & MSPs",
      "Insurance & brokerage",
      "Cleaning companies",
      "Trades & construction",
      "Training organizations",
      "Recruitment agencies",
    ],
    whoNote: "Don't see your business? Callora adapts to your vocabulary and processes.",
    summaryKicker: "After every call",
    summaryTitle: "An actionable summary, not a 2-minute voicemail.",
    summaryText:
      "Who called, what for, how urgent, and what follow-up they expect. Your team acts in seconds.",
    email: {
      from: "Callora dashboard",
      subject: "New sales inquiry · Arcadis Construction",
      lines: [
        ["Contact", "Nadia Ferreira, procurement lead"],
        ["Need", "Quote for IT maintenance across 3 sites (≈ 45 workstations)"],
        ["Timeline", "Decision expected end of month"],
        ["Urgency", "Medium"],
        ["Expected follow-up", "Callback from sales before Thursday"],
      ],
      routed: "Routed to: Sales team",
    },
    ctaTitle: "Every call is an opportunity. Handle all of them.",
  },
}

export function ServicesProfessionnelsPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: centered copy above a routing diagram */}
      <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 lg:pt-28">
        <div className="bg-grid-fade absolute inset-0 -z-10" />
        <div className="page-container flex flex-col items-center gap-14">
          <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Briefcase className="size-3.5" />
              {c.badge}
            </span>
            <h1 className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-pretty text-muted-foreground">{c.subtitle}</p>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <DemoCta />
              <TryOraCta />
            </div>
          </div>

          <div className="flex w-full max-w-4xl flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
            >
              <PhoneIncoming className="size-4 text-teal" />
              {c.incoming}
            </motion.div>
            <span className="h-8 w-px bg-border" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 font-heading text-lg font-semibold text-brand-foreground shadow-lg"
            >
              <Sparkles className="size-5 text-teal" />
              Callora
            </motion.div>
            <span className="h-8 w-px bg-border" />
            <div className="hidden h-px w-3/4 bg-border sm:block" />
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {c.depts.map((d, i) => {
                const Icon = deptIcons[i]
                return (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="hidden h-6 w-px bg-border sm:block" />
                    <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center">
                      <Icon className="size-5 text-teal" />
                      <span className="text-sm font-medium">{d}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for: tag cloud */}
      <section className="border-t border-border/70 py-24 sm:py-28">
        <div className="page-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.whoKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.whoTitle}</h2>
            <p className="text-muted-foreground">{c.whoNote}</p>
          </AnimateIn>
          <AnimateStagger className="flex flex-wrap content-start gap-2.5" staggerDelay={0.04}>
            {c.who.map((w) => (
              <AnimateStaggerItem key={w}>
                <span className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{w}</span>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Call summary mock */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.summaryKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.summaryTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.summaryText}</p>
          </AnimateIn>
          <AnimateIn delay={0.1} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-3 border-b border-border px-6 py-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-teal-soft text-teal-foreground">
                <ClipboardList className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.email.from}</p>
                <p className="truncate text-sm font-semibold">{c.email.subject}</p>
              </div>
            </div>
            <dl className="flex flex-col gap-3 p-6 text-sm">
              {c.email.lines.map(([k, v]) => (
                <div key={k} className="grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-border bg-secondary/50 px-6 py-3 text-xs font-medium text-teal-foreground">{c.email.routed}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24">
        <div className="page-container flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{c.ctaTitle}</h2>
          <DemoCta />
        </div>
      </section>
    </>
  )
}
