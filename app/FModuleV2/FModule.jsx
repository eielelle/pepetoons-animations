import React from 'react';



const FamilySection = () => {
  return (
    <div className="bg-[#0F1020] min-h-screen text-white p-8 font-sans">
      <h1 className="text-center text-3xl font-bold mb-8">Family</h1>

      <div className="grid grid-cols-2 gap-6 items-start relative">
        {/* Left Side - Teodora */}
        <div className="pr-4 relative">
          <h2 className="font-bold text-lg mb-2">Teodora Alonso Realonda</h2>
          <img 
          src="/assets/Resources/tree.png" 
          alt="Teodora" 
          className="w-full rounded-lg mb-4" />

          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
          </p>

          {/* Add more paragraphs if needed */}
        </div>

        {/* Middle Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-500"></div>

        {/* Right Side - Francisco */}
        <div className="pl-4 space-y-4">
          {/* Bullet Point 1 */}
          <div className="flex items-start">
            <div className="mt-1 mr-2">•</div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
            </p>
          </div>

          {/* Bullet Point 2 */}
          <div className="flex items-start">
            <div className="mt-1 mr-2">•</div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
            </p>
          </div>

          {/* Bottom Section - Francisco */}
          <div className="flex items-start space-x-4">
            <div className="mt-1">•</div>
            <div className="space-y-2">
              <h2 className="font-bold text-lg">Francisco Mercado Rizal</h2>
              <img
                src="/assets/Resources-V2/Francisco_Mercado.png"
                alt="Francisco"
                className="w-full rounded-lg"
              />
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
              </p>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus non bibendum malesuada, orci tortor elementum erat.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FamilySection;
