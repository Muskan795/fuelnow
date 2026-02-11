import React from "react";
import mechanicImg from "../assets/Images/mechanicImg.png";
import { NavLink } from "react-router-dom";

const MechanicSection = () => {
  return (
    <div className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SIDE IMAGE */}
       {/* LEFT SIDE IMAGE */}
<div className="w-full lg:w-1/2 flex flex-col items-center">

  <img
    src={mechanicImg}
    alt="Mechanic Service"
    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
  />

  {/* BOOK SERVICE BUTTON */}
  <NavLink to="/service">
  <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition shadow-md">
    Book Service
  </button>
</NavLink>


</div>



        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">
            On-Road Mechanic Assistance
          </h2>

          <p className="text-gray-600 mb-6">
            FuelNow also provides emergency mechanic services for both
            cars and bikes to ensure your journey continues safely.
          </p>

          <ul className="space-y-3 list-disc list-inside text-gray-700">

            <li> Battery Jump Start</li>
            <li> Puncture Repair</li>
            <li> Engine Inspection</li>
            <li> Oil Top-Up Service</li>
            <li> Brake Check</li>
            <li> Minor Electrical Repairs</li>
            <li> Spark Plug Replacement</li>
            <li> Chain Adjustment (Bike)</li>
            <li> Emergency Towing Support</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default MechanicSection;
