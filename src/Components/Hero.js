// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Import your custom styles
import HERO from './IMG/HERO3.jpg'
const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src={HERO} // Replace with the actual path to your image
        alt="Solar System"
        className="solar-image"
      />
      <div className="hero-text">
        <h1>SHIVOHAM <span id="energies">ENERGIES</span></h1>
        <p>WE  MAKE  A  DIFFERENCE</p>
      </div>
    </div>
  );
};

export default Hero;
