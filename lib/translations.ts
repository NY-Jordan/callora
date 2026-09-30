export type Locale = "fr" | "en"

export type Translations = {
  nav: {
    product: string
    howItWorks: string
    industries: string
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
    speakerCaller: string
    speakerOra: string
    script: { text: string }[]
    synced: string
    newRequest: string
    requestLabel: string
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
  industries: {
    eyebrow: string
    title: string
    description: string
    disclaimer: string
    viewPage: string
  }
  industryFallback: {
    title: string
    description: string
    note: string
    cta: string
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
    rateValue: string
    ratePerMinute: string
    calculator: {
      label: string
      inputLabel: string
      resultLabel: string
      helper: string
    }
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
    industries: "Secteurs",
    pricing: "Tarifs",
    faq: "FAQ",
    tryOra: "Essayer Ora",
    bookDemo: "Réserver une démo",
  },
  hero: {
    eyebrow: "Ne laissez plus vos appels et demandes sans réponse",
    headline: "Votre équipe ne peut pas répondre à tout. Callora prend le relais.",
    subhead:
      "Répondre aux appels, traiter les demandes, prendre des messages et faciliter les rendez-vous — même lorsque votre équipe est occupée, fermée ou débordée.",
    ctaPrimary: "Réserver une démo",
    ctaSecondary: "Voir comment ça fonctionne",
    badges: [
      "Aucun matériel à installer",
      "Opérationnel en quelques jours",
      "S'adapte à votre secteur d'activité",
    ],
  },
  videoDemo: {
    eyebrow: "Regarder",
    caption: "Découvrez comment Ora répond à un appel réel.",
  },
  trust: {
    title: "Conçu pour les entreprises qui ne peuvent pas se permettre de manquer un appel",
    practices: ["Cabinet Dentaire", "Agence Immo", "Salon Élégance", "Garage Autoplus", "Cabinet Juridique"],
    footnote:
      "Exemples fictifs — cohorte d'accès anticipé en cours de constitution, pas de clients réels.",
    indicators: ["Disponible 24/7", "Réponse rapide", "Transfert vers un humain", "Sécurisé par conception"],
  },
  problem: {
    eyebrow: "Le problème",
    title: "Votre équipe ne peut pas répondre à tous les appels et demandes.",
    description:
      "Même la meilleure équipe a ses limites. Chaque appel ou message sans réponse est un moment décisif pour la personne en face.",
    situations: [
      { title: "Équipe occupée", detail: "Votre équipe s'occupe déjà d'un autre client." },
      { title: "Hors horaires", detail: "Votre entreprise est fermée." },
      { title: "Heures de pointe", detail: "Plusieurs personnes vous contactent en même temps." },
    ],
    closing: "Chaque appel manqué est peut-être un client que vous n'entendrez plus jamais.",
  },
  callDemo: {
    eyebrow: "Démo produit",
    title: "Voyez ce qui se passe quand quelqu'un appelle.",
    description:
      "Une vraie conversation avec Ora — du premier son de la sonnerie jusqu'à une entrée claire et exploitable dans votre tableau de bord.",
    incomingCall: "Appel entrant",
    oraSubtitle: "Ora — assistant téléphonique",
    replay: "Rejouer",
    speakerCaller: "Appelant",
    speakerOra: "Ora",
    script: [
      { text: "Bonjour, j'aimerais savoir si vous avez de la disponibilité cette semaine." },
      { text: "Tout à fait, je peux vous aider. Pour quel type de demande souhaitez-vous être recontacté ?" },
      { text: "J'aurais besoin d'un rendez-vous, si possible en fin de semaine." },
      { text: "Parfait. Je note vos coordonnées et je transmets votre demande à l'équipe." },
    ],
    synced: "Synchronisé avec le tableau de bord",
    newRequest: "Nouvelle demande client",
    requestLabel: "Rendez-vous souhaité",
    status: "Statut : relance nécessaire",
    summary:
      "Votre équipe voit la demande, les coordonnées et le résumé complet de l'appel — prête à relancer sans avoir à réécouter l'appel.",
    waiting: "En attente de la fin de l'appel…",
    liveCta: "Parler à Ora maintenant",
  },
  browserTest: {
    title: "Testez Ora en direct",
    description: "Autorisez le micro et parlez avec Ora, l'assistant vocal de Callora — directement dans votre navigateur.",
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
      "Pas de matériel compliqué. Pas de logiciel à installer dans votre entreprise. Votre équipe continue de travailler comme avant.",
    steps: [
      { number: "01", title: "Connectez votre ligne", detail: "Nous configurons votre numéro en quelques jours, pas en quelques mois." },
      { number: "02", title: "Configurez Ora", detail: "Définissez comment Ora accueille vos interlocuteurs, ce qu'elle demande, et quand elle escalade — selon votre activité." },
      { number: "03", title: "Laissez Callora prendre le relais", detail: "Chaque appel et chaque demande sont traités, enregistrés et prêts à être consultés par votre équipe." },
    ],
  },
  features: {
    eyebrow: "Ce que fait Callora",
    title: "Concentré sur l'essentiel avant tout.",
    description:
      "Pas de liste de fonctionnalités interminable. Callora excelle dans la prise en charge des appels et des demandes — le reste viendra ensuite.",
    items: [
      { title: "Réponse aux appels 24/7", detail: "Vos clients joignent toujours quelqu'un." },
      { title: "Compréhension des demandes", detail: "Ora comprend les conversations naturelles et sait s'adapter à votre activité." },
      { title: "Résumés d'appels", detail: "Votre équipe voit exactement ce qui s'est passé." },
      { title: "Escalade intelligente", detail: "Les appels importants ou sensibles peuvent être transférés à votre équipe." },
      { title: "Prise d'informations", detail: "Collecte les informations dont votre équipe a besoin pour donner suite." },
      { title: "Tableau de bord des appels", detail: "Suivez les appels, leurs résultats et les relances." },
    ],
    comingNextLabel: "Bientôt disponible",
    comingNext: ["Prise de rendez-vous", "Intégrations avec vos outils métier", "SMS & WhatsApp", "Relances clients sortantes"],
    comingNextNote: "Prévu pour de futures versions, à mesure que nous construisons un assistant complet pour la relation client.",
  },
  industries: {
    eyebrow: "Pour votre secteur",
    title: "Une même plateforme, adaptée à votre activité.",
    description:
      "Callora s'ajuste au vocabulaire, aux horaires et aux workflows de votre métier. Voici quelques exemples parmi les secteurs que nous accompagnons.",
    disclaimer: "Ces secteurs sont des exemples — pas une liste exhaustive.",
    viewPage: "Voir la page dédiée",
  },
  industryFallback: {
    title: "Vous ne trouvez pas votre secteur ?",
    description:
      "Ce n'est pas un problème. Callora s'adapte à votre activité, vos horaires, vos services et votre façon de travailler.",
    note: "Expliquez-nous simplement comment vous gérez vos appels et vos demandes aujourd'hui. Nous verrons comment Callora peut s'intégrer à votre fonctionnement.",
    cta: "Parler de mon activité",
  },
  dashboardShowcase: {
    eyebrow: "À l'intérieur de Callora",
    title: "Chaque appel, organisé dès qu'il se termine.",
    description:
      "Une vue unique et claire de ce qui s'est passé dans votre entreprise — plus besoin de réécouter les enregistrements ni de deviner.",
    browserUrl: "app.callora.ai/overview",
    sidebar: ["Aperçu", "Appels", "Contacts", "Relances", "Ora", "Paramètres"],
    overview: "Aperçu",
    dateLine: "Mardi 25 août — Riverside Solutions",
    statLabels: ["Appels aujourd'hui", "Répondus par Ora", "À traiter", "Résolus"],
    tableHeaders: { caller: "Appelant", reason: "Motif", status: "Statut", time: "Heure" },
    calls: [
      { caller: "Nouveau client", reason: "Intéressé par un rendez-vous" },
      { caller: "Sophie M.", reason: "Question sur une réservation" },
      { caller: "Appelant inconnu", reason: "Demande urgente" },
      { caller: "Marc D.", reason: "Demande de report" },
      { caller: "Nouveau client", reason: "Question sur les tarifs" },
      { caller: "Claire B.", reason: "Demande de devis" },
    ],
  },
  roi: {
    eyebrow: "Pourquoi c'est important",
    title: "Transformez les appels manqués en conversations traitées.",
    description:
      "Pas besoin de nouveaux chiffres pour savoir ce que coûte un appel manqué — juste d'en avoir moins.",
    missedTitle: "Appel manqué",
    missedSteps: ["Appel manqué", "Aucune réponse", "Le client contacte un concurrent"],
    answeredTitle: "Appel traité",
    answeredSteps: ["Appel répondu", "Ora traite la demande", "L'équipe reçoit le contexte complet", "Le client reçoit une relance"],
    disclaimer:
      "Chaque entreprise est différente — ceci est le changement de résultat que Callora est conçu pour créer, pas un résultat garanti.",
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Vous ne payez que les appels traités.",
    description:
      "Pas d'abonnement forcé, pas de forfait figé. Un tarif simple à la minute, qui s'ajuste à votre volume d'appels réel.",
    badge: "Accès anticipé",
    rateValue: "0,30 €",
    ratePerMinute: "/ minute traitée",
    calculator: {
      label: "Estimez votre coût mensuel",
      inputLabel: "Minutes d'appels traitées par mois",
      resultLabel: "Coût estimé",
      helper: "Basé sur 0,30 € par minute d'appel traitée par Ora. Sans engagement, résiliable à tout moment.",
    },
    features: [
      "Ora, votre assistant téléphonique",
      "Traitement des appels et des demandes",
      "Résumés d'appels",
      "Tableau de bord",
      "Escalade humaine",
      "Couverture 24/7",
    ],
    cta: "Obtenir l'accès anticipé",
    note: "Tarifs d'accès anticipé réservés à nos premières entreprises partenaires.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions que se posent nos clients.",
    items: [
      {
        question: "Est-ce que Callora remplace notre équipe ?",
        answer: "Non. Ora prend le relais quand votre équipe ne peut pas répondre, et peut transférer l'appel à votre personnel.",
      },
      { question: "Callora convient-il à mon secteur d'activité ?", answer: "Très probablement. Callora s'adapte à de nombreux secteurs — santé, immobilier, beauté, automobile, services professionnels, et plus. Si votre secteur n'apparaît pas dans nos exemples, parlez-nous simplement de votre activité." },
      { question: "Ora fonctionne-t-elle en dehors des horaires d'ouverture ?", answer: "Oui." },
      { question: "Mes clients peuvent-ils parler naturellement avec Ora ?", answer: "Oui." },
      { question: "Ora peut-elle transférer les appels ?", answer: "Oui, lorsque cela est configuré." },
      { question: "Devons-nous installer un logiciel ?", answer: "Non. Le service fonctionne entièrement dans le cloud." },
      {
        question: "Ora prend-elle les rendez-vous ?",
        answer:
          "La prise de rendez-vous et les intégrations avec vos outils métier sont prévues pour de futures versions. Le produit actuel se concentre sur la réponse et le traitement des appels.",
      },
      { question: "Pouvons-nous personnaliser ce que dit Ora ?", answer: "Oui." },
    ],
  },
  finalCta: {
    title: "Arrêtez d'envoyer vos appels sur répondeur.",
    subhead: "Offrez à votre entreprise un assistant qui ne prend jamais de pause déjeuner.",
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
      practice: "Nom de l'entreprise",
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
    tagline: "Callora veille à ce que chaque appel et chaque demande trouve une réponse — quelle que soit votre activité.",
    productColumnTitle: "Produit",
    copyright: "© 2026 Callora. Tous droits réservés.",
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
    industries: "Industries",
    pricing: "Pricing",
    faq: "FAQ",
    tryOra: "Try Ora",
    bookDemo: "Book a demo",
  },
  hero: {
    eyebrow: "Never leave a call or request unanswered",
    headline: "Your team can't answer everything. Callora picks up the rest.",
    subhead:
      "Answer calls, handle requests, take messages, and make booking easier — even when your team is busy, closed, or swamped.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "See how it works",
    badges: ["No hardware to install", "Live in days", "Adapts to your industry"],
  },
  videoDemo: {
    eyebrow: "Watch now",
    caption: "See how Ora answers a real call.",
  },
  trust: {
    title: "Built for businesses that can't afford to miss a call",
    practices: ["Dental Practice", "Realty Group", "Élégance Salon", "Autoplus Garage", "Legal Partners"],
    footnote: "Illustrative placeholders — early-access cohort forming, not actual customers.",
    indicators: ["24/7 availability", "Fast response", "Human handoff", "Secure by design"],
  },
  problem: {
    eyebrow: "The problem",
    title: "Your team can't answer every call and request.",
    description:
      "Even the best team has limits. Every unanswered call or message is a decision point for the person on the other end.",
    situations: [
      { title: "Busy team", detail: "Your team is already helping someone else." },
      { title: "After hours", detail: "Your business is closed." },
      { title: "Peak hours", detail: "Multiple people reach out at once." },
    ],
    closing: "Every unanswered call is a customer you may never hear from again.",
  },
  callDemo: {
    eyebrow: "Product demo",
    title: "See what happens when someone calls.",
    description:
      "A real conversation with Ora — from the first ring to a clear, actionable entry in your dashboard.",
    incomingCall: "Incoming call",
    oraSubtitle: "Ora — phone assistant",
    replay: "Replay",
    speakerCaller: "Caller",
    speakerOra: "Ora",
    script: [
      { text: "Hi, I'd like to know if you have any availability this week." },
      { text: "Absolutely, I can help with that. What can we get you booked in for?" },
      { text: "I'd need an appointment, ideally later in the week." },
      { text: "Of course. I'll take your details and pass the request on to the team." },
    ],
    synced: "Synced to dashboard",
    newRequest: "New customer request",
    requestLabel: "Requested appointment",
    status: "Status: Follow-up required",
    summary:
      "Your team sees the request, contact details, and full call summary — ready to follow up without replaying the call.",
    waiting: "Waiting for the call to complete…",
    liveCta: "Talk to Ora now",
  },
  browserTest: {
    title: "Test Ora live",
    description: "Allow microphone access and talk to Ora, Callora's phone assistant — right in your browser.",
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
      "No complicated hardware. No software to install in your business. Your team keeps working the way it already does.",
    steps: [
      { number: "01", title: "Connect your line", detail: "We set up your number in days, not months." },
      { number: "02", title: "Configure Ora", detail: "Define how Ora greets callers, what it asks, and when it escalates — tailored to your business." },
      { number: "03", title: "Let Callora take the rest", detail: "Every call and request is answered, logged, and ready for your team to review." },
    ],
  },
  features: {
    eyebrow: "What Callora does",
    title: "Focused on the one thing that matters first.",
    description:
      "No bloated feature list. Callora does call and request handling extremely well — everything else comes later.",
    items: [
      { title: "24/7 call answering", detail: "Your customers always reach someone." },
      { title: "Understands requests", detail: "Ora follows natural conversations and adapts to your business." },
      { title: "Call summaries", detail: "Your team sees exactly what happened." },
      { title: "Smart escalation", detail: "Important or sensitive calls can be routed to your team." },
      { title: "Information intake", detail: "Collects what your team needs to follow up." },
      { title: "Call dashboard", detail: "Monitor calls, outcomes and follow-ups." },
    ],
    comingNextLabel: "Coming next",
    comingNext: ["Appointment booking", "Integrations with your tools", "SMS & WhatsApp", "Outbound customer follow-ups"],
    comingNextNote: "Planned for future releases as we build toward a complete assistant for customer relationships.",
  },
  industries: {
    eyebrow: "For your industry",
    title: "One platform, adapted to your business.",
    description:
      "Callora adjusts to the language, hours, and workflows of your trade. Here are a few examples of the industries we support.",
    disclaimer: "These are examples, not a complete list.",
    viewPage: "View dedicated page",
  },
  industryFallback: {
    title: "Don't see your industry?",
    description:
      "That's not a problem. Callora adapts to your business, your hours, your services, and the way you work.",
    note: "Just tell us how you currently handle your calls and requests. We'll figure out how Callora fits into your workflow.",
    cta: "Tell us about your business",
  },
  dashboardShowcase: {
    eyebrow: "Inside Callora",
    title: "Every call, organized the moment it ends.",
    description:
      "A single, clear view of what happened across your business — no replaying recordings, no guessing.",
    browserUrl: "app.callora.ai/overview",
    sidebar: ["Overview", "Calls", "Contacts", "Follow-ups", "Ora", "Settings"],
    overview: "Overview",
    dateLine: "Tuesday, August 25 — Riverside Solutions",
    statLabels: ["Calls today", "Answered by Ora", "Needs attention", "Resolved"],
    tableHeaders: { caller: "Caller", reason: "Reason", status: "Status", time: "Time" },
    calls: [
      { caller: "New customer", reason: "Interested in booking" },
      { caller: "Sophie M.", reason: "Reservation question" },
      { caller: "Unknown caller", reason: "Urgent request" },
      { caller: "Marc D.", reason: "Reschedule request" },
      { caller: "New customer", reason: "Pricing question" },
      { caller: "Claire B.", reason: "Quote request" },
    ],
  },
  roi: {
    eyebrow: "Why it matters",
    title: "Turn missed calls into handled conversations.",
    description:
      "You don't need new numbers to know what a missed call costs — you just need fewer of them.",
    missedTitle: "Missed call",
    missedSteps: ["Missed call", "No response", "Customer calls a competitor"],
    answeredTitle: "Answered call",
    answeredSteps: ["Answered call", "Ora handles the request", "Team receives full context", "Customer gets a follow-up"],
    disclaimer:
      "Every business is different — this is the outcome shift Callora is built to create, not a guaranteed result.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "You only pay for the calls handled.",
    description:
      "No forced subscription, no fixed bundle. A simple per-minute rate that scales with your actual call volume.",
    badge: "Early access",
    rateValue: "€0.30",
    ratePerMinute: "/ minute handled",
    calculator: {
      label: "Estimate your monthly cost",
      inputLabel: "Call minutes handled per month",
      resultLabel: "Estimated cost",
      helper: "Based on €0.30 per minute of calls handled by Ora. No commitment, cancel anytime.",
    },
    features: [
      "Ora, your phone assistant",
      "Call and request handling",
      "Call summaries",
      "Dashboard",
      "Human escalation",
      "24/7 coverage",
    ],
    cta: "Get early access",
    note: "Early-access pricing for our first partner businesses.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions our customers ask.",
    items: [
      {
        question: "Does Callora replace our team?",
        answer: "No. Ora handles calls when your team cannot and can escalate to your staff.",
      },
      { question: "Does Callora work for my industry?", answer: "Very likely. Callora adapts to many industries — healthcare, real estate, beauty, automotive, professional services, and more. If your industry isn't in our examples, just tell us about your business." },
      { question: "Does Ora work after hours?", answer: "Yes." },
      { question: "Can my customers speak naturally with Ora?", answer: "Yes." },
      { question: "Can Ora transfer calls?", answer: "Yes, where configured." },
      { question: "Do we need to install software?", answer: "No. The service is cloud-based." },
      {
        question: "Does Ora book appointments?",
        answer:
          "Appointment booking and integrations with your tools are planned for later versions. The initial product focuses on call answering and handling.",
      },
      { question: "Can we customize what Ora says?", answer: "Yes." },
    ],
  },
  finalCta: {
    title: "Stop sending calls to voicemail.",
    subhead: "Give your business an assistant that never needs a lunch break.",
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
      practice: "Business name",
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
    tagline: "Callora makes sure every call and request finds a response — whatever your business.",
    productColumnTitle: "Product",
    copyright: "© 2026 Callora. All rights reserved.",
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
