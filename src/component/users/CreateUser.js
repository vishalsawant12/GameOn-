

// ----------orignalcode-------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import Navbar from '../navbar/Navbar';

const CreateUser = () => {
  const navigate = useNavigate();
  const createUserApi = "http://localhost:8081/api/auth/register"; 
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch(createUserApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show backend error message
        setError(data.message || 'Failed to create user');
      } else {
        setSuccess(data.message || 'User created successfully');
        setUser({ username: "", email: "", password: "", isAdmin: false });

        // Optional: navigate after delay
        setTimeout(() => {
          navigate('/user-list');
        }, 1000);
      }
    } catch (err) {
      console.error("Error creating user:", err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-user">
        <div className="create-user__header">
          <p className="create-user__title">Create User</p>
          {error && <p className="create-user__error">{error}</p>}
          {success && <p className="create-user__success">{success}</p>}
        </div>

        <form onSubmit={handleSubmit} className="create-user__form">
          <div className="form-group">
            <label htmlFor="username" className="form-group__label">Name</label>
            <input
              type="text"
              className="form-group__input"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-group__label">Email</label>
            <input
              type="email"
              className="form-group__input"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-group__label">Password</label>
            <input
              type="password"
              className="form-group__input"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group__checkbox">
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={user.isAdmin}
              onChange={handleInputChange}
            />
            <label htmlFor="isAdmin">Is Admin</label>
          </div>

          <button 
            type="submit" 
            className="create-user__submit-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;







