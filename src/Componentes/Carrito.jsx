import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, removeItem, clearCart, total } = useCart();

  const crearOrden = async () => {
    if (cart.length === 0) return alert("Carrito vacío");

    try {
      const items = cart.map(i => ({ productId: i.product.id, qty: i.qty }));
      const res = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items })
      });
      if (!res.ok) throw new Error("Error creando orden");

      await res.json();
      alert("Orden creada ✅");
      clearCart();
    } catch (e) {
      alert(e.message);
    }
  };

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <section style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
      <h2 style={{ marginBottom: 16 }}>Mi Carrito</h2>
      {cart.map(item => (
        <div key={item.product.id} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
          padding: 8,
          border: "1px solid #ddd",
          borderRadius: 8
        }}>
          <span>{item.product.name} x {item.qty}</span>
          <span>${item.product.price * item.qty}</span>
          <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
        </div>
      ))}
      <p style={{ marginTop: 16, fontWeight: "bold" }}>Total: ${total}</p>
      <button
        onClick={crearOrden}
        style={{
          marginTop: 8,
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#28a745",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Finalizar compra
      </button>
    </section>
  );
}
