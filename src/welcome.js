import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="welcome-container">
      <h1>Welcome to</h1>
      <div>
        <img src="/image.png" alt="DavaBuddy Logo" className="logo" />
        

        <button className="google-signin" onClick={() => navigate("/login")}>
          <img src="/google.png" alt="Google Icon" className="google-icon" />
          Sign in with Google
        </button>
      </div>
    </div> // ✅ Fixed: Closing <div> for "welcome-container"
  );
};

export default Welcome;