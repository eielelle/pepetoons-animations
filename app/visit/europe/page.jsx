import Image from 'next/image';

import Madrid from "../../../assets/visit/europe/Madrid.jpg";
import PariesFrance from "../../../assets/visit/europe/paris france.jpg";
import HeidelbergGermany from "../../../assets/visit/europe/Heidelberg Germany.jpg";
import BerlinGermany from "../../../assets/visit/europe/Berlin Germany.jpg";
import LondonEngland from "../../../assets/visit/europe/London England.jpg";
import BrusselsBelgium from "../../../assets/visit/europe/Brussels Belgium.jpg";

export default function Europe() {

  return (
    <>
      {/* Start of europe module */}
      <div className="h-screen w-full p-0 m-0 overflow-auto">
        {/* Start of grid */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[950px]:grid-cols-2 lg:grid-cols-3 gap-0 min-h-full">

          <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100">
            <Image
              src={Madrid}
              layout="fill"
              objectFit="cover"
              alt="Picture of the Madrid Spain"
            />
            <h3 className="relative text-center content-center text-white text-3xl font-bold w-full">
              Madrid, Spain
            </h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

          <div className='relative grid size-full max-sm:h-100 max-[850px]:h-100'>
            <Image
              src={PariesFrance}
              layout="fill"
              objectFit="cover"
              alt="Picture of the Paris france"
            />
            <h3 className='relative text-center content-center text-white text-3xl font-bold w-full'>Paris, France</h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

          <div className='relative grid size-full max-sm:h-100 max-[850px]:h-100'>
            <Image
              src={HeidelbergGermany}
              layout="fill"
              objectFit="cover"
              alt="Picture of the Heidelberg Germany"
            />
            <h3 className='relative text-center text-white content-center text-3xl font-bold w-full'>Heidelberg, <br /> Germany</h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

          <div className='relative grid size-full max-sm:h-100 max-[850px]:h-100'>
            <Image
              src={BerlinGermany}
              layout="fill"
              objectFit="cover"
              alt="Picture of the Berlin Germany"
            />
            <h3 className='relative text-center text-white content-center text-3xl font-bold w-full'>Berlin, <br /> Germany</h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

          <div className='relative grid size-full max-sm:h-100 max-[850px]:h-100'>
            <Image
              src={LondonEngland}
              layout="fill"
              objectFit="cover"
              alt="Picture of the London England"
            />
            <h3 className='relative text-center content-center text-white text-3xl font-bold w-full'>London, <br /> England</h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

          <div className='relative grid size-full max-sm:h-100 max-[850px]:h-100'>
            <Image
              src={BrusselsBelgium}
              layout="fill"
              objectFit="cover"
              alt="Picture of the Brussels Belgium"
            />
            <h3 className='relative text-center content-center text-white text-3xl font-bold w-full'>Brussels, <br /> Belgium</h3>
            <button className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black transition-colors outline-offset-0 outline-black hover:bg-black hover:text-white">
              See more
            </button>
          </div>

        </div>
        {/* End of grid */}

      </div>
      {/* End of europe module */}
    </>
  );
}