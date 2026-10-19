"use client"

import { useActionState, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  checkCalloraMsgWaitlist,
  submitCalloraMsgWaitlist,
  type WaitlistState,
} from "@/lib/actions/callora-msg-waitlist"
import { cn } from "@/lib/utils"

import { useLanguage } from "../language-provider"
import { SocialIcon, type SocialSlug } from "./social-icon"

const TOTAL_STEPS = 7

const networkSlugs: SocialSlug[] = [
  "instagram",
  "facebook",
  "whatsapp",
  "linkedin",
  "tiktok",
  "x",
  "google",
  "sms",
  "email",
  "other",
]

// Answer keys are stored as-is by the API; only the labels are localized.
const messagesPerDayKeys = ["lt_10", "10_50", "50_100", "100_300", "gt_300"] as const
const missedMessagesKeys = ["none", "few", "some", "many", "most"] as const
const replyMethodKeys = [
  "phone_manual",
  "desktop_manual",
  "team",
  "quick_replies",
  "chatbot",
  "agency",
  "no_reply",
] as const
const timeSpentKeys = ["lt_30m", "30m_1h", "1h_2h", "2h_4h", "gt_4h"] as const
const aiDelegationKeys = ["yes_fully", "yes_with_review", "faq_only", "not_sure", "no"] as const

const copy = {
  fr: {
    stepLabel: (step: number) => `Étape ${step} sur ${TOTAL_STEPS}`,
    step1: {
      title: "Votre email",
      subtitle: "Pour vous prévenir dès que votre accès est prêt.",
      label: "Adresse email",
      placeholder: "vous@entreprise.com",
    },
    step2: {
      title: "Votre numéro WhatsApp",
      subtitle: "Pour échanger rapidement avec vous lors de l'ouverture.",
      label: "Numéro WhatsApp (avec indicatif pays)",
      placeholder: "+33 6 12 34 56 78",
    },
    step3: {
      title: "Votre activité",
      subtitle: "Le nom de votre business ou de votre marque.",
      label: "Nom de l'entreprise / de la marque",
      placeholder: "Ex. Salon Lumière, Cabinet Dupont…",
    },
    step4: {
      title: "Vos réseaux",
      subtitle: "Sélectionnez les canaux que Callora Msg devra gérer pour vous.",
      error: "Choisissez au moins un canal.",
    },
    step5: {
      title: "Vos messages",
      subtitle: "Pour estimer le volume que Callora Msg devra absorber.",
      receivedLabel: "Combien de messages recevez-vous par jour (tous canaux) ?",
      missedLabel: "Quelle part de ces messages restent sans réponse ou répondus trop tard ?",
    },
    step6: {
      title: "Votre façon de répondre",
      subtitle: "Comment ça se passe aujourd'hui.",
      methodsLabel: "Comment répondez-vous actuellement ? (plusieurs choix possibles)",
      timeLabel: "Combien de temps y consacrez-vous par jour ?",
    },
    step7: {
      title: "Et l'IA dans tout ça ?",
      subtitle: "Dernière question, promis.",
      label: "Accepteriez-vous de confier une partie de vos réponses à une IA ?",
    },
    networks: [
      "Instagram",
      "Facebook / Messenger",
      "WhatsApp Business",
      "LinkedIn",
      "TikTok",
      "X (Twitter)",
      "Google Business Messages",
      "SMS",
      "Email",
      "Autre",
    ],
    messagesPerDay: {
      lt_10: "Moins de 10",
      "10_50": "10 à 50",
      "50_100": "50 à 100",
      "100_300": "100 à 300",
      gt_300: "Plus de 300",
    },
    missedMessages: {
      none: "Presque aucun",
      few: "Quelques-uns (< 10 %)",
      some: "Une partie (10–30 %)",
      many: "Beaucoup (30–50 %)",
      most: "La majorité (> 50 %)",
    },
    replyMethods: {
      phone_manual: "À la main, sur mon téléphone",
      desktop_manual: "À la main, sur ordinateur",
      team: "Un membre de l'équipe dédié",
      quick_replies: "Réponses rapides / modèles",
      chatbot: "Un chatbot / outil d'automatisation",
      agency: "Une agence / un prestataire",
      no_reply: "On n'arrive pas à suivre",
    },
    timeSpent: {
      lt_30m: "Moins de 30 min",
      "30m_1h": "30 min à 1 h",
      "1h_2h": "1 à 2 h",
      "2h_4h": "2 à 4 h",
      gt_4h: "Plus de 4 h",
    },
    aiDelegation: {
      yes_fully: "Oui, totalement",
      yes_with_review: "Oui, si je valide avant l'envoi",
      faq_only: "Seulement pour les questions simples",
      not_sure: "Je ne sais pas encore",
      no: "Non",
    },
    back: "Retour",
    next: "Continuer",
    checking: "Vérification…",
    submit: "Rejoindre la liste d'attente",
    submitting: "Envoi…",
    successTitle: "Vous êtes sur la liste !",
    successBody: "Merci — on vous écrit dès que Callora Msg ouvre ses premiers accès.",
    errors: {
      missingFields: "Merci de compléter toutes les étapes avant de valider.",
      invalidEmail: "Cette adresse email ne semble pas valide.",
      invalidWhatsapp: "Ce numéro WhatsApp ne semble pas valide.",
      alreadyRegistered: "Cet email ou ce numéro WhatsApp est déjà inscrit sur la liste d'attente.",
      serverMisconfigured: "Inscription indisponible pour le moment. Réessayez un peu plus tard.",
      sendFailed: "L'envoi a échoué. Réessayez dans un instant.",
    },
    stepRequired: "Ce champ est requis.",
    stepChoiceRequired: "Merci de répondre à chaque question.",
    stepInvalidEmail: "Entrez une adresse email valide.",
    stepInvalidWhatsapp: "Entrez un numéro valide, avec l'indicatif pays (ex. +33…).",
    emailTaken: "Cet email est déjà inscrit sur la liste d'attente.",
    whatsappTaken: "Ce numéro WhatsApp est déjà inscrit sur la liste d'attente.",
  },
  en: {
    stepLabel: (step: number) => `Step ${step} of ${TOTAL_STEPS}`,
    step1: {
      title: "Your email",
      subtitle: "So we can notify you when your access is ready.",
      label: "Email address",
      placeholder: "you@company.com",
    },
    step2: {
      title: "Your WhatsApp number",
      subtitle: "So we can reach you quickly when access opens.",
      label: "WhatsApp number (with country code)",
      placeholder: "+1 555 123 4567",
    },
    step3: {
      title: "Your business",
      subtitle: "The name of your business or brand.",
      label: "Business / brand name",
      placeholder: "E.g. Bright Salon, Doe Law Firm…",
    },
    step4: {
      title: "Your channels",
      subtitle: "Pick the channels you'd like Callora Msg to manage for you.",
      error: "Choose at least one channel.",
    },
    step5: {
      title: "Your messages",
      subtitle: "To size the volume Callora Msg will need to handle.",
      receivedLabel: "How many messages do you receive per day (all channels)?",
      missedLabel: "How many of them go unanswered or get answered too late?",
    },
    step6: {
      title: "How you reply",
      subtitle: "How it works today.",
      methodsLabel: "How do you currently reply? (select all that apply)",
      timeLabel: "How much time do you spend on it per day?",
    },
    step7: {
      title: "What about AI?",
      subtitle: "Last question, promise.",
      label: "Would you let an AI handle part of your replies?",
    },
    networks: [
      "Instagram",
      "Facebook / Messenger",
      "WhatsApp Business",
      "LinkedIn",
      "TikTok",
      "X (Twitter)",
      "Google Business Messages",
      "SMS",
      "Email",
      "Other",
    ],
    messagesPerDay: {
      lt_10: "Fewer than 10",
      "10_50": "10 to 50",
      "50_100": "50 to 100",
      "100_300": "100 to 300",
      gt_300: "More than 300",
    },
    missedMessages: {
      none: "Almost none",
      few: "A few (< 10%)",
      some: "Some (10–30%)",
      many: "Many (30–50%)",
      most: "Most of them (> 50%)",
    },
    replyMethods: {
      phone_manual: "Manually, on my phone",
      desktop_manual: "Manually, on a computer",
      team: "A dedicated team member",
      quick_replies: "Quick replies / templates",
      chatbot: "A chatbot / automation tool",
      agency: "An agency / contractor",
      no_reply: "We can't keep up",
    },
    timeSpent: {
      lt_30m: "Under 30 min",
      "30m_1h": "30 min to 1 h",
      "1h_2h": "1 to 2 h",
      "2h_4h": "2 to 4 h",
      gt_4h: "More than 4 h",
    },
    aiDelegation: {
      yes_fully: "Yes, fully",
      yes_with_review: "Yes, if I approve before sending",
      faq_only: "Only for simple questions",
      not_sure: "Not sure yet",
      no: "No",
    },
    back: "Back",
    next: "Continue",
    checking: "Checking…",
    submit: "Join the waitlist",
    submitting: "Sending…",
    successTitle: "You're on the list!",
    successBody: "Thanks — we'll reach out as soon as Callora Msg opens early access.",
    errors: {
      missingFields: "Please complete every step before submitting.",
      invalidEmail: "This email address doesn't look valid.",
      invalidWhatsapp: "This WhatsApp number doesn't look valid.",
      alreadyRegistered: "This email or WhatsApp number is already on the waitlist.",
      serverMisconfigured: "Signups aren't available right now. Please try again shortly.",
      sendFailed: "Something went wrong. Please try again.",
    },
    stepRequired: "This field is required.",
    stepChoiceRequired: "Please answer each question.",
    stepInvalidEmail: "Enter a valid email address.",
    stepInvalidWhatsapp: "Enter a valid number, including the country code (e.g. +1…).",
    emailTaken: "This email is already on the waitlist.",
    whatsappTaken: "This WhatsApp number is already on the waitlist.",
  },
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WHATSAPP_PATTERN = /^\+?[\d\s().-]{8,24}$/

const initialState: WaitlistState = { status: "idle" }

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"

const choiceClass = (selected: boolean) =>
  cn(
    "flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition-colors",
    selected
      ? "border-teal bg-teal-soft text-teal-foreground"
      : "border-border text-foreground hover:bg-secondary"
  )

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="font-heading text-lg font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}

function ChoiceGroup<K extends string>({
  label,
  options,
  labels,
  value,
  onChange,
}: {
  label: string
  options: readonly K[]
  labels: Record<K, string>
  value: K | K[] | null
  onChange: (key: K) => void
}) {
  const isSelected = (key: K) => (Array.isArray(value) ? value.includes(key) : value === key)

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-sm font-medium text-foreground">{label}</legend>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((key) => (
          <label key={key} className={choiceClass(isSelected(key))}>
            <input
              type={Array.isArray(value) ? "checkbox" : "radio"}
              checked={isSelected(key)}
              onChange={() => onChange(key)}
              className="sr-only"
            />
            {labels[key]}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

type MessagesPerDay = (typeof messagesPerDayKeys)[number]
type MissedMessages = (typeof missedMessagesKeys)[number]
type ReplyMethod = (typeof replyMethodKeys)[number]
type TimeSpent = (typeof timeSpentKeys)[number]
type AiDelegation = (typeof aiDelegationKeys)[number]

const toggle = <T,>(list: T[], item: T) =>
  list.includes(item) ? list.filter((i) => i !== item) : [...list, item]

export function WaitlistForm() {
  const { locale } = useLanguage()
  const c = copy[locale]

  const [state, formAction, pending] = useActionState(submitCalloraMsgWaitlist, initialState)
  const [step, setStep] = useState(1)
  const [checking, setChecking] = useState(false)
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [business, setBusiness] = useState("")
  const [networks, setNetworks] = useState<string[]>([])
  const [messagesPerDay, setMessagesPerDay] = useState<MessagesPerDay | null>(null)
  const [missedMessages, setMissedMessages] = useState<MissedMessages | null>(null)
  const [replyMethods, setReplyMethods] = useState<ReplyMethod[]>([])
  const [timeSpent, setTimeSpent] = useState<TimeSpent | null>(null)
  const [aiDelegation, setAiDelegation] = useState<AiDelegation | null>(null)
  const [stepError, setStepError] = useState<string | null>(null)

  // Surfaced in the browser console so production failures can be diagnosed
  // from devtools without needing access to the server logs.
  useEffect(() => {
    if (state.status === "error") {
      console.error("[callora-msg-waitlist] submit failed:", state.error, state.debug)
    }
  }, [state])

  /** Returns an error message for the current step, or null when it's complete. */
  const validateStep = async (): Promise<string | null> => {
    switch (step) {
      case 1: {
        if (!email.trim()) return c.stepRequired
        if (!EMAIL_PATTERN.test(email.trim())) return c.stepInvalidEmail
        const result = await checkCalloraMsgWaitlist({ email: email.trim() })
        if (result.error) {
          console.error("[callora-msg-waitlist] email check failed:", result.error, result.debug)
          return c.errors[result.error]
        }
        return result.emailTaken ? c.emailTaken : null
      }
      case 2: {
        if (!whatsapp.trim()) return c.stepRequired
        if (!WHATSAPP_PATTERN.test(whatsapp.trim())) return c.stepInvalidWhatsapp
        const result = await checkCalloraMsgWaitlist({ whatsapp: whatsapp.trim() })
        if (result.error) {
          console.error("[callora-msg-waitlist] whatsapp check failed:", result.error, result.debug)
          return c.errors[result.error]
        }
        return result.whatsappTaken ? c.whatsappTaken : null
      }
      case 3:
        return business.trim() ? null : c.stepRequired
      case 4:
        return networks.length > 0 ? null : c.step4.error
      case 5:
        return messagesPerDay && missedMessages ? null : c.stepChoiceRequired
      case 6:
        return replyMethods.length > 0 && timeSpent ? null : c.stepChoiceRequired
      case 7:
        return aiDelegation ? null : c.stepChoiceRequired
      default:
        return null
    }
  }

  const goNext = async () => {
    setChecking(true)
    const error = await validateStep().finally(() => setChecking(false))
    if (error) return setStepError(error)
    setStepError(null)
    setStep((s) => Math.min(TOTAL_STEPS, s + 1))
  }

  const goBack = () => {
    setStepError(null)
    setStep((s) => Math.max(1, s - 1))
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-success-soft text-success">
          <CheckCircle2 className="size-6" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">{c.successTitle}</p>
        <p className="max-w-sm text-sm text-muted-foreground">{c.successBody}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>{c.stepLabel(step)}</span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
            <span
              key={n}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                n <= step ? "bg-teal" : "bg-secondary"
              )}
            />
          ))}
        </div>
      </div>

      <form
        action={formAction}
        onSubmit={(e) => {
          if (step !== TOTAL_STEPS || !aiDelegation) {
            e.preventDefault()
            setStepError(c.stepChoiceRequired)
          }
        }}
        className="flex flex-col gap-5"
      >
        {step === 1 ? (
          <div className="flex flex-col gap-3">
            <StepHeader title={c.step1.title} subtitle={c.step1.subtitle} />
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-foreground">{c.step1.label}</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.step1.placeholder}
                  autoFocus
                  className={cn(fieldClass, "pl-9")}
                />
              </div>
            </label>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="flex flex-col gap-3">
            <StepHeader title={c.step2.title} subtitle={c.step2.subtitle} />
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-foreground">{c.step2.label}</span>
              <div className="relative">
                <SocialIcon
                  slug="whatsapp"
                  className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
                />
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder={c.step2.placeholder}
                  autoFocus
                  className={cn(fieldClass, "pl-9")}
                />
              </div>
            </label>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="flex flex-col gap-3">
            <StepHeader title={c.step3.title} subtitle={c.step3.subtitle} />
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-foreground">{c.step3.label}</span>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder={c.step3.placeholder}
                autoFocus
                className={fieldClass}
              />
            </label>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="flex flex-col gap-3">
            <StepHeader title={c.step4.title} subtitle={c.step4.subtitle} />
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {c.networks.map((network, i) => {
                const selected = networks.includes(network)
                return (
                  <label key={network} className={choiceClass(selected)}>
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => setNetworks((prev) => toggle(prev, network))}
                      className="sr-only"
                    />
                    <SocialIcon slug={networkSlugs[i]} className="size-4 shrink-0" />
                    {network}
                  </label>
                )
              })}
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="flex flex-col gap-5">
            <StepHeader title={c.step5.title} subtitle={c.step5.subtitle} />
            <ChoiceGroup
              label={c.step5.receivedLabel}
              options={messagesPerDayKeys}
              labels={c.messagesPerDay}
              value={messagesPerDay}
              onChange={setMessagesPerDay}
            />
            <ChoiceGroup
              label={c.step5.missedLabel}
              options={missedMessagesKeys}
              labels={c.missedMessages}
              value={missedMessages}
              onChange={setMissedMessages}
            />
          </div>
        ) : null}

        {step === 6 ? (
          <div className="flex flex-col gap-5">
            <StepHeader title={c.step6.title} subtitle={c.step6.subtitle} />
            <ChoiceGroup
              label={c.step6.methodsLabel}
              options={replyMethodKeys}
              labels={c.replyMethods}
              value={replyMethods}
              onChange={(key) => setReplyMethods((prev) => toggle(prev, key))}
            />
            <ChoiceGroup
              label={c.step6.timeLabel}
              options={timeSpentKeys}
              labels={c.timeSpent}
              value={timeSpent}
              onChange={setTimeSpent}
            />
          </div>
        ) : null}

        {step === 7 ? (
          <div className="flex flex-col gap-5">
            <StepHeader title={c.step7.title} subtitle={c.step7.subtitle} />
            <ChoiceGroup
              label={c.step7.label}
              options={aiDelegationKeys}
              labels={c.aiDelegation}
              value={aiDelegation}
              onChange={(key) => {
                setAiDelegation(key)
                setStepError(null)
              }}
            />
          </div>
        ) : null}

        {/* Hidden carriers so every step's values reach the server action on final submit. */}
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="whatsapp" value={whatsapp} />
        <input type="hidden" name="business" value={business} />
        {networks.map((network) => (
          <input key={network} type="hidden" name="networks" value={network} />
        ))}
        <input type="hidden" name="messages_per_day" value={messagesPerDay ?? ""} />
        <input type="hidden" name="missed_messages" value={missedMessages ?? ""} />
        {replyMethods.map((method) => (
          <input key={method} type="hidden" name="reply_methods" value={method} />
        ))}
        <input type="hidden" name="time_spent" value={timeSpent ?? ""} />
        <input type="hidden" name="ai_delegation" value={aiDelegation ?? ""} />
        <input type="hidden" name="locale" value={locale} />

        {stepError ? (
          <p className="text-sm text-danger" role="alert">
            {stepError}
          </p>
        ) : null}
        {state.status === "error" && !stepError ? (
          <p className="text-sm text-danger" role="alert">
            {c.errors[state.error ?? "sendFailed"]}
          </p>
        ) : null}

        <div className="flex items-center gap-3">
          {step > 1 ? (
            <Button type="button" variant="outline" size="lg" onPress={goBack} className="gap-1.5">
              <ArrowLeft className="size-4" />
              {c.back}
            </Button>
          ) : null}
          {step < TOTAL_STEPS ? (
            <Button
              key="next"
              type="button"
              size="lg"
              onPress={goNext}
              isPending={checking}
              className="flex-1 gap-1.5"
            >
              {checking ? c.checking : c.next}
              {checking ? null : <ArrowRight className="size-4" />}
            </Button>
          ) : (
            <Button key="submit" type="submit" size="lg" isPending={pending} className="flex-1">
              {pending ? c.submitting : c.submit}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
