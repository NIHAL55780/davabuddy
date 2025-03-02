import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login successful!");
    navigate("/main_dashboard"); // Navigate after login
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="{/halflogo.png}" alt="DavaBuddy Logo" />
      </div>
      <h2 className="app-name">DAVABUDDY</h2>
      <p className="tagline">Your Friendly Medicine Reminder</p>

      <div className="input-container">
        <FaEnvelope className="input-icon" />
        <input type="email" placeholder="Email" required />
      </div>

      <div className="input-container">
        <FaLock className="input-icon" />
        <input type="password" placeholder="Password" required />
      </div>

      <button className="login-button" onClick={handleLogin}>
        Login →
      </button>

      <div className="links">
        <a href="#">Forgot Password?</a>
        <br />
        <span onClick={() => navigate("/signup")} className="signup" style={{ cursor: "pointer", color: "#007bff" }}>
          Don't have an account? <strong>Sign Up</strong>
        </span>
      </div>
    </div>
  );
};

export default Login;