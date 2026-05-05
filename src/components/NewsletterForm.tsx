import React, { useState } from 'react';
import { actions } from 'astro:actions';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
        setMessage(error.message || 'Qualcosa è andato storto.');
      } else if (data?.success) {
        setStatus('success');
        setMessage(data.message || 'Grazie per esserti iscritto!');
        setEmail('');
      }
    } catch (e) {
      setStatus('error');
      setMessage('Errore di connessione. Riprova.');
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
          aria-label="Indirizzo Email"
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
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">La tua biblioteca della resistenza:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/manifesto" className="text-accent font-bold hover:underline">
                    📜 Il Manifesto della Tecnologia Restante &rarr;
                  </a>
                </li>
                <li>
                  <a href="/lettura-lenta" className="text-accent font-bold hover:underline">
                    📖 Esercizi di Lettura Lenta &rarr;
                  </a>
                </li>
                <li>
                  <a href="/glossario" className="text-accent font-bold hover:underline">
                    💡 Glossario del Nuovo Mondo &rarr;
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
