'use client'

import HeaderLayout from "../layouts/HeaderLayout";
import { familyData } from "./data";
import ParticleBg from "./ParticleBg";
import TimelineItem from "./TimelineItem";

import { useEffect } from "react";
import anime from 'animejs'

export default function Family() {
  useEffect(() => {
    anime({
      targets: ".popup",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: anime.stagger(200)
    })
  }, [])
  
  return (
    <HeaderLayout>
      <ParticleBg />
      <main
        className="min-h-screen mt-26 p-4 relative font-[montserrat]"
        style={{
          // backgroundImage: "url('/old-paper-bg.jpg')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-100 inset-0"></div> */}
        <div className="container mx-auto">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <h1 className="text-5xl font-semibold mb-4 pl-4 border-l-4 border-primary popup">Rizal's Family</h1>
            <p className="mb-6 lg:w-1/2 popup">
              José Rizal's family was well-educated and financially stable,
              playing a crucial role in shaping his intellect, values, and
              patriotism.
            </p>
            {familyData.map((value, key) => (
              <TimelineItem
                key={key}
                isEnd={key % 2 == 0}
                title={value.name}
                year={value.year}
                img={value.img}
                description={value.description}
              />
            ))}
          </ul>
        </div>
      </main>

    </HeaderLayout>
  );
}
