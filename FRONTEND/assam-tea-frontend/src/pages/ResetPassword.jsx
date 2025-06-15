import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../assets/images/BG.jpg";

const ResetPassword = () => {
  const { token } = useParams();  // get token from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/user/reset-password/${token}`, {
        password
      });

      if (res.status === 200) {
        alert(res.data.message || "Password reset successful!");
        navigate("/login"); // Redirect to login page
      } else {
        alert(res.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      alert(
        error.response?.data?.message || "Reset failed. Please try again."
      );
    }
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
        <h2 className="auth-title">Reset Password</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>New Password</label>
          <input
            type="password"
            required
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            required
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="btn-primary">Reset Password</button>
        </form>

        <div className="auth-extra">
          <p>
            Go back to{" "}
            <a href="/login" className="auth-link">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
