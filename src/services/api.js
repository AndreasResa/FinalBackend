import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/auth"; // Ganti dengan URL back-end Anda

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data.token; // Mengembalikan token JWT
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

export const getStock = async (token) => {
  try {
    const response = await axios.get("http://localhost:3000/api/stock", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Mengembalikan data stok
  } catch (error) {
    throw new Error("Failed to fetch stock data");
  }
};