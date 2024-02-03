/* eslint-disable react/prop-types */

import getInputFieldError from "../../utils/getInputFieldError";
import { useEffect, useState } from "react";
import TextInput from "../Inputs/Text";
import Button from "../Buttons/Button";
import {
  useGetAllCategories,
  useGetCategoryDetails,
  useUpdateCategoryDetails,
} from "../../apis/category/category";
import ImageUploader from "../ImageUpload";
import CategoryList from "../Category/CategoryList";

const CategoryEdit = ({ selectedId, setSelectedId, reFetch }) => {
  const { data, isLoading, getCategoryDetailsReq } = useGetCategoryDetails();
  const {
    data: updateData,
    isLoading: updateIsLoading,
    error: updateError,
    updateCategoryDetailsReq,
  } = useUpdateCategoryDetails();
  const {
    data: allCategoryData,
    isLoading: allCategoryIsLoading,
    getAllCategoriesReq,
  } = useGetAllCategories();

  const [formData, setFormData] = useState({
    name: "",
    icon: "",
  });

  const [isCategoryListVisible, setCategoryListVisible] = useState(false);

  const onFileUpload = (imageList) => {
    if (imageList.length > 0) {
      setFormData((prev) => ({
        ...prev,
        icon: imageList[0].file,
      }));
    }
  };

  useEffect(() => {
    selectedId && getCategoryDetailsReq(selectedId);
  }, [selectedId]);

  useEffect(() => {
    data &&
      setFormData({
        name: data?.category?.name || "",
        icon: data?.category?.icon || "",
      });
  }, [data]);

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "name") {
      getAllCategoriesReq({ name: value });
      setCategoryListVisible(true);
    }
  };

  const closeCategoryList = () => {
    setCategoryListVisible(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // Append text data
    formDataObj.append("name", formData.name);

    // Append image data
    formDataObj.append("icon", formData.icon);

    await updateCategoryDetailsReq(selectedId, formDataObj);
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
      <dialog id="categoryEditModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">Update User</h3>

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

                  <CategoryList
                    isCategoryListVisible={isCategoryListVisible}
                    allCategoryIsLoading={allCategoryIsLoading}
                    allCategoryData={allCategoryData}
                    closeCategoryList={closeCategoryList}
                  />
                </div>

                <ImageUploader onFileUpload={onFileUpload} label={"Icon"} />

                <Button
                  title={"Update"}
                  type={"submit"}
                  isLoading={updateIsLoading}
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

export default CategoryEdit;
