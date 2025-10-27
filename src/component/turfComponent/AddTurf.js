
// // ------------orignalCode--------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddNewTurf.css';
// import Navbar from '../navbar/Navbar';

// const AddTurf = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     capacity: '',
//     chargePerHour: '',
//     available: true,
//     imageUrl: ''
//   });
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'available') {
//       setFormData({ ...formData, [name]: value === 'true' });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(null);
//     setError(null);

//     const capacity = Number(formData.capacity);
//     const chargePerHour = Number(formData.chargePerHour);

//     if (isNaN(capacity) || isNaN(chargePerHour) || capacity <= 0 || chargePerHour <= 0) {
//       setError('Capacity and Charge per Hour must be positive numbers.');
//       return;
//     }

//     const formDataWithNumbers = {
//       name: formData.name.trim(),
//       location: formData.location.trim(),
//       capacity,
//       chargePerHour,
//       available: formData.available,
//       imageUrl: formData.imageUrl.trim()
//     };

//     if (!formDataWithNumbers.name || !formDataWithNumbers.location || !formDataWithNumbers.imageUrl) {
//       setError('Turf Name, Location, and Image URL are required.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8081/api/turfs', formDataWithNumbers);

//       if (response.status === 201) {
//         const addedTurf = response.data;
//         setSuccess(`Turf "${addedTurf.name}" added successfully with ID ${addedTurf.id}`);
//         console.log('Turf added:', addedTurf);

//         setFormData({
//           name: '',
//           location: '',
//           capacity: '',
//           chargePerHour: '',
//           available: true,
//           imageUrl: ''
//         });
//       } else {
//         setError('Unexpected response from the server.');
//       }
//     } catch (err) {
//       console.error('Error adding turf:', err.response?.data || err.message);
//       if (err.response && err.response.data && err.response.data.errors) {
//         const backendErrors = err.response.data.errors;
//         setError(`Backend Error: ${backendErrors.join(', ')}`);
//       } else if (err.response && err.response.data) {
//         setError(err.response.data.message || 'Failed to add turf. Please try again.');
//       } else {
//         setError('Failed to add turf. Please try again.');
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="new-add-turf-container">
//         <h2>Add New Turf</h2>

//         {success && <p className="new-success-message">{success}</p>}
//         {error && <p className="new-error-message">{error}</p>}

//         <form onSubmit={handleSubmit} className="new-add-turf-form">
//           <div className="new-form-group">
//             <label htmlFor="name" className="new-label">Turf Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="new-input"
//               required
//             />
//           </div>

//           <div className="new-form-group">
//             <label htmlFor="location" className="new-label">Location</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="new-input"
//               required
//             />
//           </div>

//           <div className="new-form-group">
//             <label htmlFor="capacity" className="new-label">Capacity</label>
//             <input
//               type="number"
//               id="capacity"
//               name="capacity"
//               value={formData.capacity}
//               onChange={handleChange}
//               className="new-input"
//               required
//             />
//           </div>

//           <div className="new-form-group">
//             <label htmlFor="chargePerHour" className="new-label">Charge per Hour</label>
//             <input
//               type="number"
//               id="chargePerHour"
//               name="chargePerHour"
//               value={formData.chargePerHour}
//               onChange={handleChange}
//               className="new-input"
//               required
//             />
//           </div>

//           <div className="new-form-group">
//             <label htmlFor="available" className="new-label">Availability Status</label>
//             <select
//               id="available"
//               name="available"
//               value={formData.available}
//               onChange={handleChange}
//               className="new-input"
//               required
//             >
//               <option value="true">Available</option>
//               <option value="false">Not Available</option>
//             </select>
//           </div>

//           <div className="new-form-group">
//             <label htmlFor="imageUrl" className="new-label">Image URL</label>
//             <input
//               type="text"
//               id="imageUrl"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="new-input"
//               required
//             />
//           </div>

//           <button type="submit" className="new-submit-btn">Add Turf</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddTurf;




import React, { useState } from 'react';
import axios from 'axios';
import './AddNewTurf.css';
import Navbar from '../navbar/Navbar';

const AddTurf = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    capacity: '',
    chargePerHour: '',
    available: true,
    imageUrl: ''
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'available') {
      setFormData({ ...formData, [name]: value === 'true' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    // Convert numbers
    const capacity = Number(formData.capacity);
    const chargePerHour = Number(formData.chargePerHour);

    if (isNaN(capacity) || isNaN(chargePerHour) || capacity <= 0 || chargePerHour <= 0) {
      setError('Capacity and Charge per Hour must be positive numbers.');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      location: formData.location.trim(),
      capacity,
      chargePerHour,
      available: formData.available,
      imageUrl: formData.imageUrl.trim()
    };

    if (!payload.name || !payload.location || !payload.imageUrl) {
      setError('Turf Name, Location, and Image URL are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/turfs', payload);

      // Safely extract returned data
      const addedTurf = response.data?.turf || response.data;

      if (addedTurf) {
        const turfName = addedTurf.name || payload.name;
        const turfId = addedTurf.id || 'N/A';
        setSuccess(`Turf "${turfName}" added successfully with ID ${turfId}`);
        console.log('Turf added:', addedTurf);

        // Reset form
        setFormData({
          name: '',
          location: '',
          capacity: '',
          chargePerHour: '',
          available: true,
          imageUrl: ''
        });
      } else {
        setError('Turf added but response is missing ID/name.');
      }

    } catch (err) {
      console.error('Error adding turf:', err.response?.data || err.message);
      if (err.response?.data?.errors) {
        setError(`Backend Error: ${err.response.data.errors.join(', ')}`);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to add turf. Please try again.');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="new-add-turf-container">
        <h2>Add New Turf</h2>

        {success && <p className="new-success-message">{success}</p>}
        {error && <p className="new-error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="new-add-turf-form">
          <div className="new-form-group">
            <label htmlFor="name" className="new-label">Turf Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="new-input"
              required
            />
          </div>

          <div className="new-form-group">
            <label htmlFor="location" className="new-label">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="new-input"
              required
            />
          </div>

          <div className="new-form-group">
            <label htmlFor="capacity" className="new-label">Capacity</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="new-input"
              required
            />
          </div>

          <div className="new-form-group">
            <label htmlFor="chargePerHour" className="new-label">Charge per Hour</label>
            <input
              type="number"
              id="chargePerHour"
              name="chargePerHour"
              value={formData.chargePerHour}
              onChange={handleChange}
              className="new-input"
              required
            />
          </div>

          <div className="new-form-group">
            <label htmlFor="available" className="new-label">Availability Status</label>
            <select
              id="available"
              name="available"
              value={formData.available}
              onChange={handleChange}
              className="new-input"
              required
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          <div className="new-form-group">
            <label htmlFor="imageUrl" className="new-label">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="new-input"
              required
            />
          </div>

          <button type="submit" className="new-submit-btn">Add Turf</button>
        </form>
      </div>
    </>
  );
};

export default AddTurf;



