"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const items = [
  {
    id: 1,
    image: "/image1.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col", // Image left, text right
    imagePosition: "self-start", // Image lower in card
    textStyle: "text-justify",
  },
  {
    id: 2,
    image: "/image2.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col", // Image above text
    imagePosition: "self-center", // Image closer to blue header
    textStyle: "tracking-wide",
  },
  {
    id: 3,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col", // Image at top-right
    imagePosition: "self-end", // Image aligned to top-right
    textStyle: "text-center",
  },
  {
    id: 4,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col", // Image at top-right
    imagePosition: "self-end", // Image aligned to top-right
    textStyle: "text-center",
  },
  {
    id: 5,
    image: "/image3.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
           Bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    style: "flex-col", // Image at top-right
    imagePosition: "self-end", // Image aligned to top-right
    textStyle: "text-center",
  },
];

const Birth = () => {
  return (
    <div className="min-h-screen p-8 font-sans flex flex-col ">
      {/* Title */}
      <h1 className="text-left text-4xl font-extrabold mb-10">Rizal's Birth</h1>

      {/* Carousel */}
      <div className=" relative w-full max-w-2x1 mx-auto ">
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={45}
          emulateTouch={true}
          dynamicHeight={false}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative w-full bg-white shadow-lg rounded-lg p-4 flex ${item.style} items-center`}
            >
              {/* Blue Header */}
              <div className="w-full h-40 bg-blue-400"></div>

              {/* Image Placement */}
              <div className={`p-4 ${item.imagePosition}`}>
                <img
                  src={item.image}
                  alt="Thumbnail"
                  className="w-20 h-20 object-cover rounded-lg shadow-md border border-gray-300"
                />
              </div>

              {/* Text */}
              <div
                className={`p-4 w-full text-black font-bold text-sm uppercase leading-5 ${item.textStyle}`}
              >
                <p className="mb-2">{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Birth;
