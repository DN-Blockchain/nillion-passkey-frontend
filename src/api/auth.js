import axios from './axiosInstance';

export const signup = (data) => {
  return axios.post('/auth/signup', data);
};

export const login = (data) => {
  return axios.post('/auth/login', data);
};

export const logout = () => {
  return axios.post('/auth/logout');
};
