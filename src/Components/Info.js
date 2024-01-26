// FlipCard.js

import React, { useState, useEffect } from 'react';
import './Info.css'; // Import the CSS file for styling
import FS from "./SC/FS.jpeg"
import BS from "./SC/BS.jpeg"
const FlipCard = ({ frontImage, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let flipInterval;

  useEffect(() => {
    if (isFlipped) {
      flipInterval = setInterval(() => {
        setIsFlipped(false);
      }, 2000);
    } else {
      clearInterval(flipInterval);
    }

    return () => {
      clearInterval(flipInterval);
    };
  }, [isFlipped]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    clearInterval(flipInterval);
  };

  return (
    <div className="container">
      <div className="box">
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={FS} alt="Front Image" />
            </div>
            <div className="flip-card-back">
              <img src={BS} alt="Back Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
