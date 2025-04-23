import { useState } from "react";
import { data } from "../data";
import Header from "./Header";

export default function Item({ nextWork, workIndex }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-col z-50 ">
      <Header hide={() => setIsHidden(!isHidden)} />

      {isHidden ? null : (
        <section className="flex-1 grid grid-cols-3">
          <div className="flex justify-center pb-4">
            <div className="overflow-y-scroll bg-white h-1/2 w-2/3 text-black p-4 rounded-lg rounded-tr-4xl shadow-sm">
              <p className="uppercase text-center text-sm tracking-[.2rem]">
                Description
              </p>
              <h1 className="border-b border-black pb-3 my-3 font-semibold">
                {data[workIndex].title}
              </h1>
              <p >{data[workIndex].description}</p>
            </div>
          </div>
          <div></div>
          <div className="flex justify-center pb-4">
            <div className="bg-white h-1/2 w-2/3 text-black p-4 rounded-lg shadow-sm flex flex-col">
              <h1 className="text-6xl font-bold mb-6">0{workIndex}</h1>
              <div>
                <h2 className="font-semibold">Material Used</h2>
                <p>{data[workIndex].material}</p>
                <br />
                <h2 className="font-semibold">Remarks</h2>
                <p>{data[workIndex].remarks}</p>
              </div>
              <button
                className="btn btn-square bg-[#C66030] join-item w-full py-4 mt-auto"
                onClick={nextWork}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
