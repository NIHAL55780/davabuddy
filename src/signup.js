import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("Signup successful!");
    navigate("/dashboard"); // Navigate after signup
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="DavaBuddy Logo" />
      </div>
      <h2 className="app-name">Sign Up</h2>

      <div className="input-container">
        <FaUser className="input-icon" />
        <input type="text" placeholder="Full Name" required />
      </div>

      <div className="input-container">
        <FaEnvelope className="input-icon" />
        <input type="email" placeholder="Email" required />
      </div>

      <div className="input-container">
        <FaLock className="input-icon" />
        <input type="password" placeholder="Password" required />
      </div>

      <button className="signup-button" onClick={handleSignup}>
        Sign Up →
      </button>

      <div className="links">
        <p>Already have an account? <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#007bff" }}><strong>Login</strong></span></p>
      </div>
    </div>
  );
};

export default Signup;
