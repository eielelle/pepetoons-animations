import React from "react";


export default function LocationCarousel({imgs}) {
  
  return (
    <div className="carousel carousel-center max-w-md space-x-4 w-full h-100">
      {imgs.map((img, index) => (
        <div key={index} className="carousel-item">
          <img src={img} alt={`Carousel image ${index + 1}`} className="rounded-box" />
        </div>
      ))}
    </div>
  );
}
