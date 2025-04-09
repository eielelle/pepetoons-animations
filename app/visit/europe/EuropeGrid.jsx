import Image from "next/image";

//Reusable grid components
const EuropeGrid = ({
  image,
  city,
  country,
  date,
  activity1,
  description1,
  activity2,
  description2,
  activity3,
  description3,
  onOpen,
}) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100">
        <Image
          src={image}
          fill
          className="bg-black opacity-65 object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-90 cursor-default"
          alt={`${city}, ${country}`}
        />
      </div>
      <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-4xl italic text-white z-100 cursor-default">
        {city}, <br /> {country}
      </h3>
      <button
        className="absolute bottom-4 left-0 right-0 justify-self-center btn btn-sm outline-2 bg-white text-black outline-offset-0 hover:bg-black hover:text-white transform transition duration-75 hover:scale-110 hover:cursor-pointer hover:outline-white hover:outline-1 "
        onClick={() =>
          onOpen(
            city,
            country,
            date,
            activity1,
            description1,
            activity2,
            description2,
            activity3,
            description3
          )
        }
      >
        See more
      </button>
    </div>
  );
};

export default EuropeGrid;
