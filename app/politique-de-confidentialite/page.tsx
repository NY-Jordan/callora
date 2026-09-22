import type { Metadata } from "next"
import Image from "next/image"

import { LinkButton } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Callora collecte, utilise et protège les données personnelles traitées dans le cadre de son assistant téléphonique IA pour cabinets dentaires.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm bg-warning-soft px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-warning">
      [À COMPLÉTER : {children}]
    </span>
  )
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 font-heading text-xl font-semibold text-foreground sm:text-2xl"
    >
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-heading text-base font-semibold text-foreground">{children}</h3>
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

const toc: { id: string; label: string }[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "responsable", label: "2. Responsable du traitement et rôles respectifs" },
  { id: "donnees-collectees", label: "3. Données personnelles collectées" },
  { id: "donnees-appels", label: "4. Données issues des appels téléphoniques" },
  { id: "transcriptions", label: "5. Transcriptions et enregistrements" },
  { id: "google-calendar", label: "6. Utilisation de Google Calendar et OAuth" },
  { id: "finalites", label: "7. Finalités du traitement" },
  { id: "base-legale", label: "8. Base légale" },
  { id: "donnees-sensibles", label: "9. Données sensibles et données de santé" },
  { id: "sous-traitants", label: "10. Sous-traitants et prestataires techniques" },
  { id: "transferts", label: "11. Transferts internationaux de données" },
  { id: "conservation", label: "12. Durée de conservation" },
  { id: "securite", label: "13. Sécurité" },
  { id: "droits", label: "14. Droits des personnes" },
  { id: "suppression", label: "15. Suppression des données" },
  { id: "cookies", label: "16. Cookies et technologies similaires" },
  { id: "modifications", label: "17. Modifications de la politique" },
  { id: "contact", label: "18. Contact" },
  { id: "autorite", label: "19. Autorité de contrôle compétente" },
]

export default function PrivacyPolicyPage() {
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
        <div className="page-container flex flex-col gap-10 py-16 sm:py-20">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-brand">Politique de confidentialité</p>
            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Politique de confidentialité de Callora
            </h1>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : <Placeholder>date de publication</Placeholder>
            </p>
            <div className="mt-2 rounded-xl border border-warning/30 bg-warning-soft/60 p-4 text-sm leading-6 text-foreground">
              <strong>Note interne — à retirer avant publication :</strong> ce document est un
              projet de politique de confidentialité fourni à titre d&apos;information et
              d&apos;aide à la rédaction. Il ne constitue pas un avis juridique. Les passages
              signalés par <span className="font-mono text-xs">[À COMPLÉTER]</span> doivent être
              vérifiés, complétés ou validés — idéalement par un professionnel du droit compétent
              en protection des données — avant toute mise en ligne.
            </div>
          </div>

          <nav
            aria-label="Sommaire"
            className="rounded-2xl border border-border/70 bg-muted/30 p-6"
          >
            <p className="mb-3 text-sm font-semibold text-foreground">Sommaire</p>
            <ol className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="flex flex-col gap-4">
            <H2 id="introduction">1. Introduction</H2>
            <P>
              La présente politique de confidentialité (la « Politique ») décrit la manière dont{" "}
              <Placeholder>dénomination sociale de l&apos;éditeur, ex. « Callora SAS »</Placeholder>{" "}
              (« Callora », « nous ») collecte, utilise, conserve et protège les données
              personnelles dans le cadre de son service d&apos;assistant téléphonique
              intelligent (« Ora ») destiné principalement aux cabinets dentaires et, plus
              largement, aux professionnels de santé en France et en Europe (le « Service »).
            </P>
            <P>
              Cette Politique s&apos;adresse à deux publics distincts, dont les droits et les
              relations avec Callora diffèrent :
            </P>
            <Ul>
              <li>
                les <strong>cabinets clients</strong> qui souscrivent au Service (ci-après « le
                Cabinet » ou « les Cabinets ») ;
              </li>
              <li>
                les <strong>appelants</strong> — patients, prospects ou tiers — dont l&apos;appel
                vers un Cabinet client est susceptible d&apos;être pris en charge par Ora.
              </li>
            </Ul>
            <P>
              Elle s&apos;applique au site web {siteConfig.url}, à l&apos;application et au
              tableau de bord Callora, ainsi qu&apos;à l&apos;ensemble des traitements de données
              personnelles réalisés dans le cadre du fonctionnement du Service. Elle ne
              constitue pas un avis juridique et ne dispense pas les Cabinets de consulter leurs
              propres conseils pour leurs obligations en tant que professionnels de santé.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="responsable">
              2. Responsable du traitement et rôles respectifs de Callora et des cabinets
            </H2>
            <H3>2.1 Identité de Callora</H3>
            <P>
              Le Service est édité par{" "}
              <Placeholder>
                raison sociale, forme juridique, numéro RCS/SIREN, adresse du siège social
              </Placeholder>
              , représentée par <Placeholder>représentant légal</Placeholder>, ci-après « Callora ».
              Pour toute question relative à la protection des données, Callora peut être
              contactée aux coordonnées indiquées à la section « Contact ».
              {" "}
              <Placeholder>
                le cas échéant, nom et coordonnées du délégué à la protection des données (DPO)
              </Placeholder>
            </P>
            <H3>2.2 Callora agit comme sous-traitant pour les données des patients et prospects</H3>
            <P>
              Lorsqu&apos;un Cabinet utilise Callora pour prendre en charge ses appels entrants,
              le Cabinet demeure <strong>responsable du traitement</strong>, au sens du RGPD,
              des données personnelles de ses patients, prospects et correspondants
              téléphoniques (nom, numéro de téléphone, demande, contenu de l&apos;appel,
              disponibilités de rendez-vous, etc.). Le Cabinet détermine les finalités et les
              moyens de ce traitement : décision d&apos;activer l&apos;assistant IA, plages
              horaires concernées, contenu de la base de connaissances transmise à Ora,
              activation ou non de l&apos;enregistrement des appels, connexion ou non d&apos;un
              calendrier.
            </P>
            <P>
              Dans ce cadre, Callora agit en qualité de <strong>sous-traitant</strong> au sens de
              l&apos;article 28 du RGPD : elle traite les données des appelants pour le compte du
              Cabinet et selon ses instructions, dans le cadre du contrat conclu entre Callora et
              le Cabinet{" "}
              <Placeholder>
                référence au contrat-cadre / conditions générales / accord de sous-traitance
                (DPA) applicable
              </Placeholder>
              . Il appartient à chaque Cabinet de s&apos;assurer qu&apos;il dispose d&apos;une
              base légale et, le cas échéant, d&apos;une information adéquate de ses patients
              pour recourir à un assistant téléphonique IA, et d&apos;informer ses patients de
              l&apos;utilisation de Callora (par exemple via sa propre politique de
              confidentialité ou une mention en début d&apos;appel, selon ce qui est requis).
            </P>
            <H3>2.3 Callora agit comme responsable du traitement pour ses propres clients</H3>
            <P>
              Pour les données relatives au Cabinet lui-même en tant que client du Service
              (informations de compte, données de facturation, coordonnées des utilisateurs du
              tableau de bord, données de navigation sur le site {siteConfig.url}, demandes de
              démonstration), Callora agit en qualité de <strong>responsable du traitement</strong>{" "}
              et détermine elle-même les finalités et moyens de ces traitements, dans les
              conditions décrites par la présente Politique.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="donnees-collectees">3. Données personnelles collectées</H2>
            <P>Selon l&apos;usage du Service, Callora peut traiter les catégories de données suivantes :</P>
            <H3>3.1 Données relatives au Cabinet client</H3>
            <Ul>
              <li>Identité et coordonnées professionnelles (nom du cabinet, praticien(s), adresse, email, téléphone) ;</li>
              <li>Identifiants de connexion au tableau de bord Callora ;</li>
              <li>
                Données de facturation et de paiement <Placeholder>prestataire de paiement utilisé, le cas échéant</Placeholder> ;
              </li>
              <li>Contenu de la base de connaissances renseignée par le Cabinet (horaires, services proposés, réponses types) ;</li>
              <li>Paramètres de configuration du Service (plages horaires de débordement, préférences d&apos;enregistrement, calendrier connecté) ;</li>
              <li>Échanges avec le support client de Callora.</li>
            </Ul>
            <H3>3.2 Données relatives aux visiteurs du site web</H3>
            <Ul>
              <li>Données transmises via le formulaire de demande de démonstration (nom, email professionnel, cabinet, message) ;</li>
              <li>
                Données techniques de navigation <Placeholder>outils de mesure d&apos;audience éventuellement utilisés</Placeholder>.
              </li>
            </Ul>
            <H3>3.3 Données relatives aux appelants (patients, prospects, tiers)</H3>
            <P>Voir en détail la section 4 « Données issues des appels téléphoniques ». Ces données peuvent notamment inclure :</P>
            <Ul>
              <li>Numéro de téléphone de l&apos;appelant (et nom de l&apos;appelant, s&apos;il le communique) ;</li>
              <li>Motif de l&apos;appel et contenu de la conversation avec Ora ;</li>
              <li>Demande de rendez-vous et informations nécessaires à sa prise (créneau souhaité, disponibilités) ;</li>
              <li>Message laissé à l&apos;attention du Cabinet ;</li>
              <li>Toute autre information communiquée volontairement par l&apos;appelant au cours de l&apos;échange.</li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="donnees-appels">4. Données issues des appels téléphoniques</H2>
            <P>
              Les communications téléphoniques traitées par Callora transitent par
              l&apos;infrastructure de téléphonie de <strong>Telnyx</strong>, prestataire tiers
              fournissant les services de voix sur IP nécessaires à la réception et, le cas
              échéant, au transfert des appels.
            </P>
            <P>À l&apos;occasion d&apos;un appel pris en charge par Ora, Callora peut traiter :</P>
            <Ul>
              <li>le numéro de téléphone appelant et le numéro appelé ;</li>
              <li>la date, l&apos;heure et la durée de l&apos;appel ;</li>
              <li>
                des métadonnées techniques liées à l&apos;acheminement de l&apos;appel (par
                exemple statut de l&apos;appel, code de routage){" "}
                <Placeholder>liste exhaustive des métadonnées effectivement journalisées</Placeholder>;
              </li>
              <li>le contenu de la conversation, via la transcription décrite à la section 5.</li>
            </Ul>
            <P>
              Callora ne contrôle pas les mesures de présentation ou de masquage du numéro
              appliquées par l&apos;opérateur téléphonique de l&apos;appelant.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="transcriptions">5. Transcriptions et enregistrements</H2>
            <H3>5.1 Transcription</H3>
            <P>
              Pour permettre à Ora de comprendre les demandes exprimées oralement et d&apos;y
              répondre, le flux audio de l&apos;appel est converti en texte (transcription) au
              moyen de services de reconnaissance vocale et de traitement du langage, y compris
              des fournisseurs d&apos;intelligence artificielle mentionnés à la section 10. Cette
              transcription est nécessaire au fonctionnement même du Service et ne peut pas être
              désactivée tant que l&apos;appel est pris en charge par l&apos;assistant.
            </P>
            <H3>5.2 Enregistrement audio</H3>
            <P>
              Lorsque le Cabinet active l&apos;enregistrement des appels dans les paramètres du
              Service, le flux audio de l&apos;appel peut être conservé, en plus de sa
              transcription, pendant la durée décrite à la section 12 « Durée de conservation ».
              L&apos;activation de l&apos;enregistrement relève du choix du Cabinet, qui reste
              responsable de vérifier que cette fonctionnalité est utilisée conformément à la
              réglementation qui lui est applicable, notamment en matière d&apos;information des
              personnes appelées lorsque celle-ci est requise.
            </P>
            <P>
              <Placeholder>
                confirmer si une information sonore (bip, message d&apos;annonce) est diffusée à
                l&apos;appelant lorsque l&apos;enregistrement est actif, et décrire son
                fonctionnement précis
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="google-calendar">6. Utilisation de Google Calendar et OAuth</H2>
            <H3>6.1 Fonctionnement de l&apos;intégration</H3>
            <P>
              Un Cabinet peut, de façon optionnelle, connecter son compte Google Calendar au
              Service afin de permettre à Ora de consulter les disponibilités et/ou de créer des
              rendez-vous directement dans le calendrier du Cabinet. Cette connexion s&apos;effectue
              exclusivement via le protocole d&apos;autorisation <strong>OAuth 2.0</strong> de
              Google : le Cabinet authentifie lui-même son compte Google et autorise
              explicitement Callora à accéder aux données de calendrier, selon les autorisations
              (« scopes ») qu&apos;il accepte au moment de la connexion.
            </P>
            <H3>6.2 Données demandées et finalité</H3>
            <P>Dans le cadre de cette intégration, Callora peut demander l&apos;accès aux éléments suivants :</P>
            <Ul>
              <li>
                <strong>Disponibilités du calendrier</strong> (créneaux libres/occupés) : afin de
                proposer des rendez-vous cohérents avec l&apos;agenda du Cabinet ;
              </li>
              <li>
                <strong>Création et, le cas échéant, modification d&apos;événements</strong> :
                afin d&apos;inscrire directement un rendez-vous pris par téléphone (titre,
                horaire, et éventuellement les informations de contact du patient nécessaires au
                rendez-vous) ;
              </li>
              <li>
                <strong>Identifiant et informations de base du calendrier</strong> connecté, pour
                permettre au Cabinet de sélectionner le calendrier concerné.
              </li>
            </Ul>
            <P>
              <Placeholder>
                lister précisément les scopes OAuth Google Calendar effectivement demandés par
                l&apos;application (par exemple calendar.events, calendar.readonly, etc.),
                conformément à la configuration technique réelle de l&apos;intégration, en
                appliquant le principe de minimisation (ne demander que les scopes strictement
                nécessaires)
              </Placeholder>
            </P>
            <H3>6.3 Jetons d&apos;autorisation et révocation</H3>
            <P>
              Les jetons d&apos;accès et de rafraîchissement (« access token » / « refresh
              token ») obtenus via OAuth sont conservés afin de maintenir la connexion active
              entre le compte Google du Cabinet et le Service, jusqu&apos;à ce que le Cabinet
              déconnecte son calendrier ou révoque l&apos;autorisation. Chaque Cabinet peut à tout
              moment :
            </P>
            <Ul>
              <li>déconnecter son calendrier depuis le tableau de bord Callora ; et/ou</li>
              <li>
                révoquer l&apos;accès de Callora directement depuis les paramètres de sécurité de
                son compte Google (
                <Placeholder>lien ou procédure exacte à indiquer, ex. myaccount.google.com/permissions</Placeholder>
                ).
              </li>
            </Ul>
            <P>
              L&apos;intégration est conçue pour un usage par plusieurs cabinets indépendants :
              chaque Cabinet connecte son propre compte Google, et les données de calendrier
              d&apos;un Cabinet ne sont ni partagées, ni mutualisées avec celles d&apos;un autre
              Cabinet.
            </P>
            <H3>6.4 Respect de la politique Google relative aux données utilisateur des API</H3>
            <P>
              L&apos;utilisation et le transfert, par Callora, des informations reçues des API
              Google vers toute autre application respecteront la{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-brand underline underline-offset-4"
              >
                Google API Services User Data Policy
              </a>
              , y compris les exigences relatives à un usage limité (« Limited Use »). En
              particulier, sauf lorsque cela est strictement nécessaire pour fournir ou améliorer
              une fonctionnalité destinée à l&apos;utilisateur final, expressément demandée par
              celui-ci, ou pour se conformer à une obligation légale applicable :
            </P>
            <Ul>
              <li>
                les données obtenues via les API Google ne sont pas utilisées à des fins
                publicitaires ;
              </li>
              <li>
                elles ne sont pas transférées ni vendues à des tiers, à l&apos;exception des
                prestataires nécessaires au fonctionnement du Service, agissant sur instruction
                de Callora et dans le respect d&apos;engagements de confidentialité adaptés ;
              </li>
              <li>
                elles ne sont pas utilisées pour entraîner des modèles d&apos;intelligence
                artificielle ou d&apos;apprentissage automatique à usage général, non liés à la
                fourniture du Service au Cabinet concerné{" "}
                <Placeholder>
                  confirmer précisément l&apos;usage réel fait des données Google Calendar au
                  regard de tout traitement par des modèles d&apos;IA, et ajuster cette phrase en
                  conséquence
                </Placeholder>
                ;
              </li>
              <li>
                elles ne sont consultées que par les personnes ou systèmes strictement nécessaires
                à la fourniture, à la maintenance ou à la sécurité de la fonctionnalité
                concernée.
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="finalites">7. Finalités du traitement</H2>
            <P>Les données personnelles décrites ci-dessus sont traitées afin de :</P>
            <Ul>
              <li>fournir le Service d&apos;assistant téléphonique IA pour le compte du Cabinet (réception d&apos;appels, réponses aux questions, prise de messages, organisation de rendez-vous) ;</li>
              <li>consulter les disponibilités et créer des rendez-vous lorsque le Cabinet a connecté son calendrier Google ;</li>
              <li>transmettre au Cabinet les messages, demandes et informations recueillies auprès des appelants ;</li>
              <li>gérer la relation contractuelle avec les Cabinets clients (compte, facturation, support) ;</li>
              <li>répondre aux demandes de démonstration effectuées via le site web ;</li>
              <li>assurer la sécurité, la disponibilité et le bon fonctionnement technique du Service, y compris la détection d&apos;incidents ou d&apos;usages abusifs ;</li>
              <li>satisfaire aux obligations légales, comptables et réglementaires applicables à Callora.</li>
            </Ul>
            <P>
              <Placeholder>
                confirmer si des données sont également utilisées à des fins d&apos;amélioration
                ou d&apos;entraînement des modèles d&apos;IA utilisés par Callora et, le cas
                échéant, décrire précisément ce traitement et sa base légale
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="base-legale">8. Base légale</H2>
            <P>Selon la finalité concernée, le traitement des données personnelles repose sur :</P>
            <Ul>
              <li>
                <strong>L&apos;exécution du contrat</strong> conclu avec le Cabinet client, pour
                la fourniture du Service (gestion de compte, facturation, support) ;
              </li>
              <li>
                <strong>L&apos;exécution des instructions du Cabinet</strong>, en qualité de
                sous-traitant, pour le traitement des données des appelants dans le cadre de la
                prise en charge des appels ;
              </li>
              <li>
                <strong>L&apos;intérêt légitime</strong> de Callora et/ou du Cabinet à assurer la
                continuité de la prise en charge des appels, la sécurité du Service et la
                prévention des abus, lorsque cet intérêt ne porte pas une atteinte disproportionnée
                aux droits des personnes concernées ;
              </li>
              <li>
                <strong>Le consentement</strong>, lorsqu&apos;il constitue la base légale
                applicable, notamment pour certains cookies ou technologies de suivi non
                strictement nécessaires (voir section 16), ou pour l&apos;enregistrement des
                appels lorsque la réglementation applicable au Cabinet l&apos;exige ;
              </li>
              <li>
                <strong>Le respect d&apos;une obligation légale</strong>, notamment en matière
                comptable, fiscale ou de réponse aux autorités compétentes.
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="donnees-sensibles">9. Données sensibles et données de santé</H2>
            <P>
              Callora est conçue pour des cabinets dentaires et d&apos;autres professionnels de
              santé. De ce fait, un appelant peut, au cours de sa conversation avec Ora,
              mentionner spontanément des informations relatives à sa santé (par exemple un motif
              de douleur, une pathologie, un traitement en cours) afin d&apos;expliquer le motif
              de son appel ou de sa demande de rendez-vous. Ces informations peuvent constituer
              des <strong>données de santé</strong>, catégorie particulière de données au sens de
              l&apos;article 9 du RGPD.
            </P>
            <P>Callora souhaite préciser clairement les points suivants :</P>
            <Ul>
              <li>
                <strong>
                  Ora ne fournit ni diagnostic médical ou dentaire, ni avis ou conseil de santé
                </strong>
                . Ora a pour seule fonction d&apos;accueillir l&apos;appel, de comprendre la
                demande générale de l&apos;appelant, de répondre aux questions figurant dans la
                base de connaissances fournie par le Cabinet, de prendre un message et
                d&apos;aider à l&apos;organisation d&apos;un rendez-vous ;
              </li>
              <li>
                Callora ne demande pas activement d&apos;informations de santé et ne constitue pas
                de dossier médical ; les informations de cette nature qui apparaissent dans une
                conversation sont traitées uniquement parce qu&apos;elles ont été communiquées
                volontairement par l&apos;appelant dans le cadre de sa demande ;
              </li>
              <li>
                ces informations sont transmises au Cabinet comme n&apos;importe quel autre
                contenu de message ou de demande de rendez-vous, dans le cadre du rôle de
                sous-traitant décrit à la section 2 ; il appartient au Cabinet, en tant que
                professionnel de santé et responsable du traitement de ces données, de les traiter
                conformément aux règles qui lui sont applicables (secret professionnel,
                réglementation relative aux données de santé) ;
              </li>
              <li>
                <Placeholder>
                  préciser la base légale retenue pour ce traitement occasionnel de données de
                  santé au regard de l&apos;article 9 du RGPD (par exemple constatation, exercice
                  ou défense de droits en justice ; intérêt public ; ou autre fondement identifié
                  avec un conseil juridique), et les mesures de minimisation mises en place
                </Placeholder>
                .
              </li>
            </Ul>
            <P>
              Les Cabinets sont invités à ne pas configurer la base de connaissances ou les
              instructions d&apos;Ora de manière à solliciter activement des informations
              médicales détaillées auprès des appelants, au-delà de ce qui est strictement
              nécessaire à la prise d&apos;un rendez-vous ou d&apos;un message.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="sous-traitants">10. Sous-traitants et prestataires techniques</H2>
            <P>
              Pour fournir le Service, Callora fait appel à des prestataires techniques qui
              traitent des données personnelles pour son compte, dans le cadre d&apos;engagements
              contractuels de confidentialité et de sécurité. Ces prestataires n&apos;utilisent
              les données que pour exécuter les tâches qui leur sont confiées et selon les
              instructions de Callora. Les principales catégories de prestataires sont :
            </P>
            <Ul>
              <li>
                <strong>Téléphonie / communications</strong> : Telnyx (acheminement et gestion des
                appels téléphoniques) ;
              </li>
              <li>
                <strong>Intelligence artificielle</strong> : fournisseur(s) de modèles de langage
                et de reconnaissance vocale utilisés pour comprendre les demandes des appelants et
                générer les réponses d&apos;Ora —{" "}
                <Placeholder>nom(s) exact(s) du ou des fournisseurs d&apos;IA utilisés</Placeholder>
                ;
              </li>
              <li>
                <strong>Hébergement et infrastructure</strong> :{" "}
                <Placeholder>nom du ou des hébergeurs / fournisseurs cloud utilisés et localisation des serveurs</Placeholder>
                ;
              </li>
              <li>
                <strong>Calendrier</strong> : Google (Google Calendar), pour les Cabinets ayant
                connecté leur calendrier ;
              </li>
              <li>
                <strong>Messagerie transactionnelle</strong> : Resend, pour l&apos;envoi des
                emails liés aux demandes de démonstration effectuées depuis le site web ;
              </li>
              <li>
                <strong>Paiement</strong>{" "}
                <Placeholder>prestataire de paiement/facturation utilisé, le cas échéant</Placeholder>
                ;
              </li>
              <li>
                <strong>Autres outils internes</strong>{" "}
                <Placeholder>
                  outils de support client, d&apos;analytics, de suivi d&apos;erreurs ou autres
                  services tiers éventuellement utilisés
                </Placeholder>
                .
              </li>
            </Ul>
            <P>
              Une liste à jour des sous-traitants ultérieurs peut être fournie sur demande, dans
              les conditions prévues par l&apos;accord de sous-traitance conclu avec chaque
              Cabinet.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="transferts">11. Transferts internationaux de données</H2>
            <P>
              Certains prestataires mentionnés à la section 10 sont susceptibles de traiter des
              données en dehors de l&apos;Espace économique européen (EEE), notamment aux
              États-Unis. Lorsqu&apos;un tel transfert a lieu, Callora veille à ce qu&apos;il
              s&apos;appuie sur un mécanisme reconnu par le RGPD pour encadrer les transferts
              internationaux de données{" "}
              <Placeholder>
                préciser le ou les mécanismes effectivement utilisés pour chaque prestataire
                concerné : clauses contractuelles types de la Commission européenne, décision
                d&apos;adéquation, certification Data Privacy Framework, etc.
              </Placeholder>
              .
            </P>
            <P>
              <Placeholder>
                indiquer, pour chaque catégorie de prestataire listée en section 10, le pays où
                les données sont effectivement traitées/hébergées
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="conservation">12. Durée de conservation</H2>
            <P>
              Callora conserve les données personnelles pendant la durée nécessaire aux finalités
              pour lesquelles elles sont traitées, décrites dans la présente Politique, et
              conformément aux obligations légales applicables. Les durées précises varient selon
              la catégorie de données et doivent être définies par Callora, en concertation avec
              les Cabinets clients pour les données relevant de leur responsabilité de
              traitement :
            </P>
            <Ul>
              <li>
                <strong>Comptes et données de facturation des Cabinets</strong> :{" "}
                <Placeholder>durée de conservation précise, y compris obligations comptables/fiscales</Placeholder>
                ;
              </li>
              <li>
                <strong>Transcriptions d&apos;appels</strong> :{" "}
                <Placeholder>durée de conservation précise</Placeholder>
                ;
              </li>
              <li>
                <strong>Enregistrements audio</strong> (lorsque activés) :{" "}
                <Placeholder>durée de conservation précise</Placeholder>
                ;
              </li>
              <li>
                <strong>Messages et demandes de rendez-vous transmis au Cabinet</strong> :{" "}
                <Placeholder>durée de conservation précise</Placeholder>
                ;
              </li>
              <li>
                <strong>Jetons d&apos;autorisation OAuth Google Calendar</strong> : conservés
                jusqu&apos;à la déconnexion du calendrier par le Cabinet ou la révocation de
                l&apos;autorisation ;
              </li>
              <li>
                <strong>Demandes de démonstration reçues via le site web</strong> :{" "}
                <Placeholder>durée de conservation précise</Placeholder>
                .
              </li>
            </Ul>
            <P>
              À l&apos;issue de ces durées, les données sont supprimées ou anonymisées selon les
              modalités décrites à la section 15.{" "}
              <Placeholder>
                confirmer si un mécanisme de suppression automatique est effectivement en place ;
                à défaut, décrire le processus de suppression manuel actuellement utilisé
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="securite">13. Sécurité</H2>
            <P>
              Callora met en œuvre des mesures techniques et organisationnelles visant à protéger
              les données personnelles contre l&apos;accès non autorisé, la perte, l&apos;altération
              ou la divulgation, en tenant compte de la nature des données traitées et des risques
              présentés par le traitement. Ces mesures incluent notamment{" "}
              <Placeholder>
                décrire précisément les mesures effectivement en place : gestion des accès et des
                habilitations, authentification, chiffrement en transit et/ou au repos le cas
                échéant, cloisonnement des données entre Cabinets, journalisation, sauvegardes,
                politique de gestion des incidents, etc. — ne mentionner le chiffrement ou toute
                autre mesure que si elle est réellement mise en œuvre
              </Placeholder>
              .
            </P>
            <P>
              En cas de violation de données personnelles susceptible d&apos;engendrer un risque
              pour les droits et libertés des personnes concernées, Callora s&apos;engage à
              respecter les obligations de notification prévues par le RGPD, y compris,
              lorsqu&apos;elle agit en qualité de sous-traitant, l&apos;information sans délai
              indu du Cabinet concerné.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="droits">14. Droits des personnes</H2>
            <P>
              Sous réserve des conditions prévues par le RGPD et, le cas échéant, par la
              législation nationale applicable, toute personne concernée dispose des droits
              suivants sur ses données personnelles :
            </P>
            <Ul>
              <li>droit d&apos;accès à ses données ;</li>
              <li>droit de rectification des données inexactes ou incomplètes ;</li>
              <li>droit à l&apos;effacement (« droit à l&apos;oubli »), dans les cas prévus par la réglementation ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit d&apos;opposition, pour les traitements fondés sur l&apos;intérêt légitime ;</li>
              <li>droit à la portabilité des données, lorsque ce droit est applicable ;</li>
              <li>droit de retirer son consentement à tout moment, lorsque le traitement repose sur le consentement, sans que cela n&apos;affecte la licéité du traitement effectué avant ce retrait ;</li>
              <li>droit de définir des directives relatives au sort de ses données après son décès, dans les conditions prévues par la loi applicable.</li>
            </Ul>
            <P>
              <strong>Pour les appelants (patients, prospects)</strong> : dans la mesure où
              Callora agit en qualité de sous-traitant pour ces données, ces droits doivent en
              principe être exercés directement auprès du Cabinet concerné, responsable du
              traitement. Callora peut toutefois relayer toute demande qui lui serait adressée
              directement vers le Cabinet concerné, et lui apporter l&apos;assistance nécessaire
              pour y répondre, conformément à ses obligations de sous-traitant.
            </P>
            <P>
              <strong>Pour les Cabinets clients</strong> (comptes, facturation, échanges avec le
              support) : ces droits peuvent être exercés directement auprès de Callora, aux
              coordonnées indiquées à la section « Contact ».
            </P>
            <P>
              Toute demande doit permettre de vérifier l&apos;identité de son auteur. Callora
              s&apos;engage à répondre dans les délais prévus par la réglementation applicable.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="suppression">15. Suppression des données</H2>
            <P>
              Un Cabinet peut demander la suppression des données qu&apos;il a fait traiter par
              Callora (transcriptions, enregistrements, messages, historique d&apos;appels)
              conformément aux modalités prévues par le contrat applicable et sous réserve des
              obligations légales de conservation qui pourraient s&apos;imposer à Callora ou au
              Cabinet.
            </P>
            <P>
              À la fin de la relation contractuelle entre un Cabinet et Callora,{" "}
              <Placeholder>
                décrire précisément le sort des données à la résiliation : délai de suppression
                ou d&apos;anonymisation, possibilité d&apos;export préalable par le Cabinet,
                données conservées pour des motifs légaux (facturation, comptabilité) et durée
                correspondante
              </Placeholder>
              .
            </P>
            <P>
              Un appelant souhaitant obtenir la suppression de ses données doit, en principe,
              adresser sa demande au Cabinet concerné, responsable du traitement de ces données
              (voir section 14).
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="cookies">16. Cookies et technologies similaires</H2>
            <P>
              Le site {siteConfig.url} est susceptible d&apos;utiliser des cookies ou
              technologies similaires nécessaires à son fonctionnement (par exemple mémorisation
              de la langue choisie){" "}
              <Placeholder>
                lister précisément les cookies/technologies utilisés (mesure d&apos;audience,
                marketing, réseaux sociaux, etc.), leur finalité, leur durée de conservation et le
                mécanisme de consentement/paramétrage mis à disposition des visiteurs, le cas
                échéant via un bandeau de gestion des cookies conforme à la réglementation
                applicable
              </Placeholder>
              . Le tableau de bord de l&apos;application Callora peut par ailleurs utiliser des
              cookies ou technologies de stockage local strictement nécessaires à
              l&apos;authentification et au fonctionnement du Service.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="modifications">17. Modifications de la politique</H2>
            <P>
              Callora peut être amenée à modifier la présente Politique, notamment pour tenir
              compte d&apos;évolutions du Service, de ses prestataires, ou de la réglementation
              applicable. La version en vigueur est celle publiée sur le site {siteConfig.url},
              avec sa date de dernière mise à jour indiquée en tête de document. En cas de
              modification substantielle,{" "}
              <Placeholder>
                décrire le mode d&apos;information retenu : notification par email aux Cabinets
                clients, bandeau sur le tableau de bord, délai de préavis, etc.
              </Placeholder>
              .
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="contact">18. Contact</H2>
            <P>
              Pour toute question relative à la présente Politique ou à l&apos;exercice de vos
              droits, vous pouvez contacter Callora :
            </P>
            <Ul>
              <li>
                par email : <Placeholder>adresse email de contact dédiée à la protection des données, ex. privacy@callora.ai</Placeholder>
              </li>
              <li>
                par courrier : <Placeholder>adresse postale du siège social</Placeholder>
              </li>
              <li>
                <Placeholder>le cas échéant, coordonnées directes du délégué à la protection des données (DPO)</Placeholder>
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="autorite">19. Autorité de contrôle compétente</H2>
            <P>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
              vous disposez du droit d&apos;introduire une réclamation auprès de
              l&apos;autorité de contrôle compétente en matière de protection des données. En
              France, il s&apos;agit de la Commission nationale de l&apos;informatique et des
              libertés (CNIL) —{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noreferrer"
                className="text-brand underline underline-offset-4"
              >
                www.cnil.fr
              </a>
              . Les personnes résidant dans un autre État membre de l&apos;Union européenne
              peuvent, selon les cas, s&apos;adresser à l&apos;autorité de contrôle de leur pays
              de résidence.{" "}
              <Placeholder>
                confirmer que la CNIL est bien l&apos;autorité de contrôle pertinente au regard du
                lieu d&apos;établissement effectif de Callora, et ajuster si nécessaire
              </Placeholder>
            </P>
          </section>
        </div>
      </main>
    </>
  )
}
