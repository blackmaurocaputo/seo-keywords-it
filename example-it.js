const { extractKeywords } = require("./index");

const testo = `Negli ultimi anni, il rapido progresso della tecnologia ha avuto un impatto profondo su quasi ogni aspetto della vita umana. Dalla comunicazione ai trasporti, dalla sanità all’istruzione, le innovazioni digitali hanno trasformato società ed economie su scala globale. Tuttavia, con l’accelerazione della crescita tecnologica, aumentano anche le sfide ambientali associate al maggiore consumo di energia, all’esaurimento delle risorse e alla produzione di rifiuti elettronici. È proprio in questo contesto che entra in gioco il concetto di tecnologia sostenibile.
La tecnologia sostenibile, spesso chiamata anche tecnologia verde, mira a creare e implementare soluzioni che siano rispettose dell’ambiente, efficienti nell’uso delle risorse e socialmente responsabili. L’obiettivo principale è ridurre al minimo l’impatto negativo delle attività umane sull’ambiente, promuovendo al contempo la crescita economica e il miglioramento della qualità della vita. Questo approccio combina l’innovazione tecnologica con pratiche sostenibili per garantire benefici duraturi sia per le persone che per il pianeta.
Uno dei settori più significativi della tecnologia sostenibile è quello delle energie rinnovabili. A differenza dei combustibili fossili, che sono risorse finite e contribuiscono all’inquinamento e ai cambiamenti climatici, le fonti rinnovabili come il solare, l’eolico e l’idroelettrico offrono alternative pulite e abbondanti. I pannelli solari, ad esempio, convertono direttamente la luce del sole in elettricità, riducendo la dipendenza dalle risorse non rinnovabili e abbassando le emissioni di gas serra. Le turbine eoliche sfruttano la forza naturale del vento per generare energia elettrica senza emettere sostanze inquinanti. L’energia idroelettrica utilizza la forza dell’acqua in movimento per produrre elettricità in modo sostenibile e rinnovabile.
Un altro aspetto cruciale della tecnologia sostenibile è l’efficienza energetica. Il design innovativo e l’ingegneria intelligente hanno portato allo sviluppo di dispositivi e sistemi a basso consumo. Illuminazione LED, elettrodomestici ad alta efficienza e sistemi domotici intelligenti sono solo alcuni esempi di come la tecnologia possa aiutare a ridurre i consumi nelle case e nelle aziende. Questi progressi non solo fanno risparmiare denaro ai consumatori, ma contribuiscono anche a ridurre la domanda complessiva di energia, diminuendo ulteriormente l’impatto ambientale.
I rifiuti elettronici, o e-waste, rappresentano un altro problema urgente che la tecnologia sostenibile cerca di affrontare. Il crescente numero di dispositivi elettronici dismessi, come smartphone, computer e televisori, costituisce una minaccia ambientale a causa dei materiali pericolosi e delle limitate possibilità di riciclo. Per contrastare il fenomeno, i produttori adottano sempre più spesso design ecologici che privilegiano la riciclabilità e l’utilizzo di materiali non tossici. Inoltre, la promozione di programmi di riparazione, riutilizzo e riciclo contribuisce ad allungare la vita dei prodotti elettronici e a ridurre la quantità di rifiuti destinati alle discariche.
La tecnologia sostenibile sta apportando cambiamenti anche in agricoltura e produzione alimentare. L’agricoltura di precisione, tramite sensori avanzati, GPS e analisi dei dati, ottimizza semina, irrigazione e raccolta. Ciò si traduce in rese più elevate, minore consumo d’acqua e minor utilizzo di fertilizzanti e pesticidi chimici. Tecniche innovative come vertical farming e idroponica permettono di coltivare cibo in ambienti chiusi con pochissimo terreno e acqua, offrendo soluzioni sostenibili per le aree urbane.
L’importanza della tecnologia sostenibile non può essere sottovalutata. Con la crescita della popolazione mondiale e la progressiva scarsità delle risorse, adottare pratiche e tecnologie sostenibili è essenziale per preservare l’ambiente e garantire un futuro migliore. Governi, aziende e cittadini hanno tutti un ruolo fondamentale nel sostenere la transizione verso un mondo più sostenibile.Investendo in ricerca e sviluppo, attuando politiche verdi e compiendo scelte consapevoli nella vita quotidiana, la società può sfruttare la potenza della tecnologia per affrontare le sfide ambientali e promuovere uno sviluppo sostenibile per le generazioni future`;

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
