

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./users.css";
import Navbar from '../navbar/Navbar';

const UserList = () => {
  const [users, setUsers] = useState([]);      // Users array
  const [error, setError] = useState(null);    // Error messages
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/auth/users'); // Updated endpoint
        console.log('API Response:', response.data); // Debug log

        // Check if response.data.data exists
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else if (Array.isArray(response.data)) {
          setUsers(response.data); // fallback if API returns array directly
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format from the server.');
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="user-list">
        <h1>User List</h1>

        {isLoading && <p>Loading users...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && users.length === 0 && <p>No users available.</p>}

        {!isLoading && users.length > 0 && (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserList;
