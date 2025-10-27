

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const images = [
    '/images/turf1.jpg',
    '/images/turf2.jpg',
    '/images/turf3.jpg',
    '/images/turf4.jpg',
    '/images/turf5.jpg',
    '/images/turf6.jpg',
    '/images/turf7.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);

  return () => clearInterval(intervalId);
}, [images.length]); // <-- added here


  // New featured sports array
  const sports = [
    { name: "", image: "/images/cricketLogo.jpg" },
    { name: "", image: "/images/footballLogo.jpg" },
    { name: "", image: "/images/badmintonLogo.jpg" },
    { name: "", image: "/images/tennisLogo.jpg" },
    { name: "", image: "/images/basketLogo.jpeg" }


  ];


  // ------------------ Customer Reviews Array ------------------
const reviews = [
  {
    name: "John Doe",
    comment: "Amazing turf booking experience! The facilities were top-notch."
  },
  {
    name: "Priya Sharma",
    comment: "Loved the variety of sports available. Booking was super easy."
  },
  {
    name: "Rohit Singh",
    comment: "Great service and very well-maintained turfs. Highly recommend!"
  },
  {
    name:"Harsh Sheth",
    comment: "Finally found a place where I can get quality sports gear and accessories without second-guessing my choices!"
  },
    {
    name:"Mohit Vasava",
    comment: "I used GameOn platform to book event, & had a great experience! From easy event discovery to smooth booking & excellent customer support from vishal"
  },

];


  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Game On</h1>
          <p>Your one-stop platform to book turfs and enjoy your favorite sports.</p>
          <Link to="/turfs" className="cta-button">Book a Turf</Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>Simple Steps to Enjoy Your Game</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Find a Turf</h3>
            <p>Browse available turfs by location or game type.</p>
          </div>
          <div className="step">
            <h3>2. Book a Slot</h3>
            <p>Select a convenient time slot that works for you.</p>
          </div>
          <div className="step">
            <h3>3. Play and Enjoy</h3>
            <p>Show up, play, and have a great time with friends!</p>
          </div>
        </div>
      </section>

      {/* Featured Sports Section */}
      <section className="featured-turfs">
        <h2>Choose Your Sport</h2>
        <div className="turfs-list">
          {sports.map((sport) => (
            <Link to="/turfs" key={sport.name} className="turf-card">
              <img src={sport.image} alt={sport.name} className="sport-image" />
              <h3>{sport.name}</h3>
            </Link>
          ))}
        </div>
      </section>

{/* customer-reviews */}
<section className="customer-reviews">
  <h2>What Our Customers Say</h2>
  <div className="reviews-container">
    <div className="reviews-list">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <h3>{review.name}</h3>
          <p className="review-role">{review.role}</p>
          <div className="review-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < (review.rating || 5) ? "star filled" : "star"}>&#9733;</span>
            ))}
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
     
    </div>
  </div>
</section>





      





    </div>
  );
};

export default HomePage;
