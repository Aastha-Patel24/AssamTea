import React, { useState } from 'react';
import './ShoppingCart.css';
import ProductRow from './ProductRow';
import OrderSummary from './OrderSummary';

import blackTeaImage from '../assets/images/black-tea-cart.png';
import masalaTeaImage from '../assets/images/masala-tea-cart.png';
import greenTeaImage from '../assets/images/green-tea-cart.png';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Black Tea',
      weight: '1 kg pack',
      price: 300,
      image: blackTeaImage,
      description: 'Premium Assam Black Tea - 1kg Pack, Full-Bodied, Strong & Robust Flavor, Rich Malty Undertones.',
      benefits: 'Boosts energy and improves focus',
      stock: 'In stock',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Masala Tea',
      weight: '1 kg pack',
      price: 500,
      image: masalaTeaImage,
      description: 'Premium Masala Tea - 1kg Pack, Richly Spiced, Aromatic Blend with Bold & Full-Bodied Flavor, Infused with Traditional Spices.',
      benefits: 'Warming and immune-boosting',
      stock: 'Only 3 left',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Green Tea',
      weight: '500g pack',
      price: 450,
      image: greenTeaImage,
      description: 'Premium Green Tea - 500g Pack, Refreshing & Light, Naturally Rich Flavor with a Smooth, Grassy Aroma, Packed with Antioxidants.',
      benefits: 'Promotes metabolism and offers antioxidant benefits',
      stock: 'In stock',
      quantity: 1,
    }
  ]);

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <div className="cart-content">
        <div className="product-list">
          <div className="product-header">
            <span>Product</span>
            <span></span>
            <span>Subtotal</span>
          </div>
          {products.map(product => (
            <ProductRow
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <a href="/" className="continue-shopping">← CONTINUE SHOPPING</a>
        </div>
        <OrderSummary products={products} />
      </div>
    </div>
  );
};

export default ShoppingCart;
