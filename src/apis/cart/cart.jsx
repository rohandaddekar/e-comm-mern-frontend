import { useCallback, useState } from "react";
import useAxios from "..";
import useAuthHeader from "../authHeader/authHeader";
import toast from "react-hot-toast";

export const useGetAllCartItems = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllCartItemsReq = useCallback(
    async (cartId, filters = {}) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/cart/items/${cartId}`, {
          ...headers,
          params: filters,
        });
        setData(res?.data);
      } catch (err) {
        setError(err?.response?.data);
        toast.error(
          err?.response?.data?.message || "Failed fetch all cart items"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const refetch = useCallback(
    async (cartId) => {
      await getAllCartItemsReq(cartId);
    },
    [getAllCartItemsReq]
  );

  return { isLoading, data, error, getAllCartItemsReq, refetch };
};

export const useAddItemToCart = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const addItemToCartReq = async (data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/cart/add-item`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to add item in cart");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, addItemToCartReq };
};

export const useGetCartItem = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getCartItemReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/cart/${id}`, headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed fetch cart item");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getCartItemReq };
};

export const useDeleteCartItem = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteCartItemReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/cart/${id}`, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to remove cart item");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteCartItemReq };
};

export const useClearCart = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const clearCartReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/cart/clear/${id}`, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to clear cart");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, clearCartReq };
};
