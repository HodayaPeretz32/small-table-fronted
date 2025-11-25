import api from "./axios";

export const getOrders = () => api.get("/api/orders/");
export const createOrder = (data) => api.post("/api/orders/", data);
export const getOrder = (id) => api.get(`/api/orders/${id}/`);
export const updateOrder = (id, data) => api.put(`/api/orders/${id}/`, data);
export const patchOrder = (id, data) => api.patch(`/api/orders/${id}/`, data);
export const deleteOrder = (id) => api.delete(`/api/orders/${id}/`);