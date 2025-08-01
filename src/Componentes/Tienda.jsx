import React, { useState } from "react";
import FiltroTienda from "./FiltroTienda";
import productosData from "../data/productos.json";
import Productos from "./Productos";

const Tienda = () => {
  const [filters, setFilters] = useState({ marcas: [], capacidades: [] });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 9999 });

  // ... funciones para manejar filtros

  const productosFiltrados = productosData.filter((producto) => {
    const marcaMatch = filters.marcas.length === 0 || filters.marcas.includes(producto.marca);
    const capacidadMatch =
      filters.capacidades.length === 0 || filters.capacidades.includes(producto.capacidad);
    const precioMatch =
      producto.price >= priceRange.min && producto.price <= priceRange.max;
    return marcaMatch && capacidadMatch && precioMatch;
  });

  return (
    <div>
      <FiltroTienda
        selectedFilters={filters}
        onFilterChange={(type, value) => {/* ... */}}
        priceRange={priceRange}
        onPriceChange={(range) => {/* ... */}}
      />
      <Productos productos={productosFiltrados} />
    </div>
  );
};

export default Tienda;
