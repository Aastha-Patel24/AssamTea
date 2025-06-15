import React from 'react';
import './missionsection.css';

const MissionSection = () => {
  return (
    <div className="mission-outer">
      <div className="mission-header-line" />
      <div className="mission-header-section">
        <h2 className="mission-title">Our Mission</h2>
      </div>
      <div className="mission-wrapper">
        <div className="mission-container">
          <p className="mission-text">
            To passionately cultivate, meticulously process, and responsibly deliver the finest Assam tea, 
            enriching lives with its robust flavor and invigorating character. We are committed to upholding 
            the heritage of Assam tea while fostering sustainable practices, empowering our communities, and 
            ensuring exceptional quality and satisfaction for every customer worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
