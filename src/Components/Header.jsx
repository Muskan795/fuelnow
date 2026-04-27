import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { supabase } from "../lib/supabase";

export const Header = ({ cart }) => {
  const [user, setUser] = useState(null);

  // GET USER + LISTEN LOGIN/LOGOUT
  useEffect(() => {
    // get current user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged out");
  };

  return (
    <div>
      <div className="flex gap-10 justify-evenly items-center px-6 py-2 border border-gray-300">
        <img
          src={logo}
          alt="FuelNow Logo"
          className="w-35 h-30 object-contain"
        />

        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          Contact Us
        </NavLink>

        {/* 🔥 AUTH SECTION */}
        <div className="flex gap-2 items-center">
          {user ? (
            <>
              {/* USER NAME */}
              <span className="text-orange-500 text-sm">
                {user?.user_metadata?.first_name || user?.email}
              </span>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#f97316" : "black",
                  fontWeight: isActive ? "600" : "400",
                })}
              >
                LOGIN
              </NavLink>
              /
              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  color: isActive ? "#f97316" : "black",
                  fontWeight: isActive ? "600" : "400",
                })}
              >
                REGISTER
              </NavLink>
            </>
          )}
        </div>

        <NavLink
          to="/Cart"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          MY CART
        </NavLink>
      </div>
    </div>
  );
};
