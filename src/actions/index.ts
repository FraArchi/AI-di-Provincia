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

      if (!audienceId) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "Configurazione mancante: Devi creare una 'Audience' su Resend e aggiungere RESEND_AUDIENCE_ID.",
        });
      }

      const resend = new Resend(apiKey);
      
      try {
        const { error } = await resend.contacts.create({
          email,
          unsubscribed: false,
          audienceId: audienceId,
        });

        if (error) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: error.message,
          });
        }

        return { success: true };
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
