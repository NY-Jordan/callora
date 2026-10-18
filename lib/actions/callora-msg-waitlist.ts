"use server"

import { headers } from "next/headers"
import { Resend } from "resend"

export type WaitlistErrorCode =
  | "missingFields"
  | "invalidEmail"
  | "invalidWhatsapp"
  | "alreadyRegistered"
  | "serverMisconfigured"
  | "sendFailed"

export type WaitlistState = {
  status: "idle" | "success" | "error"
  error?: WaitlistErrorCode
}

export type WaitlistCheckResult = {
  emailTaken: boolean
  whatsappTaken: boolean
  error?: "serverMisconfigured" | "sendFailed"
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WHATSAPP_PATTERN = /^\+?[\d\s().-]{8,24}$/

/** Human-readable labels for the questionnaire keys, used in the notification email. */
const ANSWER_LABELS: Record<string, string> = {
  lt_10: "Moins de 10 / jour",
  "10_50": "10 à 50 / jour",
  "50_100": "50 à 100 / jour",
  "100_300": "100 à 300 / jour",
  gt_300: "Plus de 300 / jour",
  none: "Presque aucun",
  few: "Quelques-uns (< 10 %)",
  some: "Une partie (10–30 %)",
  many: "Beaucoup (30–50 %)",
  most: "La majorité (> 50 %)",
  phone_manual: "À la main depuis le téléphone",
  desktop_manual: "À la main depuis un ordinateur",
  team: "Un membre de l'équipe dédié",
  quick_replies: "Réponses rapides / modèles",
  chatbot: "Un chatbot / outil d'automatisation",
  agency: "Une agence / un prestataire",
  no_reply: "On n'arrive pas à répondre",
  lt_30m: "Moins de 30 min / jour",
  "30m_1h": "30 min à 1 h / jour",
  "1h_2h": "1 à 2 h / jour",
  "2h_4h": "2 à 4 h / jour",
  gt_4h: "Plus de 4 h / jour",
  yes_fully: "Oui, totalement",
  yes_with_review: "Oui, avec validation avant envoi",
  faq_only: "Seulement pour les questions simples",
  not_sure: "Pas sûr, à voir",
  no: "Non",
}

const label = (key: string) => ANSWER_LABELS[key] ?? key

function apiConfig() {
  const baseUrl = process.env.CALLORA_API_URL
  const key = process.env.WAITLIST_API_KEY
  return baseUrl && key ? { baseUrl: baseUrl.replace(/\/$/, ""), key } : null
}

async function callApi(path: string, body: unknown) {
  const config = apiConfig()
  if (!config) return null

  return fetch(`${config.baseUrl}/api/waitlist${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Waitlist-Key": config.key,
    },
    body: JSON.stringify(body),
    cache: "no-store",
  })
}

async function visitorIp() {
  const h = await headers()
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim()
  return forwarded || h.get("x-real-ip") || null
}

/** Asks the API whether this email / WhatsApp number is already on the waitlist. */
export async function checkCalloraMsgWaitlist(input: {
  email?: string
  whatsapp?: string
}): Promise<WaitlistCheckResult> {
  try {
    const response = await callApi("/check", { ...input, ip_address: await visitorIp() })
    if (!response) return { emailTaken: false, whatsappTaken: false, error: "serverMisconfigured" }
    if (!response.ok) {
      console.error("[callora-msg-waitlist] check failed with status", response.status)
      return { emailTaken: false, whatsappTaken: false, error: "sendFailed" }
    }
    const data = (await response.json()) as { email_taken: boolean; whatsapp_taken: boolean }
    return { emailTaken: data.email_taken, whatsappTaken: data.whatsapp_taken }
  } catch (error) {
    console.error("[callora-msg-waitlist] check request failed:", error)
    return { emailTaken: false, whatsappTaken: false, error: "sendFailed" }
  }
}

export async function submitCalloraMsgWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const field = (name: string) => String(formData.get(name) ?? "").trim()

  const email = field("email")
  const whatsapp = field("whatsapp")
  const business = field("business")
  const networks = formData.getAll("networks").map(String)
  const messagesPerDay = field("messages_per_day")
  const missedMessages = field("missed_messages")
  const replyMethods = formData.getAll("reply_methods").map(String)
  const timeSpent = field("time_spent")
  const aiDelegation = field("ai_delegation")
  const locale = field("locale") === "en" ? "en" : "fr"

  if (
    !email ||
    !whatsapp ||
    !business ||
    networks.length === 0 ||
    !messagesPerDay ||
    !missedMessages ||
    replyMethods.length === 0 ||
    !timeSpent ||
    !aiDelegation
  ) {
    return { status: "error", error: "missingFields" }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", error: "invalidEmail" }
  }
  if (!WHATSAPP_PATTERN.test(whatsapp)) {
    return { status: "error", error: "invalidWhatsapp" }
  }

  // 1. Persist the signup in the Callora API — it is the source of truth and rejects duplicates.
  let response: Response | null
  try {
    response = await callApi("", {
      email,
      whatsapp,
      business,
      networks,
      messages_per_day: messagesPerDay,
      missed_messages: missedMessages,
      reply_methods: replyMethods,
      time_spent: timeSpent,
      ai_delegation: aiDelegation,
      locale,
      ip_address: await visitorIp(),
    })
  } catch (error) {
    console.error("[callora-msg-waitlist] Failed to reach the API:", error)
    return { status: "error", error: "sendFailed" }
  }

  if (!response) {
    console.error("[callora-msg-waitlist] CALLORA_API_URL or WAITLIST_API_KEY is not set.")
    return { status: "error", error: "serverMisconfigured" }
  }
  if (response.status === 422) {
    const data = (await response.json().catch(() => null)) as {
      errors?: Record<string, string[]>
    } | null
    const errors = data?.errors ?? {}
    if (errors.email?.includes("already_registered") || errors.whatsapp?.includes("already_registered")) {
      return { status: "error", error: "alreadyRegistered" }
    }
    if (errors.whatsapp) return { status: "error", error: "invalidWhatsapp" }
    if (errors.email) return { status: "error", error: "invalidEmail" }
    console.error("[callora-msg-waitlist] API rejected the signup:", errors)
    return { status: "error", error: "missingFields" }
  }
  if (!response.ok) {
    console.error("[callora-msg-waitlist] API returned status", response.status)
    return { status: "error", error: "sendFailed" }
  }

  // 2. Notify by email. The signup is already saved, so a mail failure is logged, not surfaced.
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL_TO ?? "ynguetse@gmail.com"
  const fromEmail = process.env.CONTACT_EMAIL_FROM ?? "Callora <onboarding@resend.dev>"

  const details = [
    `Email : ${email}`,
    `WhatsApp : ${whatsapp}`,
    `Business : ${business}`,
    `Réseaux à connecter : ${networks.join(", ")}`,
    "",
    `Messages reçus : ${label(messagesPerDay)}`,
    `Messages ratés : ${label(missedMessages)}`,
    `Comment ils répondent : ${replyMethods.map(label).join(", ")}`,
    `Temps passé à répondre : ${label(timeSpent)}`,
    `Confier une partie des réponses à une IA : ${label(aiDelegation)}`,
  ].join("\n")

  if (!apiKey) {
    console.error("[callora-msg-waitlist] RESEND_API_KEY is not set. Signup saved but not emailed:\n" + details)
    return { status: "success" }
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nouvelle inscription liste d'attente — Callora Msg (${business})`,
      text: details,
    })
    if (error) console.error("[callora-msg-waitlist] Resend returned an error:", error)
  } catch (error) {
    console.error("[callora-msg-waitlist] Failed to send signup email:", error)
  }

  return { status: "success" }
}
