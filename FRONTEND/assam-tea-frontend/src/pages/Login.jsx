import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/Login.css';
import bgImage from '../assets/images/BG.jpg';
import axios from "axios";
import { USER_API_END_POINT } from "../components/utils/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin =async (e) => {
    e.preventDefault();
try {
   const res= await axios.post(`${USER_API_END_POINT}/login`,{
      email,password
    }) ;

    if (res.status === 200) {
        alert(`Logging in with Email: ${email}`);
    
    setEmail("");
    setPassword("");

     navigate("/");


} }catch (error) {
  console.log(error);
}
  };
   
   
  

  const handleGoogleLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      "/google-oauth-popup",
      "GoogleLogin",
      `width=${width},height=${height},top=${top},left=${left}`
    );

   
  };

  return (
    <div className="login-page-wrapper">
      {/* Blurred background image */}
      <div 
        className="login-bg-image" 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: 0.7,
          zIndex: -1
        }} 
      />

      <div className="popup-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Forgot Password link aligned left */}
          <div style={{ textAlign: 'left', marginBottom: '15px' }}>
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn-primary">Login</button>
        </form>

        <div className="auth-extra">
          <button className="btn-google" onClick={handleGoogleLogin}>
            Login with Google
          </button>
        </div>

        <div className="auth-extra">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
