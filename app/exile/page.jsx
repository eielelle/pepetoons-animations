"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./Map"), { ssr: false });

import "leaflet/dist/leaflet.css";
import { Map, MapPin, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import LocationCarousel from "./LocationCarousel";
import { useState } from "react";
import { data } from "./data";

export default function Exile() {
  const [currentIdx, setCurrentIdx] = useState(0);

  function next() {
    setCurrentIdx(prev => prev + 1)
  }

  function prev() {
    setCurrentIdx(prev => prev - 1)
  }


  return (
    <main className="bg-[#101230] w-screen h-screen p-4 grid grid-cols-3 gap-4">
      <div className="rounded-2xl bg-white text-black p-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{data[currentIdx].title}</h1>
        <p>
          {data[currentIdx].description}
        </p>
        <p className="flex items-center gap-4">
          <Map coor={data[currentIdx].coordinates} /> {data[currentIdx].address}
        </p>
        <LocationCarousel />

        <div className="mt-auto flex justify-between items-center">
          <a className="btn btn-primary">
            <MapPin /> View in Google Maps
          </a>

          <div className="flex gap-4">
            <button onClick={prev} className="transform transition duration-75 hover:scale-110 hover:cursor-pointer">
              <ArrowLeftCircle size={32} />
            </button>
            <button onClick={next} className="transform transition duration-75 hover:scale-110 hover:cursor-pointer">
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-2xl flex-1 h-full overflow-hidden">
        <MapLeaflet />
      </div>
    </main>
  );
}
