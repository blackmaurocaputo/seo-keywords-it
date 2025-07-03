[![npm version](https://img.shields.io/npm/v/seo-keywords-it.svg)](https://www.npmjs.com/package/seo-keywords-it)

# seo-keywords-it

Estrai facilmente le keyword principali da testi in italiano (e inglese)!  
Questa libreria JavaScript aiuta a individuare le parole chiave più rilevanti per SEO, meta tag, content analysis, e tanto altro.

---

## ✨ Caratteristiche

- Estrae automaticamente le keyword principali da testi in italiano e inglese
- Supporta personalizzazione di stopword e lunghezza minima
- Estrae anche frasi chiave (bigrammi) oltre alle singole parole
- Ordina le keyword per frequenza e lunghezza, ottimizzato per SEO
- Nessuna dipendenza esterna
- Modulare e facile da integrare

## UPDATE MULTI-LINGUA

- Puoi settare la lingua nella funzione come parametro
- Supporta attualmente "it" e "en"

---

## ⚙️ Requisiti

- Node.js >= 12

---

## Installazione

```bash
npm install seo-keywords-it
```

---

## Utilizzo Base

```js
const { extractKeywords } = require("seo-keywords-it");

const testo = `
  La libreria seo-keywords-it estrae in modo semplice ed efficace le principali parole chiave dai testi italiani.
  Funziona bene anche per la SEO!
`;

const keywords = extractKeywords(testo);
console.log(keywords);
// Output: [
//   { word: 'libreria', freq: 1 },
//   { word: 'seo', freq: 1 },
//   { word: 'parole chiave', freq: 1 },
//   ...
// ]
```

---

## Opzioni Avanzate

La funzione `extractKeywords` può accettare un secondo parametro oggetto per personalizzare il risultato:

```js
const keywords = extractKeywords(testo, {
  maxKeywords: 10, // Numero massimo di keyword restituite (default: 8 o 15 in base al testo)
  minWordLength: 5, // Lunghezza minima delle parole considerate (default: 4)
  extraStopwords: ["modo"], // Stopword aggiuntive da escludere
});
```

ed un terzo parametro, default di base 'it' se non specificato.

```js
const keywords = extractKeywords(
  testo,
  {
    maxKeywords: 10, // Numero massimo di keyword restituite (default: 8 o 15 in base al testo)
    minWordLength: 5, // Lunghezza minima delle parole considerate (default: 4)
    extraStopwords: ["modo"], // Stopword aggiuntive da escludere
  },
  "en" // cambio lingua stopwords
);
```

---

## Output

La funzione restituisce un array di oggetti con la parola/frase chiave e la sua frequenza di apparizione:

```js
[
  { word: 'digitali', freq: 3 },
  { word: 'strumenti digitali', freq: 2 },
  { word: 'software su', freq: 2 }
]
```

Le keyword possono essere sia parole singole che frasi (bigrammi), ordinate per frequenza e lunghezza, per massimizzare la rilevanza SEO.

---

### Come ottenere una stringa per il meta tag keywords

```js
const metaKeywords = keywords.map(k => k.word).join(', ');
// metaKeywords: "digitali, strumenti digitali, software su"
```

---

## API

### `extractKeywords(text, options, language)`

- **text** (`string`): Il testo da analizzare.
- **options** (`object`, opzionale):
  - `maxKeywords` (`number`): Numero massimo di parole chiave da restituire.
  - `minWordLength` (`number`): Lunghezza minima delle parole da considerare come keyword.
  - `extraStopwords` (`string[]`): Altre parole da escludere oltre a quelle di default.
- **language** (`string`, opzionale): "it" (default) o "en".

**Restituisce:**  
Un array di oggetti `{ word, freq }` con le keyword/frasi più rilevanti trovate.

---

## Esempio Completo

```js
const { extractKeywords } = require("seo-keywords-it");

const testo =
  "Questo è un testo di esempio per estrarre le keyword più importanti e ottimizzare la SEO.";

const keywords = extractKeywords(testo, {
  maxKeywords: 6,
  minWordLength: 5,
  extraStopwords: ["importanti"],
});
// Default lingua Italiano "it"

console.log(keywords);
// Output atteso: [
//   { word: 'esempio', freq: 1 },
//   { word: 'estrarre', freq: 1 },
//   { word: 'keyword', freq: 1 },
//   { word: 'ottimizzare', freq: 1 },
//   { word: 'testo esempio', freq: 1 },
//   { word: 'keyword ottimizzare', freq: 1 }
// ]
```

---

## Note Tecniche

- Funziona con Node.js in modalità CommonJS.
- La lista delle stopword italiane si trova in `/src/stopwords-it.js` e può essere personalizzata facilmente.
- La lista delle stopword inglesi si trova in `/src/stopwords-en.js` e può essere personalizzata facilmente.
- La funzione è **modulare** e facilmente integrabile in altri tool di text analysis, scraper o generatori di meta tag.
- Non fa uso di dipendenze esterne.

---

## Contribuisci

Se vuoi migliorare la libreria, aggiungere nuove funzionalità o estendere la lista delle stopword, apri una issue o una pull request su GitHub!

---

## Licenza

[MIT](./LICENSE)

---

**Autore:** Mauro Caputo  
GitHub: [https://github.com/blackmaurocaputo/seo-keywords-it](https://github.com/blackmaurocaputo/seo-keywords-it)

**Problemi:** Apri una segnalazione  
GitHub: [https://github.com/blackmaurocaputo/seo-keywords-it/issues](https://github.com/blackmaurocaputo/seo-keywords-it/issues)

**Modifiche:** Chiedi una modifica  
GitHub: [https://github.com/blackmaurocaputo/seo-keywords-it/pulls](https://github.com/blackmaurocaputo/seo-keywords-it/pulls)