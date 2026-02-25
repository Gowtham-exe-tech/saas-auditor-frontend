import { useState } from "react";

const SubscriptionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    renewalDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) return;

    onAdd(form);

    setForm({
      name: "",
      price: "",
      renewalDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        placeholder="Subscription Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        type="date"
        name="renewalDate"
        value={form.renewalDate}
        onChange={handleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default SubscriptionForm;