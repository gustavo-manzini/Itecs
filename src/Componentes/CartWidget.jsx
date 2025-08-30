import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function CartWidget() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FiShoppingCart size={28} color="#fff" />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: -6,
            right: -10,
            backgroundColor: "red",
            color: "#fff",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}
