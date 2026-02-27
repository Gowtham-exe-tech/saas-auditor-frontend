import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "../styles/dashboard.css";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
            {user?.username || "User"}
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