import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, removeItem, total, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Cerrar menú con escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCartOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo/logo.webp" alt="Logo" className="logo-itecs" />
        </Link>

        {/* Icono menú hamburguesa */}
        <div className="navbar-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li><NavLink to="/" end onClick={handleLinkClick}>Inicio</NavLink></li>
          <li><NavLink to="/servicio-tecnico" onClick={handleLinkClick}>Servicio Técnico</NavLink></li>
          <li><NavLink to="/tienda" onClick={handleLinkClick}>Tienda</NavLink></li>
          <li><NavLink to="/nosotros" onClick={handleLinkClick}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" onClick={handleLinkClick}>Contacto</NavLink></li>
        </ul>

        {/* Iconos */}
        <div className="navbar-icons" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <FiSearch className="icon" />
          <FiUser className="icon" />

          {/* Cart Widget */}
          <div className="cart-icon" onClick={() => setCartOpen(true)} style={{ position: "relative", cursor: "pointer" }}>
            <span style={{ fontSize: 24, color: "#fff" }}>🛒</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
        </div>
      </div>

      {/* Overlay oscuro */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>}

      {/* Sidebar carrito */}
      <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h4>Mi Carrito</h4>
          <button onClick={() => setCartOpen(false)} className="close-btn">✖</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 && <p>Carrito vacío</p>}
          {cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <span>{item.product.name} x {item.qty}</span>
              <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <p>Total: ${total}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
