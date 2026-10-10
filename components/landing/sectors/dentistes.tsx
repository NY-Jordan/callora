"use client"

import { motion } from "framer-motion"
import { AlertCircle, CalendarClock, Moon, PhoneForwarded, Smile, Stethoscope } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, Kicker, TryOraCta, useSectorCopy } from "./kit"

const copy = {
  fr: {
    badge: "Cabinets dentaires",
    title: "Vous êtes au fauteuil. Callora est au téléphone.",
    subtitle:
      "Détartrage, couronne, extraction : pendant que vous soignez, Callora répond aux patients, note leurs demandes de rendez-vous et vous signale les vraies urgences.",
    chair: "Fauteuil 1 — en soin",
    chairPatient: "Mme Laurent · Détartrage",
    ringing: "Appel entrant",
    handled: "Pris en charge par Ora",
    dayTitle: "Une journée ordinaire au cabinet",
    dayIntro: "Les appels n'attendent pas que le fauteuil se libère. Voici ce que Callora gère sans interrompre vos soins.",
    day: [
      { time: "08:12", label: "Avant l'ouverture", call: "Un patient veut décaler son contrôle de jeudi.", outcome: "Demande notée, transmise à l'accueil" },
      { time: "10:47", label: "En plein soin", call: "Une nouvelle patiente cherche un premier rendez-vous.", outcome: "Coordonnées et motif enregistrés" },
      { time: "12:30", label: "Pause déjeuner", call: "« Acceptez-vous ma mutuelle ? »", outcome: "Réponse donnée selon vos consignes" },
      { time: "16:05", label: "Fauteuil occupé", call: "Un enfant s'est cassé une incisive à l'école.", outcome: "Urgence transférée immédiatement" },
      { time: "21:40", label: "Cabinet fermé", call: "Douleur depuis ce soir, la patiente s'inquiète.", outcome: "Rappel prioritaire demain 8h" },
    ],
    triageKicker: "Triage",
    triageTitle: "Une rage de dents n'est pas un détartrage.",
    triageIntro:
      "Vous définissez ce qui est urgent pour votre cabinet. Callora pose les bonnes questions et oriente chaque appel en conséquence.",
    urgent: "Transfert immédiat",
    urgentItems: ["Dent cassée ou expulsée", "Gonflement du visage", "Saignement qui ne s'arrête pas", "Douleur aiguë et persistante"],
    normal: "Demande notée pour l'accueil",
    normalItems: ["Contrôle annuel", "Détartrage", "Report d'un rendez-vous", "Question sur un devis"],
    info: "Réponse directe",
    infoItems: ["Horaires et accès", "Mutuelles acceptées", "Parking à proximité", "Documents à apporter"],
    noteKicker: "Ce que vous retrouvez",
    noteTitle: "Une fiche claire à chaque appel, lisible entre deux patients.",
    note: {
      header: "Nouvelle demande · 16:05",
      name: "Lucas, 9 ans (appel de sa mère)",
      reason: "Incisive cassée suite à une chute",
      priority: "Urgent",
      summary: "Chute dans la cour de récréation. Pas de saignement important. La mère peut venir dans les 30 minutes.",
      action: "Appel transféré à l'assistante",
    },
    ctaTitle: "Rendez votre accueil téléphonique aussi soigné que vos soins.",
  },
  en: {
    badge: "Dental practices",
    title: "You're chair-side. Callora is on the phone.",
    subtitle:
      "Cleaning, crown, extraction: while you treat patients, Callora answers callers, takes appointment requests, and flags real emergencies.",
    chair: "Chair 1 — in treatment",
    chairPatient: "Mrs. Laurent · Cleaning",
    ringing: "Incoming call",
    handled: "Handled by Ora",
    dayTitle: "An ordinary day at the practice",
    dayIntro: "Calls don't wait for the chair to free up. Here's what Callora handles without interrupting care.",
    day: [
      { time: "08:12", label: "Before opening", call: "A patient wants to move Thursday's check-up.", outcome: "Request logged, sent to front desk" },
      { time: "10:47", label: "Mid-treatment", call: "A new patient is looking for a first visit.", outcome: "Contact details and reason saved" },
      { time: "12:30", label: "Lunch break", call: "“Do you accept my insurance?”", outcome: "Answered per your instructions" },
      { time: "16:05", label: "Chair busy", call: "A child broke a front tooth at school.", outcome: "Emergency transferred immediately" },
      { time: "21:40", label: "Practice closed", call: "Pain since this evening, the patient is worried.", outcome: "Priority callback tomorrow 8am" },
    ],
    triageKicker: "Triage",
    triageTitle: "A toothache emergency is not a cleaning.",
    triageIntro:
      "You define what counts as urgent for your practice. Callora asks the right questions and routes each call accordingly.",
    urgent: "Immediate transfer",
    urgentItems: ["Broken or knocked-out tooth", "Facial swelling", "Bleeding that won't stop", "Sharp, persistent pain"],
    normal: "Logged for the front desk",
    normalItems: ["Annual check-up", "Cleaning", "Rescheduling", "Question about a quote"],
    info: "Answered directly",
    infoItems: ["Hours and directions", "Accepted insurance", "Nearby parking", "What to bring"],
    noteKicker: "What you get",
    noteTitle: "A clear summary for every call, readable between two patients.",
    note: {
      header: "New request · 4:05 pm",
      name: "Lucas, 9 (called by his mother)",
      reason: "Front tooth broken after a fall",
      priority: "Urgent",
      summary: "Fell in the playground. No heavy bleeding. Mother can come in within 30 minutes.",
      action: "Call transferred to the assistant",
    },
    ctaTitle: "Make your phone line as polished as your care.",
  },
}

export function DentistesPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: split with a live "chair vs phone" mock */}
      <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-teal-soft/70 to-transparent" />
        <div className="page-container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-teal-foreground shadow-sm ring-1 ring-border">
              <Smile className="size-3.5" />
              {c.badge}
            </span>
            <h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-pretty text-muted-foreground">{c.subtitle}</p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <DemoCta />
              <TryOraCta />
            </div>
          </div>

          <AnimateIn className="relative mx-auto flex w-full max-w-md flex-col gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
                <Stethoscope className="size-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{c.chair}</p>
                <p className="text-sm text-muted-foreground">{c.chairPatient}</p>
              </div>
              <span className="size-2.5 rounded-full bg-danger" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="ml-8 flex items-center gap-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-lg"
            >
              <span className="relative flex size-12 items-center justify-center rounded-xl bg-white/10">
                <span className="absolute inset-0 animate-ping rounded-xl bg-teal/30" />
                <PhoneForwarded className="size-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs tracking-wide text-white/60 uppercase">{c.ringing}</p>
                <p className="text-sm font-semibold">{c.handled}</p>
              </div>
            </motion.div>
          </AnimateIn>
        </div>
      </section>

      {/* A day at the practice: vertical timeline */}
      <section className="border-t border-border/70 py-24 sm:py-28">
        <div className="page-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimateIn className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.dayTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.dayIntro}</p>
          </AnimateIn>

          <AnimateStagger className="relative flex flex-col gap-6 border-l border-border pl-8">
            {c.day.map((item, i) => (
              <AnimateStaggerItem key={item.time} className="relative">
                <span
                  className={cn(
                    "absolute top-1.5 -left-[39px] flex size-3.5 rounded-full ring-4 ring-background",
                    i === 3 ? "bg-danger" : i === 4 ? "bg-brand" : "bg-teal"
                  )}
                />
                <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold">{item.time}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      {i === 4 ? <Moon className="size-3" /> : null}
                      {item.label}
                    </span>
                  </div>
                  <p className="text-base text-foreground">{item.call}</p>
                  <p className={cn("text-sm font-medium", i === 3 ? "text-danger" : "text-teal-foreground")}>
                    → {item.outcome}
                  </p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Triage: three lanes */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn className="flex max-w-2xl flex-col gap-4">
            <Kicker>{c.triageKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.triageTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.triageIntro}</p>
          </AnimateIn>

          <AnimateStagger className="grid gap-5 md:grid-cols-3">
            {[
              { title: c.urgent, items: c.urgentItems, icon: AlertCircle, tone: "border-danger/40 bg-danger-soft/50 text-danger" },
              { title: c.normal, items: c.normalItems, icon: CalendarClock, tone: "border-border bg-card text-teal-foreground" },
              { title: c.info, items: c.infoItems, icon: Smile, tone: "border-border bg-card text-success" },
            ].map((lane) => (
              <AnimateStaggerItem key={lane.title}>
                <div className={cn("flex h-full flex-col gap-5 rounded-2xl border p-6", lane.tone)}>
                  <div className="flex items-center gap-2">
                    <lane.icon className="size-5" />
                    <p className="font-heading font-semibold">{lane.title}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 text-sm text-foreground">
                    {lane.items.map((item) => (
                      <li key={item} className="rounded-lg bg-background/70 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Call summary card */}
      <section className="py-24 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.noteKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.noteTitle}</h2>
          </AnimateIn>
          <AnimateIn delay={0.1} className="rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="text-sm text-muted-foreground">{c.note.header}</p>
              <span className="rounded-full bg-danger-soft px-2.5 py-1 text-xs font-semibold text-danger">{c.note.priority}</span>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <p className="font-heading text-lg font-semibold">{c.note.name}</p>
                <p className="text-sm text-muted-foreground">{c.note.reason}</p>
              </div>
              <p className="text-sm leading-6">{c.note.summary}</p>
              <p className="flex items-center gap-2 text-sm font-medium text-teal-foreground">
                <PhoneForwarded className="size-4" />
                {c.note.action}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <AnimateIn className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-teal-soft p-10 sm:flex-row sm:items-center sm:p-14">
            <h2 className="font-heading max-w-xl text-2xl leading-tight font-semibold sm:text-3xl">{c.ctaTitle}</h2>
            <DemoCta />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
