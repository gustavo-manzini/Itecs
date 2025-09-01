

const ProductCard = ({ product, onAddToCart, onQuickView, onAddToWishlist }) => {
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    return stars;
  };

  return (
    <div className="product-card bg-gray-800 rounded-xl shadow-lg overflow-hidden fade-in border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:-translate-y-2">
      <div className="relative group">
        <img 
          src={product.image} 
          alt={`${product.name} - ${product.brand} ${product.capacity}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://placehold.co/300x300/6b7280/ffffff?text=Producto';
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              NUEVO
            </span>
          )}
          {product.stock <= 5 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              POCAS UNIDADES
            </span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {product.brand}
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      
      <div className="p-4 lg:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg lg:text-xl font-bold text-white line-clamp-1 flex-1">
            {product.name}
          </h3>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2 text-sm">
            {generateStars(product.rating)}
          </div>
          <span className="text-sm text-gray-400">({product.rating})</span>
        </div>
        
        <p className="text-gray-400 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full flex items-center w-fit">
            <i className="fas fa-microchip mr-1"></i>
            {product.capacity}
          </span>
          <div className="text-right">
            <div className="text-xl lg:text-2xl font-bold text-white">
              ${product.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">
              {product.stock} disponibles
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={() => onAddToCart(product.id)}
            disabled={product.stock === 0}
            className={`flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
              product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <i className="fas fa-cart-plus mr-2"></i>
            {product.stock === 0 ? 'Agotado' : 'Agregar'}
          </button>
          <div className="flex gap-2">
            <button 
              onClick={() => onAddToWishlist(product.id)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
              title="Agregar a favoritos"
            >
              <i className="far fa-heart"></i>
            </button>
            <button 
              onClick={() => onQuickView(product)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
              title="Vista rápida"
            >
              <i className="fas fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
