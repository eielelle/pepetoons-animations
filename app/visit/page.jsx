"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import EuropeCity from "../../assets/visit/europe-city.jpg";
import AsiaCity from "../../assets/visit/asia-city.jpg";

export default function Visit() {
  return (
    <main className="grid grid-cols-2">
      <h6
        className="text-5xl absolute top-0 left-1/3 transform-translate-x-1/2 text-center mt-9 mx-auto"
        style={{
          fontFamily: "'Monserat', Sans-serif",
          color: "#F0DFDF",
          textAlign: "center",
        }}
      >
        PLACES HE VISITED
      </h6>

      <div className="h-screen bg-red-400 flex justify-center items-end">
        <Image
          src={EuropeCity}
          alt="Legacy"
          objectFit="cover"
          className="h-full w-full"
        />
        <button
          onClick={() => (window.location.href = "/visit/europe")}
          className="btn btn-xl px-11 py-9 text-9xl sm:btn-sm md:btn-md lg:btn-lg absolute mb-16 backdrop-blur-sm shadow rounded-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
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
        <button
          onClick={() => (window.location.href = "/visit/asia")}
          className="btn btn-xl px-11 py-9 text-9xl sm:btn-sm md:btn-md lg:btn-lg absolute mb-16 backdrop-blur-sm shadow rounded-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          Asia
        </button>
      </div>
    </main>
  );
}
