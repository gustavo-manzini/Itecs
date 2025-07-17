import React from 'react';

const Contacto = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contacto</h2>
        <nav>
          <a href="/">Inicio</a>
          <span> / </span>
          <span>Contacto</span>
        </nav>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <span className="icon">📍</span>
          <h3>Casa Central</h3>
          <p>18 de Julio 1710 – Local 09</p>
          <p>Galería del Cine Opera (Montevideo)</p>
        </div>
        <div className="info-item">
          <span className="icon">📞</span>
          <h3>Teléfono</h3>
          <p>+598 99 600 819</p>
          <p>Soporte de 10:00 a 20:00 hs</p>
        </div>
        <div className="info-item">
          <span className="icon">📧</span>
          <h3>Email</h3>
          <p>info@itecs.com.uy</p>
          <p>taller@itecs.com.uy</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
