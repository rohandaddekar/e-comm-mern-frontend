import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "..";
import useAuthHeader from "../authHeader/authHeader";

export const useGetAllAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllAddressReq = useCallback(
    async (filters = {}) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/address", {
          ...headers,
          params: filters,
        });
        setData(res?.data);
      } catch (err) {
        setError(err?.response?.data);
        toast.error(err?.response?.data?.message || "Failed fetch all address");
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const refetch = useCallback(async () => {
    await getAllAddressReq();
  }, [getAllAddressReq]);

  return { isLoading, data, error, getAllAddressReq, refetch };
};

export const useGetAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAddressReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/address/${id}`, headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed fetch address details"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getAddressReq };
};

export const useUpdateAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateAddressReq = async (id, data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(`/address/${id}`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to update address");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateAddressReq };
};

export const useUpdateDefaultAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateDefaultAddressReq = async (id, data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(
        `/address/${id}/default`,
        data,
        headers
      );
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed to update default address"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateDefaultAddressReq };
};

export const useDeleteAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteAddressReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/address/${id}`, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to delete address");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteAddressReq };
};

export const useCreateAddress = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createAddressReq = async (data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/address`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to create address");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createAddressReq };
};
