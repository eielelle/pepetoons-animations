"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./Map"), { ssr: false });

import "leaflet/dist/leaflet.css";
import { Map, MapPin, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import LocationCarousel from "./LocationCarousel";
import { useState } from "react";
import { data } from "./data";
import Link from "next/link";

export default function Exile() {
  const [currentIdx, setCurrentIdx] = useState(0);

  function next() {
    setCurrentIdx(prev => {
      if (prev < data.length - 1) {
        return prev + 1
      } else {
        return 0
      }
    })
  }

  function prev() {
    setCurrentIdx(prev => {
      if (prev > 0) {
        return prev - 1
      } else {
        return data.length - 1
      }
    })
  }


  return (
    <main className="bg-[#101230] w-screen h-screen max-h-screen grid grid-cols-3 gap-4 p-4">
      <div className="rounded-2xl bg-white text-black p-6 flex flex-col h-full max-h-full gap-4">
        <h1 className="text-4xl font-bold">{data[currentIdx].title}</h1>
        <div className="flex-1 overflow-y-scroll">
          <p>
            {data[currentIdx].description}
          </p>
          <p className="flex items-center gap-4 my-4">
            <Map /> {data[currentIdx].address}
          </p>
          <LocationCarousel imgs={data[currentIdx].imgs}/>
        </div>

        <div className="mt-auto flex flex-wrap-reverse lg:flex-nowrap gap-4 justify-center lg:justify-between items-center">
          <Link href={data[currentIdx].url} className="btn btn-primary">
            <MapPin /> View in Google Maps
          </Link>

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
      <div className="col-span-2 rounded-2xl flex-1 overflow-hidden">
        <MapLeaflet coor={data[currentIdx].coordinates} />
      </div>
    </main>
  );
}
