import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavbar from './components/UserNavbar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog'; 
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ShoppingCart from './pages/ShoppingCart';
import AdminSignup from './pages/AdminSignup';
import MyProfile from './pages/AdminDashBoard';  // ✅ Replace AdminDashboard
import AdminDashboard from './pages/AdminDashBoard';
import AdminShopPage from './pages/AdminShopPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    // Listen to changes across the app
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  return (
    <Router>
      {isLoggedIn ? <UserNavbar /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/ordernow" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/order" element={<Order />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/profile" element={<AdminDashboard />} />
        <Route path="/admin/shop" element={<AdminShopPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
