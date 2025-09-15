/* ===== Config ===== */
const GOFUNDME_URL = "#"; // sostituisci con il link reale quando pronto

/* ===== Testi UI (ES/IT/EN) ===== */
const TEXT = {
  es: {
    brand: "Tierra Libre",
    menu: {
      home: "Inicio", about: "Quiénes somos", pillars: "Nuestros 11 Pilares",
      fund: "Recaudación de fondos", transparency: "Transparencia & ODS",
      contact: "Contáctanos", join: "Participa"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle: "Naturaleza, comunidad y libertad: agricultura regenerativa, santuario felino, educación, autosuficiencia y co-housing ético en Villalonga (Valencia).",
    ctas: { join: "Participa", support: "Apóyanos" },
    aboutTitle: "Quiénes somos",
    aboutP: "Tierra Libre Social Club es un proyecto rural inclusivo que une agricultura regenerativa, protección animal y apoyo social. Demostramos que un modo de vida sobrio y cooperativo es posible y deseable.",
    aboutBullets: [
      "Economía circular y lucha contra el despilfarro",
      "Inclusión y apoyo a personas vulnerables",
      "Educación ecológica para escuelas y familias",
      "Co-housing ético y autosuficiencia"
    ],
    blocks: [
      { title: "Agricultura regenerativa", text: "Cultivamos sin química, regenerando suelo y biodiversidad.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" },
      { title: "Santuario felino", text: "Un espacio seguro y libre para más de 30 gatos rescatados.", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop" },
      { title: "Comunidad & co-housing", text: "Micro-aldea rural ética para personas solas y vulnerables.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop" }
    ],
    fundTitle: "Recaudación de fondos",
    fundP: "Estamos activando una campaña en GoFundMe para la recuperación del terreno, estructuras de madera y espacios para el santuario felino. En cuanto tengamos el enlace, el botón te llevará directamente a la campaña.",
    fundBtn: "Ir a la campaña (próximamente)",
    pillarsTitle: "Nuestros 11 Pilares",
    pillarsLead: "Cada pilar tiene una página con explicaciones detalladas, imágenes y acciones concretas.",
    discover: "Descubre más",
    supportThis: "Apoya este pilar",
    back: "Volver",
    transparencyTitle: "Transparencia & ODS",
    transparencyLead: "Rendimos cuentas con indicadores clave y alineación con la Agenda 2030.",
    kpi: [
      { label: "m² recuperados", val: 0, target: 1000 },
      { label: "gatos esterilizados", val: 0, target: 40 },
      { label: "horas de voluntariado", val: 0, target: 500 },
      { label: "kg de materiales recuperados", val: 0, target: 800 },
      { label: "kWh renovables autoproducidos", val: 0, target: 1200 },
      { label: "L de agua de lluvia recogida", val: 0, target: 20000 }
    ],
    odsTitle: "Alineación ODS",
    ods: [
      { n: 1, title: "Fin de la pobreza" },
      { n: 2, title: "Hambre cero" },
      { n: 11, title: "Ciudades y comunidades sostenibles" },
      { n: 12, title: "Producción y consumo responsables" },
      { n: 15, title: "Vida de ecosistemas terrestres" }
    ],
    contactTitle: "Contáctanos",
    contactLead: "Escríbenos para información, ideas o colaboraciones. Te respondemos lo antes posible.",
    name: "Nombre y apellidos",
    email: "Email",
    message: "Mensaje",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    writeHere: "Escribe aquí…",
    send: "Enviar",
    joinTitle: "Participa",
    joinLead: "¿Voluntariado, talleres, donaciones de materiales o ideas? Cuéntanos cómo quieres participar.",
    howJoin: "¿Cómo quieres participar?",
    sendJoin: "Enviar propuesta",
    footerLoc: "Villalonga (Valencia)",
    thanksTitle: "¡Gracias!",
    thanksP: "Hemos recibido tu mensaje y te responderemos lo antes posible.",
    thanksBack: "Volver al inicio"
  },

  it: {
    brand: "Tierra Libre",
    menu: {
      home: "Home", about: "Chi siamo", pillars: "I Nostri 11 Pilastri",
      fund: "Raccolta fondi", transparency: "Trasparenza & ODS",
      contact: "Contattaci", join: "Partecipa"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle: "Natura, comunità e libertà: agricoltura rigenerativa, santuario felino, educazione, autosufficienza e co-housing etico a Villalonga (Valencia).",
    ctas: { join: "Partecipa", support: "Sostienici" },
    aboutTitle: "Chi siamo",
    aboutP: "Tierra Libre Social Club è un progetto rurale inclusivo che unisce agricoltura rigenerativa, protezione animale e sostegno sociale. Dimostriamo che uno stile di vita sobrio e cooperativo è possibile e desiderabile.",
    aboutBullets: [
      "Economia circolare e lotta allo spreco",
      "Inclusione e supporto a persone vulnerabili",
      "Educazione ecologica per scuole e famiglie",
      "Co-housing etico e autosufficienza"
    ],
    blocks: [
      { title: "Agricoltura rigenerativa", text: "Coltiviamo senza chimica, rigenerando suolo e biodiversità.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" },
      { title: "Santuario felino", text: "Uno spazio sicuro e libero per oltre 30 gatti salvati.", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop" },
      { title: "Comunità & co-housing", text: "Micro-villaggio rurale etico per persone sole e vulnerabili.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop" }
    ],
    fundTitle: "Raccolta fondi",
    fundP: "Stiamo attivando una campagna GoFundMe per la bonifica del terreno, strutture in legno e spazi per il santuario felino. Appena avremo il link, il pulsante porterà direttamente alla campagna.",
    fundBtn: "Vai alla campagna (presto online)",
    pillarsTitle: "I Nostri 11 Pilastri",
    pillarsLead: "Ogni pilastro ha una pagina con spiegazioni dettagliate, immagini e azioni concrete.",
    discover: "Scopri di più",
    supportThis: "Sostieni questo pilastro",
    back: "Torna indietro",
    transparencyTitle: "Trasparenza & ODS",
    transparencyLead: "Rendicontiamo con indicatori chiave e allineamento all’Agenda 2030.",
    kpi: [
      { label: "m² bonificati", val: 0, target: 1000 },
      { label: "gatti sterilizzati", val: 0, target: 40 },
      { label: "ore di volontariato", val: 0, target: 500 },
      { label: "kg materiali recuperati", val: 0, target: 800 },
      { label: "kWh rinnovabili autoprodotti", val: 0, target: 1200 },
      { label: "L di acqua piovana raccolta", val: 0, target: 20000 }
    ],
    odsTitle: "Allineamento ODS",
    ods: [
      { n: 1, title: "Senza povertà" },
      { n: 2, title: "Fame zero" },
      { n: 11, title: "Città e comunità sostenibili" },
      { n: 12, title: "Consumo e produzione responsabili" },
      { n: 15, title: "Vita sulla terra" }
    ],
    contactTitle: "Contattaci",
    contactLead: "Scrivici per informazioni, idee o collaborazioni. Ti risponderemo al più presto.",
    name: "Nome e cognome",
    email: "Email",
    message: "Messaggio",
    yourName: "Il tuo nome",
    yourEmail: "tua@email.com",
    writeHere: "Scrivi qui…",
    send: "Invia",
    joinTitle: "Partecipa",
    joinLead: "Volontariato, laboratori, donazioni di materiali o idee? Dicci come vuoi partecipare.",
    howJoin: "Come vuoi partecipare?",
    sendJoin: "Invia proposta",
    footerLoc: "Villalonga (Valencia)",
    thanksTitle: "Grazie!",
    thanksP: "Abbiamo ricevuto il tuo messaggio. Ti risponderemo al più presto.",
    thanksBack: "Torna all’inizio"
  },

  en: {
    brand: "Tierra Libre",
    menu: {
      home: "Home", about: "About", pillars: "Our 11 Pillars",
      fund: "Fundraising", transparency: "Transparency & SDGs",
      contact: "Contact", join: "Join"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle: "Nature, community and freedom: regenerative farming, feline sanctuary, education, self-sufficiency and ethical co-housing in Villalonga (Valencia).",
    ctas: { join: "Join", support: "Support" },
    aboutTitle: "About us",
    aboutP: "Tierra Libre Social Club is an inclusive rural project combining regenerative agriculture, animal protection and social support. We show that a sober, cooperative way of life is possible and desirable.",
    aboutBullets: [
      "Circular economy & anti-waste",
      "Inclusion & support for vulnerable people",
      "Eco-education for schools & families",
      "Ethical co-housing & self-sufficiency"
    ],
    blocks: [
      { title: "Regenerative agriculture", text: "We grow without chemicals, restoring soil and biodiversity.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" },
      { title: "Feline sanctuary", text: "A safe, free space for 30+ rescued cats.", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop" },
      { title: "Community & co-housing", text: "Ethical rural micro-village for singles and vulnerable people.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop" }
    ],
    fundTitle: "Fundraising",
    fundP: "We’re launching a GoFundMe campaign for land recovery, light wooden structures and spaces for the feline sanctuary. As soon as the link is ready, the button will take you there.",
    fundBtn: "Go to the campaign (soon)",
    pillarsTitle: "Our 11 Pillars",
    pillarsLead: "Each
