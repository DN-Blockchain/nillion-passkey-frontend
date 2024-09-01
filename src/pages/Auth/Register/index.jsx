import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { toast } from 'react-hot-toast';
import { signup } from '@/api/auth';
import '../style.scss';

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmitRegister = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (!profile.password || !profile.email) return;
      await signup(profile);
      setIsLoading(false);
      toast.success('Create new account successfully. Please login');
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
      console.log('error', error?.response?.data?.message);
      toast.error(error?.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="screen-loading-overlay">
          <ReactLoading type="spinningBubbles" color="#ffffff" height={60} width={60} />
        </div>
      )}
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
