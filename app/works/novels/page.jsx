import React from "react";
import Image from "next/image";
import NoliMeTangere from "../../../assets/worksassets/novels/noli-me-tangere.jpg";
import ElFili from "../../../assets/worksassets/novels/el-filibusterismo.jpg";
import Makamisa from "../../../assets/worksassets/novels/makamisa.jpg";
import Farewell from "../../../assets/worksassets/novels/farewell.png";
import LaEducacion from "../../../assets/worksassets/novels/farewell.png";
import Kababata from "../../../assets/worksassets/novels/kababata.jpg";
import MiUltimoAdios from "../../../assets/worksassets/novels/Mi Ultimo Adios.jpg";
import Town from "../../../assets/worksassets/novels/A Tribute To My Town.webp";
import Felicitation from "../../../assets/worksassets/novels/felicitation.jpg";
import FlowerAmongFlowers from "../../../assets/worksassets/novels/flower among flowers.jpg";
import GoodbyeToLeonor from "../../../assets/worksassets/novels/Goodbye to Leonor.jpg";
import Labor from "../../../assets/worksassets/novels/labor.webp";
import Talisay from "../../../assets/worksassets/novels/talisay.png";
import Kundiman from "../../../assets/worksassets/novels/kundiman.webp";
import MiRetiro from "../../../assets/worksassets/novels/Mi Retiro.png";
import Wanderer from "../../../assets/worksassets/novels/wanderer.webp";
import Jesus from "../../../assets/worksassets/novels/jesus.webp";
import VirginMary from "../../../assets/worksassets/novels/VirginMary.webp";
import FireWater from "../../../assets/worksassets/novels/firewater.webp";
import Verses from "../../../assets/worksassets/novels/verses.jpg";
import ParticleBg from "./ParticleBg";

export default function NovelsContent() {
  const Works = [
    {
      name: "Noli Me Tangere",
      years: "1887",
      description:
        "Jose Rizal our national hero wrote a book. In Filipino the title Noli Me Tangere means Touch Me Not or Huwag Mo Akong Salingin. What the Filipino people were going through at the time is reflected in the novel. He wrote it to make the Filipino people aware of the fact that the friars were accusing mistreating and oppressing them. ",
      image: NoliMeTangere,
    },
    {
      name: "El Filibusterismo",
      years: "1891",
      description:
        "This book which translates to The Reign of the Greed was written by our national hero and is Jose Rizals second book. In order to expose the moral decay of Spanish officials in the Philippines Rizal portrayed a filibuster or rebel who is himself. His propaganda novel Noli me Tangere was followed by El Filibusterismo. The book was dedicated to the memory of the Gomburza three priests who were charged with seditious immoral and illiterate behavior. ",
      image: ElFili,
    },
    {
      name: "Makamisa",
      years: "1892",
      description:
        "Makamisa is an important if unfinished work by José Rizal the national hero of the Philippines. This unfinished novel which was found in 1987 by historian Ambeth Ocampo among Rizals papers at the National Library offers more information about Rizals writing style and his critical viewpoint on Philippine society during the Spanish colonial era. Although it was never finished Rizal started writing the manuscript in Spanish after it had been first drafted in pure Tagalog. The current fragment mainly concentrates on the actions of Padre Agaton the town curate and other townspeople exploring the curates enigmatic bad temper and carrying on Rizals tradition of criticizing the friars and the social norms of the time. Because of this Makamisa is a significant contribution to Rizals body of work giving academics and historians a better grasp of his opinions as well as an insight into the Tagalog language of the time. ",
      image: Makamisa,
    },
  ];

  const Poems = [
    {
      name: "Farewell to 1883",
      years: "1883",
      description:
        "José Rizals Farewell to 1883 captures the essence of his time in Madrid among his fellow Filipino students and serves as both a reflection and a look ahead. In this essay Rizal thanks the year that has gone by recognizing the connections made and the intellectual development attained. He honors his peers contributions recognizing their skills in a range of disciplines and the spirit of unity that characterized their time together. Rizal remains hopeful predicting a brilliant and glorious 1884 despite acknowledging the setbacks and difficulties encountered such as the disintegration of the Hispano-Filipino Circle. He hopes that his countrymen will be acknowledged as deserving sons of their motherland and highlights the growing potential of his fellow citizens anticipating their future achievements in the arts sciences and oratory. ",
      image: Farewell,
    },
    {
      name: "Por la Educación Recibe Lustre la Patria",
      years: "1876",
      description:
        "meaning (Through Education Is the Nation Glorified) rizal wrote this poem to highlight the importance of education the the country and to the citizen",
      image: LaEducacion,
    },
    {
      name: "Sa Aking Mga Kababata",
      years: "1906",
      description:
        "At the age of eight Rizal penned Sa Aking Mga Kababata in Tagalog. Our Mother Tongue is an English translation of this poem. The poem To My Childhood Companions which is more like the Tagalog original was translated by Nick Joaquin one of the most well-known translators of Rizals writings. ",
      image: Kababata,
    },
    {
      name: "Mi último adiós",
      years: "1896",
      description:
        "is José Rizal's final poem, written on the eve of his execution in 1896. It's a poignant and deeply moving piece that expresses his love for his country, his acceptance of his fate, and his unwavering belief in the Philippines' future. The poem is filled with patriotism, longing for his homeland, and a sense of peace as he faces death. Rizal bids farewell to his beloved Philippines, his family, and his friends, and he expresses his desire to be remembered as someone who sacrificed his life for his country. He hopes that his death will contribute to the awakening of his nation and the achievement of its independence. The poem is a testament to Rizal's profound love for the Philippines and his enduring legacy as a national hero.",
      image: MiUltimoAdios,
    },
    {
      name: "Un Recuerdo A Mi Pueblo",
      years: "1876",
      description:
        "In this nostalgic poem, Jose Rizal remembers his childhood days in Calamba, Laguna. Rizal had the happiest and most beautiful memories of the place, the hospitality and friendliness as well as the industry of the people of Calamba. Those memories were influential in molding his character and his values.",
      image: Town,
    },
    {
      name: "Filicitation",
      years: "1875",
      description:
        "The Spanish poem Felicitation by Rizal has been translated into English. During his time at the Ateneo he composed numerous poems this one among them. ",
      image: Felicitation,
    },
    {
      name: "Flower among Flowers",
      years: "1887",
      description:
        "Rizal uses a stunning young girl as a flower that sticks out from the others in this poem. Let us know what you think of this heartwarming love poem and who Rizal was referring to as the flower among flowers.",
      image: FlowerAmongFlowers,
    },
    {
      name: "Goodbye to Leonor",
      years: "1882",
      description:
        "Rizal composed Goodbye to Leonor for his childhood sweetheart Leonor Rivera who was just 13 years old when they first met in Dagupan. They made an effort to stay in contact by exchanging letters and pictures despite their distance from one another. However Leonors parents strongly disapproved of their relationship. ",
      image: GoodbyeToLeonor,
    },
    {
      name: "Himno Al Trabajo",
      years: "1888",
      description:
        "This poem demonstrates Jose Rizals patriotism as he exhorts his fellow citizens to work and strive for their nation whether in times of peace or conflict. Originally titled Imno sa Paggawa this poem was composed in Tagalog.  ",
      image: Labor,
    },
    {
      name: "Kundiman",
      years: "1891",
      description:
        "A young man would serenade his beloved with a traditional Filipino love song called a kundiman. His deep affection for his motherland was the central theme of Rizals Kundiman. . His words expressed his hope that injustice and bondage would be abolished in the Philippines. ",
      image: Kundiman,
    },
    {
      name: "Mi Retiro",
      years: "1893",
      description:
        "In Dapitan Rizal wrote Mi Retiro which translates to My Retreat in English. With encouragement from his mother Rizal resumed writing poetry in which he described his calm existence acceptance of his fate and acceptance of whatever justice would be meted out to him.  ",
      image: MiRetiro,
    },
    {
      name: "El Canto del Viajero",
      years: "1903",
      description:
        "The poem of El Canto del Viajero (Song of the Wanderer describes Jose Rizal) as a traveler and vagrant. In this poem Rizal describes the heartbreak of being a stranger in his native country after being away from it for a long time and the loneliness of being a nomad (thinking back on his return to the Philippines from Europe).",
      image: Wanderer,
    },
    {
      name: "Himno Al Talisay",
      years: "1888",
      description:
        "Jose Rizal taught his students not to be afraid of anything including the ghosts in the balete trees at Dapitan where he spent the majority of his days. He gave them a challenge by allowing them to scale balete trees. Rizal composed Hymn to Talisay for his students to sing as they gathered beneath the Talisay tree.",
      image: Talisay,
    },
    {
      name: "To The Child Jesus",
      years: "1875",
      description:
        "Jose Rizal then 14 years old wrote Child Jesus in Spanish in 1875. Actually written in accordance with the Spanish standard for poetry the poem is an octave real or short poem with only eight verses. Similar to To the Virgin Mary this is another of Rizals religious poems.",
      image: Jesus,
    },
    {
      name: "To The Virgin Mary",
      years: "1876",
      description:
        "As a young child Jose Rizal carved a statue of the Virgin Mary because he was a Marian devotee. While attending the Ateneo Rizal is credited with writing the sonnet To the Virgin Mary on December 3 1876. ",
      image: VirginMary,
    },
    {
      name: "Agua y Fiego",
      years: "1891",
      description:
        "Jose Rizals very brief composition El Agua y El Fuego (Water and Fire) is taken from the chapter Bajo Cubierta of his book El Filibusterismo. The chapter talks about Isagani one of the books many characters who complained to Simoun Ibarra about a few things when they first met on the ship sailing to Laguna de Bay. The advancement of his home country is the poets greatest passion and it is expressed in this poem.",
      image: FireWater,
    },
    {
      name: "Me Piden Versos",
      years: "1882",
      description:
        "When Rizal was a member of Circulo Hispano Filipino he wrote this poem. In Me Piden Versos (They Asked Me for Verses) he expresses how tragic it was for him to be able to control his emotions through his poetry while having the strong and repressive Spaniards suppress and silence them. ",
      image: Verses,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <ParticleBg />
      <div className="container mx-auto p-6 w-full h-screen relative">
        <h1 className="text-5xl font-bold text-white mb-12">
          Rizal's Literature
        </h1>

        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Literature"
            defaultChecked
          />
          <div className="tab-content p-10">
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Works.map((value, key) => (
                <div
                  key={key}
                  className="card card-side bg-base-100 h-[300px] shadow-sm"
                >
                  <figure className="w-52">
                    <Image
                      className="w-full h-full object-cover"
                      src={value.image}
                      alt="book"
                    />
                  </figure>
                  <div className="card-body flex-1">
                    <p className="font-light">{value.years}</p>
                    <h2 className="card-title">{value.name}</h2>
                    <p className="overflow-y-scroll">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Poems"
          />
          <div className="tab-content p-10">
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-7 gap-6">
              {Poems.map((value, key) => (
                <div
                  key={key}
                  className="card card-side bg-base-100 h-[300px] shadow-sm"
                >
                  <figure className="w-52">
                    <Image
                      className="w-full h-full object-cover"
                      src={value.image}
                      alt="book"
                    />
                  </figure>
                  <div className="card-body flex-1">
                    <p className="font-light">{value.years}</p>
                    <h2 className="card-title">{value.name}</h2>
                    <p className="overflow-y-scroll">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
