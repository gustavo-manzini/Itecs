import React from "react";
import "../App.css";

function home() {
  return (
    <section className="hero-section">
      <div>
        <p>Tu iPhone favorito, al mejor precio</p>
        <h1>
          Tecnología de confianza, <br /> reacondicionada para ti
        </h1>
        <p>Más sostenible, más inteligente, más económico</p>
        <button className="cta-button">Comprar ahora</button>
      </div>
      <div className="imagen">
        <img src="/public/home/iphone16.webp" alt="Iphone" />
      </div>
    </section>
  );
}

export default home;
