// src/Components/SolarWaterPump
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
const SolarWaterPump = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <h2>SolarWaterPump</h2>
      {/* Add content specific to the Solar System Rooftop page */}
      <Footer/>
    </div>
  );
};

export default SolarWaterPump;
