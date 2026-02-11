import React from "react";
import loginBg from "../assets/Images/LoginBg.png";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* TOP HEADING */}
      <h1 className="absolute top-16 text-white text-3xl font-bold shadow-lg text-center px-4">
        Emergency Fuel Assistance Platform
      </h1>

      {/* FORGOT PASSWORD CARD */}
      <form className="w-[40%] max-w-md bg-white/95 p-8 rounded-xl mt-20 shadow-2xl">
        <h2 className="text-center text-2xl font-bold mb-2 text-orange-600">
          Forgot Password
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your registered email address.  
          We will send you a password reset link.
        </p>

        {/* EMAIL */}
        <label className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border rounded-md 
                     focus:outline-none focus:ring-2 "
          required
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md 
                     font-semibold hover:bg-orange-600 transition"
        >
          Send Reset Link
        </button>

        {/* BACK TO LOGIN */}
        <div className="text-center mt-4 text-sm">
          Remember your password?{" "}
          <NavLink
            to="/login"
            className="text-orange-600 font-medium"
          >
            Back to Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
