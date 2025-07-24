const CardConsultarOrden = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <div className="card-consultar-orden">
      <div className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
      <div className="image-section">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};
export default CardConsultarOrden;