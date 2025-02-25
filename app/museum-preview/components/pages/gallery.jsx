"use client";

import Header from "../header";
import { useEffect, useState } from "react";
import anime from "animejs";

export default function Gallery() {
  const [scrollPos, setScrollPos] = useState(0);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    const scrollLimit =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPos / scrollLimit;
    const squares = document.querySelectorAll(".square-gallery");

    anime({
      targets: squares,
      translateX: scrollPercentage * 100,
      color: "red",
      easing: "easeOutQuad",
      duration: 0, // Instant transition to keep it smooth
    });
  }, [scrollPos]);

  return (
    <section id="gallery" className="h-screen bg-black text-white sticky top-0">
      <div className="container mx-auto">
        <Header color="white" />
        <div className="border-t-2 border-white mb-24">
          <h1 className="text-8xl font-bold">Introducing Jose Rizal</h1>
        </div>

        <div className="flex justify-between">
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery w-[200px] h-[200px] bg-gray-500"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery w-[200px] h-[200px] bg-white"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery w-[200px] h-[200px] bg-white"></div>
          </div>
          <div className="border border-white p-8 h-[400px]">
            <div className="square-gallery w-[200px] h-[200px] bg-gray-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
