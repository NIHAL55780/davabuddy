import React from "react";
import "./Welcome.css"; 
import logo from "./logo.svg"; 

const Welcome = ({ onGoogleSignIn }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome to</h1>
      <img src={logo} alt="DavaBuddy Logo" className="logo" />
      <h2 className="app-name">DAVABUDDY</h2>
      <p>Your Friendly Medicine Reminder</p>

      <button className="google-signin" onClick={onGoogleSignIn}>
        <img src="/google-icon.png" alt="Google" className="google-icon" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Welcome;
