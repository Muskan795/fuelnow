import { useState } from "react";

function PumpCard({ pump, addToCart }) {
  const [qty, setQty] = useState("");

  return (
    <div className="border rounded-xl p-5 shadow-md flex flex-col gap-3 hover:shadow-xl transition">

      <h4 className="font-bold text-lg">{pump.name}</h4>

      <input
        type="number"
        placeholder="Litres"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="border p-2 rounded-lg"
      />

      <button
        onClick={() => {
          if (!qty) return alert("Enter quantity");
          addToCart(pump, qty);
          setQty("");
        }}
        className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default PumpCard;