import axios from "axios";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_APP_API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

const useAxios = () => {
  const dispatch = useDispatch();

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response && err.response.status === 401) {
        dispatch(signOut());
      }

      return Promise.reject(err);
    }
  );

  return axiosInstance;
};
export default useAxios;
