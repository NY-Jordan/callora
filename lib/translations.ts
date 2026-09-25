export type Locale = "fr" | "en"

export type Translations = {
  nav: {
    product: string
    howItWorks: string
    pricing: string
    faq: string
    tryOra: string
    bookDemo: string
  }
  hero: {
    eyebrow: string
    headline: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
    badges: [string, string, string]
  }
  videoDemo: {
    eyebrow: string
    caption: string
  }
  trust: {
    title: string
    practices: string[]
    footnote: string
    indicators: [string, string, string, string]
  }
  problem: {
    eyebrow: string
    title: string
    description: string
    situations: { title: string; detail: string }[]
    closing: string
  }
  callDemo: {
    eyebrow: string
    title: string
    description: string
    incomingCall: string
    oraSubtitle: string
    replay: string
    speakerPatient: string
    speakerOra: string
    script: { text: string }[]
    synced: string
    newRequest: string
    cleaning: string
    status: string
    summary: string
    waiting: string
    liveCta: string
  }
  browserTest: {
    title: string
    description: string
    connecting: string
    talkingTo: string
    mute: string
    unmute: string
    endCall: string
    callEnded: string
    testAgain: string
    tryAgain: string
    close: string
    notSyncedError: string
    connectFailedError: string
    micError: string
    connectionCheckError: string
    startFailedError: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    description: string
    steps: { number: string; title: string; detail: string }[]
  }
  features: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; detail: string }[]
    comingNextLabel: string
    comingNext: string[]
    comingNextNote: string
  }
  dashboardShowcase: {
    eyebrow: string
    title: string
    description: string
    browserUrl: string
    sidebar: [string, string, string, string, string, string]
    overview: string
    dateLine: string
    statLabels: [string, string, string, string]
    tableHeaders: { caller: string; reason: string; status: string; time: string }
    calls: { caller: string; reason: string }[]
  }
  roi: {
    eyebrow: string
    title: string
    description: string
    missedTitle: string
    missedSteps: string[]
    answeredTitle: string
    answeredSteps: string[]
    disclaimer: string
  }
  pricing: {
    eyebrow: string
    title: string
    description: string
    badge: string
    startingAt: string
    perMonth: string
    features: string[]
    cta: string
    note: string
  }
  faq: {
    eyebrow: string
    title: string
    items: { question: string; answer: string }[]
  }
  finalCta: {
    title: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
  }
  bookDemo: {
    eyebrow: string
    title: string
    description: string
    labels: {
      name: string
      email: string
      practice: string
      phone: string
      date: string
      timeSlot: string
      notes: string
    }
    timeSlotOptions: [string, string, string]
    submit: string
    submitting: string
    successTitle: string
    successBody: string
    errors: {
      missingFields: string
      invalidEmail: string
      serverMisconfigured: string
      sendFailed: string
    }
  }
  footer: {
    tagline: string
    productColumnTitle: string
    copyright: string
    region: string
  }
  statusLabels: {
    resolved: string
    transferred: string
    escalated: string
    "follow-up": string
  }
}

const fr: Translations = {
  nav: {
    product: "Produit",
    howItWorks: "Comment ça marche",
    pricing: "Tarifs",
    faq: "FAQ",
    tryOra: "Essayer Ora",
    bookDemo: "Réserver une démo",
  },
  hero: {
    eyebrow: "Découvrez Ora — votre réceptionniste IA",
    headline: "Ne manquez plus jamais un appel patient.",
    subhead:
      "Ora, votre réceptionniste IA, répond aux appels 24h/24 et 7j/7, traite les demandes courantes des patients et tient votre équipe informée — même quand votre accueil est débordé.",
    ctaPrimary: "Réserver une démo",
    ctaSecondary: "Essayer Ora",
    badges: [
      "Aucun matériel à installer",
      "Opérationnel en quelques jours",
      "Conçu pour les cabinets européens",
    ],
  },
  videoDemo: {
    eyebrow: "Regarder",
    caption: "Découvrez comment Ora répond à un appel réel.",
  },
  trust: {
    title: "Conçu pour les cabinets dentaires modernes",
    practices: ["Cabinet Un", "Groupe Dentaire", "Clinique du Sourire", "Cabinet du Nord", "Dentaire Riverside"],
    footnote:
      "Exemples fictifs — cohorte d'accès anticipé en cours de constitution, pas de clients réels.",
    indicators: ["Disponible 24/7", "Réponse rapide", "Transfert vers un humain", "Sécurisé par conception"],
  },
  problem: {
    eyebrow: "Le problème",
    title: "Votre équipe ne peut pas répondre à tous les appels.",
    description:
      "Même le meilleur accueil a ses limites. Chaque sonnerie sans réponse est un moment décisif pour le patient à l'autre bout du fil.",
    situations: [
      { title: "Accueil surchargé", detail: "Votre réceptionniste s'occupe déjà d'un autre patient." },
      { title: "Hors horaires", detail: "Votre cabinet est fermé." },
      { title: "Heures de pointe", detail: "Plusieurs patients appellent en même temps." },
    ],
    closing: "Chaque appel manqué est peut-être un patient que vous n'entendrez plus jamais.",
  },
  callDemo: {
    eyebrow: "Démo produit",
    title: "Voyez ce qui se passe quand un patient appelle.",
    description:
      "Une vraie conversation avec Ora — du premier son de la sonnerie jusqu'à une entrée claire et exploitable dans votre tableau de bord.",
    incomingCall: "Appel entrant",
    oraSubtitle: "Ora — réceptionniste IA",
    replay: "Rejouer",
    speakerPatient: "Patient",
    speakerOra: "Ora",
    script: [
      { text: "Bonjour, j'aimerais savoir si vous acceptez de nouveaux patients." },
      { text: "Tout à fait, je peux vous aider. Quel type de rendez-vous recherchez-vous ?" },
      { text: "J'ai besoin d'un détartrage." },
      { text: "Parfait. Je note vos coordonnées et je transmets la demande à l'équipe du cabinet." },
    ],
    synced: "Synchronisé avec le tableau de bord",
    newRequest: "Nouvelle demande patient",
    cleaning: "Détartrage",
    status: "Statut : relance nécessaire",
    summary:
      "Votre équipe voit la demande du patient, ses coordonnées et le résumé complet de l'appel — prête à relancer sans avoir à réécouter l'appel.",
    waiting: "En attente de la fin de l'appel…",
    liveCta: "Parler à Ora maintenant",
  },
  browserTest: {
    title: "Testez Ora en direct",
    description: "Autorisez le micro et parlez avec Ora, notre réceptionniste IA — directement dans votre navigateur.",
    connecting: "Connexion en cours…",
    talkingTo: "Vous parlez avec Ora",
    mute: "Couper le micro",
    unmute: "Réactiver le micro",
    endCall: "Raccrocher",
    callEnded: "Appel terminé.",
    testAgain: "Retester",
    tryAgain: "Réessayer",
    close: "Fermer",
    notSyncedError: "La démo n'est pas disponible pour le moment.",
    connectFailedError: "La connexion a échoué. Merci de réessayer.",
    micError: "Impossible d'accéder au micro. Vérifiez les autorisations de votre navigateur.",
    connectionCheckError: "Un problème de connexion est survenu.",
    startFailedError: "Impossible de démarrer l'appel. Merci de réessayer.",
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Opérationnel en trois étapes simples.",
    description:
      "Pas de matériel compliqué. Pas de logiciel à installer dans votre cabinet. Votre équipe continue de travailler comme avant.",
    steps: [
      { number: "01", title: "Connectez votre cabinet", detail: "Nous configurons votre ligne en quelques jours, pas en quelques mois." },
      { number: "02", title: "Configurez Ora", detail: "Définissez comment Ora accueille les patients, ce qu'elle demande, et quand elle escalade." },
      { number: "03", title: "Laissez Ora répondre à vos appels", detail: "Chaque appel est traité, enregistré et prêt à être consulté par votre équipe." },
    ],
  },
  features: {
    eyebrow: "Ce qu'elle fait aujourd'hui",
    title: "Concentré sur l'essentiel avant tout.",
    description:
      "Pas de liste de fonctionnalités interminable. Callora excelle dans la couverture d'appels — le reste viendra ensuite.",
    items: [
      { title: "Réponse aux appels 24/7", detail: "Vos patients joignent toujours quelqu'un." },
      { title: "Traitement des appels par IA", detail: "Ora comprend les conversations naturelles." },
      { title: "Résumés d'appels", detail: "Votre équipe voit exactement ce qui s'est passé." },
      { title: "Escalade intelligente", detail: "Les appels importants ou sensibles peuvent être transférés à votre équipe." },
      { title: "Prise d'informations patient", detail: "Collecte les informations dont votre équipe a besoin." },
      { title: "Tableau de bord des appels", detail: "Suivez les appels, leurs résultats et les relances." },
    ],
    comingNextLabel: "Bientôt disponible",
    comingNext: ["Prise de rendez-vous", "Intégrations logiciels de gestion", "SMS", "Relances patients sortantes"],
    comingNextNote: "Prévu pour de futures versions, à mesure que nous construisons un accueil IA complet.",
  },
  dashboardShowcase: {
    eyebrow: "À l'intérieur de Callora",
    title: "Chaque appel, organisé dès qu'il se termine.",
    description:
      "Une vue unique et claire de ce qui s'est passé dans votre cabinet — plus besoin de réécouter les enregistrements ni de deviner.",
    browserUrl: "app.callora.ai/overview",
    sidebar: ["Aperçu", "Appels", "Patients", "Relances", "Ora", "Paramètres"],
    overview: "Aperçu",
    dateLine: "Mardi 25 août — Cabinet Dentaire Riverside",
    statLabels: ["Appels aujourd'hui", "Répondus par Ora", "À traiter", "Résolus"],
    tableHeaders: { caller: "Appelant", reason: "Motif", status: "Statut", time: "Heure" },
    calls: [
      { caller: "Nouveau patient", reason: "Intéressé par un détartrage" },
      { caller: "Sophie M.", reason: "Question sur un rendez-vous" },
      { caller: "Appelant inconnu", reason: "Douleur dentaire sévère" },
      { caller: "Marc D.", reason: "Demande de report" },
      { caller: "Nouveau patient", reason: "Question sur la couverture d'assurance" },
      { caller: "Claire B.", reason: "Consultation blanchiment" },
    ],
  },
  roi: {
    eyebrow: "Pourquoi c'est important",
    title: "Transformez les appels manqués en conversations traitées.",
    description:
      "Pas besoin de nouveaux chiffres pour savoir ce que coûte un appel manqué — juste d'en avoir moins.",
    missedTitle: "Appel manqué",
    missedSteps: ["Appel manqué", "Aucune réponse", "Le patient appelle un autre cabinet"],
    answeredTitle: "Appel traité",
    answeredSteps: ["Appel répondu", "Ora traite la demande", "L'équipe reçoit le contexte complet", "Le patient reçoit une relance"],
    disclaimer:
      "Chaque cabinet est différent — ceci est le changement de résultat que Callora est conçu pour créer, pas un résultat garanti.",
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Des tarifs d'accès anticipé simples.",
    description:
      "Nous validons le marché avec nos premiers cabinets partenaires. Les tarifs évolueront avec le produit.",
    badge: "Accès anticipé",
    startingAt: "À partir de",
    perMonth: "/ mois",
    features: [
      "Ora, votre réceptionniste IA",
      "Traitement des appels",
      "Résumés d'appels",
      "Tableau de bord",
      "Escalade humaine",
      "Couverture 24/7",
    ],
    cta: "Obtenir l'accès anticipé",
    note: "Tarifs d'accès anticipé réservés à nos premiers cabinets partenaires.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions que se posent les cabinets.",
    items: [
      {
        question: "Est-ce qu'Ora remplace notre réceptionniste ?",
        answer: "Non. Ora prend le relais quand votre équipe ne peut pas répondre, et peut transférer l'appel à votre personnel.",
      },
      { question: "Ora fonctionne-t-elle en dehors des horaires d'ouverture ?", answer: "Oui." },
      { question: "Les patients peuvent-ils parler naturellement avec Ora ?", answer: "Oui." },
      { question: "Ora peut-elle transférer les appels ?", answer: "Oui, lorsque cela est configuré." },
      { question: "Devons-nous installer un logiciel ?", answer: "Non. Le service fonctionne entièrement dans le cloud." },
      {
        question: "Ora prend-elle les rendez-vous ?",
        answer:
          "La prise de rendez-vous et les intégrations avec les logiciels de gestion sont prévues pour de futures versions. Le produit actuel se concentre sur la réponse et le traitement des appels.",
      },
      { question: "Pouvons-nous personnaliser ce qu'Ora dit ?", answer: "Oui." },
    ],
  },
  finalCta: {
    title: "Arrêtez d'envoyer vos patients sur répondeur.",
    subhead: "Offrez à votre cabinet une réceptionniste qui ne prend jamais de pause déjeuner.",
    ctaPrimary: "Réserver une démo",
    ctaSecondary: "Essayer Ora",
  },
  bookDemo: {
    eyebrow: "Réserver une démo",
    title: "Planifiez votre démo avec l'équipe Callora.",
    description:
      "Indiquez vos disponibilités, nous vous recontactons pour confirmer un créneau qui vous convient.",
    labels: {
      name: "Nom complet",
      email: "Email professionnel",
      practice: "Nom du cabinet",
      phone: "Téléphone (optionnel)",
      date: "Date souhaitée",
      timeSlot: "Créneau horaire souhaité",
      notes: "Autres disponibilités ou précisions (optionnel)",
    },
    timeSlotOptions: ["Matin (9h–12h)", "Après-midi (12h–17h)", "Fin de journée (17h–19h)"],
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    successTitle: "Demande envoyée !",
    successBody: "Merci ! Nous vous recontactons sous 24h ouvrées pour confirmer votre démo.",
    errors: {
      missingFields: "Merci de remplir les champs obligatoires.",
      invalidEmail: "Merci d'indiquer une adresse email valide.",
      serverMisconfigured:
        "Le service d'envoi n'est pas configuré pour le moment. Contactez-nous directement.",
      sendFailed: "Une erreur est survenue. Merci de réessayer ou de nous contacter directement.",
    },
  },
  footer: {
    tagline: "Ora, votre réceptionniste IA, veille à ce que chaque appel soit traité et chaque patient entendu.",
    productColumnTitle: "Produit",
    copyright: "© 2026 Callora. Conçu pour les cabinets dentaires européens.",
    region: "France · Belgique · Suisse · Royaume-Uni",
  },
  statusLabels: {
    resolved: "Résolu",
    transferred: "Transféré",
    escalated: "Escaladé",
    "follow-up": "Relance nécessaire",
  },
}

const en: Translations = {
  nav: {
    product: "Product",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    tryOra: "Try Ora",
    bookDemo: "Book a demo",
  },
  hero: {
    eyebrow: "Meet Ora — your AI receptionist",
    headline: "Never miss another patient call.",
    subhead:
      "Ora, your AI receptionist, answers calls 24/7, handles routine patient requests, and keeps your team informed — even when your front desk is busy.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "Try Ora",
    badges: ["No hardware to install", "Live in days", "Built for European practices"],
  },
  videoDemo: {
    eyebrow: "Watch now",
    caption: "See how Ora answers a real call.",
  },
  trust: {
    title: "Built for modern dental practices",
    practices: ["Practice One", "Dental Group", "Smile Clinic", "Northgate Care", "Riverside Dental"],
    footnote: "Illustrative placeholders — early-access cohort forming, not actual customers.",
    indicators: ["24/7 availability", "Fast response", "Human handoff", "Secure by design"],
  },
  problem: {
    eyebrow: "The problem",
    title: "Your team can't answer every call.",
    description:
      "Even the best front desk has limits. Every ring that goes unanswered is a decision point for the patient on the other end.",
    situations: [
      { title: "Busy front desk", detail: "Your receptionist is helping another patient." },
      { title: "After hours", detail: "Your practice is closed." },
      { title: "Peak hours", detail: "Multiple patients call at once." },
    ],
    closing: "Every unanswered call is a patient you may never hear from again.",
  },
  callDemo: {
    eyebrow: "Product demo",
    title: "See what happens when a patient calls.",
    description:
      "A real conversation with Ora — from the first ring to a clear, actionable entry in your dashboard.",
    incomingCall: "Incoming call",
    oraSubtitle: "Ora — AI receptionist",
    replay: "Replay",
    speakerPatient: "Patient",
    speakerOra: "Ora",
    script: [
      { text: "Hi, I'd like to know if you're accepting new patients." },
      { text: "Absolutely. I can help with that. May I ask what type of appointment you're looking for?" },
      { text: "I need a dental cleaning." },
      { text: "Of course. I'll collect your details and send the request to the practice team." },
    ],
    synced: "Synced to dashboard",
    newRequest: "New patient request",
    cleaning: "Cleaning",
    status: "Status: Follow-up required",
    summary:
      "Your team sees the patient's request, contact details, and full call summary — ready to follow up without replaying the call.",
    waiting: "Waiting for the call to complete…",
    liveCta: "Talk to Ora now",
  },
  browserTest: {
    title: "Test Ora live",
    description: "Allow microphone access and talk to Ora, our AI receptionist — right in your browser.",
    connecting: "Connecting…",
    talkingTo: "You're talking to Ora",
    mute: "Mute",
    unmute: "Unmute",
    endCall: "Hang up",
    callEnded: "Call ended.",
    testAgain: "Test again",
    tryAgain: "Try again",
    close: "Close",
    notSyncedError: "The demo isn't available right now.",
    connectFailedError: "Connection failed. Please try again.",
    micError: "Couldn't access the microphone. Check your browser permissions.",
    connectionCheckError: "A connection issue occurred.",
    startFailedError: "Couldn't start the call. Please try again.",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Up and running in three simple steps.",
    description:
      "No complicated hardware. No software to install in your practice. Your team keeps working the way it already does.",
    steps: [
      { number: "01", title: "Connect your practice", detail: "We set up your practice number in days, not months." },
      { number: "02", title: "Configure Ora", detail: "Define how Ora greets patients, what it asks, and when it escalates." },
      { number: "03", title: "Let Ora answer your calls", detail: "Every call is answered, logged, and ready for your team to review." },
    ],
  },
  features: {
    eyebrow: "What it does today",
    title: "Focused on the one thing that matters first.",
    description:
      "No bloated feature list. Callora does call coverage extremely well — everything else comes later.",
    items: [
      { title: "24/7 Call Answering", detail: "Your patients always reach someone." },
      { title: "AI Call Handling", detail: "Ora understands natural conversations." },
      { title: "Call Summaries", detail: "Your team sees exactly what happened." },
      { title: "Smart Escalation", detail: "Important or sensitive calls can be routed to your team." },
      { title: "Patient Intake", detail: "Collect the information your team needs." },
      { title: "Call Dashboard", detail: "Monitor calls, outcomes and follow-ups." },
    ],
    comingNextLabel: "Coming next",
    comingNext: ["Appointment booking", "PMS integrations", "SMS", "Outbound patient follow-ups"],
    comingNextNote: "Planned for future releases as we build toward a complete AI front desk.",
  },
  dashboardShowcase: {
    eyebrow: "Inside Callora",
    title: "Every call, organized the moment it ends.",
    description:
      "A single, clear view of what happened across your practice — no replaying recordings, no guessing.",
    browserUrl: "app.callora.ai/overview",
    sidebar: ["Overview", "Calls", "Patients", "Follow-ups", "Ora", "Settings"],
    overview: "Overview",
    dateLine: "Tuesday, August 25 — Riverside Dental Practice",
    statLabels: ["Calls today", "Answered by Ora", "Needs attention", "Resolved"],
    tableHeaders: { caller: "Caller", reason: "Reason", status: "Status", time: "Time" },
    calls: [
      { caller: "New patient", reason: "Interested in a cleaning" },
      { caller: "Sophie M.", reason: "Appointment question" },
      { caller: "Unknown caller", reason: "Severe tooth pain" },
      { caller: "Marc D.", reason: "Reschedule request" },
      { caller: "New patient", reason: "Insurance coverage question" },
      { caller: "Claire B.", reason: "Whitening consultation" },
    ],
  },
  roi: {
    eyebrow: "Why it matters",
    title: "Turn missed calls into handled conversations.",
    description:
      "You don't need new numbers to know what a missed call costs — you just need fewer of them.",
    missedTitle: "Missed call",
    missedSteps: ["Missed call", "No response", "Patient calls another practice"],
    answeredTitle: "Answered call",
    answeredSteps: ["Answered call", "Ora handles the request", "Team receives full context", "Patient gets a follow-up"],
    disclaimer:
      "Every practice is different — this is the outcome shift Callora is built to create, not a guaranteed result.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple early-access pricing.",
    description:
      "We're validating the market with our first partner practices. Pricing will evolve as the product does.",
    badge: "Early access",
    startingAt: "Starting at",
    perMonth: "/ month",
    features: [
      "Ora, your AI receptionist",
      "Call handling",
      "Call summaries",
      "Dashboard",
      "Human escalation",
      "24/7 coverage",
    ],
    cta: "Get early access",
    note: "Early-access pricing for our first partner practices.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions practices ask us.",
    items: [
      {
        question: "Does Ora replace our receptionist?",
        answer: "No. Ora handles calls when your team cannot and can escalate to your staff.",
      },
      { question: "Does Ora work after hours?", answer: "Yes." },
      { question: "Can patients speak naturally with Ora?", answer: "Yes." },
      { question: "Can Ora transfer calls?", answer: "Yes, where configured." },
      { question: "Do we need to install software?", answer: "No. The service is cloud-based." },
      {
        question: "Does Ora book appointments?",
        answer:
          "Appointment booking and PMS integrations are planned for later versions. The initial product focuses on call answering and handling.",
      },
      { question: "Can we customize what Ora says?", answer: "Yes." },
    ],
  },
  finalCta: {
    title: "Stop sending patients to voicemail.",
    subhead: "Give your practice a receptionist that never needs a lunch break.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "Try Ora",
  },
  bookDemo: {
    eyebrow: "Book a demo",
    title: "Schedule your demo with the Callora team.",
    description:
      "Share your availability and we'll get back to you to confirm a time that works for you.",
    labels: {
      name: "Full name",
      email: "Work email",
      practice: "Practice name",
      phone: "Phone (optional)",
      date: "Preferred date",
      timeSlot: "Preferred time slot",
      notes: "Other availability or details (optional)",
    },
    timeSlotOptions: ["Morning (9am–12pm)", "Afternoon (12pm–5pm)", "Late afternoon (5pm–7pm)"],
    submit: "Send request",
    submitting: "Sending…",
    successTitle: "Request sent!",
    successBody: "Thanks! We'll get back to you within 24 business hours to confirm your demo.",
    errors: {
      missingFields: "Please fill in the required fields.",
      invalidEmail: "Please enter a valid email address.",
      serverMisconfigured: "The email service isn't configured right now. Please contact us directly.",
      sendFailed: "Something went wrong. Please try again or contact us directly.",
    },
  },
  footer: {
    tagline: "Ora, your AI receptionist, makes sure every call is answered and every patient is heard.",
    productColumnTitle: "Product",
    copyright: "© 2026 Callora. Built for European dental practices.",
    region: "France · Belgium · Switzerland · UK",
  },
  statusLabels: {
    resolved: "Resolved",
    transferred: "Transferred",
    escalated: "Escalated",
    "follow-up": "Follow-up required",
  },
}

export const translations: Record<Locale, Translations> = { fr, en }

export const defaultLocale: Locale = "fr"
