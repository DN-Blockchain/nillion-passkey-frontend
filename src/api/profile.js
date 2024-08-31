import axios from './axiosInstance';

export const getProfile = () => {
  return axios.get('/users/profile');
};
