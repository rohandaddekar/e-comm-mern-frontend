/* eslint-disable react/prop-types */
import { BsDash, BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAddItemToCart } from "../../apis/cart/cart";

const ItemCount = ({
  itemCount,
  onIncrement,
  onDecrement,
  productId,
  refetch,
}) => {
  const { addItemToCartReq } = useAddItemToCart();

  const cartId = useSelector((state) => state.user.cartId);

  const itemCountHandler = (method) => {
    if (method === "add") {
      addItemToCartReq({ cartId, productId, quantity: itemCount + 1 });
      onIncrement();
      refetch && refetch(cartId);
    } else {
      if (itemCount > 0) {
        addItemToCartReq({ cartId, productId, quantity: itemCount - 1 });
        onDecrement();
        refetch && refetch(cartId);
      }
    }
  };

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
