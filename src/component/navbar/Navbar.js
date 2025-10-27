// // import React  from 'react';
// // import './navbar.css';
// // import { Link } from 'react-router-dom';

// // export default function Navbar({ onSearch }) {
// // // ------------search--------------


// // // --------------------------------

// //     return (

// //         <nav className="navbar">
// //             <div className="navbar-logo">Game On</div>  
// //             <div className="navbar-links">




// //                 <div className="dropdown">
// //                     <Link to=""> User</Link>
// //                     <div className="dropdown-content">
// //                     <Link to="/user-list"> User List</Link>
// //                         <Link to="/create-user">CreateUser</Link>  
// //                         <Link to="/delete-user">DeleteUser</Link>   
// //                     </div>

// //                 </div>


// //                 <div className="dropdown">
// //                         <Link to=""> Turfs</Link>
// //                     <div className="dropdown-content">
// //                         <Link to="/turfs">All Turfs</Link> 
// //                         <Link to="/add-turf">AddTurf</Link>  
// //                         <Link to="/delete-turf">DeleteTurf</Link>

// //                     </div>

// //                 </div>

// //                 <div className="dropdown">

// //                     <Link to="">Book</Link>
// //                     <div className="dropdown-content">
// //                          <Link to="/booking">Book Now</Link>
// //                         <Link to="/booking-list">BookingList</Link>
// //                         {/* <Link to="/outdoor">Outdoor</Link>  */}
// //                     </div>
// //                 </div>

// //                 <Link to="">Sign Up</Link> 
// //                 <Link to="">Sign In</Link>

// //             </div>
// //         </nav>
// //     );
// // }

// // --------------------------
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar2.css';


export default function Navbar() {
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchLocation.trim() !== "") {
            navigate(`/turfs?location=${searchLocation}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Game On</div>

            <form className="navbar-search" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Search location..."
                />
                <button type="submit">Search</button>
            </form>

            {/* <div className="dropdown">
                <Link to="/">Home</Link>

            </div> */}


            <div className="navbar-links">

                <div className="dropdown">
                    <Link to="/">Home</Link>

                </div>
                <div className="dropdown">
                    <Link to="/">User</Link>
                    <div className="dropdown-content">
                        <Link to="/user-list">UserList</Link>
                        <Link to="/create-user">CreateUser</Link>
                        { <Link to="/delete-user/:id">DeleteUser</Link>  }
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/">Turfs</Link>
                    <div className="dropdown-content">
                        <Link to="/turfs">AllTurfs</Link>
                        <Link to="/add-turf">AddTurf</Link> 
                        {/* <Link to="/update-turf/:id">UpdateTurf</Link> */}
                        <Link to="/delete-turf/:id">DeleteTurf</Link>  
                        
                    </div>
                </div>

                <div className="dropdown">
                    <Link to="/">Book</Link>
                    <div className="dropdown-content">
                        <Link to="/bookingform">BookNow</Link>
                        <Link to="/bookingform">BookingForm</Link>
                        <Link to="/booklist">BookingList</Link>
                      

                        
                    </div>
                </div>

                <Link to="/register">Register</Link> 
                <Link to="/login">LogIn</Link>
            </div>
        </nav>
    );
}

