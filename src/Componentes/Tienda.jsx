import React, { useState } from "react";
import FiltroTienda from "./FiltroTienda";
import Productos from "./Productos";


const datosMock = [
  { id: 1, nombre: "SSD 240GB", marca: "Kingston", capacidad: "240", precio: 45 },
  { id: 2, nombre: "Disco 1TB", marca: "Seagate", capacidad: "1TB", precio: 70 },
  { id: 3, nombre: "Memoria 64GB", marca: "Hoco", capacidad: "64", precio: 15 },
  { id: 4, nombre: "Mouse Inalámbrico", marca: "Logitech", capacidad: "N/A", precio: 25 },
  // ... más productos
];

const Tienda = () => {
  const [filters, setFilters] = useState({ marcas: [], capacidades: [] });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 9999 });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const alreadyChecked = prev[type].includes(value);
      return {
        ...prev,
        [type]: alreadyChecked
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value],
      };
    });
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const productosFiltrados = datosMock.filter((producto) => {
    const marcaMatch = filters.marcas.length === 0 || filters.marcas.includes(producto.marca);
    const capacidadMatch =
      filters.capacidades.length === 0 || filters.capacidades.includes(producto.capacidad);
    const precioMatch = producto.precio >= priceRange.min && producto.precio <= priceRange.max;
    return marcaMatch && capacidadMatch && precioMatch;
  });

  return (
    <div className="tienda-container">
      <FiltroTienda
        selectedFilters={filters}
        onFilterChange={handleFilterChange}
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
      />
      <Productos productos={productosFiltrados} />
    </div>
  );
};

export default Tienda;
