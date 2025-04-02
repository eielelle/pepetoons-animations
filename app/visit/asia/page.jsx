"use client";

import { useState, useRef } from "react";
import React from "react";
import asiaCountry from "./data";
import AsiaGrid from "./AsiaGrid";

export default function Asia() {
  const [selectedCity, setSelectedCity] = useState(null);
  const modalRef = useRef(null);

  //Open model
  const openModal = (country, img, paragraph1, paragraph2, paragraph3) => {
    setSelectedCity({ country, img, paragraph1, paragraph2, paragraph3 });
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

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
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[950px]:grid-cols-2 lg:grid-cols-3 min-h-full overflow-hidden">
          {asiaCountry.map((city) => (
            <AsiaGrid key={city.id} {...city} onOpen={openModal} />
          ))}
        </div>
      </div>
      {/* End of Asia */}

      {/* Reusable Modals */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {selectedCity && (
            <>
              <h3 className="font-bold text-lg">{selectedCity.country}</h3>
              <p className="py-4 text-justify">{selectedCity.paragraph1}</p>
              <p className="py-2 text-justify">{selectedCity.paragraph2}</p>
              <p className="py-2 text-justify">{selectedCity.paragraph3}</p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
