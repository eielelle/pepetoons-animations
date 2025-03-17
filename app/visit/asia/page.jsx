"use client";

import React from "react";
import Image from "next/image";
import Jap from "../../../assets/visit/asia/japan-1.jpg";
import HongKong from "../../../assets/visit/asia/hong-kong.jpg";
import Macau from "../../../assets/visit/asia/macau.jpg";
import SriLanka from "../../../assets/visit/asia/sri-lanka.jpg";
import Singapore from "../../../assets/visit/asia/singapore.jpg";
import Saigon from "../../../assets/visit/asia/saigon.jpg";

export default function Asia() {
  const openModal = (modalId) => {
    document.getElementById(modalId)?.showModal();
  };

  return (
    <>
      <main className="grid grid-cols-3 grid-rows-2">
        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
            Japan
          </h3>
          <Image
            src={Jap}
            alt="Asia City"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-6 relative z-150 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_japan")}
          >
            see more
          </button>
        </div>

        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
            Hongkong
          </h3>
          <Image
            src={HongKong}
            alt="Hong Kong"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-4 relative z-100 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_hongkong")}
          >
            see more
          </button>
        </div>

        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
            Macau
          </h3>
          <Image
            src={Macau}
            alt="Macau"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-4 relative z-100 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_macau")}
          >
            see more
          </button>
        </div>

        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl text-white relative z-20 mb-2 py-60">
            Sri Lanka
          </h3>
          <Image
            src={SriLanka}
            alt="Sri Langka"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_srilanka")}
          >
            see more
          </button>
        </div>

        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
            Singapore
          </h3>
          <Image
            src={Singapore}
            alt="Singapore"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_singapore")}
          >
            see more
          </button>
        </div>

        <div className="relative h-124 bg-amber-200 flex flex-col justify-end items-center hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-4xl italic text-white relative z-20 mb-2 py-60">
            Saigon
          </h3>
          <Image
            src={Saigon}
            alt="Saigon"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <button
            className="btn btn-sm shadow rounded-sm mb-4 relative z-20 bg-white text-black shadow-black hover:bg-black hover:text-white transition-colors"
            onClick={() => openModal("modal_saigon")}
          >
            see more
          </button>
        </div>
      </main>

      {/* Modals */}
      <dialog id="modal_japan" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Japan</h3>
          <p className="py-4">Details about Japan...</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal_hongkong" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hongkong</h3>
          <p className="py-4">Details about Hongkong...</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal_macau" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Macau</h3>
          <p className="py-4">Details about Macau...</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal_srilanka" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sri Lanka</h3>
          <p className="py-4">Details about Sri Lanka...</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal_singapore" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Singapore</h3>
          <p className="py-4">Details about Singapore...</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="modal_saigon" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Saigon</h3>
          <p className="py-4">Details about Saigon...</p>
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
