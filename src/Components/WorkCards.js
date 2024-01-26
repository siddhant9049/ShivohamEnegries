// src/components/WorkCards.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './WorkCards.css'; // Import your custom styles
import SRLOGO from "./IMG/SR.jpeg"
import WP from "./IMG/WP.jpeg"
import AEW from "./IMG/AEW.jpeg"

const WorkCards = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    // Use navigate to navigate to the specified route
    navigate('/solar-system-rooftop');
  };
  const handleClick2 = () => {
    // Use navigate to navigate to the specified route
    navigate('/solarWP');
  };
  const handleClick3 = () => {
    // Use navigate to navigate to the specified route
    navigate('/AEW');
  };
  return (
    <>
      <h2 className="services-heading">Our Services</h2>
      <div className="work-cards-container">
        {/* Solar Rooftop Systems Card */}
        <div className="work-card" onClick={handleClick}>
          <h2>Solar Rooftop Systems</h2>
          <img src={SRLOGO} alt="Solar Rooftop Systems Logo" />
          <p>We specialize in designing and installing solar rooftop systems for residential and commercial buildings.</p>
        </div>
        {/* Other Cards */}
        <div className="work-card" onClick={handleClick2}>
          <h2>Solar Water Pumps</h2>
          <img src={WP} alt="Solar Water Pumps Logo" />
          <p>Explore our projects involving solar-powered water pumps, providing sustainable solutions for agriculture and irrigation.</p>
        </div>
        <div className="work-card" onClick={handleClick3}>
          <h2>All Electrical Works</h2>
          <img src={AEW} alt="All Electrical Works Logo" />
          <p>From electrical wiring to advanced automation, we cover a wide range of electrical works with a focus on efficiency and reliability.</p>
        </div>
      </div>
    </>
  );
};

export default WorkCards;
