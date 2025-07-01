const { stopWords } = require("./stopwords-it");
const { stopWordsEn } = require("./stopwords-en");

/**
 * Estrae le keyword principali da un testo in italiano.
 * @param {string} text - Testo da analizzare.
 * @param {object} [options] - Opzioni extra:
 *    - maxKeywords: il massimo numero di parole da restituire
 *    - extraStopwords: array di ulteriori parole da escludere
 *    - minWordLength: lunghezza minima delle parole da considerare come keyword
 * @param {string} [language="it"] - Lingua del testo ("it" per italiano, "en" per inglese).
 *    Se non specificato di default è italiano.
 * @returns {string[]} - Lista di keyword ordinate per rilevanza.
 */
function extractKeywords(text, options = {}, language = "it") {
  if (!text) return [];

  // Destrutturiamo le opzioni, con valori di default
  const { maxKeywords, extraStopwords = [], minWordLength = 4 } = options;

  let stopWordsMerged;
  switch (language) {
    case "it":
      stopWordsMerged = new Set([...stopWords, ...extraStopwords]);
      /* console.log("usiamo la lingua italiana"); */
      break;
    case "en":
      stopWordsMerged = new Set([...stopWordsEn, ...extraStopwords]);
      /* console.log("usiamo la lingua inglese"); */
      break;
    default:
      stopWordsMerged = new Set([...stopWords, ...extraStopwords]);
      /* console.log("lingua non riconosciuta, usiamo la lingua italiana"); */
  }

  // Unisce le stopword di default con eventuali aggiuntive dell'utente

  // Normalizza il testo: tutto minuscolo, senza accenti né punteggiatura, suddiviso in parole
  const normalizedText = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Rimuove accenti
    .replace(/[^\w\s]/g, "") // Rimuove punteggiatura
    .split(/\s+/); // Tokenizza per spazi

  // Filtra: elimina stopword e parole più corte del minimo
  const filteredWords = normalizedText.filter(
    (word) => !stopWordsMerged.has(word) && word.length >= minWordLength
  );

  // Conta la frequenza delle parole rimaste
  const wordCount = filteredWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Determina il massimo numero di keyword da restituire (default dinamico)
  const totalWords = filteredWords.length;
  const nKeywords = maxKeywords ?? (totalWords > 250 ? 15 : 8);

  // Ordina le parole per frequenza e seleziona le migliori
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, nKeywords)
    .map(([word]) => word);
}

module.exports = { extractKeywords };
