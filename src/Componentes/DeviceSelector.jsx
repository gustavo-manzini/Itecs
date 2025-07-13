import React, { useState } from "react";

const BRANDS = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    models: ["iPhone 12 Pro Max", "iPhone 13", "iPhone SE", "iPhone XR"],
  },
  {
    name: "Honor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Honor_Logo.svg",
    models: ["Honor 70", "Honor X8", "Honor 50"],
  },
  {
    name: "Huawei",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Huawei_logo.svg",
    models: ["P30 Pro", "Mate 40", "Nova 9"],
  },
  {
    name: "Motorola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Motorola_logo.svg",
    models: ["Moto G100", "Moto Edge 20", "Moto E7"],
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    models: ["Galaxy S22", "Galaxy A52", "Galaxy Note 10"],
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    models: ["Redmi Note 10", "Mi 11", "Poco F3"],
  },
];

export default function DeviceSelector() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSearch("");
  };

  const handleBack = () => {
    setSelectedBrand(null);
    setSearch("");
  };

  const filteredBrands =
    search.length > 0
      ? BRANDS.filter(
          (b) =>
            b.name.toLowerCase().includes(search.toLowerCase()) ||
            b.models.some((m) =>
              m.toLowerCase().includes(search.toLowerCase())
            )
        )
      : BRANDS;

  const filteredModels =
    selectedBrand && search.length > 0
      ? selectedBrand.models.filter((m) =>
          m.toLowerCase().includes(search.toLowerCase())
        )
      : selectedBrand
      ? selectedBrand.models
      : [];

  return (
    <div className="device-selector-bg">
      <div className="device-selector-container">
        {/* Barra de progreso */}
        <div className="progress-bar">
          <div className="progress-step active">
            <span>1</span>
            <p>Seleccionar dispositivo</p>
          </div>
          <div className="progress-line" />
          <div className="progress-step">
            <span>2</span>
            <p>Seleccionar reparar</p>
          </div>
          <div className="progress-line" />
          <div className="progress-step">
            <span>3</span>
            <p>Finalizar pedido</p>
          </div>
        </div>
        {/* Título y buscador */}
        <div className="device-selector-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            {selectedBrand && (
              <button className="back-btn" onClick={handleBack}>
                &#8592;
              </button>
            )}
            <h2>
              ¿Qué <b>modelo</b> tienes?
            </h2>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Introduce tu marca, modelo o código de modelo."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
            <span className="find-model-box">
              <span style={{ fontSize: 32 }}>📱</span>
              <span>Encuentra mi modelo</span>
            </span>
          </div>
        </div>
        {/* Marcas o modelos */}
        {!selectedBrand ? (
          <>
            <p className="subtitle">
              O selecciona tu <b>marca</b>
            </p>
            <div className="brands-grid">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="brand-card"
                  onClick={() => handleBrandClick(brand)}
                >
                  <img src={brand.logo} alt={brand.name} />
                  <div>{brand.name}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="subtitle">
              Modelos de <b>{selectedBrand.name}</b>
            </p>
            <div className="models-grid">
              {filteredModels.length === 0 ? (
                <div className="no-models">No se encontraron modelos.</div>
              ) : (
                filteredModels.map((model) => (
                  <div key={model} className="model-card">
                    {model}
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}