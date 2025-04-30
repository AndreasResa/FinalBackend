import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css"; // Impor file CSS untuk styling

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Validation Error: Email and password are required.");
      return;
    }

    setLoading(true);
    try {
      // Simulasi login API
      const token = await new Promise((resolve) =>
        setTimeout(() => resolve("fake-token"), 1000)
      );
      navigate("/stock", { state: { token } }); // Navigasi ke halaman stok dengan token
    } catch (error) {
      alert("Login Failed: " + (error.message || "An unexpected error occurred."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <label htmlFor="email" className="login-label">Email</label>
      <input
        id="email"
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="login-label">Password</label>
      <input
        id="password"
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginScreen;