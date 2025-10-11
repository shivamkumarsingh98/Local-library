const api = process.env.NEXT_PUBLIC_API_URL;
import axios from "axios";


export const registerOwner = async (data) => {
  try {
    const response = await axios.post(`${api}/register`, data, {
        withCredentials: true,  
        });
    return response.data;
  }
    catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
    }
};

export const loginOwner = async (data) => {
  try {
    const response = await axios.post(`${api}/login`, data, {
        withCredentials: true,  
        });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};