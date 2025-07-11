import React, { useState } from 'react';


const RepairForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    dispositivo: '',
    marca: '',
    problema: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', formData);
    alert('Formulario enviado correctamente ✅');
    // Limpiar formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      direccion: '',
      dispositivo: '',
      marca: '',
      problema: '',
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Formulario de reparación</h2>

      <label>Nombre completo*</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

      <label>Teléfono*</label>
      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />

      <label>Email*</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Dirección (opcional)</label>
      <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />

      <label>¿Qué dispositivo necesitas reparar?*</label>
      <select name="dispositivo" value={formData.dispositivo} onChange={handleChange} required>
        <option value="">Selecciona una opción</option>
        <option value="Notebook">Notebook</option>
        <option value="PC">PC</option>
        <option value="Celular">Celular</option>
        <option value="Tablet">Tablet</option>
        <option value="Otro">Otro</option>
      </select>

      <label>Marca y modelo</label>
      <input type="text" name="marca" value={formData.marca} onChange={handleChange} />

      <label>Describe el problema*</label>
      <textarea name="problema" rows="5" value={formData.problema} onChange={handleChange} required></textarea>

      <button type="submit">Enviar solicitud</button>
    </form>
  );
};

export default RepairForm;
