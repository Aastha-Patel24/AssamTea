import React from 'react';
import './ProductDetail.css';

const ProductImageSection = ({ product }) => {
  return (
    <div className="product-image-section">
      <img src={product.image} alt={product.name} className="main-product-image" />
      <div className="size-options-images">
        <img src={product.image} alt="500g Tea" />
        <img src={product.image} alt="1kg Tea" />
      </div>
    </div>
  );
};

export default ProductImageSection;
