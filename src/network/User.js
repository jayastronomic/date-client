import { request } from "./http/Request";

export const loginStatus = () => {
  return request("/logged_in", "GET");
};

export const logout = () => {
  return request("/logout", "DELETE");
};

export const login = (data) => {
  return request("/login", "POST", data);
};

export const createUser = (data) => {
  return request("/users", "POST", data);
};

export const updateUser = (id, data) => {
  return request(`/users/${id}`, "PATCH", true, id, data);
};

export const fetchUser = (id) => {
  return request(`/users/${id}`, "GET");
};
