import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import './turfUpdate.css';

const TurfUpdate = () => {
  const { id } = useParams(); // Turf ID from URL
  const navigate = useNavigate();

  const [turf, setTurf] = useState({
    name: '',
    location: '',
    capacity: '',
    chargePerHour: '',
    imageUrl: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch turf data by ID
  useEffect(() => {
    const fetchTurf = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/turfs/id/${id}`);
        if (response.data && response.data.data) {
          setTurf(response.data.data); // Adjust based on responseWrapper structure
        } else {
          setError('Turf not found.');
        }
      } catch (err) {
        setError('Failed to fetch turf data.');
      }
    };

    if (id) fetchTurf();
    else setError('Invalid turf ID.');
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTurf((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.put(`http://localhost:8081/api/turfs/${id}`, turf);
      navigate('/turfs'); // Redirect after successful update
    } catch (err) {
      setError('Failed to update turf. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="turf-update-container">
        <h2>Update Turf</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="turf-update-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={turf.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={turf.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Capacity:
            <input
              type="number"
              name="capacity"
              value={turf.capacity}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Charge per Hour:
            <input
              type="number"
              name="chargePerHour"
              value={turf.chargePerHour}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={turf.imageUrl}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Turf'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TurfUpdate;
