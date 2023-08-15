import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // axios interceptor request client to server
  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("access-token")}`;
    axiosSecure.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });
    // interceptor response server to client
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, axiosSecure, navigate]);
  //   axios intercept response

  return [axiosSecure];
};
export default useAxiosSecure;
