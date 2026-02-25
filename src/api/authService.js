// This file handles all authentication-related API calls.
// Keeping API logic separate improves maintainability and scalability.

import api from "./axiosConfig";

// Send login credentials to backend and returns response
export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

// likewise for register data
export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};