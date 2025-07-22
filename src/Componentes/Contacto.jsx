import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './fixLeafletIcons'; 

const Contacto = () => {
  const position = [-34.9011, -56.1645]; 

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

      <div className="map-section" style={{ marginTop: '2rem' }}>
        <h3>¿Dónde estamos?</h3>
        <div style={{ height: '400px', width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                ¡Nos encontrás acá! <br /> Montevideo, Uruguay
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
