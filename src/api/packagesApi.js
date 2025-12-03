import api from "./axios";

// חבילות
export const getPackages = () => api.get("/api/packages/");
export const createPackage = (data) => api.post("/api/packages/", data);
export const getPackage = (id) => api.get(`/api/packages/${id}/`);
export const updatePackage = (id, data) => api.put(`/api/packages/${id}/`, data);
export const patchPackage = (id, data) => api.patch(`/api/packages/${id}/`, data);
export const deletePackage = (id) => api.delete(`/api/packages/${id}/`);
export const getMyPackages = () => api.get("/api/packages/my_packages/");

// קטגוריות
export const getPackageCategories = () => api.get("/api/package-categories/");
export const createPackageCategory = (data) => api.post("/api/package-categories/", data);
export const getPackageCategory = (id) => api.get(`/api/package-categories/${id}/`);
export const updatePackageCategory = (id, data) => api.put(`/api/package-categories/${id}/`, data);
export const deletePackageCategory = (id) => api.delete(`/api/package-categories/${id}/`);

// פריטים
export const getPackageItems = () => api.get("/api/package-items/");
export const createPackageItem = (data) => api.post("/api/package-items/", data);
export const getPackageItem = (id) => api.get(`/api/package-items/${id}/`);
export const updatePackageItem = (id, data) => api.put(`/api/package-items/${id}/`, data);
export const deletePackageItem = (id) => api.delete(`/api/package-items/${id}/`);