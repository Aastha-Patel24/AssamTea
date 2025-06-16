

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductShop.css'; // Custom styles
import { PRODUCT_API_END_POINT } from './utils/constant.js';

const ProductDisplay = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');

  useEffect(()=>{
    const fetchProducts = async()=>{
try {
  
  // const res = await axios.get('http://localhost:5000/api/product');
  const res = await axios.get(`${PRODUCT_API_END_POINT}`)
  setProducts(res.data.products);
  setLoading(false);

} catch (error) {
  setError('Failed to load products');
        setLoading(false);
}
    };

    fetchProducts();
  },[]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className='main-product'>
      <div className='heading'> <h1> Our Product </h1> </div>
      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
              <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
              <Link to={`/product/${product._id}`}>

                <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='heading'> <h1> TOP SELLING </h1> </div>

      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
              <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
              {/* <Link to="/product" state={{ product }}> */}
              <Link to={`/product/${product._id}`}>

                <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
             <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
              <Link to={`/product/${product._id}`}>

                <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
