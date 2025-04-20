// DONT USE THIS PAGE
// FOR ARCHIVING USE ONLY


"use client";

import Header from "../header";
import { useEffect, useState } from "react";
import anime from "animejs";

export default function Gallery() {

  return (
    <section id="gallery" className="h-screen bg-black text-white sticky top-0">
      <div className="container mx-auto">
        <Header color="white" />
        <div className="border-t-2 border-white mb-24">
          <h1 className="text-8xl font-bold">Introducing José Rizal</h1>
        </div>

        <div className="flex justify-between">
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery-left w-[200px] h-[200px] bg-gray-500"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery-left w-[200px] h-[200px] bg-white"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery-right w-[200px] h-[200px] bg-white"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery-right w-[200px] h-[200px] bg-gray-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
