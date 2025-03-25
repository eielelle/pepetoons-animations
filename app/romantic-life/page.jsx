"use client";

import anime from "animejs";
import Image from "next/image";
import { data } from "./db";
import { useEffect, useRef, useState } from "react";

import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default function RomanticLifePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const carouselRef = useRef(null);

  function slideLeft() {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => {
        const idx = prev - 1;

        return idx;
      });
    }
  }

  function slideRight() {
    if (currentIdx < data.length - 1) {
      setCurrentIdx((prev) => {
        const idx = prev + 1;

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

  useEffect(() => {
    animate(currentIdx);
  }, [currentIdx]);

  return (
    <main className="h-screen w-screen relative">
      <Image
        className="w-full h-full object-cover blur-md"
        src={data[currentIdx].img}
        alt={"img"}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 gap-10 md:w-auto">
        <div className="flex flex-col justify-center md:h-screen p-1 lg:p-6 col-span-2 md:col-span-1">
          <div className="text-center md:text-left sm:text-sm">
            <p className="text-sm">Personal and Romantic Life</p>
            <h1 className="text-2xl md:text-4xl font-black my-2 md:my-4">
              {data[currentIdx].name}
            </h1>
            <ul className="list">
              {data[currentIdx].content.map((data, key) => (
                <li className="list-row" key={key}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:h-screen flex flex-col justify-end pb-32 gap-6 overflow-x-hidden col-span-2 md:col-span-1">
          <div className="flex gap-4" ref={carouselRef}>
            {data.map((data, key) => (
              <div
                key={key}
                className="w-64 h-96 shrink-0 bg-white card rounded-none sm: w-54 h-76"
              >
                <figure className="h-[90%] p-4">
                  <Image
                    className={`object-cover w-full h-full transition-all ${
                      key != currentIdx && "blur-xs"
                    }`}
                    src={data.img}
                    alt={data.name}
                  />
                </figure>
                <div className="card-body"></div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
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
      </div>
    </main>
  );
}
