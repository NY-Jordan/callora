import type { IndustrySlug } from "./industries"
import type { Locale } from "./translations"

// Search-facing content for each sector page: <title>, meta description,
// social card copy and the sector FAQ. The FAQ is rendered visibly on the
// page AND emitted as FAQPage JSON-LD, so both always say the same thing.
// Keep answers in line with what the product does today (appointment
// *requests*, not direct booking; transfers when configured; no integrations).

export type IndustrySeo = {
  /** Page title, without the " — Callora" suffix added by the root template. Aim for ≤ 50 chars. */
  title: string
  /** 140–160 chars, written for the search snippet. */
  description: string
  keywords: string[]
  /** Short headline for the generated Open Graph image. */
  ogHeadline: string
  /** schema.org Service.serviceType */
  serviceType: string
  /** schema.org Audience.audienceType */
  audience: string
  faq: { question: string; answer: string }[]
}

const fr: Record<IndustrySlug, IndustrySeo> = {
  dentistes: {
    title: "Secrétariat téléphonique pour cabinet dentaire",
    description:
      "Callora répond aux appels de votre cabinet dentaire 24h/24 : demandes de rendez-vous notées, urgences dentaires transférées, questions des patients traitées.",
    keywords: [
      "secrétariat téléphonique dentiste",
      "assistant téléphonique cabinet dentaire",
      "standard téléphonique dentiste",
      "urgence dentaire appel",
      "permanence téléphonique cabinet dentaire",
    ],
    ogHeadline: "Vous êtes au fauteuil. Callora est au téléphone.",
    serviceType: "Secrétariat téléphonique pour cabinets dentaires",
    audience: "Cabinets dentaires",
    faq: [
      {
        question: "Callora peut-il gérer les urgences dentaires ?",
        answer:
          "Oui. Vous définissez ce qui est urgent pour votre cabinet (dent cassée, gonflement, douleur aiguë…). Callora pose les bonnes questions et, si vous l'avez configuré, transfère immédiatement l'appel à votre équipe.",
      },
      {
        question: "Callora prend-il directement les rendez-vous dans mon agenda ?",
        answer:
          "Pas encore. Callora recueille la demande de rendez-vous (patient, motif, disponibilités) et la transmet à votre accueil. La prise de rendez-vous directe est prévue pour une future version.",
      },
      {
        question: "Que se passe-t-il quand le cabinet est fermé ?",
        answer:
          "Callora répond 24h/24, y compris le soir, le week-end et pendant les congés. Chaque appel est résumé dans votre tableau de bord pour être traité à la réouverture.",
      },
      {
        question: "Callora donne-t-il des conseils médicaux aux patients ?",
        answer: "Non. Callora ne pose aucun diagnostic : il oriente l'appel et transmet les informations à votre équipe.",
      },
    ],
  },
  cliniques: {
    title: "Accueil téléphonique pour clinique médicale",
    description:
      "Callora décroche les appels de votre clinique en parallèle, oriente les patients selon leur motif et soulage votre accueil aux heures de pointe, 24h/24.",
    keywords: [
      "accueil téléphonique clinique",
      "secrétariat médical téléphonique",
      "standard téléphonique centre de santé",
      "permanence téléphonique médicale",
      "assistant téléphonique professionnel de santé",
    ],
    ogHeadline: "Quatre lignes sonnent. Votre accueil n'a que deux mains.",
    serviceType: "Accueil téléphonique pour établissements de santé",
    audience: "Cliniques et professionnels de santé",
    faq: [
      {
        question: "Callora peut-il répondre à plusieurs appels en même temps ?",
        answer: "Oui. Chaque appel est pris en charge en parallèle, sans file d'attente, même au pic d'appels du matin.",
      },
      {
        question: "Callora communique-t-il des résultats ou des avis médicaux ?",
        answer:
          "Non. Callora ne communique aucun résultat et ne donne aucun avis médical. Il enregistre la demande et la transmet à votre secrétariat.",
      },
      {
        question: "Comment sont gérées les urgences vitales ?",
        answer:
          "Les signaux d'alerte déclenchent la consigne d'appeler le 15 ou le 112 et, si vous l'avez configuré, un transfert vers un membre de votre équipe.",
      },
      {
        question: "Faut-il installer un logiciel dans la clinique ?",
        answer: "Non. Callora fonctionne entièrement dans le cloud, à partir de votre numéro existant.",
      },
    ],
  },
  salons: {
    title: "Assistant téléphonique pour salon de coiffure",
    description:
      "Mains prises ? Callora répond au téléphone de votre salon de coiffure ou institut, note les demandes de rendez-vous et répond aux questions des clientes.",
    keywords: [
      "assistant téléphonique salon de coiffure",
      "standard téléphonique institut de beauté",
      "répondre au téléphone salon",
      "secrétariat téléphonique spa",
      "prise de rendez-vous salon téléphone",
    ],
    ogHeadline: "Les mains dans les cheveux, le téléphone entre de bonnes mains.",
    serviceType: "Assistant téléphonique pour salons de coiffure et instituts de beauté",
    audience: "Salons de coiffure, instituts de beauté et spas",
    faq: [
      {
        question: "Callora peut-il répondre aux questions sur mes tarifs et horaires ?",
        answer: "Oui. Vous renseignez vos horaires, tarifs et prestations une fois ; Callora les donne à chaque appel, avec le ton de votre salon.",
      },
      {
        question: "Les clientes peuvent-elles demander leur coiffeuse habituelle ?",
        answer: "Oui. Callora connaît les membres de votre équipe et transmet chaque demande avec le bon prénom.",
      },
      {
        question: "Callora réserve-t-il directement le créneau ?",
        answer:
          "Pas encore. Callora note la demande (prestation, préférence, disponibilités) pour que vous la confirmiez. La réservation directe est prévue pour une future version.",
      },
    ],
  },
  "agences-immobilieres": {
    title: "Accueil téléphonique pour agence immobilière",
    description:
      "Callora répond aux appels de votre agence immobilière, qualifie acheteurs, vendeurs et locataires, et transmet une fiche prospect complète au bon agent.",
    keywords: [
      "accueil téléphonique agence immobilière",
      "qualification prospects immobilier",
      "standard téléphonique agence immobilière",
      "permanence téléphonique immobilier",
      "assistant téléphonique agent immobilier",
    ],
    ogHeadline: "Le prospect appelle maintenant. Pas après la visite.",
    serviceType: "Accueil téléphonique et qualification de prospects pour agences immobilières",
    audience: "Agences immobilières",
    faq: [
      {
        question: "Quelles informations Callora recueille-t-il auprès des prospects ?",
        answer:
          "Selon le profil : type de bien, secteur, budget et financement pour un acheteur ; adresse, surface et délai pour un vendeur ; loyer, date d'entrée et garant pour un locataire.",
      },
      {
        question: "Comment les demandes sont-elles réparties entre les agents ?",
        answer: "Vous définissez les règles (secteur, type de transaction, annonce) ; Callora transmet chaque demande à l'agent concerné.",
      },
      {
        question: "Callora répond-il après la fermeture de l'agence ?",
        answer: "Oui, 24h/24. Les prospects qui appellent le soir ou le week-end sont qualifiés et transmis dans la foulée.",
      },
    ],
  },
  avocats: {
    title: "Secrétariat téléphonique pour cabinet d'avocats",
    description:
      "Callora accueille les appels de votre cabinet d'avocats, qualifie les nouvelles demandes par domaine du droit et signale les délais urgents au bon avocat.",
    keywords: [
      "secrétariat téléphonique avocat",
      "permanence téléphonique cabinet d'avocats",
      "accueil téléphonique avocat",
      "standard téléphonique juridique",
      "qualification nouveaux clients avocat",
    ],
    ogHeadline: "Le premier appel est déjà une consultation.",
    serviceType: "Secrétariat téléphonique pour cabinets d'avocats",
    audience: "Cabinets d'avocats",
    faq: [
      {
        question: "Callora donne-t-il des conseils juridiques ?",
        answer: "Non. Callora recueille les faits et les transmet ; l'analyse et le conseil restent l'affaire de vos avocats.",
      },
      {
        question: "Comment Callora gère-t-il les délais urgents ?",
        answer:
          "Toute mention d'une audience, d'une prescription ou d'une garde à vue déclenche le traitement prioritaire que vous avez défini : signalement ou transfert direct.",
      },
      {
        question: "Callora peut-il aider à vérifier les conflits d'intérêts ?",
        answer: "Callora peut demander le nom de la partie adverse et l'inclure dans le résumé, pour que le cabinet effectue sa vérification.",
      },
    ],
  },
  garages: {
    title: "Assistant téléphonique pour garage automobile",
    description:
      "Callora répond au téléphone de votre garage pendant que vous êtes en atelier : demandes de rendez-vous et de devis notées avec véhicule, immat et motif.",
    keywords: [
      "assistant téléphonique garage",
      "secrétariat téléphonique garage automobile",
      "standard téléphonique atelier mécanique",
      "prise de rendez-vous garage téléphone",
      "demande de devis garage",
    ],
    ogHeadline: "Vous êtes sous le pont. Callora est au téléphone.",
    serviceType: "Assistant téléphonique pour garages automobiles",
    audience: "Garages et ateliers automobiles",
    faq: [
      {
        question: "Quelles informations Callora note-t-il pour une demande de devis ?",
        answer: "Véhicule, année, immatriculation, kilométrage, symptômes ou dégâts, et disponibilités du client.",
      },
      {
        question: "Que fait Callora en cas de panne ou de dépannage urgent ?",
        answer: "Il recueille la localisation et les symptômes, et transfère l'appel à votre équipe si vous l'avez configuré.",
      },
      {
        question: "Callora peut-il répondre « votre voiture est prête ? »",
        answer: "Il enregistre la demande et la transmet pour un rappel rapide. La connexion à votre logiciel de garage est prévue pour une future version.",
      },
    ],
  },
  hotels: {
    title: "Réception téléphonique 24h/24 pour hôtel",
    description:
      "Callora répond aux appels de votre hôtel jour et nuit : demandes de réservation, arrivées tardives, questions des clients, avec un résumé pour la réception.",
    keywords: [
      "réception téléphonique hôtel",
      "standard téléphonique hôtel 24h/24",
      "réceptionniste de nuit hôtel",
      "demandes de réservation hôtel téléphone",
      "assistant téléphonique hôtellerie",
    ],
    ogHeadline: "Votre réception ferme parfois. Votre téléphone, jamais.",
    serviceType: "Réception téléphonique pour hôtels",
    audience: "Hôtels et hébergements",
    faq: [
      {
        question: "Callora répond-il la nuit ?",
        answer: "Oui, 24h/24. Les appels de la nuit sont résumés pour que l'équipe du matin reprenne sans rien réécouter.",
      },
      {
        question: "Callora confirme-t-il les réservations ?",
        answer:
          "Callora recueille la demande complète (dates, nombre de personnes, type de chambre) et la transmet à votre équipe pour confirmation. La connexion à votre PMS est prévue pour une future version.",
      },
      {
        question: "Quelles questions des clients Callora peut-il traiter ?",
        answer: "Celles que vous configurez : parking, accès, horaires du petit-déjeuner, restaurant, check-out tardif, politique d'annulation…",
      },
    ],
  },
  "services-professionnels": {
    title: "Standard téléphonique pour entreprises de services",
    description:
      "Callora répond aux appels de votre entreprise, comprend chaque demande et l'oriente vers le bon service : commercial, support, comptabilité ou direction.",
    keywords: [
      "standard téléphonique entreprise",
      "accueil téléphonique PME",
      "permanence téléphonique externalisée",
      "secrétariat téléphonique entreprise",
      "assistant téléphonique professionnel",
    ],
    ogHeadline: "Un appel entrant, la bonne personne au bout du fil.",
    serviceType: "Standard et accueil téléphonique pour entreprises",
    audience: "Entreprises de services professionnels",
    faq: [
      {
        question: "Callora peut-il orienter les appels vers différents services ?",
        answer: "Oui. Vous définissez vos services et vos règles ; Callora comprend la demande et la transmet à la bonne équipe.",
      },
      {
        question: "Mon activité n'est pas listée, Callora peut-il s'adapter ?",
        answer: "Oui. Callora s'adapte à votre vocabulaire, vos horaires, vos services et votre façon de travailler.",
      },
      {
        question: "Que reçoit mon équipe après chaque appel ?",
        answer: "Un résumé exploitable dans le tableau de bord : qui a appelé, pour quoi, le niveau d'urgence et la suite attendue.",
      },
    ],
  },
}

const en: Record<IndustrySlug, IndustrySeo> = {
  dentistes: {
    ...fr.dentistes,
    title: "Phone answering for dental practices",
    description: "Callora answers your dental practice's calls 24/7: appointment requests logged, dental emergencies transferred, patient questions handled.",
    ogHeadline: "You're chair-side. Callora is on the phone.",
    faq: [
      { question: "Can Callora handle dental emergencies?", answer: "Yes. You define what's urgent for your practice. Callora asks the right questions and, if configured, transfers the call to your team immediately." },
      { question: "Does Callora book directly into my calendar?", answer: "Not yet. Callora captures the appointment request (patient, reason, availability) and passes it to your front desk. Direct booking is planned for a future release." },
      { question: "What happens when the practice is closed?", answer: "Callora answers 24/7, including evenings, weekends, and holidays. Every call is summarized in your dashboard." },
      { question: "Does Callora give patients medical advice?", answer: "No. Callora never diagnoses: it routes the call and passes the information to your team." },
    ],
  },
  cliniques: {
    ...fr.cliniques,
    title: "Phone answering for clinics and healthcare providers",
    description: "Callora picks up your clinic's calls in parallel, routes patients by reason, and relieves your front desk at peak hours, 24/7.",
    ogHeadline: "Four lines ringing. Your front desk has two hands.",
    faq: [
      { question: "Can Callora answer several calls at once?", answer: "Yes. Every call is handled in parallel, with no hold queue." },
      { question: "Does Callora share results or medical advice?", answer: "No. Callora logs the request and forwards it to your medical secretary." },
      { question: "How are life-threatening emergencies handled?", answer: "Warning signs trigger the instruction to call emergency services and, if configured, a transfer to your team." },
      { question: "Do we need to install software?", answer: "No. Callora runs entirely in the cloud, on your existing number." },
    ],
  },
  salons: {
    ...fr.salons,
    title: "Phone answering for hair salons and spas",
    description: "Hands full? Callora answers your salon or spa's phone, takes booking requests, and answers clients' everyday questions.",
    ogHeadline: "Your hands are busy. Your phone is in good hands.",
    faq: [
      { question: "Can Callora answer questions about prices and hours?", answer: "Yes. Enter them once; Callora gives them on every call, in your salon's tone." },
      { question: "Can clients ask for their usual stylist?", answer: "Yes. Callora knows your team and forwards each request with the right name." },
      { question: "Does Callora book the slot directly?", answer: "Not yet. Callora logs the request for you to confirm. Direct booking is planned for a future release." },
    ],
  },
  "agences-immobilieres": {
    ...fr["agences-immobilieres"],
    title: "Phone answering for real estate agencies",
    description: "Callora answers your agency's calls, qualifies buyers, sellers, and tenants, and sends a complete lead sheet to the right agent.",
    ogHeadline: "The prospect is calling now. Not after the viewing.",
    faq: [
      { question: "What does Callora ask prospects?", answer: "Depending on the profile: property type, area, budget and financing for buyers; address, size and timeline for sellers; rent, move-in date and guarantor for tenants." },
      { question: "How are requests split between agents?", answer: "You set the rules (area, transaction type, listing); Callora forwards each request to the right agent." },
      { question: "Does Callora answer after hours?", answer: "Yes, 24/7. Evening and weekend callers are qualified and passed on right away." },
    ],
  },
  avocats: {
    ...fr.avocats,
    title: "Phone answering for law firms",
    description: "Callora answers your law firm's calls, qualifies new inquiries by practice area, and flags urgent deadlines to the right lawyer.",
    ogHeadline: "The first call is already a consultation.",
    faq: [
      { question: "Does Callora give legal advice?", answer: "No. Callora gathers the facts and passes them on; advice stays with your lawyers." },
      { question: "How does Callora handle urgent deadlines?", answer: "Any mention of a hearing, limitation period, or police custody triggers the priority handling you defined." },
      { question: "Can Callora help with conflict checks?", answer: "Callora can ask for the opposing party's name and include it in the summary so the firm can run its check." },
    ],
  },
  garages: {
    ...fr.garages,
    title: "Phone answering for auto repair shops",
    description: "Callora answers your garage's phone while you're in the shop: booking and quote requests captured with vehicle, plate, and issue.",
    ogHeadline: "You're under the lift. Callora is on the phone.",
    faq: [
      { question: "What does Callora note for a quote request?", answer: "Vehicle, year, plate, mileage, symptoms or damage, and the customer's availability." },
      { question: "What about breakdowns?", answer: "Callora collects location and symptoms, and transfers the call to your team if configured." },
      { question: "Can Callora answer “is my car ready?”", answer: "It logs the request for a quick callback. Shop-software integration is planned for a future release." },
    ],
  },
  hotels: {
    ...fr.hotels,
    title: "24/7 phone answering for hotels",
    description: "Callora answers your hotel's calls day and night: booking requests, late arrivals, and guest questions, with a summary for the front desk.",
    ogHeadline: "Your front desk sometimes closes. Your phone never does.",
    faq: [
      { question: "Does Callora answer overnight?", answer: "Yes, 24/7. Overnight calls are summarized for the morning team." },
      { question: "Does Callora confirm bookings?", answer: "Callora captures the full request and passes it to your team for confirmation. PMS integration is planned for a future release." },
      { question: "Which guest questions can Callora handle?", answer: "The ones you configure: parking, access, breakfast hours, restaurant, late check-out, cancellation policy…" },
    ],
  },
  "services-professionnels": {
    ...fr["services-professionnels"],
    title: "Phone answering for professional services",
    description: "Callora answers your business's calls, understands each request, and routes it to the right team: sales, support, accounting, or management.",
    ogHeadline: "One incoming call, the right person on the line.",
    faq: [
      { question: "Can Callora route calls to different teams?", answer: "Yes. Define your teams and rules; Callora routes each request." },
      { question: "My business isn't listed. Can Callora adapt?", answer: "Yes. Callora adapts to your vocabulary, hours, services, and processes." },
      { question: "What does my team receive after each call?", answer: "An actionable summary in the dashboard: who called, why, urgency, and expected follow-up." },
    ],
  },
}

export const industrySeoByLocale: Record<Locale, Record<IndustrySlug, IndustrySeo>> = { fr, en }
