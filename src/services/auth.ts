import { useEffect, useState } from "react";

export const TOKEN_KEY = "_tokenUserVerzel";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = localStorage.getItem(TOKEN_KEY) ? true : false;
