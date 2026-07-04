---
title: "30 anni di esperienza contro la verità tecnica: Perché la tua VPN non è l'armatura che credi (e perché il tuo capo ha torto)"
subtitle: "Smontando il mito della sicurezza assoluta: Il paradosso della VPN e il fallimento dell'autorità basata sull'anzianità"
author: "Francesco Archidiacono"
category: "Dalla Periferia"
published_date: "2026-07-04T10:23:00.000Z"
featured: false
slug: "30-anni-esperienza-contro-verita-tecnica-vpn"
cover: "../../assets/images/30-anni-di-esperienza.png"
excerpt: "È sempre lo stesso discorso del 'io sono esperto e sono migliore e ho più conoscenze di te'. Tre episodi, una discussione sulle VPN, e la scopert..."
---

## Il Paradosso dell'Autorità e il Mito dell'Esperienza

È successo proprio ieri con mio padre (2 luglio 2026), per una sciocchezza sull'aria condizionata e l'aria normale.

È successo con lo "Psicoterapeuta" che dice qualche giorno fa: "io sono un esperto, ma con chi ti credi di star parlando, cioè io quando dico una cosa è perché ho delle competenze."

Come a voler dire: Io sono migliore, tu non sai niente, ascolta e non discutere.

E infine, quello che definisco più altisonante tra questi 3 esempi, è quello che succede nel marzo 2026, quando lavoro in prova da "AM Tecnology" (nemmeno a scrivere technology con la "H"...). 

Cosa succede? Lui ripetutamente, facendo sempre la buona faccia quindi per così dire in gergo "Gaslighting", dice spesso: io sono esperto, ho 30 anni di esperienza, ma tu chi sei, come fai a parlare, come fai a compararti con me quando conosci appena l'informatica da forse nemmeno un anno...

Ecco ed è qui che voglio arrivare, per cercare di smontare una discussione molto forte con questo capo di questa azienda.

Basicamente, si parlava di VPN. Io dicevo che non erano sicure, lui affermava che erano sicure.

Ora questo spunto che mi è arrivato oggi arriva da molte frustrazioni come gli esempi dati in precedenza, e cerchiamo di smontare l'ultimo, quello che forse in fine ha contribuito al non farmi assumere in quella azienda, e forse con un capo del genere direi menomale.

Lo spunto che ho avuto oggi arriva da **Salvatore Sanfilippo**, non uno qualunque nel mondo dell'informatica, ma questo è secondario, quello che mi interessa è quello che dice. E lo dice in questo video proprio sulla Sicurezza delle VPN.

Qui il link al video: https://youtu.be/ftgOQmn58a4

Ora mi sono reso conto che questo video è di 6 mesi fa, oggi è il 4 luglio 2026, ma capita proprio a pennello, guarda che coincidenza.

---

## Il Conflitto Tecnico: Ricostruzione dello Scontro

Dalle fonti fornite emerge un quadro dettagliato di uno scontro professionale e umano avvenuto presso la **AM Technology**, ricostruito attraverso i miei appunti personali e la conversazione avuta con l'assistente (ChatGPT).

### Il Capo (AM Technology)

Il datore di lavoro ha basato la sua posizione quasi interamente sul **principio di autorità** e sull'esperienza.

- **Posizione Tecnica:** Ha affermato categoricamente che **la VPN è sicura**.

- **Argomento di Autorità:** Ha ribadito più volte di avere **30 anni di esperienza**, usando questo dato per invalidare la mia opinione, trattandomi come qualcuno che, conoscendo l'informatica da meno di un anno, non ha il diritto di confrontarsi con lui.

- **Comportamento:** Ha dichiarato di non tollerare chi lo contraddice senza saper spiegare i fatti concreti. Mi ha ripreso per 10-15 minuti, un atteggiamento che ho percepito come una forma di "gaslighting".

### La Mia Posizione

Il mio contributo parte da un'intuizione tecnica che però, al momento dello scontro, non sono riuscito a strutturare.

- **Posizione Tecnica:** Ho sostenuto che la VPN **non è sicura al 100%**. Successivamente, ho trovato conferma della mia tesi nel video di Salvatore Sanfilippo, il quale spiega che le VPN possono essere ridondanti o addirittura dannose se spostano solo la fiducia dall'ISP a un provider privato meno regolamentato.

- **Reazione Emotiva:** Dopo lo scontro mi sono sentito "male dentro", inadeguato e con il desiderio di "sparire" o scappare dalla situazione. Ho vissuto la correzione come un giudizio sul mio valore personale ("Perché non so fare niente?").

- **Riflessione Postuma:** Ho identificato questo episodio come parte di un "paradosso dell'autorità", accomunandolo ad altre esperienze negative con mio padre e il mio psicoterapeuta.

### L'Assistente (ChatGPT)

L'intelligenza artificiale ha agito da mediatore, cercando di darmi strumenti sia tecnici che psicologici.

- **Validazione Tecnica:** Mi ha dato ragione, spiegando che in sicurezza informatica **non esiste il 100%** ma solo la "gestione del rischio". Ha confermato che, sebbene la VPN offra cifratura e tunneling, non protegge da malware, phishing o se l'endpoint è compromesso.

- **Analisi della Dinamica:** Ha chiarito che il capo non mi ha ripreso necessariamente perché avevo torto, ma perché ho dato un **giudizio assoluto senza argomentazione immediata**. Ha interpretato il richiamo ai "30 anni di esperienza" come una difesa della gerarchia e del territorio professionale.

- **Strategia di Crescita:** Mi ha suggerito di non andare in "modalità emotiva" e di cambiare approccio comunicativo: invece di dire "no", dovrei partire da un punto di accordo per poi aggiungere una limitazione tecnica (es. "Sì, è sicura per la cifratura, ma cosa succede se l'endpoint è compromesso?").

---

## Analisi Tecnica: Perché le VPN sono per lo più inutili, a volte anche dannose

### Cosa dice Salvatore Sanfilippo

Ciao amici, oggi voglio parlarvi del perché io non uso un servizio di VPN e del perché credo che la maggior parte degli utenti di internet non dovrebbe acquistare un servizio di VPN.

Tutta la narrazione che c'è attorno alla necessità delle VPN è stimolata economicamente se si vanno a guardare i dati oggettivi. In realtà la VPN può essere addirittura, invece che una miglioria dell'esperienza utente della privacy, qualcosa che addirittura può peggiorare la situazione.

Allora, iniziamo col fatto che in teoria quello che la VPN dovrebbe fare è di mascherare il nostro indirizzo IP, perché, o meglio, questo effettivamente lo fa, si antepone tra noi e i siti a cui ci connettiamo con un tunnel cifrato.

Ma il fatto è che l'operazione di mascheramento del nostro indirizzo IP in realtà fa ben poco per migliorare la privacy degli utenti su internet.

#### Il Trasferimento della Fiducia (Trust Transfer)

Iniziamo da una considerazione fondamentale che forse molti non fanno quando si parla di VPN.

Tu passi dalla possibilità che qualcuno, un "man in the middle" da qualche parte, intercetti una connessione che tu stai facendo e carpisca appunto il fatto che c'è un'associazione tra il tuo indirizzo IP e il fatto che stai visitando una certa pagina web, per il rischio che ciò accada. Tu sostanzialmente con una VPN lo fai accadere sistematicamente.

Perché ovviamente dal momento in cui la VPN fa da tunnel, anche se non può decifrare le connessioni tra te e il servizio che stai effettivamente contattando (ma questo non lo può decifrare neanche una persona malintenzionata se tu non usi una VPN, perché stai usando ormai su tutta internet HTTPS), poi alla questione del DNS ci arriviamo. 

Siccome potrebbe accadere quella cosa, tu la fai accadere sistematicamente. Di fatto il provider della VPN conosce in teoria, ma anche in pratica (però dico il fatto se ne tenga traccia o meno), le connessioni che tu fai, dove vai e così via. 

Magari tu fai una connessione col tuo indirizzo IP a un sito che non ha nessun modo di tracciarti, che non ha i log, che non gliene frega niente di tener conto del fatto che tu ti sei connesso a tale ora con quel sito web, e utilizzando una VPN invece c'è un terzo incomodo che conosce questa informazione.

Ovviamente i provider di VPN ci rassicurano dicendoci che hanno una policy "no log".

La verità è che in passato è successo che diversi provider di VPN, poi pressati fortemente dalle autorità che poi dicevano "Guarda che ti faccio chiudere", poi questi log magicamente ce li avevano e questa cosa qua, diciamo, è abbastanza inquietante. 

C'è da dire che anche solo con i log di servizio che necessariamente hanno per fare debugging, ci sono degli attacchi di correlazione tra la sessione degli utenti e questi log qua che permettono di de-anonimizzare i dati e di, diciamo, ricostruire la storia di navigazione di un utente che a quel punto è registrata lì.

E qua ci stiamo, diciamo, occupando delle VPN che ti fanno pagare, che in teoria davvero dovrebbero avere a cuore la vostra privacy.

Se invece iniziamo a parlare di VPN gratuite, proprio in molti casi il business di queste VPN è profilare utenti, aggregare dei dati e vendere, diciamo, delle statistiche di navigazione e così via. Per cui questa parte qui è veramente così, diciamo, problematica.

#### Il Problema del DNS

C'è da dire anche che il problema che effettivamente esiste è quello del DNS che è in chiaro, perché il pacchetto DNS è ancora uno dei pochi tasselli di internet che è rimasto uguale a quello degli anni 80. 

Si tratta sostanzialmente di un pacchetto UDP in chiaro in cui c'è scritto il sito web che voi volete risolvere nel suo indirizzo IP e poi il server DNS vi risponde. 

Allora, tanto per iniziare, ovviamente non utilizzate il DNS server del vostro provider, quantomeno metteteci qualcosa tipo quella di Google, ma comunque i pacchetti passano in chiaro sul vostro provider e lo stesso li può facilmente intercettare e fare delle statistiche. 

In tal caso bisogna attivare il **DNS over HTTPS** dal browser e questo vi proteggerà in maniera significativa da questo tipo di attacchi.

#### La Ridondanza della Cifratura HTTPS

Oltre alle questioni che ci siamo detti, un altro problema abbastanza grave delle VPN è che sostanzialmente aggiungono una cifratura a delle connessioni che sono già perlopiù cifrate.

Ormai HTTPS è lo standard, quindi anche senza una VPN e anche se vi connettete da un Wi-Fi pubblico. Ma questo non è tra l'altro il caso della maggior parte degli utenti, che la maggior parte delle connessioni le fa da casa o anche quando è in giro ha i dati mobile che può utilizzare.

Anche quando vi connettete da un Wi-Fi completamente pubblico, HTTPS vi protegge con questo layer di cifratura, per cui è in molti casi semplicemente ormai una ridondanza inutile.

#### Il Vero Problema del Tracciamento

C'è di più. Il vero problema del tracciamento oggi come oggi è il browser fingerprinting o molto più spesso il fatto che semplicemente vi tracciano direttamente le aziende alle quali siete connesse con la vostra login o avete un cookie di advertising settato. 

Per cui la VPN, anche in questi casi di tracciamento, che è veramente questo un tracciamento intrusivo, non serve assolutamente a nulla.

#### La Differenza Legale: ISP vs Provider VPN

C'è un passaggio decisivo di questa vicenda. Quando uno utilizza una VPN, sostanzialmente sottrae il potenziale controllo della navigazione, dei pattern di navigazione che il provider ha la capacità teorica di vedere, esaminare, estrarre, perché dal provider passa, diciamo, tutto il nostro traffico. Questa capacità viene spostata al servizio di VPN.

Il provider a quel punto vedrà solo una connessione singola con un flusso di dati cifrati e invece il servizio VPN vedrà tutto quello che solitamente il provider poteva teoricamente vedere e potrebbe fare le stesse statistiche che il provider potrebbe fare, potrebbe fare le stesse violazioni della privacy, potrebbe tenere gli stessi log. 

Quindi, sostanzialmente, c'è un trasferimento di trust, di fiducia da una parte all'altra.

La cosa interessante di questo argomento è che c'è una profonda differenza legale su ciò che gli ISP, gli internet service provider, devono alle leggi a cui devono sottostare e quelle a cui devono sottostare le società private che gestiscono le VPN. 

C'è una grande asimmetria di doveri perché siccome gli internet provider sono regolamentati sia in Europa che negli Stati Uniti che in altre parti del mondo in maniera molto severa, cioè loro passano veramente i guai.

Invece capita che ci siano delle VPN che hanno la sede legale, persino i server a volte della gestione degli account (poi ovviamente gli altri server devono essere distribuiti per far finta che esci da una parte o dall'altra per simulare appunto il paese d'origine), però diciamo ecco hanno la sede legale in paesi dove ci sono degli apparati legali profondamente diversi con meno garanzie, eccetera eccetera.

Quindi questa operazione di spostamento della fiducia da una parte all'altra non è necessariamente uno spostamento di fiducia conveniente. Perché certo l'argomento potrebbe essere quello di dire: "Ah, ma gli ISP comunque vedono lo stesso quello che tu temi vedono le VPN". 

Beh, appunto, caspita, visto che comunque qualcuno deve vederle, decidi qual è l'organizzazione alla quale tu vuoi mostrare i tuoi dati privati e decidi se vuoi dare più o meno fiducia agli ISP, ma sappi che gli ISP sono tenuti a delle leggi più stringenti, che non mi pare poco.

---

## L'Illusione della Sicurezza: Smontare il Servizio AM Technology

Se il "capo" applica il suo discorso al servizio di **Firewall e VPN** che vende alle aziende medio-piccole, la situazione tecnicamente non migliora; anzi, le criticità evidenziate nelle fonti diventano ancora più specifiche e "smontabili".

Ecco come cambiano i fatti e quali sono le domande tecniche da porsi per invalidare la sua tesi di "sicurezza assoluta" in questo contesto specifico:

### 1. Il problema del "Trust Transfer" (Trasferimento della Fiducia)

Salvatore Sanfilippo spiega che usare una VPN significa spostare la fiducia dal proprio fornitore di rete (ISP) al fornitore della VPN.

- **Il fatto:** Se il capo vende questo servizio, lui (o la sua infrastruttura) diventa il "terzo incomodo" che può tecnicamente vedere e loggare tutto il traffico che passa nel tunnel.

- **Domanda da porsi:** Perché un'azienda dovrebbe fidarsi della gestione dati di una piccola realtà locale (magari con standard di compliance meno rigorosi) rispetto a un grande ISP nazionale che è sottoposto a leggi estremamente stringenti in termini di privacy e conservazione dei dati?

### 2. La VPN come "Autostrada per i Malware"

Il servizio "basico" che lui propone serve probabilmente a far collegare i dipendenti da casa all'ufficio.

- **Il fatto:** Come specificato nelle fonti, la VPN non è una protezione contro i malware o il phishing. Se un dipendente dell'azienda cliente ha il computer di casa infetto e si collega alla VPN dell'ufficio, la VPN non fa altro che creare un **tunnel cifrato sicuro per l'attaccante**.

- **L'errore del capo:** Vendere una VPN come "sicurezza" senza integrare una rigorosa sicurezza degli **endpoint** (i PC dei dipendenti) è tecnicamente un controsenso.

### 3. La ridondanza del Firewall basico

In un'azienda medio-piccola, se il traffico è già cifrato via HTTPS (come ormai quasi tutto il web), un firewall basico che non fa ispezione profonda del traffico (Deep Packet Inspection) serve a poco contro le minacce moderne.

- **Il fatto:** Se il firewall si limita a gestire porte e IP, non sta proteggendo l'azienda dai veri rischi moderni: il social engineering e i cookie di tracciamento, contro cui la VPN e un firewall tradizionale sono totalmente inutili.

### 4. Domande tecniche per "smontare" il suo servizio

Per mettere in crisi la sua affermazione che il suo pacchetto Firewall/VPN sia "sicuro", si potrebbero porre queste domande (basate sui fatti presenti nelle fonti):

- **Gestione dei Log:** "Dato che una VPN sposta la visibilità del traffico dall'ISP al fornitore del servizio, come vengono gestiti i log di navigazione dei clienti sul nostro Firewall? Chi garantisce che non siano accessibili o correlabili agli utenti?"

- **Modello Zero-Trust:** "Se un client remoto viene compromesso, il nostro Firewall/VPN è in grado di bloccare il movimento laterale dell'attaccante verso il server dell'azienda, o la VPN agisce semplicemente come un tunnel aperto che scavalca le protezioni perimetrali?"

- **DNS Leaks:** "Il servizio VPN che offriamo implementa il **DNS over HTTPS**, o i pacchetti DNS dei clienti viaggiano ancora in chiaro, permettendo comunque di ricostruire la loro cronologia di navigazione?"

- **MFA (Multi-Factor Authentication):** "Se la VPN è 'sicura' ma si basa solo su una password, cosa succede se un dipendente cade vittima di phishing? La VPN non diventa il punto di massima vulnerabilità?"

### In sintesi: perché ha torto

Vendere un servizio "basico" di Firewall e VPN a piccole aziende e definirlo "sicuro" è una **falsa promessa tecnica**. In un ambiente professionale, la VPN è solo uno strumento di **accesso remoto**, non di sicurezza informatica. 

Affermare il contrario ignorando i rischi degli endpoint compromessi e il trasferimento della fiducia dimostra che i suoi "30 anni di esperienza" sono rimasti legati a un modello di informatica degli anni '90, dove bastava "chiudere fuori" i cattivi con un tunnel.

---

## La Domanda Finale: Il Colpo di Grazia

Verso la fine della discussione lui si è difeso dopo non aver proprio citato il fatto che le VPN non fossero sicure al 100% ma bensì affermando solo "le VPN sono sicure" contro il mio "no, le VPN non sono sicure come credi." 

Lui si è provato a difendere dicendo che era ovvio che le VPN non erano sicure al 100%, però disse anche un'altra cosa. Di preciso fece una domanda: 

**"È più sicuro avere una VPN, o non avere una VPN?"**

E anche qui credo che la domanda, per un "presunto, credente di essere e di definirsi quindi esperto con 30 anni di esperienza in informatica", credo che questa domanda lo schernisca ancora di più.

### Risposta di NotebookLM

Questa domanda del capo, unita al suo cambio di posizione repentino, è forse l'elemento che più di tutti **rivela la fragilità tecnica della sua posizione** e la natura prettamente gerarchica del suo attacco. Da un punto di vista professionale e logico, quel quesito non è una "domanda tecnica", ma un **tentativo di manipolazione retorica** per uscire da un angolo in cui si era rinchiuso da solo.

#### 1. La ritirata strategica: "È ovvio che non è sicura al 100%"

Il fatto che lui abbia ritrattato dicendo che fosse "ovvio" è un classico caso di **spostamento dei pali della porta (moving the goalposts)**.

- **Contraddizione logica:** Se era "ovvio" che non fosse sicura al 100%, perché mi ha ripreso per 15 minuti usando i suoi "30 anni di esperienza" per zittirmi quando ho detto esattamente la stessa cosa?

- **L'uso dell'autorità come scudo:** Un vero esperto non usa l'anzianità per convalidare un'ovvietà, ma per spiegare le sfumature. Dichiarare prima che "è sicura" (assoluto) e poi che "è ovvio che non lo sia" (relativo) dimostra che la sua non era una lezione tecnica, ma una **difesa del territorio professionale**.

#### 2. L'analisi del quesito: "È più sicuro avere una VPN o non averla?"

Questa domanda è tecnicamente fallace perché pone un **falso dilemma**. In sicurezza informatica, la risposta non è mai un sì o un no, ma: **"Dipende dal modello di minaccia"**.

Per un esperto, la risposta corretta alla sua stessa domanda potrebbe essere, paradossalmente, **"È più sicuro NON averla"** in diversi scenari concreti:

- **Trasferimento della fiducia (Trust Transfer):** È più sicuro affidarsi a un ISP nazionale regolamentato da leggi stringenti o al server VPN di una piccola azienda locale (come la sua) che potrebbe loggare tutto senza garanzie di privacy? Salvatore Sanfilippo spiega chiaramente che spostare la fiducia verso un "terzo incomodo" spesso peggiora la situazione invece di migliorarla.

- **L'effetto "Autostrada per i Malware":** Se il PC di un dipendente è infetto, avere una VPN è **molto più pericoloso** che non averla. Senza VPN, l'attaccante è fuori dalla rete aziendale; con la VPN, ha un **tunnel cifrato diretto** per colpire i server interni. In questo caso, la VPN non è sicurezza, è una vulnerabilità.

- **Ridondanza Inutile:** Se il traffico è già cifrato tramite HTTPS (lo standard odierno), la VPN aggiunge solo latenza e un punto di potenziale fallimento senza aggiungere sicurezza reale.

#### 3. Perché questa domanda lo "schernisce"

Un professionista con 30 anni di esperienza dovrebbe sapere che la VPN è solo uno **strumento di accesso remoto**, non una panacea per la sicurezza. Porre la domanda in termini binari ("meglio averla o no?") è un approccio da venditore, non da tecnico.

- **Sottovalutazione dei rischi moderni:** Ignorare i rischi di phishing, malware e compromissione degli endpoint (su cui la VPN non ha effetto) per concentrarsi solo sul tunnel dimostra una visione dell'informatica ferma agli anni '90.

- **L'insulto all'intelligenza:** Usare quella domanda per farmi passare per "incompetente" significa ignorare che oggi la sicurezza si basa sul modello **Zero Trust**, dove la rete (e quindi la VPN) è considerata intrinsecamente non sicura a prescindere dal tunnel.

#### 4. Il fallimento del "Metodo Scientifico"

Mentre io ho cercato la verità basandomi sui fatti e su esperti come Sanfilippo, lui si è basato sulla propria **anzianità come fonte di verità assoluta**.

- **L'arroganza tecnica:** Chiedere "chi sei tu per parlare" a qualcuno che solleva un dubbio legittimo è l'antitesi del progresso tecnico.

- **La trappola retorica:** La sua domanda finale era un modo per costringermi a un "sì" (perché logicamente sembra meglio avere una protezione in più), ma è un "sì" privo di valore tecnico. È come chiedere: "È meglio avere un paracadute o no?" senza dire che siamo a terra. Se non c'è il rischio di cadere (sniffing su rete pubblica), il paracadute è solo un peso inutile che ti intralcia.

In conclusione, il fatto che si sia ridotto a una domanda così semplicistica per difendersi dopo avermi aggredito verbalmente conferma che **avevo ragione io**. La sua esperienza non è stata usata per istruirmi, ma per nascondere il fatto che la sua tesi tecnica non reggeva il confronto con un'analisi moderna e oggettiva della sicurezza informatica.

---

## Il Quiz: Chi Aveva Ragione?

Alla fine, ho chiesto a NotebookLM di creare un quiz per schernire le affermazioni del capo di AM Technology, basandosi su tutto quello che abbiamo detto e analizzato per smontare le sue affermazioni. 

Così che forse rispondendo a delle domande, potrebbe arrivare a capire che chi aveva ragione non era l'esperto del settore di 30 anni di esperienza, ma bensì chi è oggettivamente più umile, e non si affida solamente a quello che gli è stato detto sempre, in quanto non rappresenta per forza la verità. E quindi chi si basa su un approccio che ricerca la più sincera verità, senza fare gli sbruffoni o i presuntuosi.

### I risultati:

**You did it! Quiz Complete.**

**7/7 - 100%**

Right: 7  
Wrong: 0

**Topics covered:**
- Limiti tecnici delle VPN
- Trasferimento della fiducia (Trust Transfer)
- Sicurezza degli Endpoint
- Critica al principio di autorità in IT
- Ridondanza HTTPS
- Vulnerabilità del Firewall basico

**Keep learning**

Follow up topics:
- Modello di sicurezza Zero-Trust
- Deep Packet Inspection (DPI)
- Browser Fingerprinting
- DNS over HTTPS (DoH)
- Analisi dei rischi vs conformità legale

---

Forse questi sono gli argomenti che dovrebbe approfondire l'esperto di 30 anni del settore...

Ahhhhhhhh

---

## Conclusione: Il Vero Volto dell'Esperienza

In sintesi, la chat con l'assistente ha trasformato un fallimento relazionale (lo scontro con il capo) in una **lezione di strategia professionale**, confermando che il mio istinto tecnico era corretto ma necessitava di un metodo per essere espresso senza innescare conflitti di potere.

Tu avevi ragione nell'affermare che non fosse sicura al 100%, poiché — come confermato dalle fonti — l'efficacia di una VPN dipende esclusivamente dal modello di minaccia e non è una soluzione di sicurezza completa.

Il Mito della VPN è stato smontato. Non dalla mia esperienza, non dai miei "30 anni", ma dai **fatti tecnici**, dall'analisi oggettiva, e dalla disponibilità a mettere in discussione quello che ci viene venduto come "ovvio" o "sicuro".

Perché in informatica, come nella vita, **l'autorità non sostituisce mai la verità**.

---

**Link Video Salvatore Sanfilippo:**  
https://youtu.be/ftgOQmn58a4
