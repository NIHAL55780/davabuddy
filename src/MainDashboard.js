import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainDashboard.css";
import { FaHome, FaClipboardList, FaPills, FaCog } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [consumptionTime, setConsumptionTime] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [dosesPerDay, setDosesPerDay] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  const handleAddMedicine = (e) => {
    e.preventDefault();
    const newMedicine = {
      name: medicineName,
      time: consumptionTime,
      reminder: reminderTime,
      doses: dosesPerDay,
      stock: stock,
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setConsumptionTime("");
    setReminderTime("");
    setDosesPerDay("");
    setStock("");
  };

  return (
    <div className="dashboard-container">
     
      <div className="calendar">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className={`calendar-day ${index === 0 ? "selected" : ""}`}>
            <span>{day}</span>
            <span className="date">{2 + index}</span>
          </div>
        ))}
      </div>

      
      <div className="medicine-reminder">
        <img src={`${process.env.PUBLIC_URL}/calendar-icon.jpg`} alt="Calendar" className="calendar-icon" />
        <h2>Monitor your med schedule</h2>
        <p>View your daily schedule and mark your meds when taken</p>
      </div>

      
      <button className="add-med-button" onClick={() => navigate("/dashboard")}>
        Add a med
      </button>

      
      <div className="bottom-nav">
        <div className="nav-item active"><FaHome /><span>Home</span></div>
        <div className="nav-item"><FaClipboardList /><span>Updates</span></div>
        <div className="nav-item"><FaPills /><span>Medications</span></div>
        <div className="nav-item"><FaCog /><span>Manage</span></div>
      </div>
    </div>
  );
};

export default Dashboard;
