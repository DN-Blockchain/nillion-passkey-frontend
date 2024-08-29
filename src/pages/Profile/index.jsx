import FingerPrintImg from '@/assets/fingerprint-white.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Profile() {
  const handlePasskeySubmit = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    // handle logout
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="switch-auth passkey-step">
        <span>Email:</span>
        <Link to={`mailto:htphong.6701@gmail.com`}>htphong.6701@gmail.com</Link>
      </div>
      <form onSubmit={handlePasskeySubmit}>
        <img src={FingerPrintImg} alt="fingerprint" />
        <button type="submit" id="login-button">
          Create your passkey
        </button>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  );
}
