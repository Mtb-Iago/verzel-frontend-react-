export const TOKEN_KEY = "_tokenUserVerzel";
export const isAuthenticated = localStorage.getItem(TOKEN_KEY) ? true : false;

export const getToken = () => localStorage.getItem(TOKEN_KEY);