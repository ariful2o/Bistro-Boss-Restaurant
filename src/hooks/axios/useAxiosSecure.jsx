import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      const status = error.response.status;

      // Do something with response error
      if (status === 401 || status === 403) {
        signOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosSecure;
