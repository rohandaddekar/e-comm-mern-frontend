import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "..";
import useAuthHeader from "../authHeader/authHeader";

export const useGetAllCategories = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllCategoriesReq = useCallback(
    async (filters = {}) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/category", {
          ...headers,
          params: filters,
        });
        setData(res?.data);
      } catch (err) {
        setError(err?.response?.data);
        toast.error(
          err?.response?.data?.message || "Failed fetch all categories"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const refetch = useCallback(async () => {
    await getAllCategoriesReq();
  }, [getAllCategoriesReq]);

  return { isLoading, data, error, getAllCategoriesReq, refetch };
};

export const useGetCategoryDetails = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getCategoryDetailsReq = async (categoryId) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/category/${categoryId}`, headers);
      setData(res?.data);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed fetch category details"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getCategoryDetailsReq };
};

export const useUpdateCategoryDetails = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader("multipart/form-data");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateCategoryDetailsReq = async (categoryId, data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(
        `/category/${categoryId}`,
        data,
        headers
      );
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(
        err?.response?.data?.message || "Failed to update category details"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateCategoryDetailsReq };
};

export const useDeleteCategory = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteCategoryReq = async (categoryId) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(
        `/category/${categoryId}`,
        headers
      );
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to delete category");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteCategoryReq };
};

export const useCreateCategory = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader("multipart/form-data");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createCategoryReq = async (data) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/category`, data, headers);
      setData(res?.data);
      toast.success(res?.data?.message);
    } catch (err) {
      setError(err?.response?.data);
      toast.error(err?.response?.data?.message || "Failed to create category");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createCategoryReq };
};
