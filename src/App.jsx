import React, { useState } from "react"; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

import { Home } from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import { Header } from "./Components/Header";
import Service from "./Pages/Service";
import FuelNow from "./Pages/FuelNow";
import CartPage from "./Pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]); //  GLOBAL CART

  return (
    <BrowserRouter>
      <Header cart={cart} /> {/*  pass cart to header */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />

        {/* pass cart + setCart */}
        <Route
          path="/fuel-now"
          element={<FuelNow cart={cart} setCart={setCart} />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* pass cart */}
        <Route
          path="/Cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
