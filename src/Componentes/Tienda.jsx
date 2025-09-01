import React, { useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from '/QuickViewModal';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';


const Tienda = () => {
  const {
    products,
    filteredProducts,
    filterProducts,
    sortProducts,
    clearAllFilters
  } = useProducts();

  const {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartItemsCount,
    getCartTotal,
    clearCart
  } = useCart();

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [filters, setFilters] = useState({
    brand: '',
    capacity: '',
    maxPrice: 2000,
    searchTerm: '',
    sortBy: 'name'
  });

  useEffect(() => {
    filterProducts(filters);
  }, [filters, filterProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const showNotification = (message, type = 'info') => {
    // Implementación de notificaciones (puedes usar react-toastify)
    console.log(`${type}: ${message}`);
  };

  return (
    <div className="tienda-container">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearAllFilters}
            products={products}
          />
          
          <ProductGrid
            products={filteredProducts}
            onAddToCart={(id) => {
              addToCart(id);
              showNotification('Producto agregado al carrito', 'success');
            }}
            onQuickView={openQuickView}
            onAddToWishlist={(id) => {
              showNotification('Producto agregado a favoritos', 'info');
            }}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={closeQuickView}
          onAddToCart={(id) => {
            addToCart(id);
            closeQuickView();
            showNotification('Producto agregado al carrito', 'success');
          }}
          onAddToWishlist={(id) => {
            showNotification('Producto agregado a favoritos', 'info');
          }}
        />
      )}
    </div>
  );
};

export default Tienda;
