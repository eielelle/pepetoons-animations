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

const items = [
  {
    id: 1,
    image: Calamba,
    text: `His father, Don Francisco, a man of quiet strength and unwavering discipline, 
    began each day before the sun, his prayers a gentle hum against the morning stillness. 
    He was a man of the land, his hands familiar with the soil, his mind versed in the wisdom of books. 
    His days were structured, a rhythm of work and rest, punctuated by the simple pleasures of batsoy
    and salabat, a short siesta, and the lingering aroma of lojua at merienda.`,
    textStyle: "text-justify",
  },
  {
    id: 2,
    image: Food,
    text: `His mother, Doña Teodora, was a force of nature, 
    a woman of deep faith and unyielding spirit. 
    Her devotion led her to church, even as her time drew near.`,
    textStyle: "tracking-wide",
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
    image: Calamba,
    text: `Lorem iy7loc
    0 0psum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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
              className="relative w-full bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 focus-within:scale-105"
            >
              {/* Image Header */}
              <Image
                src={item.image}
                alt="Thumbnials"
                className="w-full h-full object-cover rounded-t-lg"
              />

              {/* Text */}
              <div className="p-4 w-full text-black font-bold text-sm uppercase leading-5 text-center transition-colors duration-300 hover:text-blue-600 focus:text-blue-600">
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
