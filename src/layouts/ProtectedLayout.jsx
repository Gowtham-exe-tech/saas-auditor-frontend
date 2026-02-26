import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "../styles/dashboard.css";

const ProtectedLayout = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.sub); // adjust based on key from backend
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  return (
    <div className="layout-container">

      <aside className="sidebar">
        <h2 className="logo">SaaS Auditor</h2>

        <nav className="nav-links">
          <Link to="/dashboard">Overview</Link>
          <Link to="/subscriptions">Subscriptions</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/add-subscription">Add Subscription</Link>
        </nav>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </aside>

      <div className="main-section">

        <header className="topbar">
          <h3>Dashboard</h3>
          <span className="role-badge">
            {username || "User"}
          </span>
        </header>

        <div className="content-area">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default ProtectedLayout;