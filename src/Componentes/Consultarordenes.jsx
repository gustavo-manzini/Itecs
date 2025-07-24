import React, { useState } from "react";
import brokenPhone from "/public/celroto.webp"; 
const OrderCheck = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  const handleCheck = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setOrderCode("");
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para consultar la orden
    alert('Consultando orden con código: ${orderCode}');
  };

  return (
    <>
      <section className="order-section">
        <div className="order-content">
          <div className="order-text">
            <h2>Consultar Orden</h2>
            <p>
              ¿Tenés un equipo en nuestro servicio técnico y querés hacerle
              seguimiento? Ingresá el código brindado en la orden impresa y
              seguí todos los detalles.
            </p>
            <button className="order-button" onClick={handleCheck}>
              CONSULTAR
            </button>
          </div>
          <div className="order-image">
            <img src={brokenPhone} alt="Teléfonos rotos" />
            
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>Consulta de orden online</h3>
            <p>
              Mediante este formulario podrás consultar el estado de tu orden de
              trabajo. Solo ingresa el código que se encuentra en la orden
              entregada por la empresa.
            </p>
            <input
              type="text"
              placeholder="Inserte su código..."
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
            />
            <button onClick={handleSubmit}>Consultar orden</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderCheck;