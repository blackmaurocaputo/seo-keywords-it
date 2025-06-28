
# seo-keywords-it

Estrai facilmente le keyword principali da testi in italiano!  
Questa libreria JavaScript aiuta a individuare le parole chiave più rilevanti per SEO, meta tag, content analysis, e tanto altro.

---

##  Installazione

```bash
npm install seo-keywords-it
```

---

##  Utilizzo Base

```js
const { extractKeywords } = require('seo-keywords-it');

const testo = `
  La libreria seo-keywords-it estrae in modo semplice ed efficace le principali parole chiave dai testi italiani.
  Funziona bene anche per la SEO!
`;

const keywords = extractKeywords(testo);
console.log(keywords); // Output: ['libreria', 'estrae', 'modo', ...]
```

---

##  Opzioni Avanzate

La funzione `extractKeywords` può accettare un secondo parametro oggetto per personalizzare il risultato:

```js
const keywords = extractKeywords(testo, {
  maxKeywords: 10,          // Numero massimo di keyword restituite (default: 8 o 15 in base al testo)
  minWordLength: 5,         // Lunghezza minima delle parole considerate (default: 4)
  extraStopwords: ['modo']  // Stopword aggiuntive da escludere
});
```

---

##  API

### `extractKeywords(text, options)`

- **text** (`string`): Il testo italiano da analizzare.
- **options** (`object`, opzionale):
  - `maxKeywords` (`number`): Numero massimo di parole chiave da restituire.
  - `minWordLength` (`number`): Lunghezza minima delle parole da considerare come keyword.
  - `extraStopwords` (`string[]`): Altre parole da escludere oltre a quelle di default.

**Restituisce:**  
Un array di stringhe con le keyword più rilevanti trovate.

---

##  Esempio Completo

```js
const { extractKeywords } = require('seo-keywords-it');

const testo = "Questo è un testo di esempio per estrarre le keyword più importanti e ottimizzare la SEO.";

const keywords = extractKeywords(testo, {
  maxKeywords: 6,
  minWordLength: 5,
  extraStopwords: ['importanti']
});

console.log(keywords);
// Output atteso: ['testo', 'esempio', 'estrarre', 'keyword', 'ottimizzare', 'seo']
```

---

##  Note Tecniche

- Funziona con Node.js in modalità CommonJS.
- La lista delle stopword italiane si trova in `/src/stopwords-it.js` e può essere personalizzata facilmente.
- La funzione è **modulare** e facilmente integrabile in altri tool di text analysis, scraper o generatori di meta tag.
- Non fa uso di dipendenze esterne.

---

##  Contribuisci

Se vuoi migliorare la libreria, aggiungere nuove funzionalità o estendere la lista delle stopword, apri una issue o una pull request su GitHub!

---

##  Licenza

[MIT](./LICENSE)

---

**Autore:** Mauro Caputo  
GitHub: [https://github.com/maurocaputo/seo-keywords-it](https://github.com/maurocaputo/seo-keywords-it)
