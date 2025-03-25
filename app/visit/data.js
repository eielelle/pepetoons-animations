import EuropeCity1 from "../../assets/visit/europe/Madrid Spain.png";
import EuropeCity2 from "../../assets/visit/europe/Paris France.png";
import EuropeCity3 from "../../assets/visit/europe/Heidelberg Germany.png";
import EuropeCity4 from "../../assets/visit/europe/Berlin Germany.png";
import EuropeCity5 from "../../assets/visit/europe/London England.jpg";
import EuropeCity6 from "../../assets/visit/europe/Brussels Belgium.png";
import AsiaCity1 from "../../assets/visit/asia-city.jpg";
import AsiaCity2 from "../../assets/visit/asia-city2.jpg";
import AsiaCity3 from "../../assets/visit/asia-city3.jpg";
import AsiaCity4 from "../../assets/visit/asia-city4.jpg";
import AsiaCity5 from "../../assets/visit/asia-city5.jpg";
import AsiaCity6 from "../../assets/visit/asia-city6.jpg";

export const data = [
  {
    title: "Europe",
    cover: EuropeCity1,
    description:
      "José Rizal traveled extensively across Europe, immersing himself in its culture, politics, and intellectual circles. He lived in Spain, where he studied at the Universidad Central de Madrid, and later moved to France, Germany, Belgium, and the United Kingdom. During his stay, he honed his skills in medicine, engaged with reformists, and wrote his influential novels Noli Me Tangere and El Filibusterismo. His European journey broadened his perspective on nationalism and social justice, shaping his vision for Philippine independence.",
    slides: [
      EuropeCity2,
      EuropeCity3,
      EuropeCity4,
      EuropeCity5,
      EuropeCity6,
      EuropeCity2,
    ],
    url: "europe",
  },
  {
    title: "Asia",
    cover: AsiaCity1,
    description:
      "José Rizal traveled extensively across Asia, immersing himself in its cultures and histories while advocating for reform in the Philippines. In 1888, he visited Japan, where he was captivated by the country's discipline, cleanliness, and progress, even forming a brief but meaningful relationship with a Japanese woman named Seiko Usui. He then journeyed to Hong Kong, where he worked as an ophthalmologist and connected with other Filipino expatriates. His travels also took him to British-controlled Singapore, where he observed colonial rule, further shaping his nationalist ideals. Throughout his journeys, Rizal documented his experiences, drawing comparisons between Asian nations and the Philippines, strengthening his resolve to fight for his homeland's independence.",
    slides: [AsiaCity2, AsiaCity3, AsiaCity4, AsiaCity5, AsiaCity6, AsiaCity2],
    url: "asia",
  },
];
