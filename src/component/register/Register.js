
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false, 
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    try {
      const res = await axios.post(
        "http://localhost:8081/api/auth/register",
        formData
      );
      setMessage(res.data.message || "User registered successfully ✅");

      // Redirect to login page after success
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const backendMessage =
        err.response?.data?.message || "Error registering user ❌";
      setMessage(backendMessage);
      setError(true);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {message && (
          <div className={`message ${error ? "error" : "success"}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <label>
            {/* Admin: */}
            {/* <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            /> */}
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
