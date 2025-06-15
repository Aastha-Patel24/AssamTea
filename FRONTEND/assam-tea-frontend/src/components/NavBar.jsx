import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../assets/images/LOGO.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Assam Tea Logo" width="85" height="70" className="me-2" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/order">Order</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>

        {/* Order Now Button */}
        <Link to="/ordernow" className="btn btn-warning me-3">
          ORDER NOW
        </Link>

        {/* Dropdown menu for Login and Signup */}
        <div className="dropdown">
          <button 
            className="btn btn-warning dropdown-toggle d-flex align-items-center gap-2" 
            type="button" 
            id="userMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <i className="fas fa-user"></i> Account
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuButton">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
