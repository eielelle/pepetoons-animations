"use client";

import SmallCluster from "./small-cluster";
import { useEffect, useState } from "react";
import anime from "animejs";
import useAnimateScroll from "../../hooks/useAnimateScroll";

export default function FeatureCarousel({ parentHeight, scrollTop }) {

  useAnimateScroll(parentHeight, scrollTop, 80, (val) => {
      const carousel = document.querySelector(".carousel-custom")

      anime({
        targets: carousel,
        translateX: `-${val}%`,
        easing: "easeOutQuad",
        duration: 0,
      });
  })

  return (
    <div className="w-full h-[50%] overflow-x-hidden">
      <div className="w-[500%] h-full flex items-center border-y-2 carousel-custom">
        {/* 1 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2 relative">
          <p className="absolute bottom-0 left-0 w-[50%] mb-4 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ducimus delectus debitis rem ad velit temporibus.
          </p>
        </div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2"></div>
        <SmallCluster />

        {/* 2 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2"></div>
        <SmallCluster />

        {/* 3 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2"></div>
        <SmallCluster />

        {/* 4 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2"></div>
        <SmallCluster />

        {/* 5 */}
        <div className="w-[calc((100%/5)/2)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/7)] h-full border-r-2"></div>
        <div className="w-[calc((100%/5)/4)] h-full border-r-2 bg-red-500"></div>
        <SmallCluster />
      </div>
    </div>
  );
}
