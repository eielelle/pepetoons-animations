"use client";

import React, { useState } from "react";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";

import { data } from './data'
import HeaderLayout from "../layouts/HeaderLayout";

export default function Visit() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const carouselRef = useRef(null);
  const [pos, setPos] = useState(0);
  let anim = null;

  function togglePlace() {
    setCurrentIdx(prev => {
      if (prev > 0) {
        return 0
      } else return 1
    })
  }

  useEffect(() => {
    setInterval(() => {
      setPos((prev) => prev - 100 / 6);
    }, 4000);

    anime({
      targets: ".popup",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: anime.stagger(200)
    })
  }, []);

  useEffect(() => {
    anim = anime({
      targets: carouselRef.current,
      translateX: `${pos}%`,
      easing: "easeInOutQuad",
    });

    if (pos < -100) {
      anim.pause();
      carouselRef.current.style.transform = "translateX(0%)";
      setPos(0);
    }
  }, [pos]);

  return (
    <HeaderLayout>
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <section className="relative">
        <Image
          className="w-full h-full object-cover"
          src={data[currentIdx].cover}
          alt="img"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="content absolute top-0 left-0 w-full h-full flex flex-col gap-6 justify-center items-center">
          <p className="popup">Places He Visited</p>
          <h1 className="text-6xl font-black popup">{data[currentIdx].title}</h1>
          <button onClick={togglePlace} className="btn btn-xl btn-primary btn-circle hover:animate-bounce popup">
            <ArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col h-full bg-black">
        <div className="flex-1 relative overflow-x-hidden">
          <div className="w-[600%] h-[600px] flex" ref={carouselRef}>
            {data[currentIdx].slides.map((value, key) => (
              <div key={key} className="w-1/6 h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={value}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold border-l-2 border-primary pl-4 popup">{data[currentIdx].title}</h1>
          <p className="my-6 popup">
            {data[currentIdx].description}
          </p>
          <Link className="btn btn-outline btn-primary btn-lg w-full popup" href={`visit/${data[currentIdx].url}`}>
            See More
          </Link>
        </div>
      </section>
    </main>

    </HeaderLayout>
  );
}
