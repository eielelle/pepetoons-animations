"use client";

import useAnimateScroll from "../../hooks/useAnimateScroll";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Description({ parentHeight, scrollTop }) {
  useAnimateScroll(parentHeight, scrollTop, 60, (val) => {
    const square = document.querySelector(".black-square");
    val = Math.max(20, val);

    anime({
      targets: square,
      width: `${val}%`,
      easing: "easeOutQuad",
      duration: 0,
    });
  });

  return (
    <div className="h-[30%] w-full mt-5 flex gap-5 justify-between">
      <div className="aspect-square w-[20%] bg-black black-square"></div>
      <div className="text-right w-[30%]">
        <h1 className="font-bold text-6xl mb-4">
          Life and Works of Rizal: Virtual Museum
        </h1>
        <p>
          Explore the life of José Rizal, a Filipino nationalist, intellectual,
          and martyr. Through his writings and sacrifices, Rizal inspired a
          nation and became a symbol of hope and independence. This virtual
          museum highlights his journey, from education to his ultimate
          sacrifice, showcasing his enduring legacy in the fight for justice and
          freedom.
        </p>
      </div>
    </div>
  );
}
