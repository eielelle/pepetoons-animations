"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NoliMeTangere from "../../../assets/worksassets/novels/noli-me-tangere.jpg";
import ElFili from "../../../assets/worksassets/novels/el-filibusterismo.jpg";
import Makamisa from "../../../assets/worksassets/novels/makamisa.jpg";
import ParticleBg from "./ParticleBg";

import anime from "animejs";

import { poems } from "./poems";
import { essays } from "./essays";
import HeaderLayout from "../../layouts/HeaderLayout";

export default function NovelsContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    anime({
      targets: ".popup",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      delay: anime.stagger(200),
    });
  }, []);

  const Works = [
    {
      name: "Noli Me Tangere",
      years: "1887",
      description:
        "José Rizal our national hero wrote a book. In Filipino the title Noli Me Tangere means Touch Me Not or Huwag Mo Akong Salingin. What the Filipino people were going through at the time is reflected in the novel. He wrote it to make the Filipino people aware of the fact that the friars were accusing mistreating and oppressing them. ",
      content:
        "The story primarily follows Crisóstomo Ibarra, a young, educated Filipino who returns to his homeland after seven years in Europe, filled with liberal ideas and a desire to improve his country. He plans to open a modern school to uplift his community. \n\n However, Ibarra quickly encounters the deeply entrenched corruption and abuses of power by the Spanish friars and the colonial government. Father Dámaso, a pompous and influential friar, is a central antagonist who harbors animosity towards Ibarra's deceased father, Don Rafael, a wealthy and respected man who clashed with the church. \n\n Ibarra's efforts to establish his school are constantly thwarted by the machinations of the friars, particularly Father Dámaso and the scheming Father Salví. He also navigates a complex relationship with his childhood sweetheart, María Clara, a beautiful and devout young woman whose life is heavily influenced by the friars, especially her supposed father, Capitán Tiago, a wealthy and well-respected figure in society. \n\n As Ibarra strives for progress, he uncovers the injustices and cruelty inflicted upon the Filipino people. He witnesses the friars' immense power, their exploitation of the natives, and their obstruction of education and reform. The novel also delves into the lives of other characters who suffer under the oppressive system, such as Sisa, a loving mother driven to madness by the loss of her sons due to the friars' abuses, and Elías, a mysterious and noble outlaw who represents the oppressed masses and becomes an ally to Ibarra. \n\n Ibarra himself is eventually framed for rebellion due to the friars' conspiracies. He escapes prison with Elías's help, and in a dramatic escape on a boat, Elías sacrifices himself to save Ibarra. \n\n The novel ends with Ibarra disappearing, María Clara entering a convent, and the seeds of revolution subtly planted. Noli Me Tangere is a scathing critique of the Spanish colonial regime, highlighting the corruption, social inequality, and the stifling influence of the Church, ultimately calling for reform and awakening a sense of national identity among Filipinos. \n\n see the content:\n\n",
      image: NoliMeTangere,
      url: "https://www.supersummary.com/noli-me-tangere/summary/",
    },
    {
      name: "El Filibusterismo",
      years: "1891",
      description:
        "This book which translates to The Reign of the Greed was written by our national hero and is José Rizals second book. In order to expose the moral decay of Spanish officials in the Philippines Rizal portrayed a filibuster or rebel who is himself. His propaganda novel Noli me Tangere was followed by El Filibusterismo. The book was dedicated to the memory of the Gomburza three priests who were charged with seditious immoral and illiterate behavior. ",
      content:
        "continuing the story 13 years later with a darker and more revolutionary tone. \n\n The central figure is Simoun, a wealthy and enigmatic jeweler who is none other than Crisóstomo Ibarra in disguise. Presumed dead at the end of Noli, Ibarra has spent years amassing wealth and forging connections to orchestrate a revolution against the Spanish colonial government. His motivations are fueled by revenge for the injustices he suffered and the death of María Clara \n\n Simoun subtly manipulates government officials and influential figures, encouraging corruption and oppression to ignite the people's anger and drive them to revolt. He establishes connections with various individuals, including the disillusioned Basilio, Sisa's son who is now a medical student, and Cabesang Tales, a former cabeza de barangay who has been unjustly deprived of his land. \n\n Simoun's grand plan involves a bomb disguised as a wedding gift at the wedding of Paulita Gómez (María Clara's cousin) and Juanito Peláez. The explosion is intended to kill high-ranking officials and signal the start of the uprising. However, his plan is thwarted by Isagani, Paulita's former love interest and the idealistic nephew of Father Florentino, who throws the lamp containing the bomb into the river. \n\n As Simoun's revolutionary plot fails, he seeks refuge in the house of Father Florentino. Realizing the futility of his violent approach and consumed by his failures, Simoun takes poison. Before dying, he confesses his true identity and his motivations to Father Florentino, who emphasizes that freedom cannot be achieved through immoral means and that God's wisdom prevails. Father Florentino then throws Simoun's remaining jewels into the sea, symbolizing the rejection of greed and violence as paths to liberation. \n\n  see the content: \n\n",
      image: ElFili,
      url: "https://www.penguinrandomhouse.com/books/302595/el-filibusterismo-by-jose-rizal/9780143106395/readers-guide/",
    },
    {
      name: "Makamisa",
      years: "1892",
      description:
        "Makamisa is an important if unfinished work by José Rizal the national hero of the Philippines. This unfinished novel which was found in 1987 by historian Ambeth Ocampo among Rizals papers at the National Library offers more information about Rizals writing style and his critical viewpoint on Philippine society during the Spanish colonial era. Although it was never finished Rizal started writing the manuscript in Spanish after it had been first drafted in pure Tagalog. The current fragment mainly concentrates on the actions of Padre Agaton the town curate and other townspeople exploring the curates enigmatic bad temper and carrying on Rizals tradition of criticizing the friars and the social norms of the time. Because of this Makamisa is a significant contribution to Rizals body of work giving academics and historians a better grasp of his opinions as well as an insight into the Tagalog language of the time. ",
      content:
        "Makamisa is José Rizal's incomplete third novel, primarily written in Tagalog. The surviving fragment, a single chapter, portrays a scene in Tulig after mass, introducing characters like the moody Padre Agaton and worried Kapitan Lucas. Intended to emphasize Tagalog culture and ethics over politics, this unfinished work aimed for a more direct connection with the Filipino populace in their native tongue, offering a glimpse into Rizal's evolving literary and social concerns. \n\n see the content:\n\n",
      image: Makamisa,
      url: "https://archive.org/details/MakamisaTheSearchForRizalsThirdNovel/mode/2up",
    },
  ];

  const openModal = (value) => {
    setSelectedItem(value);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <HeaderLayout>
      <div className="relative mt-24 min-h-screen w-full">
        <ParticleBg />
        <div className="container mx-auto p-6 w-full">
          <h1 className="text-5xl font-bold text-white mb-4 border-l-4 border-primary pl-4 popup">
            Rizal's Literature
          </h1>
          <p className="lg:w-1/2 mb-12 popup">
            José Rizal’s literary works, including novels, essays, and poems,
            were powerful tools that exposed colonial oppression and inspired
            Filipino nationalism.
          </p>

          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab before:border-primary"
              aria-label="Literature"
              defaultChecked
            />
            <div className="tab-content p-10">
              <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Works.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
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
                      <h2 className="card-title text-primary">{value.name}</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {poems.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
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
                      <h2 className="card-title text-primary">{value.name}</h2>
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
              aria-label="Essays"
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {essays.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
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
                      <h2 className="card-title text-primary">{value.name}</h2>
                      <p className="overflow-y-scroll">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedItem && (
          <div className="modal modal-open">
            <div className="modal-box w-11/12 h-3/4 max-w-5xl">
              <div className="modal-header flex justify-end items-center text-center">
                <button
                  className="btn btn-md btn-circle btn-ghost items-center"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <p className="text-xl text-center font-bold">
                  {selectedItem.name}
                </p>
                <p className="font-light text-center">{selectedItem.years}</p>
                <br />
                <p className="text-center whitespace-pre-line">
                  {selectedItem.content}
                  <a
                    className="link text-blue-500 hover:text-blue-700"
                    href={selectedItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedItem.url}
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </HeaderLayout>
  );
}
