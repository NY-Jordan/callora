"use client"

import type { ComponentType } from "react"

import type { IndustrySlug } from "@/lib/industries"

import { BookDemoForm } from "./book-demo-form"
import { Pricing } from "./pricing"
import { AgencesImmobilieresPage } from "./sectors/agences-immobilieres"
import { AvocatsPage } from "./sectors/avocats"
import { CliniquesPage } from "./sectors/cliniques"
import { DentistesPage } from "./sectors/dentistes"
import { GaragesPage } from "./sectors/garages"
import { HotelsPage } from "./sectors/hotels"
import { SalonsPage } from "./sectors/salons"
import { ServicesProfessionnelsPage } from "./sectors/services-professionnels"

// Every sector has its own layout and story; only pricing and the demo form
// (target of every "#book-demo" CTA) are shared.
const sectorPages: Record<IndustrySlug, ComponentType> = {
  dentistes: DentistesPage,
  cliniques: CliniquesPage,
  salons: SalonsPage,
  "agences-immobilieres": AgencesImmobilieresPage,
  avocats: AvocatsPage,
  garages: GaragesPage,
  hotels: HotelsPage,
  "services-professionnels": ServicesProfessionnelsPage,
}

export function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const SectorPage = sectorPages[slug]

  return (
    <>
      <SectorPage />
      <Pricing />
      <BookDemoForm />
    </>
  )
}
