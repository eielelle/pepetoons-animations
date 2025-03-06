import TimelineItem from "../components/TimelineItem";
import bg from "../../assets/images/rizal-education-bg.png";

export default function Education() {
  return (
    <main
      className="text-black h-screen p-6 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h1 className="text-8xl font-black text-center text-white">Education</h1>
      <div className="w-full overflow-x-scroll">
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <TimelineItem caption={"Beginning"}>
            <div>
              Rizal's mother, Doña Teodora was his first teacher. Doña Teodora
              was patient, conscientious, and understanding. She also discovered
              that Rizal had a talent for poetry, and encouraged him to write
              poems.
            </div>
            <br />
            <ul>
              <p>Private Tutors:</p>
              <li>Maestro Celestino</li>
              <li>Maestro Lucas</li>
              <li>Leon Monroy</li>
            </ul>
          </TimelineItem>

          <TimelineItem caption={"June 1869"}>
            <h1 className="text-lg font-black">Biñan</h1>
            <div>
              Rizal's mother, Doña Teodora was his first teacher. Doña Teodora
              was patient, conscientious, and understanding. She also discovered
              that Rizal had a talent for poetry, and encouraged him to write
              poems.
            </div>
          </TimelineItem>

          <TimelineItem caption={"1872"}>
            <h1 className="text-lg font-black">Ateneo</h1>
            <div>
              Rizal entered Ateneo, where he joined a class consisting of
              Spaniards, mestizos, and Filipinos. Initially, he was considered
              inferior and placed at the bottom of the class. However, by the
              end of the month, he rose to the top, earning the title of emperor
              and receiving a religious picture as a prize.
            </div>
          </TimelineItem>

          <TimelineItem caption={"March 1877"}>
            <h1 className="text-lg font-black">Ateneo</h1>
            <div>
              Rizal graduated with the degree of Bachelor of Arts, attaining
              sobresaliente (excellent) and receiving five medals.
            </div>
          </TimelineItem>

          <TimelineItem top>
            <h1 className="text-lg font-black">
              Medical Studies in University in Sto. Thomas
            </h1>
          </TimelineItem>

          <TimelineItem caption={"1877 - 1882"}>
            <div>
              Rizal continued his education at the University of Santo Tomas
              (UST), initially taking up Philosophy and Letters before shifting
              to a medical course. He made this decision to become a physician
              and treat his mother's failing eyesight. Fr. Pablo Ramon, the
              Father Rector of Ateneo, whom he consulted, recommended that he
              pursue medicine. During his studies, Rizal took courses in
              Cosmology, Metaphysics, Theodicy, and the History of Philosophy.
              Despite UST being under the Dominicans, the rivals of the Jesuits
              who founded Ateneo, he remained loyal to his alma mater.
            </div>
          </TimelineItem>

          <TimelineItem caption={"Pre-Med Course"}>
            <div>
              Out of the 28 young men enrolled in Ampliación, only four,
              including Rizal, were granted the privilege of taking both the
              preparatory course and the first year of medicine simultaneously.
              Rizal also completed four years of practical medical training at
              the Hospital de San Juan de Dios in Intramuros. During his final
              year at the university, he achieved a global grade of Notable
              (Very Good) in all his subjects. He ranked second in a reduced
              class of seven students who successfully passed the medicine
              course. Afterward, Rizal decided to continue his studies in Spain.
            </div>
          </TimelineItem>

          <TimelineItem top>
            <h1 className="text-lg font-black">Academic Journey in Spain</h1>
          </TimelineItem>

          <TimelineItem caption={"May 1882"}>
            <div>
              Rizal's departure for Spain was kept secret from Spanish
              authorities, friars, and even his own parents—especially his
              mother, who would not have allowed him to leave. To avoid
              detection, he traveled under the name Jose Mercado.
            </div>

            <div>
              On May 3, 1882, he boarded the Salvadora bound for Singapore,
              where he was the only Filipino passenger. Upon reaching Spain, he
              enrolled at the Universidad Central de Madrid on November 3, 1882,
              taking up two courses: Philosophy and Letters, and Medicine.
            </div>
          </TimelineItem>

          <TimelineItem caption={"June 1884"}>
            <div>
              He earned the degree of Licentiate in Medicine. The following
              academic year, he completed and passed all subjects required for a
              Doctor of Medicine degree. However, he was unable to submit his
              thesis or pay the necessary fees, so he was not awarded his
              Doctor’s Diploma.
            </div>
          </TimelineItem>

          <TimelineItem caption={"June 1885"}>
            <div>
              Despite this, Rizal excelled in Philosophy and Letters, graduating
              with the degree of Licentiate in Philosophy and Letters on June
              19, 1885, with a rating of excellent.
            </div>
          </TimelineItem>

          <TimelineItem caption={"Opthalmology studies and travels in Europe"}>
            <div>
              Jose Rizal traveled to Paris and Germany to specialize in
              ophthalmology, choosing this field to help treat his mother's
              worsening eyesight.
            </div>
          </TimelineItem>

          <TimelineItem caption={"1885"}>
            <div>
              At the age of 24, after completing his studies at the Universidad
              Central de Madrid, he went to Paris to further his knowledge in
              ophthalmology. There, he formed friendships with notable
              individuals, including:
            </div>
            <br />
            <ul>
              <li>Máximo Viola</li>
              <li>Señor Eusebio Corominas</li>
              <li>Don Miguel Morayta</li>
              <li>Dr. Louis de Weckert</li>
            </ul>
          </TimelineItem>

          <TimelineItem caption={"February 1886"}>
            <div>
              After gaining experience in ophthalmology, Rizal left Paris for
              Heidelberg, Germany. He trained at the University Eye Hospital
              under the guidance of Dr. Otto Becker, a renowned German
              ophthalmologist.
            </div>
          </TimelineItem>

          <TimelineItem caption={"April 1886"}>
            <div>
              Inspired by the beauty of the blooming forget-me-not flowers along
              the Neckar River, he wrote the poem{" "}
              <i>A Las Flores de Heidelberg</i>
            </div>
          </TimelineItem>

          <TimelineItem caption={"August 1886"}>
            <div>
              Rizal had arrived in Leipzig, where he attended lectures on
              history and psychology at the University of Leipzig. He decided to
              stay in Germany longer for several reasons:
            </div>

            <br />

            <ul>
              <li>To advance his studies in science and languages.</li>
              <li>To observe Germany's economic and political conditions.</li>
              <li>To connect with prominent scientists and scholars.</li>
              <li>To publish his novel Noli Me Tangere.</li>
            </ul>

            <br />

            <div>
              Rizal earned a Licentiate in Medicine from the Universidad Central
              de Madrid, where he also studied philosophy and literature. He
              began writing Noli Me Tangere while in Madrid and continued his
              education at the University of Paris.
            </div>
          </TimelineItem>

          <TimelineItem caption={"1887"}>
            <div>
              He completed his ophthalmology specialization at the University of
              Heidelberg. That same year, his first novel, Noli Me Tangere, was
              published in Berlin. It was also in that year that Rizal's first
              novel was published in Berlin.
            </div>
          </TimelineItem>
        </ul>
      </div>
    </main>
  );
}
