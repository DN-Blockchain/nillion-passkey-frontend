import { REGISTER_STEP } from '@/constants/form-step';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FingerPrintImg from '@/assets/fingerprint.svg';
import '../style.scss';

export default function Register() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const [step, setStep] = useState(REGISTER_STEP.PROFILE_INFO);

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    if (!profile.name || !profile.email) return;
    setStep(REGISTER_STEP.SET_UP_PASSKEY);
  };

  const handlePasskeySubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      {step === REGISTER_STEP.PROFILE_INFO ? (
        <>
          <h1>Create your account</h1>
          <div className="switch-auth">
            <span>You already have an account?</span>
            <Link to="/login">Log in</Link>
          </div>
          <form onSubmit={handleProfileFormSubmit}>
            <input type="text" required value={profile.name} name="name" placeholder="Name" onChange={handleProfileChange} />
            <input type="email" required value={profile.email} name="email" placeholder="Email address" onChange={handleProfileChange} />
            <button type="submit" id="login-button" disabled={!profile.name || !profile.email}>
              Continue
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Let's setup with Passkeys</h1>
          <div className="switch-auth passkey-step">
            <span>We'll create an account for?</span>
            <Link to={`mailto:${profile.email}`}>{profile.email}</Link>
          </div>
          <form onSubmit={handlePasskeySubmit}>
            <img src={FingerPrintImg} alt="fingerprint" />
            <button type="submit" id="login-button">
              Create your account
            </button>
          </form>
        </>
      )}
    </div>
  );
}
