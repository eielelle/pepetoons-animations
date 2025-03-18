import Link from "next/link";
import Image from "next/image";

export default function CarouselSlide({ href, src, alt, children }) {
  return (
    <Link
      href={href}
      className="carousel-item aspect-video w-lg bg-black relative overflow-hidden"
    >
      <Image
        className="w-full h-full object-cover hover:scale-110 transition duration-300"
        src={src}
        alt={alt}
      />
      <div className="bg-black opacity-70 absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none p-4">
        <h2 className="text-4xl font-bold">{children}</h2>
      </div>
    </Link>
  );
}
