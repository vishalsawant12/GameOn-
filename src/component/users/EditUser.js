import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Create.css';
import Navbar from '../navbar/Navbar';

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Get the user ID from the URL
  const editUserApi = `http://localhost:8081/api/users/${id}`;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data for editing if ID exists
  useEffect(() => {
    if (id) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(editUserApi);
          if (response.ok) {
            const data = await response.json();
            setUser({
              username: data.username,
              email: data.email,
              password: "", // Password will remain empty for editing
              isAdmin: data.isAdmin,
            });
          } else {
            setError("Failed to fetch user data.");
          }
        } catch (err) {
          setError("An error occurred while fetching user data.");
        }
      };
      fetchUserData();
    }
  }, [id]);

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
    setIsLoading(true);

    try {
      const response = await fetch(editUserApi, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const responseData = await response.json();
        setError(responseData.message || 'Failed to update user');
        return;
      }

      console.log('User updated successfully!');
      setUser({ username: "", email: "", password: "", isAdmin: false });
      navigate('/user-list');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error updating user:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-user">
        <div className="create-user__header">
          <p className="create-user__title">Edit User</p>
          {error && <p className="create-user__error">{error}</p>}
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
            />
          </div>

          <button
            type="submit"
            className="create-user__submit-btn"
            disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Update'}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
