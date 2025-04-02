import Image from "next/image";
import teodoraImg from "../../assets/educ/teodora.png";
import ateneoImg from "../../assets/educ/ateneo.png";
import ustImg from "../../assets/educ/ust.png";
import madridImg from "../../assets/educ/madrid.png";
import doctorImg from "../../assets/educ/doctor.png";
import parisImg from "../../assets/educ/paris.png";
import Footer from "../components/footer";

export default function Education() {
  return (
    <main className="relative bg-[#111]">
      <header className="fixed top-0 p-5 bg-black w-full border-b-2 border-primary z-20">
        <h1 className="text-4xl font-black">Education</h1>
      </header>

      <section className="grid grid-cols-3 gap-8 pt-28 px-5 mb-24">
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <h2 className="text-blue-400 text-xl font-bold">
            Early Education of Jose Rizal (1869 - 1877)
          </h2>
          <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white"></div>
          <p>Rizal's mother, Doña Teodora was his first teacher.</p>
          <div className="divider before:bg-white before:h-0.5 after:h-0.5 after:bg-white"></div>
          <p>Doña Teodora was patient, conscientious, and understanding.</p>
          <div className="divider before:bg-white before:h-0.5 after:h-0.5 after:bg-white"></div>
          <p>
            She also discovered that Rizal had a talent for poetry, and
            encouraged him to write poems.
          </p>
        </div>

        <div className="px-4 border-x-4 border-white col-span-3 md:col-span-2 lg:col-span-1">
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            Who was Rizals first teacher?
          </h2>
          <p>
            Jose Rizal's first teacher was his mother, who taught him to read,
            pray, and write poetry. He later learned Spanish and Latin from
            private tutors before attending a school in Biñan. At 11, he
            enrolled in the Ateneo Municipal de Manila.
          </p>
          <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white"></div>
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            Priavate Tutors of Jose Rizal
          </h2>
          <p>
            José Rizal's early education was guided by private tutors, including
            Maestro Celestino and Maestro Lucas, who taught him basic subjects,
            and Leon Monroy, a Spanish tutor who helped him master the language,
            crucial for his intellectual and literary work. These tutors laid
            the foundation for his academic success.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 col-span-3 md:col-span-1">
          <div className="bg-[linear-gradient(to_bottom,#F59D9D,#F1B67E,#E7D151,#747626)] p-4">
            <Image src={teodoraImg} alt="teodora" />
          </div>
          <h2 className="text-blue-400 text-xl text-center font-bold">
            Teodora Alonso Realonda
          </h2>
        </div>

        <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white col-span-3"></div>

        <div className="lg:col-span-1 md:col-span-2 col-span-3">
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            Ateneo Municipal de Manila (1877-1882)
          </h2>
          <h3 className="text-lg font-bold mb-4">1877: A New Beginning</h3>
          <p>
            In June 1877, José Rizal enrolled in the Ateneo Municipal de Manila,
            initially studying Law to fulfill his family's wishes, before
            switching to Philosophy and Letters due to his passion for
            literature and history.
          </p>
        </div>

        <div className="flex justify-center items-center px-4 border-x-4 border-white col-span-3 md:col-span-1">
          <Image className="w-full h-full object-cover" src={ateneoImg} alt="ateneo" />
        </div>

        <div className="md:col-span-3 lg:col-span-1 col-span-3">
          <ul className="list">
            <li>
              <h2 className="text-blue-400 text-xl font-bold mb-4 pl-4">
                Rizal's Life at Ateneo
              </h2>
            </li>
            <li className="list-row">
              Ateneo was run by the Jesuits, known for their rigorous academic
              training.
            </li>
            <li className="list-row">
              Rizal was one of the few "internos" (boarding students), granting
              him better access to resources.
            </li>
            <li className="list-row">
              His professors recognized his intelligence and diligence,
              encouraging his literary talents.
            </li>
          </ul>
        </div>

        <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white col-span-3"></div>

        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            University of Santo Tomas (UST)
          </h2>
          <h3 className="text-lg font-bold mb-4">
            1877 - 1882 : Medical Studies at University of Sto. Tomas
          </h3>
          <p>
            Jose Rizal first studied philosophy and letters at the University of
            Santo Tomas (UST) then moved to the Faculty of Medicine and Surgery
            to study medicine in 1877
          </p>
        </div>

        <div className="flex justify-center items-center px-4 border-x-4 border-white col-span-3 md:col-span-1">
          <Image className="w-full h-full object-cover" src={ustImg} alt="ust" />
        </div>

        <div className="text-justify col-span-3 md:col-span-2 lg:col-span-1">
          <h2 className="text-blue-400 text-xl text-center font-bold mb-4">
            Pre-Med Course
          </h2>
          <p>
            Jose Rizal changed his major from pre-law to medicine at the
            University of Santo Tomas (UST) in order to pursue a career in
            medicine and focus in opthalmology.
          </p>
          <br />
          <p>
            the reason why rizal pursue medicine because To help his mother who
            was blinded by cataracts
          </p>
          <br />
          <p>
            Rizal was dissatisfied while his studying because of the
            discrimination by the Dominicans.
          </p>
        </div>

        <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white col-span-3"></div>

        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            José Rizal's Education in Spain (1882 - 1885)
          </h2>
          <h3 className="text-lg font-bold mb-4">A Secret Departure</h3>
          <p>
            José Rizal secretly traveled to Spain under the alias Jose Mercado,
            hiding his departure from Spanish authorities, friars, and even his
            parents, especially his disapproving mother.
          </p>
        </div>

        <div className="flex justify-center items-center px-4 border-x-4 border-white col-span-3 md:col-span-2 lg:col-span-1">
          <Image className="w-full h-full object-cover" src={madridImg} alt="madrid" />
        </div>

        <div className="col-span-3 md:col-span-1">
          <h2 className="text-blue-400 text-xl text-center font-bold mb-4">
            Academic Pursuits in Madrid
          </h2>

          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start font-semibold text-blue-400">
                November 3, 1882
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box text-black bg-blue-400">
                Rizal enrolled at Universidad Central de Madrid, studying
                Philosophy and Letters and Medicine.
              </div>
              <hr className="bg-white" />
            </li>

            <li>
              <hr className="bg-white" />
              <div className="timeline-start font-semibold text-blue-400">
                June 21, 1884
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box text-black bg-blue-400">
                Earned his Licentiate in Medicine.
              </div>
              <hr className="bg-white" />
            </li>

            <li>
              <hr className="bg-white" />
              <div className="timeline-start font-semibold text-blue-400">
                1884 - 1885
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box text-black bg-blue-400">
                Completed Doctor of Medicine coursework but lacked a thesis and
                fees for a diploma.
              </div>
              <hr className="bg-white" />
            </li>

            <li>
              <hr className="bg-white" />
              <div className="timeline-start font-semibold text-blue-400">
                June 19, 1885
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box text-black bg-blue-400">
                Graduated excellent with a Licentiate in Philosophy and Letters.
              </div>
            </li>
          </ul>
        </div>

        <div className="divider before:bg-white before:h-1 after:h-1 after:bg-white col-span-3"></div>

        <div className="col-span-3 lg:col-span-1">
          <h2 className="text-blue-400 text-xl font-bold mb-4">
            José Rizal's Ophthalmology Studies & European Travels
          </h2>
          <h3 className="text-lg font-bold mb-4">Studies in Paris (1885)</h3>
          <p>
            At the age of 24, Rizal went to Paris to enhance his knowledge in
            ophthalmology. He trained under Dr. Louis de Weckert, a renowned
            ophthalmologist. During this time, he also built strong friendships
            with individuals who influenced his career and advocacy.
          </p>

          <br />
          <h3 className="text-lg font-bold mb-4">
            Specializing in Ophthalmology
          </h3>
          <p>
            Rizal specialized in ophthalmology to cure his mother's eyesight,
            furthering his studies in Paris and Germany after Madrid.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-4 border-x-4 border-white col-span-3 md:col-span-2 lg:col-span-1">
          <Image className="w-full h-full object-cover" src={doctorImg} alt="doctor" />
          <Image className="w-full h-full object-cover" src={parisImg} alt="paris" />
        </div>

        <div className="col-span-3 md:col-span-1">
          <ul className="list">
            <li>
              <h2 className="text-blue-400 text-xl font-bold mb-4 pl-4">
                Why Rizal Stayed Longer in Germany?
              </h2>
            </li>
            <li className="list-row">
              To further his studies in science and languages.
            </li>
            <li className="list-row">
              To observe Germany's economic and political conditions.
            </li>
            <li className="list-row">
              To associate with renowned scientists and scholars.
            </li>
            <li className="list-row">
              To publish his novel "Noli Me Tangere".
            </li>
          </ul>

          <br />

          <ul className="list">
            <li>
              <h2 className="text-blue-400 text-xl font-bold mb-4 pl-4">
                Legacy of His European Studies
              </h2>
            </li>
            <li className="list-row">
              Rizal earned a Licentiate in Medicine at Universidad Central de
              Madrid.
            </li>
            <li className="list-row">
              In 1887, he completed his eye specialization at the University of
              Heidelberg.
            </li>
            <li className="list-row">
              That same year, he published his first novel, "Noli Me Tangere,"
              in Berlin.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
