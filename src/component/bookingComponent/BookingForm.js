import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../navbar/Navbar';


const BookingForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        turf: '',
        date: '',
        time: '',
        players: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = (e) => {


    //     e.preventDefault();
    //     // Log the data or perform an API call
    //     console.log('Form submitted:', formData);

    //     // navigate('/booking-list');
    //     navigate(); 

    // };

   const handleSubmit = (e) => {
    e.preventDefault();

    // Log and store form data
    console.log('Form submitted:', formData);
    
    // Store the form data in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(formData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
    // Redirect to the BookingList page
    navigate('/booklist');
};

    return (
        <>
        <Navbar/>
        <div style={styles.container}>
            <h2>Turf Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    style={styles.input}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    style={styles.input}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    style={styles.input}
                />
                <label htmlFor="turf">Select Turf Type</label>
                <select
                    id="turf"
                    name="turf"
                    value={formData.turf}
                    onChange={handleChange}
                    required
                    style={styles.input}
                >
                    <option value="">Select a turf</option>
                    <option value="5-a-side">5-a-side</option>
                    <option value="7-a-side">7-a-side</option>
                    <option value="11-a-side">11-a-side</option>
                </select>
                <label htmlFor="date">Booking Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <label htmlFor="time">Booking Time</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <label htmlFor="players">Number of Players</label>
                <input
                    type="number"
                    id="players"
                    name="players"
                    min="1"
                    max="22"
                    value={formData.players}
                    onChange={handleChange}
                    required
                    placeholder="Enter number of players"
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Book Turf
                </button>
            </form>
        </div>
        </>
    );
};

const styles = {
    container: {
        width: '50%',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '8px',
        marginTop: '30px',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '8px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '14px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default BookingForm;



// -----------------add-------------------










