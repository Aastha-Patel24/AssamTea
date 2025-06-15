import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/images/about-img.jpg';

const AboutAssamTeaSection = () => (
  <div className="about-section py-5 bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={aboutImage} className="img-fluid shadow rounded" alt="Assam Tea" />
        </div>
        <div className="col-md-6">
          <h2>About Assam Tea</h2>
          <p>Assam tea, a strong, black tea originating from the Assam region of India, is renowned for its full-bodied flavor and robust character. It is often used as a base for various breakfast blends, including English Breakfast and Irish Breakfast.Assam tea, a strong, black tea originating from the Assam region of India, is renowned for its full-bodied flavor and robust character. It is often used as a base for various breakfast blends, including English Breakfast and Irish Breakfast</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutAssamTeaSection;
