import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email("Inserisci un indirizzo email valido"),
    }),
    handler: async ({ email }) => {
      const apiKey = import.meta.env.RESEND_API_KEY;
      const audienceId = import.meta.env.RESEND_AUDIENCE_ID;

      if (!apiKey) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "Configurazione mancante: RESEND_API_KEY non trovata.",
        });
      }

      const resend = new Resend(apiKey);
      
      try {
        // TENTATIVO 1: Aggiunta ai contatti (Newsletter vera e propria)
        const { error: contactError } = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          ...(audienceId ? { audienceId } : {}),
        });

        if (!contactError) {
          return { success: true };
        }

        // TENTATIVO 2 (Fallback): Se il contatto fallisce, invia una mail di notifica
        console.warn("Contact creation failed, falling back to email notification:", contactError);
        
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'francescoarchidiacono06@gmail.com',
          subject: 'Nuovo iscritto alla Newsletter (Fallback)',
          html: `<p>Un nuovo utente ha richiesto l'iscrizione: <strong>${email}</strong></p>
                 <p>Nota: Questo è un messaggio di fallback perché l'Audience su Resend non è ancora attiva.</p>`
        });

        return { success: true, message: "Richiesta ricevuta!" };

      } catch (e) {
        if (e instanceof ActionError) throw e;
        console.error("Subscription Error:", e);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "Errore durante l'iscrizione. Riprova più tardi.",
        });
      }
    }
  })
};
