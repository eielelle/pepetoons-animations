import aboutImg from "../../assets/about.png";
import Image from "next/image";

export default function About() {
  return (
    <main className="grid grid-cols-3 h-screen bg-[#101230] p-12">
      <div className="col-span-3 relative">
        <div className="absolute left-0 top-0 w-3/4">
          <h1 className="text-9xl font-black" style={{fontFamily: "Anton"}}>
            HE WHO DOES NOT LOVE HIS OWN LANGUAGE IS WORSE THAN AN ANIMAL AND
            SMELLY FISH
          </h1>
          <span className="text-4xl" style={{fontFamily: "Protest Revolution"}}>- DR. JOSE RIZAL</span>
        </div>

        <div className="flex justify-end">
          <Image className=" w-1/3" src={aboutImg} alt="about" />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe atque,
          pariatur facere natus culpa incidunt sequi ullam doloremque
          repellendus adipisci.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo neque
          nostrum debitis illum voluptatum veritatis similique necessitatibus
          labore ad laborum.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          sequi voluptatibus temporibus reprehenderit veritatis sapiente
          quisquam necessitatibus iusto deleniti autem?
        </p>
      </div>
    </main>
  );
}
