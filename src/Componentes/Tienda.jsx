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
      const res = await fetch("http://localhost:8080/api/products"); // URL completa o proxy
      if (!res.ok) throw new Error("No se pudo cargar productos");
      const data = await res.json();
      setProductos(data);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para comprar 1 unidad del producto
  const comprarUno = async (productId) => {
    try {
      const res = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ productId, qty: 1 }] })
      });
      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "No se pudo comprar");
      }
      await loadProducts(); // refresca stock
      alert("Compra realizada ✅");
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <section style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
      <h2 style={{ color: "#fff", marginBottom: 16, textAlign: "center" }}>Tienda de Servicios</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16
      }}>
        {productos.map((p) => (
          <article key={p.id} style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 16
          }}>
            <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
            <p style={{ margin: "4px 0" }}>Precio: ${p.price}</p>
            <p style={{ margin: "4px 0" }}>Stock: {p.stock}</p>
            <button
              onClick={() => comprarUno(p.id)}
              disabled={p.stock === 0}
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                border: "none",
                cursor: p.stock === 0 ? "not-allowed" : "pointer"
              }}
            >
              {p.stock > 0 ? "Comprar" : "Sin stock"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
