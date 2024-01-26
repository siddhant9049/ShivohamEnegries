// src/components/CoverSection.js
import React from 'react';
import './CoverSection.css'; // Import your custom styles
import Cover from "./IMG/COVER.jpg"

const CoverSection = () => {
  // Replace these values with your actual data
  const totalProjects = 80;
  const totalCapacity = 645;
  const WORKERS = 12;

  return (
    <div className="cover-section">
      {/* Replace 'cover-image.jpg' with the path to your cover photo */}
      <div className="cover-image" style={{ backgroundImage:  `url(${Cover})`}}>
        <div className="cover-content">
          <h2>Total Projects Completed: {totalProjects}+</h2>
        
          <h2>Total Installed Capacity: {totalCapacity}+ kW</h2>
          <h2>Workers - {WORKERS}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverSection;
