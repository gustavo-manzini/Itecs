import React, { useState } from "react";
import "../App.css";

const slides = [
  {
    text1: "Tu iPhone favorito, al mejor precio",
    title: (
      <>
        Tecnología de confianza, <br /> reacondicionada para ti
      </>
    ),
    text2: "Más sostenible, más inteligente, más económico",
    img: "/public/home/iphone16.webp",
    alt: "Iphone 16"
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
    alt: "MacBook Pro"
  }
];

function Home() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="hero-section">
      <div>
        <p>{slides[current].text1}</p>
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text2}</p>
        <button className="cta-button">Comprar ahora</button>
        <div className="slider-btn" style={{ marginTop: "1rem" }}>
          <button onClick={prevSlide} className="slider-btn">&#8592;</button>
          <button onClick={nextSlide} className="slider-btn">&#8594;</button>
        </div>
      </div>
      <div className="imagen">
        <img src={slides[current].img} alt={slides[current].alt} />
      </div>
    </section>
  );
}

export default Home;
