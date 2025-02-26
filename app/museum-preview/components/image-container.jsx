import Image from "next/image";

export default function ImageContainer({ image }) {
  return (
    <div className="w-full h-full relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
        <Image className="h-full w-full object-cover" src={image} alt="picture" />
    </div>
  );
}
