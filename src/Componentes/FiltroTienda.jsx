import React from "react";


const marcas = ["Apple", "Ese Ekgo", "Hoco", "Kingston", "Logitech", "Seagate"];
const capacidades = ["64", "120", "128", "240", "256", "480", "512", "960", "1TB", "2TB", "4TB", "5TB"];

const FiltroTienda = ({ selectedFilters, onFilterChange, priceRange, onPriceChange }) => {
  const handleCheckbox = (type, value) => {
    onFilterChange(type, value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onPriceChange({ ...priceRange, [name]: value });
  };

  return (
    <aside className="filtro-tienda">
      <h3>Marcas</h3>
      {marcas.map((marca) => (
        <label key={marca}>
          <input
            type="checkbox"
            value={marca}
            checked={selectedFilters.marcas.includes(marca)}
            onChange={() => handleCheckbox("marcas", marca)}
          />
          {marca}
        </label>
      ))}

      <h3>Capacidades</h3>
      {capacidades.map((capacidad) => (
        <label key={capacidad}>
          <input
            type="checkbox"
            value={capacidad}
            checked={selectedFilters.capacidades.includes(capacidad)}
            onChange={() => handleCheckbox("capacidades", capacidad)}
          />
          {capacidad}
        </label>
      ))}

      <h3>Precio (USD)</h3>
      <div className="precio-range">
        <label>
          Min:
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            min="0"
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            min="0"
          />
        </label>
      </div>
    </aside>
  );
};

export default FiltroTienda;
