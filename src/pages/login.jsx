import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authService"; 
import "../styles/auth.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // CALL BACKEND
      const data = await loginUser(form);

      // EXPECTING THIS RESPONSE FORMAT:
      // {
      //   token: "...",
      //   role: "USER",
      //   username: "gowtham"
      // }

      login(data.token, data.role, data.username);

      navigate("/dashboard");

    } catch (error) {
      console.error("Login failed:", error);

      // Optional 
      alert(
        error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">

    
      <div className="grid-lines"></div>


      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;