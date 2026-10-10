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
import { OtherSectors } from "./sectors/other-sectors"
import { SalonsPage } from "./sectors/salons"
import { SectorFaq } from "./sectors/sector-faq"
import { ServicesProfessionnelsPage } from "./sectors/services-professionnels"

// Every sector has its own layout and story; the shared tail is pricing, the
// sector FAQ (data-driven, mirrored in JSON-LD), the demo form targeted by
// every "#book-demo" CTA, and links to the other sectors.
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
      <SectorFaq slug={slug} />
      <BookDemoForm />
      <OtherSectors current={slug} />
    </>
  )
}
