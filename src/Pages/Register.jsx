import React, { useState } from "react";
import loginBg from "../assets/Images/LoginBg.png";
import logo from "../assets/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ VALIDATION
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
          },
        },
      });

      if (error) {
        console.error("Supabase Error:", error);
        alert(error.message);
        return;
      }

      // SUCCESS
      alert("Registration successful!(Check Mail)");
      navigate("/login");

    } catch (err) {
      console.error("Unexpected Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <h1 className="absolute top-16 text-white text-3xl font-bold text-center">
        Emergency Fuel Assistance Platform
      </h1>

      <form
        onSubmit={handleRegister}
        className="w-[60%] max-w-3xl bg-white/95 p-8 rounded-xl mt-20 shadow-2xl"
      >
        {/* HEADER */}
        <div className="flex flex-col items-center mb-5">
          <img src={logo} alt="FuelNow Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-2xl font-bold">Register</h2>
        </div>

        {/* NAME */}
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-md"
          />
        </div>

        {/* EMAIL + PHONE */}
        <div className="flex gap-3 mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-md"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex gap-3 mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className="w-1/2 px-3 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            className="w-1/2 px-3 py-2 border rounded-md"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600"
        >
          Register
        </button>

        {/* LOGIN LINK */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="text-orange-500 font-medium">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;