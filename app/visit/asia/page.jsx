"use client";

import { useState, useRef } from 'react';
import React from "react";
import Image from "next/image";
import Japan from "../../../assets/visit/asia/japan-1.jpg";
import HongKong from "../../../assets/visit/asia/hong-kong.jpg";
import Macau from "../../../assets/visit/asia/macau.jpg";
import SriLanka from "../../../assets/visit/asia/sri-lanka.jpg";
import Singapore from "../../../assets/visit/asia/singapore.jpg";
import Saigon from "../../../assets/visit/asia/saigon.jpg";

//Reusable grid components
const AsiaCard = ({ name, img, paragraph1, paragraph2, paragraph3, onOpen }) => {
    return (
        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
                {name}
            </h3>
            <Image
                src={img}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="z-10"
            />
            <button
                className="btn btn-sm shadow rounded-sm mb-4 relative z-100 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                onClick={() => onOpen(name, img, paragraph1, paragraph2, paragraph3)}
            >
                see more
            </button>
        </div>
    );
};

export default function Asia() {
    const [selectedCity, setSelectedCity] = useState(null);
    const modalRef = useRef(null);

    const asiaCountry = [
        {
            id: "1",
            name: "Japan",
            img: Japan,
            paragraph1: "Jose Rizal traveled to Japan in order to receive a firsthand look at a rapidly modernizing Asian country as well as to escape the growing tensions in the Philippines. His intellectual and emotional growth was permanently impacted by this brief but crucial time in his life which gave him the rare chance to observe and engage with a culture very different from his own.",
            paragraph2: "Rizal became fully immersed in Japanese culture while he was there. The countrys exquisitely preserved urban settings and landscapes enthralled him with their aesthetic beauty. He observed that the Japanese people were committed to efficiency and progress and admired their hard work and courteous manner. By studying the language investigating traditional arts like theater and martial arts and taking note of the quick developments that were launching Japan onto the international scene he actively attempted to comprehend Japanese culture. The most noteworthy aspect of Rizals stay in Japan was probably his heartfelt romantic relationship with Usui Seiko also known as O-Sei-san. Rizal found immense joy and emotional depth in their relationship which gave his observations of Japanese life a more intimate touch. He demonstrated his ability to form strong emotional bonds with O-Sei-san through their relationship.",
            paragraph3: "Parting from O-Sei-san was a major factor in the melancholy tone of Rizals departure from Japan in April 1888. Nevertheless he found that his stay in Japan was a crucial period of his life. He improved his comprehension of the evolution of the country by gaining priceless insights into a society that struck a successful balance between tradition and modernity. His viewpoint was broadened and added to the intricate fabric of his intellectual and personal journey by the experiences and insights he gained in Japan as well as the deep emotional bond he formed.",
        },
        {
            id: "2",
            name: "Hongkong",
            img: HongKong,
            paragraph1: "After his initial trip to Europe and the release of Noli Me Tángere Jose Rizal spent two periods in Hong Kong: from February to May 1888 and again from 1891 to 1892. During this pivotal time in his life he was able to continue practicing medicine find a temporary refuge from the Philippines rising tensions and advance his reformist objectives.",
            paragraph2: "Rizal sought safety during his first visit from the persecution he was subjected to in the Philippines. Hong Kong seemed to him to be a cosmopolitan and reasonably tranquil place. As an ophthalmologist he opened a clinic and became well-known for his abilities. In addition he kept writing and submitted pieces to different magazines. His family accompanied him on his second longer visit. In Borneo he intended to found a Filipino colony because he thought it would offer refuge to Filipinos escaping Spanish persecution. His dream was for Filipinos to live in freedom and reach their full potential. He kept up his correspondence with fellow reformists in the Philippines and continued to write articles and letters. Despite the risks he also intended to return to the Philippines because he felt that his presence was essential to carrying on the fight for reform. In order to demonstrate his liberal views he also translated the Declaration of the Rights of Man and of the Citizen into Tagalog and wrote Ang Mga Karapatan ng Tao (The Rights of Man).",
            paragraph3: "In addition to continuing his activism Rizal took some time off while he was in Hong Kong. It gave him a short-term haven a place to work and a base from which to launch his reformist campaign. His ongoing involvement with the reform movement and his ideas for a Filipino colony as well as his experiences in Hong Kong demonstrate his unwavering dedication to the well-being of his people. In the end his choice to go back to the Philippines in spite of the dangers shows how committed he is to the cause of Filipino advancement and independence.",
        },
        {
            id: "3",
            name: "Macau",
            img: Macau,
            paragraph1: "As a quick stopover on his way from Hong Kong to Japan in February 1888 Jose Rizal and Jose Maria Basa traveled briefly to the Portuguese colony of Macau. His brief visit gave him a glimpse of a unique colonial setting that stood in stark contrast to Hong Kongs busy modernity.",
            paragraph2: "Most of Rizals stay in Macau was spent observing. After traveling by ferry from Hong Kong he spent his brief stay observing the distinctive features of the city. He noted that in contrast to the dynamic quickly evolving Hong Kong Macau had a more ancient traditional charm that was a reflection of its Portuguese colonial past.",
            paragraph3: "Although Rizals time in Macau was brief it provided a useful opportunity to compare two different colonial Asian cities. Despite his limited observations he was able to gain insight into the disparities between various colonial influences and the regions different stages of development. In the end Macau was a brief stopover in his longer journey that gave him a brief overview before he continued on to Japan where he would come across a very different Asian culture.",

        },
        {
            id: "4",
            name: "Sri Lanka",
            img: SriLanka,
            paragraph1: "Jose Rizal made a brief but significant stop in Ceylon (modern-day Sri Lanka) in May 1882 as part of his first trip to Europe. Primarily a transit stop this trip gave him a priceless chance to see a unique colonial landscape and immerse himself in a new cultural and religious setting which widened his perspective on the world.",
            paragraph2: "Rizals time in Ceylon was marked by astute observation. He was astounded by the islands colorful tropical vegetation as soon as he arrived at Point de Galle. He proceeded to Colombo where he added to his descriptions of the city and its environs. Most notably he came across and witnessed Buddhist rituals deepening his knowledge of various religious traditions. Additionally he was able to practice and advance his French language skills while traveling on the French ship Djemnah. Rizals dedication to expanding his horizons was strengthened by this brief visit which gave him the opportunity to observe a culture and environment that were very different from his own.",
            paragraph3: "Even though it was short Rizals stay in Ceylon was a crucial phase in his development as a well-rounded thinker and reformer. His knowledge of the world was enhanced by his observations which ranged from the islands natural beauty to the religious rituals he saw. His global perspective which would be essential in his subsequent reformist efforts in the Philippines was developed during this stopover which was part of his longer journey to Europe.",

        },
        {
            id: "5",
            name: "Singapore",
            img: Singapore,
            paragraph1: "Throughout his lengthy travels Jose Rizal frequently visited Singapore which was an essential stopover on his way between the Philippines Europe and other Asian countries. Even though these visits were frequently short they gave him the chance to see a city that was growing quickly and was very different from his home country.",
            paragraph2: "The main focus of Rizals stay in Singapore was astute observation. He was always impressed by the citys modern infrastructure and effective governance and he frequently remarked on its amazing development as a thriving trading center. He was especially impressed by the populations diversity which added to Singapores lively and international vibe. Rizal was able to examine the colonial governance and development of other areas such as the Philippines using these observations as a comparative lens. He was able to observe directly the results of colonial rule that was comparatively progressive which helped him to understand what his own nation could achieve.",
            paragraph3: "Even though Rizals visits to Singapore were brief they were crucial in helping him to widen his perspective on the world. He developed a better grasp of colonial dynamics and the prospects for progress as a result of his observations of Singapores development and multiculturalism. His intellectual growth was enhanced and his dedication to promoting reforms in the Philippines was strengthened by the experiences he gained during his crucial travels."
        },
        {
            id: "6",
            name: "Saigon",
            img: Saigon,
            paragraph1: "Saigon was the first place outside of the Philippines where Jose Rizal made his crucial first trip to Europe in May 1882. Despite the short duration of his stay it marked the start of his life-changing journey and gave him a vital first look at a French colonial city.",
            paragraph2: "- Rizal spent most of his time in Saigon observing. By examining the citys architecture and ambiance he observed the widespread influence of French colonialism. His early exposure to European colonial governance outside of Spanish domination provided a comparative viewpoint that would influence how he understood colonial dynamics around the world. The city functioned as a spot of transition a departure from his comfortable surroundings and the beginning of his aspirational quest for reform and knowledge in Europe.",
            paragraph3: "- Although Rizals time in Saigon was brief it marked a crucial turning point in his career. It was a concrete start to his journey across Europe and his first foray into the wider world. Even though his observations were fleeting they strengthened his resolve to learn more that would eventually help his native country and increased his awareness of colonial realities."
        },
    ];
    
    //Open model
    const openModal = (name, img, paragraph1, paragraph2, paragraph3) => {
        setSelectedCity({ name, img, paragraph1, paragraph2, paragraph3 });
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    //Close Modal
    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        setSelectedCity(null);
    };

    return (
        <>
            {/* Start of Asia */}
            <main className="grid grid-cols-3 grid-rows-2 max-sm:grid-cols-1 max-[950px]:grid-cols-2 overflow-auto">
                {asiaCountry.map((city, index) => (
                    <AsiaCard key={city.id} {...city} onOpen={openModal} />
                ))}
            </main>
            {/* End of Asia */}

            {/* Reusable Modals */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {selectedCity && (
                        <>
                            <h3 className="font-bold text-lg">{selectedCity.name}</h3>
                            <p className="py-4">
                                {selectedCity.paragraph1}
                            </p>
                            <p className="py-2">
                                {selectedCity.paragraph2}
                            </p>
                            <p className="py-2">
                                {selectedCity.paragraph3}
                            </p>
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}