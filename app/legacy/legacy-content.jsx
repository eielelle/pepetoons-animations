import React from "react";

export default function LegacyContent() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('../../../assets/legacy.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* card container */}
      <div className="z-10 p-6 rounded-lg w-full max-w-6xl items-center">
        <h6
          className="text-8xl text-center mb-25"
          style={{ fontFamily: "'Tahoma', Sans-serif" }}
        >
          LEGACY & INFLUENCE
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 items-center justify-center">
          <div
            className="card w-76 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
              <img
                src="/assets/monument.jpg"
                alt="Rizal Monument"
                className="object-cover rounded-sm"
              />
              <h2 className="card-title text-xl font-bold text-center mt-4">
                National Hero Statue
              </h2>
            </div>
          </div>

          <div
            className="card w-76 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
              <img
                src="/assets/Philippine_independence.jpg"
                alt="Philippine Independence"
                className="object-cover rounded-sm"
              />
              <h2 className="card-title text-xl font-bold text-center mt-4">
                Philippine Independence
              </h2>
            </div>
          </div>

          <div
            className="card w-76 backdrop-blur-sm shadow flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="card-body flex flex-col items-center">
              <img
                src="/assets/rizal_commoratives.jpg"
                alt="Modern Day Commoratives"
                className="object-cover rounded-sm"
              />
              <h2 className="card-title text-md font-bold text-center mt-4">
                Modern Day Commoratives
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
