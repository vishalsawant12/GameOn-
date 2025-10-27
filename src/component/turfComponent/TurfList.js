
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './TurfList.css';

const TurfList = () => {
  const [turfs, setTurfs] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchLocation = query.get('location') || "";

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const url = searchLocation
          ? `http://localhost:8081/api/turfs/search?location=${searchLocation}`
          : 'http://localhost:8081/api/turfs';

        const response = await axios.get(url);

        // Support both response.data.data or response.data directly
        if (Array.isArray(response.data.data)) {
          setTurfs(response.data.data);
        } else if (Array.isArray(response.data)) {
          setTurfs(response.data);
        } else {
          setError("Unexpected response format from the server.");
        }
      } catch (err) {
        setError("Failed to fetch turfs. Please try again later.");
      }
    };

    fetchTurfs();
  }, [searchLocation]);

  return (
    <>
      <Navbar />
      <div className="turf-list-container">
        <h2>Turfs in {searchLocation || "All Locations"}</h2>

        {error && <p className="error">{error}</p>}
        {!error && turfs.length === 0 && (
          <p>No turfs found. Please try with a different location.</p>
        )}

        <div className="turf-grid">
          {turfs.map((turf, index) => (
            <div className="turf-card" key={turf.id ?? `turf-${index}`}>
              <div className="turf-image-container">
                <img 
                  src={turf.imageUrl || "/images/default-image.jpg"} 
                  alt={turf.name} 
                />
              </div>
              <div className="turf-info">
                <h3>{turf.name}</h3>
                <p><strong>Location:</strong> {turf.location}</p>
                <p><strong>Capacity:</strong> {turf.capacity}</p>
                <p><strong>Charge:</strong> ₹{turf.chargePerHour}/hour</p>
              </div>
              <div className="turf-actions">
                <Link to="/bookingform" state={{ turf }} className="book-btn">
                  Book Now
                </Link>
                <Link to={`/update-turf/${turf.id}`} className="edit-btn">
                  Edit Turf
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TurfList;























