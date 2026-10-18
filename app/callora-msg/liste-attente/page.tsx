import type { Metadata } from "next"

import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { WaitlistPage } from "@/components/landing/callora-msg/waitlist-page"
import { siteConfig } from "@/lib/site-config"

const title = "Rejoignez la liste d'attente — Callora Msg"
const description =
  "Inscrivez-vous en moins d'une minute pour être parmi les premiers à essayer Callora Msg, la boîte de réception unique pour tous vos réseaux."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/callora-msg/liste-attente" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/callora-msg/liste-attente",
    siteName: siteConfig.name,
    title,
    description,
  },
}

export default function CalloraMsgWaitlistRoute() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <WaitlistPage />
      </main>
      <Footer />
    </>
  )
}
