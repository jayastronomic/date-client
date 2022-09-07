import { request } from "./http/Request";

export const createUser = (newUser) => {
  return request("/users", "POST", newUser);
};
