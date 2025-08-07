

const Productos = ({ productos }) => {
  return (
    <div className="productos">
      {productos.length === 0 ? (
        <p>No hay productos que coincidan con los filtros.</p>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h4>{producto.nombre}</h4>
            <p>Marca: {producto.marca}</p>
            <p>Capacidad: {producto.capacidad}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Productos;
