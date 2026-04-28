import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import PumpCard from "../Components/PumpCard";
import { supabase } from "../lib/supabase";

function FuelNow({ cart, setCart }) {

  const [stations, setStations] = useState([]);
  const [query, setQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([25.7773, 87.4753]); // Purnea
  const [loading, setLoading] = useState(false);

  // ✅ FETCH ALL PUMPS
  const fetchFuelStations = async () => {

    setLoading(true);

    const { data, error } = await supabase
      .from("fuel_stations")   // ✅ CORRECT TABLE NAME
      .select("*");

    console.log("FETCH DATA:", data, error); // 🔍 DEBUG

    if (error) {
      console.log(error);
      alert("Error fetching petrol pumps");
      setLoading(false);
      return;
    }

    const pumps = data.map((item) => ({
      lat: Number(item.latitude),
      lon: Number(item.longitude),
      name: item.name,
      address: item.address,
      price: item.fuel_price
    }));

    setStations(pumps);

    // ✅ center map to first result
    if (pumps.length > 0) {
      setMapCenter([pumps[0].lat, pumps[0].lon]);
    }

    setLoading(false);
  };

  // ✅ SEARCH FUNCTION
  const handleSearch = async () => {

    if (!query.trim()) {
      fetchFuelStations();
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("fuel_stations")   // ✅ FIXED
      .select("*")
      .or(`name.ilike.%${query}%,address.ilike.%${query}%`);

    console.log("SEARCH DATA:", data, error); // 🔍 DEBUG

    if (error) {
      console.log(error);
      alert("Search failed");
      setLoading(false);
      return;
    }

    const pumps = data.map((item) => ({
      lat: Number(item.latitude),
      lon: Number(item.longitude),
      name: item.name,
      address: item.address,
      price: item.fuel_price
    }));

    setStations(pumps);

    // ✅ move map to search result
    if (pumps.length > 0) {
      setMapCenter([pumps[0].lat, pumps[0].lon]);
    }

    setLoading(false);
  };

  // ✅ LOAD ON PAGE START
  useEffect(() => {
    fetchFuelStations();
  }, []);

  // ✅ ADD TO CART
  const addToCart = (pump, qty) => {

    const item = {
      pump: pump.name,
      quantity: Number(qty),
      price: pump.price
    };

    setCart([...cart, item]);
  };

  return (

    <div className="p-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-6">
        FuelNow ⛽
      </h2>

      {/* SEARCH */}
      <div className="flex gap-3 justify-center mb-6">

        <input
          type="text"
          placeholder="Enter place or pump name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Search
        </button>

      </div>

      {/* MAP */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">

        <MapContainer
          center={mapCenter}
          zoom={13}
          className="h-[400px] w-full"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s, i) => (
            <Marker key={i} position={[s.lat, s.lon]} />
          ))}

        </MapContainer>

      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 mb-6">
          Searching petrol pumps...
        </p>
      )}

      {/* NO DATA */}
      {!loading && stations.length === 0 && (
        <p className="text-center text-gray-500 mb-6">
          No petrol pumps found for this location
        </p>
      )}

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {stations.map((s, i) => (
            <PumpCard
              key={i}
              pump={s}
              addToCart={addToCart}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default FuelNow;