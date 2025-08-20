import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        setMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuOpen]);

  // Cerrar menú al cambiar el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo/logo.webp" alt="Logo " className="logo-itecs" />
        </Link>

        <div
          className="navbar-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={handleLinkClick}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicio-tecnico" onClick={handleLinkClick}>
              Servicio Técnico
            </NavLink>
          </li>
          <li>
            <NavLink to="/tienda" onClick={handleLinkClick}>
              Tienda
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" onClick={handleLinkClick}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={handleLinkClick}>
              Contacto
            </NavLink>
          </li>
        </ul>

        <div className="navbar-icons">
          <FiSearch className="icon" />
          <FiUser className="icon" />
          <FiShoppingBag className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
