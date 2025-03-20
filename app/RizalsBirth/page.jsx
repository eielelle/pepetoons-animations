"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from "../../assets/Resources/Picture1.png";
import Calamba from "../../assets/Resources/Picture2.png";

const items = [
  {
    id: 1,
    image: Pic1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    textStyle: "text-justify",
  },
  {
    id: 2,
    image: Calamba,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    textStyle: "tracking-wide",
  },
  {
    id: 3,
    image: Pic1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    textStyle: "text-center",
  },
  {
    id: 4,
    image: Pic1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    textStyle: "text-center",
  },
  {
    id: 5,
    image: Pic1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    textStyle: "text-center",
  },
];

const Birth = () => {
  return (
    <div className="min-h-screen p-8 font-sans flex flex-col ">
      {/* Title */}
      <h1 className="text-left text-4x1 font-extrabold mb-10">Rizal's Birth</h1>

      {/* Carousel */}
      <div className="relative w-full max-w-[1200px] mx-auto">
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
                className="w-full h-64 object-cover rounded-t-lg"
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birth;
