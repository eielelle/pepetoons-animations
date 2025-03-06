"use client";
import './Sibling.css';
import React, { useState } from 'react';


export default function Sibling() {
  const [activeIndex, setActiveIndex] = useState(0);

  const siblings = [
    { image: '/Resources/Sibls.png', type: 'portrait' },
    { name: 'Saturina Rizal', image: '/Resources/Concepcion_Rizal.png' },
    { name: 'Paciano Rizal', image: '/Resources/Paciano_Rizal.png' },
    { name: 'Narcisa Rizal', image: '/Resources/Narcisa_Rizal.png' },
    { name: 'Olympia Rizal', image: '/Resources/Olympia_Rizal.png' },
    { name: 'Lucia Rizal', image: '/Resources/Lucia_Rizal.png' },
    { name: 'Maria Rizal', image: '/Resources/Maria_Rizal.png' },
    { name: 'Jose Rizal', image: '/Resources/Jose_Rizal.png' },
    { name: 'Concepcion Rizal', image: '/Resources/Concepcion_Rizal.png' },
    { name: 'Josefa Rizal', image: '/Resources/Josefa_Rizal.png' },
    { name: 'Trinidad Rizal', image: '/Resources/Trinidad_Rizal.png' },
    { name: 'Soledad Rizal', image: '/Resources/Soledad_Rizal.png' },
  ];

  return (
    <main
      className="main-container"
      style={{
        backgroundImage: `url("/Resources/picsibling.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}> 
        
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '10px',
          fontFamily: 'Passion One',
          fontSize: '50px',
        }}
      >
        Siblings
      </h1>

      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {siblings.map((sibling, index) => (
            <div className="slide" key={index}>
              {sibling.type === 'portrait' ? (
                // Special case for the first slide (the sibling portrait group)
                <div className="portrait-image">
                  <img src={sibling.image} alt={sibling.name} />
                </div>
              ) : (
                // Normal case for individual siblings
                <div className="circle-image">
                  <img src={sibling.image} alt={sibling.name} />
                </div>
              )}
              <h2>{sibling.name}</h2>
            </div>
          ))}
        </div>

        {/* Vertical Dots */}
        <div className="dots-container">
          {siblings.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
