import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "..";
import useAuthHeader from "../authHeader/authHeader";

export const useGetAllUsers = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllUsersReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/user", headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed fetch all users");
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const refetchAllUsers = useCallback(async () => {
    await getAllUsersReq();
  }, [getAllUsersReq]);

  return { isLoading, data, error, getAllUsersReq, refetchAllUsers };
};

export const useGetUserDetails = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getUserDetailsReq = async (userId) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/user/${userId}`, headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed fetch user details");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getUserDetailsReq };
};

export const useUpdateUserDetails = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateUserDetailsReq = async (userId, data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(`/user/${userId}`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed to update user details"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateUserDetailsReq };
};

export const useDeleteUser = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteUserReq = async (userId) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/user/${userId}`, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to delete user");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteUserReq };
};
