import api from "./axios";

export const getVendors = () => api.get("/api/vendors/");
export const createVendor = (data) => api.post("/api/vendors/", data);
export const getVendor = (id) => api.get(`/api/vendors/${id}/`);
export const updateVendor = (id, data) => api.put(`/api/vendors/${id}/`, data);
export const patchVendor = (id, data) => api.patch(`/api/vendors/${id}/`, data);
export const deleteVendor = (id) => api.delete(`/api/vendors/${id}/`);
export const getVendorPackages = (id) => api.get(`/api/vendors/${id}/packages/`);
export const searchVendors = (search) =>api.get("/api/vendors/", {params: { search }});
