/* eslint-disable react/prop-types */

import getInputFieldError from "../../utils/getInputFieldError";
import { useEffect, useState } from "react";
import TextInput from "../Inputs/Text";
import Button from "../Buttons/Button";
import {
  useCreateCategory,
  useGetAllCategories,
} from "../../apis/category/category";
import ImageUploader from "../ImageUpload";
import CategoryList from "../Category/CategoryList";

const CategoryCreate = ({ reFetch }) => {
  const { data, isLoading, error, createCategoryReq } = useCreateCategory();
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

  const submitHandler = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // Append text data
    formDataObj.append("name", formData.name);

    // Append image data
    formDataObj.append("icon", formData.icon);

    // Make the API call
    await createCategoryReq(formDataObj);
  };

  const closeCategoryList = () => {
    setCategoryListVisible(false);
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
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">
            Create Category
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

              <CategoryList
                isCategoryListVisible={isCategoryListVisible}
                allCategoryIsLoading={allCategoryIsLoading}
                allCategoryData={allCategoryData}
                closeCategoryList={closeCategoryList}
              />
            </div>

            <ImageUploader onFileUpload={onFileUpload} label={"Icon"} />

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

export default CategoryCreate;
