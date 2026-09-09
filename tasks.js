/* CONTENUTI DEI TASK — è l'unico file da modificare.
   Lo legge task-tabs.html.
   url / counter / title / scenario / activities / survey.

   Nel testo si può usare:
   <strong>…</strong>            grassetto
   <span class="caps">…</span>   maiuscolo (per le voci che sul sito
                                 compaiono in maiuscolo: Password, Utente…)

   activities accetta una sola attività o un elenco: con una sola
   l'etichetta resta "ATTIVITÀ", con due o più vengono numerate. */

const TASKS = {
  1: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "1/5",
    title: "Task 1",
    scenario: "Hai bisogno di recuperare un documento relativo a <strong>[Nome Cognome]</strong>. Sai che si tratta di un [tipo documento], relativo al [mese/anno o data], associato alla banca [nome banca].",
    activities: [
      "Utilizzando le informazioni a tua disposizione, individua il documento corretto. Verifica tutte le informazioni disponibili per assicurarti che sia quello che stai cercando e, una volta verificato, scaricalo."
    ],
    survey: "https://forms.cloud.microsoft/e/46FhCns6AY"
  },

  2: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "2/5",
    title: "Task 2",
    scenario: "Hai ricevuto le credenziali di accesso al portale e devi entrare per la prima volta.",
    activities: [
      "Accedi al portale inserendo il tuo <span class=\"caps\">Utente</span> e la <span class=\"caps\">Password</span> che ti sono stati consegnati.",
      "Al primo accesso il portale ti chiede di cambiare la <span class=\"caps\">Password</span>: impostane una nuova e completa l'operazione."
    ],
    survey: "https://forms.cloud.microsoft/e/i8eAnHBmTg"
  },

  3: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "3/5",
    title: "Task 3",
    scenario: "Scrivi qui lo scenario del task 3.",
    activities: [
      "Scrivi qui l'attività 1."
    ],
    survey: "https://forms.cloud.microsoft/e/30K5b4qWCP"
  },

  4: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "4/5",
    title: "Task 4",
    scenario: "Scrivi qui lo scenario del task 4.",
    activities: [
      "Scrivi qui l'attività 1.",
      "Scrivi qui l'attività 2."
    ],
    survey: "https://forms.cloud.microsoft/e/pdeR53xbKp"
  },

  5: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "5/5",
    title: "Task 5",
    scenario: "Scrivi qui lo scenario del task 5.",
    activities: [
      "Scrivi qui l'attività 1."
    ],
    survey: "https://forms.cloud.microsoft/e/1sAWSLnxJN"
  }
};

/* QUESTIONARIO — fallback se un task non ha la voce survey.
   Si apre in una scheda accanto quando si apre un task.
   Stringa vuota per non aprire nessun questionario. */
const QUESTIONARIO_URL = "";

/* PROVA — sostituisce l'indirizzo di tutti i task.
   Rimetti la stringa vuota prima del test con i partecipanti. */
const OVERRIDE_URL = "";
