import React, { useState } from "react";
import './CustReview.css';
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import cust2 from '../assets/images/cust2.jpg';

const testimonials = [
  {
    name: "Mohit Sharma",
    image: cust2,
    rating: 5,
    text:
      "As someone who usually sticks to my morning coffee routine, I was skeptical about trying Assam tea. But I'm so glad I did! The moment I opened the bag, the rich aroma convinced me. It’s now my daily go-to beverage!",
  },
  {
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "I absolutely loved the aroma and flavor of the tea. It's now a regular part of my evening ritual!",
  },
  {
    name: "Arjun Verma",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4,
    text:
      "Refreshing, flavorful, and exactly what I needed. Assam tea surprised me with its richness!",
  },
];

const CustReview = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h1>Customer Reviews</h1>
      </div>

      <div className="testimonial-slider">
        <button className="testimonial-arrow testimonial-arrow--left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-card">
            <div className="slider-img">
                <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="testimonial-avatar"
          />
            </div>
            <div className="slider-content">
                <h2>{testimonials[current].name}</h2>
          <div className="testimonial-stars">
            {Array(testimonials[current].rating)
              .fill()
              .map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
          
          
          </div>
          <p className="testimonial-text">"{testimonials[current].text}"</p>
        </div>

        <button className="testimonial-arrow testimonial-arrow--right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`testimonial-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustReview;
