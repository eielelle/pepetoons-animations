"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from "../../assets/Resources/Picture1.png";

const items = [
  {
    id: 1,
    image: Pic1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    imagePosition: "self-start",
    textStyle: "text-justify",
  },
  {
    id: 2,
    image: "/Picture2.png",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    imagePosition: "self-center",
    textStyle: "tracking-wide",
  },
  {
    id: 3,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    imagePosition: "self-end",
    textStyle: "text-center",
  },

  {
    id: 3,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    imagePosition: "self-end",
    textStyle: "text-center",
  },

  {
    id: 5,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col",
    imagePosition: "self-end",
    textStyle: "text-center",
  },
];

const Birth = () => {
  return (
    <div className="min-h-screen p-8 font-sans flex flex-col ">
      {/* Title */}
      <h1 className="text-left text-4xl font-extrabold mb-10">Rizal's Birth</h1>

      {/* Carousel */}
      <div className="relative w-[1000px] mx-auto">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={40}
          emulateTouch={true}
          dynamicHeight={false}
          showIndicators={false} // Hide dots
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative w-full bg-gray-200 shadow-lg rounded-lg p-4 flex ${item.style} items-center transition-transform duration-300 hover:scale-105 focus-within:scale-105`}
            >
              {/* Blue Header */}
              <div className="w-95 h-43 bg-blue-400"></div>

              {/* Image Placement */}
              <div className={`p-4 ${item.imagePosition}`}>
                <img
                  src={item.image}
                  alt="Thumbnail"
                  className="w-20 h-20 object-cover rounded-lg shadow-md border border-gray-300 transition-opacity duration-300 hover:opacity-80 focus:opacity-80"
                />
              </div>

              {/* Text */}
              <div
                className={`p-4 w-full text-black font-bold text-sm uppercase leading-5 ${item.textStyle} transition-colors duration-300 hover:text-blue-600 focus:text-blue-600`}
              >
                <p className="mb-2">{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-3">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all mx-2"
            onClick={() => document.querySelector(".control-prev").click()}
          >
            ◀
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all mx-2"
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
