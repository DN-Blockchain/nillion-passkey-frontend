import axios from './axiosInstance';

export const generatePasskeyOptions = () => {
  return axios.post('/generate-registration-options');
};

export const verifyRegistration = (data) => {
  return axios.post('/verify-registration', data);
};

export const generateAuthenticationOptions = (data) => {
  return axios.post('/generate-authentication-options', data);
};

export const verifyAuthentication = (data) => {
  return axios.post('/verify-authentication', data);
};
