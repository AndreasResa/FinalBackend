import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setValidationError("Email dan password wajib diisi");
      return false;
    }

    if (!emailRegex.test(email)) {
      setValidationError("Format email tidak valid");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const token = await new Promise((resolve) =>
        setTimeout(() => resolve("fake-token"), 1000)
      );

      // Simpan token sesuai pilihan remember me
      if (rememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }

      navigate("/stock", { state: { token } });
    } catch (error) {
      setValidationError(
        "Login gagal: " + (error.message || "Terjadi kesalahan")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">🔐 Login Sistem Inventori</h1>

      {validationError && (
        <div className="error-message">⚠ {validationError}</div>
      )}

      <div className="input-group">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          id="email"
          className="login-input"
          type="email"
          placeholder="contoh@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <div className="password-input-container">
          <input
            id="password"
            className="login-input"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
      </div>

      <div className="remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Ingat Saya</label>
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Masuk
        </button>
      )}
    </div>
  );
};

export default LoginScreen;
