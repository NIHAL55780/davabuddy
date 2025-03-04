import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./Login";
import Signup from "./signup";
import Dashboard from "./Dashboard";
import MainDashboard from "./MainDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main_dashboard" element={<MainDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
