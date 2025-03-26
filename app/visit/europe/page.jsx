"use client";
import { useState, useRef } from "react";
import Image from "next/image";

// Import images
import MadridSpainImg from "../../../assets/visit/europe/Madrid Spain.png";
import ParisFranceImg from "../../../assets/visit/europe/Paris France.png";
import HeidelbergGermanyImg from "../../../assets/visit/europe/Heidelberg Germany.png";
import BerlinGermanyImg from "../../../assets/visit/europe/Berlin Germany.png";
import LondonEnglandImg from "../../../assets/visit/europe/London England.jpg";
import BrusselsBelgiumImg from "../../../assets/visit/europe/Brussels Belgium.png";

//Reusable grid components
const CityCard = ({
  image,
  name,
  country,
  date,
  activity1,
  description1,
  activity2,
  description2,
  activity3,
  description3,
  onOpen,
}) => {
  return (
    <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100 bg-black">
      <Image
        src={image}
        fill
        className="relative object-cover size-full hover:scale-110 transition duration-300 opacity-50"
        alt={`${name}, ${country}`}
      />
      <h3 className="relative content-center text-center font-semibold text-4xl italic text-white w-full">
        {name}, <br /> {country}
      </h3>
      <button
        className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black outline-offset-0 outline-black hover:bg-black hover:text-white transition-colors delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110"
        onClick={() =>
          onOpen(
            name,
            country,
            date,
            activity1,
            description1,
            activity2,
            description2,
            activity3,
            description3
          )
        }
      >
        See more
      </button>
    </div>
  );
};

export default function Europe() {
  const [selectedCity, setSelectedCity] = useState(null);
  const modalRef = useRef(null);

  //Start of Jose Rizal visited Cities Date, Acitivies Description
  const cities = [
    {
      image: MadridSpainImg,
      name: "Madrid",
      country: "Spain",
      date: "(September 12, 1882 - May 1883)",
      activity1: "Writing, Noli Me Tangere ",
      description1:
        "While in Madrid, Rizal began working on his seminal work, Noli Me Tangere—a novel that would challenge Spanish colonial rule and expose the injustices faced by Filipinos under the Spanish regime.",
      activity2: "Contributing to La Solidaridad",
      description2:
        "Rizal became actively involved in Filipino nationalist movements and contributed articles to La Solidaridad, a publication that advocated for reforms in the Philippines.",
      activity3: "Cultural Immersion",
      description3:
        "Fascinated by the city’s architecture and infrastructure, Rizal absorbed the European culture and ideologies of the time. His stay in Madrid was pivotal in shaping his views on Filipino identity and the need for social change.",
    },
    {
      image: ParisFranceImg,
      name: "Paris",
      country: "France",
      date: "(October 1885)",
      activity1: "Studying Ophthalmology",
      description1:
        "Rizal continued his studies in ophthalmology, visiting various hospitals and clinics to expand his medical knowledge.",
      activity2: "Promotion of Philippine Culture",
      description2:
        "Rizal worked to introduce Philippine culture to Europeans and promote a better understanding of the Philippines.",
      activity3: "Engaging with Intellectuals",
      description3:
        "During his stay, he interacted with both French and Filipino intellectuals, contributing to an exchange of ideas that helped him refine his reformist ideals.",
    },
    {
      image: HeidelbergGermanyImg,
      name: "Heidelberg",
      country: "Germany",
      date: "(February 1886)",
      activity1: "Writing Noli Me Tangere",
      description1:
        "During his time in Heidelberg, Rizal wrote the final chapters of his novel Noli Me Tangere.",
      activity2: "Studying German",
      description2:
        "He spent time learning the German language to fully appreciate German literature and philosophy.",
      activity3: "Poetry and Admiration for German Women",
      description3:
        "Rizal composed the poem To the Flowers of Heidelberg and expressed his admiration for the German way of life, including the simplicity of the country people and the strength of Protestant and Catholic faiths.",
    },
    {
      image: BerlinGermanyImg,
      name: "Berlin",
      country: "Germany",
      date: "(November 1886 - May 1887)",
      activity1: "Completion of Noli Me Tangere",
      description1:
        "His novel Noli Me Tangere was published in Berlin in 1887, marking a significant achievement in Rizal’s life and in Philippine literature.",
      activity2: "Membership in Academic Societies",
      description2:
        "Rizal became a member of the Berlin Society for Anthropology, Ethnology, and Pre-History, further connecting with intellectuals and advancing his studies on the Filipino identity.",
      activity3: "Leaving Artifacts Behind",
      description3:
        "Before leaving Berlin, Rizal donated various artifacts, including a barong, to the Ethnological Museum of Berlin, some of which are preserved to this day.",
    },
    {
      image: LondonEnglandImg,
      name: "London",
      country: "England",
      date: "(May 1888 - March 1889)",
      activity1: "Learning English",
      description1:
        "Rizal dedicated time to improving his English skills by reading English historical literature, which was crucial for his work as a writer and reformist.",
      activity2: "Contribution to La Solidaridad",
      description2:
        "He continued contributing articles to La Solidaridad, advocating for Philippine reforms and greater representation of Filipinos in Spain’s political system.",
      activity3: "Annotating Morga’s History of the Philippines",
      description3:
        "Rizal took the time to annotate Antonio de Morga’s Sucesos de las Islas Filipinas, a historical account of the Philippines, providing a scholarly critique of Spanish rule and its impact on the Filipinos.",
    },
    {
      image: BrusselsBelgiumImg,
      name: "Brussels",
      country: "Belgium",
      date: "(1889)",
      activity1: "Writing El Filibusterismo",
      description1:
        " Rizal worked diligently on his second novel, El Filibusterismo, which focused on the corruption of the Spanish colonial system and the growing unrest among Filipinos.",
      activity2: "Medical Work",
      description2:
        "Rizal continued his medical practice in Brussels, where he helped treat patients in a local clinic.",
      activity3: "Engaging in Physical Activities",
      description3:
        "Rizal remained active and healthy during his time in Brussels. He engaged in fencing and target practice at the armory and gymnastics at the gym.",
    },
  ];
  //End of Jose Rizal visited Cities Date, Acitivies Description

  //Open model
  const openModal = (
    name,
    country,
    date,
    activity1,
    description1,
    activity2,
    description2,
    activity3,
    description3
  ) => {
    setSelectedCity({
      name,
      country,
      date,
      activity1,
      description1,
      activity2,
      description2,
      activity3,
      description3,
    });
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
    //Start of eorupe module
    <div className="h-screen overflow-auto">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[950px]:grid-cols-2 lg:grid-cols-3 gap-0 min-h-full overflow-hidden">
        {cities.map((city, index) => (
          <CityCard key={index} {...city} onOpen={openModal} />
        ))}
      </div>
      {/* //End of eorupe module */}
      {/* Reusable Modals */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-center p-7 flex flex-col gap-4 overflow-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {selectedCity && (
            <>
              <h5 className="text-2xl font-extrabold">
                {selectedCity.name}, {selectedCity.country} {selectedCity.date}{" "}
              </h5>
              <h3 className="text-2xl font-semibold">
                {selectedCity.activity1}
              </h3>
              <p className="text-lg">{selectedCity.description1}</p>
              <h3 className="text-2xl font-semibold">
                {selectedCity.activity2}
              </h3>
              <p className="text-lg">{selectedCity.description2}</p>
              <h3 className="text-2xl font-semibold">
                {selectedCity.activity3}
              </h3>
              <p className="text-lg">{selectedCity.description3}</p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
