// import React, { useState, useEffect } from 'react';
// import Navbar from '../navbar/Navbar';

// const BookList = () => {
//     // Assuming booking data is stored in localStorage or some global state (useContext, Redux, etc.)
//     const [bookings, setBookings] = useState([]);

//     useEffect(() => {
//         // Load existing bookings (this can be replaced with actual API or state management)
//         const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
//         setBookings(storedBookings);
//     }, []);

//     return (
//         <>
//             <Navbar />
//             <div style={styles.container}>
//                 <h2>Booking List</h2>
//                 {bookings.length > 0 ? (
//                     <table style={styles.table}>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Turf</th>
//                                 <th>Date</th>
//                                 <th>Time</th>
//                                 <th>Players</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking, index) => (
//                                 <tr key={index}>
//                                     <td>{booking.name}</td>
//                                     <td>{booking.email}</td>
//                                     <td>{booking.phone}</td>
//                                     <td>{booking.turf}</td>
//                                     <td>{booking.date}</td>
//                                     <td>{booking.time}</td>
//                                     <td>{booking.players}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>No bookings available.</p>
//                 )}
//             </div>
//         </>
//     );
// };

// const styles = {
//     container: {
//         width: '80%',
//         margin: '0 auto',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: 'white',
//         borderRadius: '8px',
//         marginTop: '30px',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//     },
//     th: {
//         padding: '12px',
//         borderBottom: '2px solid #ddd',
//         textAlign: 'left',
//     },
//     td: {
//         padding: '12px',
//         borderBottom: '1px solid #ddd',
//     },
// };

// export default BookList;

// ------------bookinglist with delet   ----------------------
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';

const BookList = () => {
    const [bookings, setBookings] = useState([]);

    // Load bookings from localStorage when component mounts
    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setBookings(storedBookings);
    }, []);

    // Function to delete a booking
    const handleDelete = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index); // Remove the booking at the given index
        setBookings(updatedBookings);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings)); // Update localStorage
    };

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2>Booking List</h2>
                {bookings.length > 0 ? (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Turf</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Players</th>
                                <th>Actions</th> {/* Add a column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.turf}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.players}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(index)} 
                                            style={styles.deleteButton}
                                        >
                                            Delete
                                        </button>
                                    </td> {/* Add a delete button */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No bookings available.</p>
                )}
            </div>
        </>
    );
};

const styles = {
    container: {
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '8px',
        marginTop: '30px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        padding: '12px',
        borderBottom: '2px solid #ddd',
        textAlign: 'left',
    },
    td: {
        padding: '12px',
        borderBottom: '1px solid #ddd',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default BookList;
