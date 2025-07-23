import React, { useState } from "react";

const reparaciones = [
  {
    titulo: "Reparar Móvil",
    imagen: "/public/reparacion/celulares.webp",
  },
  {
    titulo: "Laptops",
    imagen: "/public/reparaciones/laptop.png",
  },
  {
    titulo: "SmartWatches",
    imagen: "/public/reparaciones/",
  },
];

const ReparacionesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % 1); 
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + 1) % 1);
  };

  return (
    <div className="reparaciones-carousel">

      <div className="carousel-slide">
        {reparaciones.map((item, index) => (
          <div className="reparacion-card" key={index}>
            <img src={item.imagen} alt={item.titulo} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReparacionesCarousel;
