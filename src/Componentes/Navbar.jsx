import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-it" to="/src/App.jsx">It</span>
        <span className="logo-itecs">itecs</span>
      </div>

      {/* Menú Hamburguesa (visible en móvil) */}
      <div className="navbar-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>Inicio</li>
        <li>Servicio Técnico</li>
        <li>Tienda</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      {/* Íconos */}
      <div className="navbar-icons">
        <FiSearch className="icon" />
        <FiUser className="icon" />
        <FiShoppingBag className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
