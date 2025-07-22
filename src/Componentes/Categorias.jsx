import React, {useState} from "react";
const categorias = [
  {
    titulo: "informatica",
    imagen: "/home/Informatica.png",
  },
  {
    titulo: "Computadoras",
    imagen: "/home/computadoras.png",
  },
  {
    titulo: "Accesorios",
    imagen: "/home/accesorios.png",
  },
  {
    titulo: "celulares",
    imagen: "/home/iphone16.jpeg",
  },
];


const Categorias = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="categorias-section">
      <div className="categorias-container">
        {categorias.map((cat, index) => (
          <div
            className={`categoria-card hover-${index + 1}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={cat.imagen} alt={cat.titulo} className="categoria-img" />
            <div
              className="categoria-titulo"
              style={{
                color: hoveredIndex === index ? "white" : "inherit", // "inherit" mantiene el color original
              }}
            >
              {cat.titulo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
