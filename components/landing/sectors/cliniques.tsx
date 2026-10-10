"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FileText, HeartPulse, PhoneCall, Pill, ShieldCheck, Siren, CalendarPlus } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, Kicker, TryOraCta, useSectorCopy } from "./kit"

// Illustrative call volume shape for a morning-heavy clinic (not real data).
const HOURLY = [9, 10, 7, 5, 4, 3, 5, 6, 5, 4, 3]
const HOURS = ["8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"]

const motiveIcons = [CalendarPlus, FileText, Pill, Siren]

const copy = {
  fr: {
    badge: "Cliniques & professionnels de santé",
    title: "8h30. Quatre lignes sonnent. Votre accueil n'a que deux mains.",
    subtitle:
      "Callora décroche chaque appel en parallèle, oriente les patients selon leur motif et laisse votre équipe se concentrer sur ceux qui sont dans la salle d'attente.",
    lines: ["Ligne 1", "Ligne 2", "Ligne 3", "Ligne 4"],
    lineStates: ["Demande de rendez-vous", "Question sur des résultats", "Renouvellement d'ordonnance", "Horaires du samedi"],
    answered: "Répondu",
    peakKicker: "Le pic du matin",
    peakTitle: "La plupart des appels arrivent quand l'accueil est le plus occupé.",
    peakText:
      "Ouverture, arrivées des patients, dossiers à préparer : c'est précisément le moment où le téléphone sonne le plus. Callora absorbe ce pic sans file d'attente.",
    peakLegend: "Volume d'appels typique (illustratif)",
    motivesKicker: "Orientation par motif",
    motivesTitle: "Chaque appel suit le chemin que vous avez défini.",
    motives: [
      { tab: "Rendez-vous", caller: "« Je voudrais voir le Dr Martin la semaine prochaine. »", ora: "Callora note le praticien souhaité, les disponibilités du patient et le motif, puis transmet la demande à l'accueil." },
      { tab: "Résultats", caller: "« Mes résultats d'analyse sont-ils arrivés ? »", ora: "Callora ne communique aucun résultat. Elle enregistre la demande et la transmet au secrétariat médical pour rappel." },
      { tab: "Ordonnance", caller: "« J'ai besoin du renouvellement de mon traitement. »", ora: "Callora recueille le nom du traitement et du médecin traitant, et crée une demande à traiter par l'équipe." },
      { tab: "Urgence", caller: "« Mon père a une douleur dans la poitrine. »", ora: "Callora rappelle immédiatement d'appeler le 15 et, si vous l'avez configuré, transfère l'appel à un membre de l'équipe." },
    ],
    safetyKicker: "Garde-fous",
    safetyTitle: "Un accueil, pas un médecin.",
    safety: [
      { title: "Aucun avis médical", detail: "Callora ne pose pas de diagnostic et ne donne pas de conseil de traitement." },
      { title: "Urgences vitales", detail: "Les signaux d'alerte déclenchent la consigne d'appeler le 15 ou le 112." },
      { title: "Escalade configurable", detail: "Vous choisissez quels motifs sont transférés à votre équipe en direct." },
      { title: "Traçabilité", detail: "Chaque échange est résumé et consultable par votre équipe dans le tableau de bord." },
    ],
    ctaTitle: "Libérez votre accueil des appels qu'il ne peut pas prendre.",
  },
  en: {
    badge: "Clinics & healthcare providers",
    title: "8:30 am. Four lines ringing. Your front desk has two hands.",
    subtitle:
      "Callora picks up every call in parallel, routes patients by reason, and lets your team focus on the people already in the waiting room.",
    lines: ["Line 1", "Line 2", "Line 3", "Line 4"],
    lineStates: ["Appointment request", "Question about results", "Prescription renewal", "Saturday hours"],
    answered: "Answered",
    peakKicker: "The morning peak",
    peakTitle: "Most calls arrive when the front desk is busiest.",
    peakText:
      "Opening, patient arrivals, files to prepare: that's exactly when the phone rings most. Callora absorbs the peak with no hold queue.",
    peakLegend: "Typical call volume (illustrative)",
    motivesKicker: "Routing by reason",
    motivesTitle: "Every call follows the path you defined.",
    motives: [
      { tab: "Appointment", caller: "“I'd like to see Dr. Martin next week.”", ora: "Callora notes the preferred provider, the patient's availability and reason, then forwards the request to the front desk." },
      { tab: "Results", caller: "“Have my lab results come in?”", ora: "Callora never shares results. It logs the request and forwards it to the medical secretary for a callback." },
      { tab: "Prescription", caller: "“I need my treatment renewed.”", ora: "Callora collects the medication name and the physician, and creates a request for the team." },
      { tab: "Emergency", caller: "“My father has chest pain.”", ora: "Callora immediately tells the caller to dial emergency services and, if configured, transfers the call to a team member." },
    ],
    safetyKicker: "Guardrails",
    safetyTitle: "A front desk, not a doctor.",
    safety: [
      { title: "No medical advice", detail: "Callora doesn't diagnose and doesn't give treatment advice." },
      { title: "Life-threatening emergencies", detail: "Warning signs trigger the instruction to call emergency services." },
      { title: "Configurable escalation", detail: "You choose which reasons get transferred live to your team." },
      { title: "Traceability", detail: "Every conversation is summarized and available to your team in the dashboard." },
    ],
    ctaTitle: "Free your front desk from the calls it can't take.",
  },
}

export function CliniquesPage() {
  const c = useSectorCopy(copy)
  const [active, setActive] = useState(0)
  const max = Math.max(...HOURLY)
  const motive = c.motives[active]

  return (
    <>
      {/* Hero: centered, with a 4-line switchboard below */}
      <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 lg:pt-28">
        <div className="bg-grid-fade absolute inset-0 -z-10" />
        <div className="page-container flex flex-col items-center gap-12 text-center">
          <div className="flex max-w-3xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-teal-foreground">
              <HeartPulse className="size-4" />
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

          <div className="grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.lines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 text-left shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <PhoneCall className="size-3.5" />
                    {line}
                  </span>
                  <span className="relative size-2 rounded-full bg-warning">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + i * 0.35 }}
                      className="absolute inset-0 rounded-full bg-success"
                    />
                  </span>
                </div>
                <p className="text-sm font-medium">{c.lineStates[i]}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.35 }}
                  className="text-xs text-success"
                >
                  {c.answered}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Morning peak bar chart */}
      <section className="border-t border-border/70 py-24 sm:py-28">
        <div className="page-container grid items-center gap-14 lg:grid-cols-2">
          <AnimateIn className="flex flex-col gap-4">
            <Kicker>{c.peakKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.peakTitle}</h2>
            <p className="text-lg leading-7 text-muted-foreground">{c.peakText}</p>
          </AnimateIn>
          <AnimateIn delay={0.1} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-56 items-end gap-2" role="img" aria-label={c.peakLegend}>
              {HOURLY.map((v, i) => (
                <motion.div
                  key={HOURS[i]}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(v / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className={cn("flex-1 rounded-t-md", i < 2 ? "bg-teal" : "bg-teal/25")}
                />
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              {HOURS.map((h) => (
                <span key={h} className="flex-1 text-center text-[10px] text-muted-foreground">
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{c.peakLegend}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Routing by reason: tabs */}
      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="page-container flex flex-col items-center gap-10">
          <AnimateIn className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Kicker>{c.motivesKicker}</Kicker>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.motivesTitle}</h2>
          </AnimateIn>

          <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {c.motives.map((m, i) => {
              const Icon = motiveIcons[i]
              return (
                <button
                  key={m.tab}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === i ? "bg-brand text-brand-foreground" : "bg-card text-muted-foreground ring-1 ring-border hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  {m.tab}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid w-full max-w-3xl gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
                <p className="text-lg leading-7 italic">{motive.caller}</p>
              </div>
              <div className="rounded-2xl bg-brand p-6 text-brand-foreground">
                <p className="text-sm leading-6 text-white/85">{motive.ora}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Guardrails: dark band */}
      <section className="py-24 sm:py-28">
        <div className="page-container">
          <div className="rounded-3xl bg-brand px-6 py-14 text-brand-foreground sm:px-12">
            <AnimateIn className="mb-10 flex items-center gap-3">
              <ShieldCheck className="size-6 text-teal" />
              <div>
                <Kicker>{c.safetyKicker}</Kicker>
                <h2 className="font-heading text-3xl font-semibold tracking-tight">{c.safetyTitle}</h2>
              </div>
            </AnimateIn>
            <AnimateStagger className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {c.safety.map((s) => (
                <AnimateStaggerItem key={s.title} className="bg-brand p-6">
                  <p className="font-heading text-lg font-semibold">{s.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/65">{s.detail}</p>
                </AnimateStaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </section>

      <section className="pb-24 text-center">
        <div className="page-container flex flex-col items-center gap-6">
          <h2 className="font-heading max-w-2xl text-2xl font-semibold sm:text-3xl">{c.ctaTitle}</h2>
          <DemoCta />
        </div>
      </section>
    </>
  )
}
