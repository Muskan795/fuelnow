import { useNavigate } from "react-router-dom";

function CartPage({ cart = [], setCart }) {
  const navigate = useNavigate();

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className="bg-gray-100 flex justify-center py-12 px-4">
      {/* MAIN CART BOX */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 relative">
        {/* HEADER */}
        <h2 className="text-2xl font-bold text-center mb-6 border-b pb-3">
          🛒 YOUR CART
        </h2>

        {/* CART ITEMS */}
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty</p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 flex flex-col gap-3"
              >
                {/* TOP ROW */}
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <h3 className="font-semibold text-lg">{item.pump}</h3>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(i)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="font-bold text-lg">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(i)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>

                    <span className="font-bold text-orange-500 ml-4">
                      ₹{item.quantity * item.price}
                    </span>
                  </div>
                </div>

                {/* PRICE */}
                <p className="text-gray-500 text-sm">₹{item.price} / L</p>

                {/* REMOVE BUTTON */}
                <div className="flex justify-end">
                  <button
                    onClick={() => removeItem(i)}
                    className="text-sm border px-3 py-1 rounded hover:bg-red-50 text-red-500"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* TOTAL SECTION */}
        {cart.length > 0 && (
          <>
            <div className="border rounded-xl p-4 mt-8 flex justify-between font-bold text-lg bg-gray-50">
              <span>TOTAL</span>
              <span className="text-orange-500">₹{totalAmount}</span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded-xl text-lg hover:bg-orange-600 transition">
              Proceed To Checkout
            </button>
          </>
        )}

        {/* BACK BUTTON */}
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/fuel-now")}
          className="w-30 mt-3 border py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default CartPage;
