import React from "react";
import Image from "next/image";
import TeamPhoto from "../../assets/Resources/TeamPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-10">
            "Honoring the legacy of Rizal, inspiring generations of change."
          </h1>
          <div className="flex gap-8 md:gap-12">
            <span className="text-4xl md:text-5xl opacity-60">📦</span>
            <span className="text-4xl md:text-5xl opacity-60">💬</span>
            <span className="text-4xl md:text-5xl opacity-60">☁</span>
            <span className="text-4xl md:text-5xl opacity-60">🎵</span>
            <span className="text-4xl md:text-5xl opacity-60">💎</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-white place-items-center">
          <div className="card w-64 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon icon={faHeart} className="text-white text-4xl" />
            <h2 className="font-bold text-lg mt-4">Honor the Past</h2>
          </div>
          <div className="card w-64 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon icon={faUser} className="text-white text-4xl" />
            <h2 className="font-bold text-lg mt-4">Inspire the Future</h2>
          </div>
          <div className="card w-64 lg:col-span-2 bg-neutral shadow-xl p-6 text-center text-white">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="text-white text-4xl"
            />
            <h2 className="font-bold text-lg mt-4">Empower Change</h2>
          </div>
        </div>

        {/* Team */}

        <div className="text-center py-10">
          <h2 className="text-4xl text-black font-bold">Our Team</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-2">
            We’re a passionate, dedicated team united by a shared mission to
            honor Dr. José Rizal’s legacy. Our diverse group collaborates
            remotely, bringing together unique perspectives to create a
            meaningful, impactful platform that educates and inspires.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Jameson Teodore", role: "Project Manager", image: "#" },
              { name: "Jamesmar Martin", role: "Animator", image: "#" },
              { name: "Eleazar Romero", role: "Developer, QA", image: "#" },
              { name: "Shello Lois Roxas", role: "Developer", image: "#" },
              { name: "Axelwaren OIeno", role: "Developer", image: "#" },
              { name: "Alghie Vic Timan", role: "Developer", image: "#" },
            ].map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl p-5">
                <div className="avatar mx-auto mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-base-100 p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              What our community says about us!
            </h2>
            <p className="text-lg italic">
              &ldquo;Exploring Rizal’s life through this platform has deepened
              my understanding of our history and inspired me to make a
              difference in my community.&rdquo;
            </p>
            <p className="font-bold mt-4">PCPT Karim, OIC, ITMS</p>
            <p className="text-sm text-gray-500">OJT Coordinator</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/path-to-image.png"
              alt="Testimonial"
              className="rounded-lg shadow-md w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
