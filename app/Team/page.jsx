"use client";
import React from "react";
import Image from "next/image";
import TeamPhoto from "../../assets/Resources/TeamPhoto.jpg";

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
      </div>
    </div>
  );
}
