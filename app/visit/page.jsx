import React from "react";
import Image from "next/image";
import EuropeCity from "../../assets/visit/europe-city.jpg";
import AsiaCity from "../../assets/visit/asia-city.jpg";

export default function Visit() {
  return (
    <main className="grid grid-cols-2">
      <h6
        className="text-5xl absolute top-0 left-1/2 transform -translate-x-1/2 text-center mt-7 pl-60"
        style={{
          fontFamily: "'Monserat', Sans-serif",
          color: "#F0DFDF",
          textAlign: "center",
        }}
      >
        LEGACY & INFLUENCE
      </h6>

      <div className="h-screen bg-red-400 flex justify-center items-end">
        <Image
          src={EuropeCity}
          alt="Legacy"
          objectFit="cover"
          className="h-full w-full"
        />
        <button className="btn btn-xl sm:btn-sm md:btn-md lg:btn-lg absolute mb-10">
          Europe
        </button>
      </div>
      <div className="h-screen bg-green-500 flex justify-center items-end">
        <Image
          src={AsiaCity}
          alt="Legacy"
          objectFit="cover"
          className="h-full w-full"
        />
        <button className="btn btn-xl sm:btn-sm md:btn-md lg:btn-lg absolute mb-10">
          Asia
        </button>
      </div>

      <div>
        <h1>Places He Visited</h1>
      </div>
    </main>
  );
}
