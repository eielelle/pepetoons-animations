import Image from "next/image";
import JoseRizalArrest from "../../assets/arrest/Rizal Arrest.png";
import JoseRizalTrial from "../../assets/arrest/Rizal Trial.jpg";
import JoseRizalExecution from "../../assets/arrest/Rizal Execution.jpg";

export default function Arrest() {
  return (
    <main className="bg-[#101230] min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl md:text-6xl text-center font-bold mb-4">
          ARREST, TRIAL EXECUTION
        </h1>

        <div className="grid grid-cols-3 w-2/3 mx-auto gap-y-4">
          <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
            <Image
              src={JoseRizalArrest}
              width={260}
              height={200}
              alt="Jose Rizal Arrest"
            />
            <h3 className="font-bold">Arrest of Jose Rizal</h3>
          </div>

          <div className="col-span-3 md:col-span-2">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-base">
                <ul className="list">
                  <li className="list-row">
                    On October 6, 1896, Rizals ship made a port call in
                    Barcelona on its way to Cuba. His arrest was ordered by the
                    Spanish authorities after they intercepted his
                    communications and suspected him of being involved in the
                    ongoing revolution.
                  </li>
                  <li className="list-row">
                    Rizal was arrested and taken back to Manila where he was
                    held captive in the infamous Spanish stronghold known as
                    Fort Santiago.
                  </li>
                  <li className="list-row">
                    Rizal was cruelly imprisoned. He was questioned while being
                    kept in seclusion. With the revolution raging outside its
                    walls the atmosphere in Fort Santiago would have been
                    extremely tense.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-3 md:col-span-2">
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-base">
                <ul className="list">
                  <li className="list-row">
                    On November 20, 1896, Judge Advocate Colonel Francisco Olive
                    carried out the preliminary investigation. Many of the
                    witnesses who testified against Rizal were forced to do so
                    or were given leniency in exchange. Due process rights were
                    violated when Rizal was not permitted to question these
                    witnesses.
                  </li>
                  <li className="list-row">
                    Rizal faced severe accusations of sedition rebellion and
                    illegal association formation. Based on his writings his
                    affiliation with reformists and his purported ties to the
                    Katipunan these accusations were made.
                  </li>
                  <li className="list-row">
                    By saying that he supported nonviolent reforms and was not
                    involved in the revolution Rizal insisted on his innocence.
                    He noted that his manifesto even included a condemnation of
                    the uprising the court found him guilty and he was sentence
                    to death.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
            <Image
              src={JoseRizalTrial}
              width={200}
              height={180}
              alt="Jose Rizal Trial"
            />
            <h3 className="font-bold">Trial of Jose Rizal</h3>
          </div>

          <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
            <Image
              src={JoseRizalExecution}
              width={260}
              height={300}
              alt="Jose Rizal Execution"
            />
            <h3 className="font-bold">Execution of Jose Rizal</h3>
          </div>

          <div className="col-span-3 md:col-span-2">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-base">
                <li className="list">
                  <ul className="list-row">
                    On December 29, 1896 Rizal was remarkably composed in his
                    last days. He sent love letters and farewell notes to his
                    family and friends. In addition he wrote his well-known poem
                    Mi Último Adiós (or My Last Farewell) which is a tribute to
                    his sacrifice and patriotism.
                  </ul>
                  <ul className="list-row">
                    On the morning of December 30, 1896, From Fort Santiago
                    Rizal was escorted to Bagumbayan which is now Luneta. In the
                    company of priests and guards he strolled calmly. A firing
                    squad was used to put Rizal to death. Consummatum est! [It
                    is finished!] was reportedly his final words as he stood
                    erect before his executioners.
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
          C. H. (2019). AN ALTERNATIVE PERSPECTIVE ON THE DEATH OF RIZAL AND THE
          REVOLUTION OF 1896.
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
  );
}
