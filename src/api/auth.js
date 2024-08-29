import axios from './axiosInstance';

export const register = (data) => {
  return axios.post('/register', data);
};

export const loginByEmail = (data) => {
  return axios.post('/login', data);
};

export const registerNewPasskey = (data) => {
  return axios.post('/passkey', data);
};

export const loginByPasskey = (data) => {
  return axios.post('/passkey', data);
};

export const logout = () => {
  return axios.post('/logout');
};
