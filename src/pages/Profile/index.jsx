import { logout } from '@/api/auth';
import { generatePasskeyOptions } from '@/api/passkey';
import { getProfile } from '@/api/profile';
import FingerPrintImg from '@/assets/fingerprint-white.svg';
import { clearToken } from '@/utils/local-storage';
import { create } from '@github/webauthn-json';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    email: 'xxx.xxx.xxx@gmail.com',
  });

  const handlePasskeySubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await generatePasskeyOptions();
      const { createOptions } = data.data;

      createOptions.publicKey.pubKeyCredParams = [
        {
          alg: -8,
          type: 'public-key',
        },
      ];
      console.log(createOptions.publicKey);

      const credential = await create(createOptions);
      console.log('credential', credential);
      await verifyRegistration({ credential });
      toast.success('Add new passkey successfully');
    } catch (error) {
      alert(error);
      console.log('error', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      clearToken();
      navigate('/login');
    } catch (error) {
      console.log('logout', error);
    }
  };

  const fetchProfile = async (profile) => {
    try {
      const { data } = await getProfile();
      setProfile(data.data);
    } catch (error) {
      clearToken();
      navigate('/login');
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="switch-auth passkey-step">
        <span>Email:</span>
        <Link to={`mailto:${profile.email}`}>{profile.email}</Link>
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
