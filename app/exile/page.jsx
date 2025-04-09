"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./Map"), { ssr: false });

import "leaflet/dist/leaflet.css";
import { Map, MapPin, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import LocationCarousel from "./LocationCarousel";
import { useState, useEffect } from "react";
import { data } from "./data";
import Link from "next/link";
import travelsImg from "../../assets/homepage/travels.jpg";
import HeaderLayout from "../layouts/HeaderLayout";

import anime from "animejs";

export default function Exile() {
  const [currentIdx, setCurrentIdx] = useState(0);

  function next() {
    setCurrentIdx((prev) => {
      if (prev < data.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }

  function prev() {
    setCurrentIdx((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return data.length - 1;
      }
    });
  }

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

  return (
    <HeaderLayout>
      <main
        className="bg-cover min-h-screen relative py-24"
        style={{ backgroundImage: `url('${travelsImg.src}')` }}
      >
        <div
          className="absolute top-0 left-0 size-full z-10"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))`,
          }}
        ></div>
        <div className="relative z-50 h-full container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="order-2 lg:order-1">
            <div className="flex justify-start items-center gap-4 mb-4">
              <button onClick={prev} className="popup">
                <ArrowLeftCircle size={32} />
              </button>
              <button onClick={next} className="popup">
                <ArrowRightCircle size={32} />
              </button>
            </div>
            <h1 className="text-4xl font-bold pl-4 border-l-4 border-primary popup">
              {data[currentIdx].title}
            </h1>
            <p className="py-4 popup">{data[currentIdx].description}</p>
            <Link
              href={data[currentIdx].url}
              className="btn btn-primary btn-lg popup"
            >
              View in Google Maps
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-2/3 mx-auto popup">
              <MapLeaflet coor={data[currentIdx].coordinates} />
              <LocationCarousel imgs={data[currentIdx].imgs} />
            </div>
          </div>
        </div>
        {/* <div className="col-span-2 rounded-2xl flex-1 overflow-hidden">
          <MapLeaflet coor={data[currentIdx].coordinates} />
        </div> */}
      </main>
    </HeaderLayout>
  );
}
