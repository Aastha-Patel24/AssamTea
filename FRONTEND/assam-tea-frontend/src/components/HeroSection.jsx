import React from 'react';
import './HeroSection.css';
import teaImage from '../assets/images/BG.jpg';

const HeroSection = () => (
  <div className="hero-section d-flex align-items-center justify-content-center text-white" style={{ backgroundImage: `linear-gradient(rgba(15,10,9,0.3),rgba(15,10,9,0.3)),url(${teaImage})`, backgroundPosition: 'center'}}>
    <div className="hero-content">
      <h1>FROM THE HEART OF ASSAM<br/>TO YOUR CUP</h1>
      {/* <button className="btn btn-warning text-dark mt-3">ORDER NOW</button> */}
    </div>
  </div>
);

export default HeroSection;
