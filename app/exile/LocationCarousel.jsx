import React from "react";

export default function LocationCarousel({imgs}) {
  
  return (
    <div className="carousel carousel-center space-x-4 w-full h-100 relative">
      {imgs.map((img, index) => (
        <div key={index} className="carousel-item backdrop-blur-sm w-full">
          <img src={img} alt={`Carousel image ${index + 1}`} className="rounded-box h-full w-full object-contain" />
        </div>
      ))}
    </div>
  );
}
