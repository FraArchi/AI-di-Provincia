# 📖 AI di Provincia - Piano Editoriale & Specifiche Rubriche (Specs)

Questo documento definisce la struttura dei contenuti del progetto "AI di Provincia". L'obiettivo è separare chiaramente i flussi di notizie veloci (automatizzati o semi-automatizzati) dagli approfondimenti umani e lenti, creando un'abitudine di lettura nel pubblico e mantenendo un'identità forte e radicata nel territorio.

## 1. Architettura dei Contenuti (La "Prima Pagina")

La homepage dovrà bilanciare la freschezza degli aggiornamenti con l'importanza degli articoli di fondo.

*   **Header / Hero:** L'ultimo pezzo lungo (es. *Voci dal territorio* o *Il Comune più vicino*). L'identità visiva e testuale principale.
*   **Fascia Laterale / Widget:** "Il Bollettino dell'IA" (ultimi 3-5 report brevi generati dal *local-brain*).
*   **Feed Centrale:** Un mix ordinato cronologicamente delle altre rubriche (*Ho provato per voi*, *La settimana in provincia*, *Lettura lenta*).

---

## 2. Specifiche delle Rubriche (Le Specs)

Ecco il dettaglio di ogni rubrica, con frequenza suggerita, format e focus editoriale.

### 📡 Il Bollettino dell'IA
*   **Origine:** Alimentato dal tool `local-brain-report`.
*   **Frequenza:** Alta (Giornaliera o bi-settimanale, a seconda di come configuri lo script).
*   **Format:** Report brevi, schematici e puntati.
*   **Focus:** Sintesi estrema delle news tech globali (OpenAI, Anthropic, ecc.) tradotte con il filtro "Impatto in provincia".
*   **Posizionamento:** Sezione dedicata o widget laterale. Non deve cannibalizzare il feed principale. È il "ticker" delle notizie.

### 🗺️ Voci dal territorio
*   **Origine:** Lavoro sul campo, interviste.
*   **Frequenza:** Mensile o Bi-mensile (richiede tempo per trovare le persone, intervistarle e scrivere).
*   **Format:** Intervista narrativa, reportage umano. Stile narrativo caldo, empatico, focalizzato sulle paure, le speranze e gli usi reali (o l'assenza di usi) dell'IA da parte della gente comune.
*   **Focus:** La provincia che parla di sé rispetto alla tecnologia.
*   **Posizionamento:** Pezzo di punta (Cover story) quando viene pubblicato.

### 📰 La settimana in provincia (Il "Re-framing")
*   **Origine:** Curatela manuale/analisi della settimana.
*   **Frequenza:** Settimanale (es. il Venerdì o il Sabato mattina).
*   **Format:** Newsletter style. 3-4 macro notizie della settimana analizzate e smontate.
*   **Focus:** Tradurre il mainstream. Rispondere sistematicamente alla domanda: *"Sì, ma a noi qui che cambia?"*. Costruisce l'abitudine e la fedeltà del lettore.
*   **Posizionamento:** Feed principale. Ottimo candidato per diventare anche una vera e propria Newsletter via email.

### 🧪 Ho provato per voi
*   **Origine:** Test manuale di strumenti AI accessibili.
*   **Frequenza:** Flessibile (Bi-settimanale o mensile, quando c'è uno strumento valido da recensire).
*   **Format:** Tutorial discorsivo, molto pratico, zero gergo tecnico (niente "prompt engineering", "RAG", "LLM", a meno che non siano spiegati come lo faresti al bar). Screenshot reali.
*   **Focus:** Utilità pratica e immediata per mestieri specifici (l'artigiano, l'agricoltore, il commerciante, la segreteria della scuola).
*   **Posizionamento:** Feed principale, categoria "Guide/Strumenti".

### 📖 Lettura lenta
*   **Origine:** Recensioni e riflessioni su libri/saggi lunghi.
*   **Frequenza:** Mensile.
*   **Format:** Saggio breve, recensione ragionata. Stile *Longform*. Un invito a rallentare.
*   **Focus:** Approfondimento filosofico, sociale o etico dell'IA, sempre tenendo a mente il contrasto tra la "frenesia del progresso" e i "tempi lenti" della provincia.
*   **Posizionamento:** Feed principale, lettura del weekend (ideale per la pubblicazione la domenica mattina).

### 🏘️ Il Comune più vicino
*   **Origine:** Ricerca su albi pretori, contatti con amministrazioni locali, reportage.
*   **Frequenza:** Flessibile / Quando si trova la notizia.
*   **Format:** Inchiesta breve o case study.
*   **Focus:** L'impatto reale (o la mancanza di impatto) dell'IA nella Pubblica Amministrazione locale. Un ASL usa l'IA per smistare le code? Un piccolo comune ha fatto un bando per un chatbot? O viceversa, l'incapacità di stare al passo. È giornalismo iper-locale e di estremo valore perché quasi nessuno copre questa nicchia in modo sistematico.
*   **Posizionamento:** Feed principale / Inchieste.
