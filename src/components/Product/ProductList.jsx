/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";

const ProductList = ({ isListVisible, isLoading, data, closeList }) => {
  return (
    <>
      {isListVisible &&
        (isLoading ? (
          <div className="bg-gray-100 px-4 py-2 rounded-md mt-1 absolute left-0 right-0 max-h-40 overflow-y-auto z-50">
            loading...
          </div>
        ) : (
          <div className="bg-gray-100 px-4 py-2 rounded-md mt-1 absolute left-0 right-0 max-h-40 overflow-y-auto z-50">
            {data?.products?.length === 0 && <p>no product with this name</p>}
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={closeList}
            >
              <RxCross2 className="text-gray-500 hover:text-gray-900" />
            </div>

            <ul>
              {data?.products?.map((product, i) => (
                <li key={i} className="flex items-center gap-3 my-2">
                  <div className="w-8 h-8">
                    <img
                      src={product?.images[0]}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product?.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default ProductList;
