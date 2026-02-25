import { useState } from "react";
import styles from "../styles/addsubscription.module.css";

const AddSubscription = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    cost: "",
    billingCycle: "MONTHLY",
    startDate: "",
    renewalDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscription Data:", formData);

    if (onAdd) onAdd(formData);

    // Reset form
    setFormData({
      serviceName: "",
      cost: "",
      billingCycle: "MONTHLY",
      startDate: "",
      renewalDate: "",
    });

    alert("Subscription added (frontend only)");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Add New Subscription</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              required
              placeholder="Enter subscription name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Cost</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
              placeholder="Enter cost"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Billing Cycle</label>
            <select
              name="billingCycle"
              value={formData.billingCycle}
              onChange={handleChange}
            >
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Renewal Date</label>
            <input
              type="date"
              name="renewalDate"
              value={formData.renewalDate}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add Subscription
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubscription;