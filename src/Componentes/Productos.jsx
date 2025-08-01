import React from "react";

const Productos = ({ productos }) => {
  return (
    <div className="productos-lista">
      {productos.map((p) => (
        <div key={p.id} className="producto-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
