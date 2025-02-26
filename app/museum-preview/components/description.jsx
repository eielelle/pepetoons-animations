"use client";

import useAnimateScroll from "../../hooks/useAnimateScroll";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Description({ parentHeight, scrollTop }) {

  useAnimateScroll(parentHeight, scrollTop, 60, (val) => {
      const square = document.querySelector(".black-square")
      val = Math.max(20, val)

      anime({
        targets: square,
        width: `${val}%`,
        easing: "easeOutQuad",
        duration: 0,
      });
  })

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
