// src/components/SegmentsSection.js
import React from 'react';
import './SegmentsSection.css'; // Import your custom styles for the section
import { Link, useNavigate } from 'react-router-dom';




const SegmentsSection = () => {
    const navigate = useNavigate();

  const handleResidentialClick = () => {
    navigate('/residential');
  };
  return (
    <section className="segments-section">
      <div className="segment">
      <div onClick={handleResidentialClick}>
          <h2>RESIDENTIAL</h2>
       
        <p>
          Switching to solar power in residential areas is a smart choice for reducing electricity costs.
          Illuminate common spaces, like stairways, open areas, lifts, and water pumps, while guaranteeing 25 years of consistent electricity generation with our solar solutions.
        </p>
        <p>
          Homeowners can achieve substantial savings on their electricity bills, protecting against rising tariff rates.
          Installing solar panels not only contributes to cost savings but also enhances the market value of your property.
        </p>
        </div>
        <h3>Explore Our Residential Projects</h3>
      </div>
      <div className="segment">
        <h2>COMMERCIAL</h2>
        <p>
          Ensure uninterrupted power supply for education institutions with our solar power solutions.
          Experience significant savings in electricity bills while inspiring future generations with renewable energy.
        </p>
        <p>
          Installing solar panels showcases an environment-friendly image, boosting the brand value of educational institutes.
          Reduced operational electricity costs can even lead to lower education fees, positioning institutions ahead of the competition.
        </p>
        <h3>Discover Our Commercial Projects</h3>
      </div>

      <div className="segment">
        <h2>INDUSTRIAL</h2>
        <p>
          Elevate industrial efficiency by reducing overhead costs with our solar power solutions.
          Divert funds to more productive avenues while ensuring consistent electricity output for seamless business operations.
        </p>
        <p>
          Peak loading reduction leads to decreased variable costs, making solar an essential model for achieving India's 100GW Solar Mission.
        </p>
        <h3>Explore Our Industrial Projects</h3>
      </div>
    </section>
  );
};

export default SegmentsSection;
