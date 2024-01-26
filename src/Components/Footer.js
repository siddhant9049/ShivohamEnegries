// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import your custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row">
          {/* <div className="footer-column">
            <h3>Company Name</h3>
            <p>Your Solar Company</p>
          </div> */}
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>Solar Rooftop Systems</li>
              <li>Solar Water Pumps</li>
              <li>All Electrical Works</li>
              {/* Add more products as needed */}
            </ul>
          </div>
          <div className="footer-column">
          <h3>Office Address</h3>
   <p>Kailash Nagar Nanded, Maharashtra</p>
           
          </div>      
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h3>Email Us</h3>
            <p>Shivohamenergies@gmail.com</p>
          </div>
          <div className="footer-column">
            <h3>Call Us</h3>
            <p> 8007775521</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
