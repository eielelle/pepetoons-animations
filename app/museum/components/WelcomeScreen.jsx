import Image from "next/image";
import { Home, Info, Power } from "react-feather";
import Header from "./Header";
import { useState } from "react";

export default function WelcomeScreen({ start }) {
  const [isHidden, setIsHidden] = useState(false);

  const pointerEvents = `${isHidden ? "pointer-events-none" : ""}`;

  return (
    <div className={` absolute top-0 left-0 h-full w-full flex flex-col z-50 ${pointerEvents}`}
    >
      <Header hide={() => setIsHidden(!isHidden)} />

      {isHidden ? null : (
        <footer className="mt-auto mx-auto p-4 w-1/2 mb-4 text-center bg-black rounded-xl">
          <h1 className="text-2xl font-semibold">
            Welcome to Rizal's Art: A Journey Through His Legacy
          </h1>
          <p>
            StepExplore Dr. Jose Rizal's life and legacy through a collection of
            powerful paintings that capture his spirit, ideas, and influence on
            the Philippines' fight for freedom.
          </p>
          <button className="btn py-4 px-6 bg-[#C66030] mt-4" onClick={start}>
            Enter
          </button>
        </footer>
      )}
    </div>
  );
}
