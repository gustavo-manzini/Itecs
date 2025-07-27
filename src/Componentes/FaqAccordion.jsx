import React, { useState } from 'react';


const faqs = [
  {
    pregunta: "¿Cuánto cuesta la reparación de una pantalla de móvil?",
    respuesta: "El precio varía según el modelo, pero suele rondar entre $1000 y $3000 pesos.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda en repararse un smartphone?",
    respuesta: "Generalmente entre 2 a 4 días hábiles dependiendo del daño y la disponibilidad de repuestos.",
  },
  {
    pregunta: "¿Puedo llevar un teléfono mojado?",
    respuesta: "Sí, pero recomendamos traerlo lo antes posible para evitar daños mayores por corrosión.",
  }
];

function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes (FAQs)</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-card" onClick={() => toggleFaq(index)}>
          <div className="faq-header">
            <span>{item.pregunta}</span>
            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
