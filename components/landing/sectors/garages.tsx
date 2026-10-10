"use client"

import { motion } from "framer-motion"
import { CarFront, CircleCheck, CircleX, Disc3, FileSearch, Gauge, PhoneOff, Truck, Wrench } from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, TryOraCta, useSectorCopy } from "./kit"

const callTypeIcons = [Gauge, Disc3, Truck, FileSearch, CarFront]

const copy = {
  fr: {
    badge: "Garages & ateliers automobiles",
    title: "Vous êtes sous le pont. Le client, lui, est au téléphone.",
    subtitle:
      "Callora décroche pendant que vous travaillez, prend les demandes de rendez-vous et de devis avec toutes les infos véhicule, et vous laisse un bon prêt à traiter.",
    ticket: {
      title: "Bon de demande",
      number: "N° 0427",
      rows: [
        ["Client", "M. Petit"],
        ["Véhicule", "Peugeot 308 · 2019"],
        ["Immat.", "GH-512-KL"],
        ["Kilométrage", "~ 98 000 km"],
        ["Motif", "Bruit au freinage, côté avant gauche"],
        ["Dispo", "Mardi ou mercredi matin"],
      ],
      status: "À rappeler pour devis",
    },
    typesTitle: "Ce qui fait sonner le téléphone d'un garage",
    types: [
      { title: "Révision & vidange", detail: "Kilométrage, date du dernier entretien, créneau souhaité." },
      { title: "Pneus", detail: "Dimensions, saison, nombre de pneus à changer." },
      { title: "Panne & dépannage", detail: "Localisation, symptômes, véhicule roulant ou non. Transfert si urgent." },
      { title: "Devis carrosserie", detail: "Type de dégât, photos à envoyer, assurance concernée." },
      { title: "« Ma voiture est prête ? »", detail: "La demande est notée et transmise pour un rappel rapide." },
    ],
    compareTitle: "Une matinée à l'atelier",
    without: "Sans Callora",
    withC: "Avec Callora",
    withoutItems: [
      "Vous posez la clé, enlevez les gants, décrochez",
      "Vous notez l'immat' sur un bout de carton",
      "Trois appels manqués pendant un diagnostic",
      "Le client du devis carrosserie a appelé ailleurs",
    ],
    withItems: [
      "Vous terminez votre intervention sans interruption",
      "Chaque demande arrive avec véhicule, motif et dispo",
      "Aucun appel sans réponse, même en plein rush",
      "Les devis sont prêts à être rappelés à la pause",
    ],
    ctaTitle: "Gardez les mains dans le moteur.",
    ctaText: "Callora s'occupe du téléphone.",
  },
  en: {
    badge: "Garages & auto repair shops",
    title: "You're under the lift. Your customer is on the phone.",
    subtitle:
      "Callora picks up while you work, takes booking and quote requests with all the vehicle details, and leaves you a work order ready to handle.",
    ticket: {
      title: "Request ticket",
      number: "No. 0427",
      rows: [
        ["Customer", "Mr. Petit"],
        ["Vehicle", "Peugeot 308 · 2019"],
        ["Plate", "GH-512-KL"],
        ["Mileage", "~ 98,000 km"],
        ["Issue", "Noise when braking, front left"],
        ["Availability", "Tuesday or Wednesday morning"],
      ],
      status: "Call back with quote",
    },
    typesTitle: "What makes a garage phone ring",
    types: [
      { title: "Service & oil change", detail: "Mileage, last service date, preferred slot." },
      { title: "Tyres", detail: "Size, season, how many tyres to replace." },
      { title: "Breakdown & towing", detail: "Location, symptoms, drivable or not. Transferred if urgent." },
      { title: "Bodywork quote", detail: "Type of damage, photos to send, insurer involved." },
      { title: "“Is my car ready?”", detail: "The request is logged and passed on for a quick callback." },
    ],
    compareTitle: "A morning in the shop",
    without: "Without Callora",
    withC: "With Callora",
    withoutItems: [
      "Put down the wrench, take off the gloves, pick up",
      "Write the plate number on a scrap of cardboard",
      "Three missed calls during a diagnostic",
      "The bodywork quote customer called elsewhere",
    ],
    withItems: [
      "Finish the job without interruption",
      "Every request comes with vehicle, issue, and availability",
      "No unanswered calls, even during the rush",
      "Quotes ready to call back on your break",
    ],
    ctaTitle: "Keep your hands on the engine.",
    ctaText: "Callora handles the phone.",
  },
}

export function GaragesPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: bold uppercase + work-order ticket */}
      <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 lg:pt-28">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-3 bg-[repeating-linear-gradient(-45deg,var(--warning)_0_14px,var(--foreground)_14px_28px)] opacity-80"
        />
        <div className="page-container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-1.5 text-xs font-bold tracking-wider text-background uppercase">
              <Wrench className="size-3.5" />
              {c.badge}
            </span>
            <h1 className="font-heading text-4xl leading-[1] font-extrabold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-pretty text-muted-foreground">{c.subtitle}</p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <DemoCta />
              <TryOraCta />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 14 }}
            className="mx-auto w-full max-w-sm rounded-md border-2 border-dashed border-foreground/40 bg-card p-6 font-mono text-sm shadow-[8px_8px_0_0_var(--warning)]"
          >
            <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
              <span className="font-bold uppercase">{c.ticket.title}</span>
              <span className="text-muted-foreground">{c.ticket.number}</span>
            </div>
            <dl className="flex flex-col gap-2.5 py-4">
              {c.ticket.rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-2">
                  <dt className="text-muted-foreground uppercase">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t-2 border-dashed border-foreground/30 pt-3">
              <span className="inline-block -rotate-2 rounded border-2 border-warning px-2 py-1 text-xs font-bold text-warning uppercase">
                {c.ticket.status}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call types: dense grid */}
      <section className="bg-foreground py-24 text-background sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn>
            <h2 className="font-heading max-w-2xl text-3xl font-extrabold tracking-tight uppercase sm:text-4xl">{c.typesTitle}</h2>
          </AnimateIn>
          <AnimateStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.types.map((type, i) => {
              const Icon = callTypeIcons[i]
              return (
                <AnimateStaggerItem key={type.title}>
                  <div className="flex h-full flex-col gap-4 rounded-md border border-background/15 p-5">
                    <Icon className="size-7 text-warning" />
                    <p className="font-heading font-bold">{type.title}</p>
                    <p className="text-sm leading-6 text-background/60">{type.detail}</p>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      {/* Before / after */}
      <section className="py-24 sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight uppercase sm:text-4xl">{c.compareTitle}</h2>
          </AnimateIn>
          <div className="grid gap-5 md:grid-cols-2">
            <AnimateIn className="rounded-md border-2 border-border p-7">
              <p className="mb-5 flex items-center gap-2 font-bold text-muted-foreground uppercase">
                <PhoneOff className="size-4" />
                {c.without}
              </p>
              <ul className="flex flex-col gap-4">
                {c.withoutItems.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CircleX className="mt-0.5 size-5 shrink-0 text-danger" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.1} className="rounded-md border-2 border-foreground bg-warning-soft p-7">
              <p className="mb-5 flex items-center gap-2 font-bold uppercase">
                <Wrench className="size-4" />
                {c.withC}
              </p>
              <ul className="flex flex-col gap-4">
                {c.withItems.map((item) => (
                  <li key={item} className="flex gap-3 font-medium">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <AnimateIn className="flex flex-col items-start justify-between gap-6 rounded-md bg-warning p-10 text-foreground sm:flex-row sm:items-center">
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-black uppercase">{c.ctaTitle}</h2>
              <p className="text-lg text-black/70">{c.ctaText}</p>
            </div>
            <DemoCta className="bg-black text-white hover:bg-black/80" />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
