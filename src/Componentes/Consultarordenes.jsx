import React, { useState } from 'react';

const ConsultOrder = () => {
  const [code, setCode] = useState('');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para consultar la orden
    console.log('Código ingresado:', code);
  };

  return (
    <div className="consult-order-container">
      <h1>Consultar Orden</h1>
      <p>
        ¿Tienes un equipo en nuestro servicio técnico y quieres hacerle seguimiento? 
        Ingresa el código brindado en la orden impresa y seguí todos los detalles.
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={code} 
          onChange={handleInputChange} 
          placeholder="Ingresa tu código" 
          required
        />
        <button type="submit">CONSULTAR</button>
      </form>
    </div>
  );
};

export default ConsultOrder;
