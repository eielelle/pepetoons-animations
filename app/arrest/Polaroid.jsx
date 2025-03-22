import Image from "next/image";

export default function Polaroid({ img, caption, rotation }) {
  return (
    <div className={`w-60 h-72 bg-white card rounded-none ${rotation}`}>
      <figure className="p-4 h-[90%]">
        <Image
          className="h-full w-full object-cover"
          src={img}
          alt="img"
        />
      </figure>
      <div className="card-body p-4 text-black font-semibold">
        <p>{caption}</p>
      </div>
    </div>
  );
}
