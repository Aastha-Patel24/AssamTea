import React from 'react';
import './HeroAbout.css';
import teaImage from '../assets/images/HeroAbout.jpg';

const HeroShop = () => (
  <div
    className="hero-section d-flex align-items-center justify-content-center text-white"
    style={{
      backgroundImage: `url(${teaImage})`,
    }}
  >
    <div className="hero-overlay" />
    <div className="hero-content">
      <h1>OUR TEAS</h1>
      <h2>
        <p className="hero-subheading">“Explore our premium Assam tea selection”</p>
      </h2>
      {/* <button className="btn btn-warning text-dark mt-3">ORDER NOW</button> */}
    </div>
  </div>
);

export default HeroShop;
