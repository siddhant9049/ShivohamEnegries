// src/Components/SolarSystemPage.js
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './SolarSystemPage.css'; // Import the CSS file
import Hero from '../Hero';

const SolarSystemPage = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
       

        <ul className="step-list">
          <li className="step">
            <div className="step-number">1</div>
            <h3>Designing and Marking</h3>
            <p>The first step is designing and marking on the rooftop.</p>
          </li>

          <li className="step">
            <div className="step-number">2</div>
            <h3>Cabling</h3>
            <p>The solar modules are connected in series with DC cables to the inverter, and with AC cables from the inverter to the evacuation point (customer’s LT panel).</p>
          </li>

          <li className="step">
            <div className="step-number">3</div>
            <h3>Civil Work and Curing</h3>
            <p>Engineers build columns to hold the module mounting structures. As you can see in the video, there is zero drilling, anchoring, or puncturing on the rooftop. The civil work took around 5-6 days to be completed.</p>
          </li>

          <li className="step">
            <div className="step-number">4</div>
            <h3>Inverter Connection and Grid Synchronization</h3>
            <p>Once the installation is complete, the inverter is charged. It begins synchronizing solar power with the customer’s existing electrical grid.</p>
          </li>

          <li className="step">
            <div className="step-number">5</div>
            <h3>Module Mounting Structure Installation</h3>
            <p>Next, the execution team mounts the module mounting structures on the civil foundations.</p>
          </li>

          <li className="step">
            <div className="step-number">6</div>
            <h3>Seamless Power Distribution</h3>
            <p>Lastly, seamless power distribution begins as soon as the electrical connections are in place.</p>
          </li>

          <li className="step">
            <div className="step-number">7</div>
            <h3>Module Installation</h3>
            <p>In this step, solar modules (panels) are bolted onto the module mounting structures. The entire process is completed within a few days, depending on the size of the installation. This project took just 4 days.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SolarSystemPage;
