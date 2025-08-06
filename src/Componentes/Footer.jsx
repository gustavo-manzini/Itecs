import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribite a nuestro Newsletter</h2>
        <form className="newsletter-form">
          <input
            className="input-news"
            type="email"
            placeholder="Dirección de Email*"
            required
          />
          <button className="newsletter-btn" type="submit">
            SUBSCRIBIRSE
          </button>
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-about">
          <img src="/logo/logo.webp" className="brand" alt="logo" />
          <p>
            Creado por un equipo de técnicos certificados con más de 10 años de
            experiencia reparando celulares, tablets y computadoras.
          </p>
        </div>

        <div className="footer-column">
          <h4>LINKS ÚTILES</h4>
          <ul>
            <li>Pagos y Envíos</li>
            <li>Cómo Comprar</li>
            <li>Términos y Condiciones</li>
            <li>Políticas de Privacidad</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ÁREA DE CLIENTE</h4>
          <ul>
            <li>Mi Cuenta</li>
            <li>Mi Carrito</li>
            <li>Mis Compras</li>
            <li>Mis Direcciones</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>HORARIO</h4>
          <ul>
            <li>De Lun. a Vie. de 10 a 18hs.</li>
            <li>Sábados de 10 a 14hs.</li>
            <li>Enviar Whatsapp</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 - Todos los derechos reservados - ITECS Soluciones
          SAS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
