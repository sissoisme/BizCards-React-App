import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}customers/signin`, {
    email,
    password,
  });

 
  localStorage.setItem(tokenKey, data.token);
  localStorage.setItem("user", data.user._id);
}

export default {
  login,
  getCurrentUser,
  logout,
  getJwt,
};
