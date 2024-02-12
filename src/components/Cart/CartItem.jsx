/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCartItem } from "../../apis/cart/cart";

const CartItem = ({ item, index, refetch }) => {
  const {
    data: dataDeleteCartItem,
    deleteCartItemReq,
    isLoading: isLoadingDeleteCartItem,
  } = useDeleteCartItem();

  const [itemCount, setItemCount] = useState(item?.quantity || 0);

  useEffect(() => {
    if (dataDeleteCartItem) {
      refetch();
    }
  }, [dataDeleteCartItem]);

  return (
    <>
      <div className="border p-5 rounded-md mb-5 flex justify-between items-center">
        <div className="flex gap-5">
          <p>{index + 1}.</p>
          <img
            src={item?.productId?.images[0]}
            alt={item?.productId?.name}
            className="w-20 h-20 object-cover"
          />
          <p>{item?.productId?.name}</p>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <p className="text-lg text-end font-bold">
              ₹ {item?.productId?.price}
            </p>
            <p className="line-through italic text-sm text-end">
              ₹ {item?.productId?.price}
            </p>
            <ItemCount
              itemCount={itemCount}
              onIncrement={() => setItemCount(itemCount + 1)}
              onDecrement={() => setItemCount(itemCount - 1)}
              productId={item?.productId?._id}
              refetch={refetch}
            />
          </div>
          <div
            className="cursor-pointer hover:text-red-800"
            onClick={() => deleteCartItemReq(item?._id)}
          >
            {isLoadingDeleteCartItem ? (
              <>deleting</>
            ) : (
              <MdDeleteForever size={24} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
