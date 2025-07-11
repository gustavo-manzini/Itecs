// Dispositivo.jsx
import { useState } from "react";
import Formulario from "./Formulario";

const Dispositivo = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");

  return (
    <div className="contenedor">
      <h2>¿Qué <strong>modelo</strong> tienes?</h2>

      <p className="subtitulo">Selecciona tu tipo de dispositivo:</p>

      <div className="opciones">
        <button onClick={() => setTipoSeleccionado("smartphone")}>📱 Smartphone</button>
        <button onClick={() => setTipoSeleccionado("tablet")}>📲 Tablet</button>
        <button onClick={() => setTipoSeleccionado("watch")}>⌚ Watch</button>
        <button onClick={() => setTipoSeleccionado("laptop")}>💻 Laptop</button>
      </div>
<div className="centro-formulario">
  <Formulario tipo={tipoSeleccionado} />
</div>
    
    </div>
  );
};

export default Dispositivo;
