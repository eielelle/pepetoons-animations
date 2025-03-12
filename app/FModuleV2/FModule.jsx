import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Teodora from "../../assets/Resources/Teodora_Alonso.png";
import Francisco from "../../assets/Resources/Francisco_Mercado.png";
import Saturina from "../../assets/Resources/Saturnina_Rizal.png";
import Paciano from "../../assets/Resources/Paciano_Rizal.png";

const FamilySection = () => {
  return (
    <div className="bg-[#0F1020] min-h-screen text-white p-8 font-sans">
      <h1 className="text-center text-3xl font-bold mb-8">Family</h1>

      <div className="grid grid-cols-2 gap-6 items-start relative">
        {/* Vertical Line in the Middle */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-500">
          {/* Icon 1: Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/4">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-blue-500 w-6 h-6"
            />
          </div>

          {/* Icon 2: Star */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-yellow-500 w-8 h-8"
            />
          </div>

          {/* Icon 3: Square */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-3/4">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-red-500 w-4 h-4"
            />
          </div>
        </div>

        {/* Left Side - Teodora Image with Name */}
        <div className="pr-4 relative h-auto ">
          <h2 className="text-right text-lg font-bold mb-2">
            Teodora Alonso Realonda
          </h2>
          <Image
            src={Teodora}
            alt="Teodora"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Teodora Description */}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
        </div>

        {/* Left Side - Francisco Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
        </div>

        {/* Right Side - Francisco Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Francisco Mercado Rizal
          </h2>
          <Image
            src={Francisco}
            alt="Francisco"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Saturnina Rizal - Hidalgo with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">
            Saturnina Rizal - Hidalgo
          </h2>
          <Image
            src={Saturina}
            alt="Teodora"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Saturnina Rizal - Hidalgo description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
        </div>

        {/* Left Side - Paciano Rizal  Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>
        </div>

        {/* Right Side - Paciano Rizal  Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">Paciano Rizal </h2>
          <Image
            src={Paciano}
            alt="Francisco"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
