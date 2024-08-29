import FingerPrintImg from '@/assets/fingerprint.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

export default function Login() {
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

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!profile.password || !profile.email) return;
    // handle login
  };

  const handleLoginWithPasskey = () => {
    // handle login with passkey
  };

  return (
    <div className="container">
      <h1>Welcome back</h1>
      <div className="switch-auth">
        <span>Don't have an account yet?</span>
        <Link to="/register">Create account</Link>
      </div>
      <form onSubmit={handleSubmitLogin}>
        <input type="email" required value={profile.email} name="email" placeholder="Email" onChange={handleProfileChange} />
        <input type="password" required value={profile.password} name="password" placeholder="Password" onChange={handleProfileChange} />
        <button type="submit" id="login-button" disabled={!profile.password || !profile.email}>
          Login
        </button>
        <button type="button" className="flex" onClick={handleLoginWithPasskey}>
          <img src={FingerPrintImg} alt="passkey" />
          <span>Login with passkey</span>
        </button>
      </form>
    </div>
  );
}
