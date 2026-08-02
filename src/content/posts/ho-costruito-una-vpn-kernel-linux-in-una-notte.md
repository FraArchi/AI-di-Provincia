---
title: "Ho costruito una VPN dal kernel Linux in una notte. A 19 anni, senza università."
subtitle: "Quando la pratica batte 30 anni di teoria e scopri che l'esperienza vera si misura in cose funzionanti, non in diplomi."
author: "Francesco Archidiacono"
category: "Ho provato per voi"
published_date: "2026-08-02T18:45:00.000Z"
featured: true
featuredOrder: 2
cover: "../../assets/images/cover-vpn-kernel-linux.png"
excerpt: "Una nottata, un'interfaccia TUN, due PC Arch Linux e la scoperta che costruire sistemi complessi non richiede lauree — richiede la voglia di capire davvero come funzionano le cose."
cta_text: "Vuoi seguire altri esperimenti tecnici dalla provincia? Progetti che nascono dalla curiosità, non dai programmi universitari. Iscriviti alla newsletter."
cta_image: "../../assets/images/ctas/cta-manifesto.png"
---

Ho costruito una VPN in C che comunica direttamente con il kernel Linux. L'ho fatto in una notte, a 19 anni, senza aver frequentato scuole superiori di informatica, senza università, senza corsi. Con l'aiuto di un chatbot e la voglia di capire come funzionano davvero le cose.

Il progetto si chiama [c-tun-vpn](https://github.com/FraArchi/c-tun-vpn) ed è su GitHub. Non è una VPN commerciale. Non ha autenticazione robusta, non ha gestione multi-peer, non ha tutte le feature che servirebbero per usarla davvero in produzione. Ma funziona. Crea un tunnel cifrato tra due macchine, instrada tutto il traffico attraverso un gateway, maschera l'IP esterno. Fa quello che una VPN deve fare.

E soprattutto: l'ho capita. Ogni riga di codice. Ogni comando. Ogni pacchetto che entra ed esce dal kernel.

## Perché l'ho fatto

Sapevo che su Linux esistono modi più semplici per fare una VPN. OpenVPN, WireGuard, strumenti già pronti che funzionano meglio del mio esperimento. Ma non volevo un tool pronto. Volevo mettere le mani sul kernel. Volevo capire cosa succede quando un pacchetto IP entra in un'interfaccia di rete virtuale. Volevo vedere con i miei occhi come Linux gestisce il routing, il NAT, il forwarding. Volevo imparare programmazione a basso livello.

E volevo dimostrare una cosa a me stesso: che non servono lauree, diplomi, anni di università per costruire qualcosa di complesso. Serve curiosità, metodo e la capacità di non arrendersi quando le cose non funzionano al primo tentativo.

## Come funziona (in sintesi tecnica)

L'architettura è questa:

**Host A (Client)** crea un'interfaccia virtuale `tun0` con IP `10.0.0.1`. Intercetta i pacchetti IP generati dal sistema operativo, li cifra in user-space tramite il programma C e li incapsula dentro datagrammi UDP indirizzati alla porta 9000 di Host B.

**Host B (Gateway)** riceve i pacchetti UDP sulla porta 9000, li decifra tramite il proprio programma C e li inietta nella sua interfaccia `tun0` (`10.0.0.2`). Grazie all'abilitazione dell'IPv4 Forwarding e alle regole `iptables` (NAT/MASQUERADE), Host B rigira i pacchetti verso Internet e reinvia la risposta cifrata a Host A.

**Gestione MTU & MSS Clamping:** per evitare che l'incapsulamento UDP/IP frammenti i pacchetti, ho tarato l'MTU dell'interfaccia `tun0` a 1400 byte e applicato il clamping del TCP MSS.

**Automazione:** ho scritto wrapper Bash con gestione dei segnali OS (`trap SIGINT SIGTERM`) per avviare l'infrastruttura ed eseguire la pulizia atomica delle tabelle di routing al momento dello spegnimento.

## La nottata

L'ho fatto in una notte. Ma non è stata una notte tranquilla.

Ci sono stati momenti in cui il `ping` funzionava ma il browser no. Momenti in cui il browser sembrava funzionare ma l'IP che usciva era quello sbagliato. Momenti in cui `tcpdump` mi mostrava pacchetti cifrati sulla scheda Wi-Fi (vittoria!) ma poi il traffico non tornava indietro.

Ho debuggato con `ip route`, `ip a`, `tcpdump`, `traceroute`. Ho controllato ogni tabella di routing, ogni regola di `iptables`, ogni flag del kernel. Ho verificato che il traffico reale fosse davvero cifrato catturando i pacchetti UDP sulla scheda fisica Wi-Fi e controllando che fossero solo payload binario incomprensibile — zero byte in chiaro.

Il momento di orgoglio vero non è stato quando il primo `ping` è andato a buon fine. È stato quando ho aperto il browser, sono andato su un sito che mostra il tuo IP pubblico, e ho visto l'IP del gateway VPN. Non quello del router di casa. Quello della mia VPN. Il tunnel funzionava davvero.

## Il ruolo dell'AI

Ho usato Gemini (solo il chatbot, non tool o agent complessi) per aiutarmi. Gli ho chiesto come funziona `/dev/net/tun`, come si apre un file descriptor in C, come si calcola l'overhead MTU, come si scrivono le regole `iptables` per il NAT.

Non ho copiato e incollato codice a caso. Ho chiesto, ho capito, ho scritto, ho testato. Quando qualcosa non andava, ho debuggato io. Ho configurato io le due macchine fisiche Arch Linux sulla mia rete locale. Ho eseguito io ogni comando. Ho interpretato io ogni errore.

Dopo aver finito il progetto, ho chiesto a ChatGPT e Claude di valutarmi. Gli ho dato il resoconto completo di quello che avevo fatto, di come avevo usato l'AI, di cosa avevo capito e cosa no.

La valutazione che mi hanno dato:

**Punteggio globale: 83/100**

> "La cosa che mi colpisce non è tanto la VPN in sé. Una VPN minimale TUN+UDP è un progetto che si trova anche in tutorial avanzati. La parte interessante è che tu hai deciso di attraversare praticamente tutta la catena: programmazione di sistema in C, interfacce TUN, socket UDP, routing Linux, forwarding, NAT, MTU/MSS, debugging con tcpdump, scripting Bash, packaging del progetto. Molte persone imparano questi argomenti separatamente. Tu li hai dovuti collegare in un sistema funzionante."

E poi:

> "Rispetto a uno studente triennale medio: decisamente sopra. Molti studenti conoscono TCP, UDP e routing a livello teorico, ma non hanno mai creato una TUN né toccato iptables."
>
> "Rispetto a un neolaureato medio: probabilmente sopra la media. Non perché il progetto sia enorme, ma perché è molto 'hands-on'."
>
> "Rispetto a un junior Linux/networking: direi perfettamente compatibile. Se vedessi questo progetto nel portfolio di un candidato junior orientato a sistemi, reti o cybersecurity, non mi stupirebbe affatto."

## Cosa ho imparato davvero

Ho imparato che **l'università insegna teoria, non pratica**. E che ci sono cose che non vengono insegnate affatto, nemmeno nei corsi magistrali di networking o sistemi operativi.

Ho imparato che **l'esperienza vera non si misura in anni ma in cose funzionanti**. Puoi avere 30 anni di esperienza e non aver mai messo mano su Linux. Puoi vendere servizi VPN comprando dashboard preconfigurate su Windows e non aver mai scritto una riga di codice che parla con il kernel.

Ho imparato che **chi esce dall'università spesso si sente superiore a chi ha imparato da solo**, ma la superiorità non esiste se dall'altra parte ci sono progetti concreti e dall'altra solo teoria.

Ho imparato che **l'AI non ti rende pigro se la usi bene**. Ti rende più veloce. Ti permette di concentrarti sui problemi veri invece di perdere ore a cercare documentazione frammentata. Ma non ti salva se non capisci quello che stai facendo. Il debugging l'ho fatto io. La configurazione delle macchine l'ho fatta io. La comprensione del sistema l'ho costruita io.

## Perché lo racconto

Lo racconto perché voglio che qualcuno che legge questo articolo — magari un ragazzo come me, in un paese come il mio, senza accesso a scuole "giuste" o università "importanti" — capisca che **non servono credenziali per costruire cose complesse**. Serve voglia. Serve metodo. Serve la capacità di non mollare quando il browser non funziona, quando il ping fallisce, quando `tcpdump` ti mostra pacchetti che non capisci.

Lo racconto perché esiste un pregiudizio forte nel mondo del lavoro tecnico: chi non ha diplomi o lauree viene trattato come se non avesse diritto di parlare. Come se l'esperienza si misurasse solo in anni o titoli, non in comprensione reale.

Ho visto persone che vendono servizi tecnici senza mai aver toccato il codice che c'è sotto. Ho visto esperti che lavorano su dashboard preconfigurate senza sapere cosa succede quando premi un bottone. Ho visto l'anzianità usata come argomento per chiudere discussioni invece di aprirle.

Non dico che i miei progetti valgano più della loro esperienza. Dico che **l'esperienza senza comprensione non è esperienza — è solo tempo passato**. E che il tempo passato non ti dà automaticamente il diritto di trattare chi impara come se non contasse niente.

## Cosa manca al progetto (e lo so)

Non è una VPN pronta per la produzione. Mancano:

- Autenticazione robusta dei peer
- Gestione delle chiavi sicura
- Replay protection
- AEAD (Authenticated Encryption with Associated Data)
- Supporto multi-client
- Supporto IPv6
- Resilienza e hardening

Lo so. E se qualcuno mi chiedesse "sei pronto a implementare queste feature?", la risposta onesta è: non ancora. Ma so da dove cominciare. So quali problemi affronterei. So come cercare le soluzioni.

E questa differenza — tra chi sa che non sa e chi pensa di sapere tutto — è l'unica esperienza che conta davvero.

---

**Link al progetto:** [c-tun-vpn su GitHub](https://github.com/FraArchi/c-tun-vpn)

**Valutazione tecnica completa:** disponibile nella repo, cartella `docs/`.
