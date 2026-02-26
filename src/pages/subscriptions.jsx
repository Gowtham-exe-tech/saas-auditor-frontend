import { useState } from "react";
import styles from "../styles/subscriptions.module.css";

//temp data
const sampleData = [
  {
    id: 1,
    serviceName: "Netflix",
    cost: "$12.99",
    billingCycle: "Monthly",
    renewalDate: "2026-03-10",
  },
  {
    id: 2,
    serviceName: "Spotify",
    cost: "$9.99",
    billingCycle: "Monthly",
    renewalDate: "2026-01-10",
  },
  {
    id: 3,
    serviceName: "Adobe CC",
    cost: "$52.99",
    billingCycle: "Yearly",
    renewalDate: "2026-11-01",
  },
  {
    id: 4,
    serviceName: "Disney+",
    cost: "$7.99",
    billingCycle: "Monthly",
    renewalDate: "2025-12-01",
  },
];

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState(sampleData);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingSub, setEditingSub] = useState(null);

  const today = new Date();

  const getStatus = (renewalDate) => {
    const renewal = new Date(renewalDate);
    return renewal >= today ? "Active" : "Cancelled";
  };

  const handleDelete = (id) => {
    setSubscriptions((prev) => prev.filter((sub) => sub.id !== id));
  };

  const handleUpdate = (updatedSub) => {
    setSubscriptions((prev) =>
      prev.map((sub) =>
      sub.id === updatedSub.id ? updatedSub : sub
    )
    );

    setIsEditOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Subscriptions</h1>

      <div className={styles.card}>
        {subscriptions.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Cost</th>
                <th>Billing Cycle</th>
                <th>Renewal Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => {
                const status = getStatus(sub.renewalDate);
                return (
                  <tr key={sub.id}>
                    <td>{sub.serviceName}</td>
                    <td>{sub.cost}</td>
                    <td>{sub.billingCycle}</td>
                    <td>{sub.renewalDate}</td>
                    <td>
                      <span
                        className={`${styles.status} ${
                          status === "Active"
                            ? styles.active
                            : styles.cancelled
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(sub.id)}
                      >
                        Delete
                      </button>
                      <button
                          className={styles.updateBtn}
                          onClick={() => {
                          setEditingSub(sub);
                          setIsEditOpen(true);}}
                        >
                          Update
                      </button>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className={styles.noData}>No subscriptions available.</div>
        )}
      </div>
      {isEditOpen && editingSub && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalCard}>
              <h3>Update Subscription</h3>

              <input
                className={styles.modalInput}
                type="text"
                value={editingSub.serviceName}
                onChange={(e) =>
                  setEditingSub({ ...editingSub, serviceName: e.target.value })
                }
              />

              <input
                className={styles.modalInput}
                type="text"
                value={editingSub.cost}
                onChange={(e) =>
                  setEditingSub({ ...editingSub, cost: e.target.value })
                }
              />

              <input
                className={styles.modalInput}
                type="date"
                value={editingSub.renewalDate}
                onChange={(e) =>
                  setEditingSub({ ...editingSub, renewalDate: e.target.value })
                }
              />

              <div className={styles.modalActions}>
                <button
                  className={styles.saveBtn}
                  onClick={() => handleUpdate(editingSub)}
                >
                  Save
                </button>

                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsEditOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Subscriptions;