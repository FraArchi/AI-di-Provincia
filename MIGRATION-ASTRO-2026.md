# Migrazione da React/Vite ad Astro SSG

*Data della migrazione: Aprile 2026*

Questo documento riassume le operazioni eseguite per convertire l'applicazione React Single-Page Application (SPA) originale in un sito statico (SSG) ad alte prestazioni basato su **Astro 5**, mantenendo lo stesso aspetto visivo, CSS e gli stessi comportamenti interattivi dove strettamente necessario.

## 1. Architettura Adottata
- **Framework base:** Astro 5.x
- **UI Framework per i componenti interattivi:** React 19 (`@astrojs/react`)
- **Gestione dei Contenuti (CMS):** Astro Content Collections (`src/content/posts`) — in sostituzione della libreria `gray-matter` e dei glob import manuali (`import.meta.glob`).
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) via vite plugin.
- **Hosting Target:** Vercel (Static)

## 2. Passaggi della Migrazione
1. **Analisi:** Lettura dell'intero source tree (App.tsx, main.tsx, routers, componenti e CSS) per tracciare lo state interattivo e il routing manuale.
2. **Generazione e Sostituzione:**
   - Creato un ambiente Astro vuoto.
   - Replicata la UI React: I layout puramente visivi (come il `<Footer />`) sono stati riscritti come `.astro` puri senza ship di JavaScript.
   - Creata una nuova **React Island** principale (`Navigation.tsx`) che gestisce lo stato di apertura/chiusura dell'Header (dropdown menu) e della Sidebar a comparsa per le rubriche. È montata in `index.astro` e `[slug].astro` tramite `client:load`.
   - Modificata l'estrazione dati (`lib/posts.ts` convertito in `lib/utils.ts` per l'interazione esclusiva con Astro Collections `getCollection()`).
3. **Creazione delle Pagine Astro (Routing nativo):**
   - L'ex routing manuale in `App.tsx` è stato suddiviso in percorsi fisici reali (file-system routing):
     - `src/pages/index.astro` (ex Home)
     - `src/pages/chi-sono.astro` (ex About)
     - `src/pages/post/[slug].astro` (ex ArticlePage, genera pagine percorsi via `getStaticPaths()`).
4. **Deploy e Debugging su Vercel:**
   - **Il problema:** La combinazione dell'ultimissima versione sperimentale di Vite 8 (usata da Astro 6 e Tailwind 4) crashava sulle istanze Vercel predefinite (Node 22 con bundler Rolldown mancante di alcune binding features).
   - **La soluzione:** 
     - *Downgrade stabile* dell'infrastruttura ad **Astro 5** e a una configurazione `vite.plugins: [tailwindcss()]`.
     - Introduzione nel `package.json` della proprietà `"engines": { "node": ">=18.20.0" }`, lasciando che Vercel adotti la sua LTS ottimale invece di cadere in panico su versioni più spinte.
5. **Ripristino del Layout Asimmetrico:**
   - Successivamente al merge iniziale, è stato riscritto il componente `index.astro` per re-inserire la grid CSS che divide la pagina in `md:col-span-2` (lista degli "Articoli Recenti") e `md:col-span-1` ("Il Bollettino dell'IA" come box grigio laterale), esattamente com'era nella SPA originale.

## 3. Aggiungere Nuovi Articoli
Il flusso per i nuovi post è invariato e notevolmente più robusto.
Basterà depositare i nuovi `.md` all'interno di `src/content/posts/` con il frontmatter supportato:
```yaml
---
title: "Titolo"
subtitle: "Sottotitolo"
author: "Local Brain"
category: "Es: Il Bollettino dell'IA"
published_date: "YYYY-MM-DD"
is_featured: false
slug: "mio-slug-personalizzato" # opzionale
---
Contenuto in Markdown puro...
```

La pagina `[slug].astro` li pre-renderizzerà automaticamente nel sito al momento del comando `npm run build` su Vercel.
