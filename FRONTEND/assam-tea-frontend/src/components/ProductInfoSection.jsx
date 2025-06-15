import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar, FaCheckCircle, FaTruck, FaThermometerHalf } from 'react-icons/fa';
import axios from 'axios';
import './ProductDetail.css';


// {[...Array(5)].map((_, i) => <FaStar key={i} className="star" />)}
//         <span>(133)</span>

const ProductInfoSection = ({product}) => {

  const navigate = useNavigate(); // 🔁 Add this line

  const handleBulkOrderClick = () => {
    navigate('/contact'); // 🔗 Redirect to Contact Us page
  };

  
  return (
    <div className="product-info-section">
      <h1>{product.name}</h1>
      <div className="rating">
        {[...Array(Math.round(product.ratingStars || 0))].map((_, i)=>(
          <FaStar key={i} className="star" />
        ))}
        <span>({product.noOfRatings || 0})</span>
      </div>

      <p className="price">₹{product.price}</p>
      <p className="description">{product.description}</p>

      <h3>Available Sizes and Packaging</h3>
      <ul className="sizes">
        {/* <li>500 g — ₹ 250</li>
        <li>1 kg — ₹ 500</li> */}

        {product.availableSizes?.length > 0 ? (
          product.availableSizes.map((size,index)=>(
             <li key={index}>{size.label} — ₹ {size.price}</li>

          ))
        ) : (
          <li>Default: 1kg — ₹ {product.price}</li>
        )}
      </ul>

      <h3>Shelf Life</h3>
      {/* <p>18 Months</p> */}
       <p>{product.productLife || '18 months'}</p>


      <h3>Brewing Instructions</h3>
      {/* <p>Steep one teaspoon of tea in boiling water for 3 - 5 minutes</p> */}
      <p>{product.instructions || 'Steep one teaspoon of tea in boiling water for 3 - 5 minutes'}</p>

      <h3>Additional Info</h3>
      <p><FaCheckCircle /> Certified Organic</p>
      <p><FaTruck /> Free shipping on orders over ₹ 5000</p>

      <h3>Temperature</h3>
      <p><FaThermometerHalf />  {product.temperature || '95 - 100 °C'}</p>

      <div className="action-buttons">
        <button className="add-to-cart">ADD TO CART</button>
        <button className="bulk-order" onClick={handleBulkOrderClick}>
          Contact for Bulk Order
        </button>
      </div>
    </div>
  );
};

export default ProductInfoSection;
