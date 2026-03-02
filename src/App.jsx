import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

import { Home } from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import { Header } from "./Components/Header";
import VerifyOtp from "./Pages/VerifyOtp";
import Service from "./Pages/Service";
import FuelNow from "./Pages/FuelNow";
import CartPage from "./Pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
       
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/fuel-now" element={<FuelNow />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
