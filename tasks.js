/* =========================================================
   CONTENUTI DEI TASK — è l'unico file da modificare.
   Lo leggono sia task-overlay.html sia task-tabs.html, quindi
   i testi si scrivono una volta sola e valgono per entrambe
   le varianti.

   url        → indirizzo dell'ambiente di test per quel task
   counter    → indicatore di avanzamento mostrato in alto
   title      → titolo del task
   scenario   → il riquadro grigio con la situazione di partenza
   activities → una voce per ogni ATTIVITÀ; dentro il testo si può
                usare <strong>…</strong> per i grassetti

   ⚠️ Se il repository è pubblico, tutto quello che scrivi qui è
   pubblico: indirizzi interni e testi riservati vanno tenuti in un
   repository privato o inseriti solo al momento del test.
   ========================================================= */

const TASKS = {
  1: {
    url: "https://esempio.it/ambiente-di-test/pagina-a",
    counter: "1/4",
    title: "Task 1",
    scenario: "Hai bisogno di recuperare un documento relativo a [Nome Cognome]. Sai che si tratta di un [tipo documento], relativo al [mese/anno o data], associato alla banca [nome banca].",
    activities: [
      "Utilizzando le informazioni a tua disposizione, individua il documento corretto. Verifica tutte le informazioni disponibili per assicurarti che sia quello che stai cercando e, una volta verificato, scaricalo."
    ]
  },

  2: {
    url: "https://esempio.it/ambiente-di-test/pagina-b",
    counter: "2/4",
    title: "Task 2",
    scenario: "Scrivi qui lo scenario del task 2.",
    activities: [
      "Scrivi qui l'attività 1.",
      "Scrivi qui l'attività 2."
    ]
  },

  3: {
    url: "https://esempio.it/ambiente-di-test/pagina-a",
    counter: "3/4",
    title: "Task 3",
    scenario: "Scrivi qui lo scenario del task 3.",
    activities: [
      "Scrivi qui l'attività 1."
    ]
  },

  4: {
    url: "https://esempio.it/ambiente-di-test/pagina-b",
    counter: "4/4",
    title: "Task 4",
    scenario: "Scrivi qui lo scenario del task 4.",
    activities: [
      "Scrivi qui l'attività 1."
    ]
  }
};

/* PROVA — questo indirizzo sostituisce quello di tutti i task, così
   si può vedere il comportamento dell'overlay sopra un sito vero.
   Rimetti la stringa vuota prima del test con i partecipanti. */
const OVERRIDE_URL = "https://www.openstreetmap.org/export/embed.html?bbox=9.15,45.44,9.22,45.49";
