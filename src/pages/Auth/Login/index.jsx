import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
  };

  return (
    <div className="container">
      <h1>Welcome back</h1>
      <div className="switch-auth">
        <span>Don't have an account yet?</span>
        <Link to="/register">Create account</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" required value={email} name="email" placeholder="Email address" onChange={handleChangeEmail} />
        <button type="submit" id="login-button" disabled={!email}>
          Continue
        </button>
      </form>
    </div>
  );
}
