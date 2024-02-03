import CategoryCreate from "../../../components/modals/CategoryCreate";
import DeleteAlert from "../../../components/modals/DeleteAlert";
import CategoryEdit from "../../../components/modals/CategoryEdit";
import SelectInput from "../../../components/Inputs/Select";
import Button from "../../../components/Buttons/Button";
import TextInput from "../../../components/Inputs/Text";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
  useDeleteCategory,
  useGetAllCategories,
} from "../../../apis/category/category";
import moment from "moment";

const Category = () => {
  const { data, isLoading, getAllCategoriesReq, refetch } =
    useGetAllCategories();
  const {
    data: deleteData,
    isLoading: deleteIsLoading,
    deleteCategoryReq,
  } = useDeleteCategory();

  const [selectedEditCategoryId, setSelectedEditCategoryId] = useState(null);
  const [selectedDeleteCategoryId, setSelectedDeleteCategoryId] =
    useState(null);
  const [formData, setFormData] = useState({
    name: "",
    sortBy: "name",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    getAllCategoriesReq({ name: formData.name, sortBy: formData.sortBy });
  }, [formData.name, formData.sortBy]);

  const modalHandler = (e, modalName, id) => {
    e.preventDefault();

    if (modalName === "categoryEditModal") {
      setSelectedEditCategoryId(id);
    } else if (modalName === "deleteAlertModal") {
      setSelectedDeleteCategoryId(id);
    }

    document.getElementById(modalName).showModal();
  };

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Category</h2>
          <div className="flex items-end gap-5">
            <TextInput
              id={"name"}
              label={"Filter by Name"}
              type={"text"}
              placeholder={"Electronic"}
              value={formData.name}
              onChange={(value) => onChangeHandler("name", value)}
              inputExtraClasses={"w-80"}
              labelExtraClasses={"text-xs"}
            />

            <SelectInput
              id={"sortBy"}
              label={"Sort by"}
              options={[
                { title: "Name", value: "name" },
                { title: "Created At", value: "createdAt" },
              ]}
              value={formData.sortBy}
              onChange={(value) => onChangeHandler("sortBy", value)}
              labelExtraClasses={"text-xs"}
            />

            <form onSubmit={(e) => modalHandler(e, "categoryCreateModal")}>
              <Button type={"submit"} title={"Create"} />
            </form>
          </div>
        </div>

        {isLoading ? (
          <>loading...</>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.categories?.length === 0 ? (
                    <tr>
                      <td>no categories</td>
                    </tr>
                  ) : (
                    data?.categories?.map((category, i) => (
                      <tr key={i}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar border rounded-full">
                              <div className="mask mask-squircle w-8 h-8">
                                <img
                                  src={category?.icon}
                                  alt={category?.name}
                                />
                              </div>
                            </div>
                            <div>
                              <p className="font-bold">{category?.name}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          {moment(category?.createdAt).format("DD/MM/YYYY")}
                        </td>
                        <th>
                          <button
                            className="btn btn-ghost"
                            onClick={(e) =>
                              modalHandler(
                                e,
                                "categoryEditModal",
                                category?._id
                              )
                            }
                          >
                            <FaEdit size={20} />
                          </button>
                          <button
                            className="btn btn-ghost"
                            onClick={(e) =>
                              modalHandler(e, "deleteAlertModal", category?._id)
                            }
                          >
                            <RiDeleteBin6Fill size={20} />
                          </button>
                        </th>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <CategoryEdit
              selectedId={selectedEditCategoryId}
              setSelectedId={setSelectedEditCategoryId}
              reFetch={handleRefetch}
            />

            <DeleteAlert
              data={deleteData}
              isLoading={deleteIsLoading}
              deleteReq={deleteCategoryReq}
              selectedId={selectedDeleteCategoryId}
              setSelectedId={setSelectedDeleteCategoryId}
              reFetch={handleRefetch}
            />

            <CategoryCreate reFetch={handleRefetch} />
          </>
        )}
      </div>
    </>
  );
};

export default Category;
