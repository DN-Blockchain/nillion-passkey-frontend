export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const setToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);
};

export const clearToken = () => {
  localStorage.removeItem('accessToken');
};
