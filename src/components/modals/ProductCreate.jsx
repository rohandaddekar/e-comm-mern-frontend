/* eslint-disable react/prop-types */

import getInputFieldError from "../../utils/getInputFieldError";
import { useEffect, useState } from "react";
import TextInput from "../Inputs/Text";
import Button from "../Buttons/Button";
import { useGetAllCategories } from "../../apis/category/category";
import ImageUploader from "../ImageUpload";
import {
  useCreateProduct,
  useGetAllProducts,
} from "../../apis/product/product";
import SelectSingleWithSearch from "../Inputs/SelectSingleWithSearch";
import ProductList from "../Product/ProductList";

const ProductCreate = ({ reFetch }) => {
  const { data, isLoading, error, createProductReq } = useCreateProduct();
  const {
    data: allCategoryData,
    isLoading: allCategoryIsLoading,
    getAllCategoriesReq,
  } = useGetAllCategories();
  const {
    data: allProductData,
    isLoading: allProductIsLoading,
    getAllProductsReq,
  } = useGetAllProducts();

  const [formData, setFormData] = useState({
    categoryId: "",
    name: "",
    images: [],
    price: "",
    discountPercentage: "0",
    stock: "",
  });
  const [isListVisible, setListVisible] = useState(false);

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

  const submitHandler = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    formData.images.map((image) => {
      formDataObj.append(`images`, image);
    });
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("stock", formData.stock);
    formDataObj.append("categoryId", formData.categoryId.value || "");
    formDataObj.append("discountPercentage", formData.discountPercentage);

    // Make the API call
    await createProductReq(formDataObj);
  };

  const closeList = () => {
    setListVisible(false);
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButton");

    if (data) {
      closeButton.click();
      reFetch();
    }
  }, [data]);

  return (
    <>
      <dialog id="categoryCreateModal" className="modal">
        <div className="modal-box no-scrollbar">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">
            Create Product
          </h3>

          <form className="flex flex-col gap-5" onSubmit={submitHandler}>
            <div className="relative">
              <TextInput
                id={"name"}
                type={"text"}
                label={"Name *"}
                value={formData.name}
                onChange={(value) => onChangeHandler("name", value)}
                error={getInputFieldError(error?.errors, "name")}
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
              value={formData.categoryId}
              options={allCategoryData?.categories?.map((category) => ({
                value: category._id,
                label: category.name,
              }))}
              error={getInputFieldError(error?.errors, "categoryId")}
              onChange={(value) => onChangeHandler("categoryId", value)}
            />

            <ImageUploader
              multiple
              label={"Images *"}
              onFileUpload={onFileUpload}
              error={getInputFieldError(error?.errors, "images")}
            />

            <TextInput
              min={0}
              id={"price"}
              type={"number"}
              label={"Price *"}
              value={formData.price}
              error={getInputFieldError(error?.errors, "price")}
              onChange={(value) => onChangeHandler("price", value)}
            />

            <TextInput
              min={0}
              max={100}
              type={"number"}
              id={"discountPercentage"}
              label={"Discount (in %) *"}
              value={formData.discountPercentage}
              error={getInputFieldError(error?.errors, "discountPercentage")}
              onChange={(value) => onChangeHandler("discountPercentage", value)}
            />

            <TextInput
              min={0}
              id={"stock"}
              type={"number"}
              label={"Stock *"}
              value={formData.stock}
              error={getInputFieldError(error?.errors, "stock")}
              onChange={(value) => onChangeHandler("stock", value)}
            />

            <Button title={"Create"} type={"submit"} isLoading={isLoading} />
          </form>

          <form method="dialog" className="mt-3">
            <Button
              title={"Close"}
              type={"submit"}
              extraClasses={"btn-outline"}
            />
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button id="closeButton">close</button>
        </form>
      </dialog>
    </>
  );
};

export default ProductCreate;
