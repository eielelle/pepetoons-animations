"use client";
import { useState, useRef } from "react";
import EuropeActivities from "./data";
import EuropeGrid from "./EuropeGrid";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import Image from "next/image";

export default function Europe() {
  const [selectedCity, setSelectedCity] = useState(null);
  const modalRef = useRef(null);

  //Open model
  const openModal = (
    city,
    country,
    date,
    activity1,
    description1,
    activity2,
    description2,
    activity3,
    description3
  ) => {
    setSelectedCity({
      city,
      country,
      date,
      activity1,
      description1,
      activity2,
      description2,
      activity3,
      description3,
    });
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
      {/* Start of eorupe module */}
      <div className="h-screen overflow-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 ">
        <Link href="/visit">
          <button className="btn btn-xl btn-primary btn-circle absolute top-5 left-5 z-50 transform transition duration-75 hover:scale-110 hover:cursor-pointer">
            <ArrowLeft />
          </button>
        </Link>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[950px]:grid-cols-2 min-h-full overflow-hidden">
          {EuropeActivities.map((city) => (
            <EuropeGrid key={city.id} {...city} onOpen={openModal} />
          ))}
        </div>
        {/* //End of eorupe module */}

        {/* Reusable Modals */}
        {selectedCity && (
          <div className="modal modal-open">
            <div className="modal-box w-11/12 h-auto max-w-5xl text-center">
              <div className="modal-header sticky top-0 right-0 bottom-0 z-10 flex justify-end items-end m-auto">
                <button
                  className="btn btn-md btn-circle absolute top-1 btn-primary items-center outline-offset-0 transform transition duration-75 hover:scale-110 hover:cursor-pointer"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>

              <div className="modal-body flex flex-col gap-4 overflow-auto p-5">
                {/* <span className="absolute">{selectedCity.flag} </span> */}

                <h5 className="text-2xl font-extrabold">
                  {selectedCity.city}, {selectedCity.country}{" "}
                  {selectedCity.date}{" "}
                </h5>
                <h3 className="text-2xl font-semibold">
                  {selectedCity.activity1}
                </h3>
                <p className="text-lg">{selectedCity.description1}</p>
                <h3 className="text-2xl font-semibold">
                  {selectedCity.activity2}
                </h3>
                <p className="text-lg">{selectedCity.description2}</p>
                <h3 className="text-2xl font-semibold">
                  {selectedCity.activity3}
                </h3>
                <p className="text-lg">{selectedCity.description3}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
