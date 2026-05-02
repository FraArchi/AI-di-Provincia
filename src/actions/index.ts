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
        const { data, error } = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID || '',
        });

        if (error) {
          console.error("Resend Error:", error);
          return { success: false, error: error.message };
        }

        return { success: true };
      } catch (e) {
        console.error("Subscription Error:", e);
        return { success: false, error: "Errore durante l'iscrizione. Riprova più tardi." };
      }
    }
  })
};
