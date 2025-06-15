import React, { useState } from "react";
import '../components/ForgotPassword.css';
import bgImage from '../assets/images/BG.jpg'; // use the same background image
import axios from "axios";
import { USER_API_END_POINT } from "../components/utils/constant";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit =async  (e) => {
    e.preventDefault();

    try {
      const res= await axios.post(`${USER_API_END_POINT}/forgot-password`,{
        email
      });

      const data= await res.data;

       if (res.status === 200) {
      alert(data.message || "Reset link sent to your email.");
    } else {
      alert(data.message || "Something went wrong.");
    }

    } catch (error) {
      console.error("Error sending reset email:", error);
    alert("An error occurred. Please try again.");
    }
    
    setEmail(""); // Clear the form
  };

  return (
    <div className="forgot-password-page-wrapper">
      <div
        className="login-bg-image"
        style={{
          backgroundImage: `url(${bgImage})`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: 0.7,
          zIndex: -1,
        }}
      />

      <div className="popup-card">
        <h2 className="auth-title">Forgot Password</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            required
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary">Send Reset Link</button>
        </form>

        <div className="auth-extra">
          <p>
            Back to{" "}
            <a href="/login" className="auth-link">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
