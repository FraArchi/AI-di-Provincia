# AI di Provincia - Documentazione Codebase

## 📋 Panoramica del Progetto

**Nome:** AI di Provincia  
**Tagline:** "L'intelligenza artificiale vista da chi vive lontano dai centri tecnologici"  
**Tipo:** Blog/Piattaforma di contenuti  
**Stack:** React + TypeScript + Vite + Tailwind CSS + Supabase

---

## 🏗️ Architettura

### Frontend
- **Framework:** React 18.3.1 con TypeScript 5.5.3
- **Build Tool:** Vite 5.4.2 (HMR, bundling veloce)
- **Styling:** Tailwind CSS 3.4.1 con design personalizzato
- **Icone:** Lucide React 0.344.0
- **Routing:** State-based (no React Router, gestione manuale in App.tsx)

### Backend
- **Servizio:** Supabase 2.57.4 (PostgreSQL as a Service)
- **Auth:** Row Level Security (RLS) abilitata
- **Accesso:** Public read-only per utenti anonimi

---

## 📁 Struttura Directory

```
AI-di-Provincia/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header fisso con navigazione
│   │   ├── Footer.tsx          # Footer con copyright
│   │   ├── HomePage.tsx        # Pagina principale (featured + lista articoli)
│   │   ├── ArticlePage.tsx     # Pagina singolo articolo
│   │   └── AboutPage.tsx       # Pagina "Chi sono" (placeholder)
│   ├── lib/
│   │   └── supabase.ts         # Client Supabase + interfaccia Article
│   ├── App.tsx                 # Componente root con routing
│   ├── main.tsx                # Entry point React
│   ├── index.css               # Stili globali + Tailwind
│   └── vite-env.d.ts           # Type declarations Vite
├── supabase/
│   └── migrations/
│       └── 20260319221902_create_articles_table.sql
├── .bolt/                      # Configurazione Bolt.new
├── .qodo/                      # Configurazione agenti Qodo
├── index.html                  # HTML entry point
├── package.json                # Dipendenze e script
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite bundler config
├── tailwind.config.js          # Tailwind theme personalizzato
└── eslint.config.js            # Linting config
```

---

## 🔧 Configurazioni Principali

### Design Tokens (tailwind.config.js)
```javascript
theme: {
  extend: {
    colors: {
      accent: '#8b1a1a'  // Rosso scuro/bordeaux
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],    // Titoli
      sans: ['Inter', 'sans-serif']            // Corpo testo
    },
    lineHeight: {
      relaxed: '1.75'
    }
  }
}
```

### Environment Variables Richieste
Creare file `.env` nella root:
```env
VITE_SUPABASE_URL=<supabase-project-url>
VITE_SUPABASE_ANON_KEY=<supabase-anon-key>
```

---

## 🗄️ Database Schema

### Tabella: `articles`

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `id` | UUID | Primary key |
| `slug` | TEXT UNIQUE | Identificativo URL |
| `title` | TEXT | Titolo articolo |
| `subtitle` | TEXT | Sottotitolo (opzionale) |
| `author` | TEXT | Autore |
| `category` | TEXT | Categoria (opzionale) |
| `content` | TEXT | Contenuto (markdown-style) |
| `published_date` | DATE | Data pubblicazione |
| `is_featured` | BOOLEAN | In evidenza in homepage |
| `created_at` | TIMESTAMP | Data creazione |

**RLS Policy:** Public read access per utenti `anon` e `authenticated`

---

## 🧩 Componenti React

### App.tsx (Root)
- Gestisce stato di navigazione (`currentPage`, `currentSlug`)
- Funzione `handleNavigate(page, slug?)` per cambio pagina
- Renderizza condizionalmente: HomePage, ArticlePage, AboutPage

### HomePage.tsx
- Fetch articoli da Supabase (ORDER BY published_date DESC)
- Mostra articolo **featured** in evidenza
- Griglia 2 colonne per altri articoli
- Formattazione date in italiano (`it-IT`)
- Gestione stato di loading

### ArticlePage.tsx
- Fetch singolo articolo per `slug`
- Rendering contenuto con parsing markdown (header `## `)
- Pulsante "Torna alla home"
- Gestione 404 per articoli non trovati

### Header.tsx
- Header sticky con brand "AI di Provincia"
- Navigazione: Home, "Chi sono"
- Highlight pagina attiva

### Footer.tsx
- Footer semplice con copyright

---

## 📦 Interfaccia Article (TypeScript)

```typescript
interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  author: string;
  category: string | null;
  content: string;
  published_date: string;
  is_featured: boolean;
  created_at: string;
}
```

---

## 🚀 Script NPM

```bash
npm run dev        # Avvia server di sviluppo Vite
npm run build      # Build di produzione
npm run preview    # Preview build produzione
npm run lint       # Esegui ESLint
npm run typecheck  # Type checking TypeScript
```

---

## 🎯 Flusso di Lavoro

### Aggiungere un Nuovo Articolo
1. Inserire record nella tabella `articles` su Supabase
2. Impostare `slug` univoco (usato per routing)
3. Impostare `is_featured = true` per evidenziare in homepage
4. Scrivere `content` con sintassi markdown (usa `## ` per paragrafi)

### Aggiungere una Nuova Pagina
1. Creare componente in `src/components/NuovaPage.tsx`
2. Importare in `App.tsx`
3. Aggiungere stato nel `type Page = 'home' | 'article' | 'about' | 'nuova'`
4. Aggiungere caso nel render condizionale

### Modificare Design
1. Modificare `tailwind.config.js` per colori/font
2. Modificare componenti in `src/components/`
3. Stili globali in `src/index.css`

---

## 🔍 Pattern di Codice

### Fetch Dati da Supabase
```typescript
const { data, error } = await supabase
  .from('articles')
  .select('*')
  .order('published_date', { ascending: false });
```

### Fetch Singolo Articolo
```typescript
const { data, error } = await supabase
  .from('articles')
  .select('*')
  .eq('slug', slug)
  .single();
```

### Gestione Loading/Error
```typescript
const [articles, setArticles] = useState<Article[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  loadArticles();
  setLoading(false);
}, []);

if (loading) return <div>Caricamento...</div>;
```

---

## 🎨 Stile e UX

- **Tipografia:** Playfair Display per titoli, Inter per corpo testo
- **Colori:** Accento rosso scuro (#8b1a1a), sfondo chiaro
- **Layout:** Responsive, mobile-first
- **Interazioni:** Hover states su card articoli, transizioni fluide

---

## 📝 Note Importanti

1. **Nessun backend custom:** Tutto il backend è gestito da Supabase
2. **Nessuna auth implementata:** Solo lettura pubblica
3. **Nessun CMS:** Gli articoli si inseriscono direttamente nel DB
4. **Markdown semplice:** Il contenuto usa `## ` per paragrafi, no parser markdown completo
5. **SEO base:** Meta tag nell'HTML, no SSR/SSG

---

## 🛠️ Dipendenze Principali

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.2",
  "tailwindcss": "^3.4.1",
  "@supabase/supabase-js": "^2.57.4",
  "lucide-react": "^0.344.0"
}
```

---

## 📞 Quick Reference

| Cosa fare | Dove andare |
|-----------|-------------|
| Cambiare colori | `tailwind.config.js` |
| Aggiungere pagina | `src/components/` + `App.tsx` |
| Modificare header/footer | `src/components/Header.tsx` o `Footer.tsx` |
| Cambiare query dati | `src/components/*.tsx` (dentro useEffect) |
| Modificare schema DB | `supabase/migrations/` + dashboard Supabase |
| Aggiornare env vars | File `.env` (non commitato) |

---

**Ultimo aggiornamento:** 28 marzo 2026
