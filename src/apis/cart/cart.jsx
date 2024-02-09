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
