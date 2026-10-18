"use client"

import { Check } from "lucide-react"

import { LinkButton } from "@/components/ui/button"
import {
  calloraMsgCreditCost,
  calloraMsgPacks,
  formatFcfa,
  formatNumber,
  getCalloraMsgPackHref,
  maxRepliesForChannel,
  type CalloraMsgChannel,
} from "@/lib/callora-msg-pricing"
import { cn } from "@/lib/utils"

import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "../animate-in"
import { useLanguage } from "../language-provider"
import { useSectorCopy } from "../sectors/kit"
import { SectionHeading } from "../section-heading"
import { SocialIcon, type SocialSlug } from "./social-icon"

// FCFA is the currency of the francophone West/Central African market Callora
// Msg targets at launch, but the page itself stays bilingual like the rest of
// the site — only the channel names below are shared as-is across locales.
const channelSlugs: Array<{ slug: SocialSlug; channel: CalloraMsgChannel; name: string }> = [
  { slug: "instagram", channel: "instagram", name: "Instagram" },
  { slug: "facebook", channel: "facebook", name: "Facebook Messenger" },
  { slug: "whatsapp", channel: "whatsapp", name: "WhatsApp" },
]

const comingSoonSlugs: Array<{ slug: SocialSlug; name: string }> = [
  { slug: "linkedin", name: "LinkedIn" },
  { slug: "tiktok", name: "TikTok" },
  { slug: "x", name: "X (Twitter)" },
  { slug: "google", name: "Google Business Messages" },
  { slug: "sms", name: "SMS" },
  { slug: "email", name: "Email" },
]

const copy = {
  fr: {
    eyebrow: "Tarifs",
    title: "Des crédits, pas un abonnement.",
    description:
      "Achetez un pack de crédits et utilisez-les comme bon vous semble sur Instagram, Facebook Messenger et WhatsApp — disponibles dès le lancement.",
    noSubscription: "Pas d'abonnement obligatoire. Achetez des crédits quand vous en avez besoin.",
    creditCostSuffix: (cost: number) => `crédit${cost > 1 ? "s" : ""} / réponse envoyée`,
    recommended: "Recommandé",
    creditsIncluded: "crédits inclus",
    bulletInstaFacebook: (count: string) => `Jusqu'à ${count} réponses Instagram ou Facebook`,
    bulletWhatsapp: (count: string) => `ou jusqu'à ${count} réponses WhatsApp`,
    bulletCombinable: "Crédits combinables entre vos canaux",
    cta: "Choisir ce pack",
    footnote1:
      "1 crédit = 1 réponse générée par l'IA et envoyée avec succès sur Instagram ou Facebook Messenger. 3 crédits = 1 réponse envoyée sur WhatsApp. Les crédits sont partagés entre vos canaux connectés et ne sont décomptés que pour les réponses envoyées avec succès — messages reçus, échecs d'envoi et réponses ne nécessitant pas l'IA ne consomment aucun crédit.",
    footnote2:
      "Packs achetés une seule fois, sans reconduction automatique. Prix de lancement, modifiables. Le coût réel d'une réponse WhatsApp peut varier selon la catégorie de message, le pays du destinataire et les frais appliqués par les fournisseurs.",
    comingSoonLabel: "Bientôt disponibles",
    comingSoonNote:
      "Ces canaux arriveront selon les retours de la liste d'attente — inscrivez-vous pour les demander en priorité.",
  },
  en: {
    eyebrow: "Pricing",
    title: "Credits, not a subscription.",
    description:
      "Buy a credit pack and use it however you like across Instagram, Facebook Messenger, and WhatsApp — available from launch.",
    noSubscription: "No mandatory subscription. Buy credits whenever you need them.",
    creditCostSuffix: (cost: number) => `credit${cost > 1 ? "s" : ""} / reply sent`,
    recommended: "Recommended",
    creditsIncluded: "credits included",
    bulletInstaFacebook: (count: string) => `Up to ${count} Instagram or Facebook replies`,
    bulletWhatsapp: (count: string) => `or up to ${count} WhatsApp replies`,
    bulletCombinable: "Credits can be combined across your channels",
    cta: "Choose this pack",
    footnote1:
      "1 credit = 1 AI-generated reply successfully sent on Instagram or Facebook Messenger. 3 credits = 1 reply sent on WhatsApp. Credits are shared across your connected channels and are only deducted for successfully sent replies — incoming messages, failed sends, and replies that don't need AI are free.",
    footnote2:
      "Packs are one-time purchases with no auto-renewal. Launch pricing, subject to change. The actual cost of a WhatsApp reply can vary by message category, recipient country, and provider fees.",
    comingSoonLabel: "Coming soon",
    comingSoonNote:
      "These channels will roll out based on waitlist feedback — sign up to request them as a priority.",
  },
}

export function CalloraMsgPricingSection() {
  const { locale } = useLanguage()
  const c = useSectorCopy(copy)

  return (
    <section id="tarifs" className="border-t border-border/70 bg-secondary/30 py-24 sm:py-28">
      <div className="page-container flex flex-col gap-14">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <AnimateIn className="mx-auto w-fit rounded-full border border-border bg-card px-4 py-2 text-center text-sm font-medium text-foreground shadow-sm">
          {c.noSubscription}
        </AnimateIn>

        <AnimateStagger className="grid gap-4 sm:grid-cols-3">
          {channelSlugs.map((row) => {
            const cost = calloraMsgCreditCost[row.channel]
            return (
              <AnimateStaggerItem key={row.channel}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <SocialIcon slug={row.slug} className="size-5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-foreground">{row.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cost} {c.creditCostSuffix(cost)}
                    </p>
                  </div>
                </div>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>

        <AnimateStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {calloraMsgPacks.map((pack) => {
            const instaReplies = formatNumber(maxRepliesForChannel(pack.credits, "instagram"), locale)
            const whatsappReplies = formatNumber(maxRepliesForChannel(pack.credits, "whatsapp"), locale)
            return (
              <AnimateStaggerItem key={pack.id}>
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm",
                    pack.recommended ? "border-teal shadow-md ring-2 ring-teal/15" : "border-border"
                  )}
                >
                  <div className={cn("h-1.5", pack.recommended ? "bg-gradient-to-r from-teal via-brand to-teal" : "bg-border")} />

                  <div className="flex flex-1 flex-col gap-5 p-6">
                    {pack.recommended ? (
                      <span className="w-fit rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold tracking-wide text-teal-foreground uppercase">
                        {c.recommended}
                      </span>
                    ) : null}

                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading text-lg font-semibold text-foreground">{pack.name[locale]}</h3>
                      <span className="font-heading text-3xl font-semibold text-foreground">
                        {formatFcfa(pack.priceFcfa, locale)}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {formatNumber(pack.credits, locale)} {c.creditsIncluded}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-2.5 text-sm text-foreground">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {c.bulletInstaFacebook(instaReplies)}
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {c.bulletWhatsapp(whatsappReplies)}
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {c.bulletCombinable}
                      </li>
                    </ul>

                    <LinkButton
                      href={getCalloraMsgPackHref(pack)}
                      size="lg"
                      variant={pack.recommended ? "default" : "outline"}
                      className="mt-auto w-full"
                    >
                      {c.cta}
                    </LinkButton>
                  </div>
                </div>
              </AnimateStaggerItem>
            )
          })}
        </AnimateStagger>

        <AnimateIn className="mx-auto flex max-w-2xl flex-col gap-2 text-center text-xs text-muted-foreground/80">
          <p>{c.footnote1}</p>
          <p>{c.footnote2}</p>
        </AnimateIn>

        <AnimateIn className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 px-6 py-8 text-center">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{c.comingSoonLabel}</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {comingSoonSlugs.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                <SocialIcon slug={item.slug} className="size-4" />
                {item.name}
              </span>
            ))}
          </div>
          <p className="max-w-md text-xs text-muted-foreground/80">{c.comingSoonNote}</p>
        </AnimateIn>
      </div>
    </section>
  )
}
