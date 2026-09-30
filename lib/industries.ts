import type { LucideIcon } from "lucide-react"
import {
  BedDouble,
  Briefcase,
  Building2,
  Scale,
  Scissors,
  Smile,
  Stethoscope,
  Wrench,
} from "lucide-react"

import type { Locale } from "./translations"

export const industrySlugs = [
  "dentistes",
  "cliniques",
  "salons",
  "agences-immobilieres",
  "avocats",
  "garages",
  "hotels",
  "services-professionnels",
] as const

export type IndustrySlug = (typeof industrySlugs)[number]

export type IndustryContent = {
  name: string
  shortDetail: string
  headline: string
  subhead: string
  painPoints: { title: string; detail: string }[]
  metaDescription: string
}

export const industryIcons: Record<IndustrySlug, LucideIcon> = {
  dentistes: Smile,
  cliniques: Stethoscope,
  salons: Scissors,
  "agences-immobilieres": Building2,
  avocats: Scale,
  garages: Wrench,
  hotels: BedDouble,
  "services-professionnels": Briefcase,
}

const fr: Record<IndustrySlug, IndustryContent> = {
  dentistes: {
    name: "Cabinets dentaires",
    shortDetail: "Répondez aux patients, filtrez les urgences et laissez votre équipe se concentrer sur les soins.",
    headline: "Ne laissez plus vos patients tomber sur un répondeur.",
    subhead:
      "Callora répond aux appels de votre cabinet dentaire 24h/24, prend les demandes de rendez-vous et transfère les urgences à votre équipe.",
    painPoints: [
      { title: "Fauteuil occupé", detail: "Votre équipe est avec un patient et ne peut pas décrocher." },
      { title: "Hors horaires", detail: "Votre cabinet est fermé le soir, le week-end ou pendant les congés." },
      { title: "Urgences dentaires", detail: "Un appel urgent peut arriver à tout moment et mérite une réponse immédiate." },
    ],
    metaDescription:
      "Callora répond aux appels de votre cabinet dentaire, gère les demandes de rendez-vous et transmet les urgences à votre équipe — 24h/24.",
  },
  cliniques: {
    name: "Cliniques & professionnels de santé",
    shortDetail: "Gérez les demandes de rendez-vous et les questions courantes sans surcharger votre accueil.",
    headline: "Votre accueil ne peut pas être partout à la fois.",
    subhead:
      "Callora répond aux appels entrants de votre clinique, renseigne vos patients et transmet les demandes qui nécessitent votre équipe.",
    painPoints: [
      { title: "Ligne saturée", detail: "Plusieurs patients appellent en même temps aux heures de pointe." },
      { title: "Personnel réduit", detail: "Votre équipe soignante n'a pas le temps de gérer le standard." },
      { title: "Suivi patient", detail: "Chaque appel manqué peut retarder une prise en charge." },
    ],
    metaDescription:
      "Callora aide les cliniques et professionnels de santé à répondre aux appels entrants et à orienter les patients, même quand l'accueil est débordé.",
  },
  salons: {
    name: "Salons & instituts",
    shortDetail: "Confirmez les réservations et répondez aux questions pendant que vous avez les mains prises.",
    headline: "Les mains prises ne devraient jamais coûter un rendez-vous.",
    subhead:
      "Callora répond à la place de votre salon pendant que vous êtes avec un client, confirme les réservations et transmet les demandes.",
    painPoints: [
      { title: "Mains prises", detail: "Impossible de décrocher en plein soin ou en pleine coupe." },
      { title: "Créneaux à remplir", detail: "Chaque appel manqué est un rendez-vous perdu." },
      { title: "Questions récurrentes", detail: "Horaires, tarifs, disponibilités : les mêmes questions reviennent sans cesse." },
    ],
    metaDescription:
      "Callora répond au téléphone de votre salon ou institut pendant que vous avez les mains prises, et confirme les réservations à votre place.",
  },
  "agences-immobilieres": {
    name: "Agences immobilières",
    shortDetail: "Répondez aux prospects, collectez leurs besoins et transmettez les demandes aux agents.",
    headline: "Chaque appel manqué est un prospect qui contacte l'agence d'à côté.",
    subhead:
      "Callora répond aux appels de votre agence, qualifie les demandes des prospects et les transmet directement à vos agents.",
    painPoints: [
      { title: "Agents sur le terrain", detail: "Vos agents sont en visite et ne peuvent pas répondre au téléphone." },
      { title: "Prospects pressés", detail: "Un prospect qui ne joint personne appelle souvent l'agence suivante." },
      { title: "Suivi dispersé", detail: "Sans centralisation, les demandes se perdent entre les agents." },
    ],
    metaDescription:
      "Callora répond aux appels de votre agence immobilière, qualifie les prospects et transmet leurs demandes directement à vos agents.",
  },
  avocats: {
    name: "Cabinets d'avocats",
    shortDetail: "Qualifiez les nouvelles demandes et orientez les dossiers urgents vers la bonne personne.",
    headline: "Votre cabinet mérite un accueil à la hauteur de son exigence.",
    subhead:
      "Callora répond aux nouveaux contacts de votre cabinet, qualifie leur demande et l'oriente vers le bon avocat.",
    painPoints: [
      { title: "Audiences et rendez-vous", detail: "Vos avocats sont en rendez-vous ou au tribunal, pas au téléphone." },
      { title: "Confidentialité", detail: "Chaque appel doit être traité avec sérieux dès le premier contact." },
      { title: "Nouveaux dossiers", detail: "Un prospect non recontacté rapidement se tourne vers un confrère." },
    ],
    metaDescription:
      "Callora répond aux appels de votre cabinet d'avocats, qualifie les nouvelles demandes et les oriente vers le bon interlocuteur.",
  },
  garages: {
    name: "Garages & entreprises automobiles",
    shortDetail: "Prenez les demandes de rendez-vous et de devis, même les mains dans le moteur.",
    headline: "Le téléphone n'attend pas que vous ayez fini sous le capot.",
    subhead:
      "Callora répond à votre place pendant que vous êtes en atelier, prend les demandes de rendez-vous et de devis.",
    painPoints: [
      { title: "Mains dans le moteur", detail: "Impossible de décrocher en plein diagnostic ou réparation." },
      { title: "Devis en attente", detail: "Chaque appel sans réponse est un devis qui part ailleurs." },
      { title: "Un seul accueil", detail: "Souvent une seule personne gère à la fois l'atelier et le téléphone." },
    ],
    metaDescription:
      "Callora répond au téléphone de votre garage pendant que vous êtes en atelier, et prend les demandes de rendez-vous et de devis.",
  },
  hotels: {
    name: "Hôtels",
    shortDetail: "Répondez aux demandes de réservation et aux questions des clients à toute heure.",
    headline: "Vos clients appellent à toute heure. Callora aussi répond à toute heure.",
    subhead:
      "Callora répond aux demandes de réservation et aux questions de vos clients, même la nuit ou en dehors des horaires de réception.",
    painPoints: [
      { title: "Réception non-stop", detail: "Les demandes arrivent à toute heure, y compris la nuit." },
      { title: "Équipe restreinte", detail: "Une réception avec peu de personnel ne peut pas tout gérer en simultané." },
      { title: "Réservations sensibles", detail: "Une demande de réservation sans réponse part vers un autre établissement." },
    ],
    metaDescription:
      "Callora répond aux appels de votre hôtel à toute heure, gère les demandes de réservation et les questions de vos clients.",
  },
  "services-professionnels": {
    name: "Services professionnels",
    shortDetail: "Ne manquez plus une opportunité entrante, même en dehors de vos horaires.",
    headline: "Chaque opportunité entrante mérite une réponse, pas une messagerie.",
    subhead:
      "Callora répond aux appels de votre entreprise, qualifie les demandes et les transmet à la bonne personne de votre équipe.",
    painPoints: [
      { title: "Équipe en rendez-vous", detail: "Vos collaborateurs sont sur le terrain ou en réunion." },
      { title: "Horaires flexibles", detail: "Vos clients contactent votre entreprise en dehors des horaires classiques." },
      { title: "Opportunités manquées", detail: "Un appel sans réponse peut être un contrat qui vous échappe." },
    ],
    metaDescription:
      "Callora répond aux appels de votre entreprise de services, qualifie les demandes entrantes et les transmet à la bonne personne.",
  },
}

const en: Record<IndustrySlug, IndustryContent> = {
  dentistes: {
    name: "Dental practices",
    shortDetail: "Answer patients, triage urgent cases, and let your team focus on care.",
    headline: "Don't let your patients reach a voicemail.",
    subhead:
      "Callora answers your dental practice's calls 24/7, takes appointment requests, and routes urgent cases to your team.",
    painPoints: [
      { title: "Chair-side", detail: "Your team is with a patient and can't pick up." },
      { title: "After hours", detail: "Your practice is closed evenings, weekends, or holidays." },
      { title: "Dental emergencies", detail: "An urgent call can come in anytime and deserves an immediate response." },
    ],
    metaDescription:
      "Callora answers your dental practice's calls, handles appointment requests, and routes emergencies to your team — 24/7.",
  },
  cliniques: {
    name: "Clinics & healthcare providers",
    shortDetail: "Handle appointment requests and common questions without overloading your front desk.",
    headline: "Your front desk can't be everywhere at once.",
    subhead:
      "Callora answers your clinic's incoming calls, informs patients, and forwards requests that need your team.",
    painPoints: [
      { title: "Busy line", detail: "Multiple patients call at once during peak hours." },
      { title: "Lean staffing", detail: "Your care team doesn't have time to run the switchboard." },
      { title: "Patient follow-up", detail: "Every missed call can delay care." },
    ],
    metaDescription:
      "Callora helps clinics and healthcare providers answer incoming calls and route patients, even when the front desk is swamped.",
  },
  salons: {
    name: "Salons & spas",
    shortDetail: "Confirm bookings and answer questions while your hands are full.",
    headline: "Full hands shouldn't cost you a booking.",
    subhead:
      "Callora answers for your salon while you're with a client, confirms bookings, and forwards requests.",
    painPoints: [
      { title: "Hands full", detail: "You can't pick up mid-treatment or mid-cut." },
      { title: "Slots to fill", detail: "Every missed call is a lost booking." },
      { title: "Repeat questions", detail: "Hours, pricing, availability — the same questions keep coming up." },
    ],
    metaDescription:
      "Callora answers your salon or spa's phone while your hands are full, and confirms bookings on your behalf.",
  },
  "agences-immobilieres": {
    name: "Real estate agencies",
    shortDetail: "Answer prospects, capture their needs, and route requests to agents.",
    headline: "Every missed call is a prospect calling the agency next door.",
    subhead:
      "Callora answers your agency's calls, qualifies prospect requests, and routes them straight to your agents.",
    painPoints: [
      { title: "Agents in the field", detail: "Your agents are out on viewings and can't answer the phone." },
      { title: "Prospects in a hurry", detail: "A prospect who can't reach anyone often calls the next agency." },
      { title: "Scattered follow-up", detail: "Without centralizing requests, they get lost between agents." },
    ],
    metaDescription:
      "Callora answers your real estate agency's calls, qualifies prospects, and routes their requests straight to your agents.",
  },
  avocats: {
    name: "Law firms",
    shortDetail: "Qualify new inquiries and route urgent matters to the right person.",
    headline: "Your firm deserves a front desk as sharp as its work.",
    subhead:
      "Callora answers new contacts for your firm, qualifies their request, and routes it to the right lawyer.",
    painPoints: [
      { title: "Hearings & meetings", detail: "Your lawyers are in court or in meetings, not on the phone." },
      { title: "Confidentiality", detail: "Every call needs to be handled seriously from the first contact." },
      { title: "New matters", detail: "A prospect who isn't called back quickly turns to another firm." },
    ],
    metaDescription:
      "Callora answers calls for your law firm, qualifies new inquiries, and routes them to the right person.",
  },
  garages: {
    name: "Garages & auto shops",
    shortDetail: "Take booking and quote requests, even with your hands under the hood.",
    headline: "The phone doesn't wait until you're done under the hood.",
    subhead:
      "Callora answers for you while you're in the shop, and takes booking and quote requests.",
    painPoints: [
      { title: "Hands under the hood", detail: "You can't pick up mid-diagnostic or mid-repair." },
      { title: "Quotes on hold", detail: "Every unanswered call is a quote that goes elsewhere." },
      { title: "One person, two jobs", detail: "Often one person runs both the shop and the phone." },
    ],
    metaDescription:
      "Callora answers your garage's phone while you're in the shop, and takes booking and quote requests.",
  },
  hotels: {
    name: "Hotels",
    shortDetail: "Answer booking requests and guest questions around the clock.",
    headline: "Guests call any time. Callora answers any time too.",
    subhead:
      "Callora answers booking requests and guest questions, even at night or outside front-desk hours.",
    painPoints: [
      { title: "Round-the-clock front desk", detail: "Requests come in any time, including overnight." },
      { title: "Lean staffing", detail: "A small front-desk team can't handle everything at once." },
      { title: "Time-sensitive bookings", detail: "An unanswered booking request goes to another property." },
    ],
    metaDescription: "Callora answers your hotel's calls around the clock, handling booking requests and guest questions.",
  },
  "services-professionnels": {
    name: "Professional services",
    shortDetail: "Never miss an incoming opportunity, even outside business hours.",
    headline: "Every incoming opportunity deserves an answer, not voicemail.",
    subhead:
      "Callora answers your business's calls, qualifies requests, and routes them to the right person on your team.",
    painPoints: [
      { title: "Team in meetings", detail: "Your people are out in the field or in meetings." },
      { title: "Flexible hours", detail: "Clients reach out outside typical business hours." },
      { title: "Missed opportunities", detail: "An unanswered call could be a deal slipping away." },
    ],
    metaDescription:
      "Callora answers calls for your professional services business, qualifies incoming requests, and routes them to the right person.",
  },
}

export const industriesByLocale: Record<Locale, Record<IndustrySlug, IndustryContent>> = { fr, en }

export function getIndustryPath(slug: IndustrySlug) {
  return `/pour-les/${slug}`
}
