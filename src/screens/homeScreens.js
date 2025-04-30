import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  useEffect(() => {
    if (!token) {
      // Jika tidak ada token, redirect ke halaman login
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Jangan render apa pun jika token tidak ada
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Stock Screen</h1>
      <p>Welcome! Your token is: {token}</p>
      <button
        className="logout-button"
        onClick={() => navigate("/")}
        aria-label="Logout"
      >
        Logout
      </button>
      <button
        className="stock-button"
        onClick={() => navigate("/stock-barang")}
        aria-label="Go to Stock Barang"
      >
        Go to Stock Barang
      </button>
    </div>
  );
};

export default HomeScreen;