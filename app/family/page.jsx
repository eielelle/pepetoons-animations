"use client";
import Image from "next/image";
import HeaderLayout from "../layouts/HeaderLayout";
import { familyData } from "./data";
import ParticleBg from "./ParticleBg";
import TimelineItem from "./TimelineItem";
import Teodora from "../../assets/Resources/teodora.png";
import Francisco from "../../assets/Resources/francisco.png";

import { useEffect } from "react";
import anime from "animejs";

export default function Family() {
  useEffect(() => {
    anime({
      targets: ".popup",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      delay: anime.stagger(200),
    });
  }, []);

  return (
    <HeaderLayout>
      <ParticleBg />
      <main
        className="min-h-screen mt-26 p-4 relative font-[montserrat]"
        style={
          {
            // backgroundImage: "url('/old-paper-bg.jpg')",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }
        }
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-100 inset-0"></div> */}
        <div className="container mx-auto">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <h1 className="text-5xl font-semibold mb-4 pl-4 border-l-4 border-primary popup">
              Rizal's Family
            </h1>
            <p className="mb-6 lg:w-1/2 popup">
              José Rizal's family was well-educated and financially stable,
              playing a crucial role in shaping his intellect, values, and
              patriotism.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12 popup">
              {/* Teodora */}
              <div className="bg-transparent p-2 w-[500px] flex flex-col items-center">
                <div className="bg-white w-[200px] h-[200px] p-2 flex items-center justify-center">
                  <Image
                    src={Teodora}
                    alt="Teodora Alonso Realonda"
                    width={200}
                    height={300}
                    className="object-contain items-center justify-center"
                  />
                </div>
                <div className="mt-4 text-center px-2">
                  <h2 className="text-2xl font-bold">
                    Teodora Alonso Realonda
                  </h2>
                  <p className="italic text-sm">1827–1911</p>
                  <p className="mt-2 text-sm max-w-xs mx-auto">
                    Teodora was a well-educated woman from a prominent family in
                    Manila. She was known for her intelligence, strong will, and
                    exceptional influence on her children.
                  </p>
                </div>
              </div>

              {/* Francisco */}
              <div className="bg-transparent p-2 w-[500px] flex flex-col items-center">
                <div className="bg-white w-[200px] h-[200px] p-2 flex items-center justify-center">
                  <Image
                    src={Francisco}
                    alt="Don Francisco Mercado Rizal"
                    width={200}
                    height={300}
                    className="object-contain "
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold">
                    Don Francisco Mercado Rizal
                  </h2>
                  <p className="italic text-sm">1818–1898</p>
                  <p className="mt-2 text-sm max-w-xs">
                    Don Francisco was a hardworking farmer from Biñan, Laguna.
                    Known for his honesty and discipline, he encouraged his
                    children to pursue education.
                  </p>
                </div>
              </div>
            </div>

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
