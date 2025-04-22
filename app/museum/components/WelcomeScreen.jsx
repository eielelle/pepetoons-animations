import Image from "next/image";
import { Home, Info, Power } from "react-feather";

export default function WelcomeScreen({ start }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-col z-50 ">
      <header className="navbar">
        <div className="flex-1">
          <Image src={"/logo.png"} alt={"logo"} width={150} height={150} />
        </div>
        <div className="flex-none flex gap-4">
          <button className="btn btn-square bg-[#C66030]">
            <Info />
          </button>

          <button className="btn btn-square bg-[#C66030]">
            <Home />
          </button>
        </div>
      </header>

      <footer className="mt-auto mx-auto p-4 w-1/2 mb-4 text-center bg-black rounded-xl">
        <h1 className="text-2xl font-semibold">Welcome to Rizal's Art: A Journey Through His Legacy</h1>
        <p>StepExplore Dr. Jose Rizal's life and legacy through a collection of powerful paintings that capture his spirit, ideas, and influence on the Philippines' fight for freedom.</p>
        <button className="btn py-4 px-6 bg-[#C66030] mt-4" onClick={start}>Enter</button>
      </footer>
    </div>
  );
}
