import React, { useState, useMemo } from "react";
import BRANDS from "./devices/Brands"; 

function BrandCard({ brand, onClick }) {
  return (
    <div className="brand-card" onClick={() => onClick(brand)}>
      <img src={brand.logo} alt={brand.name} />
      <div>{brand.name}</div>
    </div>
  );
}

function ModelCard({ model }) {
  const modelName = typeof model === "string" ? model : model.name;
  const modelImage = typeof model === "object" && model.image ? model.image : null;
  return (
    <div className="model-card" key={modelName}>
      {modelImage && (
        <img
          src={modelImage}
          alt={modelName}
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      )}
      <div>{modelName}</div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="progress-bar">
      {["Seleccionar dispositivo", "Seleccionar reparar", "Finalizar pedido"].map(
        (step, i) => (
          <React.Fragment key={step}>
            <div className={`progress-step ${i === 0 ? "active" : ""}`}>
              <span>{i + 1}</span>
              <p>{step}</p>
            </div>
            {i < 2 && <div className="progress-line" />}
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default function DeviceSelector() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const searchLower = search.toLowerCase();

  const filteredBrands = useMemo(() => {
    if (!search) return BRANDS;
    return BRANDS.filter(
      (b) =>
        b.name.toLowerCase().includes(searchLower) ||
        b.models.some((m) => {
          const name = typeof m === "string" ? m : m.name;
          return name.toLowerCase().includes(searchLower);
        })
    );
  }, [search, searchLower]);

  const filteredModels = useMemo(() => {
    if (!selectedBrand) return [];
    if (!search) return selectedBrand.models;
    return selectedBrand.models.filter((m) => {
      const modelName = typeof m === "string" ? m : m.name;
      return modelName.toLowerCase().includes(searchLower);
    });
  }, [selectedBrand, search, searchLower]);

  return (
    <div className="device-selector-bg">
      <div className="device-selector-container">
        <ProgressBar />

        <div className="device-selector-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            {selectedBrand && (
              <button className="back-btn" onClick={() => setSelectedBrand(null)}>
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

        {!selectedBrand ? (
          <>
            <p className="subtitle">
              O selecciona tu <b>tipo</b>
            </p>
            <div className="brands-grid">
              {filteredBrands.map((brand) => (
                <BrandCard
                  key={brand.name}
                  brand={brand}
                  onClick={setSelectedBrand}
                />
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
                filteredModels.map((model) => <ModelCard key={model.name || model} model={model} />)
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
