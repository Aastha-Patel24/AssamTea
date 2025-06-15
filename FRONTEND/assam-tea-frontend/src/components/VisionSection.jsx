import React from 'react';
import './visionsection.css';

const VisionSection = () => {
  return (
    <div className="vision-wrapper">
      <div className="vision-header-section">
        <h2 className="vision-title">Our Vision</h2>
      </div>

      {/* Only the green text section gets top and bottom borders */}
      <div className="vision-text-wrapper">
        <div className="vision-content">
          <p className="vision-text">
            To be the globally recognized leader in authentic Assam tea, 
            celebrated for our unwavering commitment to quality, innovation, 
            and ethical stewardship. We envision a world where the distinctive 
            taste and health benefits of our tea are cherished by millions, inspiring 
            moments of connection, wellness, and a deeper appreciation for the 
            rich legacy of Assam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
