"use client";
import React from "react";
import Image from "next/image";
import HeaderLayout from "../layouts/HeaderLayout";
import { useState, useEffect } from "react";
import TeamPhoto from "../../assets/Resources/TeamPhoto.jpg";
import TeamImage from "../../assets/Resources/with-director.jpg";
import Image1 from "../../assets/Resources/image_1.jpg";
import Image2 from "../../assets/Resources/image_2.jpg";
import Image3 from "../../assets/Resources/image_3.jpg";
import img1 from "../../assets/Resources/present.jpg";
import img2 from "../../assets/Resources/2.jpg";
import img3 from "../../assets/Resources/3.jpg";
import img4 from "../../assets/Resources/4.jpg";
import img5 from "../../assets/Resources/5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faBullseye,
  faHandBackFist,
} from "@fortawesome/free-solid-svg-icons";

import { FaBook, FaRedhat, FaLanguage, FaPen, FaSun } from "react-icons/fa";

// Import team images
import PBGen_Quilates from "../../assets/Resources/PBGen.Quilates.png";
import PCPT_Karim from "../../assets/Resources/PCPT.Ben_Karim.png";
import Pat_Peñon from "../../assets/Resources/Pat.Peñon.png";
import jamesonImg from "../../assets/Resources/Jameson.png";
import jamesmarImg from "../../assets/Resources/Jamesmar.png";
import eleazarImg from "../../assets/Resources/Eleazar.png";
import shelloImg from "../../assets/Resources/Shello.png";
import axelImg from "../../assets/Resources/axelpogi.jpg";
import jerickImg from "../../assets/Resources/Jerick.png";
import alghieImg from "../../assets/Resources/Alghie.png";
import vincentImg from "../../assets/Resources/cent.png";

const members = [
  {
    name: "Jameson G. Teodore",
    role: "Project Manager, Animator",
    image: jamesonImg,
  },
  { name: "Jamesmar P. Martin", role: "Animator, QA", image: jamesmarImg },
  { name: "Eleazar A. Romero", role: "Developer, QA", image: eleazarImg },
  {
    name: "Shello Lois B. Roxas",
    role: "Developer, Animator",
    image: shelloImg,
  },
  { name: "Axelwaren C. OIeno", role: "Developer", image: axelImg },
  { name: "Alghie Vic B. Timan", role: "Developer", image: alghieImg },
  { name: "Jerick C. De Guzman", role: "Developer", image: jerickImg },
  { name: "Vincent Jhon G. Diala", role: "Animator", image: vincentImg },
];

export default function Team() {
  const images = [
    TeamPhoto,
    TeamImage,
    Image1,
    Image2,
    Image3,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <HeaderLayout>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black mt-25">
        <div className="container mx-auto p-6 w-full max-w-5xl text-center">
          <h1 className="text-5xl font-extrabold text-white mb-3">
            <span className="text-white">Pepe</span>
            <span className="text-white">Toons</span> Team
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Meet the team and learn more about the origin story behind{" "}
            <span className="font-semibold text-white">PepeToons</span>
          </p>

          {/* Group Image */}
          <div className="relative w-full flex justify-center">
            <div
              className="relative w-[800px] h-[500px] overflow-hidden rounded-xl shadow-lg"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Image
                src={images[currentIndex]}
                alt={`Team Photo ${currentIndex + 1}`}
                fill
                className="object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col items-center justify-center min-h-96 bg-black text-white text-center px-4 mt-10">
            <h1 className="text-xl md:text-2xl font-semibold mb-10">
              "Honoring the legacy of Rizal, inspiring generations of change."
            </h1>
            <div className="flex space-x-6 mt-6">
              <FaPen className="text-gray-400 text-3xl" />
              <FaBook className="text-gray-400 text-3xl" />
              <FaRedhat className="text-gray-400 text-3xl" />
              <FaSun className="text-gray-400 text-3xl" />
              <FaLanguage className="text-gray-400 text-3xl" />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-black place-items-center">
            <div className="w-45 bg-black shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon icon={faMedal} className="text-white text-4xl" />
              <h2 className="font-bold text-lg mt-4 text-white">
                Honor the Past
              </h2>
            </div>
            <div className="w-45 bg-black shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-white text-4xl"
              />
              <h2 className="font-bold text-lg mt-4 text-white">
                Inspire the Future
              </h2>
            </div>
            <div className="w-45 h-65 lg:col-span-2 bg-black shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon
                icon={faHandBackFist}
                className="text-white text-4xl"
              />
              <h2 className="font-bold text-lg mt-4 text-white">
                Empower Change
              </h2>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col lg:flex-row items-center bg-black p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-13">
            <div className="text-center lg:text-left w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-3 text-white">
                What our community says about us!
              </h2>
              <p className="text-base italic text-gray-500">
                "Encouraging the youth to explore history through technology
                ensures that the courage and wisdom of our heroes continue to
                inspire future generations."
              </p>
              <p className="font-bold mt-3 text-white">
                PBGen Edwin A Quilates
              </p>
              <p className="text-sm text-gray-500">Director, ITMS</p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/3 mt-5 lg:mt-0 flex justify-center">
              <Image
                src={PBGen_Quilates}
                alt="PBGen Edwin A Quilates"
                className="bg-white rounded-lg shadow-md w-40 h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-black p-6 rounded-lg shadow-md h-full">
              {/* Text */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2 text-whute">
                  What our community says
                </h2>
                <p className="text-base italic text-gray-500">
                  "With the help of technology, historical knowledge becomes
                  more vivid, interactive, and relevant to today’s learners."
                </p>
                <p className="font-bold mt-2 text-white">
                  PCpt Bensar Ali A Karim
                </p>
                <p className="text-sm text-gray-500">OJT Supervisor</p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
                <Image
                  src={PCPT_Karim}
                  alt="PCpt Bensar Ali A Karim"
                  className="bg-white rounded-lg shadow-md w-32 h-auto object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-black p-6 rounded-lg shadow-md h-full">
              {/* Text */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  What our community says
                </h2>
                <p className="text-base italic text-gray-500">
                  "By studying history, we gain the insight to honor our
                  heritage and the foresight to shape a better tomorrow."
                </p>
                <p className="font-bold mt-2 text-white">Pat Jayson C Peñon</p>
                <p className="text-sm text-gray-500">
                  OJT Assistant Supervisor
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
                <Image
                  src={Pat_Peñon}
                  alt="Pat Jayson C Peñon"
                  className=" bg-white rounded-lg shadow-md w-32 h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center py-10">
            <h2 className="text-4xl text-white font-bold">Our Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-2">
              We’re a passionate, dedicated team united by a shared mission to
              honor Dr. José Rizal’s legacy. Our diverse group collaborates
              remotely, bringing together unique perspectives to create a
              meaningful, impactful platform that educates and inspires.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {members
                .slice(0, members.length - (members.length % 3 === 2 ? 2 : 0))
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-black shadow-lg rounded-2xl p-6 text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-white-300 mx-auto overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="bg-black object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl text-white font-bold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                  </div>
                ))}
            </div>

            {members.length % 3 === 2 && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
                {members.slice(-2).map((member, index) => (
                  <div
                    key={index}
                    className="bg-black shadow-lg rounded-2xl p-6 text-center w-[300px]"
                  >
                    <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl text-white font-bold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
