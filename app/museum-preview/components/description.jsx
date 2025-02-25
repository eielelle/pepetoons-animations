"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Description() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // Use scroll position to interpolate the width
  const width = useTransform(scrollYProgress, [0, 1], ['20%', '60%']);


  return (
    <div className="h-[30%] w-full mt-5 flex gap-5 justify-between">
      <motion.div ref={targetRef} style={{ width }} className="aspect-square w-[20%] bg-black black-square"></motion.div>
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
