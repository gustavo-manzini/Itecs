import { useState, useCallback, useMemo } from 'react';
import { initialProducts } from '../data/products';

export const useProducts = () => {
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = useCallback((filters) => {
    let filtered = products.filter(product => {
      const matchesBrand = !filters.brand || product.brand === filters.brand;
      const matchesCapacity = !filters.capacity || product.capacity === filters.capacity;
      const matchesPrice = product.price <= filters.maxPrice;
      const matchesSearch = !filters.searchTerm || 
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return matchesBrand && matchesCapacity && matchesPrice && matchesSearch;
    });

    // Aplicar ordenamiento
    filtered.sort((a, b) => {
      switch(filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'newest':
          return b.isNew - a.isNew;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products]);

  const clearAllFilters = useCallback(() => {
    setFilteredProducts(products);
  }, [products]);

  const brands = useMemo(() => 
    [...new Set(products.map(p => p.brand))].sort(), 
    [products]
  );

  const capacities = useMemo(() => 
    [...new Set(products.map(p => p.capacity))].sort(), 
    [products]
  );

  const maxPrice = useMemo(() => 
    Math.max(...products.map(p => p.price)), 
    [products]
  );

  return {
    products,
    filteredProducts,
    filterProducts,
    clearAllFilters,
    brands,
    capacities,
    maxPrice
  };
};
