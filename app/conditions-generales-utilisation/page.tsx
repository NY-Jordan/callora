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
  { id: "objet", label: "1. Objet et champ d'application" },
  { id: "definitions", label: "2. Définitions" },
  { id: "description-service", label: "3. Description du service Callora" },
  { id: "compte", label: "4. Création et gestion du compte" },
  { id: "eligibilite", label: "5. Conditions d'éligibilité" },
  { id: "abonnement-tarification", label: "6. Abonnement et tarification" },
  { id: "paiement-facturation", label: "7. Paiement et facturation" },
  { id: "periode-renouvellement", label: "8. Période d'abonnement et renouvellement" },
  { id: "resiliation", label: "9. Résiliation" },
  { id: "suspension", label: "10. Suspension du compte" },
  { id: "utilisation-acceptable", label: "11. Utilisation acceptable du service" },
  { id: "obligations-cabinet", label: "12. Obligations du Cabinet" },
  { id: "intelligence-artificielle", label: "13. Utilisation de l'intelligence artificielle" },
  { id: "limites-ia", label: "14. Limites et erreurs possibles de l'IA" },
  { id: "appels-telephoniques", label: "15. Appels téléphoniques, transcription et enregistrement" },
  { id: "google-calendar", label: "16. Rendez-vous et intégration Google Calendar" },
  { id: "infos-cabinet", label: "17. Responsabilité relative aux informations fournies par le Cabinet" },
  { id: "donnees-personnelles", label: "18. Données personnelles et RGPD" },
  { id: "confidentialite", label: "19. Confidentialité" },
  { id: "propriete-intellectuelle", label: "20. Propriété intellectuelle" },
  { id: "contenu-client", label: "21. Contenu fourni par le Cabinet" },
  { id: "fournisseurs-tiers", label: "22. Services et fournisseurs tiers" },
  { id: "disponibilite", label: "23. Disponibilité et maintenance" },
  { id: "securite", label: "24. Sécurité" },
  { id: "limitation-responsabilite", label: "25. Limitation de responsabilité" },
  { id: "indemnisation", label: "26. Indemnisation" },
  { id: "force-majeure", label: "27. Force majeure" },
  { id: "modifications-service", label: "28. Modifications du Service" },
  { id: "modifications-conditions", label: "29. Modifications des présentes conditions" },
  { id: "droit-applicable", label: "30. Droit applicable et règlement des litiges" },
  { id: "contact", label: "31. Contact" },
  { id: "a-completer", label: "Informations à compléter avant publication" },
]

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
        <div className="page-container flex flex-col gap-10 py-16 sm:py-20">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-brand">Conditions générales d&apos;utilisation</p>
            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Conditions générales d&apos;utilisation de Callora
            </h1>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : <Placeholder>date de publication</Placeholder>
            </p>
            <div className="mt-2 rounded-xl border border-warning/30 bg-warning-soft/60 p-4 text-sm leading-6 text-foreground">
              <strong>Note interne — à retirer avant publication :</strong> ce document est un
              projet de conditions générales d&apos;utilisation fourni à titre d&apos;information
              et d&apos;aide à la rédaction. Il ne constitue pas un avis juridique. Les passages
              signalés par <span className="font-mono text-xs">[À COMPLÉTER]</span> doivent être
              vérifiés, complétés ou validés — idéalement par un professionnel du droit compétent
              — avant toute mise en ligne ou signature avec un client.
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
            <H2 id="objet">1. Objet et champ d&apos;application</H2>
            <P>
              Les présentes conditions générales d&apos;utilisation (les « Conditions »)
              régissent l&apos;accès et l&apos;utilisation du service d&apos;assistant
              téléphonique intelligent Callora (« Ora »), édité par{" "}
              <Placeholder>
                raison sociale, forme juridique, numéro RCS/SIREN, adresse du siège social
              </Placeholder>{" "}
              (« Callora », « nous »), par tout cabinet professionnel (le « Cabinet », « vous »)
              qui souscrit au service Callora (le « Service ») ainsi que par les utilisateurs
              autorisés à agir pour le compte de ce Cabinet (les « Utilisateurs autorisés »).
            </P>
            <P>
              Le Service est destiné à un usage strictement professionnel par des cabinets
              dentaires et, plus largement, des professionnels de santé établis en France ou
              dans l&apos;Union européenne. Il n&apos;est pas destiné aux consommateurs au sens
              du droit de la consommation.
            </P>
            <P>
              Toute souscription au Service implique l&apos;acceptation pleine et entière des
              présentes Conditions par le Cabinet. Si le Cabinet n&apos;accepte pas ces
              Conditions, il ne doit pas souscrire au Service ni l&apos;utiliser.{" "}
              <Placeholder>
                confirmer l&apos;articulation avec un éventuel contrat-cadre, bon de commande ou
                conditions particulières négociées séparément avec certains Cabinets, et préciser
                l&apos;ordre de priorité entre ces documents en cas de contradiction
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="definitions">2. Définitions</H2>
            <Ul>
              <li>
                <strong>« Callora »</strong> désigne la société éditrice du Service, identifiée
                à la section 31.
              </li>
              <li>
                <strong>« Service »</strong> désigne l&apos;assistant téléphonique intelligent
                Callora (« Ora ») et l&apos;ensemble des fonctionnalités, du tableau de bord et
                des interfaces associées, tels que décrits à la section 3.
              </li>
              <li>
                <strong>« Cabinet »</strong> désigne le client professionnel — cabinet dentaire
                ou autre professionnel de santé — qui souscrit au Service.
              </li>
              <li>
                <strong>« Utilisateur autorisé »</strong> désigne toute personne physique
                autorisée par le Cabinet à accéder au compte et à utiliser le Service pour le
                compte de celui-ci (praticien, secrétariat, personnel administratif).
              </li>
              <li>
                <strong>« Appelant »</strong> désigne toute personne — patient, prospect ou tiers
                — dont l&apos;appel vers le Cabinet est susceptible d&apos;être pris en charge
                par Ora.
              </li>
              <li>
                <strong>« Compte »</strong> désigne l&apos;espace de gestion du Service attribué
                au Cabinet, accessible via le tableau de bord Callora.
              </li>
              <li>
                <strong>« Fournisseurs tiers »</strong> désigne les prestataires techniques
                utilisés par Callora pour fournir tout ou partie du Service, notamment en matière
                de téléphonie, hébergement, intelligence artificielle, stockage, authentification,
                calendrier ou paiement (voir section 22).
              </li>
              <li>
                <strong>« Conditions »</strong> désigne le présent document.
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="description-service">3. Description du service Callora</H2>
            <P>
              Callora fournit un assistant téléphonique basé sur l&apos;intelligence
              artificielle permettant notamment, selon les fonctionnalités souscrites et activées
              par le Cabinet :
            </P>
            <Ul>
              <li>de répondre aux appels téléphoniques entrants du Cabinet ;</li>
              <li>de prendre des messages à l&apos;attention du Cabinet ;</li>
              <li>
                de répondre à des questions générales des Appelants à partir des informations
                fournies par le Cabinet (horaires, services, tarifs, règles internes, etc.) ;
              </li>
              <li>d&apos;aider à l&apos;organisation de rendez-vous ;</li>
              <li>
                de consulter les disponibilités du Cabinet via Google Calendar, lorsque celui-ci
                a connecté son compte Google (voir section 16) ;
              </li>
              <li>
                de créer ou de modifier certains rendez-vous, lorsque les fonctionnalités
                correspondantes sont activées par le Cabinet ;
              </li>
              <li>
                de fonctionner en dehors des horaires d&apos;ouverture du Cabinet ou lorsque
                celui-ci ne peut pas répondre à ses appels.
              </li>
            </Ul>
            <P>
              Les communications téléphoniques traitées dans le cadre du Service transitent
              notamment par l&apos;infrastructure de <strong>Telnyx</strong>, prestataire tiers de
              télécommunications. Callora peut par ailleurs recourir à différents Fournisseurs
              tiers pour l&apos;hébergement, les télécommunications, l&apos;intelligence
              artificielle, le stockage et diverses intégrations nécessaires au fonctionnement du
              Service (voir section 22).
            </P>
            <P>
              L&apos;étendue exacte des fonctionnalités disponibles dépend de l&apos;offre
              souscrite par le Cabinet et peut évoluer conformément à la section 28
              « Modifications du Service ».
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="compte">4. Création et gestion du compte</H2>
            <P>
              L&apos;accès au Service nécessite la création d&apos;un Compte au nom du Cabinet.
              Le Cabinet s&apos;engage à fournir des informations exactes, complètes et à jour
              lors de la création du Compte et à les maintenir à jour tout au long de la relation
              contractuelle.
            </P>
            <P>
              Le Cabinet désigne les Utilisateurs autorisés habilités à accéder au Compte et à
              agir en son nom dans l&apos;utilisation du Service. Le Cabinet est responsable de
              la gestion des accès de ses Utilisateurs autorisés, notamment de la révocation de
              leurs accès lorsque cela est nécessaire (par exemple en cas de départ d&apos;un
              membre du personnel).
            </P>
            <P>
              Le Cabinet est responsable de la confidentialité des identifiants de connexion
              associés à son Compte et de toute activité réalisée depuis celui-ci. Le Cabinet
              s&apos;engage à informer Callora sans délai en cas de suspicion d&apos;accès non
              autorisé à son Compte.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="eligibilite">5. Conditions d&apos;éligibilité</H2>
            <P>Le Service est réservé aux personnes morales ou professionnels agissant à titre professionnel. En souscrivant au Service, le Cabinet déclare et garantit :</P>
            <Ul>
              <li>
                qu&apos;il agit dans le cadre de son activité professionnelle et non en qualité
                de consommateur ;
              </li>
              <li>
                qu&apos;il dispose de la capacité juridique et, le cas échéant, des autorisations
                nécessaires à l&apos;exercice de son activité professionnelle ;
              </li>
              <li>
                que la personne procédant à la souscription est habilitée à engager le Cabinet au
                titre des présentes Conditions ;
              </li>
              <li>
                qu&apos;il utilisera le Service conformément à sa destination professionnelle et
                aux règles déontologiques et légales applicables à son activité.
              </li>
            </Ul>
            <P>
              Callora se réserve le droit de refuser une souscription ou de suspendre un Compte
              qui ne remplirait manifestement pas ces conditions, dans les conditions prévues à la
              section 10.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="abonnement-tarification">6. Abonnement et tarification</H2>
            <P>
              Le Service est fourni sous forme d&apos;abonnement, dont les caractéristiques
              (fonctionnalités incluses, volume de minutes ou d&apos;appels, options
              additionnelles) sont précisées dans l&apos;offre commerciale souscrite par le
              Cabinet{" "}
              <Placeholder>
                décrire précisément les formules d&apos;abonnement proposées, ou renvoyer vers une
                grille tarifaire / un devis / un bon de commande faisant partie intégrante des
                présentes Conditions
              </Placeholder>
              .
            </P>
            <P>
              Les tarifs applicables sont ceux en vigueur au moment de la souscription ou, le cas
              échéant, ceux convenus dans les conditions particulières applicables au Cabinet.
              Sauf stipulation contraire, les tarifs sont exprimés{" "}
              <Placeholder>hors taxes / toutes taxes comprises, devise applicable</Placeholder>.
            </P>
            <P>
              Callora peut proposer des frais de mise en service ou d&apos;accompagnement à la
              configuration initiale du Service (« onboarding »){" "}
              <Placeholder>préciser si applicable, montant et conditions</Placeholder>, ainsi que
              des frais liés à une éventuelle consommation excédant les volumes inclus dans
              l&apos;offre souscrite (par exemple minutes d&apos;appel supplémentaires){" "}
              <Placeholder>
                décrire précisément le mécanisme de facturation à l&apos;usage, le cas échéant
              </Placeholder>
              .
            </P>
            <P>
              Callora se réserve le droit de modifier ses tarifs pour les périodes de
              renouvellement futures, moyennant un préavis raisonnable communiqué au Cabinet dans
              les conditions prévues à la section 8.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="paiement-facturation">7. Paiement et facturation</H2>
            <P>
              Les sommes dues au titre de l&apos;abonnement sont facturées{" "}
              <Placeholder>périodicité de facturation : mensuelle, annuelle, autre</Placeholder>{" "}
              et sont exigibles selon les modalités précisées sur la facture ou dans les
              conditions particulières applicables au Cabinet.
            </P>
            <P>
              Le paiement s&apos;effectue par les moyens proposés par Callora, le cas échéant par
              l&apos;intermédiaire d&apos;un prestataire de paiement tiers{" "}
              <Placeholder>nom du prestataire de paiement utilisé, le cas échéant</Placeholder>.
              Le Cabinet autorise, si applicable, le prélèvement automatique des sommes dues selon
              le moyen de paiement enregistré sur son Compte.
            </P>
            <P>
              En cas de retard de paiement, Callora peut, après mise en demeure restée sans effet
              pendant un délai de <Placeholder>délai, ex. 15 jours</Placeholder>, appliquer des
              pénalités de retard et/ou suspendre l&apos;accès au Service dans les conditions
              prévues à la section 10, sans préjudice de son droit de résilier le Compte pour
              défaut de paiement dans les conditions de la section 9.{" "}
              <Placeholder>
                préciser le taux des pénalités de retard applicable et, pour les relations B2B en
                France, l&apos;indemnité forfaitaire pour frais de recouvrement prévue par le
                Code de commerce, le cas échéant
              </Placeholder>
            </P>
            <P>
              Sauf erreur manifeste de facturation imputable à Callora, les sommes versées au
              titre de périodes d&apos;abonnement déjà échues ne sont pas remboursables.{" "}
              <Placeholder>
                préciser la politique de remboursement applicable, notamment en cas de résiliation
                anticipée, d&apos;interruption prolongée du Service imputable à Callora, ou
                d&apos;erreur de facturation
              </Placeholder>
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="periode-renouvellement">8. Période d&apos;abonnement et renouvellement</H2>
            <P>
              L&apos;abonnement est souscrit pour une durée initiale de{" "}
              <Placeholder>durée initiale de l&apos;abonnement</Placeholder>. Sauf résiliation par
              l&apos;une des parties dans les conditions prévues à la section 9, l&apos;abonnement
              se renouvelle automatiquement pour des périodes successives de{" "}
              <Placeholder>durée de la période de renouvellement</Placeholder>, sauf notification
              contraire adressée par l&apos;une des parties dans un délai de{" "}
              <Placeholder>délai de préavis avant échéance</Placeholder> avant l&apos;échéance en
              cours.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="resiliation">9. Résiliation</H2>
            <H3>9.1 Résiliation par le Cabinet</H3>
            <P>
              Le Cabinet peut résilier son abonnement à tout moment{" "}
              <Placeholder>
                préciser les modalités : résiliation à l&apos;échéance uniquement, ou possibilité
                de résiliation anticipée moyennant préavis et/ou indemnité
              </Placeholder>
              , en adressant sa demande selon les modalités indiquées sur le tableau de bord ou
              aux coordonnées de contact figurant à la section 31.
            </P>
            <H3>9.2 Résiliation par Callora pour violation des Conditions</H3>
            <P>
              Callora peut résilier le Compte d&apos;un Cabinet, après mise en demeure restée
              sans effet pendant un délai raisonnable{" "}
              <Placeholder>délai de mise en demeure, ex. 15 jours</Placeholder>, en cas de
              manquement grave ou répété du Cabinet à ses obligations au titre des présentes
              Conditions, notamment en cas d&apos;utilisation non conforme à la section 11
              « Utilisation acceptable du service » ou de défaut de paiement persistant.
            </P>
            <H3>9.3 Effets de la résiliation</H3>
            <P>
              À la date d&apos;effet de la résiliation, l&apos;accès du Cabinet au Service cesse.
              Les sommes déjà dues restent exigibles. Le traitement des données du Cabinet après
              résiliation s&apos;effectue conformément à la section 18 et aux règles de
              conservation applicables, ainsi qu&apos;à la Politique de confidentialité de
              Callora.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="suspension">10. Suspension du compte</H2>
            <P>Callora peut suspendre, temporairement et de manière proportionnée, l&apos;accès d&apos;un Cabinet au Service, notamment dans les cas suivants :</P>
            <Ul>
              <li>défaut de paiement, dans les conditions prévues à la section 7 ;</li>
              <li>
                utilisation du Service manifestement contraire à la section 11 « Utilisation
                acceptable du service » ;
              </li>
              <li>
                nécessité technique ou de sécurité, notamment en cas de suspicion de compromission
                du Compte, d&apos;incident de sécurité ou de risque pour le Service ou pour
                d&apos;autres Cabinets ;
              </li>
              <li>
                demande ou obligation émanant d&apos;une autorité compétente ou d&apos;un
                Fournisseur tiers dont dépend le fonctionnement du Service.
              </li>
            </Ul>
            <P>
              Dans la mesure du possible et sauf urgence ou obligation légale contraire, Callora
              informe le Cabinet préalablement à toute suspension et l&apos;invite à régulariser la
              situation. La suspension est levée dès que la cause qui l&apos;a justifiée a cessé.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="utilisation-acceptable">11. Utilisation acceptable du service</H2>
            <P>Le Cabinet et ses Utilisateurs autorisés s&apos;engagent à ne pas utiliser le Service pour, notamment :</P>
            <Ul>
              <li>
                enfreindre une loi ou une réglementation applicable, y compris en matière de
                protection des données personnelles, de droit de la santé ou de démarchage
                téléphonique ;
              </li>
              <li>
                porter atteinte aux droits de tiers, notamment aux droits de propriété
                intellectuelle, à la vie privée ou à la réputation d&apos;autrui ;
              </li>
              <li>
                transmettre à Ora, via la base de connaissances ou les paramètres du Service, des
                contenus illicites, trompeurs, discriminatoires ou frauduleux ;
              </li>
              <li>
                tenter de contourner les mesures de sécurité du Service, d&apos;accéder sans
                autorisation à des données d&apos;un autre Cabinet, ou de perturber le
                fonctionnement du Service (notamment par tout moyen automatisé abusif) ;
              </li>
              <li>
                utiliser le Service pour fournir un diagnostic médical ou dentaire, ou pour
                remplacer l&apos;intervention d&apos;un professionnel de santé, conformément à la
                section 13 ;
              </li>
              <li>
                revendre, sous-licencier ou mettre à disposition de tiers l&apos;accès au Service
                en dehors du cadre de l&apos;utilisation par ses propres Utilisateurs autorisés,
                sans accord écrit préalable de Callora.
              </li>
            </Ul>
            <P>
              Toute utilisation contraire à la présente section peut donner lieu à suspension ou
              résiliation du Compte dans les conditions prévues aux sections 9 et 10.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="obligations-cabinet">12. Obligations du Cabinet</H2>
            <P>Le Cabinet est responsable, notamment :</P>
            <Ul>
              <li>des informations qu&apos;il fournit à Callora dans le cadre de la configuration et de l&apos;utilisation du Service ;</li>
              <li>des horaires d&apos;ouverture et de disponibilité qu&apos;il configure ;</li>
              <li>des services, tarifs et informations générales communiqués à Ora afin de répondre aux Appelants ;</li>
              <li>des règles de prise de rendez-vous qu&apos;il définit ;</li>
              <li>de la configuration de son calendrier et des paramètres associés ;</li>
              <li>des numéros de téléphone configurés dans le cadre du Service ;</li>
              <li>de la conformité de son utilisation du Service avec les lois et réglementations qui lui sont applicables, y compris celles propres à sa profession ;</li>
              <li>de l&apos;information de ses patients ou correspondants lorsque cela est nécessaire, notamment quant au recours à un assistant téléphonique automatisé ;</li>
              <li>de la vérification des rendez-vous pris, modifiés ou annulés par l&apos;intermédiaire du Service, lorsque cela est nécessaire au bon fonctionnement de son activité.</li>
            </Ul>
            <P>
              Le Cabinet s&apos;engage à maintenir à jour les informations qu&apos;il communique
              à Callora et reconnaît que la qualité des réponses fournies par Ora dépend
              directement de l&apos;exactitude et de l&apos;actualité de ces informations.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="intelligence-artificielle">13. Utilisation de l&apos;intelligence artificielle</H2>
            <P>
              Le Service repose sur des technologies d&apos;intelligence artificielle, notamment
              de reconnaissance vocale, de compréhension du langage et de génération de réponses.
              Le Cabinet reconnaît et accepte les points suivants :
            </P>
            <Ul>
              <li>
                les réponses générées par Ora sont produites automatiquement et peuvent, dans
                certains cas, être <strong>incorrectes, incomplètes ou inadaptées</strong> à la
                situation de l&apos;Appelant ;
              </li>
              <li>
                Callora ne garantit pas l&apos;exactitude absolue des réponses générées par
                l&apos;assistant ;
              </li>
              <li>
                <strong>l&apos;intelligence artificielle ne remplace pas un professionnel de
                santé</strong> et ne doit en aucun cas être utilisée pour établir un diagnostic
                médical ou dentaire, ni pour fournir un conseil médical ou dentaire ;
              </li>
              <li>
                Ora a pour seule fonction d&apos;accueillir les appels, de prendre des messages,
                de répondre à des questions générales à partir des informations fournies par le
                Cabinet, et d&apos;aider à l&apos;organisation de rendez-vous ;
              </li>
              <li>
                le Cabinet reste seul responsable de définir les informations, instructions,
                services, horaires et règles que l&apos;assistant doit utiliser, et doit vérifier
                que ces informations sont exactes, à jour et adaptées à son activité ;
              </li>
              <li>
                le Cabinet demeure seul responsable des décisions et communications relevant de sa
                pratique professionnelle envers ses patients, l&apos;assistant ne constituant qu&apos;un
                outil d&apos;assistance à la prise d&apos;appels et de rendez-vous.
              </li>
            </Ul>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="limites-ia">14. Limites et erreurs possibles de l&apos;IA</H2>
            <P>
              Le Cabinet reconnaît que, comme tout système d&apos;intelligence artificielle, Ora
              présente des limites inhérentes à cette technologie, notamment :
            </P>
            <Ul>
              <li>
                une possible mauvaise compréhension d&apos;une demande formulée de façon ambiguë,
                incomplète ou dans un environnement sonore dégradé ;
              </li>
              <li>
                une possible erreur de transcription d&apos;un appel, notamment en cas
                d&apos;accent, de bruit de fond ou de mauvaise qualité de la ligne téléphonique ;
              </li>
              <li>
                une possible erreur dans la prise, la modification ou la confirmation d&apos;un
                rendez-vous ;
              </li>
              <li>
                une réponse fondée sur des informations obsolètes ou inexactes lorsque celles
                fournies par le Cabinet ne sont pas à jour.
              </li>
            </Ul>
            <P>
              En conséquence, et sans préjudice de la section 25 « Limitation de responsabilité »,
              il appartient au Cabinet de mettre en place les vérifications qu&apos;il juge
              appropriées (par exemple relecture des messages transmis, contrôle des rendez-vous
              enregistrés) avant de s&apos;appuyer de manière déterminante sur une information ou
              une action réalisée par Ora.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="appels-telephoniques">15. Appels téléphoniques, transcription et enregistrement</H2>
            <H3>15.1 Fonctionnement général de la téléphonie</H3>
            <P>Selon la configuration proposée et retenue par le Cabinet :</P>
            <Ul>
              <li>le Cabinet peut utiliser son numéro de téléphone habituel ;</li>
              <li>
                les appels destinés à ce numéro peuvent être transférés vers
                l&apos;infrastructure technique de Callora ;
              </li>
              <li>les appels ainsi transférés peuvent être traités par l&apos;assistant Ora ;</li>
              <li>
                certaines fonctionnalités dépendent de Fournisseurs tiers de télécommunications,
                notamment Telnyx.
              </li>
            </Ul>
            <P>
              La disponibilité du service téléphonique peut dépendre des réseaux et
              infrastructures de ces Fournisseurs tiers, sur lesquels Callora n&apos;a pas un
              contrôle total. Callora ne garantit pas une disponibilité absolue du réseau
              téléphonique (voir également section 23).
            </P>
            <H3>15.2 Transcription</H3>
            <P>
              Afin de permettre à Ora de traiter les demandes exprimées oralement, le contenu des
              appels pris en charge par l&apos;assistant est transcrit automatiquement. Cette
              transcription est nécessaire au fonctionnement même du Service.
            </P>
            <H3>15.3 Enregistrement</H3>
            <P>
              Lorsque le Cabinet active l&apos;enregistrement des appels dans les paramètres du
              Service, le flux audio des appels concernés peut être conservé en complément de sa
              transcription. Le Cabinet est seul responsable de s&apos;assurer que
              l&apos;activation de cette fonctionnalité, ainsi que l&apos;information des
              Appelants qui pourrait en résulter, sont conformes à la réglementation qui lui est
              applicable.
            </P>
            <P>
              Les modalités précises de traitement, de conservation et de suppression des
              transcriptions et enregistrements sont décrites dans la Politique de
              confidentialité de Callora.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="google-calendar">16. Rendez-vous et intégration Google Calendar</H2>
            <P>
              Le Service permet au Cabinet de connecter, de façon volontaire, un compte Google
              Calendar via le protocole d&apos;autorisation OAuth, afin de permettre à Ora de
              consulter les disponibilités du Cabinet et, lorsque la fonctionnalité est activée,
              de créer ou modifier certains rendez-vous.
            </P>
            <Ul>
              <li>
                le Cabinet choisit volontairement de connecter son compte Google et autorise
                explicitement l&apos;accès aux données de calendrier nécessaires au
                fonctionnement des fonctionnalités qu&apos;il active ;
              </li>
              <li>
                Callora peut accéder aux données Google Calendar strictement nécessaires à ces
                fonctionnalités, dans les conditions décrites par la Politique de
                confidentialité ;
              </li>
              <li>
                le Cabinet peut à tout moment retirer cette autorisation, depuis le tableau de
                bord Callora et/ou directement depuis les paramètres de sécurité de son compte
                Google ;
              </li>
              <li>
                <strong>
                  Callora n&apos;est pas responsable des modifications effectuées directement
                  dans Google Calendar
                </strong>{" "}
                par le Cabinet ou par toute autre personne disposant d&apos;un accès à ce
                calendrier, en dehors du Service ;
              </li>
              <li>
                l&apos;utilisation de Google Calendar dans le cadre du Service demeure en outre
                soumise aux conditions d&apos;utilisation et politiques de Google applicables au
                compte Google du Cabinet.
              </li>
            </Ul>
            <P>
              Le Cabinet reste responsable de la cohérence entre les rendez-vous gérés via Ora et
              son calendrier effectif, notamment en cas de modification manuelle concurrente.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="infos-cabinet">
              17. Responsabilité relative aux informations fournies par le Cabinet
            </H2>
            <P>
              Ora répond aux Appelants sur la base des informations, instructions, horaires,
              services, tarifs et règles configurés par le Cabinet dans le Service. Callora
              n&apos;est pas en mesure de vérifier l&apos;exactitude, l&apos;exhaustivité ou la
              conformité de ces informations, qui relèvent de la seule responsabilité du Cabinet.
            </P>
            <P>
              En conséquence, le Cabinet est seul responsable des conséquences résultant d&apos;une
              information erronée, incomplète ou obsolète qu&apos;il aurait lui-même fournie ou
              configurée dans le Service, ainsi que de sa mise à jour régulière.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="donnees-personnelles">18. Données personnelles et RGPD</H2>
            <P>
              Les présentes Conditions encadrent l&apos;utilisation du Service. Les modalités de
              traitement des données personnelles par Callora — qu&apos;il s&apos;agisse des
              données du Cabinet en tant que client ou des données des Appelants traitées pour le
              compte du Cabinet — sont décrites séparément dans la{" "}
              <a
                href="/politique-de-confidentialite"
                className="text-brand underline underline-offset-4"
              >
                Politique de confidentialité
              </a>{" "}
              de Callora, qui fait partie intégrante de la relation contractuelle entre les
              parties et, le cas échéant, de l&apos;accord de sous-traitance conclu entre Callora
              et le Cabinet{" "}
              <Placeholder>
                confirmer l&apos;existence et la référence d&apos;un accord de sous-traitance
                (DPA) distinct, le cas échéant, et son articulation avec les présentes Conditions
              </Placeholder>
              .
            </P>
            <P>
              Callora n&apos;est pas automatiquement responsable de l&apos;ensemble des
              traitements de données personnelles réalisés par le Cabinet dans le cadre de son
              activité. Ainsi qu&apos;il est précisé dans la Politique de confidentialité, le
              Cabinet demeure responsable du traitement des données de ses patients, prospects et
              correspondants, et doit s&apos;assurer que son recours au Service est conforme aux
              obligations qui lui incombent à ce titre, notamment en matière d&apos;information
              des personnes concernées.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="confidentialite">19. Confidentialité</H2>
            <P>
              Chaque partie s&apos;engage à garder confidentielles les informations non publiques
              de nature commerciale, technique ou financière dont elle aurait connaissance à
              l&apos;occasion de l&apos;exécution des présentes Conditions, et à ne les utiliser
              qu&apos;aux fins de l&apos;exécution de la relation contractuelle entre les parties.
            </P>
            <P>
              Cette obligation ne s&apos;applique pas aux informations qui sont ou deviennent
              publiques sans manquement de la partie qui les détient, qui étaient déjà connues
              avant leur communication, ou dont la divulgation est requise par la loi ou par une
              autorité compétente.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="propriete-intellectuelle">20. Propriété intellectuelle</H2>
            <P>
              Callora conserve l&apos;ensemble des droits de propriété intellectuelle relatifs au
              logiciel, à la plateforme, à l&apos;interface, au code source, aux marques, au
              design ainsi qu&apos;aux modèles et systèmes développés par Callora dans le cadre du
              Service. Aucune disposition des présentes Conditions ne saurait être interprétée
              comme emportant cession d&apos;un quelconque droit de propriété intellectuelle de
              Callora au profit du Cabinet.
            </P>
            <P>
              Callora concède au Cabinet, pour la durée de l&apos;abonnement, un droit
              d&apos;utilisation non exclusif, non cessible et non transférable du Service,
              strictement limité aux besoins propres du Cabinet et aux fonctionnalités
              souscrites.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="contenu-client">21. Contenu fourni par le Cabinet</H2>
            <P>
              Le Cabinet conserve l&apos;ensemble des droits sur ses propres données, contenus,
              informations commerciales et éléments qu&apos;il fournit ou configure dans le
              Service (notamment le contenu de sa base de connaissances, ses horaires, ses
              tarifs, ses règles internes).
            </P>
            <P>
              Le Cabinet accorde à Callora, pour la durée de l&apos;abonnement, les droits
              nécessaires à l&apos;utilisation, l&apos;hébergement, la reproduction et le
              traitement de ces éléments dans la seule mesure requise pour fournir et faire
              fonctionner le Service à son bénéfice.
            </P>
            <P>
              Le Cabinet garantit disposer des droits nécessaires sur les contenus qu&apos;il
              fournit à Callora et que ces contenus ne portent pas atteinte aux droits de tiers ni
              à la réglementation applicable.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="fournisseurs-tiers">22. Services et fournisseurs tiers</H2>
            <P>
              Callora fait appel à différents Fournisseurs tiers pour fournir tout ou partie du
              Service, notamment en matière de téléphonie, d&apos;hébergement, d&apos;intelligence
              artificielle, de stockage, d&apos;authentification, de calendrier et de paiement.
            </P>
            <P>
              Callora se réserve le droit de faire appel à de nouveaux Fournisseurs tiers ou de
              remplacer un Fournisseur tiers existant, lorsque cela est nécessaire au
              fonctionnement, à l&apos;amélioration ou à la sécurité du Service, sous réserve du
              respect des engagements de confidentialité et de protection des données applicables.
            </P>
            <P>
              Callora ne saurait être tenue responsable des interruptions, dysfonctionnements ou
              indisponibilités imputables à un Fournisseur tiers et échappant à son contrôle
              raisonnable, sans préjudice des efforts que Callora s&apos;engage à mettre en œuvre
              pour limiter l&apos;impact de tels incidents sur le Service.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="disponibilite">23. Disponibilité et maintenance</H2>
            <P>
              Callora s&apos;efforce de maintenir le Service disponible et de bon fonctionnement,
              mais <strong>ne garantit pas une disponibilité de 100 %</strong>. Le Service peut
              être temporairement interrompu ou dégradé, notamment en raison :
            </P>
            <Ul>
              <li>d&apos;opérations de maintenance, planifiées ou non ;</li>
              <li>d&apos;incidents affectant un ou plusieurs Fournisseurs tiers ;</li>
              <li>de dysfonctionnements des réseaux de télécommunications ;</li>
              <li>de problèmes liés à la connectivité Internet du Cabinet ou de tiers ;</li>
              <li>
                d&apos;événements indépendants de la volonté raisonnable de Callora, y compris les
                cas de force majeure décrits à la section 27.
              </li>
            </Ul>
            <P>
              Callora s&apos;efforce d&apos;informer les Cabinets, dans des délais raisonnables,
              des interruptions significatives et planifiées du Service dont elle aurait
              connaissance à l&apos;avance{" "}
              <Placeholder>
                préciser, le cas échéant, l&apos;existence d&apos;un engagement de niveau de
                service (SLA) spécifique et ses modalités
              </Placeholder>
              .
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="securite">24. Sécurité</H2>
            <P>
              Callora met en œuvre des mesures techniques et organisationnelles raisonnables
              visant à protéger le Service et les données qui y sont traitées contre l&apos;accès
              non autorisé, la perte ou l&apos;altération, dans les conditions décrites plus en
              détail dans la Politique de confidentialité.
            </P>
            <P>
              Le Cabinet s&apos;engage à adopter des pratiques raisonnables de sécurité pour ce
              qui relève de son propre périmètre (gestion des identifiants de connexion, des
              accès de ses Utilisateurs autorisés, et sécurité de ses propres équipements et
              réseaux).
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="limitation-responsabilite">25. Limitation de responsabilité</H2>
            <P>
              Le Service est un outil logiciel d&apos;assistance reposant notamment sur des
              technologies d&apos;intelligence artificielle et de téléphonie fournies en partie
              par des tiers. Le Cabinet reconnaît que :
            </P>
            <Ul>
              <li>les réponses générées par Ora peuvent comporter des erreurs, ainsi qu&apos;il est rappelé aux sections 13 et 14 ;</li>
              <li>les systèmes téléphoniques peuvent subir des interruptions indépendantes de la volonté de Callora ;</li>
              <li>Google Calendar et d&apos;autres services tiers intégrés au Service peuvent être indisponibles ou évoluer indépendamment de Callora ;</li>
              <li>des rendez-vous peuvent être modifiés, annulés ou mal enregistrés en raison de ces limites ;</li>
              <li>le Cabinet demeure seul responsable de son activité professionnelle et de ses obligations envers ses patients.</li>
            </Ul>
            <P>
              Dans les limites permises par le droit applicable, la responsabilité de Callora au
              titre des présentes Conditions ne pourra être engagée qu&apos;en cas de faute
              prouvée de sa part, et sera limitée aux dommages directs et prévisibles subis par le
              Cabinet. Callora ne pourra être tenue responsable des dommages indirects, tels que la
              perte de chiffre d&apos;affaires, de clientèle, de données, ou de tout préjudice
              d&apos;image, résultant de l&apos;utilisation ou de l&apos;impossibilité
              d&apos;utiliser le Service.
            </P>
            <P>
              Sauf en cas de faute lourde ou intentionnelle, ou dans les cas où la responsabilité
              de Callora ne peut être limitée en vertu du droit applicable, la responsabilité
              totale de Callora au titre d&apos;une période contractuelle donnée est limitée à{" "}
              <Placeholder>
                plafond de responsabilité, par exemple les sommes effectivement versées par le
                Cabinet au titre des [douze / six] derniers mois précédant le fait générateur
              </Placeholder>
              .
            </P>
            <P>
              Aucune disposition des présentes Conditions n&apos;a pour objet ou pour effet
              d&apos;exclure ou de limiter une responsabilité qui ne pourrait être exclue ou
              limitée en vertu du droit applicable.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="indemnisation">26. Indemnisation</H2>
            <P>
              Le Cabinet s&apos;engage à garantir Callora contre toute réclamation, action ou
              demande formée par un tiers (y compris un Appelant ou une autorité compétente) et
              résultant directement :
            </P>
            <Ul>
              <li>
                d&apos;informations, contenus ou instructions inexacts, illicites ou non autorisés
                que le Cabinet aurait fournis ou configurés dans le Service ;
              </li>
              <li>d&apos;une utilisation du Service par le Cabinet non conforme aux présentes Conditions ou à la réglementation qui lui est applicable ;</li>
              <li>
                d&apos;un manquement du Cabinet à ses propres obligations professionnelles,
                déontologiques ou réglementaires.
              </li>
            </Ul>
            <P>
              Cette garantie s&apos;applique dans la mesure permise par le droit applicable et ne
              couvre pas les conséquences d&apos;une faute exclusivement imputable à Callora.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="force-majeure">27. Force majeure</H2>
            <P>
              Aucune des parties ne pourra être tenue responsable d&apos;un manquement à ses
              obligations au titre des présentes Conditions dans la mesure où ce manquement
              résulte d&apos;un cas de force majeure tel que reconnu par le droit applicable,
              incluant notamment les catastrophes naturelles, pannes ou indisponibilités
              généralisées de réseaux de télécommunications ou d&apos;Internet, défaillances
              majeures de Fournisseurs tiers, actes des autorités publiques, conflits, ou tout
              autre événement imprévisible, irrésistible et extérieur à la partie concernée.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="modifications-service">28. Modifications du Service</H2>
            <P>
              Callora peut faire évoluer le Service, notamment pour l&apos;améliorer, corriger des
              anomalies, ajouter, modifier ou retirer certaines fonctionnalités, ou tenir compte
              d&apos;évolutions techniques, réglementaires ou liées à ses Fournisseurs tiers.
            </P>
            <P>
              Lorsqu&apos;une modification est susceptible d&apos;avoir un impact significatif sur
              l&apos;utilisation du Service par le Cabinet, Callora s&apos;efforce d&apos;en
              informer les Cabinets concernés dans un délai raisonnable préalablement à sa mise en
              œuvre{" "}
              <Placeholder>
                préciser le canal d&apos;information retenu : email, notification sur le tableau
                de bord, etc., et le délai de préavis applicable
              </Placeholder>
              .
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="modifications-conditions">29. Modifications des présentes conditions</H2>
            <P>
              Callora peut modifier les présentes Conditions, notamment pour tenir compte
              d&apos;évolutions du Service, de ses Fournisseurs tiers, ou de la réglementation
              applicable. La version en vigueur est celle publiée sur le site {siteConfig.url} et
              dans l&apos;application Callora, avec sa date de dernière mise à jour indiquée en
              tête de document.
            </P>
            <P>
              En cas de modification substantielle des présentes Conditions, Callora s&apos;engage
              à en informer les Cabinets clients dans un délai raisonnable préalablement à leur
              entrée en vigueur{" "}
              <Placeholder>
                préciser le canal d&apos;information retenu et le délai de préavis applicable,
                ainsi que les conséquences d&apos;un refus du Cabinet (par exemple faculté de
                résiliation avant l&apos;entrée en vigueur des nouvelles Conditions)
              </Placeholder>
              . La poursuite de l&apos;utilisation du Service après l&apos;entrée en vigueur des
              nouvelles Conditions vaut acceptation de celles-ci.
            </P>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="droit-applicable">30. Droit applicable et règlement des litiges</H2>
            <P>
              Les présentes Conditions sont soumises au droit{" "}
              <Placeholder>droit applicable, ex. droit français</Placeholder>.
            </P>
            <P>
              En cas de différend relatif à la validité, l&apos;interprétation ou
              l&apos;exécution des présentes Conditions, les parties s&apos;engagent à rechercher
              une résolution amiable avant toute action contentieuse.{" "}
              <Placeholder>
                préciser, le cas échéant, une procédure de résolution amiable préalable
                (médiation, conciliation) applicable entre professionnels
              </Placeholder>
            </P>
            <P>
              À défaut de résolution amiable, tout litige relève de la compétence exclusive de{" "}
              <Placeholder>juridiction compétente</Placeholder>, sous réserve des règles
              d&apos;ordre public applicables.
            </P>
            <p className="text-sm italic leading-7 text-muted-foreground sm:text-[15px]">
              Identité de la société éditrice du Service : <Placeholder>société exploitant Callora</Placeholder>{" "}
              — <Placeholder>forme juridique</Placeholder> — <Placeholder>adresse</Placeholder> —{" "}
              <Placeholder>pays</Placeholder> — <Placeholder>numéro d&apos;immatriculation</Placeholder>.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <H2 id="contact">31. Contact</H2>
            <P>
              Pour toute question relative aux présentes Conditions ou à l&apos;utilisation du
              Service, le Cabinet peut contacter Callora :
            </P>
            <Ul>
              <li>
                par email : <Placeholder>adresse email de contact commercial/support, ex. contact@callora.ai</Placeholder>
              </li>
              <li>
                par courrier : <Placeholder>adresse postale du siège social</Placeholder>
              </li>
            </Ul>
            <P>
              Pour toute question relative aux données personnelles, se référer à la section
              « Contact » de la{" "}
              <a
                href="/politique-de-confidentialite"
                className="text-brand underline underline-offset-4"
              >
                Politique de confidentialité
              </a>
              .
            </P>
          </section>

          <section className="flex flex-col gap-4 rounded-2xl border border-warning/30 bg-warning-soft/40 p-6">
            <H2 id="a-completer">Informations à compléter avant publication</H2>
            <P>
              Ce document est un projet de travail. Avant toute publication ou signature avec un
              Cabinet client, les éléments suivants doivent être vérifiés, complétés ou validés —
              idéalement avec l&apos;assistance d&apos;un professionnel du droit :
            </P>
            <H3>Informations juridiques et identité de la société</H3>
            <Ul>
              <li>Raison sociale, forme juridique, numéro RCS/SIREN, adresse du siège social et représentant légal de la société exploitant Callora ;</li>
              <li>Pays d&apos;établissement et juridiction/tribunal compétent en cas de litige ;</li>
              <li>Droit applicable retenu ;</li>
              <li>Existence éventuelle d&apos;une procédure de médiation ou de règlement amiable applicable entre professionnels.</li>
            </Ul>
            <H3>Informations commerciales</H3>
            <Ul>
              <li>Formules d&apos;abonnement, fonctionnalités incluses et grille tarifaire précises ;</li>
              <li>Existence et montant de frais de mise en service/onboarding ;</li>
              <li>Mécanisme de facturation à l&apos;usage (par exemple minutes d&apos;appel supplémentaires) ;</li>
              <li>Périodicité de facturation, devise et régime de TVA applicable ;</li>
              <li>Durée initiale de l&apos;abonnement, durée des périodes de renouvellement, délais de préavis de résiliation ou de non-renouvellement ;</li>
              <li>Modalités et délais de résiliation anticipée par le Cabinet, le cas échéant avec indemnité ;</li>
              <li>Taux des pénalités de retard de paiement et indemnité forfaitaire de recouvrement applicable ;</li>
              <li>Politique de remboursement applicable ;</li>
              <li>Plafond de responsabilité retenu à la section 25.</li>
            </Ul>
            <H3>Informations techniques et opérationnelles</H3>
            <Ul>
              <li>Existence éventuelle d&apos;un engagement de niveau de service (SLA) formalisé ;</li>
              <li>Canal et délai d&apos;information des Cabinets en cas de modification substantielle du Service ou des présentes Conditions ;</li>
              <li>Délai de mise en demeure applicable avant suspension ou résiliation pour manquement ;</li>
              <li>Existence et référence d&apos;un accord de sous-traitance (DPA) distinct avec les Cabinets, et son articulation avec les présentes Conditions ;</li>
              <li>Adresse email de contact commercial/support à publier.</li>
            </Ul>
            <P>
              Ces informations doivent rester cohérentes avec la Politique de confidentialité de
              Callora et avec le fonctionnement réel de l&apos;intégration Google Calendar OAuth.
            </P>
          </section>
        </div>
      </main>
    </>
  )
}
