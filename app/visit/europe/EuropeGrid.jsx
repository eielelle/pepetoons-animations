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
    <div className="relative grid size-full max-sm:h-100 max-[850px]:h-100 bg-black hover:opacity-90">
      <Image
        src={image}
        fill
        className="relative object-cover size-full opacity-50"
        alt={`${city}, ${country}`}
      />
      <h3 className="relative content-center text-center font-semibold text-4xl italic text-white w-full">
        {city}, <br /> {country}
      </h3>
      <button
        className="absolute bottom-4 justify-self-center btn btn-sm outline-2 bg-white text-black outline-offset-0 hover:bg-black hover:text-white transform transition duration-75 hover:scale-110 hover:cursor-pointer hover:outline-white hover:outline-1 "
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
