import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">SaaS Auditor</h2>

        <ul className="menu">
          <li>Overview</li>
          <li>Subscriptions</li>
          <li>Reports</li>

          {/* Role-based rendering */}
          {user?.role === "admin" && <li>Admin Panel</li>}
        </ul>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Main Area */}
      <div className="main-content">

        {/* Top Navbar */}
        <div className="topbar">
          <h3>Dashboard</h3>
          <span className="role-badge">{user?.role}</span>
        </div>

        {/* Content Section */}
        <div className="content-area">
          <div className="card">
            <h3>Total Subscriptions</h3>
            <p>128</p>
          </div>

          <div className="card">
            <h3>Active Users</h3>
            <p>89</p>
          </div>

          <div className="card">
            <h3>Revenue This Month</h3>
            <p>$12,450</p>
          </div>

          <div className="card">
            <h3>Pending Audits</h3>
            <p>14</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;