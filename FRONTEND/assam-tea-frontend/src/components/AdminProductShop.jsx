import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductShop.css';

import blackTeaImage from '../assets/images/Black-tea.jpg';
import greenTeaImage from '../assets/images/green-tea.jpg';
import herbalTeaImage from '../assets/images/hurble-tea.jpg';

const ProductShop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Black Tea',
      image: blackTeaImage,
      price: 200,
      description: 'Fully oxidized Camellia sinensis leaves, resulting in a robust, bold flavor and higher caffeine.',
    },
    {
      id: 2,
      name: 'Green Tea',
      image: greenTeaImage,
      price: 150,
      description: 'Minimally processed Camellia sinensis leaves, retaining fresh, light flavor & high antioxidants.',
    },
    {
      id: 3,
      name: 'Herbal Tea',
      image: herbalTeaImage,
      price: 200,
      description: 'Infusions made from various plants, offering diverse flavors and generally caffeine-free.',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: blackTeaImage,
  });

  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setFormData({ ...product });
    setEditId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) return;

    if (editId !== null) {
      setProducts(products.map((p) => (p.id === editId ? { ...formData, id: editId } : p)));
      setEditId(null);
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }

    setFormData({
      name: '',
      price: '',
      description: '',
      image: blackTeaImage,
    });
  };

  const renderCards = (title) => (
    <>
      <div className='heading'><h1>{title}</h1></div>
      <div className='product-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <div className='card-img'>
              <Link to="/product" state={{ product }}>
                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h1>₹ {product.price} Per Kg / Pack</h1>
              <div className="edit-delete-group">
                <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
              <Link to="/product" state={{ product }}>
                <button id="card-btn">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className='main-product'>
      <div className='heading'>
        <h1>{editId ? 'Edit Product' : 'Add New Product'}</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '40px', width: '90%', maxWidth: '600px' }}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setFormData({ ...formData, image: imageUrl });
            }
          }}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        {formData.image && ![blackTeaImage, greenTeaImage, herbalTeaImage].includes(formData.image) && (
          <img
            src={formData.image}
            alt="Preview"
            style={{ width: '100%', maxHeight: '300px', borderRadius: '10px', objectFit: 'contain', marginBottom: '10px' }}
          />
        )}

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#5C4033',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '10px'
        }}>
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {renderCards('Our Product')}
      {renderCards('Top Selling')}
    </div>
  );
};

export default ProductShop;
