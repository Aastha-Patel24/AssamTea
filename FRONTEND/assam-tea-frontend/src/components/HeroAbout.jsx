import React from 'react';
import './HeroAbout.css';
import teaImage from '../assets/images/HeroAbout.jpg';

const HeroAbout = () => (
  <div
    className="hero-section d-flex align-items-center justify-content-center text-white"
    style={{
      backgroundImage: `url(${teaImage})`,
    }}
  >
    <div className="hero-overlay" />
    <div className="hero-content">
      <h1>OUR STORY</h1>
      <h2>
        <p className="hero-subheading">“Rooted in Assam. Trusted Across India.”</p>
      </h2>
      {/* <button className="btn btn-warning text-dark mt-3">ORDER NOW</button> */}
    </div>
  </div>
);

export default HeroAbout;
