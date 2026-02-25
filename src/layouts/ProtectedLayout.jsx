import { Outlet, Link } from "react-router-dom";
import "../styles/dashboard.css";

const ProtectedLayout = () => {
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

        <button className="logout-btn">Logout</button>
      </aside>

      <div className="main-section">

        <header className="topbar">
          <h3>Dashboard</h3>
          <span className="role-badge">USER</span>
        </header>

        <div className="content-area">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default ProtectedLayout;