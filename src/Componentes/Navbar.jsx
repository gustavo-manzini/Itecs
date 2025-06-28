// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-it">It</span>
        <span className="logo-itecs">itecs</span>
      </Link>

      <div className="navbar-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`navbar-links`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicio-tecnico">Servicio Técnico</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="navbar-icons">
        <FiSearch className="icon" />
        <FiUser className="icon" />
        <FiShoppingBag className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
