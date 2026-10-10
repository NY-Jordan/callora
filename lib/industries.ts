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
  },
  cliniques: {
    name: "Cliniques & professionnels de santé",
    shortDetail: "Gérez les demandes de rendez-vous et les questions courantes sans surcharger votre accueil.",
  },
  salons: {
    name: "Salons & instituts",
    shortDetail: "Confirmez les réservations et répondez aux questions pendant que vous avez les mains prises.",
  },
  "agences-immobilieres": {
    name: "Agences immobilières",
    shortDetail: "Répondez aux prospects, collectez leurs besoins et transmettez les demandes aux agents.",
  },
  avocats: {
    name: "Cabinets d'avocats",
    shortDetail: "Qualifiez les nouvelles demandes et orientez les dossiers urgents vers la bonne personne.",
  },
  garages: {
    name: "Garages & entreprises automobiles",
    shortDetail: "Prenez les demandes de rendez-vous et de devis, même les mains dans le moteur.",
  },
  hotels: {
    name: "Hôtels",
    shortDetail: "Répondez aux demandes de réservation et aux questions des clients à toute heure.",
  },
  "services-professionnels": {
    name: "Services professionnels",
    shortDetail: "Ne manquez plus une opportunité entrante, même en dehors de vos horaires.",
  },
}

const en: Record<IndustrySlug, IndustryContent> = {
  dentistes: {
    name: "Dental practices",
    shortDetail: "Answer patients, triage urgent cases, and let your team focus on care.",
  },
  cliniques: {
    name: "Clinics & healthcare providers",
    shortDetail: "Handle appointment requests and common questions without overloading your front desk.",
  },
  salons: {
    name: "Salons & spas",
    shortDetail: "Confirm bookings and answer questions while your hands are full.",
  },
  "agences-immobilieres": {
    name: "Real estate agencies",
    shortDetail: "Answer prospects, capture their needs, and route requests to agents.",
  },
  avocats: {
    name: "Law firms",
    shortDetail: "Qualify new inquiries and route urgent matters to the right person.",
  },
  garages: {
    name: "Garages & auto shops",
    shortDetail: "Take booking and quote requests, even with your hands under the hood.",
  },
  hotels: {
    name: "Hotels",
    shortDetail: "Answer booking requests and guest questions around the clock.",
  },
  "services-professionnels": {
    name: "Professional services",
    shortDetail: "Never miss an incoming opportunity, even outside business hours.",
  },
}

export const industriesByLocale: Record<Locale, Record<IndustrySlug, IndustryContent>> = { fr, en }

export function getIndustryPath(slug: IndustrySlug) {
  return `/pour-les/${slug}`
}
