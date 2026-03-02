import React from "react";
import home from "../assets/Images/home.png";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="flex flex-col">
      {/*  BANNER SECTION */}
      <div
        className="relative min-h-[90vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-4xl px-10 text-white">
          <p className="text-lg uppercase mb-4 text-orange-400">
            Smart Emergency Fuel Assistance
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Powering Your Journey <br />
            When You Need Fuel the Most
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            FuelNow helps you get emergency fuel delivered to your location by
            connecting you with nearby petrol pumps quickly and safely.
          </p>

          <div className="flex gap-4">
            <NavLink
              to="/fuel-now"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition inline-block"
            >
              Fuel Now
            </NavLink>

            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              ▶ Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* GUIDELINES SECTION  */}
      {/* GUIDELINES SECTION */}
      <div className="bg-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Fuel System Guidelines
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Simple guidelines followed by FuelNow to ensure safe and efficient
            emergency fuel delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-3">
              <span className="text-orange-500 text-xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Secure Payments</h3>
                <p className="text-gray-600">
                  Safe and transparent digital payment methods.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-orange-500 text-xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Quick Assistance</h3>
                <p className="text-gray-600">
                  Fast connection with nearby petrol pumps.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-orange-500 text-xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Accurate Fuel Delivery
                </h3>
                <p className="text-gray-600">
                  Correct fuel type and quantity ensured.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-orange-500 text-xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Safety First</h3>
                <p className="text-gray-600">
                  Fuel handling follows basic safety standards.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 flex gap-3">
              <span className="text-orange-500 text-xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Smart Technology</h3>
                <p className="text-gray-600">
                  Location tracking and monitoring for faster response time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
