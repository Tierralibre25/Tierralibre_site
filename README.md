# Tierra Libre Social Club – Sito vetrina (Vercel ready)

- Home con hero, blocchi, GoFundMe (placeholder).
- “Nuestros 11 Pilares” + dettaglio via `#pilar/slug`.
- Moduli Contáctanos / Participa con **FormSubmit**.
- Pagina **Gracias** (hash `#gracias`).
- Multilingua: **ES** default, IT attivo; EN/FR/DE fallback su ES.

## Deploy su Vercel
1. Repo GitHub con questi file nella root: `index.html`, `script.js`, `assets/custom.css`, `vercel.json` (opzionale ma incluso).
2. Su Vercel → **New Project** → importa il repo.
3. Framework preset: **Other** (Static). Build command: *(vuoto)*. Output directory: **/**.
4. Deploy.
5. Aggiungi il tuo **dominio** in Project → Settings → Domains, segui i record DNS.

## Personalizzazioni
- GoFundMe: modifica `GOFUNDME_URL` in `script.js`.
- Lingua default: in runtime viene ricordata con `localStorage`; default iniziale `es`.
- Palette: vedi `assets/custom.css` (classi `header-grad`, `forest`, `petrolio`).

## FormSubmit
Conferma la mail di verifica al primo invio, altrimenti non ricevi messaggi.