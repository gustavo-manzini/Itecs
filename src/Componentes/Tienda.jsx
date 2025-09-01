import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Tienda() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { addItem } = useCart();

  // Carga productos desde el backend
  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/products");
      if (!res.ok) throw new Error("No se pudo cargar productos");
      const data = await res.json();
      setProductos(data);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar al carrito
  const handleAgregarCarrito = (producto) => {
    addItem(producto, 1); // agrega 1 unidad al carrito
    alert(`${producto.name} agregado al carrito 🛒`);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <section style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
      <h2 style={{ color: "#fff", marginBottom: 16, textAlign: "center" }}>
        Tienda de Servicios
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {productos.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
            <p style={{ margin: "4px 0" }}>Precio: ${p.price}</p>
            <p style={{ margin: "4px 0" }}>Stock: {p.stock}</p>

            <button
              onClick={() => handleAgregarCarrito(p)}
              disabled={p.stock === 0}
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                border: "none",
                backgroundColor: p.stock === 0 ? "#ccc" : "#007bff",
                color: "#fff",
                cursor: p.stock === 0 ? "not-allowed" : "pointer",
              }}
            >
              {p.stock > 0 ? "Agregar al carrito" : "Sin stock"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
