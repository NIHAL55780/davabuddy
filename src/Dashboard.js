import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

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

  const scheduleNotification = (medName, time) => {
    if (Notification.permission === "granted") {
      const reminderTime = new Date(time);
      reminderTime.setMinutes(reminderTime.getMinutes() - reminderTime);
      const now = new Date();
      const delay = reminderTime.getTime() - now.getTime();

      if (delay > 0) {
        setTimeout(() => {
          new Notification("Medicine Reminder", {
            body: `It's time to take your medicine: ${medName}`,
            icon: `${process.env.PUBLIC_URL}/pill.png`,
          });
        }, delay);
      }
    }
  };

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

    // Schedule Reminder
    scheduleNotification(medicineName, consumptionTime);

    setMedicineName("");
    setConsumptionTime("");
    setReminderTime("");
    setDosesPerDay("");
    setStock("");
  };

  return (
    <div className="dashboard-container">
      <h2>Medicine Reminder Dashboard</h2>

      <form onSubmit={handleAddMedicine} className="medicine-form">
        <input type="text" placeholder="Medicine Name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} required />
        <input type="time" value={consumptionTime} onChange={(e) => setConsumptionTime(e.target.value)} required />
        <input type="number" placeholder="Reminder (Minutes Before)" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} required />
        <input type="number" placeholder="Doses Per Day" value={dosesPerDay} onChange={(e) => setDosesPerDay(e.target.value)} required />
        <input type="number" placeholder="Stock (Pills Left)" value={stock} onChange={(e) => setStock(e.target.value)} required />
        <button type="submit">Add Medicine</button>
      </form>

      {medicines.length > 0 && (
        <table className="medicine-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Time</th>
              <th>Reminder</th>
              <th>Doses Per Day</th>
              <th>Stock Left</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med, index) => (
              <tr key={index} style={{ backgroundColor: med.stock < 5 ? "#ffcccc" : "transparent" }}>
                <td>{med.name}</td>
                <td>{med.time}</td>
                <td>{med.reminder} min</td>
                <td>{med.doses}</td>
                <td>{med.stock} {med.stock < 5 && "⚠️ Low Stock"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className="logout-button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
