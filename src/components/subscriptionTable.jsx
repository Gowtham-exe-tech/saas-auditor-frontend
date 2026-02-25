const SubscriptionTable = ({ subscriptions, onDelete }) => {
  if (subscriptions.length === 0) {
    return <p>No subscriptions found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Renewal Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {subscriptions.map((sub) => (
          <tr key={sub.id}>
            <td>{sub.name}</td>
            <td>₹{sub.price}</td>
            <td>{sub.renewalDate}</td>
            <td>
              <button onClick={() => onDelete(sub.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionTable;