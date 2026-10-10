"use client"

import { motion } from "framer-motion"
import { Clock, Euro, Hand, MessageCircle, Scissors, Sparkles, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, TryOraCta, useSectorCopy } from "./kit"

// Slots marked "ora" are the ones requested through Callora in the mock agenda.
const AGENDA: ("busy" | "ora" | "free")[][] = [
  ["busy", "ora", "busy", "free", "busy", "ora"],
  ["ora", "busy", "busy", "ora", "free", "busy"],
  ["busy", "busy", "ora", "busy", "ora", "free"],
  ["free", "ora", "busy", "busy", "busy", "ora"],
  ["busy", "ora", "ora", "busy", "busy", "busy"],
]

const faqIcons = [Clock, Euro, Sparkles, XCircle]

const copy = {
  fr: {
    badge: "Salons de coiffure, instituts, spas",
    title: "Les mains dans les cheveux, le téléphone entre de bonnes mains.",
    subtitle:
      "Pendant une coloration, un soin du visage ou une pose d'ongles, Callora répond à vos clientes, note leurs demandes de rendez-vous et répond aux questions qui reviennent tous les jours.",
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven"],
    legendOra: "Demandes reçues via Callora",
    legendBusy: "Déjà réservé",
    counterTitle: "Pendant une coloration de 45 minutes…",
    counter: [
      { value: "3", label: "appels sonnent dans le vide" },
      { value: "1", label: "cliente tente un autre salon" },
      { value: "0", label: "chance de décrocher sans gants" },
    ],
    counterNote: "Exemple illustratif d'une après-midi chargée.",
    counterAnswer: "Avec Callora, chacun de ces appels reçoit une réponse.",
    faqTitle: "Les questions qu'on vous pose dix fois par jour",
    faqSubtitle: "Vous écrivez la réponse une fois. Callora la donne à chaque appel, avec le ton de votre salon.",
    faq: [
      { q: "« Vous êtes ouverts le lundi ? »", a: "Du mardi au samedi, de 9h à 19h, nocturne le jeudi jusqu'à 21h." },
      { q: "« C'est combien un balayage ? »", a: "À partir de 85 €, selon la longueur. Je note votre demande pour qu'on vous confirme." },
      { q: "« Vous faites les extensions de cils ? »", a: "Oui, avec Inès, le mercredi et le samedi. Souhaitez-vous qu'elle vous rappelle ?" },
      { q: "« Je dois annuler demain 14h. »", a: "C'est noté, je transmets l'annulation au salon pour libérer votre créneau." },
    ],
    teamTitle: "Une demande pour Inès ? Elle arrive à Inès.",
    teamText:
      "Callora sait qui fait quoi dans votre équipe. Quand une cliente demande sa coiffeuse habituelle ou une prestation précise, la demande est transmise avec le bon prénom.",
    team: [
      { name: "Inès", skill: "Cils & sourcils" },
      { name: "Thomas", skill: "Coupe homme & barbe" },
      { name: "Sarah", skill: "Coloration & balayage" },
    ],
    ctaTitle: "Plus jamais « désolée, je n'ai pas pu décrocher ».",
  },
  en: {
    badge: "Hair salons, beauty institutes, spas",
    title: "Your hands are busy. Your phone is in good hands.",
    subtitle:
      "During a color, a facial, or a nail set, Callora answers your clients, takes their booking requests, and handles the questions you hear every single day.",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    legendOra: "Requests received via Callora",
    legendBusy: "Already booked",
    counterTitle: "During a 45-minute color treatment…",
    counter: [
      { value: "3", label: "calls ring unanswered" },
      { value: "1", label: "client tries another salon" },
      { value: "0", label: "chance to pick up with gloves on" },
    ],
    counterNote: "Illustrative example of a busy afternoon.",
    counterAnswer: "With Callora, every one of those calls gets answered.",
    faqTitle: "The questions you get ten times a day",
    faqSubtitle: "Write the answer once. Callora gives it on every call, in your salon's tone.",
    faq: [
      { q: "“Are you open on Mondays?”", a: "Tuesday to Saturday, 9am to 7pm, late opening Thursday until 9pm." },
      { q: "“How much is a balayage?”", a: "From €85 depending on length. I'll log your request so we can confirm." },
      { q: "“Do you do lash extensions?”", a: "Yes, with Inès on Wednesdays and Saturdays. Would you like her to call you back?" },
      { q: "“I need to cancel tomorrow at 2pm.”", a: "Noted — I'm passing the cancellation to the salon to free up your slot." },
    ],
    teamTitle: "A request for Inès? It goes to Inès.",
    teamText:
      "Callora knows who does what on your team. When a client asks for their usual stylist or a specific service, the request is forwarded with the right name.",
    team: [
      { name: "Inès", skill: "Lashes & brows" },
      { name: "Thomas", skill: "Men's cuts & beard" },
      { name: "Sarah", skill: "Color & balayage" },
    ],
    ctaTitle: "No more “sorry, I couldn't pick up.”",
  },
}

export function SalonsPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: soft, rounded, with a week agenda mock */}
      <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 lg:pt-28">
        <div className="absolute -top-40 -right-40 -z-10 size-[520px] rounded-full bg-teal-soft blur-3xl" />
        <div className="absolute top-60 -left-40 -z-10 size-[360px] rounded-full bg-warning-soft blur-3xl" />
        <div className="page-container grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-warning-soft px-3.5 py-1.5 text-xs font-semibold text-foreground">
              <Scissors className="size-3.5" />
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

          <AnimateIn className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-xl backdrop-blur">
            <div className="grid grid-cols-5 gap-2">
              {c.days.map((d, col) => (
                <div key={d} className="flex flex-col gap-2">
                  <p className="text-center text-xs font-semibold text-muted-foreground">{d}</p>
                  {AGENDA.map((row, r) => {
                    const slot = row[col]
                    return (
                      <motion.div
                        key={r}
                        initial={slot === "ora" ? { scale: 0.6, opacity: 0 } : false}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + (r * 5 + col) * 0.04, type: "spring", stiffness: 260, damping: 18 }}
                        className={cn(
                          "h-9 rounded-xl",
                          slot === "ora" && "bg-teal",
                          slot === "busy" && "bg-secondary",
                          slot === "free" && "border border-dashed border-border"
                        )}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-teal" /> {c.legendOra}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-secondary ring-1 ring-border" /> {c.legendBusy}
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Counter band */}
      <section className="bg-warning-soft/60 py-20">
        <div className="page-container flex flex-col items-center gap-10 text-center">
          <AnimateIn className="flex items-center gap-2 text-lg font-medium">
            <Hand className="size-5" />
            {c.counterTitle}
          </AnimateIn>
          <AnimateStagger className="grid w-full max-w-4xl gap-8 sm:grid-cols-3">
            {c.counter.map((item) => (
              <AnimateStaggerItem key={item.label} className="flex flex-col items-center gap-2">
                <span className="font-heading text-7xl font-semibold tracking-tight">{item.value}</span>
                <span className="text-base text-muted-foreground">{item.label}</span>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-xl font-semibold text-teal-foreground">{c.counterAnswer}</p>
            <p className="text-xs text-muted-foreground">{c.counterNote}</p>
          </div>
        </div>
      </section>

      {/* Recurring questions as chat bubbles */}
      <section className="py-24 sm:py-28">
        <div className="page-container flex flex-col gap-12">
          <AnimateIn className="flex max-w-2xl flex-col gap-3">
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.faqTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.faqSubtitle}</p>
          </AnimateIn>
          <AnimateStagger className="grid gap-6 md:grid-cols-2">
            {c.faq.map((item, i) => {
              const Icon = faqIcons[i]
              return (
                <AnimateStaggerItem key={item.q} className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Icon className="size-4 text-muted-foreground" />
                    </span>
                    <p className="rounded-3xl rounded-tl-md bg-secondary px-5 py-3 text-base">{item.q}</p>
                  </div>
                  <div className="flex items-start justify-end gap-3">
                    <p className="max-w-[85%] rounded-3xl rounded-tr-md bg-teal px-5 py-3 text-sm leading-6 text-white">{item.a}</p>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-soft">
                      <MessageCircle className="size-4 text-teal-foreground" />
                    </span>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      {/* Team routing */}
      <section className="border-t border-border/70 py-24 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <AnimateStagger className="order-2 flex flex-col gap-3 lg:order-1">
            {c.team.map((m, i) => (
              <AnimateStaggerItem key={m.name}>
                <div
                  className={cn(
                    "flex items-center gap-4 rounded-full border border-border bg-card p-2 pr-6",
                    i === 0 && "border-teal ring-4 ring-teal-soft"
                  )}
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-heading text-lg font-semibold">
                    {m.name[0]}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.skill}</p>
                  </div>
                  {i === 0 ? <span className="size-2.5 animate-pulse rounded-full bg-teal" /> : null}
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
          <AnimateIn className="order-1 flex flex-col gap-4 lg:order-2">
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.teamTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.teamText}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <AnimateIn className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-teal-soft to-warning-soft px-6 py-16 text-center">
            <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight">{c.ctaTitle}</h2>
            <DemoCta />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
