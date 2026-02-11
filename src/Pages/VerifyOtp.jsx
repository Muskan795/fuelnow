import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const navigate = useNavigate();

  const verifyOtp = () => {
    const savedOtp = localStorage.getItem("otp");

    if (enteredOtp === String(savedOtp)) {
      alert("OTP Verified & Registered Successfully");
      localStorage.removeItem("otp");
      navigate("/login");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
        className="border px-4 py-2 mb-4 rounded"
      />

      <button
        onClick={verifyOtp}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default VerifyOtp;
