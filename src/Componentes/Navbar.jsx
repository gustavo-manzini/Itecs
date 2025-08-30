import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, removeItem, total, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        setMenuOpen(false);
      }
      if (cartOpen && !event.target.closest(".cart-modal") && !event.target.closest(".cart-icon")) {
        setCartOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCartOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuOpen, cartOpen]);

  // Cerrar menú al cambiar el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
          <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)} style={{ position: "relative", cursor: "pointer" }}>
            <span style={{ fontSize: 24, color: "#fff" }}>🛒</span>
            {totalItems > 0 && (
              <span style={{
                position: "absolute",
                top: -6,
                right: -10,
                backgroundColor: "red",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: 12,
                fontWeight: "bold"
              }}>
                {totalItems}
              </span>
            )}

            {/* Modal */}
            {cartOpen && (
              <div className="cart-modal" style={{
                position: "absolute",
                right: 0,
                top: "40px",
                width: "300px",
                maxHeight: "400px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 8,
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                padding: 16,
                overflowY: "auto",
                zIndex: 100
              }}>
                <h4>Mi Carrito</h4>
                {cart.length === 0 && <p>Carrito vacío</p>}
                {cart.map(item => (
                  <div key={item.product.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span>{item.product.name} x {item.qty}</span>
                    <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
                  </div>
                ))}
                {cart.length > 0 && (
                  <>
                    <p>Total: ${total}</p>
                    <button onClick={clearCart} style={{ marginTop: 8 }}>Vaciar carrito</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
