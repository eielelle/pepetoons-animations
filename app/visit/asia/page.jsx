"use client";

import { useState, useRef, useEffect } from "react";
import React from "react";
import asiaCountry from "./data";
import AsiaGrid from "./AsiaGrid";
import { ArrowLeft } from "react-feather";
import Link from "next/link";

export default function Asia() {
  const [selectedCity, setSelectedCity] = useState(null);
  const modalRef = useRef(null);

  //Open model
  const openModal = (country, paragraph1, paragraph2, paragraph3) => {
    setSelectedCity({ country, paragraph1, paragraph2, paragraph3 });
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

    // Add useEffect for ESC key handler
      useEffect(() => {
        const handleEscKey = (event) => {
          if (event.key === "Escape" && selectedCity) {
            closeModal();
          }
        };
  
        // Add event listener when component mounts
        document.addEventListener("keydown", handleEscKey);
  
        // Clean up event listener when component unmounts
        return () => {
          document.removeEventListener("keydown", handleEscKey);
        };
      }, [selectedCity]);

  //Close Modal
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setSelectedCity(null);
  };

  return (
    <>
      {/* Start of Asia */}
      <div className="h-screen overflow-auto">
        <Link href="/visit">
          <button className="btn btn-xl btn-primary btn-circle absolute top-5 left-5 z-50 transform transition duration-75 hover:scale-110 hover:cursor-pointer">
            <ArrowLeft />
          </button>
        </Link>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[950px]:grid-cols-2 min-h-full overflow-hidden">
          {asiaCountry.map((city) => (
            <AsiaGrid key={city.id} {...city} onOpen={openModal} />
          ))}
        </div>
      </div>
      {/* End of Asia */}

      {/* Reusable Modals */}
      {selectedCity && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 h-auto max-w-5xl text-center overflow-auto">
            <div className="modal-header sticky top-0 right-0 bottom-0 z-10 flex justify-end items-end m-auto">
              <button
                className="btn btn-md btn-circle absolute top-1 btn-primary items-center outline-offset-0 transform transition duration-75 hover:scale-110 hover:cursor-pointer"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <div className="modal-body  p-3 overflow-auto">
              <h3 className="font-bold text-lg">{selectedCity.country}</h3>
              <p className="py-4 text-justify mt-3">
                {selectedCity.paragraph1}
              </p>
              <p className="py-2 text-justify">{selectedCity.paragraph2}</p>
              <p className="py-2 text-justify">{selectedCity.paragraph3}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
