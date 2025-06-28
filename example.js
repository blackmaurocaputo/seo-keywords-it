const { extractKeywords } = require("./index");

const testo =
  "Questo è un esempio di testo italiano per l'estrazione automatica delle keyword principali. Vediamo come funziona la libreria.";

console.log(
  "\n il testo che abbiamo preso in esame è il seguente: \n\n",
  testo
);

const keywords = extractKeywords(testo);

console.log(
  "\n questo è il risultato delle keyword trovate, ragionate per peso, frequenza ecc è utile: ",
  keywords
);

console.log(
  "\n Questa libreria può essere utile per recuperare le keyword in maniera dinamica da un DB in situazioni come articoli ecommerce per settare le meta keywords in maniera dinamica"
);
