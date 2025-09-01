import { createContext, useState, useContext } from "react";

// 1️⃣ Crear el contexto
const CartContext = createContext();

// 2️⃣ Hook para usar el contexto más fácil
export const useCart = () => useContext(CartContext);

// 3️⃣ Provider que envuelve la app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cada item: { product, qty }

  // Agregar producto al carrito
  const addItem = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        // Si ya está, aumenta la cantidad
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      // Si no está, lo agrega
      return [...prev, { product, qty: 1 }];
    });
  };

  // Eliminar producto del carrito
  const removeItem = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Limpiar carrito
  const clearCart = () => setCart([]);

  // Total del carrito
  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
