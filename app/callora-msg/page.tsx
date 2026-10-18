import type { Metadata } from "next"

import { CalloraMsgPage } from "@/components/landing/callora-msg/callora-msg-page"
import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { siteConfig } from "@/lib/site-config"

const title = "Callora Msg — bientôt disponible"
const description =
  "Callora Msg centralise vos messages Instagram, WhatsApp, Facebook, LinkedIn et plus encore dans une seule boîte triée par l'IA. Rejoignez la liste d'attente."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/callora-msg" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/callora-msg",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function CalloraMsgRoute() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CalloraMsgPage />
      </main>
      <Footer />
    </>
  )
}
