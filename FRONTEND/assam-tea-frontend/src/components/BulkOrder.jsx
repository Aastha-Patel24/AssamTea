// src/pages/BulkOrder.jsx
import React from 'react';
import './BulkOrder.css';
import { Link } from 'react-router-dom';

const BulkOrder = () => {
  return (
    <div className="bulk-order-page">
      {/* Enquiry Form */}
      <section className="form-section">
        <form className="bulk-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Your Name" required />
          <label htmlFor="business">Business Name</label>
          <input type="text" placeholder="Business Name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" required />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" placeholder="Phone Number" required />
          <label htmlFor="product">Product Interested In</label>
          <input type="text" placeholder="Product Interested In" required />
          <label htmlFor="quantity">Quantity Required</label>
          <input type="text" placeholder="Quantity Required" />
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="Location" />
          <label htmlFor="message">Message / Custom Request</label>
          <textarea placeholder="Message / Custom Request" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Benefits Section as Cards */}
      <section className="benefits-cards">
        <h2>Why Buy in Bulk?</h2>
        <div className="card-container">
          <div className="benefit-card">✔ Custom packaging</div>
          <div className="benefit-card">✔ Volume discounts</div>
          <div className="benefit-card">✔ Pan-India delivery</div>
        </div>

        <div className="product-btn-container">
          <Link to="/product" className="product-button">Check Our Products</Link>
        </div>
      </section>
    </div>
  );
};

export default BulkOrder;
