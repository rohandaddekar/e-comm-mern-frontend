import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "..";
import useAuthHeader from "../authHeader/authHeader";

export const useGetAllProducts = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllProductsReq = useCallback(
    async (filters = {}) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/product", {
          ...headers,
          params: filters,
        });
        setData(res?.data);
      } catch (err) {
        setError(err?.response?.data);
        toast.error(
          err?.response?.data?.message || "Failed fetch all products"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const refetch = useCallback(async () => {
    await getAllProductsReq();
  }, [getAllProductsReq]);

  return { isLoading, data, error, getAllProductsReq, refetch };
};

export const useGetProductDetails = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getProductDetailsReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/product/${id}`, headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed fetch product details"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getProductDetailsReq };
};

export const useUpdateProduct = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader("multipart/form-data");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateProductReq = async (id, data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(`/product/${id}`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to update product");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateProductReq };
};

export const useDeleteProduct = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteProductReq = async (productId) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/product/${productId}`, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to delete product");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteProductReq };
};

export const useCreateProduct = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader("multipart/form-data");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createProductReq = async (data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/product`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to create product");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createProductReq };
};
