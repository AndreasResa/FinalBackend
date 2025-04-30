import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StockScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  if (!token) {
    // Jika tidak ada token, redirect ke halaman login
    navigate("/");
    return null;
  }

  return (
    <div className="stock-container">
      <h1 className="stock-title">Stock Screen</h1>
      <p>Welcome! Your token is: {token}</p>
      <button className="logout-button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default StockScreen;