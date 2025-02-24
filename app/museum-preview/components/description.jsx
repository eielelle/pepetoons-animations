"use client";

import { useEffect, useState } from "react";
import anime from "animejs";

export default function Description() {
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
    const square = document.querySelector(".black-square");

    anime({
      targets: square,
      width: `${Math.max(20, 1 * scrollPercentage * 60)}%`,
      easing: "easeOutQuad",
      duration: 0, // Instant transition to keep it smooth
    });
  }, [scrollPos]);

  return (
    <div className="h-[30%] w-full mt-5 flex gap-5 justify-between">
      <div className="aspect-square w-[20%] bg-black black-square"></div>
      <div className="text-right w-[30%]">
        <h1 className="font-bold text-6xl mb-4">
          Life and Works of Rizal: Virtual Museum
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          numquam sed aliquid, nobis nam consequatur dolorum quod impedit cum
          modi reprehenderit, animi fugit excepturi voluptate repellat facere
          fugiat delectus error!
        </p>
      </div>
    </div>
  );
}
