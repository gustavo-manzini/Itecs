import React from "react";


const NoticiaCard = ({ imagen, categoria, titulo, descripcion }) => {
  return (
    <div className="noticia-card">
      <img src={imagen} alt={titulo} className="noticia-img" />
      <div className="noticia-content">
        <p className="noticia-categoria">{categoria}</p>
        <h3 className="noticia-titulo">{titulo}</h3>
        <p className="noticia-descripcion">{descripcion}</p>
        <button className="noticia-boton">Continuar leyendo</button>
      </div>
    </div>
  );
};

export default NoticiaCard;
