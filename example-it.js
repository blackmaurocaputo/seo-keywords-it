const { extractKeywords } = require("./index");

const testo = `La libreria seo-keywords-it estrae in modo semplice ed efficace le principali parole chiave dai testi italiani.
  Funziona bene anche per la SEO!`;

const words = [];

testo.split(" ").forEach((word) => {
  words.push(word);
});

console.log(" il testo che abbiamo preso in esame è il seguente: ", testo);

console.log("\n conteggio parole del testo: \n\n", words.length);

const keywords = extractKeywords(testo);

console.log(
  "\n questo è il risultato delle keyword trovate, ragionate per peso, frequenza ecc è utile: ",
  keywords
);

console.log(
  "\n Questa libreria può essere utile per recuperare le keyword in maniera dinamica da un DB in situazioni come articoli ecommerce per settare le meta keywords in maniera dinamica"
);

const metaKwyeords = keywords.map((k) => k.word).join(", ");
console.log("\n meta keywords: ", metaKwyeords);
