"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calamba from "../../assets/Resources/calamba.png";
import Food from "../../assets/Resources/Rizal breakfast or merienda.png";
import Church from "../../assets/Resources/church.png";
import Antipolo from "../../assets/Resources/Image of the Virgin of Antipolo.png";
import Baptist from "../../assets/Resources/baptist.png";
import Orchard from "../../assets/Resources/orchardinCalamba.png";
import Clothe from "../../assets/Resources/Rizal's childhood clothes.png";
import Book from "../../assets/Resources/Book.png";
import Pañuelito from "../../assets/Resources/pañuelito.png";

const items = [
  {
    id: 1,
    image: Calamba,
    text: `His father, Don Francisco, a man of quiet strength and unwavering discipline, 
    began each day before the sun, his prayers a gentle hum against the morning stillness. 
    He was a man of the land, his hands familiar with the soil, his mind versed in the wisdom of books. 
    His days were structured, a rhythm of work and rest, punctuated by the simple pleasures of batsoy
    and salabat, a short siesta, and the lingering aroma of lojua at merienda.`,
    style: "flex-col",
    imagePosition: "self-center",
    textStyle: "text-center",
  },
  {
    id: 2,
    image: Food,
    text: `His mother, Doña Teodora, was a force of nature, 
    a woman of deep faith and unyielding spirit. 
    Her devotion led her to church, even as her time drew near.`,
    textStyle: "text-center",
  },
  {
    id: 3,
    image: Church,
    text: `It was there, amidst the hushed whispers of confession, 
    that a strange thing occurred. A baby's cry, a mournful wail, echoed through the church, 
    startling the penitents and the priest, Father Rufino Collantes. 
    Doña Teodora, her heart heavy with worry, was approached by an old woman who spoke of a "protesting"
    child within her womb. The delivery was difficult, a labor that tested her strength. 
    She vowed a pilgrimage to Antipolo, a promise born of fear and hope.`,
    textStyle: "text-center",
  },
  {
    id: 4,
    image: Antipolo,
    text: `Three days later, on June 22nd, little Jose was baptized, 
    his godfather Don Pedro Casañas witnessing the ceremony. 
    Father Collantes, gazing upon the infant's large head, foretold a future of greatness.`,
    textStyle: "text-center",
  },
  {
    id: 5,
    image: Baptist,
    text: `Jose was a delicate child, "tiny, even puny," 
    needing the tender care of a yaya. Yet, even as a toddler, his mind was sharp, his eyes alert. 
    He learned the alphabet at two, taught by his mother, his first and most influential teacher. 
    He found joy in the family's orchard, climbing trees and dreaming under the shade of the fruit-laden branches.`,
    textStyle: "text-center",
  },
  {
    id: 6,
    image: Orchard,
    text: `Doña Teodora, though known for her uncompromising nature, was also a woman of thrift 
    and intellect. She turned old clothes into new treasures, rehashed leftovers into delicious meals, 
    and even found uses for fruit peelings. She encouraged her children to think, to question, to argue,
    filling their minds with stories, poetry, and the wisdom of mathematics.
    The Rizal household was a place of discipline and order. There were rules to be followed, 
    manners to be observed, and respect to be shown. Noise was taboo, and grandparents were to be 
    undisturbed. Yet, it was also a place of learning and faith. Prayers filled the air, the Angelus 
    chimed at twilight, and the Bible held a place of honor. Jose, though a good child, 
    was not without his moments of mischief. His brother Paciano recalled his "childish outbursts." 
    But the combined influence of nine sisters, a disciplinarian mother, and a patient 
    father shaped his character. He learned to control his passions, even when tempted by 
    the allure of a silk camisa.`,
    textStyle: "text-center",
  },

  {
    id: 7,
    image: Clothe,
    text: `His devotion to faith was evident. He loved to pray, to assist at novenas, 
    and to join processions. His face, serious and earnest, 
    earned him the affectionate nickname "Hermano José.`,
    textStyle: "text-center",
  },
  {
    id: 8,
    image: Book,
    text: `The sisters, Narcisa, Maria, and Soledad, remembered the strict rules of ladylike behavior, 
    the graceful walks, the modest attire, and the limited freedom. Yet, they also recalled the 
    intellectual stimulation, the encouragement to speak up, and the quiet beauty of evenings spent 
    watching the stars. Saturnina, the eldest, kept her embroidered pañuelito with her initials, 
    and the family treasured Jose's prayer book, the Ancora de Salvación, and his childhood clothes.`,
    textStyle: "text-center",
  },
  {
    id: 9,
    image: Pañuelito,
    text: `And so, within the walls of the Rizal ancestral home, amidst the blend of discipline 
    and love, faith and intellect, the seeds of greatness were sown. This was the heritage to which 
    Jose Rizal grew up, a heritage that would shape him into the national hero of the Philippines.`,
    textStyle: "text-center",
  },
];

const Birth = () => {
  return (
    <div className="min-h-screen p-8 font-sans flex flex-col ">
      {/* Title */}
      <h1 className="text-left text-4xl font-extrabold mb-10">Rizal's Birth</h1>

      {/* Carousel */}
      <div className="relative w-full max-w-[1500px] mx-auto">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={50} // Adjusted slide size
          emulateTouch={true}
          dynamicHeight={false}
          showIndicators={false} // Hide dots
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative w-full bg-gray-200 shadow-lg rounded-lg p-4 flex 
                ${
                  item.id === 4 || item.id === 9
                    ? "flex-row items-start"
                    : "flex-col items-center"
                } 
                ${
                  item.id === 7 || item.id === 8
                    ? "flex-row items-start"
                    : "flex-col items-center"
                } 
                transition-transform duration-300 hover:scale-105 focus-within:scale-105`}
            >
              {/* Image Header */}
              <Image
                src={item.image}
                alt="Thumbnials"
                className={`w-flex h-flex object-cover rounded-lg 
                  ${item.id === 4 ? "w-40 h-90 mr-4 float-left" : "w-60 h-60"}
                  ${item.id === 7 ? "w-40 h-90 mr-4 float-left" : "w-60 h-60"}
                  ${item.id === 8 ? "w-40 h-90 mr-4 float-left" : "w-60 h-60"}
                  ${item.id === 9 ? "w-40 h-90 mr-4 float-left" : "w-60 h-60"}
                  

                  `}
              />

              {/* Text */}
              <div
                className="p-4 w-full text-black font-bold text-sm uppercase leading-5 
        transition-colors duration-300 hover:text-blue-600 focus:text-blue-600 
        text-justify"
              >
                <p className="mb-2">{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-3">
          {/* <button
            className="px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all mx-2"
            onClick={() => document.querySelector(".control-prev").click()}
          >
            ◀
          </button>
          <button
            className="px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all mx-2"
            onClick={() => document.querySelector(".control-next").click()}
          >
            ▶
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Birth;
