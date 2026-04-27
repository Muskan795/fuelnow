import React, { useState } from "react";
import loginBg from "../assets/Images/LoginBg.png";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful");
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "320px",
          padding: "25px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Login
        </button>

        <p className="text-center mt-3">
          No account?{" "}
          <NavLink to="/register" className="text-orange-500">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;