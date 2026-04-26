import React from "react";
import loginBg from "../assets/Images/LoginBg.png";
import logo from "../assets/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const Register = () => {

  const navigate = useNavigate();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  try {

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone
        }
      }
    });

    if (error) {
      alert(error.message);
      return;
    }

    // SUCCESS MESSAGE
    alert("Verification email sent! Please check your email.");
    navigate("/login");

  } catch (err) {

    console.error(err);
    alert("Something went wrong. Please try again.");

  }
};
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      <h1 className="absolute top-16 text-white text-3xl font-bold shadow-lg text-center px-4">
        Emergency Fuel Assistance Platform
      </h1>

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

        {/* FIRST NAME */}
        <div className="flex gap-3 mb-3">

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>

            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

        </div>

        {/* EMAIL + PHONE */}

        <div className="flex gap-3 mb-3">

          <div className="w-1/2">

            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />

          </div>

        </div>

        {/* PASSWORD */}

        <div className="flex gap-3 mb-4">

          <div className="w-1/2">

            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />

          </div>

        </div>

        {/* BUTTON */}

        <div className="flex justify-center">

          <button
            type="submit"
            className="w-1/2 bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>

        </div>

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