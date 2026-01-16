import React from "react";
import home from "../assets/Images/home.png";

const HomeBanner = () => {
  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
         backgroundImage: `url(${home})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-10 text-white">
        {/* Small text */}
        <p className="text-sm uppercase  mb-4 text-orange-400">
          Smart Emergency Fuel Assistance
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Powering Your Journey <br />
          When You Need Fuel the Most
        </h1>

        {/* Sub text */}
        <p className="text-lg text-gray-200 mb-8">
          FuelNow helps you get emergency fuel delivered to your location
          by connecting you with nearby petrol pumps quickly and safely.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
            Fuel Now
          </button>

          <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            ▶ Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
