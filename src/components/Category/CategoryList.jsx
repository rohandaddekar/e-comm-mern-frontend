/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";

const CategoryList = ({
  isCategoryListVisible,
  allCategoryIsLoading,
  allCategoryData,
  closeCategoryList,
}) => {
  return (
    <>
      {isCategoryListVisible &&
        (allCategoryIsLoading ? (
          <div className="bg-gray-100 px-4 py-2 rounded-md mt-1 absolute left-0 right-0 max-h-40 overflow-y-auto">
            loading...
          </div>
        ) : (
          <div className="bg-gray-100 px-4 py-2 rounded-md mt-1 absolute left-0 right-0 max-h-40 overflow-y-auto">
            {allCategoryData?.categories?.length === 0 && (
              <p>no category with this name</p>
            )}
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={closeCategoryList}
            >
              <RxCross2 className="text-gray-500 hover:text-gray-900" />
            </div>

            <ul>
              {allCategoryData?.categories?.map((category, i) => (
                <li key={i} className="flex items-center gap-3 my-2">
                  <div className="w-8 h-8">
                    <img
                      src={category?.icon}
                      alt={category?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {category?.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default CategoryList;
