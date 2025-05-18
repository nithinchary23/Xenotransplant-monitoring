import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [doctorId, setDoctorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (doctorId === 'admin@xenocare.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        {/* Logo */}
        <div className="logo-container">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#ffffff"/>
            <g transform="translate(200, 150)" text-anchor="middle">
              <text font-family="Arial, sans-serif" font-size="48" font-weight="700" letter-spacing="1">
                <tspan fill="#333333">Xeno</tspan><tspan fill="#1a7b6b">Care</tspan>
              </text>
              <line x1="-120" y1="15" x2="120" y2="15" stroke="#1a7b6b" stroke-width="3" stroke-linecap="round"/>
              <text y="40" font-family="Arial, sans-serif" font-size="16" fill="#666666" letter-spacing="1">
                Xenotransplant Monitoring System
              </text>
            </g>
          </svg>
        </div>

        {/* Welcome Section */}
        <div className="welcome-container">
          <h1>Welcome to XenoCare</h1>
          <p className="tagline">"Let's Live Tomorrow"</p>

          {/* Description Section */}
          <div className="description-container">
            <p className="description-text">
              XenoCare is a state-of-the-art xenotransplant monitoring system designed to ensure the safety, compatibility, and success of organ transplants. Our system tracks critical patient data, evaluates organ health, and offers predictive insights that guide doctors in making life-saving decisions. Join us in advancing medical science with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel with Login Form */}
      <div className="right-panel">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="doctorId">Doctor ID</label>
            <input
              id="doctorId"
              type="text"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              placeholder="Enter your doctor ID"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>

      {/* Developed By RNC */}
      <div className="footer">
        <p>Developed by <strong>RNC</strong></p>
      </div>
    </div>
  );
};

export default Login;
