"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Building2, Check, Home, KeyRound, MapPin, PhoneIncoming, Send, UserCheck } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, Kicker, TryOraCta, useSectorCopy } from "./kit"

const profileIcons = [Home, Building2, KeyRound]
const stepIcons = [PhoneIncoming, UserCheck, Send]

const copy = {
  fr: {
    badge: "Agences immobilières",
    title: "Le prospect appelle maintenant. Pas quand votre agent sort de visite.",
    subtitle:
      "Callora répond à chaque appel de l'agence, qualifie le projet du prospect et envoie une fiche complète à l'agent concerné — pendant qu'il fait visiter.",
    lead: {
      tag: "Prospect qualifié",
      time: "il y a 2 min",
      name: "Julien R.",
      rows: [
        ["Projet", "Achat résidence principale"],
        ["Bien", "T3, 65 m² minimum, balcon"],
        ["Secteur", "Lyon 6e / 3e"],
        ["Budget", "350 000 €"],
        ["Financement", "Accord de principe obtenu"],
        ["Annonce", "Réf. LY-2291"],
      ],
      assigned: "Transmis à Claire (secteur Lyon 6e)",
    },
    qualKicker: "Qualification",
    qualTitle: "Les bonnes questions, selon qui appelle.",
    profiles: [
      { tab: "Acheteur", questions: ["Type de bien et surface", "Secteurs recherchés", "Budget et situation de financement", "Bien à vendre avant d'acheter ?", "Annonce à l'origine de l'appel"] },
      { tab: "Vendeur", questions: ["Adresse et type de bien", "Surface et nombre de pièces", "Délai de vente souhaité", "Demande d'estimation", "Disponibilités pour une visite"] },
      { tab: "Locataire", questions: ["Logement visé et loyer max", "Date d'entrée souhaitée", "Situation professionnelle", "Garant éventuel", "Créneaux de visite possibles"] },
    ],
    speedKicker: "Réactivité",
    speedTitle: "Trois minutes entre l'appel et la fiche dans la poche de l'agent.",
    steps: [
      { time: "18:42", title: "Appel sur l'annonce", detail: "Le prospect appelle après les heures d'agence." },
      { time: "18:44", title: "Projet qualifié", detail: "Callora recueille budget, secteur, financement." },
      { time: "18:45", title: "Fiche transmise", detail: "L'agent du secteur reçoit le résumé complet." },
    ],
    speedNote: "Horaires donnés à titre d'exemple.",
    routeKicker: "Répartition",
    routeTitle: "Chaque demande atterrit chez le bon agent.",
    routeText: "Par secteur, par type de transaction ou par annonce : vous définissez les règles, Callora les applique.",
    agents: [
      { name: "Claire", zone: "Lyon 6e · Achat" },
      { name: "Mehdi", zone: "Lyon 3e · Location" },
      { name: "Anne", zone: "Villeurbanne · Estimation" },
    ],
    ctaTitle: "Ne laissez plus un mandat partir chez le concurrent.",
  },
  en: {
    badge: "Real estate agencies",
    title: "The prospect is calling now. Not when your agent finishes a viewing.",
    subtitle:
      "Callora answers every agency call, qualifies the prospect's project, and sends a complete lead sheet to the right agent — while they're showing a property.",
    lead: {
      tag: "Qualified lead",
      time: "2 min ago",
      name: "Julien R.",
      rows: [
        ["Project", "Buying a primary home"],
        ["Property", "2-bed, 65 m² min, balcony"],
        ["Area", "Lyon 6th / 3rd"],
        ["Budget", "€350,000"],
        ["Financing", "Mortgage pre-approved"],
        ["Listing", "Ref. LY-2291"],
      ],
      assigned: "Sent to Claire (Lyon 6th area)",
    },
    qualKicker: "Qualification",
    qualTitle: "The right questions, depending on who's calling.",
    profiles: [
      { tab: "Buyer", questions: ["Property type and size", "Target areas", "Budget and financing status", "Need to sell first?", "Listing that prompted the call"] },
      { tab: "Seller", questions: ["Address and property type", "Size and number of rooms", "Desired timeline", "Valuation request", "Availability for a visit"] },
      { tab: "Tenant", questions: ["Target home and max rent", "Desired move-in date", "Employment situation", "Guarantor, if any", "Possible viewing times"] },
    ],
    speedKicker: "Speed to lead",
    speedTitle: "Three minutes from the call to the lead sheet in your agent's pocket.",
    steps: [
      { time: "6:42 pm", title: "Call about a listing", detail: "The prospect calls after agency hours." },
      { time: "6:44 pm", title: "Project qualified", detail: "Callora collects budget, area, financing." },
      { time: "6:45 pm", title: "Lead sent", detail: "The area agent receives the full summary." },
    ],
    speedNote: "Times shown as an example.",
    routeKicker: "Routing",
    routeTitle: "Every request lands with the right agent.",
    routeText: "By area, transaction type, or listing: you set the rules, Callora applies them.",
    agents: [
      { name: "Claire", zone: "Lyon 6th · Sales" },
      { name: "Mehdi", zone: "Lyon 3rd · Rentals" },
      { name: "Anne", zone: "Villeurbanne · Valuations" },
    ],
    ctaTitle: "Stop losing listings to the agency next door.",
  },
}

export function AgencesImmobilieresPage() {
  const c = useSectorCopy(copy)
  const [profile, setProfile] = useState(0)

  return (
    <>
      {/* Hero: dark, with a lead card */}
      <section id="top" className="relative overflow-hidden bg-brand pt-16 pb-24 text-brand-foreground sm:pt-24 lg:pt-28">
        <div className="bg-grid-fade absolute inset-0 opacity-20" />
        <div className="page-container relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
              <Building2 className="size-3.5" />
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

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto w-full max-w-sm rounded-2xl bg-card p-6 text-card-foreground shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
                <Check className="size-3" />
                {c.lead.tag}
              </span>
              <span className="text-xs text-muted-foreground">{c.lead.time}</span>
            </div>
            <p className="font-heading mt-4 text-xl font-semibold">{c.lead.name}</p>
            <dl className="mt-4 flex flex-col divide-y divide-border text-sm">
              {c.lead.rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-center gap-2 rounded-xl bg-teal-soft px-3 py-2.5 text-xs font-medium text-teal-foreground">
              <Send className="size-3.5" />
              {c.lead.assigned}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualification by profile: segmented control + checklist */}
      <section className="py-24 sm:py-28">
        <div className="page-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimateIn className="flex flex-col gap-6">
            <Kicker>{c.qualKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.qualTitle}</h2>
            <div className="inline-flex w-fit rounded-full bg-secondary p-1" role="tablist">
              {c.profiles.map((p, i) => {
                const Icon = profileIcons[i]
                return (
                  <button
                    key={p.tab}
                    type="button"
                    role="tab"
                    aria-selected={profile === i}
                    onClick={() => setProfile(i)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      profile === i ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="size-4" />
                    {p.tab}
                  </button>
                )
              })}
            </div>
          </AnimateIn>

          <AnimatePresence mode="wait">
            <motion.ol
              key={profile}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              {c.profiles[profile].questions.map((q, i) => (
                <li key={q} className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-medium">{q}</span>
                  <Check className="size-4 text-success" />
                </li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </section>

      {/* Speed to lead: horizontal timeline */}
      <section className="border-y border-border/70 bg-secondary/40 py-24 sm:py-28">
        <div className="page-container flex flex-col gap-14">
          <AnimateIn className="flex max-w-2xl flex-col gap-4">
            <Kicker>{c.speedKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.speedTitle}</h2>
          </AnimateIn>
          <AnimateStagger className="relative grid gap-8 md:grid-cols-3">
            <div className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-border md:block" />
            {c.steps.map((s, i) => {
              const Icon = stepIcons[i]
              return (
                <AnimateStaggerItem key={s.title} className="relative flex flex-col items-center gap-3 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground ring-8 ring-secondary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-2xl font-semibold">{s.time}</span>
                  <p className="font-heading text-lg font-semibold">{s.title}</p>
                  <p className="max-w-xs text-sm text-muted-foreground">{s.detail}</p>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
          <p className="text-center text-xs text-muted-foreground">{c.speedNote}</p>
        </div>
      </section>

      {/* Routing to agents */}
      <section className="py-24 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.routeKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.routeTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.routeText}</p>
          </AnimateIn>
          <AnimateStagger className="grid gap-4 sm:grid-cols-3">
            {c.agents.map((a) => (
              <AnimateStaggerItem key={a.name}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-teal-soft font-heading text-xl font-semibold text-teal-foreground">
                    {a.name[0]}
                  </span>
                  <p className="font-semibold">{a.name}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" />
                    {a.zone}
                  </p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <AnimateIn className="flex flex-col items-start justify-between gap-6 border-t-2 border-foreground pt-10 sm:flex-row sm:items-center">
            <h2 className="font-heading max-w-xl text-3xl font-semibold tracking-tight">{c.ctaTitle}</h2>
            <DemoCta />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
