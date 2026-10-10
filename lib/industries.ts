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
    metaDescription:
      "Callora répond aux appels de votre cabinet dentaire, gère les demandes de rendez-vous et transmet les urgences à votre équipe — 24h/24.",
  },
  cliniques: {
    name: "Cliniques & professionnels de santé",
    shortDetail: "Gérez les demandes de rendez-vous et les questions courantes sans surcharger votre accueil.",
    metaDescription:
      "Callora aide les cliniques et professionnels de santé à répondre aux appels entrants et à orienter les patients, même quand l'accueil est débordé.",
  },
  salons: {
    name: "Salons & instituts",
    shortDetail: "Confirmez les réservations et répondez aux questions pendant que vous avez les mains prises.",
    metaDescription:
      "Callora répond au téléphone de votre salon ou institut pendant que vous avez les mains prises, et confirme les réservations à votre place.",
  },
  "agences-immobilieres": {
    name: "Agences immobilières",
    shortDetail: "Répondez aux prospects, collectez leurs besoins et transmettez les demandes aux agents.",
    metaDescription:
      "Callora répond aux appels de votre agence immobilière, qualifie les prospects et transmet leurs demandes directement à vos agents.",
  },
  avocats: {
    name: "Cabinets d'avocats",
    shortDetail: "Qualifiez les nouvelles demandes et orientez les dossiers urgents vers la bonne personne.",
    metaDescription:
      "Callora répond aux appels de votre cabinet d'avocats, qualifie les nouvelles demandes et les oriente vers le bon interlocuteur.",
  },
  garages: {
    name: "Garages & entreprises automobiles",
    shortDetail: "Prenez les demandes de rendez-vous et de devis, même les mains dans le moteur.",
    metaDescription:
      "Callora répond au téléphone de votre garage pendant que vous êtes en atelier, et prend les demandes de rendez-vous et de devis.",
  },
  hotels: {
    name: "Hôtels",
    shortDetail: "Répondez aux demandes de réservation et aux questions des clients à toute heure.",
    metaDescription:
      "Callora répond aux appels de votre hôtel à toute heure, gère les demandes de réservation et les questions de vos clients.",
  },
  "services-professionnels": {
    name: "Services professionnels",
    shortDetail: "Ne manquez plus une opportunité entrante, même en dehors de vos horaires.",
    metaDescription:
      "Callora répond aux appels de votre entreprise de services, qualifie les demandes entrantes et les transmet à la bonne personne.",
  },
}

const en: Record<IndustrySlug, IndustryContent> = {
  dentistes: {
    name: "Dental practices",
    shortDetail: "Answer patients, triage urgent cases, and let your team focus on care.",
    metaDescription:
      "Callora answers your dental practice's calls, handles appointment requests, and routes emergencies to your team — 24/7.",
  },
  cliniques: {
    name: "Clinics & healthcare providers",
    shortDetail: "Handle appointment requests and common questions without overloading your front desk.",
    metaDescription:
      "Callora helps clinics and healthcare providers answer incoming calls and route patients, even when the front desk is swamped.",
  },
  salons: {
    name: "Salons & spas",
    shortDetail: "Confirm bookings and answer questions while your hands are full.",
    metaDescription:
      "Callora answers your salon or spa's phone while your hands are full, and confirms bookings on your behalf.",
  },
  "agences-immobilieres": {
    name: "Real estate agencies",
    shortDetail: "Answer prospects, capture their needs, and route requests to agents.",
    metaDescription:
      "Callora answers your real estate agency's calls, qualifies prospects, and routes their requests straight to your agents.",
  },
  avocats: {
    name: "Law firms",
    shortDetail: "Qualify new inquiries and route urgent matters to the right person.",
    metaDescription:
      "Callora answers calls for your law firm, qualifies new inquiries, and routes them to the right person.",
  },
  garages: {
    name: "Garages & auto shops",
    shortDetail: "Take booking and quote requests, even with your hands under the hood.",
    metaDescription:
      "Callora answers your garage's phone while you're in the shop, and takes booking and quote requests.",
  },
  hotels: {
    name: "Hotels",
    shortDetail: "Answer booking requests and guest questions around the clock.",
    metaDescription: "Callora answers your hotel's calls around the clock, handling booking requests and guest questions.",
  },
  "services-professionnels": {
    name: "Professional services",
    shortDetail: "Never miss an incoming opportunity, even outside business hours.",
    metaDescription:
      "Callora answers calls for your professional services business, qualifies incoming requests, and routes them to the right person.",
  },
}

export const industriesByLocale: Record<Locale, Record<IndustrySlug, IndustryContent>> = { fr, en }

export function getIndustryPath(slug: IndustrySlug) {
  return `/pour-les/${slug}`
}
