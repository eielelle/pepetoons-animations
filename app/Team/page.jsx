"use client";
import React from "react";
import Image from "next/image";
import TeamPhoto from "../../assets/Resources/TeamPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Team() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="container mx-auto p-6 w-full max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-black mb-3">
          <span className="text-[#000]">Pepe</span>
          <span className="text-[#000]">Toons</span> Team
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          Meet the team and learn more about the origin story behind{" "}
          <span className="font-semibold text-black">PepeToons</span>
        </p>

        {/* Image Section */}
        <div className="relative w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={TeamPhoto}
              alt="Team Photo"
              width={800} // Adjust for proper scaling
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Rizal Section */}

        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-10">
            "Honoring the legacy of Rizal, inspiring generations of change."
          </h1>
          <div className="flex gap-8 md:gap-12">
            <span className="text-4xl md:text-5xl opacity-60">
              📦 {/* Replace with proper icon */}
            </span>
            <span className="text-4xl md:text-5xl opacity-60">
              💬 {/* Replace with proper icon */}
            </span>
            <span className="text-4xl md:text-5xl opacity-60">
              ☁ {/* Replace with proper icon */}
            </span>
            <span className="text-4xl md:text-5xl opacity-60">
              🎵 {/* Replace with proper icon */}
            </span>
            <span className="text-4xl md:text-5xl opacity-60">
              💎 {/* Replace with proper icon */}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-white place-items-center">
          {/* First two cards */}
          <div className="card w-64 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon icon={faHeart} className="text-white text-4xl" />
            <h2 className="font-bold text-lg mt-4">Honor the Past</h2>
          </div>
          <div className="card w-64 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon icon={faUser} className="text-white text-4xl" />
            <h2 className="font-bold text-lg mt-4">Inspire the Future</h2>
          </div>

          {/* Third card spans full width */}
          <div className="card w-64 lg:col-span-2 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="text-white text-4xl"
            />
            <h2 className="font-bold text-lg mt-4">Empower Change</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
