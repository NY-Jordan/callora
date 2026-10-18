"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Filter,
  Inbox,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Workflow,
} from "lucide-react"

import { LinkButton } from "@/components/ui/button"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { useSectorCopy } from "../sectors/kit"
import { SectionHeading } from "../section-heading"
import { CalloraMsgPricingSection } from "./pricing-section"
import { SocialIcon } from "./social-icon"

const problemIcons = [Inbox, MessageCircle, Timer]
const stepIcons = [Workflow, Sparkles, Filter]
const featureIcons = [Filter, Sparkles, Users, BarChart3, ShieldCheck, Timer]

const copy = {
  fr: {
    badge: "Nouveau concept Callora",
    title: "Un seul endroit pour tous les messages que vous recevez.",
    subtitle:
      "Instagram, Facebook et WhatsApp pour commencer — Callora Msg centralise, trie et priorise vos messages pour que rien d'important ne se perde dans le flot.",
    ctaPrimary: "Rejoindre la liste d'attente",
    ctaSecondary: "Voir comment ça marche",
    heroBadges: ["Multi-canal", "Tri assisté par IA", "Vous restez aux commandes"],
    previewInstagram: "« Vous faites les devis le week-end ? »",
    previewInstagramTime: "09:14",
    previewWhatsapp: "« Je confirme pour jeudi 14h ! »",
    previewWhatsappTime: "09:16",
    summaryLabel: "Callora Msg a trié vos messages",
    summaryText: "1 urgent · 4 à traiter · 18 classés",
    problem: {
      eyebrow: "Le problème",
      title: "Les messages arrivent de partout. Vous, vous êtes seul·e.",
      description:
        "Entre les DM, les avis, les demandes de devis et les blagues de groupe, trouver ce qui compte vraiment devient un travail à temps plein.",
      situations: [
        {
          title: "Dispersés sur tous les réseaux",
          detail:
            "Instagram, WhatsApp, Messenger, LinkedIn… chaque canal a son appli, ses notifications et sa propre file d'attente.",
        },
        {
          title: "Les messages importants se noient",
          detail:
            "Une demande de devis peut se perdre entre deux messages publicitaires ou une blague envoyée dans un groupe.",
        },
        {
          title: "Répondre prend trop de temps",
          detail:
            "Le temps que vous ouvriez la bonne appli, le client a déjà trouvé une réponse ailleurs.",
        },
      ],
      closing: "Callora Msg s'occupe du tri, vous vous concentrez sur ce qui compte.",
    },
    how: {
      eyebrow: "Comment ça marche",
      title: "Trois étapes, une seule boîte de réception.",
      description: "Callora Msg se branche sur vos canaux existants et fait le gros du travail.",
      steps: [
        {
          title: "Connectez vos canaux",
          detail: "Instagram, Facebook et WhatsApp Business pour commencer, d'autres canaux arrivent ensuite.",
        },
        {
          title: "L'IA trie et priorise",
          detail:
            "Callora Msg identifie l'urgent, le commercial, le support et le spam, et prépare une réponse pour chacun.",
        },
        {
          title: "Vous gardez le contrôle",
          detail: "Validez, modifiez ou laissez l'IA répondre selon les règles que vous définissez.",
        },
      ],
    },
    features: {
      eyebrow: "Ce que vous obtenez",
      title: "Fait pour ceux qui reçoivent trop de messages pour tout gérer seuls.",
      description: "Chaque fonctionnalité est pensée pour réduire le temps entre un message reçu et une réponse donnée.",
      items: [
        { title: "Tri automatique par priorité", detail: "L'urgent en haut, le reste en dessous — sans que vous ayez à trier manuellement." },
        { title: "Réponses suggérées par IA", detail: "Une réponse prête, adaptée au ton de votre business, à valider en un clic." },
        { title: "Une boîte pour toute l'équipe", detail: "Plusieurs personnes peuvent répondre sans se marcher sur les pieds." },
        { title: "Statistiques de charge", detail: "Volume de messages, temps de réponse moyen, canaux les plus actifs." },
        { title: "Alertes sur les messages urgents", detail: "Vous êtes prévenu immédiatement quand quelque chose ne peut pas attendre." },
        { title: "Vos données restent privées", detail: "Vos conversations ne servent qu'à vous répondre, jamais à autre chose." },
      ],
    },
    finalCtaTitle: "Soyez parmi les premiers à essayer Callora Msg.",
    finalCtaSubhead: "Inscrivez-vous en moins d'une minute. On vous préviendra dès l'ouverture des premiers accès.",
    finalCtaButton: "Rejoindre la liste d'attente",
  },
  en: {
    badge: "New from Callora",
    title: "One place for every message you receive.",
    subtitle:
      "Instagram, Facebook, and WhatsApp to start — Callora Msg centralizes, sorts, and prioritizes your messages so nothing important gets lost in the flow.",
    ctaPrimary: "Join the waitlist",
    ctaSecondary: "See how it works",
    heroBadges: ["Multi-channel", "AI-assisted triage", "You stay in control"],
    previewInstagram: "“Do you do quotes on weekends?”",
    previewInstagramTime: "9:14 am",
    previewWhatsapp: "“Confirmed for Thursday 2pm!”",
    previewWhatsappTime: "9:16 am",
    summaryLabel: "Callora Msg sorted your messages",
    summaryText: "1 urgent · 4 to handle · 18 filed away",
    problem: {
      eyebrow: "The problem",
      title: "Messages come from everywhere. You're one person.",
      description:
        "Between DMs, reviews, quote requests, and group chat jokes, finding what actually matters becomes a full-time job.",
      situations: [
        {
          title: "Scattered across every network",
          detail: "Instagram, WhatsApp, Messenger, LinkedIn… each channel has its own app, notifications, and queue.",
        },
        {
          title: "Important messages get buried",
          detail: "A quote request can get lost between two promotional messages or a joke in a group chat.",
        },
        {
          title: "Replying takes too long",
          detail: "By the time you open the right app, the customer has already found an answer elsewhere.",
        },
      ],
      closing: "Callora Msg handles the sorting — you focus on what matters.",
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps, one inbox.",
      description: "Callora Msg plugs into the channels you already use and does the heavy lifting.",
      steps: [
        {
          title: "Connect your channels",
          detail: "Instagram, Facebook, and WhatsApp Business to start, more channels are coming next.",
        },
        {
          title: "AI sorts and prioritizes",
          detail: "Callora Msg flags what's urgent, sales, support, or spam, and drafts a reply for each.",
        },
        {
          title: "You stay in control",
          detail: "Approve, edit, or let the AI reply automatically based on rules you set.",
        },
      ],
    },
    features: {
      eyebrow: "What you get",
      title: "Built for people who get too many messages to handle alone.",
      description: "Every feature is designed to shrink the time between a message landing and a reply going out.",
      items: [
        { title: "Automatic priority sorting", detail: "Urgent on top, everything else below — no manual sorting needed." },
        { title: "AI-suggested replies", detail: "A ready-made reply, matched to your tone, one click away from sending." },
        { title: "One inbox for the whole team", detail: "Several people can reply without stepping on each other." },
        { title: "Load statistics", detail: "Message volume, average response time, most active channels." },
        { title: "Urgent message alerts", detail: "You're notified immediately when something can't wait." },
        { title: "Your data stays private", detail: "Your conversations are only ever used to help you reply." },
      ],
    },
    finalCtaTitle: "Be among the first to try Callora Msg.",
    finalCtaSubhead: "Sign up in under a minute. We'll let you know the moment early access opens.",
    finalCtaButton: "Join the waitlist",
  },
}

export function CalloraMsgPage() {
  const c = useSectorCopy(copy)

  return (
    <>
      <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-teal-soft/80 via-teal-soft/20 to-transparent" />
        <div className="bg-grid-fade absolute inset-0 -z-10" />

        <div className="page-container grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col items-start gap-7">
            <AnimateIn className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-teal" />
              {c.badge}
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
                {c.title}
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.12} className="max-w-xl">
              <p className="text-lg leading-7 text-pretty text-muted-foreground sm:text-xl sm:leading-8">
                {c.subtitle}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.18} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <LinkButton href="/callora-msg/liste-attente" size="lg" className="gap-2">
                {c.ctaPrimary}
                <ArrowRight className="size-4" />
              </LinkButton>
              <LinkButton href="#comment-ca-marche" variant="outline" size="lg">
                {c.ctaSecondary}
              </LinkButton>
            </AnimateIn>

            <AnimateIn delay={0.3} className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              {c.heroBadges.map((badge, i) => (
                <span key={badge} className="flex items-center gap-x-6">
                  {i > 0 ? <span className="h-1 w-1 rounded-full bg-border" /> : null}
                  <span>{badge}</span>
                </span>
              ))}
            </AnimateIn>
          </div>

          <AnimateIn delay={0.15} className="relative mx-auto flex w-full max-w-md flex-col gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <SocialIcon slug="instagram" className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="truncate text-sm text-muted-foreground">{c.previewInstagram}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground/70">{c.previewInstagramTime}</span>
            </div>

            <div className="ml-6 flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <SocialIcon slug="whatsapp" className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="truncate text-sm text-muted-foreground">{c.previewWhatsapp}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground/70">{c.previewWhatsappTime}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="ml-3 flex items-center gap-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-lg"
            >
              <span className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <span className="absolute inset-0 animate-ping rounded-xl bg-teal/30" />
                <Sparkles className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs tracking-wide text-white/60 uppercase">{c.summaryLabel}</p>
                <p className="text-sm font-semibold">{c.summaryText}</p>
              </div>
            </motion.div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-brand py-24 sm:py-28">
        <div className="page-container flex flex-col items-center gap-14">
          <SectionHeading
            tone="dark"
            eyebrow={c.problem.eyebrow}
            title={c.problem.title}
            description={c.problem.description}
          />

          <AnimateStagger className="grid w-full gap-5 sm:grid-cols-3">
            {c.problem.situations.map((situation, i) => {
              const Icon = problemIcons[i]
              return (
                <AnimateStaggerItem key={situation.title}>
                  <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="size-5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-lg font-semibold text-white">{situation.title}</h3>
                      <p className="text-sm leading-6 text-white/60">{situation.detail}</p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>

          <AnimateIn delay={0.15}>
            <p className="max-w-xl text-center text-lg font-medium text-balance text-white/85">
              {c.problem.closing}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section id="comment-ca-marche" className="border-t border-border/70 bg-secondary/30 py-24 sm:py-28">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading eyebrow={c.how.eyebrow} title={c.how.title} description={c.how.description} />

          <AnimateStagger className="grid gap-5 sm:grid-cols-3">
            {c.how.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <AnimateStaggerItem key={step.title}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
                      <Icon className="size-4.5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      <section className="border-t border-border/70 py-24 sm:py-28">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading eyebrow={c.features.eyebrow} title={c.features.title} description={c.features.description} />

          <AnimateStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.items.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <AnimateStaggerItem key={feature.title}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-teal-soft text-teal-foreground">
                      <Icon className="size-4.5" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-base font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{feature.detail}</p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              )
            })}
          </AnimateStagger>
        </div>
      </section>

      <CalloraMsgPricingSection />

      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="page-container">
          <AnimateIn className="relative flex flex-col items-center gap-7 overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="bg-grid-fade absolute inset-0 -z-0 opacity-20" />
            <h2 className="font-heading max-w-2xl text-3xl leading-[1.1] font-semibold text-balance text-white sm:text-4xl lg:text-[2.75rem]">
              {c.finalCtaTitle}
            </h2>
            <p className="max-w-lg text-lg leading-7 text-pretty text-white/70">{c.finalCtaSubhead}</p>
            <LinkButton href="/callora-msg/liste-attente" size="lg" variant="secondary" className="gap-2">
              {c.finalCtaButton}
              <ArrowRight className="size-4" />
            </LinkButton>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
