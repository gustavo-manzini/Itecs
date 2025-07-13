import React, { useState } from "react";
import "../App.css";

const slideData = [
  {
    text1: "Tu iPhone favorito, al mejor precio",
    title: (
      <>
        Tecnología de confianza, <br /> reacondicionada para ti
      </>
    ),
    text2: "Más sostenible, más inteligente, más económico",
    img: "/public/home/iphone16.webp",
    alt: "Iphone 16",
  },
  {
    text1: "MacBook Pro como nuevo",
    title: (
      <>
        Potencia y elegancia, <br /> reacondicionada para ti
      </>
    ),
    text2: "Ahorra y cuida el planeta",
    img: "/16promax/cameracontrol.jpeg",
    alt: "MacBook Pro",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const total = slideData.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slideData.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="slide-text">
              <p>{slide.text1}</p>
              <h1>{slide.title}</h1>
              <p>{slide.text2}</p>
              <button className="cta-button">Comprar ahora</button>
            </div>
            <div className="slide-image">
              <img src={slide.img} alt={slide.alt} />
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide} aria-label="Previous Slide">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="slider-dots">
          {slideData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
     <button onClick={nextSlide} aria-label="Next Slide">
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
</button>
      </div>
    </div>
  );
};

function Home() {
  return (
    <section className="hero-section">
      <Slider />
    </section>
  );
}

export default Home;
