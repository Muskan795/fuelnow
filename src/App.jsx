import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Header/>} />
        <Route path="/home" element={<Home/>} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
