// import React, { useState } from 'react';
// import axios from 'axios';
// import './DeleteTurf.css';  // You can define styles here
// import Navbar from '../navbar/Navbar';

// const DeleteTurf = () => {
//   const [turfId, setTurfId] = useState('');
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);

//   // Handle input change for Turf ID
//   const handleChange = (e) => {
//     setTurfId(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(null);
//     setError(null);

//     if (!turfId.trim()) {
//       setError('Turf ID is required.');
//       return;
//     }

//     try {
//       const response = await axios.delete(`http://localhost:8081/api/turfs/${turfId}`);
      
//       // Check if the response status is 200 (success)
//       if (response.status === 200) {
//         setSuccess('Turf deleted successfully!');
//         setTurfId(''); // Reset input field
//       } else {
//         setError('Unexpected response from the server.');
//       }
//     } catch (err) {
//       // Handle error and display backend messages if available
//       console.error('Error deleting turf:', err.response?.data || err.message);
      
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message || 'Failed to delete turf. Please try again.');
//       } else {
//         setError('Failed to delete turf. Please try again.');
//       }
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="delete-turf-container">
//       <h2>Delete Turf</h2>
      
//       {success && <p className="success-message">{success}</p>}
//       {error && <p className="error-message">{error}</p>}

//       <form onSubmit={handleSubmit} className="delete-turf-form">
//         <div className="form-group">
//           <label htmlFor="turfId" className="label">Turf ID</label>
//           <input
//             type="text"
//             id="turfId"
//             name="turfId"
//             value={turfId}
//             onChange={handleChange}
//             className="input"
//             required
//           />
//         </div>

//         <button type="submit" className="submit-btn">Delete Turf</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default DeleteTurf;


// ---------------------------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DeleteTurf.css'; 
// import Navbar from '../navbar/Navbar';

// const DeleteTurf = () => {
//   const navigate = useNavigate();
//   const deleteTurfApi = "http://localhost:8081/api/turfs"; // Turf API endpoint

//   const [turfId, setTurfId] = useState(""); // Turf ID state
//   const [error, setError] = useState(null); // Error state
//   const [isLoading, setIsLoading] = useState(false); // Loading state

//   const handleInputChange = (event) => {
//     setTurfId(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     console.log(`Attempting to delete turf with ID: ${turfId}`);

//     try {
//       const response = await fetch(`${deleteTurfApi}/${turfId}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         const responseData = await response.json();
//         console.error('Backend Error Details:', responseData);
//         setError(responseData.message || 'Failed to delete turf.');
//         return;
//       }

//       console.log('Turf deleted successfully!');
//       setTurfId(""); // Reset input
//       navigate(''); // Navigate to turf list
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//       console.error('Error deleting turf:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="delete-user">
//         <div className="delete-user__header">
//           <p className="delete-user__title">Delete Turf</p>
//           {error && <p className="delete-user__error" style={{ color: 'red' }}>{error}</p>}
//         </div>
//         <form onSubmit={handleSubmit} className="delete-user__form">
//           <div className="form-group">
//             <label htmlFor="turfId" className="form-group__label">Turf ID</label>
//             <input
//               type="text"
//               className="form-group__input"
//               id="turfId"
//               name="turfId"
//               value={turfId}
//               onChange={handleInputChange}
//               placeholder="Enter turf ID to delete"
//               required
//             />
//           </div>

//           <button 
//             type="submit" 
//             className="delete-user__submit-btn" 
//             disabled={isLoading}>
//             {isLoading ? 'Deleting...' : 'Delete Turf'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default DeleteTurf;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeleteTurf.css'; 
import Navbar from '../navbar/Navbar';

const DeleteTurf = () => {
  const navigate = useNavigate();
  const deleteTurfApi = "http://localhost:8081/api/turfs";

  const [turfId, setTurfId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setTurfId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${deleteTurfApi}/${turfId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const responseData = await response.json();
        setError(responseData.message || 'Failed to delete turf.');
        return;
      }

      setSuccess('Turf deleted successfully!');
      console.log('Turf deleted successfully!');
      setTurfId('');

      // ✅ Auto-redirect after 1.5 seconds
      setTimeout(() => navigate('/turfs'), 1500);

    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-clear messages after 3 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <>
      <Navbar />
      <div className="delete-user">
        <div className="delete-user__header">
          <p className="delete-user__title">Delete Turf</p>
          {error && <p className="delete-user__error" style={{ color: 'red' }}>{error}</p>}
          {success && <p className="delete-user__success" style={{ color: 'green' }}>{success}</p>}
        </div>
        <form onSubmit={handleSubmit} className="delete-user__form">
          <div className="form-group">
            <label htmlFor="turfId" className="form-group__label">Turf ID</label>
            <input
              type="text"
              className="form-group__input"
              id="turfId"
              name="turfId"
              value={turfId}
              onChange={handleInputChange}
              placeholder="Enter turf ID to delete"
              required
            />
          </div>

          <button 
            type="submit" 
            className="delete-user__submit-btn" 
            disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete Turf'}
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteTurf;
