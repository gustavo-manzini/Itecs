import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="/public/logo/logo.webp"
            alt="Logo "
            className="logo-itecs"
          />
        </Link>

        <div
          className="navbar-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicio-tecnico">Servicio Técnico</NavLink>
          </li>
          <li>
            <NavLink to="/tienda">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
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
