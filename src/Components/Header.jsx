import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export const Header = () => {
  return (
    <div>
      <div className="flex gap-10 justify-evenly items-center px-6 py-2 border border-gray-300">
        <img
          src={logo}
          alt="FuelNow Logo"
          className="w-35 h-30  object-contain "
        />

        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black", // orange-500
            fontWeight: isActive ? "600" : "400",
          })}
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black", // orange-500
            fontWeight: isActive ? "600" : "400",
          })}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#f97316" : "black", // orange-500
            fontWeight: isActive ? "600" : "400",
          })}
        >
          Contact Us
        </NavLink>

        <div className=" flex gap-2">
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "#f97316" : "black", // orange-500
              fontWeight: isActive ? "600" : "400",
            })}
          >
            LOGIN
          </NavLink>
          /
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "#f97316" : "black", // orange-500
              fontWeight: isActive ? "600" : "400",
            })}
          >
            REGISTER
          </NavLink>

           
        </div>
        <NavLink
            to="/Cart"
            style={({ isActive }) => ({
              color: isActive ? "#f97316" : "black", // orange-500
              fontWeight: isActive ? "600" : "400",
            })}
          >
             MY CART
          </NavLink>
          
      </div>
    </div>
  );
};
