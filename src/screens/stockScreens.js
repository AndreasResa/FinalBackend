import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/style.css"; // Impor file CSS untuk styling

const StockScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token || localStorage.getItem("token");

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!token) {
      console.warn("Token tidak tersedia, mengarahkan ke halaman login.");
      navigate("/login");
      return;
    }

    // Simulasi data dengan error handling
    try {
      setItems([
        {
          id: 1,
          name: "Laptop ASUS ROG",
          category: "Elektronik",
          stock: 10,
          price: 15000000,
        },
        {
          id: 2,
          name: "Kemeja Flanel",
          category: "Fashion",
          stock: 5,
          price: 75000,
        },
        {
          id: 3,
          name: "Mouse Wireless",
          category: "Aksesoris Komputer",
          stock: 25,
          price: 250000,
        },
        {
          id: 4,
          name: "Buku Catatan A5",
          category: "Alat Tulis",
          stock: 50,
          price: 35000,
        },
        {
          id: 5,
          name: "Tas Ransel Anti Air",
          category: "Fashion",
          stock: 15,
          price: 300000,
        },
        {
          id: 6,
          name: "Power Bank 20000mAh",
          category: "Elektronik",
          stock: 8,
          price: 180000,
        },
        {
          id: 7,
          name: "Pensil Warna 24 Set",
          category: "Alat Tulis",
          stock: 12,
          price: 120000,
        },
      ]);
    } catch (error) {
      console.error("Gagal memuat data:", error);
      navigate("/error");
    }
  }, [token, navigate]);

  return (
    <div className="stock-container">
      <div className="header-section">
        <h1 className="stock-title">Daftar Stok Barang</h1>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name || "-"}</td>
                <td>{item.category || "-"}</td>
                <td>{item.stock?.toString() || "0"}</td>
                <td>Rp {item.price?.toLocaleString() || "0"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Tidak ada data tersedia</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Tombol Kembali */}
      <button className="back-button" onClick={() => navigate("/")}>
        Kembali ke Halaman Home
      </button>
    </div>
  );
};

export default StockScreen;
