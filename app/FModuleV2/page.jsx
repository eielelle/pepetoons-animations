import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Teodora from "../../assets/Resources/Teodora_Alonso.png";
import Francisco from "../../assets/Resources/Francisco_Mercado.png";
import Saturina from "../../assets/Resources/Saturnina_Rizal.png";
import Paciano from "../../assets/Resources/Paciano_Rizal.png";
import Narcisa from "../../assets/Resources/Narcisa_Rizal.png";
import Olympia from "../../assets/Resources/Olympia_Rizal.png";
import Lucia from "../../assets/Resources/Lucia_Rizal.png";
import Maria from "../../assets/Resources/Maria_Rizal.png";
import Jose from "../../assets/Resources/José_Rizal.png";
import Concepcion from "../../assets/Resources/Concepcion_Rizal.png";
import Josefa from "../../assets/Resources/Josefa_Rizal.png";
import Trinidad from "../../assets/Resources/Trinidad_Rizal.png";
import Soledad from "../../assets/Resources/Soledad_Rizal.png";

const FamilySection = () => {
  return (
    <div className="bg-[#0F1020] min-h-screen text-white p-8 font-sans">
      <h1 className="text-center text-3xl font-bold mb-8">Family</h1>

      <div className="grid grid-cols-2 gap-6 items-start relative">
        {/* Vertical Line in the Middle */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-500">
          {/* Icon 1: Teodora*/}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/225">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 2: Francisco*/}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-3/37">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 3: Saturina */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4/25">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 4: Paciano */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4/17">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 5: Narcisa */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-5/16">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 6: Olympia */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-6/10">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 7: Lucia */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8/17">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 8: Maria */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-4/9">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 9: Jose */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-11/30">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 10: Concepcion */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-11/38">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 11: Josefa */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-11/52">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 12: Trinidad */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-11/82">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>

          {/* Icon 13: Soledad */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-11/190">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white-500 w-8 h-8"
            />
          </div>
        </div>

        {/* Left Side - Teodora Image with Name */}
        <div className="pr-4 relative h-auto ">
          <h2 className="text-right text-lg font-bold mb-2">
            Teodora Alonso Realonda (1827-1911)
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
            Teodora was a well-educated woman from a prominent family in Manila.
            She was known for her intelligence, strong will, and exceptional
            influence on her children. Her guidance and nurturing played a
            crucial role in shaping Jose Rizal's character and values.
          </p>
        </div>

        {/* Left Side - Francisco Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Don Francisco was a hardworking farmer from Biñan, Laguna. He was
            known for his honesty, diligence, and dedication to providing for
            his family. He guided his children with discipline and encouraged
            their pursuit of education.
          </p>
        </div>

        {/* Right Side - Francisco Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Don Francisco Mercado Rizal (1818-1898)
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
            Saturnina Rizal Hidalgo (1850-1913)
          </h2>
          <Image
            src={Saturina}
            alt="Saturina"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Saturnina Rizal - Hidalgo description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            The eldest child of Francisco and Teodora, Saturnina played a
            maternal role among her siblings. She was married to Manuel T.
            Hidalgo and actively supported Jose Rizal throughout his life.
          </p>
        </div>

        {/* Left Side - Paciano Rizal  Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Paciano was Jose Rizal's older brother and a prominent
            revolutionary. As a devoted nationalist, Paciano guided and
            supported Jose, acting as a father figure and playing a significant
            role in his educational and political journey.
          </p>
        </div>

        {/* Right Side - Paciano Rizal  Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Paciano Rizal (1851-1930){" "}
          </h2>
          <Image
            src={Paciano}
            alt="Paciano"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Narcisa Rizal - Lopez with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">
            Narcisa Rizal Lopez (1852-1939)
          </h2>
          <Image
            src={Narcisa}
            alt="Narcisa"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Narcisa Rizal - Hidalgo description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Narcisa was known for her resourcefulness and strong family loyalty.
            She played a vital role in locating Jose Rizal's remains after his
            execution.
          </p>
        </div>

        {/* Left Side - Olympia Rizal - Ubaldo  Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Olympia was Jose Rizal's sister who married Silvestre Ubaldo. She
            maintained a close relationship with her brother and supported him
            during his endeavors.
          </p>
        </div>

        {/* Right Side - Olympia Rizal - Ubaldo  Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Olympia Rizal (1855-1887)
          </h2>
          <Image
            src={Olympia}
            alt="Olympia"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Lucia Rizal - Herbosa with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">
            Lucia Rizal Herbosa (1857-1919)
          </h2>
          <Image
            src={Lucia}
            alt="Lucia"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Lucia Rizal - Herbosa description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Lucia married Mariano Herbosa, who passed away due to health
            complications. She supported her brother Jose Rizal's reforms and
            ideals.
          </p>
        </div>

        {/* Left Side - Maria Rizal - Cruz Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Maria married Daniel Faustino Cruz of Biñan. She actively engaged in
            family matters and was known for her strong-willed personality.
          </p>
        </div>

        {/* Right Side - Maria Rizal - Cruz Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Maria Rizal (1859-1945)
          </h2>
          <Image
            src={Maria}
            alt="Maria"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Jose Rizal with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">Jose Rizal</h2>
          <Image
            src={Jose}
            alt="Jose"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Jose Rizal  description*/}
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

        {/* Left Side - Cocepcion Rizal Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Concepcion, affectionately called "Concha," passed away at a young
            age. Her death deeply affected Jose Rizal, who often mentioned her
            in his writings.
          </p>
        </div>

        {/* Right Side - Cocepcion Rizal Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Concepcion Rizal (1862-1865)
          </h2>
          <Image
            src={Concepcion}
            alt="Concepcion"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Josefa Rizal with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">
            Josefa Rizal (1865-1945)
          </h2>
          <Image
            src={Josefa}
            alt="Josefa"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Josefa Rizal  description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Josefa remained unmarried and actively participated in the Katipunan
            movement. Known for her patriotism, she played a role in the
            country's revolutionary efforts.
          </p>
        </div>

        {/* Left Side - Trinidad Rizal Description */}
        <div className="pr-4 relative">
          <p className="text-sm leading-relaxed">
            Trinidad, like Josefa, never married and dedicated herself to
            supporting Jose Rizal's cause. Before his execution, Jose entrusted
            her with his famous poem, "Mi Ultimo Adios."
          </p>
        </div>

        {/* Right Side - Trinidad Rizal Image with Name */}
        <div className="pl-4 relative h-auto">
          <h2 className="text-left text-lg font-bold mb-2">
            Trinidad Rizal (1868-1951)
          </h2>
          <Image
            src={Trinidad}
            alt="Trinidad"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Left Side - Soledad Rizal - Quintero with name*/}
        <div className="pr-4 relative h-auto">
          <h2 className="text-right text-lg font-bold mb-2">
            Soledad Rizal (1870-1929)
          </h2>
          <Image
            src={Soledad}
            alt="Soledad"
            width={200}
            height={200}
            className="rounded-lg mb-4 flex m-auto justify-center"
          />
        </div>

        {/* Right Side - Soledad Rizal - Quintero description*/}
        <div className="pl-4 relative">
          <p className="text-sm leading-relaxed">
            Soledad, the youngest sibling, married Pantaleon Quintero. She was
            known for her intellect and resilience, advocating for her brother's
            legacy even after his death.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
