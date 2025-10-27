import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Game On is your one-stop platform for booking turfs, managing users,
            and seamless sports experiences.
          </p>
        </div>

      
        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@gameon.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
           
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-facebook-f"></i>
           </a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-twitter"></i>
           </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-instagram"></i>
           </a>
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-linkedin"></i>
          </a>

          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Game On. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
