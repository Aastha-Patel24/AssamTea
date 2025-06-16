import React, { useContext, useState } from 'react';
import './Profile.css';
import { AuthContext } from '../context/AuthContext'; // ✅ Context for global state
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    password: ''
  });

  const { setAdmin } = useContext(AuthContext); // ✅ Set admin globally

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Only update the name globally
    setAdmin({ name: formData.fullName });

    alert("Profile updated successfully!");
    navigate('/profile'); // ✅ Redirect to AdminDashboard
  };

  return (
    <div className="update-profile">
      <h2>Update Admin Profile</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />

        <label>Company Name:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />

        <label>New Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="New Password" required />

        <button type="submit" className="update-btn">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;