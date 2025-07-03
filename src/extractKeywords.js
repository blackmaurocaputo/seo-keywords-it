const { stopWords } = require("./stopwords-it");
const { stopWordsEn } = require("./stopwords-en");

/**
 * Estrae le keyword principali da un testo in italiano o inglese, ottimizzato per SEO.
 * @param {string} text - Testo da analizzare.
 * @param {object} [options] - Opzioni extra:
 *    - maxKeywords: il massimo numero di parole da restituire
 *    - extraStopwords: array di ulteriori parole da escludere
 *    - minWordLength: lunghezza minima delle parole da considerare come keyword
 * @param {string} [language="it"] - Lingua del testo ("it" per italiano, "en" per inglese).
 * @returns {Array<{word: string, freq: number}>} - Lista di keyword ordinate per rilevanza.
 */
function extractKeywords(text, options = {}, language = "it") {
  if (!text) return [];

  // Opzioni con valori di default
  const { maxKeywords, extraStopwords = [], minWordLength = 4 } = options;

  // Unione stopword base + extra
  let stopWordsMerged;
  switch (language) {
    case "it":
      stopWordsMerged = new Set([...stopWords, ...extraStopwords]);
      break;
    case "en":
      stopWordsMerged = new Set([...stopWordsEn, ...extraStopwords]);
      break;
    default:
      stopWordsMerged = new Set([...stopWords, ...extraStopwords]);
  }

  // Normalizza il testo: minuscolo, senza accenti, senza punteggiatura
  const normalizedText = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Rimuove accenti
    .replace(/[^\w\s]/g, "") // Rimuove punteggiatura
    .split(/\s+/); // Tokenizza per spazi

  // Filtra: elimina stopword e parole troppo corte
  const filteredWords = normalizedText.filter(
    (word) => !stopWordsMerged.has(word) && word.length >= minWordLength
  );

  // Conta la frequenza delle parole rimaste
  const wordCount = filteredWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Estrai bigrammi (coppie di parole significative)
  const bigrams = [];
  for (let i = 0; i < filteredWords.length - 1; i++) {
    // Escludi bigrammi con parole troppo comuni o troppo corte
    if (
      !stopWordsMerged.has(filteredWords[i]) &&
      !stopWordsMerged.has(filteredWords[i + 1]) &&
      filteredWords[i].length >= minWordLength &&
      filteredWords[i + 1].length >= minWordLength
    ) {
      bigrams.push(filteredWords[i] + " " + filteredWords[i + 1]);
    }
  }

  const bigramCount = bigrams.reduce((acc, phrase) => {
    acc[phrase] = (acc[phrase] || 0) + 1;
    return acc;
  }, {});

  // Unisci parole singole e bigrammi
  const allKeywords = [
    ...Object.entries(wordCount),
    ...Object.entries(bigramCount),
  ];

  // Ordina per frequenza (desc), poi per lunghezza (desc)
  allKeywords.sort((a, b) => b[1] - a[1] || b[0].length - a[0].length);

  // Restituisci solo le migliori
  const totalWords = filteredWords.length;
  const nKeywords = maxKeywords ?? (totalWords > 250 ? 15 : 8);

  return allKeywords
    .slice(0, nKeywords)
    .map(([word, freq]) => ({ word, freq }));
}

module.exports = { extractKeywords };
