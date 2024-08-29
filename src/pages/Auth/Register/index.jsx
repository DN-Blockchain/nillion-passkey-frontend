import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

export default function Register() {
  const [profile, setProfile] = useState({
    password: '',
    email: '',
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (!profile.password || !profile.email) return;
    // handle register new account
  };

  return (
    <div className="container">
      <h1>Create your account</h1>
      <div className="switch-auth">
        <span>You already have an account?</span>
        <Link to="/login">Log in</Link>
      </div>
      <form onSubmit={handleSubmitRegister}>
        <input type="email" required value={profile.email} name="email" placeholder="Email" onChange={handleProfileChange} />
        <input type="password" required value={profile.password} name="password" placeholder="Password" onChange={handleProfileChange} />
        <button type="submit" id="login-button" disabled={!profile.password || !profile.email}>
          Create account
        </button>
      </form>
    </div>
  );
}
