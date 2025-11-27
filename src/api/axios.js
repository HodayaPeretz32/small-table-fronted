import axios from "axios";

// const API_BASE_URL = "http://127.0.0.1:8000";
const API_BASE_URL = "https://small-table.onrender.com/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// הוספת Authorization Header עם Token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// טיפול אוטומטי בשגיאות (אפשר להרחיב לפי הצורך)
api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;