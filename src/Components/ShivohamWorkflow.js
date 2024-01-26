// ShivohamWorkflow.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ShivohamWorkflow.css';
import IMG1 from './IMG/works.jpg'; // Replace with the actual path to your image

const ShivohamWorkflow = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeIn} className="shivoham-workflow-container">
    <h2>PROJECT WORKFLOW AT SHIVOHAM ENERGIES</h2>
    <p>
      Shivoham Energies, as a leading EPC solution provider, is dedicated to making clean energy accessible to all through innovative solutions and unparalleled service.
    </p>
    <div className="workflow-steps">
      <div className="workflow-step">
        <h3>Step 1: Site Visit by Engineer</h3>
        <p>Conduct a detailed site visit to assess project requirements and constraints.</p>
      </div>
      <div className="workflow-step">
        <h3>Step 2: Pre-Feasibility Study and Feasibility Study</h3>
        <p>Perform a pre-feasibility study followed by a comprehensive feasibility study to evaluate project viability.</p>
      </div>
      <div className="workflow-step">
        <h3>Step 3: Purchase Order (PO), Contract, and Finalizing Deals</h3>
        <p>Issue a Purchase Order (PO), establish contracts, and finalize negotiations for procurement and services.</p>
      </div>
      <div className="workflow-step">
        <h3>Step 4: Detailed Design and MSEB Licensing</h3>
        <p>Develop a detailed project design and obtain necessary licensing from the Maharashtra State Electricity Board (MSEB).</p>
      </div>
      <div className="workflow-step">
        <h3>Step 5: Material Purchase and Procurement</h3>
        <p>Procure materials required for the project and manage the overall procurement process.</p>
      </div>
      <div className="workflow-step">
        <h3>Step 6: Installation, Testing, and Acceptance</h3>
        <p>Execute installation, conduct testing, and ensure the client's acceptance of the completed project.</p>
      </div>
      <div className="workflow-step">
        <h3>Step 7: Operation and Maintenance</h3>
        <p>Initiate operation and maintenance activities to ensure the ongoing functionality and efficiency of the energy system.</p>
      </div>
    </div>
      <div className="shivoham-logo-container">
        <img src={IMG1} alt="Shivoham Energies Logo" />
      </div>
      </animated.div>
  );
};

export default ShivohamWorkflow;
