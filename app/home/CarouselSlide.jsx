import Link from "next/link";
import Image from "next/image";

export default function CarouselSlide({ href, src, alt, children }) {
  return (
    <Link
      href={href}
      className="carousel-item aspect-video w-lg bg-black relative overflow-hidden group popup"
    >
      <Image
        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        src={src}
        alt={alt}
      />
      <div className="bg-black opacity-70 group-hover:opacity-30 absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none p-4">
      </div>
        <h2 className="text-4xl text-center font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</h2>
    </Link>
  );
}
