# Implementazione Newsletter con Resend

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrare un sistema di iscrizione alla newsletter basato su Resend e Astro Actions, con un'interfaccia coerente allo stile del sito.

**Architecture:** Utilizzo di Astro Actions per gestire la logica server-side in modo sicuro, con un frontend React per il form di iscrizione. Navigazione tramite anchor link per portare l'utente alla sezione newsletter a fondo pagina.

**Tech Stack:** Astro 5, React 19, Resend SDK, Tailwind CSS 4, Zod.

---

### Task 1: Setup Ambiente e Dipendenze

**Files:**
- Modify: `.env`
- Modify: `package.json`

- [ ] **Step 1: Aggiungere la chiave API di Resend al file .env**
Aggiungere la riga (usare un segnaposto se la chiave non è fornita, ma qui assumiamo il setup):
```env
RESEND_API_KEY=re_your_api_key
```

- [ ] **Step 2: Installare l'SDK di Resend**
Run: `npm install resend`

- [ ] **Step 3: Commit**
```bash
git add package.json package-lock.json
git commit -m "chore: add resend dependency"
```

### Task 2: Definizione Astro Action `subscribe`

**Files:**
- Create: `src/actions/index.ts`

- [ ] **Step 1: Creare l'azione di sottoscrizione**
```typescript
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email("Inserisci un indirizzo email valido"),
    }),
    handler: async ({ email }) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        // Nota: Assicurati di aver creato una "Audience" su Resend
        // Se non specificato, usiamo l'invio di una mail di notifica a se stessi o l'aggiunta a contatti
        const { data, error } = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID || '', // Opzionale se gestito via API
        });

        if (error) {
          return { success: false, error: error.message };
        }

        return { success: true };
      } catch (e) {
        return { success: false, error: "Errore durante l'iscrizione. Riprova più tardi." };
      }
    }
  })
};
```

- [ ] **Step 2: Commit**
```bash
git add src/actions/index.ts
git commit -m "feat: add subscribe astro action"
```

### Task 3: Componente NewsletterForm (React)

**Files:**
- Create: `src/components/NewsletterForm.tsx`

- [ ] **Step 1: Creare il componente del form con feedback**
```tsx
import React, { useState } from 'react';
import { actions } from 'astro:actions';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('email', email);

    const { data, error } = await actions.subscribe(formData);

    if (error) {
      setStatus('error');
      setMessage(error.message || 'Qualcosa è andato storto.');
    } else if (data?.success) {
      setStatus('success');
      setMessage('Grazie per esserti iscritto!');
      setEmail('');
    } else {
      setStatus('error');
      setMessage(data?.error || 'Errore durante l\'iscrizione.');
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="la-tua@email.it"
          required
          className="flex-grow px-4 py-3 border-2 border-gray-900 rounded-lg focus:outline-none focus:border-accent transition-colors font-mono"
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {status === 'loading' ? 'Inviando...' : 'Iscriviti'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-sm font-mono ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/NewsletterForm.tsx
git commit -m "feat: add NewsletterForm React component"
```

### Task 4: Sezione Visiva NewsletterSection

**Files:**
- Create: `src/components/NewsletterSection.astro`

- [ ] **Step 1: Creare la sezione con stile line-art**
```astro
---
import NewsletterForm from './NewsletterForm';
---

<section id="newsletter" class="bg-gray-50 border-t border-b border-gray-200 py-20 px-6 overflow-hidden">
  <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
    <div class="mb-8 relative">
      <svg width="160" height="60" viewBox="0 0 160 60" class="mx-auto text-gray-900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 Q 40 10, 80 50 T 150 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        <circle cx="150" cy="10" r="5" fill="#8B1A1A" />
      </svg>
      <div class="absolute -top-4 -right-8 transform rotate-12 bg-white px-2 py-1 border border-gray-900 text-[10px] font-mono uppercase tracking-tighter">
        L'algoritmo umano
      </div>
    </div>

    <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Restiamo in contatto</h2>
    <p class="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
      Una lettera periodica tra umanità e algoritmi. <br />
      Niente spam, solo pensieri lenti per chi vive fuori dai centri tecnologici.
    </p>

    <NewsletterForm client:load />
    
    <p class="mt-8 text-xs text-gray-400 font-mono">
      Puoi disiscriverti in ogni momento. Rispetto la tua lentezza.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Commit**
```bash
git add src/components/NewsletterSection.astro
git commit -m "feat: add NewsletterSection component with visual style"
```

### Task 5: Integrazione nel Layout e Navigazione

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Inserire la sezione nel Layout (sopra il Footer)**
```astro
---
// Aggiungere import
import NewsletterSection from '../components/NewsletterSection.astro';
---
<!-- ... prima del footer ... -->
<NewsletterSection />
<Footer />
```

- [ ] **Step 2: Aggiungere il link "Newsletter" alla Navigation**
Modificare `src/components/Navigation.tsx` per aggiungere il link con scroll fluido:
```tsx
// Aggiungere alla lista dei link
<a 
  href="#newsletter" 
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="text-accent font-bold hover:underline"
>
  Newsletter ↓
</a>
```

- [ ] **Step 3: Commit finale**
```bash
git add src/layouts/Layout.astro src/components/Navigation.tsx
git commit -m "feat: integrate newsletter section into layout and navigation"
```
