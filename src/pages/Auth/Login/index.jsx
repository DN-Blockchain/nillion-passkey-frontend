import { login } from '@/api/auth';
import FingerPrintImg from '@/assets/fingerprint.svg';
import { setToken } from '@/utils/local-storage';
import { get } from '@github/webauthn-json';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../style.scss';
import { generateAuthenticationOptions, verifyAuthentication } from '@/api/passkey';

export default function Login() {
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

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      if (!profile.password || !profile.email) return;
      // handle login
      const { data } = await login(profile);
      setIsLoading(false);
      setToken(data.data.access_token);
      navigate('/profile');
    } catch (error) {
      setIsLoading(false);
      console.log('error', error?.response?.data?.message);
      toast.error(error?.response?.data?.message || 'An error occurred');
    }
  };

  const handleLoginWithPasskey = async () => {
    try {
      const { data } = await generateAuthenticationOptions();
      const { createOptions } = data.data;
      console.log(createOptions.publicKey);

      const credential = await get(createOptions);
      console.log('credential', credential);
      await verifyAuthentication({ credential });
      navigate('/profile');
    } catch (error) {
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
