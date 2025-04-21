import React from "react";

export default function LocationCarousel({ imgs }) {
  return (
    <div className="carousel carousel-center space-x-4 w-full h-100 relative">
      {imgs.map((img, index) => (
        <div
          id={index}
          key={index}
          className="carousel-item backdrop-blur-sm w-full relative"
        >
          <img
            src={img}
            alt={`Carousel image ${index + 1}`}
            className="rounded-box h-full w-full object-contain"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#${index <= 0 ? imgs.length - 1 : index - 1}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#${index >= imgs.length - 1 ? 0 : index + 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
