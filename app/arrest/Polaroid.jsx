'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function Polaroid({ img, caption, rotation }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        scale: [2, 1],
        duration: 1000,
        easing: "easeOutQuad",
      });
    }
  }, [isVisible]);

  return (
    <div
      className={`w-60 h-72 bg-white card rounded-none opacity-0 ${rotation}`}
      ref={ref}
    >
      <figure className="p-4 h-[90%]">
        <Image className="h-full w-full object-cover" src={img} alt="img" />
      </figure>
      <div className="card-body p-4 text-black font-semibold">
        <p>{caption}</p>
      </div>
    </div>
  );
}
