/* eslint-disable react/prop-types */

import { useState } from "react";
import ItemCount from "./ItemCount";
import { useGetAllCartItems } from "../../apis/cart/cart";

const CartItem = ({ item, index }) => {
  const { refetch } = useGetAllCartItems();

  const [itemCount, setItemCount] = useState(item?.quantity || 0);

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
        <div>
          <p className="text-lg text-end font-bold">
            ₹ {item?.productId?.price / item?.productId?.discountPercentage}
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
      </div>
    </>
  );
};

export default CartItem;
