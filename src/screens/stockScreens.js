import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css"; // Impor file CSS untuk styling

const StockScreen = () => {
  const stockItems = [
    { id: 1, name: "Apple", quantity: 50 },
    { id: 2, name: "Banana", quantity: 30 },
    { id: 3, name: "Orange", quantity: 20 },
    { id: 4, name: "Grapes", quantity: 15 },
    { id: 5, name: "Mango", quantity: 10 },
  ];

  const navigate = useNavigate();

  return (
    <div className="stock-container">
      <h1 className="stock-title">Stock Barang</h1>
      <ul className="stock-list">
        {stockItems.map((item) => (
          <li key={item.id} className="stock-item">
            <span className="stock-name">{item.name}</span>
            <span className="stock-quantity">Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <button
        className="back-button"
        onClick={() => navigate("/")}
        aria-label="Back to Home"
      >
        Back to Home
      </button>
    </div>
  );
};

export default StockScreen;