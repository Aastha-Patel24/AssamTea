import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../components/AdminDashboard.css';
import { FaBoxOpen, FaUserTie, FaUserFriends, FaUserEdit, FaChartBar } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext); // Get current admin info

  const adminName = admin?.name || "Admin"; // Default fallback

  const cards = [
    {
      title: 'Manage Products',
      icon: <FaBoxOpen size={40} />,
      description: 'Add, update, or delete tea products.',
      route: '/admin/products'
    },
    {
      title: 'Connect with Retailers',
      icon: <FaUserTie size={40} />,
      description: 'Manage communication with your retail partners.',
      route: '/admin/retailers'
    },
    {
      title: 'Connect with Wholesalers',
      icon: <FaUserFriends size={40} />,
      description: 'Engage and manage wholesale connections.',
      route: '/admin/wholesalers'
    },
    {
      title: 'Update Profile',
      icon: <FaUserEdit size={40} />,
      description: 'Edit your admin profile details.',
      route: '/admin/profile'
    },
    {
      title: 'Revenue Dashboard',
      icon: <FaChartBar size={40} />,
      description: 'Track revenue and performance insights.',
      route: '/admin/revenue'
    }
  ];

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <p className="admin-welcome">Welcome back, <strong>{adminName}</strong>!</p>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="dashboard-card" key={index} onClick={() => navigate(card.route)}>
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
