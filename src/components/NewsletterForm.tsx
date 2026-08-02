import React, { useState } from 'react';
import { actions } from 'astro:actions';

interface NewsletterFormProps {
  lang?: 'it' | 'en';
}

export default function NewsletterForm({ lang = 'it' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const t = {
    it: {
      placeholder: "la-tua@email.it",
      ariaLabel: "Indirizzo Email",
      sending: "Inviando...",
      subscribe: "Iscriviti",
      libraryTitle: "La tua biblioteca della resistenza:",
      manifesto: "📜 Il Manifesto della Tecnologia Restante",
      margini: "📖 Margini di Pagina",
      glossario: "💡 Glossario del Nuovo Mondo",
      errorDefault: "Qualcosa è andato storto.",
      successDefault: "Grazie per esserti iscritto!",
      connectionError: "Errore di connessione. Riprova.",
      manifestoUrl: "/manifesto",
      marginiUrl: "/margini-di-pagina",
      glossarioUrl: "/glossario"
    },
    en: {
      placeholder: "your@email.com",
      ariaLabel: "Email Address",
      sending: "Sending...",
      subscribe: "Subscribe",
      libraryTitle: "Your resistance library:",
      manifesto: "📜 The Manifesto of Remaining Technology",
      margini: "📖 Page Margins",
      glossario: "💡 Glossary of the New World",
      errorDefault: "Something went wrong.",
      successDefault: "Thank you for subscribing!",
      connectionError: "Connection error. Please try again.",
      manifestoUrl: "/en/manifesto",
      marginiUrl: "/en/margini-di-pagina",
      glossarioUrl: "/en/glossario"
    }
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData();
    formData.append('email', email);

    try {
      const { data, error } = await actions.subscribe(formData);

      if (error) {
        setStatus('error');
        setMessage(error.message || t.errorDefault);
      } else if (data?.success) {
        setStatus('success');
        setMessage(t.successDefault);
        setEmail('');
      }
    } catch (e) {
      setStatus('error');
      setMessage(t.connectionError);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          aria-label={t.ariaLabel}
          required
          className="flex-grow px-4 py-3 border-2 border-gray-900 rounded-lg focus:outline-none focus:border-accent transition-colors font-mono"
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {status === 'loading' ? t.sending : t.subscribe}
        </button>
      </form>
      {message && (
        <div className="mt-4">
          <p 
            aria-live="polite" 
            role="status" 
            className={`text-sm font-mono ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
          >
            {message}
          </p>
          {status === 'success' && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{t.libraryTitle}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={t.manifestoUrl} className="text-accent font-bold hover:underline">
                    {t.manifesto} &rarr;
                  </a>
                </li>
                <li>
                  <a href={t.marginiUrl} className="text-accent font-bold hover:underline">
                    {t.margini} &rarr;
                  </a>
                </li>
                <li>
                  <a href={t.glossarioUrl} className="text-accent font-bold hover:underline">
                    {t.glossario} &rarr;
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
