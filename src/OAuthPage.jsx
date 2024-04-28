import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OAuthPage.css';

const OAuthPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/api/google-login';
  };

  const handleSkip = () => {
    navigate('/email-form');
  };

  return (
    <div className="oauth-page-container">
      <h2>Welcome to Lambda Mailer</h2>
      <p>Please log in with your Google account to continue.</p>
      <button onClick={handleGoogleLogin} className="google-login-button">
        Login with Google
      </button>
      <button onClick={handleSkip} className="skip-button">
        Skip Login
      </button>
    </div>
  );
};

export default OAuthPage;