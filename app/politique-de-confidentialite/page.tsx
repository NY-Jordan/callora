import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { LinkButton } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Callora collecte, utilise et protège les données personnelles traitées dans le cadre de son assistant téléphonique pour entreprises.",
  alternates: { canonical: "/politique-de-confidentialite" },
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
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-brand underline underline-offset-4"
    >
      {children}
    </a>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="page-container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Callora"
              width={564}
              height={161}
              priority
              className="h-7 w-auto"
            />
          </Link>
          <LinkButton href="/" variant="outline" size="sm">
            Retour à l&apos;accueil
          </LinkButton>
        </div>
      </header>

      <main className="flex-1">
        <div className="page-container flex max-w-3xl flex-col gap-10 py-16 sm:py-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Politique de confidentialité
            </h1>
            <p className="text-sm text-muted-foreground">Dernière mise à jour : 26 septembre 2026</p>
          </div>

          <section className="flex flex-col gap-4">
            <H2>1. Qui sommes-nous</H2>
            <P>
              Callora édite Ora, un assistant téléphonique IA pour cabinets dentaires et
              professionnels de santé. Cette politique explique quelles données nous traitons,
              pourquoi, et quels sont vos droits. Elle s&apos;applique au site {siteConfig.url} et
              au service Callora.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>2. Nos rôles</H2>
            <Ul>
              <li>
                <strong>Données des appelants</strong> (patients, prospects) : le cabinet est
                responsable du traitement. Callora agit en tant que sous-traitant, uniquement
                sur ses instructions.
              </li>
              <li>
                <strong>Données des cabinets clients et des visiteurs du site</strong> : Callora
                est responsable du traitement.
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2>3. Données traitées</H2>
            <Ul>
              <li>
                <strong>Cabinets</strong> : nom, coordonnées professionnelles, identifiants de
                connexion, facturation, paramètres et base de connaissances du service.
              </li>
              <li>
                <strong>Appelants</strong> : numéro de téléphone, nom s&apos;il est donné, date et
                durée de l&apos;appel, transcription de la conversation, message ou demande de
                rendez-vous, et enregistrement audio si le cabinet l&apos;a activé.
              </li>
              <li>
                <strong>Visiteurs du site</strong> : informations saisies dans le formulaire de
                demande de démonstration.
              </li>
            </Ul>
            <P>
              Un appelant peut mentionner spontanément des informations de santé. Ora ne les
              sollicite pas, ne pose aucun diagnostic et se contente de les transmettre au cabinet
              avec le message.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>4. Finalités</H2>
            <Ul>
              <li>répondre aux appels du cabinet, prendre des messages et des rendez-vous ;</li>
              <li>gérer les comptes, la facturation et le support ;</li>
              <li>répondre aux demandes de démonstration ;</li>
              <li>assurer la sécurité et le bon fonctionnement du service ;</li>
              <li>respecter nos obligations légales.</li>
            </Ul>
            <P>
              Ces traitements reposent sur l&apos;exécution du contrat, les instructions du
              cabinet, notre intérêt légitime ou une obligation légale. Nous n&apos;utilisons pas
              les données des appels pour entraîner des modèles d&apos;IA et ne vendons aucune
              donnée.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>5. Google Calendar</H2>
            <P>
              Si le cabinet connecte son agenda Google (via OAuth), Ora consulte ses
              disponibilités et crée les rendez-vous pris par téléphone. Ces données servent
              uniquement à cette fonctionnalité, conformément à la{" "}
              <A href="https://developers.google.com/terms/api-services-user-data-policy">
                Google API Services User Data Policy
              </A>{" "}
              (y compris les exigences « Limited Use »). L&apos;accès peut être retiré à tout
              moment depuis le tableau de bord ou sur{" "}
              <A href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</A>.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>6. Prestataires</H2>
            <P>
              Nous faisons appel à des prestataires techniques liés par des engagements de
              confidentialité : Telnyx (téléphonie), des fournisseurs de reconnaissance vocale et
              d&apos;IA, un hébergeur cloud, Google (agenda) et Resend (emails). Lorsque des données
              sont traitées hors de l&apos;Union européenne, le transfert est encadré par les
              clauses contractuelles types de la Commission européenne ou le Data Privacy
              Framework.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>7. Conservation</H2>
            <Ul>
              <li>Transcriptions, messages et enregistrements : 12 mois, ou moins selon le réglage du cabinet ;</li>
              <li>Données de compte : pendant l&apos;abonnement, puis supprimées sous 30 jours ;</li>
              <li>Factures : 10 ans (obligation légale) ;</li>
              <li>Demandes de démonstration : 3 ans après le dernier contact.</li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2>8. Sécurité</H2>
            <P>
              Les données sont chiffrées en transit, cloisonnées par cabinet et accessibles
              uniquement aux personnes qui en ont besoin. En cas de violation de données, nous
              prévenons le cabinet concerné sans délai.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>9. Vos droits</H2>
            <P>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              d&apos;opposition, de limitation et de portabilité. Les appelants exercent ces droits
              auprès du cabinet concerné ; nous l&apos;aidons à y répondre. Les cabinets et
              visiteurs peuvent nous écrire à{" "}
              <A href="mailto:contact@callora.agency">contact@callora.agency</A>. Vous pouvez aussi saisir
              la <A href="https://www.cnil.fr">CNIL</A>.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>10. Cookies</H2>
            <P>
              Le site n&apos;utilise que des cookies strictement nécessaires à son fonctionnement
              (par exemple la langue choisie). Aucun cookie publicitaire.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2>11. Modifications</H2>
            <P>
              Nous pouvons mettre à jour cette politique. En cas de changement important, les
              cabinets clients sont prévenus par email.
            </P>
          </section>
        </div>
      </main>
    </>
  )
}
