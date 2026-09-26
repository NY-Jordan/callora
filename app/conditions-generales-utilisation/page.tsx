import type { Metadata } from "next"
import Image from "next/image"

import { LinkButton } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation encadrant la souscription et l'utilisation du service Callora, assistant téléphonique IA pour cabinets dentaires.",
  alternates: { canonical: "/conditions-generales-utilisation" },
  robots: { index: true, follow: true },
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{children}</h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">{children}</p>
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-[15px]">
      {children}
    </ul>
  )
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-brand underline underline-offset-4">
      {children}
    </a>
  )
}

export default function TermsOfServicePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="page-container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Callora"
              width={564}
              height={161}
              priority
              className="h-7 w-auto"
            />
          </a>
          <LinkButton href="/" variant="outline" size="sm">
            Retour à l&apos;accueil
          </LinkButton>
        </div>
      </header>

      <main className="flex-1">
        <div className="page-container flex max-w-3xl flex-col gap-10 py-16 sm:py-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Conditions générales d&apos;utilisation
            </h1>
            <p className="text-sm text-muted-foreground">Dernière mise à jour : 26 septembre 2026</p>
          </div>

          <section className="flex flex-col gap-4">
            <H2>1. Objet</H2>
            <P>
              Ces conditions encadrent l&apos;utilisation de Callora et de son assistant
              téléphonique IA, Ora (le « Service »), par les cabinets dentaires et
              professionnels de santé qui y souscrivent (le « Cabinet »). Le Service est réservé
              à un usage professionnel. Souscrire au Service vaut acceptation de ces conditions.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>2. Le Service</H2>
            <P>
              Ora répond aux appels du Cabinet, prend des messages, répond aux questions à partir
              des informations fournies par le Cabinet et aide à organiser les rendez-vous,
              notamment via Google Calendar si le Cabinet le connecte. La téléphonie repose sur
              des prestataires tiers, dont Telnyx.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>3. Compte</H2>
            <P>
              Le Cabinet fournit des informations exactes, garde ses identifiants confidentiels
              et reste responsable de toute activité réalisée depuis son compte.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>4. Abonnement et paiement</H2>
            <Ul>
              <li>Abonnement mensuel, sans engagement, au tarif affiché lors de la souscription (hors taxes, en euros) ;</li>
              <li>Paiement mensuel à l&apos;avance, renouvelé automatiquement chaque mois ;</li>
              <li>Toute évolution de tarif est annoncée au moins 30 jours à l&apos;avance ;</li>
              <li>
                En cas d&apos;impayé, le Service peut être suspendu 15 jours après une relance
                restée sans réponse ;
              </li>
              <li>Les mois entamés ne sont pas remboursés.</li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2>5. Résiliation</H2>
            <P>
              Le Cabinet peut résilier à tout moment depuis son tableau de bord ou par email ; la
              résiliation prend effet à la fin du mois en cours. Callora peut suspendre ou
              résilier un compte en cas de manquement grave à ces conditions.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>6. Utilisation acceptable</H2>
            <P>Le Cabinet s&apos;engage à ne pas utiliser le Service pour :</P>
            <Ul>
              <li>enfreindre la loi ou les droits de tiers ;</li>
              <li>fournir un diagnostic ou un conseil médical ;</li>
              <li>tenter de contourner la sécurité du Service ou d&apos;accéder aux données d&apos;un autre cabinet ;</li>
              <li>revendre l&apos;accès au Service sans accord écrit de Callora.</li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2>7. Intelligence artificielle</H2>
            <P>
              Ora est un outil d&apos;assistance, pas un professionnel de santé. Ses réponses et
              transcriptions peuvent comporter des erreurs. Le Cabinet est responsable des
              informations qu&apos;il fournit à Ora (horaires, services, tarifs, règles) et de la
              vérification des messages et rendez-vous transmis.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>8. Appels et enregistrements</H2>
            <P>
              Les appels pris en charge par Ora sont transcrits pour que le Service fonctionne.
              L&apos;enregistrement audio est optionnel ; s&apos;il l&apos;active, le Cabinet doit
              informer ses appelants conformément à la réglementation.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>9. Données personnelles</H2>
            <P>
              Le Cabinet reste responsable du traitement des données de ses patients ; Callora
              agit comme sous-traitant. Les détails figurent dans la{" "}
              <A href="/politique-de-confidentialite">Politique de confidentialité</A>.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>10. Propriété intellectuelle</H2>
            <P>
              Callora reste propriétaire du Service. Le Cabinet reste propriétaire de ses
              contenus et autorise Callora à les utiliser uniquement pour fournir le Service.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>11. Disponibilité et responsabilité</H2>
            <P>
              Callora fait ses meilleurs efforts pour assurer la disponibilité du Service sans
              garantir 100 % (maintenance, pannes de prestataires ou de réseaux). La
              responsabilité de Callora est limitée aux dommages directs et plafonnée aux sommes
              payées par le Cabinet sur les 12 derniers mois, sauf faute lourde ou intentionnelle.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>12. Modifications</H2>
            <P>
              Callora peut faire évoluer le Service et ces conditions. Les changements importants
              sont annoncés par email au moins 30 jours avant leur entrée en vigueur ; le Cabinet
              peut résilier s&apos;il les refuse. La version en vigueur est publiée sur{" "}
              {siteConfig.url}.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>13. Droit applicable</H2>
            <P>
              Ces conditions sont soumises au droit français. À défaut d&apos;accord amiable, tout
              litige relève des tribunaux de Paris.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>14. Contact</H2>
            <P>
              <A href="mailto:contact@callora.agency">contact@callora.agency</A>
            </P>
          </section>
        </div>
      </main>
    </>
  )
}
