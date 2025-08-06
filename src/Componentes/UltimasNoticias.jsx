import NoticiaCard from "./NoticiasCard";


const noticias = [
  {
    imagen: '/noticias/imagen1.webp',
    categoria: "TECNOLOGÍA Y GADGETS",
    titulo: "3 consejos para prolongar la vida útil de los cables Apple",
    descripcion: "1. Mantén tus cables organizados. La organización adecuada de los..."
  },
  {
    imagen: '/noticias/imagen2.webp',
    categoria: "BLOG",
    titulo: "Como hacer un test de hardware en teléfonos Samsung",
    descripcion: "¿Tienes un celular Samsung y quieres saber si funciona correctamente?..."
  },
  {
    imagen: "/noticias/iphone16.jpeg",
    categoria: "TECNOLOGÍA",
    titulo: "iPhone 17 : Todo lo que sabemos hasta ahora",
    descripcion: "El iPhone 17 está a la vuelta de la esquina y las expectativas son altas..."
  }
];

const UltimasNoticias = () => {
  return (
    <section className="noticias-section">
      <div className="noticias-header">
        <h2>Últimas Noticias</h2>
        {/* <button className="noticia-blog-btn">Visitar Blog</button> */}
      </div>

      <div className="noticias-grid">
        {noticias.map((noticia, index) => (
          <NoticiaCard key={index} {...noticia} />
        ))}
      </div>
    </section>
  );
};

export default UltimasNoticias;
