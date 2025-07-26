const noticias = [
  {
    Categorias: "TECNOLOGÍA Y GADGETS",
    titulo: "3 consejos para prolongar la vida útil de los cables Apple",
    resumen:
      "1. Mantén tus cables organizados La organización adecuada de los...",
    imagen: "/public/noticias/imagen1.webp",
    alt: "Cables Apple organizados",
    link: "#",
  },
  {
    Categorias: "BLOG",
    titulo: "Cómo hacer un test de hardware en télefonos Samsung",
    resumen:
      "¿Tienes un celular Samsung y quieres saber si funciona correctamente?...",
    imagen: "/public/noticias/imagen2.webp",
    alt: "Test Samsung",
    link: "#",
  },
];

const UltimasNoticias = () => (
  <div className="container ultimas-noticias-section my-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="fw-bold">Últimas Noticias</h2>
      <a href="#" className="btn btn-light fw-semibold">
        Visitar Blog
      </a>
    </div>
    <div className="row g-4">
      {noticias.map((nota, idx) => (
        <div className="col-12 col-md-6" key={idx}>
          <div className="card h-100 shadow ult-noticia-card">
            <img
              src={nota.imagen}
              alt={nota.alt}
              className="card-img-top img-fluid ult-noticia-img"
              style={{
                objectFit: "cover",
                height: 260,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
            <div className="card-body">
              <span className="text-secondary small fw-semibold">
                {nota.categoria}
              </span>
              <h5 className="card-title fw-bold mt-2">{nota.titulo}</h5>
              <p
                className="card-text text-secondary mb-4"
                style={{ minHeight: 48 }}
              >
                {nota.resumen}
              </p>
              <a
                className="btn btn-light fw-semibold ult-noticia-btn"
                href={nota.link}
              >
                Continuar leyendo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UltimasNoticias;
