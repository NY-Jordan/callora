// Single source of truth for Callora Msg's prepaid credit pricing. Update
// prices/credits/costs here only — the pricing section and any future
// checkout flow should read from this file rather than hardcoding numbers.
import { CALLORA_MSG_WAITLIST_HREF } from "./site-config"

export type CalloraMsgChannel = "instagram" | "facebook" | "whatsapp"

// Credits consumed per successfully sent AI reply. Incoming messages, failed
// sends, and replies that don't require an AI-generated response are free.
export const calloraMsgCreditCost: Record<CalloraMsgChannel, number> = {
  instagram: 1,
  facebook: 1,
  whatsapp: 3,
}

export type CalloraMsgPack = {
  id: "decouverte" | "starter" | "business" | "pro"
  name: { fr: string; en: string }
  priceFcfa: number
  credits: number
  recommended?: boolean
  // Checkout isn't live yet. Set this once a real payment integration exists;
  // until then every pack falls back to CALLORA_MSG_WAITLIST_HREF below.
  checkoutHref?: string
}

export const calloraMsgPacks: CalloraMsgPack[] = [
  { id: "decouverte", name: { fr: "Découverte", en: "Discovery" }, priceFcfa: 3000, credits: 500 },
  { id: "starter", name: { fr: "Starter", en: "Starter" }, priceFcfa: 6500, credits: 1100 },
  {
    id: "business",
    name: { fr: "Business", en: "Business" },
    priceFcfa: 13000,
    credits: 2400,
    recommended: true,
  },
  { id: "pro", name: { fr: "Pro", en: "Pro" }, priceFcfa: 26000, credits: 5200 },
]

export function getCalloraMsgPackHref(pack: CalloraMsgPack) {
  return pack.checkoutHref ?? CALLORA_MSG_WAITLIST_HREF
}

export function maxRepliesForChannel(credits: number, channel: CalloraMsgChannel) {
  return Math.floor(credits / calloraMsgCreditCost[channel])
}

export function formatFcfa(amount: number, locale: "fr" | "en" = "fr") {
  const formatted = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US").format(amount)
  return `${formatted} FCFA`
}

export function formatNumber(amount: number, locale: "fr" | "en" = "fr") {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US").format(amount)
}
