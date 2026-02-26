import { useEffect, useState } from "react";
import { getSubscriptions, getTotalExpense } from "../api/subscriptionService";

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const subsRes = await getSubscriptions();
      const totalRes = await getTotalExpense();

      setSubscriptions(subsRes.data);
      setTotal(totalRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-page">
      <h1 className="page-title">OVERVIEW</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Monthly Expense</p>
          <h2>₹{total}</h2>
        </div>

        <div className="stat-card">
          <p>Active Subscriptions</p>
          <h2>{subscriptions.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;