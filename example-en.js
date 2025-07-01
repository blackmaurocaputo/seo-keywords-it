const { extractKeywords } = require("./index");

const testo = `
In recent years, the rapid advancement of technology has profoundly impacted nearly every aspect of human life. From communication and transportation to healthcare and education, digital innovations have transformed societies and economies on a global scale. However, as technological growth accelerates, so do the environmental challenges associated with increased energy consumption, resource depletion, and electronic waste. This is where the concept of sustainable technology comes into play.
Sustainable technology, often referred to as green technology, aims to create and implement solutions that are environmentally friendly, resource-efficient, and socially responsible. The primary goal is to minimize the negative impact of human activity on the environment while still promoting economic growth and improving quality of life. This approach combines technological innovation with sustainable practices to ensure long-term benefits for both people and the planet.
One of the most significant areas of sustainable technology is renewable energy. Unlike fossil fuels, which are finite and contribute to pollution and climate change, renewable energy sources such as solar, wind, and hydropower offer clean, abundant alternatives. Solar panels, for example, convert sunlight directly into electricity, reducing reliance on nonrenewable resources and lowering greenhouse gas emissions. Wind turbines harness the natural power of wind to generate electricity without emitting harmful pollutants. Hydroelectric power utilizes the energy of flowing water to produce electricity in a sustainable and renewable manner.
Another crucial aspect of sustainable technology is energy efficiency. Innovative design and smart engineering have led to the development of energy-saving devices and systems. LED lighting, energy-efficient appliances, and smart home systems are just a few examples of how technology can help reduce energy consumption in homes and businesses. These advances not only save money for consumers but also play a vital role in decreasing overall demand for electricity, further reducing environmental impact.
Electronic waste, or e-waste, is another pressing issue that sustainable technology seeks to address. The growing number of discarded electronic devices, such as smartphones, computers, and televisions, poses a significant environmental threat due to hazardous materials and limited recycling options. To combat this, manufacturers are increasingly adopting eco-friendly designs that prioritize recyclability and the use of non-toxic materials. Additionally, the promotion of repair, reuse, and recycling programs helps extend the life of electronic products and reduces the volume of waste sent to landfills.
Sustainable technology is also making a difference in agriculture and food production. Precision agriculture uses advanced sensors, GPS, and data analytics to optimize planting, irrigation, and harvesting processes. This results in higher crop yields, reduced water usage, and lower reliance on chemical fertilizers and pesticides. Vertical farming and hydroponics are innovative techniques that enable food to be grown indoors using minimal land and water, offering a sustainable solution for urban environments.
The importance of sustainable technology cannot be overstated. As the global population continues to grow and resources become scarcer, adopting sustainable practices and technologies is essential for preserving the environment and ensuring a better future. Governments, businesses, and individuals all have a role to play in supporting the transition to a more sustainable world.
By investing in research and development, implementing green policies, and making conscious choices in daily life, society can harness the power of technology to address environmental challenges and promote sustainable development for generations to come.
`;

console.log(
  "\n il testo che abbiamo preso in esame è il seguente: \n\n",
  testo
);

const keywords = extractKeywords(testo, {}, "en");

console.log(
  "\n questo è il risultato delle keyword trovate, ragionate per peso, frequenza ecc è utile: ",
  keywords
);

console.log(
  "\n Questa libreria può essere utile per recuperare le keyword in maniera dinamica da un DB in situazioni come articoli ecommerce per settare le meta keywords in maniera dinamica"
);
