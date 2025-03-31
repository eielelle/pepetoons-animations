import Image from "next/image";

//Reusable grid components
const AsiaGrid = ({
  country,
  img,
  paragraph1,
  paragraph2,
  paragraph3,
  onOpen,
}) => {
  return (
    <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100 bg-black hover:opacity-90">
      <Image
        src={img}
        alt={country}
        fill
        className="relative object-cover size-full opacity-50"
      />
      <h3 className="relative content-center text-center font-semibold text-4xl italic text-white w-full">
        {country}
      </h3>
      <button
        className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black outline-offset-0 outline-black hover:bg-black hover:text-white transform transition duration-75 hover:scale-110 hover:cursor-pointer hover:outline-white hover:outline-1"
        onClick={() => onOpen(country, img, paragraph1, paragraph2, paragraph3)}
      >
        See more
      </button>
    </div>
  );
};

export default AsiaGrid;
