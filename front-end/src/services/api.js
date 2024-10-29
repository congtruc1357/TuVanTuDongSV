import axios from "axios";

const API_URL = "http://localhost:8080";

// Gọi API đăng ký
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

// Gọi API đăng nhập
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log("Check response data: ", response.data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
