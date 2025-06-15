import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ProductImageSection from '../components/ProductImageSection';
import ProductInfoSection from '../components/ProductInfoSection';
import axios from 'axios';
import { PRODUCT_API_END_POINT } from '../components/utils/constant';

const ProductDetail = () => {

  const {id} = useParams();
 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log('ProductDetail product:', product);



  useEffect(()=>{
const fetchProduct = async() =>{
  try {
    const res = await axios.get(`${PRODUCT_API_END_POINT}/${id}`);
    // const res = await axios.get(`http://localhost:5000/api/product/${id}`);
    setProduct(res.data.product);
    setLoading(false);
  } catch (error) {
    console.error("Product fetch error:", error);
        setError("Unable to load product.");
        setLoading(false);
  }
};
fetchProduct();
  },[id]);

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;


  return (
    <div
      className="product-detail-page"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '40px' }}
    >
      <ProductImageSection product={product} />
      <ProductInfoSection product={product} />
    </div>
  );
};

export default ProductDetail;

  // React.useEffect(() => {
  //   if (!product) {
  //     // Redirect to home or shop if no product data found
  //     navigate('/products');
  //   }
  // }, [product, navigate]);

  // if (!product) {
  //   return null; // or loading spinner
  // }