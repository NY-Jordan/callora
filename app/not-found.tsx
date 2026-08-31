import type { Metadata } from "next"
import Image from "next/image"

import { LinkButton } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page introuvable — Callora",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-32 text-center">
      <Image src="/logo.png" alt="Callora" width={564} height={161} className="h-8 w-auto" />
      <p className="text-sm font-medium text-muted-foreground">Erreur 404</p>
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="max-w-md text-muted-foreground">
        La page que vous recherchez a peut-être été déplacée ou n&apos;existe plus.
      </p>
      <LinkButton href="/" size="lg">
        Retour à l&apos;accueil
      </LinkButton>
    </main>
  )
}
