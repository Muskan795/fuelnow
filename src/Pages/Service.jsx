import React from "react";

const services = [
  {
    name: "Battery Jump Start",
    rating: "4.8",
    desc: "Quick battery jump start assistance for cars and bikes.",
  },
  {
    name: "Puncture Repair",
    rating: "4.6",
    desc: "Instant tyre puncture repair service on-road.",
  },
  {
    name: "Engine Inspection",
    rating: "4.7",
    desc: "Basic engine check and minor issue diagnosis.",
  },
  {
    name: "Oil Top-Up Service",
    rating: "4.5",
    desc: "Engine oil level check and top-up service.",
  },
  {
    name: "Brake Check",
    rating: "4.6",
    desc: "Inspection of brake pads and brake system.",
  },
  {
    name: "Minor Electrical Repairs",
    rating: "4.4",
    desc: "Fixing small electrical faults on-site.",
  },
  {
    name: "Spark Plug Replacement",
    rating: "4.7",
    desc: "Quick spark plug replacement for smooth ride.",
  },
  {
    name: "Chain Adjustment (Bike)",
    rating: "4.5",
    desc: "Bike chain tightening and alignment service.",
  },
  {
    name: "Emergency Towing Support",
    rating: "4.9",
    desc: "Immediate towing assistance for breakdown cases.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Mechanic Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {service.name}
              </h2>

              <p className="text-gray-600 mb-3 text-sm">
                {service.desc}
              </p>

              <p className="mb-4 text-orange-500 font-medium">
                ⭐ {service.rating} / 5
              </p>

              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Service;
