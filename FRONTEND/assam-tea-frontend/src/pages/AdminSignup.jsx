import React, { useState } from "react";
import '../components/Login.css'; // reuse CSS
import bgImage from '../assets/images/BG.jpg'; // your image path

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!contactNo.match(phoneRegex)) newErrors.contactNo = "Contact number must be 10 digits.";
    if (!address.trim()) newErrors.address = "Address is required.";
    if (!city.trim()) newErrors.city = "City is required.";
    if (!state.trim()) newErrors.state = "State is required.";
    if (!pincode.match(pincodeRegex)) newErrors.pincode = "Pincode must be 6 digits.";
    if (!email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!password.match(passwordRegex)) {
      newErrors.password = "Password must be 8+ chars with uppercase, lowercase, number & special char.";
    }
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("Admin signup successful!");

    // ✅ Store login and role in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "admin");

    setFullName("");
    setContactNo("");
    setAddress("");
    setCity("");
    setState("");
    setPincode("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-bg-image" style={{ backgroundImage: `url(${bgImage})` }} />

      <div className="popup-card">
        <h2 className="auth-title">Admin Signup</h2>
        <form className="auth-form" onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            className={errors.fullName ? 'error-input' : ''}
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}

          <label>Contact Number</label>
          <input
            className={errors.contactNo ? 'error-input' : ''}
            type="tel"
            placeholder="Enter 10-digit phone number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          {errors.contactNo && <p className="error-text">{errors.contactNo}</p>}

          <label>Address</label>
          <input
            className={errors.address ? 'error-input' : ''}
            type="text"
            placeholder="Full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}

          <label>City</label>
          <input
            className={errors.city ? 'error-input' : ''}
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <p className="error-text">{errors.city}</p>}

          <label>State</label>
          <input
            className={errors.state ? 'error-input' : ''}
            type="text"
            placeholder="Enter your state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          {errors.state && <p className="error-text">{errors.state}</p>}

          <label>Pincode</label>
          <input
            className={errors.pincode ? 'error-input' : ''}
            type="text"
            placeholder="6-digit pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          {errors.pincode && <p className="error-text">{errors.pincode}</p>}

          <label>Email</label>
          <input
            className={errors.email ? 'error-input' : ''}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Password</label>
          <input
            className={errors.password ? 'error-input' : ''}
            type="password"
            placeholder="Strong password (8+ chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <label>Confirm Password</label>
          <input
            className={errors.confirmPassword ? 'error-input' : ''}
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          <button type="submit" className="btn-primary">Signup</button>
        </form>

        <div className="auth-extra">
          <p>
            Already have an account?{" "}
            <a href="/login" className="auth-link">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
