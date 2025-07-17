
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import Tienda from "./Componentes/Tienda";
import Nosotros from "./Componentes/Nosotros";
import Contacto from "./Componentes/Contacto";
import ServicioTecnico from "./Componentes/Serviciotecnico";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio-tecnico" element={<ServicioTecnico />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
