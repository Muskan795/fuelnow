import React from "react";
import aboutus from "../assets/Images/aboutus.png";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
<div className="relative w-full h-[500px]">

  <img
    src={aboutus}
    alt="About FuelNow"
    className="w-full h-full object-cover"
  />

 
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text On Image */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      About FuelNow
    </h1>

    <p className="max-w-2xl text-lg text-gray-200">
      Delivering emergency fuel and on-road mechanic assistance quickly,
      safely, and reliably across your city.
    </p>
  </div>

</div>


      {/* ================= WHO WE ARE ================= */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          FuelNow is a smart emergency fuel delivery and on-road assistance
          platform designed to help vehicle users during unexpected breakdowns.
          Whether you run out of fuel or need quick mechanical help, FuelNow
          connects you with nearby petrol pumps and trained service providers.
        </p>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="bg-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide fast, reliable, and safe emergency fuel and mechanic
              services using smart location-based technology.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted on-road emergency assistance platform,
              ensuring uninterrupted journeys for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Why Choose FuelNow?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-md rounded-xl">
            <h4 className="font-semibold text-lg mb-3">Fast Response</h4>
            <p className="text-gray-600">
              Quick connection to nearby petrol pumps and mechanics.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl">
            <h4 className="font-semibold text-lg mb-3">Safe & Secure</h4>
            <p className="text-gray-600">
              Secure booking process and verified service providers.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl">
            <h4 className="font-semibold text-lg mb-3">24/7 Support</h4>
            <p className="text-gray-600">
              Available anytime for emergency assistance.
            </p>
          </div>
        </div>
      </div>

      {/* ================= OUR VALUES ================= */}
      <div className="bg-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold">Reliability</h4>
            </div>

            <div>
              <h4 className="font-semibold">Safety</h4>
            </div>

            <div>
              <h4 className="font-semibold">Transparency</h4>
            </div>

            <div>
              <h4 className="font-semibold">Customer First</h4>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Emergency Assistance?</h2>

        <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Book Fuel Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
