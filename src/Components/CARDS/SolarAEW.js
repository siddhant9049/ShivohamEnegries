// src/Components/SolarSystemPage.js
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
const AEW = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <h2>All ELECTRIC WORKS</h2>
      {/* Add content specific to the Solar System Rooftop page */}
      <Footer/>
    </div>
  );
};

export default AEW;
