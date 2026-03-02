import { useNavigate } from "react-router-dom";

function CartPage({ cart }) {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg shadow mb-3 flex justify-between"
          >
            <span>{item.pump}</span>
            <span className="text-orange-500 font-bold">
              {item.quantity} L
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;