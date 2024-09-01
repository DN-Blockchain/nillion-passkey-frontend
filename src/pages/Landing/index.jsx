import { logout } from '@/api/auth';
import { generatePasskeyOptions, verifyRegistration } from '@/api/passkey';
import { getProfile } from '@/api/profile';
import FingerPrintImg from '@/assets/fingerprint-white.svg';
import { clearToken } from '@/utils/local-storage';
import { create } from '@github/webauthn-json';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

export default function Landing() {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <div className="container">
      <h1>Welcome to Nillion Passkey</h1>
      <form>
        <button type="button" onClick={() => handleNavigate('/register')}>Create new account</button>
        <button type="button" onClick={() => handleNavigate('/login')}>Login to your account</button>
      </form>
    </div>
  );
}
