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
    <div className="relative group overflow-hidden">
      <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100">
        <Image
          src={img}
          alt={country}
          fill
          className="bg-black opacity-65 object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-90 cursor-default"
        />
        <h3 className="relative content-center text-center font-semibold text-4xl italic text-white size-full cursor-default">
          {country}
        </h3>
        <button
          className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black outline-offset-0 outline-black hover:bg-black hover:text-white transform transition duration-75 hover:scale-110 hover:cursor-pointer hover:outline-white hover:outline-1"
          onClick={() =>
            onOpen(country, img, paragraph1, paragraph2, paragraph3)
          }
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default AsiaGrid;
