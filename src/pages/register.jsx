import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registered user:", form);//to check register

    // Temporary fake register
    navigate("/");
  };

  return (
    <div className="auth-container">


     <div className="grid-lines"></div>


     <div className="orb orb1"></div>
     <div className="orb orb2"></div>
     <div className="orb orb3"></div>
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="auth-input"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/" className="auth-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;