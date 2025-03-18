"use client";

import anime from "animejs";
import Image from "next/image";
import { data } from "./db";
import { useRef, useState } from "react";

import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default function RomanticLifePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const carouselRef = useRef(null);

  function slideLeft() {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => {
        const idx = prev - 1;
        animate(idx);

        return idx;
      });
    }
  }

  function slideRight() {
    if (currentIdx < data.length) {
      setCurrentIdx((prev) => {
        const idx = prev + 1;
        animate(idx);

        return idx;
      });
    }
  }

  function animate(idx) {
    anime({
      targets: carouselRef.current,
      translateX: `${idx * -17}rem`, // Move 200px to the left
      duration: 500,
      easing: "easeOutQuad",
    });
  }

  return (
    <main className="grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center h-screen p-8">
        <div>
          <p className="text-sm">Personal and Romantic Life</p>
          <h1 className="text-4xl font-black my-4">{data[currentIdx].name}</h1>
          <ul className="list">
            {data[currentIdx].content.map((data, key) => (
                <li className="list-row" key={key}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-end pb-32 gap-6 overflow-x-hidden">
        <div className="flex gap-4" ref={carouselRef}>
            {data.map((data, key) => (
                <div key={key} className="w-64 h-96 shrink-0 bg-red-400">
                    <Image className="object-cover w-full h-full" src={data.img} alt={data.name} />
                </div>
            ))}
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={slideLeft}
            className="transform transition duration-75 hover:scale-110 hover:cursor-pointer"
          >
            <ArrowLeftCircle size={32} />
          </button>
          <button
            onClick={slideRight}
            className="transform transition duration-75 hover:scale-110 hover:cursor-pointer"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
      </div>
    </main>
  );
}
