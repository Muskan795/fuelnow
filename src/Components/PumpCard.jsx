import { useState } from "react";
import { FaGasPump } from "react-icons/fa";

function PumpCard({ pump, addToCart }) {

  const [qty, setQty] = useState("");

  const handleAdd = () => {

    if (!qty || qty <= 0) {
      alert("Enter valid fuel quantity");
      return;
    }

    addToCart(pump, qty);

    setQty("");
  };

  return (

    <div className="border rounded-xl p-5 shadow-md flex flex-col gap-3 hover:shadow-xl transition bg-white">

      {/* PUMP NAME */}
      <h4 className="font-bold text-lg flex items-center gap-2">

        <FaGasPump className="text-orange-500 text-xl" />

        {pump.name}

      </h4>

      {/* ADDRESS */}
      <p className="text-sm text-gray-500">

        {pump.address}

      </p>

      {/* PRICE */}
      <p className="text-orange-500 font-semibold">

        ₹{pump.price} / L

      </p>

      {/* QUANTITY INPUT */}
      <input
        type="number"
        placeholder="Enter litres"
        value={qty}
        min="1"
        onChange={(e) => setQty(e.target.value)}
        className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAdd}
        className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>

    </div>

  );
}

export default PumpCard;