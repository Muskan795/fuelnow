import { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import PumpCard from "../Components/PumpCard";

function FuelNow() {
  const [query, setQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]);
  const [stations, setStations] = useState([]);
  const [cart, setCart] = useState([]);

  const searchLocation = async () => {
    const res = await axios.get(
      `https://corsproxy.io/?https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );

    if (res.data.length === 0) {
      alert("Location not found");
      return;
    }

    const lat = res.data[0].lat;
    const lon = res.data[0].lon;

    setMapCenter([lat, lon]);
    searchPetrolPumps(lat, lon);
  };

  const searchPetrolPumps = async (lat, lon) => {
    const overpassQuery = `
      [out:json];
      node[amenity=fuel](around:3000,${lat},${lon});
      out;
    `;

    const res = await axios.post(
      "https://overpass-api.de/api/interpreter",
      overpassQuery
    );

    const data = res.data.elements.map((item) => ({
      lat: item.lat,
      lon: item.lon,
      name: item.tags?.name || "Fuel Station",
    }));

    setStations(data.slice(0, 3));
  };

  const addToCart = (pump, qty) => {
    const item = {
      pump: pump.name,
      quantity: qty,
    };

    setCart([...cart, item]);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-6">
        FuelNow ⛽
      </h2>

      {/* SEARCH */}
      <div className="flex gap-3 justify-center mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-3 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={searchLocation}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
        >
          Search
        </button>
      </div>

      {/* MAP */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <MapContainer center={mapCenter} zoom={13} className="h-[400px] w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s, i) => (
            <Marker key={i} position={[s.lat, s.lon]} />
          ))}
        </MapContainer>
      </div>

      {/* PUMP + CART */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT → PUMPS */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {stations.map((s, i) => (
            <PumpCard key={i} pump={s} addToCart={addToCart} />
          ))}
        </div>

        {/* RIGHT → CART */}
       

      </div>
    </div>
  );
}

export default FuelNow;