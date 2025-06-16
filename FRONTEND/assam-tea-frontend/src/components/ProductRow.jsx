import React, { useState } from 'react';
import './ProductRow.css';
import { FaTrashAlt } from 'react-icons/fa';

const ProductRow = ({ product, onDelete, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      onDelete(product.id);
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `${product.name} - ${product.description}`,
        url: window.location.href,
      }).catch((err) => console.error('Sharing failed', err));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <div className="product-row">
      <div className="left-section">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="middle-section">
        <h3>{product.name}</h3>
        <p className="weight">{product.weight}</p>
        <p className="description">{product.description}</p>
        <p className="benefits">{product.benefits}</p>
        <p className="stock">{product.stock}</p>
        <div className="action-links">
          <span className="delete-link" onClick={() => onDelete(product.id)}>Delete</span>
          <span className="share-link" onClick={handleShare}>Share</span>
        </div>
      </div>

      <div className="right-section">
        <div className="qty-pill">
          {quantity === 1 ? (
            <>
              <FaTrashAlt className="icon" onClick={() => onDelete(product.id)} />
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </>
          ) : (
            <>
              <button onClick={handleDecrement}>−</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </>
          )}
        </div>
        <div className="price">₹ {product.price.toFixed(2)}</div>
        <div className="subtotal">Subtotal: ₹ {subtotal}</div>
      </div>
    </div>
  );
};

export default ProductRow;
