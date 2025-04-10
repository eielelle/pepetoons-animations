import React from "react";
import Image from "next/image";
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
import jamesonImg from "../../assets/Resources/Francisco_Mercado.png";
import jamesmarImg from "../../assets/Resources/Jamesmar.png";
import eleazarImg from "../../assets/Resources/Eleazar.png";
import shelloImg from "../../assets/Resources/Shello.png";
import axelImg from "../../assets/Resources/Axel.png";
import jerickImg from "../../assets/Resources/Jerick.png";
import vincentImg from "../../assets/Resources/Vincent.png";
import alghieImg from "../../assets/Resources/Alghie.png";

const members = [
  { name: "Jameson Teodore", role: "Project Manager", image: jamesonImg },
  { name: "Jamesmar Martin", role: "Animator", image: jamesmarImg },
  { name: "Eleazar Romero", role: "Developer, QA", image: eleazarImg },
  {
    name: "Shello Lois B Roxas",
    role: "Developer, Animator",
    image: shelloImg,
  },
  { name: "Axelwaren OIeno", role: "Developer", image: axelImg },
  { name: "Alghie Vic B Timan", role: "Developer", image: alghieImg },
  { name: "Jerick C De Guzman", role: "Developer", image: jerickImg },
  { name: "Vincent Jhon G Diala", role: "Animator", image: vincentImg },
];

export default function Team() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white">
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
          <h1 className="text-2xl md:text-3xl font-semibold mb-10">
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

            {members.length % 3 === 2 && (
              <div className="col-span-3 flex justify-center gap-6">
                {members.slice(-2).map((member, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-6 text-center w-1/3"
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

            {members.length % 3 === 1 && (
              <div className="col-span-3 flex justify-center">
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-1/3">
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto overflow-hidden">
                    <Image
                      src={members[members.length - 1].image}
                      alt={members[members.length - 1].name}
                      width={96}
                      height={96}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl text-black font-bold mt-4">
                    {members[members.length - 1].name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {members[members.length - 1].role}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col lg:flex-row items-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-black">
              What our community says about us!
            </h2>
            <p className="text-lg italic text-gray-700">
              "Exploring Rizal’s life through this platform has deepened my
              understanding of our history and inspired me to make a difference
              in my community."
            </p>
            <p className="font-bold mt-4 text-black">PBGen Edwin A Quilates</p>
            <p className="text-sm text-gray-500">Director, ITMS</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <Image
              src={PBGen_Quilates}
              alt="Testimonial"
              className="rounded-lg shadow-md w-64 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-13">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-black">
              What our community says about us!
            </h2>
            <p className="text-lg italic text-gray-700">
              "Exploring Rizal’s life through this platform has deepened my
              understanding of our history and inspired me to make a difference
              in my community."
            </p>
            <p className="font-bold mt-4 text-black">PCpt Bensar Ali A Karim</p>
            <p className="text-sm text-gray-500">OJT Supervisor</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <Image
              src={PCPT_Karim}
              alt="Testimonial"
              className="rounded-lg shadow-md w-64 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-13">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-black">
              What our community says about us!
            </h2>
            <p className="text-lg italic text-gray-700">
              "Exploring Rizal’s life through this platform has deepened my
              understanding of our history and inspired me to make a difference
              in my community."
            </p>
            <p className="font-bold mt-4 text-black">Pat. Jayson C Peñon</p>
            <p className="text-sm text-gray-500">OJT Assistant Supervisor</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <Image
              src={PCPT_Karim}
              alt="Testimonial"
              className="rounded-lg shadow-md w-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
