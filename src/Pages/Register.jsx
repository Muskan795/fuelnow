import React from "react";
import loginBg from "../assets/Images/LoginBg.png";
import logo from "../assets/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // OTP generator
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const otp = generateOTP();
    localStorage.setItem("otp", String(otp));

    alert("Demo OTP: " + otp);
    
    navigate("/verify-otp");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* TOP HEADING */}
      <h1 className="absolute top-16 text-white text-3xl font-bold shadow-lg text-center px-4">
        Emergency Fuel Assistance Platform
      </h1>

      {/* REGISTER CARD */}
      <form
        onSubmit={handleRegister}
        className="w-[60%] max-w-3xl bg-white/95 p-8 rounded-xl mt-20 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-5">
          <img
            src={logo}
            alt="FuelNow Logo"
            className="w-20 h-20 mb-2 object-contain"
          />
          <h2 className="text-center text-2xl font-bold">Register</h2>
        </div>

        {/* ROW 1: FIRST + LAST NAME */}
        <div className="flex gap-3 mb-3">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* ROW 2: EMAIL + PHONE */}
        <div className="flex gap-3 mb-3">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* ROW 3: PASSWORD + CONFIRM PASSWORD */}
        <div className="flex gap-3 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm"
              autoComplete="new-password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* REGISTER BUTTON */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>
        </div>

        {/* LOGIN LINK */}
        <div className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="text-orange-500 font-medium">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
