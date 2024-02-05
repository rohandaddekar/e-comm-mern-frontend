import ProductCreate from "../../../components/modals/ProductCreate";
import {
  useDeleteProduct,
  useGetAllProducts,
} from "../../../apis/product/product";
import DeleteAlert from "../../../components/modals/DeleteAlert";
import ProductEdit from "../../../components/modals/ProductEdit";
import SelectInput from "../../../components/Inputs/Select";
import Button from "../../../components/Buttons/Button";
import TextInput from "../../../components/Inputs/Text";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import moment from "moment";
import ProductImagesSwiper from "../../../components/modals/ProductImagesSwiper";
import SelectSingleWithSearch from "../../../components/Inputs/SelectSingleWithSearch";
import { useGetAllCategories } from "../../../apis/category/category";

const Product = () => {
  const { data, isLoading, getAllProductsReq, refetch } = useGetAllProducts();
  const {
    data: deleteData,
    isLoading: deleteIsLoading,
    deleteProductReq,
  } = useDeleteProduct();
  const {
    data: allCategoryData,
    isLoading: allCategoryIsLoading,
    getAllCategoriesReq,
  } = useGetAllCategories();

  const [selectedEditId, setSelectedId] = useState(null);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [swiperModalImages, setSwiperModalImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    sortBy: "name",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    getAllCategoriesReq();
    getAllProductsReq();
  }, []);

  const filterHandler = (e) => {
    e.preventDefault();

    getAllProductsReq({
      name: formData.name,
      categoryId: formData.categoryId.value,
      sortBy: formData.sortBy,
    });
  };

  const filterResetHandler = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      categoryId: "",
      sortBy: "",
    });

    getAllProductsReq();
  };

  const modalHandler = (e, modalName, id) => {
    e.preventDefault();

    if (modalName === "productEditModal") {
      setSelectedId(id);
    } else if (modalName === "deleteAlertModal") {
      setSelectedDeleteId(id);
    }

    document.getElementById(modalName).showModal();
  };

  const imagesSwiperModalHandler = (e, id) => {
    e.preventDefault();
    document.getElementById("productImagesSwiperModal").showModal();

    const product = data?.products?.filter((product) => product._id === id);

    setSwiperModalImages(product[0].images);
  };

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Product</h2>
          <div className="flex items-end gap-5">
            <TextInput
              id={"name"}
              label={"Filter by Name"}
              type={"text"}
              placeholder={"Laptop"}
              value={formData.name}
              onChange={(value) => onChangeHandler("name", value)}
              inputExtraClasses={"w-80"}
              labelExtraClasses={"text-xs"}
            />

            <SelectSingleWithSearch
              label={"Filter by Category"}
              labelExtraClasses={"text-xs"}
              value={formData.categoryId}
              isLoading={allCategoryIsLoading}
              onChange={(value) => onChangeHandler("categoryId", value)}
              options={allCategoryData?.categories?.map((category) => ({
                value: category._id,
                label: category.name,
              }))}
              selectExtraClasses={{
                paddingTop: "5px",
                paddingBottom: "5px",
                width: "200px",
              }}
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

            <form onSubmit={filterHandler}>
              <Button type={"submit"} title={"Filter"} />
            </form>

            <form onSubmit={filterResetHandler}>
              <Button
                type={"submit"}
                title={"Reset"}
                extraClasses={"btn-outline"}
              />
            </form>
          </div>
        </div>

        <div className="my-5">
          <form onSubmit={(e) => modalHandler(e, "categoryCreateModal")}>
            <Button type={"submit"} title={"Create"} />
          </form>
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
                    <th>Category</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Stock</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.products?.length === 0 ? (
                    <tr>
                      <td>no products</td>
                    </tr>
                  ) : (
                    data?.products?.map((product, i) => (
                      <tr key={i}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div
                              className="cursor-pointer"
                              title="View Product Images"
                              onClick={(e) =>
                                imagesSwiperModalHandler(e, product?._id)
                              }
                            >
                              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                {product?.images?.slice(0, 2)?.map((img, i) => (
                                  <div
                                    className="avatar border-gray-200"
                                    key={i}
                                  >
                                    <div className="w-12">
                                      <img src={img} />
                                    </div>
                                  </div>
                                ))}

                                {product?.images?.length > 2 && (
                                  <div
                                    className="avatar placeholder border-gray-200"
                                    key="placeholder"
                                  >
                                    <div className="w-12 bg-neutral text-neutral-content">
                                      <span>+{product.images.length - 2}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* <div className="mask mask-squircle w-8 h-8">
                                <img
                                  src={product?.images[0]}
                                  alt={product?.name}
                                />
                              </div> */}
                            </div>
                            <div>
                              <p className="font-bold">{product?.name}</p>
                            </div>
                          </div>
                        </td>
                        <td>{product?.categoryId?.name}</td>
                        <td>{product?.price}</td>
                        <td>{product?.discountPercentage} %</td>
                        <td>{product?.stock}</td>
                        <td>
                          {moment(product?.createdAt).format("DD/MM/YYYY")}
                        </td>
                        <th>
                          <button
                            className="btn btn-ghost"
                            onClick={(e) =>
                              modalHandler(e, "productEditModal", product?._id)
                            }
                          >
                            <FaEdit size={20} />
                          </button>
                          <button
                            className="btn btn-ghost"
                            onClick={(e) =>
                              modalHandler(e, "deleteAlertModal", product?._id)
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

            <ProductEdit
              selectedId={selectedEditId}
              setSelectedId={setSelectedId}
              reFetch={handleRefetch}
            />

            <DeleteAlert
              data={deleteData}
              isLoading={deleteIsLoading}
              deleteReq={deleteProductReq}
              selectedId={selectedDeleteId}
              setSelectedId={setSelectedDeleteId}
              reFetch={handleRefetch}
            />

            <ProductCreate reFetch={handleRefetch} />

            <ProductImagesSwiper images={swiperModalImages} />
          </>
        )}
      </div>
    </>
  );
};

export default Product;
