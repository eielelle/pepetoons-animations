export default function dashboardcontent() {
  return (
    <div className="bg-gradient-to-br from-cyan-300 to-blue-700 grid grid-cols-3 grid-rows-3 gap-4 p-8 bg">
      {/* Birth */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="/rizals-birth.png" alt="Rizals Birth" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Birth
        </button>
      </div>

      {/* Family */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="rizals-family.webp" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Family
        </button>
      </div>

      {/* Childhood */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="rizal-child.jpg" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Childhood
        </button>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="ateneo.jpg" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Education
        </button>
      </div>

      {/* Personal & Romantic life */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="/romantic-life.jpg" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-2xl text-center rounded-b-md border-[#005fd8]">
          Personal & Romantic life
        </button>
      </div>

      {/* Legacy & Influence */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="/legacy.png" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Legacy & Influence
        </button>
      </div>

      {/* Place He Visit */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="/places.jpg" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Place He Visit
        </button>
      </div>

      {/* Exile */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="rizal-exile.webp" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Exile
        </button>
      </div>

      {/* Arrest and & Execution */}
      <div className="flex flex-col gap-4 p-8 items-center text-center">
        <div className="avatar">
          <div className="w-51 rounded-full">
            <img src="rizal-trial.jpg" />
          </div>
        </div>
        <button className="btn bg-blue-400 text-white text-3xl items-center text-center rounded-b-md border-[#005fd8]">
          Arrest and & Execution
        </button>
      </div>
    </div>
  );
}
