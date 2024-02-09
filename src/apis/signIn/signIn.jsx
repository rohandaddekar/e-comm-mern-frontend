import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import useAxios from "..";

const useSignIn = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const signInReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/auth/sign-in", payload);
      dispatch(
        signIn({
          token: res?.data?.token,
          role: res?.data?.role,
          cartId: res?.data?.cartId,
        })
      );
      navigate("/");
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to Sign In");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, signInReq };
};

export default useSignIn;
