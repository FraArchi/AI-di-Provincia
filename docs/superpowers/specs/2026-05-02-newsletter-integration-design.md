# Design Spec: Integrazione Newsletter AI di Provincia

## 1. Obiettivo
Aggiungere una newsletter al sito `aidiprovincia.it` per consentire ai lettori di iscriversi e ricevere aggiornamenti e riflessioni editoriali curate manualmente.

## 2. Architettura Tecnica
- **Service Provider:** [Resend](https://resend.com) (Email API).
- **Integrazione Backend:** Astro Actions (Astro 5.x).
- **Frontend:** React (componente form) integrato in pagine Astro.
- **Email Design:** React-Email (per mantenere la coerenza visiva con lo stile line-art del sito).

## 3. User Experience (UX)
- **Navigazione:** Link "Newsletter" nell'header della navigazione.
- **Interazione:** Click sul link triggera uno "smooth scroll" verso la sezione dedicata a fondo pagina.
- **Sezione Newsletter:** 
  - Posizionata sopra il footer in tutte le pagine principali.
  - Titolo: "Restiamo in contatto" o simile.
  - Sottotitolo: "Una lettera periodica tra umanità e algoritmi. Niente spam, solo pensieri lenti."
  - Input: Campo email con validazione client-side e server-side.
  - Feedback: Messaggi di successo/errore integrati (senza ricaricamento pagina).
  - Estetica: Line art minimalista coerente con `GEMINI.md`.

## 4. Flusso Dati (Astro Actions)
1. L'utente inserisce l'email nel form React.
2. Il form chiama l'Astro Action `subscribe`.
3. L'Action valida l'email (zod schema).
4. L'Action invia la richiesta alle API di Resend per aggiungere l'utente alla lista (Audience).
5. (Opzionale) Invio automatico di una email di benvenuto tramite Resend.
6. Ritorno di una risposta JSON al frontend per mostrare il successo.

## 5. Visual Design
- **Sfondo:** `#F9FAFB` (off-white gray).
- **Accenti:** `#8B1A1A` (burgundy red) per pulsanti e dettagli grafici.
- **Illustrazione:** Minimalist continuous line art che unisce un elemento umano (es. una penna o una mano) con un elemento tech (es. un circuito o un cursore).

## 6. Sicurezza e Privacy
- Protezione contro bot tramite validazione Honeypot o limitazione rate-limit (gestita da Astro Actions/Resend).
- Gestione corretta dei segreti (`RESEND_API_KEY`) tramite variabili d'ambiente `.env`.
- Link di disiscrizione obbligatorio in ogni email (gestito da Resend).
