const GOFUNDME_URL = "#"; // Replace with real link when ready
const TEXT = {
  es: { brand:"Tierra Libre",
    menu:{ home:"Inicio", about:"Quiénes somos", pillars:"Nuestros 11 Pilares", fund:"Recaudación de fondos", transparency:"Transparencia & ODS", contact:"Contáctanos", join:"Participa" },
    heroTitle:"Tierra Libre Social Club",
    heroSubtitle:"Naturaleza, comunidad y libertad: agricultura regenerativa, santuario felino, educación, autosuficiencia y co‑housing ético en Villalonga (Valencia).",
    ctas:{ join:"Participa", support:"Apóyanos" },
    aboutTitle:"Quiénes somos",
    aboutP:"Tierra Libre Social Club es un proyecto rural inclusivo que une agricultura regenerativa, protección animal y apoyo social.",
    aboutBullets:[
      "Economía circular y lucha contra el despilfarro",
      "Inclusión y apoyo a personas vulnerables",
      "Educación ecológica para escuelas y familias",
      "Co‑housing ético y autosuficiencia"],
    blocks:[
      { title:"Agricultura regenerativa", text:"Cultivamos sin química, regenerando suelo y biodiversidad.", img:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" },
      { title:"Santuario felino", text:"Un espacio seguro y libre para más de 30 gatos rescatados.", img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop" },
      { title:"Comunidad & co‑housing", text:"Micro‑aldea rural ética para personas solas y vulnerables.", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop" }],
    fundTitle:"Recaudación de fondos", fundP:"Estamos activando una campaña en GoFundMe para la recuperación del terreno...", fundBtn:"Ir a la campaña (próximamente)",
    pillarsTitle:"Nuestros 11 Pilares", pillarsLead:"Cada pilar tiene una página...", discover:"Descubre más", supportThis:"Apoya este pilar", back:"Volver",
    transparencyTitle:"Transparencia & ODS", transparencyLead:"Rendimos cuentas con indicadores clave y alineación con la Agenda 2030.",
    kpi:[{label:"m² recuperados",val:0,target:1000},{label:"gatos esterilizados",val:0,target:40},{label:"horas de voluntariado",val:0,target:500},{label:"kg de materiales recuperados",val:0,target:800},{label:"kWh renovables autoproducidos",val:0,target:1200},{label:"L de agua de lluvia recogida",val:0,target:20000}],
    odsTitle:"Alineación ODS", ods:[{n:1,title:"Fin de la pobreza"},{n:2,title:"Hambre cero"},{n:11,title:"Ciudades y comunidades sostenibles"},{n:12,title:"Producción y consumo responsables"},{n:15,title:"Vida de ecosistemas terrestres"}],
    contactTitle:"Contáctanos", contactLead:"Escríbenos para información, ideas o colaboraciones.", name:"Nombre y apellidos", email:"Email", message:"Mensaje", yourName:"Tu nombre", yourEmail:"tu@email.com", writeHere:"Escribe aquí…",
    send:"Enviar", joinTitle:"Participa", joinLead:"¿Voluntariado, talleres, donaciones de materiales o ideas?", howJoin:"¿Cómo quieres participar?", sendJoin:"Enviar propuesta",
    footerLoc:"Villalonga (Valencia)", thanksTitle:"¡Gracias!", thanksP:"Hemos recibido tu mensaje y te responderemos lo antes posible.", thanksBack:"Volver al inicio"},
  it: { brand:"Tierra Libre", menu:{home:"Home",about:"Chi siamo",pillars:"I Nostri 11 Pilastri",fund:"Raccolta fondi",transparency:"Trasparenza & ODS",contact:"Contattaci",join:"Partecipa"},
    heroTitle:"Tierra Libre Social Club", heroSubtitle:"Natura, comunità e libertà...", ctas:{join:"Partecipa",support:"Sostienici"},
    aboutTitle:"Chi siamo", aboutP:"Progetto rurale inclusivo...", aboutBullets:["Economia circolare...", "Inclusione...", "Educazione...", "Co‑housing..."],
    blocks:[
      { title:"Agricoltura rigenerativa", text:"Coltiviamo senza chimica...", img:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" },
      { title:"Santuario felino", text:"Oltre 30 gatti salvati...", img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop" },
      { title:"Comunità & co‑housing", text:"Micro‑villaggio etico...", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop" }],
    fundTitle:"Raccolta fondi", fundP:"Campagna GoFundMe...", fundBtn:"Vai alla campagna (presto)",
    pillarsTitle:"I Nostri 11 Pilastri", pillarsLead:"Ogni pilastro...", discover:"Scopri di più", supportThis:"Sostieni questo pilastro", back:"Torna indietro",
    transparencyTitle:"Trasparenza & ODS", transparencyLead:"Indicatori chiave...", kpi:[{label:"m² bonificati",val:0,target:1000},{label:"gatti sterilizzati",val:0,target:40},{label:"ore volontariato",val:0,target:500},{label:"kg materiali recuperati",val:0,target:800},{label:"kWh rinnovabili autoprodotti",val:0,target:1200},{label:"L acqua piovana raccolta",val:0,target:20000}],
    odsTitle:"Allineamento ODS", ods:[{n:1,title:"Senza povertà"},{n:2,title:"Fame zero"},{n:11,title:"Città e comunità sostenibili"},{n:12,title:"Consumo e produzione responsabili"},{n:15,title:"Vita sulla terra"}],
    contactTitle:"Contattaci", contactLead:"Scrivici...", name:"Nome e cognome", email:"Email", message:"Messaggio", yourName:"Il tuo nome", yourEmail:"tua@email.com", writeHere:"Scrivi qui…",
    send:"Invia", joinTitle:"Partecipa", joinLead:"Vuoi fare volontariato...", howJoin:"Come vuoi partecipare?", sendJoin:"Invia proposta",
    footerLoc:"Villalonga (Valencia)", thanksTitle:"Grazie!", thanksP:"Abbiamo ricevuto il tuo messaggio...", thanksBack:"Torna all'inizio"},
  en: null, fr: null, de: null
};
TEXT.en = TEXT.es; TEXT.fr = TEXT.es; TEXT.de = TEXT.es;

const PILLARS = {
  es: [
    { slug:"recupero-etico-terreno", title:"Recuperación ética de un terreno agrícola", cover:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      text:"Recuperamos un terreno agrícola sin cambiar su uso.", detail:{ why:"Regenerar suelo...", actions:["Mapeo..."], needs:["Astilladora"] } },
    { slug:"santuario-felino", title:"Santuario felino: La Casa de Silvestro", cover:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop",
      text:"Acogida estable de más de 30 gatos.", detail:{ why:"Esterilización...", actions:["Plan..."], needs:["Alimento"] } },
    { slug:"galline-etiche", title:"Micro‑crianza no violenta de gallinas", cover:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
      text:"Gallinas rescatadas y libres.", detail:{ why:"Dignidad animal", actions:["Gallinero móvil"], needs:["Redes"] } },
    { slug:"capre-pascolo-sostenibile", title:"Pastoreo sostenible con cabras", cover:"https://images.unsplash.com/photo-1521191716272-9fc8e2938ac7?q=80&w=1600&auto=format&fit=crop",
      text:"Cabras para control ecológico de vegetación.", detail:{ why:"Reduce incendios", actions:["Vallas móviles"], needs:["Vallado"] } },
    { slug:"educazione-ecologica", title:"Educación ecológica para niñas/os y familias", cover:"https://images.unsplash.com/photo-1520975922284-4f59b94189ee?q=80&w=1600&auto=format&fit=crop",
      text:"Talleres y actividades gratuitas.", detail:{ why:"Valores duraderos", actions:["Calendario mensual"], needs:["Material impreso"] } },
    { slug:"recupero-creativo", title:"Recuperación creativa & lucha contra el despilfarro", cover:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      text:"Nueva vida a materiales y vehículos.", detail:{ why:"Reduce residuos", actions:["Banco de materiales"], needs:["Herramienta manual"] } },
    { slug:"inclusione-sociale", title:"Inclusión y ayuda a personas vulnerables", cover:"https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop",
      text:"Espacio abierto y no juzgante.", detail:{ why:"Soledad = riesgo", actions:["Jornadas comunitarias"], needs:["Carpas"] } },
    { slug:"sobrieta-autosufficienza", title:"Sobriedad & autosuficiencia (energía, agua)", cover:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
      text:"Huerto, lluvia, fotovoltaica.", detail:{ why:"Menos coste", actions:["Captación y filtrado"], needs:["Depósitos IBC"] } },
    { slug:"coerenza-istituzionale", title:"Coherencia con planes institucionales & ODS", cover:"https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
      text:"Alineado con Agenda 2030.", detail:{ why:"Facilita alianzas", actions:["KPI públicos"], needs:["Apoyo legal"] } },
    { slug:"cohousing-rurale", title:"Co‑housing rural ético para personas solas", cover:"https://images.unsplash.com/photo-1523419409543-8c1a4de0db48?q=80&w=1600&auto=format&fit=crop",
      text:"Micro‑aldea ética 6–7 casitas.", detail:{ why:"Hogar y comunidad", actions:["Prototipo 28 m²"], needs:["Proyecto técnico"] } },
    { slug:"supporto-etico", title:"Apoyo ético & transparencia", cover:"https://images.unsplash.com/photo-1523246191208-8b27648b0403?q=80&w=1600&auto=format&fit=crop",
      text:"Transparencia total.", detail:{ why:"Confianza", actions:["Balance trimestral"], needs:["Asesoría contable"] } },
  ], it: null, en: null
};
PILLARS.it = PILLARS.es; PILLARS.en = PILLARS.es;

let state = { lang: localStorage.getItem("lang") || "es" };

function t(path){ const parts = path.split("."); let cur = TEXT[state.lang] || TEXT.es; for (const p of parts) cur = cur[p]; return cur; }
function setLang(lang){ state.lang = lang; localStorage.setItem("lang", lang); translateUI(); renderAboutBullets(); renderBlocks(); renderPillars(); renderKPI(); renderODS(); updateNextRedirects(); applyThanksVisibility(); }
function translateUI(){ document.querySelectorAll("[data-i18n]").forEach(el=>{ const key=el.getAttribute("data-i18n"); const val=t(key); if(typeof val==="string") el.textContent=val; }); document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ const key=el.getAttribute("data-i18n-ph"); const val=t(key); if(typeof val==="string") el.setAttribute("placeholder", val); }); }
function renderAboutBullets(){ const ul=document.getElementById("aboutBullets"); ul.innerHTML=""; (t("aboutBullets")||[]).forEach(txt=>{ const li=document.createElement("li"); li.textContent="• "+txt; ul.appendChild(li); }); }
function renderBlocks(){ const wrap=document.getElementById("blocks"); wrap.innerHTML=""; (t("blocks")||[]).forEach(b=>{ wrap.insertAdjacentHTML("beforeend", `<div class="card"><img src="${b.img}" alt="${b.title}" class="h-56 w-full object-cover"><div class="p-6"><h3 class="text-2xl font-bold">${b.title}</h3><p class="mt-2 text-gray-700 text-lg">${b.text}</p></div></div>`); }); }
function renderPillars(){ const data=PILLARS[state.lang]||PILLARS.es; const grid=document.getElementById("pillarsGrid"); grid.innerHTML=""; const discover=t("discover"); data.forEach(p=>{ grid.insertAdjacentHTML("beforeend", `<button class="group text-left card border hover:shadow-2xl transition" onclick="openPillar('${p.slug}')"><div class="h-44 w-full overflow-hidden"><img src="${p.cover}" alt="${p.title}" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"></div><div class="p-5"><h3 class="text-xl font-bold">${p.title}</h3><p class="mt-2 text-gray-700">${p.text}</p><span class="mt-4 inline-block bg-lime-400 text-black font-extrabold px-5 py-2 rounded-xl">${discover}</span></div></button>`); }); }
function pillarBySlug(slug){ const arr=PILLARS[state.lang]||PILLARS.es; return arr.find(x=>x.slug===slug); }
function openPillar(slug){ location.hash="pilar/"+slug; }
function closePillar(){ location.hash="pillars"; }
function renderPillarDetail(slug){ const mount=document.getElementById("detailMount"); const p=pillarBySlug(slug); if(!p){ mount.innerHTML=""; return; } const why=(state.lang==='it'?'Perché conta?':(state.lang==='en'?'Why it matters?':'¿Por qué importa?')); const act=(state.lang==='it'?'Azioni 2025':(state.lang==='en'?'Actions 2025':'Acciones 2025')); const need=(state.lang==='it'?'Di cosa abbiamo bisogno':(state.lang==='en'?'What we need':'¿Qué necesitamos?')); mount.innerHTML=`<section class="bg-gradient-to-b from-green-50 to-white"><div class="container mx-auto px-6 py-12"><div class="rounded-3xl overflow-hidden shadow-xl bg-white"><img src="${p.cover}" alt="${p.title}" class="h-80 w-full object-cover"><div class="p-8"><h1 class="text-3xl md:text-4xl font-extrabold">${p.title}</h1><p class="mt-4 text-lg text-gray-800 whitespace-pre-line">${p.text}</p><div class="mt-6 grid gap-6 md:grid-cols-3"><div class="rounded-2xl bg-green-50 p-5 border"><h3 class="font-bold text-lg">${why}</h3><p class="mt-2 text-gray-800">${p.detail.why}</p></div><div class="rounded-2xl bg-white p-5 border"><h3 class="font-bold text-lg">${act}</h3><ul class="mt-2 list-disc list-inside space-y-1 text-gray-800">${p.detail.actions.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="rounded-2xl bg-white p-5 border"><h3 class="font-bold text-lg">${need}</h3><ul class="mt-2 list-disc list-inside space-y-1 text-gray-800">${p.detail.needs.map(x=>`<li>${x}</li>`).join("")}</ul></div></div><div class="mt-6 flex flex-wrap gap-4"><a href="#gofund" class="bg-green-700 text-white font-extrabold px-6 py-3 rounded-xl">${t("supportThis")}</a><button onclick="closePillar()" class="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl">${t("back")}</button></div></div></div></div></section>`; }
function renderKPI(){ const wrap=document.getElementById("kpi"); wrap.innerHTML=""; t("kpi").forEach(k=>{ wrap.insertAdjacentHTML("beforeend", `<div class="rounded-2xl bg-white p-6 shadow"><div class="flex items-center justify-between"><h3 class="text-xl font-bold">${k.label}</h3><span class="text-2xl font-extrabold">${k.val} / ${k.target}</span></div><div class="mt-3 w-full bg-gray-200 rounded-full h-3"><div class="h-3 rounded-full bg-lime-500" style="width:${Math.min(100,(k.val/k.target)*100)}%"></div></div></div>`); }); }
function renderODS(){ const wrap=document.getElementById("ods"); wrap.innerHTML=""; t("ods").forEach(o=>{ wrap.insertAdjacentHTML("beforeend", `<div class="rounded-2xl bg-white p-5 shadow border"><div class="text-3xl font-extrabold">${o.n}</div><div class="mt-1 text-lg font-semibold">${o.title}</div><p class="mt-2 text-gray-700 text-sm">${ state.lang==='it' ? 'Azioni: agricoltura rigenerativa, inclusione, prevenzione sprechi, tutela habitat, educazione ambientale.' : (state.lang==='en' ? 'Actions: regenerative agriculture, inclusion, anti-waste, habitat protection, eco-education.' : 'Acciones: agricultura regenerativa, inclusión, anti-despilfarro, protección del hábitat, educación ambiental.') }</p></div>`); }); }
function updateNextRedirects(){ const base=location.href.split('#')[0]; const nextUrl=base+"#gracias"; const cNext=document.getElementById("contactNext"); const jNext=document.getElementById("joinNext"); if(cNext) cNext.value=nextUrl; if(jNext) jNext.value=nextUrl; }
function applyThanksVisibility(){ const section=document.getElementById("gracias"); if(location.hash.replace('#','')==='gracias'){ section.classList.remove('hidden'); } else { section.classList.add('hidden'); } }
function setYear(){ document.getElementById("year").textContent=new Date().getFullYear(); }
window.addEventListener("hashchange", ()=>{ const h=location.hash.replace('#',''); if(h.startsWith('pilar/')){ renderPillarDetail(h.split('pilar/')[1]); } else { document.getElementById("detailMount").innerHTML=""; } applyThanksVisibility(); });
document.addEventListener("DOMContentLoaded", ()=>{ document.querySelectorAll("[data-lang]").forEach(btn=>{ btn.addEventListener("click", ()=> setLang(btn.getAttribute("data-lang"))); }); setYear(); setLang(localStorage.getItem("lang")||"es"); translateUI(); renderAboutBullets(); renderBlocks(); renderPillars(); renderKPI(); renderODS(); updateNextRedirects(); applyThanksVisibility(); const fundBtn=document.getElementById("fundBtn"); if(fundBtn && GOFUNDME_URL && GOFUNDME_URL!=="#") fundBtn.href=GOFUNDME_URL; const fundBtn2=document.getElementById("fundBtn2"); if(fundBtn2 && GOFUNDME_URL && GOFUNDME_URL!=="#") fundBtn2.href=GOFUNDME_URL; });
