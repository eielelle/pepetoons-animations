"use client";

import { useEffect, useState } from "react";
import anime from "animejs";
import JoseRizalArrest from "../../assets/arrest/Rizal Arrest.png";
import JoseRizalTrial from "../../assets/arrest/Rizal Trial.jpg";
import JoseRizalExecution from "../../assets/arrest/Rizal Execution.jpg";
import ParticleBg from "./ParticleBg";
import Polaroid from "./Polaroid";
import HeaderLayout from "../layouts/HeaderLayout";

export default function Arrest() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target]));
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".animate-item"); // Select all elements
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    visibleElements.forEach((element) => {
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: "easeOutQuad",
      });
    });

    if (visibleElements.size > 0) {
      setVisibleElements(new Set());
    }
  }, [visibleElements]);

  return (
    <HeaderLayout>
      <main className="min-h-screen mt-24">
        <ParticleBg />
        <div className="p-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-4 animate-item opacity-0">
            ARREST, TRIAL, EXECUTION
          </h1>

          <div className="grid grid-cols-3 w-2/3 mx-auto gap-x-4 gap-y-20 my-20">
            <div className="flex flex-col col-span-3 lg:col-span-1 justify-center items-center gap-3">
              <Polaroid
                img={JoseRizalArrest}
                caption={"Arrest of Jose Rizal"}
                rotation={"-rotate-12"}
              />
            </div>

            <div className="col-span-3 lg:col-span-2">
              <div className="chat chat-start animate-item opacity-0">
                <div className="chat-bubble chat-bubble-base">
                  <ul className="list">
                    <li className="list-row flex items-center">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-yellow-500"></span>
                      </span>

                      <h2 className="text-lg font-semibold">Arrest</h2>
                    </li>
                    <li className="list-row">
                      On October 6, 1896, Rizals ship made a port call in
                      Barcelona on its way to Cuba. His arrest was ordered by
                      the Spanish authorities after they intercepted his
                      communications and suspected him of being involved in the
                      ongoing revolution.
                    </li>
                    <li className="list-row">
                      Rizal was arrested and taken back to Manila where he was
                      held captive in the infamous Spanish stronghold known as
                      Fort Santiago.
                    </li>
                    <li className="list-row">
                      Rizal was cruelly imprisoned. He was questioned while
                      being kept in seclusion. With the revolution raging
                      outside its walls the atmosphere in Fort Santiago would
                      have been extremely tense.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-3 lg:col-span-2">
              <div className="chat chat-end animate-item opacity-0">
                <div className="chat-bubble chat-bubble-base">
                  <ul className="list">
                  <li className="list-row flex items-center">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                      </span>

                      <h2 className="text-lg font-semibold">Trial</h2>
                    </li>
                    <li className="list-row">
                      On November 20, 1896, Judge Advocate Colonel Francisco
                      Olive carried out the preliminary investigation. Many of
                      the witnesses who testified against Rizal were forced to
                      do so or were given leniency in exchange. Due process
                      rights were violated when Rizal was not permitted to
                      question these witnesses.
                    </li>
                    <li className="list-row">
                      Rizal faced severe accusations of sedition rebellion and
                      illegal association formation. Based on his writings his
                      affiliation with reformists and his purported ties to the
                      Katipunan these accusations were made.
                    </li>
                    <li className="list-row">
                      By saying that he supported nonviolent reforms and was not
                      involved in the revolution Rizal insisted on his
                      innocence. He noted that his manifesto even included a
                      condemnation of the uprising the court found him guilty
                      and he was sentence to death.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-3 lg:col-span-1 justify-center items-center gap-3">
              <Polaroid
                img={JoseRizalTrial}
                caption={"Trial of Jose Rizal"}
                rotation={"rotate-12"}
              />
            </div>

            <div className="flex flex-col col-span-3 lg:col-span-1 justify-center items-center gap-3">
              <Polaroid
                img={JoseRizalExecution}
                caption={"Execution of Jose Rizal"}
                rotation={"-rotate-12"}
              />
            </div>

            <div className="col-span-3 lg:col-span-2">
              <div className="chat chat-start animate-item opacity-0">
                <div className="chat-bubble chat-bubble-base">
                  <li className="list">
                  <li className="list-row flex items-center">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                      </span>

                      <h2 className="text-lg font-semibold">Execution</h2>
                    </li>
                    <ul className="list-row">
                      On December 29, 1896 Rizal was remarkably composed in his
                      last days. He sent love letters and farewell notes to his
                      family and friends. In addition he wrote his well-known
                      poem Mi Último Adiós (or My Last Farewell) which is a
                      tribute to his sacrifice and patriotism.
                    </ul>
                    <ul className="list-row">
                      On the morning of December 30, 1896, From Fort Santiago
                      Rizal was escorted to Bagumbayan which is now Luneta. In
                      the company of priests and guards he strolled calmly. A
                      firing squad was used to put Rizal to death. Consummatum
                      est! [It is finished!] was reportedly his final words as
                      he stood erect before his executioners.
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-6 border-t-2 border-t-white bg-base-300 p-4">
          <h2>REFERENCE:</h2>
          <p>
            ANTONIO, M. S. I. D., SIA, T. G. B., TOLENTINO, A. M. C. D., & WONG,
            C. H. (2019). AN ALTERNATIVE PERSPECTIVE ON THE DEATH OF RIZAL AND
            THE REVOLUTION OF 1896.
          </p>
          <p>Moriones, J. A. A. (2022). LIFE AND WORKS OF RIZAL.</p>
          <p>
            ARREST AND TRIAL OF JOSE RIZAL. (2016). BIGWAS.COM.
            HTTPS://WWW.BIGWAS.COM/2020/12/ARREST-AND-TRIAL-OF-JOSE-RIZAL.HTML
          </p>
          <p>
            FREE WALKING TOUR. (2025, MARCH 22). INTRAMUROS.GOV.PH.
            HTTPS://INTRAMUROS.GOV.PH/MNR/
          </p>
        </footer>
      </main>
    </HeaderLayout>
  );
}
