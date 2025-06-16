import React, { useContext, useState } from 'react';
import './BulkOrder.css';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const BulkOrder = () => {
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(formData);
    navigate('/admin/wholesalers'); // Redirect after submission
  };

  return (
    <div className="bulk-order-page">
      <section className="form-section">
        <form className="bulk-form" onSubmit={handleSubmit}>
          {[
            { label: "Your Name", name: "name" },
            { label: "Business Name", name: "business" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone" },
            { label: "Product Interested In", name: "product" },
            { label: "Quantity Required", name: "quantity" },
            { label: "Location", name: "location" }
          ].map(({ label, name, type = "text" }) => (
            <React.Fragment key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                placeholder={label}
                value={formData[name]}
                onChange={handleChange}
                required={name === "name" || name === "email" || name === "phone" || name === "product"}
              />
            </React.Fragment>
          ))}
          <label htmlFor="message">Message / Custom Request</label>
          <textarea
            name="message"
            placeholder="Message / Custom Request"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default BulkOrder;
