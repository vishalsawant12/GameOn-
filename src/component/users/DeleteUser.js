
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Delete.css'; 
import Navbar from '../navbar/Navbar';

const DeleteUser = () => {
  const navigate = useNavigate();
  const deleteUserApi = "http://localhost:8081/api/auth/users"; // Backend API

  const [userId, setUserId] = useState("");       // User ID to delete
  const [message, setMessage] = useState(null);   // Success or error message
  const [isError, setIsError] = useState(false);  // Error flag
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
    setMessage(null); // Clear previous messages
    setIsError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setIsError(false);

    try {
      const response = await fetch(`${deleteUserApi}/${userId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      const responseData = await response.json(); // Always parse JSON

      if (!response.ok) {
        setMessage(responseData.message || 'Failed to delete user.');
        setIsError(true);
        return;
      }

      setMessage(responseData.message || 'User deleted successfully!');
      setIsError(false);
      setUserId(""); // Reset form
      // Optional: redirect after deletion
      setTimeout(() => navigate('/user-list'), 1500);
    } catch (err) {
      console.error('Error deleting user:', err);
      setMessage('An error occurred. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="delete-user">
        <div className="delete-user__header">
          <p className="delete-user__title">Delete User</p>
          {message && (
            <p 
              className={`delete-user__message ${isError ? 'error' : 'success'}`}
              style={{ color: isError ? 'red' : 'green' }}
            >
              {message}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="delete-user__form">
          <div className="form-group">
            <label htmlFor="userId" className="form-group__label">User ID</label>
            <input
              type="text"
              className="form-group__input"
              id="userId"
              name="userId"
              value={userId}
              onChange={handleInputChange}
              placeholder="Enter user ID to delete"
              required
            />
          </div>

          <button 
            type="submit" 
            className="delete-user__submit-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete User'}
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteUser;
