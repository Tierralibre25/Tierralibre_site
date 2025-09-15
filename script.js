/* ========= Tierra Libre – Multilingua ES/IT/EN + 11 Pilastri con dettaglio ========= */

const GOFUNDME_URL = "#"; // ⬅️ sostituisci appena hai il link

/* ---------- Testi UI (ES/IT/EN) ---------- */
const TEXT = {
  es: {
    brand: "Tierra Libre",
    menu: {
      home: "Inicio",
      about: "Quiénes somos",
      pillars: "Nuestros 11 Pilares",
      fund: "Recaudación de fondos",
      transparency: "Transparencia & ODS",
      contact: "Contáctanos",
      join: "Participa"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle:
      "Naturaleza, comunidad y libertad: agricultura regenerativa, santuario felino, educación, autosuficiencia y co-housing ético en Villalonga (Valencia).",
    ctas: { join: "Participa", support: "Apóyanos" },
    aboutTitle: "Quiénes somos",
    aboutP:
      "Tierra Libre Social Club es un proyecto rural inclusivo que une agricultura regenerativa, protección animal y apoyo social. Demostramos que un modo de vida sobrio y cooperativo es posible y deseable.",
    aboutBullets: [
      "Economía circular y lucha contra el despilfarro",
      "Inclusión y apoyo a personas vulnerables",
      "Educación ecológica para escuelas y familias",
      "Co-housing ético y autosuficiencia"
    ],
    blocks: [
      {
        title: "Agricultura regenerativa",
        text: "Cultivamos sin química, regenerando suelo y biodiversidad.",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Santuario felino",
        text: "Un espacio seguro y libre para más de 30 gatos rescatados.",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Comunidad & co-housing",
        text: "Micro-aldea rural ética para personas solas y vulnerables.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    fundTitle: "Recaudación de fondos",
    fundP:
      "Estamos activando una campaña en GoFundMe para la recuperación del terreno, estructuras ligeras de madera y espacios para el santuario felino.",
    fundBtn: "Ir a la campaña (próximamente)",
    pillarsTitle: "Nuestros 11 Pilares",
    pillarsLead:
      "Cada pilar tiene una página con explicaciones detalladas, imágenes y acciones concretas.",
    discover: "Descubre más",
    supportThis: "Apoya este pilar",
    back: "Volver",
    transparencyTitle: "Transparencia & ODS",
    transparencyLead:
      "Rendimos cuentas con indicadores clave y alineación con la Agenda 2030.",
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
    contactLead:
      "Escríbenos para información, ideas o colaboraciones. Te respondemos lo antes posible.",
    name: "Nombre y apellidos",
    email: "Email",
    message: "Mensaje",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    writeHere: "Escribe aquí…",
    send: "Enviar",
    joinTitle: "Participa",
    joinLead:
      "¿Voluntariado, talleres, donaciones de materiales o ideas? Cuéntanos cómo quieres participar.",
    howJoin: "¿Cómo quieres participar?",
    sendJoin: "Enviar propuesta",
    footerLoc: "Villalonga (Valencia)",
    thanksTitle: "¡Gracias!",
    thanksP:
      "Hemos recibido tu mensaje y te responderemos lo antes posible.",
    thanksBack: "Volver al inicio",
    why: "¿Por qué importa?",
    actions: "Acciones 2025",
    needs: "¿Qué necesitamos?"
  },

  it: {
    brand: "Tierra Libre",
    menu: {
      home: "Home",
      about: "Chi siamo",
      pillars: "I Nostri 11 Pilastri",
      fund: "Raccolta fondi",
      transparency: "Trasparenza & ODS",
      contact: "Contattaci",
      join: "Partecipa"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle:
      "Natura, comunità e libertà: agricoltura rigenerativa, santuario felino, educazione, autosufficienza e co-housing etico a Villalonga (Valencia).",
    ctas: { join: "Partecipa", support: "Sostienici" },
    aboutTitle: "Chi siamo",
    aboutP:
      "Tierra Libre Social Club è un progetto rurale inclusivo che unisce agricoltura rigenerativa, protezione animale e sostegno sociale. Dimostriamo che uno stile di vita sobrio e cooperativo è possibile e desiderabile.",
    aboutBullets: [
      "Economia circolare e lotta allo spreco",
      "Inclusione e supporto a persone vulnerabili",
      "Educazione ecologica per scuole e famiglie",
      "Co-housing etico e autosufficienza"
    ],
    blocks: [
      {
        title: "Agricoltura rigenerativa",
        text: "Coltiviamo senza chimica, rigenerando suolo e biodiversità.",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Santuario felino",
        text: "Uno spazio sicuro e libero per oltre 30 gatti salvati.",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Comunità & co-housing",
        text: "Micro-villaggio rurale etico per persone sole e vulnerabili.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    fundTitle: "Raccolta fondi",
    fundP:
      "Stiamo lanciando una campagna GoFundMe per il recupero del terreno, strutture leggere in legno e spazi per il santuario felino.",
    fundBtn: "Vai alla campagna (presto online)",
    pillarsTitle: "I Nostri 11 Pilastri",
    pillarsLead:
      "Ogni pilastro ha una pagina con spiegazioni dettagliate, immagini e azioni concrete.",
    discover: "Scopri di più",
    supportThis: "Sostieni questo pilastro",
    back: "Torna indietro",
    transparencyTitle: "Trasparenza & ODS",
    transparencyLead:
      "Rendicontiamo con indicatori chiave e allineamento all’Agenda 2030.",
    kpi: [
      { label: "m² bonificati", val: 0, target: 1000 },
      { label: "gatti sterilizzati", val: 0, target: 40 },
      { label: "ore volontariato", val: 0, target: 500 },
      { label: "kg materiali recuperati", val: 0, target: 800 },
      { label: "kWh rinnovabili autoprodotti", val: 0, target: 1200 },
      { label: "L acqua piovana raccolta", val: 0, target: 20000 }
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
    contactLead:
      "Scrivici per informazioni, idee o collaborazioni. Ti rispondiamo appena possibile.",
    name: "Nome e cognome",
    email: "Email",
    message: "Messaggio",
    yourName: "Il tuo nome",
    yourEmail: "tua@email.com",
    writeHere: "Scrivi qui…",
    send: "Invia",
    joinTitle: "Partecipa",
    joinLead:
      "Volontariato, laboratori, donazioni di materiali o idee? Dicci come vuoi partecipare.",
    howJoin: "Come vuoi partecipare?",
    sendJoin: "Invia proposta",
    footerLoc: "Villalonga (Valencia)",
    thanksTitle: "Grazie!",
    thanksP:
      "Abbiamo ricevuto il tuo messaggio. Ti risponderemo al più presto.",
    thanksBack: "Torna all’inizio",
    why: "Perché conta?",
    actions: "Azioni 2025",
    needs: "Di cosa abbiamo bisogno"
  },

  en: {
    brand: "Tierra Libre",
    menu: {
      home: "Home",
      about: "About",
      pillars: "Our 11 Pillars",
      fund: "Fundraising",
      transparency: "Transparency & SDGs",
      contact: "Contact",
      join: "Join"
    },
    heroTitle: "Tierra Libre Social Club",
    heroSubtitle:
      "Nature, community and freedom: regenerative farming, feline sanctuary, education, self-sufficiency and ethical co-housing in Villalonga (Valencia).",
    ctas: { join: "Join", support: "Support" },
    aboutTitle: "About us",
    aboutP:
      "Tierra Libre Social Club is an inclusive rural project that brings together regenerative agriculture, animal protection and social support. We show that a sober, cooperative way of life is possible and desirable.",
    aboutBullets: [
      "Circular economy & anti-waste",
      "Inclusion & support for vulnerable people",
      "Eco-education for schools and families",
      "Ethical co-housing & self-sufficiency"
    ],
    blocks: [
      {
        title: "Regenerative agriculture",
        text: "We farm without chemicals, restoring soil and biodiversity.",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Feline sanctuary",
        text: "A safe, free space for 30+ rescued cats.",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop"
      },
      {
        title: "Community & co-housing",
        text: "Ethical rural micro-village for singles and vulnerable people.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    fundTitle: "Fundraising",
    fundP:
      "We are launching a GoFundMe campaign for land recovery, light wooden structures and spaces for the feline sanctuary.",
    fundBtn: "Go to the campaign (soon)",
    pillarsTitle: "Our 11 Pillars",
    pillarsLead:
      "Each pillar has a page with detailed explanations, images and concrete actions.",
    discover: "Learn more",
    supportThis: "Support this pillar",
    back: "Back",
    transparencyTitle: "Transparency & SDGs",
    transparencyLead:
      "We report with key indicators and alignment with the 2030 Agenda.",
    kpi: [
      { label: "m² restored", val: 0, target: 1000 },
      { label: "cats neutered", val: 0, target: 40 },
      { label: "volunteer hours", val: 0, target: 500 },
      { label: "kg materials recovered", val: 0, target: 800 },
      { label: "kWh renewables produced", val: 0, target: 1200 },
      { label: "L rainwater collected", val: 0, target: 20000 }
    ],
    odsTitle: "SDG Alignment",
    ods: [
      { n: 1, title: "No poverty" },
      { n: 2, title: "Zero hunger" },
      { n: 11, title: "Sustainable cities & communities" },
      { n: 12, title: "Responsible consumption & production" },
      { n: 15, title: "Life on land" }
    ],
    contactTitle: "Contact us",
    contactLead:
      "Write to us for information, ideas or collaborations. We will reply as soon as possible.",
    name: "Full name",
    email: "Email",
    message: "Message",
    yourName: "Your name",
    yourEmail: "your@email.com",
    writeHere: "Type here…",
    send: "Send",
    joinTitle: "Join",
    joinLead:
      "Volunteering, workshops, donations of materials or ideas? Tell us how you’d like to join.",
    howJoin: "How would you like to join?",
    sendJoin: "Send proposal",
    footerLoc: "Villalonga (Valencia)",
    thanksTitle: "Thanks!",
    thanksP:
      "We’ve received your message and will reply as soon as possible.",
    thanksBack: "Back to home",
    why: "Why it matters?",
    actions: "Actions 2025",
    needs: "What we need"
  }
};

/* ---------- Dati 11 Pilastri (ES/IT/EN) ---------- */
/* Nota: le immagini usano Unsplash. Il pilastro “capre” ha una foto solo capre. */
const PILLARS = {
  es: [
    {
      slug: "recupero-etico-terreno",
      title: "Recuperación ética de un terreno agrícola",
      cover:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      text:
        "Recuperamos un terreno agrícola sin cambiar su uso. Nada de cemento ni especulación. Cultivos regenerativos, rotaciones, biodiversidad y suelo vivo.",
      detail: {
        why:
          "Regenerar suelo y biodiversidad reduce la erosión, aumenta la fertilidad y retiene CO₂.",
        actions: [
          "Mapeo de suelo y compostaje termófilo",
          "Setos y franjas florales anti-erosión",
          "Rotaciones: leguminosas → hortícolas → abonos verdes"
        ],
        needs: [
          "Astilladora",
          "Composteras",
          "Semillas de abono verde",
          "Acolchado"
        ]
      }
    },
    {
      slug: "santuario-felino",
      title: "Santuario felino: La Casa de Silvestro",
      cover:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop",
      text:
        "Acogida estable de más de 30 gatos rescatados. No realizamos adopciones: garantizamos cuidados, esterilización, libertad y seguridad de por vida.",
      detail: {
        why:
          "Esterilización y hábitat seguro reducen abandono y sufrimiento.",
        actions: [
          "Micro-consultorio básico",
          "Plan de esterilizaciones y vacunas",
          "Refugios de madera elevados y zonas de sombra"
        ],
        needs: ["Alimento", "Arenas", "Materiales para refugios", "Fondo clínico"]
      }
    },
    {
      slug: "galline-etiche",
      title: "Micro-crianza no violenta de gallinas",
      cover:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
      text:
        "Gallinas ‘descartadas’ de la industria intensiva, rescatadas y libres. Huevos no a la venta: excedentes donados a escuelas y familias con necesidad.",
      detail: {
        why: "Dignidad animal y consumo responsable.",
        actions: ["Gallinero móvil en pradera", "Rotaciones de pastoreo"],
        needs: ["Redes", "Comederos", "Madera para posaderos"]
      }
    },
    {
      slug: "capre-pascolo-sostenibile",
      title: "Pastoreo sostenible con cabras",
      cover:
        "https://images.unsplash.com/photo-1521191716272-9fc8e2938ac7?q=80&w=1600&auto=format&fit=crop",
      text:
        "Cabras para el control ecológico de la vegetación: nada de herbicidas, menos maquinaria contaminante. Animales libres, cuidados, nunca al matadero.",
      detail: {
        why:
          "Reduce riesgo de incendios y favorece el mosaico ecológico.",
        actions: ["Vallas móviles y bebederos seguros", "Protocolo de bienestar y visitas veterinarias"],
        needs: ["Vallado", "Cobertizos de sombra"]
      }
    },
    {
      slug: "educazione-ecologica",
      title: "Educación ecológica para niñas/os y familias",
      cover:
        "https://images.unsplash.com/photo-1520975922284-4f59b94189ee?q=80&w=1600&auto=format&fit=crop",
      text:
        "Visitas guiadas, talleres al aire libre y actividades gratuitas: educación ambiental, empatía hacia los animales y responsabilidad compartida.",
      detail: {
        why: "Sembrar competencias y valores que permanecen.",
        actions: ["Calendario mensual de talleres", "Kits didácticos open-source"],
        needs: ["Esterillas", "Mesas plegables", "Material impreso"]
      }
    },
    {
      slug: "recupero-creativo",
      title: "Recuperación creativa & lucha contra el despilfarro",
      cover:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      text:
        "Damos nueva vida a materiales y vehículos en desuso, transformándolos en refugios y pequeñas estructuras. Antidespilfarro creativo.",
      detail: {
        why: "Reduce costes y residuos, aumenta resiliencia.",
        actions: ["Banco de materiales donados", "Talleres de autoconstrucción"],
        needs: ["Herramienta manual", "Tornillería", "Pinturas ecológicas"]
      }
    },
    {
      slug: "inclusione-sociale",
      title: "Inclusión y ayuda a personas vulnerables",
      cover:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop",
      text:
        "Espacio abierto y no juzgante: mayores, migrantes, personas con discapacidad o dificultades. Dignidad, pertenencia y participación.",
      detail: {
        why: "La soledad es un riesgo social y sanitario.",
        actions: ["Jornadas comunitarias y espacios de escucha", "Red con servicios sociales locales"],
        needs: ["Sillas", "Carpas", "Micro-fondos de transporte"]
      }
    },
    {
      slug: "sobrieta-autosufficienza",
      title: "Sobriedad & autosuficiencia (energía, agua)",
      cover:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
      text:
        "Autosustento: huerto, recogida de agua de lluvia, fotovoltaica y micro-eólica futura. Punto de recarga eléctrica a bajo coste para la zona.",
      detail: {
        why: "Reduce costes y dependencias; mejora seguridad energética.",
        actions: ["Captación y filtrado básico", "Micro FV off-grid para luces y bombas"],
        needs: ["Depósitos IBC", "Tuberías", "Inversor", "Baterías"]
      }
    },
    {
      slug: "coerenza-istituzionale",
      title: "Coherencia con planes institucionales & ODS",
      cover:
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
      text:
        "Alineamiento con el Plan Valenciano de Clima y Agenda 2030: ODS 1, 2, 11, 12, 15. Impacto real y medible con objetivos claros y transparencia.",
      detail: {
        why:
          "Hablar el lenguaje institucional facilita alianzas y convocatorias.",
        actions: ["KPI trimestrales públicos", "Mapa de convocatorias y alianzas"],
        needs: ["Apoyo legal/administrativo pro-bono"]
      }
    },
    {
      slug: "cohousing-rurale",
      title: "Co-housing rural ético para personas solas",
      cover:
        "https://images.unsplash.com/photo-1523419409543-8c1a4de0db48?q=80&w=1600&auto=format&fit=crop",
      text:
        "Micro-aldea ética: 6–7 casitas de 28–30 m² para personas excluidas del mercado de vivienda. Usufructo solidario y energía renovable.",
      detail: {
        why:
          "Hogar, comunidad y seguridad para quien está excluido/a.",
        actions: ["Prototipo de unidad 28 m²", "Reglamento de convivencia"],
        needs: ["Proyecto técnico", "Madera certificada", "Tornillería estructural"]
      }
    },
    {
      slug: "supporto-etico",
      title: "Apoyo ético & transparencia",
      cover:
        "https://images.unsplash.com/photo-1523246191208-8b27648b0403?q=80&w=1600&auto=format&fit=crop",
      text:
        "Transparencia total: cuentas dedicadas, control ético y documentación disponible. Pedimos apoyo económico y alianzas responsables, no caridad.",
      detail: {
        why: "La confianza nace de una rendición de cuentas clara.",
        actions: ["Publicación de balance trimestral", "Trazabilidad de donaciones"],
        needs: ["Asesoría contable voluntaria", "Herramientas de rendición"]
      }
    }
  ],

  it: null,
  en: null
};

/* IT tradotto a partire da ES */
PILLARS.it = PILLARS.es.map(p => {
  const map = {
    "recupero-etico-terreno": {
      title: "Recupero etico di un terreno agricolo",
      text:
        "Recuperiamo un terreno agricolo senza cambiare destinazione d’uso. Niente cemento né speculazione. Coltivazioni rigenerative, rotazioni, biodiversità e suolo vivo.",
      why:
        "Rigenerare suolo e biodiversità riduce l’erosione, aumenta la fertilità e trattiene CO₂.",
      actions: [
        "Mappatura del suolo e compostaggio termofilo",
        "Siepi e fasce fiorite anti-erosione",
        "Rotazioni: leguminose → orticole → sovesci"
      ],
      needs: ["Cippatrice", "Compostiere", "Semi da sovescio", "Pacciamatura"]
    },
    "santuario-felino": {
      title: "Santuario felino: La Casa de Silvestro",
      text:
        "Accoglienza stabile di oltre 30 gatti salvati. Non facciamo adozioni: garantiamo cura, sterilizzazione, libertà e sicurezza per tutta la vita.",
      why:
        "Sterilizzazione e habitat sicuro riducono randagismo e sofferenza.",
      actions: [
        "Micro-ambulatorio di base",
        "Piano sterilizzazioni e vaccini",
        "Rifugi in legno rialzati e zone d’ombra"
      ],
      needs: ["Cibo", "Lettiera", "Materiali per rifugi", "Fondo clinico"]
    },
    "galline-etiche": {
      title: "Micro-crianza non violenta di galline",
      text:
        "Galline “scartate” dall’industria intensiva, salvate e libere. Uova non in vendita: eventuali eccedenze donate a scuole e famiglie fragili.",
      why: "Dignità animale ed educazione al consumo responsabile.",
      actions: ["Pollaio mobile su prato", "Rotazioni di pascolo"],
      needs: ["Reti", "Mangiatoie", "Legname per posatoi"]
    },
    "capre-pascolo-sostenibile": {
      title: "Pastoreggio sostenibile con capre",
      text:
        "Capre per il controllo ecologico della vegetazione: zero diserbanti e meno macchinari inquinanti. Animali liberi, curati, mai destinati alla macellazione.",
      why:
        "Riduce il rischio incendi e favorisce un mosaico ecologico.",
      actions: ["Recinzioni mobili, abbeveratoi sicuri", "Protocollo benessere e visite veterinarie"],
      needs: ["Recinzioni", "Ricoveri ombreggiati"]
    },
    "educazione-ecologica": {
      title: "Educazione ecologica per bambini e famiglie",
      text:
        "Visite guidate, laboratori all’aperto e attività gratuite: educazione ambientale, empatia verso gli animali e responsabilità condivisa.",
      why: "Seminare competenze e valori che restano.",
      actions: ["Calendario mensile dei laboratori", "Kit didattici open-source"],
      needs: ["Stuoie", "Tavoli pieghevoli", "Materiale stampato"]
    },
    "recupero-creativo": {
      title: "Recupero creativo & lotta allo spreco",
      text:
        "Diamo nuova vita a materiali e veicoli dismessi trasformandoli in rifugi e piccole strutture. Antispreco creativo.",
      why: "Riduce costi e rifiuti, aumenta la resilienza.",
      actions: ["Banca dei materiali donati", "Laboratori di autocostruzione"],
      needs: ["Attrezzi manuali", "Viti", "Vernici ecologiche"]
    },
    "inclusione-sociale": {
      title: "Inclusione e aiuto a persone vulnerabili",
      text:
        "Spazio aperto e non giudicante: anziani, migranti, persone con disabilità o difficoltà. Dignità, appartenenza e partecipazione.",
      why: "La solitudine è un rischio sanitario e sociale.",
      actions: ["Giornate di comunità e sportelli di ascolto", "Rete con servizi sociali locali"],
      needs: ["Sedie", "Gazebo", "Micro-fondi per trasporti"]
    },
    "sobrieta-autosufficienza": {
      title: "Sobrietà & autosufficienza (energia, acqua)",
      text:
        "Autosostentamento: orto, raccolta di acqua piovana, fotovoltaico e micro-eolico futuro. Punto di ricarica elettrica sociale per la zona.",
      why: "Riduce costi e dipendenze, migliora la sicurezza energetica.",
      actions: ["Raccolta e filtrazione base", "Micro FV off-grid per luci e pompe"],
      needs: ["Serbatoi IBC", "Tubi", "Inverter", "Batterie"]
    },
    "coerenza-istituzionale": {
      title: "Coerenza con piani istituzionali & ODS",
      text:
        "Allineamento con il Piano Valenciano per il Clima e l’Agenda 2030: ODS 1, 2, 11, 12, 15. Impatto reale e misurabile con obiettivi chiari e trasparenza.",
      why:
        "Parlare il linguaggio delle istituzioni facilita alleanze e bandi.",
      actions: ["KPI trimestrali pubblici", "Mappatura bandi e partnership"],
      needs: ["Supporto legale/amministrativo pro-bono"]
    },
    "cohousing-rurale": {
      title: "Co-housing rurale etico per persone sole",
      text:
        "Micro-villaggio etico: 6–7 casette di 28–30 m² per persone escluse dal mercato della casa. Usufrutto solidale ed energia rinnovabile.",
      why:
        "Casa, comunità e sicurezza per chi è escluso dal mercato.",
      actions: ["Prototipo unità 28 m²", "Regolamento di convivenza"],
      needs: ["Progettazione", "Legname certificato", "Viti strutturali"]
    },
    "supporto-etico": {
      title: "Supporto etico & trasparenza",
      text:
        "Trasparenza totale: conti dedicati, controllo etico e documentazione disponibile. Chiediamo sostegno economico e alleanze responsabili, non carità.",
      why:
        "La fiducia nasce da rendicontazione chiara.",
      actions: ["Pubblicazione bilancio trimestrale", "Tracciabilità delle donazioni"],
      needs: ["Commercialista volontario", "Strumenti di rendicontazione"]
    }
  };

  const m = map[p.slug];
  return {
    slug: p.slug,
    title: m ? m.title : p.title,
    cover: p.cover,
    text: m ? m.text : p.text,
    detail: {
      why: m ? m.why : p.detail.why,
      actions: m ? m.actions : p.detail.actions,
      needs: m ? m.needs : p.detail.needs
    }
  };
});

/* EN tradotto a partire da ES */
PILLARS.en = PILLARS.es.map(p => {
  const map = {
    "recupero-etico-terreno": {
      title: "Ethical recovery of farmland",
      text:
        "We recover farmland without changing its use. No concrete, no speculation. Regenerative crops, rotations, biodiversity and living soil.",
      why:
        "Restoring soil and biodiversity reduces erosion, increases fertility and captures CO₂.",
      actions: [
        "Soil mapping and thermophilic composting",
        "Hedgerows and flower strips against erosion",
        "Rotations: legumes → vegetables → green manure"
      ],
      needs: ["Wood chipper", "Compost bins", "Green manure seeds", "Mulch"]
    },
    "santuario-felino": {
      title: "Feline sanctuary: La Casa de Silvestro",
      text:
        "Stable shelter for 30+ rescued cats. We do not run adoptions: we ensure care, neutering, freedom and safety for life.",
      why:
        "Neutering and a safe habitat reduce abandonment and suffering.",
      actions: [
        "Basic micro-clinic",
        "Neutering and vaccination plan",
        "Raised wooden shelters and shaded areas"
      ],
      needs: ["Food", "Litter", "Shelter materials", "Clinical fund"]
    },
    "galline-etiche": {
      title: "Non-violent micro-rearing of hens",
      text:
        "Hens discarded by intensive farming, rescued and free. Eggs not for sale: any surplus is donated to schools and families in need.",
      why: "Animal dignity and responsible consumption.",
      actions: ["Mobile coop on pasture", "Rotational grazing"],
      needs: ["Fencing nets", "Feeders", "Perch wood"]
    },
    "capre-pascolo-sostenibile": {
      title: "Sustainable goat grazing",
      text:
        "Goats for ecological vegetation control: no herbicides, less polluting machinery. Free, well-cared animals, never for slaughter.",
      why:
        "Reduces wildfire risk and supports a diverse ecological mosaic.",
      actions: ["Mobile fencing, safe drinkers", "Welfare protocol and vet visits"],
      needs: ["Fencing", "Shaded micro-shelters"]
    },
    "educazione-ecologica": {
      title: "Eco-education for children and families",
      text:
        "Guided visits, outdoor workshops and free activities: environmental education, empathy for animals and shared responsibility.",
      why: "Planting skills and values that last.",
      actions: ["Monthly workshop calendar", "Open-source teaching kits"],
      needs: ["Mats", "Folding tables", "Printed materials"]
    },
    "recupero-creativo": {
      title: "Creative recovery & anti-waste",
      text:
        "We give new life to discarded materials and vehicles, turning them into shelters and small structures. Creative anti-waste.",
      why: "Cuts costs and waste, boosts resilience.",
      actions: ["Donated materials bank", "Self-construction workshops"],
      needs: ["Hand tools", "Screws", "Eco-paints"]
    },
    "inclusione-sociale": {
      title: "Inclusion & help for vulnerable people",
      text:
        "Open, non-judgmental space: elders, migrants, people with disabilities or hardship. Dignity, belonging and participation.",
      why: "Loneliness is a social and health risk.",
      actions: ["Community days and listening spaces", "Network with local social services"],
      needs: ["Chairs", "Gazebos", "Micro-funds for transport"]
    },
    "sobrieta-autosufficienza": {
      title: "Sobriety & self-sufficiency (energy, water)",
      text:
        "Self-reliance: vegetable garden, rainwater harvesting, PV and future micro-wind. Low-cost EV charging point for the area.",
      why: "Reduces costs and dependencies, improves energy security.",
      actions: ["Water capture and basic filtration", "Off-grid micro-PV for lights and pumps"],
      needs: ["IBC tanks", "Pipes", "Inverter", "Batteries"]
    },
    "coerenza-istituzionale": {
      title: "Coherence with institutional plans & SDGs",
      text:
        "Alignment with the Valencian Climate Plan and the 2030 Agenda: SDGs 1, 2, 11, 12, 15. Real, measurable impact with clear goals and transparency.",
      why:
        "Speaking the institutional language facilitates alliances and grants.",
      actions: ["Public quarterly KPIs", "Mapping of calls and partnerships"],
      needs: ["Pro-bono legal/administrative support"]
    },
    "cohousing-rurale": {
      title: "Ethical rural co-housing for singles",
      text:
        "Ethical micro-village: 6–7 tiny houses of 28–30 m² for people excluded from the housing market. Social usufruct and renewable energy.",
      why:
        "Home, community and safety for those excluded from the market.",
      actions: ["28 m² unit prototype", "Shared living rules"],
      needs: ["Technical design", "Certified timber", "Structural screws"]
    },
    "supporto-etico": {
      title: "Ethical support & transparency",
      text:
        "Total transparency: dedicated accounts, ethical oversight and available documentation. We seek responsible financial support and alliances, not charity.",
      why:
        "Trust grows from clear, consistent accountability.",
      actions: ["Quarterly statement publication", "Donation traceability"],
      needs: ["Volunteer accountant", "Accountability tools"]
    }
  };

  const m = map[p.slug];
  return {
    slug: p.slug,
    title: m ? m.title : p.title,
    cover: p.cover,
    text: m ? m.text : p.text,
    detail: {
      why: m ? m.why : p.detail.why,
      actions: m ? m.actions : p.detail.actions,
      needs: m ? m.needs : p.detail.needs
    }
  };
});

/* ================== Stato UI & utilità ================== */
let state = {
  lang: localStorage.getItem("lang") || "es"
};

function t(path) {
  const parts = path.split(".");
  let cur = TEXT[state.lang] || TEXT.es;
  for (const p of parts) cur = cur[p];
  return cur;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("lang", lang);
  translateUI();
  renderAboutBullets();
  renderBlocks();
  renderPillars();
  renderKPI();
  renderODS();
  updateNextRedirects();
  applyThanksVisibility();
}

function translateUI() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    const val = t(key);
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });
}

function renderAboutBullets() {
  const ul = document.getElementById("aboutBullets");
  if (!ul) return;
  ul.innerHTML = "";
  (t("aboutBullets") || []).forEach((txt) => {
    const li = document.createElement("li");
    li.textContent = "• " + txt;
    ul.appendChild(li);
  });
}

function renderBlocks() {
  const wrap = document.getElementById("blocks");
  if (!wrap) return;
  wrap.innerHTML = "";
  (t("blocks") || []).forEach((b) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <img src="${b.img}" alt="${b.title}" class="h-56 w-full object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold">${b.title}</h3>
          <p class="mt-2 text-gray-700 text-lg">${b.text}</p>
        </div>
      </div>
    `
    );
  });
}

function renderPillars() {
  const pillarsData =
    PILLARS[state.lang] || PILLARS.es;
  const grid = document.getElementById("pillarsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const discover = t("discover");
  pillarsData.forEach((p) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `
      <button class="group text-left card border hover:shadow-2xl transition" onclick="openPillar('${p.slug}')">
        <div class="h-44 w-full overflow-hidden">
          <img src="${p.cover}" alt="${p.title}" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-5">
          <h3 class="text-xl font-bold">${p.title}</h3>
          <p class="mt-2 text-gray-700">${p.text}</p>
          <span class="mt-4 inline-block bg-lime-400 text-black font-extrabold px-5 py-2 rounded-xl">${discover}</span>
        </div>
      </button>
    `
    );
  });
}

function pillarBySlug(slug) {
  const arr = PILLARS[state.lang] || PILLARS.es;
  return arr.find((x) => x.slug === slug);
}

function openPillar(slug) {
  location.hash = "pilar/" + slug;
}
function closePillar() {
  location.hash = "pillars";
}

function renderPillarDetail(slug) {
  const mount = document.getElementById("detailMount");
  if (!mount) return;
  const p = pillarBySlug(slug);
  if (!p) {
    mount.innerHTML = "";
    return;
  }
  const why = t("why");
  const act = t("actions");
  const need = t("needs");

  mount.innerHTML = `
    <section class="bg-gradient-to-b from-green-50 to-white">
      <div class="container mx-auto px-6 py-12">
        <div class="rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="${p.cover}" alt="${p.title}" class="h-80 w-full object-cover">
          <div class="p-8">
            <h1 class="text-3xl md:text-4xl font-extrabold">${p.title}</h1>
            <p class="mt-4 text-lg text-gray-800 whitespace-pre-line">${p.text}</p>
            <div class="mt-6 grid gap-6 md:grid-cols-3">
              <div class="rounded-2xl bg-green-50 p-5 border">
                <h3 class="font-bold text-lg">${why}</h3>
                <p class="mt-2 text-gray-800">${p.detail.why}</p>
              </div>
              <div class="rounded-2xl bg-white p-5 border">
                <h3 class="font-bold text-lg">${act}</h3>
                <ul class="mt-2 list-disc list-inside space-y-1 text-gray-800">
                  ${p.detail.actions.map(x => `<li>${x}</li>`).join("")}
                </ul>
              </div>
              <div class="rounded-2xl bg-white p-5 border">
                <h3 class="font-bold text-lg">${need}</h3>
                <ul class="mt-2 list-disc list-inside space-y-1 text-gray-800">
                  ${p.detail.needs.map(x => `<li>${x}</li>`).join("")}
                </ul>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <a href="#gofund" class="bg-green-700 text-white font-extrabold px-6 py-3 rounded-xl">${t("supportThis")}</a>
              <button onclick="closePillar()" class="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl">${t("back")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderKPI() {
  const wrap = document.getElementById("kpi");
  if (!wrap) return;
  wrap.innerHTML = "";
  t("kpi").forEach((k) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `
      <div class="rounded-2xl bg-white p-6 shadow">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold">${k.label}</h3>
          <span class="text-2xl font-extrabold">${k.val} / ${k.target}</span>
        </div>
        <div class="mt-3 w-full bg-gray-200 rounded-full h-3">
          <div class="h-3 rounded-full bg-lime-500" style="width:${Math.min(
            100,
            (k.val / k.target) * 100
          )}%"></div>
        </div>
      </div>
    `
    );
  });
}

function renderODS() {
  const wrap = document.getElementById("ods");
  if (!wrap) return;
  wrap.innerHTML = "";
  t("ods").forEach((o) => {
    wrap.insertAdjacentHTML(
      "beforeend",
      `
      <div class="rounded-2xl bg-white p-5 shadow border">
        <div class="text-3xl font-extrabold">${o.n}</div>
        <div class="mt-1 text-lg font-semibold">${o.title}</div>
        <p class="mt-2 text-gray-700 text-sm">${
          state.lang === "it"
            ? "Azioni: agricoltura rigenerativa, inclusione, prevenzione sprechi, tutela habitat, educazione ambientale."
            : state.lang === "en"
            ? "Actions: regenerative agriculture, inclusion, anti-waste, habitat protection, eco-education."
            : "Acciones: agricultura regenerativa, inclusión, anti-despilfarro, protección del hábitat, educación ambiental."
        }</p>
      </div>
    `
    );
  });
}

function updateNextRedirects() {
  const base = location.href.split("#")[0];
  const nextUrl = base + "#gracias";
  const cNext = document.getElementById("contactNext");
  const jNext = document.getElementById("joinNext");
  if (cNext) cNext.value = nextUrl;
  if (jNext) jNext.value = nextUrl;
}

function applyThanksVisibility() {
  const section = document.getElementById("gracias");
  if (!section) return;
  if (location.hash.replace("#", "") === "gracias") {
    section.classList.remove("hidden");
  } else {
    section.classList.add("hidden");
  }
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* Router */
window.addEventListener("hashchange", () => {
  const h = location.hash.replace("#", "");
  if (h.startsWith("pilar/")) {
    renderPillarDetail(h.split("pilar/")[1]);
  } else {
    const mount = document.getElementById("detailMount");
    if (mount) mount.innerHTML = "";
  }
  applyThanksVisibility();
});

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  setYear();
  setLang(localStorage.getItem("lang") || "es");
  translateUI();
  renderAboutBullets();
  renderBlocks();
  renderPillars();
  renderKPI();
  renderODS();
  updateNextRedirects();
  applyThanksVisibility();

  // GoFundMe href (hero + sezione fund)
  const fundBtn = document.getElementById("fundBtn");
  const fundBtn2 = document.getElementById("fundBtn2");
  if (GOFUNDME_URL && GOFUNDME_URL !== "#") {
    if (fundBtn) fundBtn.href = GOFUNDME_URL;
    if (fundBtn2) fundBtn2.href = GOFUNDME_URL;
  }
});
