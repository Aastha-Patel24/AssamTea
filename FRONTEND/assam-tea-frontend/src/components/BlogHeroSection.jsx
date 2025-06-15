import React from 'react';
import './BlogHeroSection.css';
import blogBg from '../assets/images/BlogBG.jpg';

const BlogHeroSection = () => (
  <div
    className="blog-hero-section"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${blogBg})`,
    }}
  >
    <div className="blog-hero-content">
      <h1>Tea Stories from Assam</h1>
      <p>Tips, news, and the rich culture of Assam tea</p>
    </div>
  </div>
);

export default BlogHeroSection;
