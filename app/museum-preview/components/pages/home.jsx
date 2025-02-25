'use client'

import { useRef, useEffect, useState } from "react";
import Description from "../description";
import FeatureCarousel from "../feature-carousel";
import Header from "../header";

export default function Home() {
  const ref = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
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
    if (ref.current) {
      setParentHeight(ref.current.getBoundingClientRect().height);
      setScrollTop(ref.current.getBoundingClientRect().top);
    }
  }, [scrollPos]);

  useEffect(() => {
    // Check if ref is defined and update parentHeight
    if (ref.current) {
      setParentHeight(ref.current.getBoundingClientRect().height);
      setScrollTop(ref.current.getBoundingClientRect().top);
    }
  }, []);

  return (
    <div ref={ref} className="h-[300%]">
      <section
        id="home"
        className="h-screen sticky text-black top-0 z-10 bg-white"
      >
        <div className="container h-full mx-auto">
          <Header />
          <FeatureCarousel parentHeight={parentHeight} scrollTop={scrollTop} />
          <Description />
        </div>
      </section>
    </div>
  );
}
