"use client";

import React from "react";
import Image from "next/image";
import EuropeCity1 from "../../assets/visit/europe-city.jpg";
import EuropeCity2 from "../../assets/visit/europe-city2.jpg";
import EuropeCity3 from "../../assets/visit/europe-city3.jpg";
import EuropeCity4 from "../../assets/visit/europe-city4.jpg";
import EuropeCity5 from "../../assets/visit/europe-city5.jpg";
import EuropeCity6 from "../../assets/visit/europe-city6.jpg";
import AsiaCity1 from "../../assets/visit/asia-city.jpg";
import AsiaCity2 from "../../assets/visit/asia-city2.jpg";
import AsiaCity3 from "../../assets/visit/asia-city3.jpg";
import AsiaCity4 from "../../assets/visit/asia-city4.jpg";
import AsiaCity5 from "../../assets/visit/asia-city5.jpg";
import AsiaCity6 from "../../assets/visit/asia-city6.jpg";

export default function Visit() {
  return (
    <main className="relative h-screen">
      {/* Title - now centered and made more visible */}
      <h1
        className="text-5xl text-center w-full absolute top-0 z-20 py-8"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "#F0DFDF",
        }}
      >
        PLACES HE VISITED
      </h1>

      <div className="grid grid-cols-2 h-screen">
        {/* Europe Carousel */}
        <div className="carousel w-full h-full relative" data-carousel="slide">
          {/* Europe 1 */}
          <div id="slide1" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity1}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Europe 2 */}
          <div id="slide2" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity2}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Europe 3 */}
          <div id="slide3" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity3}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Europe 4 */}
          <div id="slide4" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity4}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Europe 5 */}
          <div id="slide5" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity5}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Europe 6 */}
          <div id="slide6" className="carousel-item relative w-full h-full">
            <Image
              src={EuropeCity6}
              alt="Europe City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/europe")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors absolute"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Europe
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* Asia Carousel */}
        <div className="carousel w-full h-full relative" data-carousel="slide">
          {/* Asia 1 */}
          <div id="asia1" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity1}
              alt="Asia City 1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia1" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Asia 2 */}
          <div id="asia2" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity2}
              alt="Asia City 2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia1" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Asia 3 */}
          <div id="asia3" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity3}
              alt="Asia City 3"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia2" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Asia 4 */}
          <div id="asia4" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity4}
              alt="Asia City 4"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia3" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Asia 5 */}
          <div id="asia5" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity5}
              alt="Asia City 5"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia4" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* Asia 6 */}
          <div id="asia6" className="carousel-item relative w-full h-full">
            <Image
              src={AsiaCity6}
              alt="Asia City 6"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <button
                onClick={() => (window.location.href = "/visit/asia")}
                className="btn btn-xl shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                Asia
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#asia5" className="btn btn-circle">
                ❮
              </a>
              <a href="#asia1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
