
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
  return (
    <section className="categorias-section">
      <div className="categorias-container">
        {categorias.map((cat, index) => (
          <div className={`categoria-card hover-${index + 1}`} key={index}>
            <img src={cat.imagen} alt={cat.titulo} className="categoria-img" />
            <div className="categoria-titulo">{cat.titulo}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categorias;
