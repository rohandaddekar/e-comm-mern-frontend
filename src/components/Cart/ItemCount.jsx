/* eslint-disable react/prop-types */
import { BsDash, BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAddItemToCart } from "../../apis/cart/cart";
import { useEffect } from "react";

const ItemCount = ({
  itemCount,
  onIncrement,
  onDecrement,
  productId,
  refetch,
}) => {
  const { addItemToCartReq, data } = useAddItemToCart();

  const cartId = useSelector((state) => state.user.cartId);

  const itemCountHandler = (method) => {
    if (method === "add") {
      addItemToCartReq({ cartId, productId, quantity: itemCount + 1 });
      onIncrement();
    } else {
      if (itemCount > 0) {
        addItemToCartReq({ cartId, productId, quantity: itemCount - 1 });
        onDecrement();
      }
    }
  };

  useEffect(() => {
    if (refetch) {
      if (data) {
        refetch();
      }
    }
  }, [data, cartId]);

  return (
    <div className="flex gap-3 items-center justify-end mt-2">
      <button
        className="btn btn-circle btn-outline btn-sm"
        onClick={() => itemCountHandler("subtract")}
      >
        <BsDash />
      </button>
      {itemCount}
      <button
        className="btn btn-circle btn-outline btn-sm"
        onClick={() => itemCountHandler("add")}
      >
        <BsPlus />
      </button>
    </div>
  );
};

export default ItemCount;
