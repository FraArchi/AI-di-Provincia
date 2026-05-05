import './chunks/virtual_DBQ5X6gO.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_F0ljrcuI.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_DxvrbaYm.mjs';

const server = {
  subscribe: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email("Inserisci un indirizzo email valido")
    }),
    handler: async ({ email }) => {
      const apiKey = ((typeof process !== "undefined" ? process.env.RESEND_API_KEY : void 0))?.trim();
      const audienceId = ((typeof process !== "undefined" ? process.env.RESEND_AUDIENCE_ID : void 0))?.trim();
      if (!apiKey) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Configurazione mancante: RESEND_API_KEY non trovata."
        });
      }
      const resend = new Resend(apiKey);
      try {
        const { error: contactError } = await resend.contacts.create({
          email,
          unsubscribed: false,
          ...audienceId ? { audienceId } : {}
        });
        if (!contactError) {
          return { success: true, message: "Iscrizione completata con successo!" };
        }
        if (contactError.message.toLowerCase().includes("already exists")) {
          return { success: true, message: "Sei già iscritto alla newsletter!" };
        }
        console.warn("Contact creation failed, falling back to email notification:", contactError.message);
        const { error: mailError } = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "fraarchi06@gmail.com",
          subject: `Nuovo iscritto: ${email}`,
          html: `<p>Un nuovo utente ha richiesto l'iscrizione dal sito: <strong>${email}</strong></p>
                 <p>Dettagli errore Resend: ${contactError.message}</p>`
        });
        if (mailError) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Impossibile completare l'iscrizione. Per favore riprova più tardi."
          });
        }
        return { success: true, message: "Richiesta ricevuta, ti abbiamo aggiunto alla lista!" };
      } catch (e) {
        if (e instanceof ActionError) throw e;
        console.error("Subscription Error:", e);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Errore durante l'iscrizione. Riprova più tardi."
        });
      }
    }
  })
};

export { server };
