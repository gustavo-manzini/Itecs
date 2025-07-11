// Formulario.jsx

const Formulario = ({ tipo }) => {
  if (!tipo) return <p className="mensaje">Selecciona un tipo de dispositivo para continuar.</p>;

  return (
    <div className="formulario">
      <h3>Formulario para {tipo}</h3>
      {tipo === "smartphone" && (
        <>
          <label>Marca:</label>
          <input type="text" placeholder=" iPhone" />
          <label>Modelo:</label>
          <input type="text" placeholder=" 12 Pro Max" />
        </>
      )}
      {tipo === "tablet" && (
        <>
          <label>Marca:</label>
          <input type="text" placeholder="Ipad" />
          <label>Pulgadas:</label>
          <input type="text" placeholder=" 16'" />
        </>
      )}
      {tipo === "watch" && (
        <>
          <label>Marca:</label>
          <input type="text" placeholder=" Series 10"/>
          <label>Correa:</label>
          <input type="text"  placeholder="Azul"/>
        </>
      )}
      {tipo === "laptop" && (
        <>
          <label>Marca:</label>
          <input type="text"  placeholder="Apple"/>
          <label>Procesador:</label>
          <input type="text" placeholder="M1" />
          <label>RAM:</label>
          <input type="text" placeholder=" 16gb" />
        </>
      )}
    </div>
  );
};

export default Formulario;
