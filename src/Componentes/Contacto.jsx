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

      <div className="center-wrapper">
        <div className="contact-section">
          <div className="map-section">
            <h3>¿Dónde estamos?</h3>
            <div className="left-box">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.125167317798!2d-56.18175832446097!3d-34.90330827338156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f812820d55d41%3A0x8310a9585982fd16!2sITECS%20-%20Servicio%20T%C3%A9cnico!5e0!3m2!1ses-419!2suy!4v1753205773922!5m2!1ses-419!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa ITECS"
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <h2 class="mb-4 text-center">Envíanos tu consulta</h2>
              <p>A la brevedad, uno de nuestros asesores responderá tu solicitud.</p>
              <div className="right-box">
                <form>
                  <div className="input-row">
                    <input for="nombre" class="form-label" placeholder="nombre"/>
                    <input type="text" placeholder="Apellido" name="apellido" />
                  </div>
                  <div className="input-row">
                    <input type="email" placeholder="Dirección de Email" name="email" />
                    <input type="tel" placeholder="Número de Contacto" name="contacto" />
                  </div>
                  <textarea placeholder="Mensaje" name="mensaje" rows="6" />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
