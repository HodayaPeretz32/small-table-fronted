import api from "./axios";

// CRUD Users
export const getUsers = () => api.get("/api/users/"); // דורש Token
export const getUser = (id) => api.get(`/api/users/${id}/`);
export const createUser = (data) => api.post("/api/auth/register/", data); // הרשמה
export const updateUser = (id, data) => api.put(`/api/users/${id}/`, data);
export const patchUser = (id, data) => api.patch(`/api/users/${id}/`, data);
export const deleteUser = (id) => api.delete(`/api/users/${id}/`);
// export const loginUser = (data) => api.post("/api/token/", data); // כניסה

// התחברות (Login) - מחזיר JWT token
export const loginUser = (data) => api.post("/api/auth/login", {
  username: data.username,  // לוודא שזה תואם לשדה במודל המשתמש
  password: data.password
});