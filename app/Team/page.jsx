import React from "react";
import Image from "next/image";
import HeaderLayout from "../layouts/HeaderLayout";
import TeamPhoto from "../../assets/Resources/TeamPhoto.jpg";
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
import axelImg from "../../assets/Resources/Axel.png";
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
  return (
    <HeaderLayout>
      <div className="relative min-h-screen w-full flex flex-col items-center  justify-center bg-white mt-15">
        <div className="container mx-auto p-6 w-full max-w-5xl text-center">
          <h1 className="text-5xl font-extrabold text-black mb-3">
            <span className="text-[#000]">Pepe</span>
            <span className="text-[#000]">Toons</span> Team
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Meet the team and learn more about the origin story behind{" "}
            <span className="font-semibold text-black">PepeToons</span>
          </p>

          {/* Group Image */}
          <div className="relative w-full flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={TeamPhoto}
                alt="Team Photo"
                width={800}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col items-center justify-center min-h-96 bg-black text-white text-center px-4 mt-10">
            <h1 className="text-xl md:text-2xl font-semibold mb-10">
              "Honoring the legacy of Rizal, inspiring generations of change."
            </h1>
            <div className="flex space-x-6 mt-6">
              <FaPen className="text-gray-400 text-3xl hover:text-white transition" />
              <FaBook className="text-gray-400 text-3xl hover:text-white transition" />
              <FaRedhat className="text-gray-400 text-3xl hover:text-white transition" />
              <FaSun className="text-gray-400 text-3xl hover:text-white transition" />
              <FaLanguage className="text-gray-400 text-3xl hover:text-white transition" />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-white place-items-center">
            <div className="w-45 bg-white shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon icon={faMedal} className="text-black text-4xl" />
              <h2 className="font-bold text-lg mt-4 text-black">
                Honor the Past
              </h2>
            </div>
            <div className="w-45 bg-white shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-black text-4xl"
              />
              <h2 className="font-bold text-lg mt-4 text-black">
                Inspire the Future
              </h2>
            </div>
            <div className="w-45 h-65 lg:col-span-2 bg-white shadow-xl p-6 text-center rounded-2xl">
              <FontAwesomeIcon
                icon={faHandBackFist}
                className="text-black text-4xl"
              />
              <h2 className="font-bold text-lg mt-4 text-black">
                Empower Change
              </h2>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-13">
            <div className="text-center lg:text-left w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-3 text-black">
                What our community says about us!
              </h2>
              <p className="text-base italic text-gray-700">
                "Exploring Rizal’s life through this platform has deepened my
                understanding of our history and inspired me to make a
                difference in my community."
              </p>
              <p className="font-bold mt-3 text-black">
                PBGen Edwin A Quilates
              </p>
              <p className="text-sm text-gray-500">Director, ITMS</p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/3 mt-5 lg:mt-0 flex justify-center">
              <Image
                src={PBGen_Quilates}
                alt="PBGen Edwin A Quilates"
                className="rounded-lg shadow-md w-40 h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md h-full">
              {/* Text */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2 text-black">
                  What our community says
                </h2>
                <p className="text-base italic text-gray-700">
                  "Exploring Rizal’s life through this platform has deepened my
                  understanding of our history and inspired me to make a
                  difference in my community."
                </p>
                <p className="font-bold mt-2 text-black">
                  PCpt Bensar Ali A Karim
                </p>
                <p className="text-sm text-gray-500">OJT Supervisor</p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
                <Image
                  src={PCPT_Karim}
                  alt="PCpt Bensar Ali A Karim"
                  className="rounded-lg shadow-md w-32 h-auto object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md h-full">
              {/* Text */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2 text-black">
                  What our community says
                </h2>
                <p className="text-base italic text-gray-700">
                  "Exploring Rizal’s life through this platform has deepened my
                  understanding of our history and inspired me to make a
                  difference in my community."
                </p>
                <p className="font-bold mt-2 text-black">Pat Jayson C Peñon</p>
                <p className="text-sm text-gray-500">
                  OJT Assistant Supervisor
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center">
                <Image
                  src={Pat_Peñon}
                  alt="Pat Jayson C Peñon"
                  className="rounded-lg shadow-md w-32 h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center py-10">
            <h2 className="text-4xl text-black font-bold">Our Team</h2>
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
                    className="bg-white shadow-lg rounded-2xl p-6 text-center"
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
                    <h3 className="text-xl text-black font-bold mt-4">
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
                    className="bg-white shadow-lg rounded-2xl p-6 text-center w-[300px]"
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
                    <h3 className="text-xl text-black font-bold mt-4">
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
