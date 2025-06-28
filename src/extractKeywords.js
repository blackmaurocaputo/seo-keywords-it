const { stopWords } = require("./stopwords-it");

/**
 * Estrae le keyword principali da un testo in italiano.
 * @param {string} text - Testo da analizzare.
 * @param {object} [options] - Opzioni extra:
 *    - maxKeywords: il massimo numero di parole da restituire
 *    - extraStopwords: array di ulteriori parole da escludere
 *    - minWordLength: lunghezza minima delle parole da considerare come keyword
 * @returns {string[]} - Lista di keyword ordinate per rilevanza.
 */
function extractKeywords(text, options = {}) {
  if (!text) return [];

  // Destrutturiamo le opzioni, con valori di default
  const { maxKeywords, extraStopwords = [], minWordLength = 4 } = options;

  // Unisce le stopword di default con eventuali aggiuntive dell'utente
  const stopWordsMerged = new Set([...stopWords, ...extraStopwords]);

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
