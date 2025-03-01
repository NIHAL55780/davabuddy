import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <button className="close-button">✖</button>
      <div className="logo-container">
        <img src="logo.png" alt="DavaBuddy Logo" />
      </div>
      <h2 className="app-name">DAVABUDDY</h2>
      <p className="tagline">Your Friendly Medicine Reminder</p>

      <div className="input-container">
        <FaEnvelope className="input-icon" />
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-container">
        <FaLock className="input-icon" />
        <input type="password" placeholder="Password" />
      </div>

      <button className="login-button">
        Login →
      </button>

      <div className="links">
        <a href="#">Forgot Password?</a>
        <br />
        <a href="#" className="signup">Don't have an account? <strong>Sign Up</strong></a>
      </div>
    </div>
  );
};

export default Login;
