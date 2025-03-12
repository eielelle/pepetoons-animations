import React from "react";
import Image from "next/image";
import Monument from '../../assets/legacyassets/monument.jpg';
import PhilippineIndependence from '../../assets/legacyassets/Philippine_independence.jpg';
import RizalCommoratives from '../../assets/legacyassets/rizal_commoratives.jpg';

export default function LegacyContent() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      {/*<div className="absolute inset-0 bg-black opacity-40"></div>*/}

      {/* card container */}
      <div className="z-10 p-6 rounded-lg w-full max-w-4xl items-center">
        <h6
          className="text-5xl text-center mb-12"
          style={{ fontFamily: "'Tahoma', Sans-serif", color: "#F0DFDF" }}
        >
          LEGACY & INFLUENCE
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 items-center justify-center">
          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            width={300}
            height={300}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={Monument} alt="Monument" className="object-cover rounded-sm" width={100} height={100} />
              <h2 className="card-title text-xl font-bold text-center mt-4 text-white">
                National Hero Statue
              </h2>
            </div>
          </div>

          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={PhilippineIndependence} alt="Philippine Independence" className="object-cover rounded-sm" width={100} height={100}/>
              <h2 className="card-title text-xl font-bold text-center mt-4 text-white">
                Philippine Independence
              </h2>
            </div>
          </div>

          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={RizalCommoratives} alt="Rizal Commoratives" className="object-cover rounded-sm" width={100} height={100}/>
              <h2 className="card-title text-md font-bold text-center mt-4 text-white">
                Modern Day Commoratives
              </h2>
            </div>
          </div>
          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            width={300}
            height={300}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={Monument} alt="Monument" className="object-cover rounded-sm" width={100} height={100} />
              <h2 className="card-title text-xl font-bold text-center mt-4 text-white">
                National Hero Statue
              </h2>
            </div>
          </div>

          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={PhilippineIndependence} alt="Philippine Independence" className="object-cover rounded-sm" width={100} height={100}/>
              <h2 className="card-title text-xl font-bold text-center mt-4 text-white">
                Philippine Independence
              </h2>
            </div>
          </div>

          <div
            className="card w-46 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
            <Image src={RizalCommoratives} alt="Rizal Commoratives" className="object-cover rounded-sm" width={100} height={100}/>
              <h2 className="card-title text-md font-bold text-center mt-4 text-white">
                Modern Day Commoratives
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
