// src/pages/ResidentialPage.js
import React from 'react';
import './ResidentialPage.css';
import Navbar from '../Navbar';
import Hero from '../Hero';
import project1 from '../Projects/1.jpg'; // Replace with the actual image paths
import project2 from '../Projects/2.jpg'; // Replace with the actual image paths
import project3 from '../Projects/3.jpg'; // Replace with the actual image paths
import project4 from '../Projects/4.jpg'; // Replace with the actual image paths
import project5 from '../Projects/5.jpg'; // Replace with the actual image paths
import project6 from '../Projects/6.jpg'; // Replace with the actual image paths
import project7 from '../Projects/7.jpg'; // Replace with the actual image paths
import project8 from '../Projects/8.jpg'; // Replace with the actual image paths
import project9 from '../Projects/9.jpg'; // Replace with the actual image paths



const ResidentialPage = () => {
  return (
    <div className="residential-page">
      <Navbar />
      <Hero  />
      <div className="content-container">
        <h2>Welcome to Residential Solar Solutions</h2>
        <p>
          At Residential Solar Solutions, we are committed to providing sustainable and cost-effective solar energy solutions for your home.
          Switching to solar power not only reduces your electricity bills but also contributes to a cleaner and greener environment.
        </p>
        <p className="sub-heading">Our Residential Solar Solutions include:</p>
        <ul className="solution-list">
          <li>Solar Rooftop Systems</li>
          <li>Solar Water Heating Systems</li>
          <li>Energy-Efficient Lighting Solutions</li>
          {/* Add more residential solutions as needed */}
        </ul>
        <p className="sub-heading">Key benefits of choosing our residential solar solutions:</p>
        <ul className="benefits-list">
          <li>Significant cost savings on electricity bills</li>
          <li>Environmentally friendly and sustainable energy source</li>
          <li>Increased property value</li>
          <li>Long-term reliability with 25 years of guaranteed electricity generation</li>
        </ul>
        <p>
          Explore our Residential Projects to see how we've transformed homes with clean and efficient solar energy.
        </p>
        {/* You can add images, testimonials, or any other relevant content */}
      </div>
      <div className="total-suites-section">
          <h3>Total Suites Completed</h3>
          <p>We take pride in having completed a total of X residential solar suites.</p>
          {/* List your completed suites */}
          <ul className="completed-suites-list">
            <li>Suite 1</li>
            <li>Suite 2</li>
            <li>Suite 3</li>
            {/* Add more suites as needed */}
          </ul>
        </div>
        <div className="project-photos">
          <h3>Our Residential Projects</h3>
          <div className="project-gallery">
          <img src={project9} alt="Project 2" /> 
           
            <img src={project2} alt="Project 2" />
            <img src={project3} alt="Project 1" />
            <img src={project7} alt="Project 1" />
            <img src={project4} alt="Project 2" />
    
            <img src={project5} alt="Project 1" />
            <img src={project6} alt="Project 2" />
        
            <img src={project8} alt="Project 2" />  
            <img src={project1} alt="Project 1" />
          
            {/* Add more project images as needed */}
          </div>
        </div>
      
    </div>
  );
};

export default ResidentialPage;
