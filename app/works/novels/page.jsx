import React from "react";
import Image from "next/image";
import NoliMeTangere from "../../../assets/worksassets/novels/noli-me-tangere.jpg";
import ElFili from "../../../assets/worksassets/novels/el-filibusterismo.jpg";
import Makamisa from "../../../assets/worksassets/novels/makamisa.jpg";
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

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <ParticleBg />
      <div className="container mx-auto p-6 w-full h-screen relative">
        <h1 className="text-5xl font-bold text-white mb-12">
          Rizal's Novel's
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
                <div key={key} className="card card-side bg-base-100 h-[300px] shadow-sm">
                <figure className="w-52">
                  <Image
                  className="w-full h-full object-cover"
                    src={value.image}
                    alt="book" />
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
          <div className="tab-content border-base-300 bg-base-100 p-10">
            No content yet.
          </div>
        </div>        
      </div>
    </div>
  );
}
