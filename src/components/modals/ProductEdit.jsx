/* eslint-disable react/prop-types */

import getInputFieldError from "../../utils/getInputFieldError";
import { useEffect, useState } from "react";
import TextInput from "../Inputs/Text";
import Button from "../Buttons/Button";
import { useGetAllCategories } from "../../apis/category/category";
import ImageUploader from "../ImageUpload";
import {
  useGetAllProducts,
  useGetProductDetails,
  useUpdateProduct,
} from "../../apis/product/product";
import ProductList from "../Product/ProductList";
import SelectSingleWithSearch from "../Inputs/SelectSingleWithSearch";
import OldImages from "../Product/OldImages";

const ProductEdit = ({ selectedId, setSelectedId, reFetch }) => {
  const { data, isLoading, getProductDetailsReq } = useGetProductDetails();
  const {
    data: updateData,
    isLoading: updateIsLoading,
    error: updateError,
    updateProductReq,
  } = useUpdateProduct();
  const {
    data: allProductData,
    isLoading: allProductIsLoading,
    getAllProductsReq,
  } = useGetAllProducts();
  const {
    data: allCategoryData,
    isLoading: allCategoryIsLoading,
    getAllCategoriesReq,
  } = useGetAllCategories();

  const [formData, setFormData] = useState({
    categoryId: "",
    name: "",
    images: [],
    price: "",
    discountPercentage: "0",
    stock: "",
  });

  const [isListVisible, setListVisible] = useState(false);
  const [oldImages, setOldImages] = useState([]);

  useEffect(() => {
    getAllCategoriesReq();
  }, []);

  const onFileUpload = (imageList) => {
    if (imageList.length > 0) {
      setFormData((prev) => ({
        ...prev,
        images: imageList.map((image) => image.file),
      }));
    }
  };

  useEffect(() => {
    selectedId && getProductDetailsReq(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (data) {
      setFormData({
        categoryId:
          {
            value: data.product.categoryId._id,
            label: data.product.categoryId.name,
          } || "",
        name: data.product.name || "",
        price: data.product.price || "",
        discountPercentage: data.product.discountPercentage || "0",
        stock: data.product.stock || "",
      });
      setOldImages(data.product.images || []);
    }
  }, [data]);

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "name") {
      getAllProductsReq({ name: value });
      setListVisible(true);
    }
  };

  const closeList = () => {
    setListVisible(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    formData.images?.map((image) => {
      formDataObj.append(`images`, image);
    });
    oldImages?.map((image) => {
      formDataObj.append(`oldImages`, image);
    });
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("stock", formData.stock);
    formDataObj.append("categoryId", formData.categoryId.value || "");
    formDataObj.append("discountPercentage", formData.discountPercentage);

    await updateProductReq(selectedId, formDataObj);
    console.log("oldImages", oldImages);
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButton");

    if (updateData) {
      closeButton.click();
      reFetch();
    }
  }, [updateData]);

  return (
    <>
      <dialog id="productEditModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">
            Update Product
          </h3>

          {isLoading ? (
            <>loading...</>
          ) : (
            <>
              <form className="flex flex-col gap-5" onSubmit={updateHandler}>
                <div className="relative">
                  <TextInput
                    id={"name"}
                    type={"text"}
                    label={"Name *"}
                    value={formData.name}
                    onChange={(value) => onChangeHandler("name", value)}
                    error={getInputFieldError(updateError?.errors, "name")}
                  />

                  <ProductList
                    isListVisible={isListVisible}
                    isLoading={allProductIsLoading}
                    data={allProductData}
                    closeList={closeList}
                  />
                </div>

                <SelectSingleWithSearch
                  label={"Category *"}
                  isLoading={allCategoryIsLoading}
                  value={formData.categoryId}
                  options={allCategoryData?.categories?.map((category) => ({
                    value: category._id,
                    label: category.name,
                  }))}
                  error={getInputFieldError(updateError?.errors, "categoryId")}
                  onChange={(value) => onChangeHandler("categoryId", value)}
                />

                <div>
                  <p className="text-sm font-medium leading-6 text-gray-900 mb-1">
                    Images *
                  </p>
                  <OldImages images={oldImages} setOldImages={setOldImages} />
                  <ImageUploader
                    multiple
                    onFileUpload={onFileUpload}
                    error={getInputFieldError(updateError?.errors, "images")}
                  />
                </div>

                <TextInput
                  min={0}
                  id={"price"}
                  type={"number"}
                  label={"Price *"}
                  value={formData.price}
                  error={getInputFieldError(updateError?.errors, "price")}
                  onChange={(value) => onChangeHandler("price", value)}
                />

                <TextInput
                  min={0}
                  max={100}
                  type={"number"}
                  id={"discountPercentage"}
                  label={"Discount (in %) *"}
                  value={formData.discountPercentage}
                  error={getInputFieldError(
                    updateError?.errors,
                    "discountPercentage"
                  )}
                  onChange={(value) =>
                    onChangeHandler("discountPercentage", value)
                  }
                />

                <TextInput
                  min={0}
                  id={"stock"}
                  type={"number"}
                  label={"Stock *"}
                  value={formData.stock}
                  error={getInputFieldError(updateError?.errors, "stock")}
                  onChange={(value) => onChangeHandler("stock", value)}
                />

                <Button
                  title={"Update"}
                  type={"submit"}
                  isLoading={updateIsLoading}
                />
              </form>

              <form method="dialog" className="mt-3">
                <Button
                  title={"Close"}
                  type={"submit"}
                  extraClasses={"btn-outline"}
                />
              </form>
            </>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button id="closeButton" onClick={() => setSelectedId(null)}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ProductEdit;
