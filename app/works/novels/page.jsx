"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ParticleBg from "./ParticleBg";

import anime from "animejs";

import { poems } from "./poems";
import { essays } from "./essays";
import { works } from "./works";
import HeaderLayout from "../../layouts/HeaderLayout";

export default function NovelsContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    anime({
      targets: ".popup",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      delay: anime.stagger(200),
    });
  }, []);

  // Add useEffect for ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && selectedItem) {
        closeModal();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleEscKey);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedItem]); // Dependency array includes selectedItem

  const openModal = (value) => {
    setSelectedItem(value);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <HeaderLayout>
      <div className="relative mt-24 min-h-screen w-full">
        <ParticleBg />
        <div className="container mx-auto p-6 w-full">
          <h1 className="text-5xl font-bold text-white mb-4 border-l-4 border-primary pl-4 popup">
            Rizal's Literature
          </h1>
          <p className="lg:w-1/2 mb-12 popup">
            José Rizal’s literary works, including novels, essays, and poems,
            were powerful tools that exposed colonial oppression and inspired
            Filipino nationalism.
          </p>

          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab before:border-primary"
              aria-label="Literature"
              defaultChecked
            />
            <div className="tab-content p-10">
              <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {works.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
                  >
                    <figure className="w-52">
                      <Image
                        className="w-full h-full object-cover"
                        src={value.image}
                        alt="book"
                      />
                    </figure>
                    <div className="card-body flex-1">
                      <p className="font-light">{value.years}</p>
                      <h2 className="card-title text-primary">{value.name}</h2>
                      <p className="overflow-y-scroll">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Poems"
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {poems.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
                  >
                    <figure className="w-52">
                      <Image
                        className="w-full h-full object-cover"
                        src={value.image}
                        alt="book"
                      />
                    </figure>
                    <div className="card-body flex-1">
                      <p className="font-light">{value.years}</p>
                      <h2 className="card-title text-primary">{value.name}</h2>
                      <p className="overflow-y-scroll">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Essays"
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {essays.map((value, key) => (
                  <div
                    key={key}
                    className="card card-side bg-base-100 h-[300px] shadow-sm transition-all hover:scale-110 hover:cursor-pointer popup"
                    onClick={() => openModal(value)}
                  >
                    <figure className="w-52">
                      <Image
                        className="w-full h-full object-cover"
                        src={value.image}
                        alt="book"
                      />
                    </figure>
                    <div className="card-body flex-1">
                      <p className="font-light">{value.years}</p>
                      <h2 className="card-title text-primary">{value.name}</h2>
                      <p className="overflow-y-scroll">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedItem && (
          <div className="modal modal-open">
            <div className="modal-box w-11/12 h-3/4 max-w-5xl">
              <div className="modal-header sticky top-0 right-0 z-10 flex justify-end items-end p-4">
                <button
                  className="btn btn-md btn-circle btn-primary items-center outline-offset-0 transform transition duration-75 hover:scale-110 hover:cursor-pointer"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <p className="text-xl text-center font-bold">
                  {selectedItem.name}
                </p>
                <p className="font-light text-center">{selectedItem.years}</p>
                <br />
                <p className="text-center whitespace-pre-line">
                  {selectedItem.content}
                  <br />
                  <a
                    className="btn bg-white link text-black hover:text-blue-700 mt-3 no-underline transform transition duration-75 hover:scale-110 hover:cursor-pointer"
                    href={selectedItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See more content
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </HeaderLayout>
  );
}
