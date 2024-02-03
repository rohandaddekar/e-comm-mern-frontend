import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuthHeader from "../authHeader/authHeader";
import useAxios from "..";

const useSignOut = () => {
  const headers = useAuthHeader();
  const dispatch = useDispatch();

  const axiosInstance = useAxios();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const signOutReq = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/auth/sign-out", headers);
      dispatch(signOut());
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, signOutReq };
};

export default useSignOut;
