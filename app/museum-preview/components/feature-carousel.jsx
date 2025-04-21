"use client";

import SmallCluster from "./small-cluster";
import { useEffect, useState } from "react";
import anime from "animejs";
import useAnimateScroll from "../../hooks/useAnimateScroll";
import ImageContainer from "./image-container";

import elfili from "../../../assets/elfili.jpg";
import artgallery from "../../../assets/art-gallery.jpeg";
import background from "../../../assets/background.jpeg";
import lit from "../../../assets/lit.jpg";
import paintingdisplay from "../../../assets/painting-display.jpeg";
import painting from "../../../assets/painting.jpeg";
import doctor from "../../../assets/doctor.jpg";
import matyrdom from "../../../assets/matyrdom.jpeg";
import museo from "../../../assets/museo.jpg";
import rizalMonument from "../../../assets/rizal-monument.jpg";
import rizalStatue from "../../../assets/rizal-statue.jpeg";
import rizlit from "../../../assets/rizlit.jpg";
import history from "../../../assets/history.jpg";
import galle from "../../../assets/galle.jpeg";
import drjr from "../../../assets/drjr.jpeg";
import noli from "../../../assets/noli.jpg";
import luneta from "../../../assets/Luneta.jpg";
import japan from "../../../assets/Japan.jpg";
import madrid from "../../../assets/madrid.png";
import usa from "../../../assets/USA.jpg";


export default function FeatureCarousel({ parentHeight, scrollTop }) {
  useAnimateScroll(parentHeight, scrollTop, 80, (val) => {
    const carousel = document.querySelector(".carousel-custom");

    anime({
      targets: carousel,
      translateX: `-${val}%`,
      easing: "easeOutQuad",
      duration: 0,
    });
  });

  return (
    <div className="w-full h-[50%] overflow-x-hidden">
      <div className="w-[500%] h-full flex items-center border-y-2 border-black carousel-custom bg-gray-300 text-white">
        {/* 1 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 border-black relative">
          <ImageContainer image={elfili} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            The Heart of a Nation: Exploring the Life and Works of José Rizal
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black">
          <ImageContainer image={noli} />
        </div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 border-black">
          <ImageContainer image={background} />
        </div>
        <SmallCluster />

        {/* 2 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 border-black relative">
          <ImageContainer image={lit} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            The Heart of a Nation: Exploring the Life and Works of José Rizal
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black">
          <ImageContainer image={paintingdisplay} />
        </div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 border-black">
          <ImageContainer image={painting} />
        </div>
        <SmallCluster />

        {/* 3 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 border-black relative">
          <ImageContainer image={doctor} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            The Heart of a Nation: Exploring the Life and Works of José Rizal
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black">
          <ImageContainer image={matyrdom} />
        </div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 border-black">
          <ImageContainer image={museo} />
        </div>
        <SmallCluster />

        {/* 4 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 border-black relative">
          <ImageContainer image={rizalMonument} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            The Heart of a Nation: Exploring the Life and Works of José Rizal
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black">
          <ImageContainer image={rizalStatue} />
        </div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 border-black">
          <ImageContainer image={rizlit} />
        </div>
        <SmallCluster />

        {/* 5 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 border-black relative">
          <ImageContainer image={luneta} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            Monuments of Dr. José Rizal | Luneta Park, Manila
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black relative">
          <ImageContainer image={madrid} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            Madrid, Spain
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2 border-black relative">
          <ImageContainer image={japan} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            Tokyo, Japan
          </p>
        </div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 border-black relative">
          <ImageContainer image={usa} />
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 p-5 font-semibold">
            Florida, USA
          </p>
        </div>
        <SmallCluster />
      </div>
    </div>
  );
}
