"use client"

import { ArrowUpRight, Scale } from "lucide-react"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { DemoCta, useSectorCopy } from "./kit"

const copy = {
  fr: {
    badge: "Cabinets d'avocats",
    title: "Le premier appel est déjà une consultation.",
    subtitle:
      "Un justiciable qui appelle un cabinet est souvent inquiet, parfois pressé par un délai. Callora lui répond avec la retenue qu'il attend, recueille l'essentiel de sa situation et le dirige vers le bon avocat.",
    quote: "« Je viens de recevoir une assignation, l'audience est dans dix jours. »",
    quoteNote: "Un appel comme celui-ci ne devrait jamais tomber sur une messagerie.",
    stepsTitle: "Le premier contact, en trois temps",
    steps: [
      { n: "I", title: "Accueil", detail: "Une réponse immédiate, au nom de votre cabinet, sur un ton posé et professionnel. Jamais de jargon approximatif." },
      { n: "II", title: "Qualification", detail: "Domaine du droit, nature de la demande, délais en cours, nom de la partie adverse pour vous permettre de vérifier les conflits d'intérêts." },
      { n: "III", title: "Orientation", detail: "La demande est transmise à l'avocat compétent. Les délais courts sont signalés comme prioritaires ou transférés en direct." },
    ],
    areasTitle: "Chaque matière, son interlocuteur",
    areasHead: ["Domaine", "Exemple de demande", "Orienté vers"],
    areas: [
      ["Droit de la famille", "Divorce, garde d'enfants", "Me Lefèvre"],
      ["Droit du travail", "Licenciement contesté", "Me Benali"],
      ["Droit pénal", "Convocation, garde à vue", "Me Rousseau · transfert direct"],
      ["Droit des affaires", "Litige entre associés", "Me Garnier"],
      ["Droit immobilier", "Vice caché, bail commercial", "Me Lefèvre"],
    ],
    articlesTitle: "Nos engagements sur chaque appel",
    articles: [
      { title: "Aucun conseil juridique", detail: "Callora recueille les faits et les transmet. L'analyse et le conseil restent l'affaire de vos avocats." },
      { title: "Discrétion", detail: "Callora ne confirme à aucun tiers qu'une personne est cliente du cabinet." },
      { title: "Priorité aux délais", detail: "Toute mention d'une audience, d'une prescription ou d'une garde à vue déclenche le traitement prioritaire que vous avez défini." },
      { title: "Traçabilité", detail: "Chaque appel fait l'objet d'un résumé écrit, consultable par le cabinet." },
    ],
    ctaTitle: "Offrez à vos futurs clients un accueil à la hauteur de votre cabinet.",
  },
  en: {
    badge: "Law firms",
    title: "The first call is already a consultation.",
    subtitle:
      "Someone calling a law firm is often worried, sometimes up against a deadline. Callora answers with the composure they expect, captures the essentials of their situation, and routes them to the right lawyer.",
    quote: "“I've just been served, and the hearing is in ten days.”",
    quoteNote: "A call like this should never end up in voicemail.",
    stepsTitle: "The first contact, in three stages",
    steps: [
      { n: "I", title: "Welcome", detail: "An immediate answer in your firm's name, in a calm, professional tone. Never sloppy jargon." },
      { n: "II", title: "Qualification", detail: "Area of law, nature of the request, pending deadlines, the opposing party's name so you can run conflict checks." },
      { n: "III", title: "Routing", detail: "The request goes to the right lawyer. Short deadlines are flagged as priority or transferred live." },
    ],
    areasTitle: "Every practice area, its own contact",
    areasHead: ["Area", "Example request", "Routed to"],
    areas: [
      ["Family law", "Divorce, child custody", "Ms. Lefèvre"],
      ["Employment law", "Contested dismissal", "Mr. Benali"],
      ["Criminal law", "Summons, police custody", "Ms. Rousseau · live transfer"],
      ["Corporate law", "Shareholder dispute", "Mr. Garnier"],
      ["Real estate law", "Hidden defects, commercial lease", "Ms. Lefèvre"],
    ],
    articlesTitle: "Our commitments on every call",
    articles: [
      { title: "No legal advice", detail: "Callora gathers the facts and passes them on. Analysis and advice stay with your lawyers." },
      { title: "Discretion", detail: "Callora never confirms to a third party that someone is a client of the firm." },
      { title: "Deadlines first", detail: "Any mention of a hearing, a limitation period, or police custody triggers the priority handling you defined." },
      { title: "Traceability", detail: "Every call gets a written summary, available to the firm." },
    ],
    ctaTitle: "Give future clients a welcome worthy of your firm.",
  },
}

export function AvocatsPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      {/* Hero: editorial, text-only, with a pull quote */}
      <section id="top" className="pt-20 pb-20 sm:pt-28 lg:pt-32">
        <div className="page-container">
          <div className="flex items-center gap-3 border-b border-foreground pb-4 text-sm font-medium tracking-[0.2em] uppercase">
            <Scale className="size-4" />
            {c.badge}
          </div>
          <div className="grid gap-12 pt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-8">
              <h1 className="font-heading text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                {c.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{c.subtitle}</p>
              <DemoCta className="w-fit" />
            </div>
            <AnimateIn delay={0.2} className="flex flex-col justify-end gap-4 border-l-2 border-teal pl-8">
              <p className="font-heading text-2xl leading-snug font-medium text-foreground italic sm:text-3xl">{c.quote}</p>
              <p className="text-sm text-muted-foreground">{c.quoteNote}</p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Three stages with roman numerals */}
      <section className="bg-brand py-24 text-brand-foreground sm:py-28">
        <div className="page-container flex flex-col gap-14">
          <AnimateIn>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{c.stepsTitle}</h2>
          </AnimateIn>
          <AnimateStagger className="grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
            {c.steps.map((s) => (
              <AnimateStaggerItem key={s.n} className="flex flex-col gap-5 bg-brand p-8 md:first:pl-0">
                <span className="font-heading text-5xl font-semibold tracking-wide text-teal">{s.n}</span>
                <p className="font-heading text-xl font-semibold">{s.title}</p>
                <p className="text-sm leading-7 text-white/65">{s.detail}</p>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Practice areas table */}
      <section className="py-24 sm:py-28">
        <div className="page-container flex flex-col gap-10">
          <AnimateIn>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{c.areasTitle}</h2>
          </AnimateIn>
          <AnimateIn className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b-2 border-foreground text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  {c.areasHead.map((h) => (
                    <th key={h} className="py-3 pr-6 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.areas.map(([area, example, to]) => (
                  <tr key={area} className="border-b border-border">
                    <td className="font-heading py-5 pr-6 text-lg font-semibold">{area}</td>
                    <td className="py-5 pr-6 text-muted-foreground">{example}</td>
                    <td className="py-5 text-sm font-medium">
                      <span className="inline-flex items-center gap-1">
                        {to}
                        <ArrowUpRight className="size-3.5 text-teal" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimateIn>
        </div>
      </section>

      {/* Commitments as numbered articles */}
      <section className="border-t border-border bg-secondary/30 py-24 sm:py-28">
        <div className="page-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <AnimateIn>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{c.articlesTitle}</h2>
          </AnimateIn>
          <AnimateStagger className="flex flex-col">
            {c.articles.map((a, i) => (
              <AnimateStaggerItem key={a.title} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-6 first:pt-0">
                <span className="text-xs font-semibold tracking-[0.15em] text-teal uppercase">Art. {i + 1}</span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-heading text-lg font-semibold">{a.title}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{a.detail}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="py-24">
        <div className="page-container flex flex-col items-center gap-8 text-center">
          <h2 className="font-heading max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{c.ctaTitle}</h2>
          <DemoCta />
        </div>
      </section>
    </>
  )
}
