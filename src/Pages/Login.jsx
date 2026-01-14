import React from "react";
import loginBg from "../assets/Images/LoginBg.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "70px",
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
          textShadow: "2px 2px 8px black",
        }}
      >
        Emergency Fuel Assistance Platform
      </h1>

      {/* LOGIN FORM */}
      <form
        style={{
          width: "320px",
          padding: "25px",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center",  fontSize: "24px",fontWeight: "600"}}>Login</h2>

        {/* EMAIL */}
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "500",
          }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* PASSWORD */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <label style={{ fontWeight: "500" }}>Password</label>

          <NavLink
            to="/forgot-password"
            style={{
              color: "#f97316",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Forgot password?
          </NavLink>
        </div>

        <input
          type="password"
          placeholder="Enter your password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

<button
  type="submit"
  style={{
    width: "100%",
    padding: "10px",
    backgroundColor: "#f97316", // orange-500
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "20px",
    cursor: "pointer",
  }}
>
  Login
</button>


        <div className="flex items-center gap-2 mt-3">
          <h2> If not registered ?</h2>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{
              color: "#f97316",
              fontSize: "18px",
              fontWeight: "500",
              
            }}
          >
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
