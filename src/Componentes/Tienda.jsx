const productos = [
  {
    id: 1,
    nombre: 'Dell Latitude 7400',
    specs: 'Core i5 1.6 GHz, 16GB RAM, 500GB SSD, 14", Windows 11 Pro',
    precio: 319.00,
    estado: 'AGOTADO',
  },
  {
    id: 2,
    nombre: 'Dell Latitude 3410',
    specs: 'Core i5 2.2 GHz, 16GB RAM, 512GB SSD, 14", Windows 10 Pro',
    precio: 399.00,
    estado: 'AGOTADO',
  },
  {
    id: 3,
    nombre: 'Vidrio Templado para iPhone',
    precio: 8.00,
    estado: 'DISPONIBLE',
  },
  {
    id: 4,
    nombre: 'Cable Apple de USB-C a MagSafe 3',
    precio: 75.00,
    estado: 'DISPONIBLE',
  },
];

const Tienda = () => {
  return (
    <div className="tienda">
      <h1>Tienda ITECS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.specs || 'Especificaciones no disponibles'}</p>
            <p>Precio: U$D {producto.precio.toFixed(2)} (IVA incluido)</p>
            <p>Estado: {producto.estado}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
