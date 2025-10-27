// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./BookingList.css"; // Create this file for custom styling
// import Navbar from '../navbar/Navbar';

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]); // State to store list of bookings
//   const [error, setError] = useState(null); // State for error messages

//   useEffect(() => {
//     axios
//       .get('http://localhost:8081/api/bookings') // API endpoint for bookings
//       .then((response) => {
//         console.log('API Response:', response.data); // Debugging log
//         if (Array.isArray(response.data.data)) {
//           setBookings(response.data.data); // Access the array inside the `data` property
//         } else {
//           console.error('Unexpected response format:', response.data);
//           setError('Unexpected response format from the server.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching bookings:', error); // Log errors
//         setError('Failed to fetch bookings. Please try again later.');
//       });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="booking-list-container">
//         <h1>Booking List</h1>

//         {/* Display error message if there is an error fetching the bookings */}
//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         {/* Display a message when there are no bookings available */}
//         {!error && bookings.length === 0 && <p>No bookings available.</p>}

//         {/* Render the table if bookings are available */}
//         {!error && bookings.length > 0 && (
//           <table className="booking-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>User ID</th>
//                 <th>Turf ID</th>
//                 <th>Start Time</th>
//                 <th>End Time</th>
//                 <th>Total Charge</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking.id}>
//                   <td>{booking.id}</td>
//                   <td>{booking.user?.id || "N/A"}</td>
//                   <td>{booking.turf?.id || "N/A"}</td>
//                   <td>{new Date(booking.startTime).toLocaleString()}</td>
//                   <td>{new Date(booking.endTime).toLocaleString()}</td>
//                   <td>{booking.totalCharge}</td>
//                   <td>{booking.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

// export default BookingList;
