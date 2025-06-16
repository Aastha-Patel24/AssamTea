import React from 'react';
import './OrderSummary.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSummary = ({ products }) => {
  const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-summary-wrapper">
      <div className="order-summary-inner">
        <div className="free-delivery-section">
          <div className="delivery-bar"></div>
          <div className="delivery-message">
            <span className="checkmark">✔</span>
            <span>
              <strong>Your order is eligible for FREE Delivery.</strong><br />
              <span className="small-note">Choose <a href="#">FREE Delivery</a> option at checkout.</span>
            </span>
          </div>
        </div>

        <div className="summary-row">
          <span className="subtotal-text">
            Subtotal ({products.reduce((sum, item) => sum + item.quantity, 0)} items):
          </span>
          <span className="summary-price">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>

        <button className="btn btn-warning text-dark proceed-button">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default OrderSummary;
