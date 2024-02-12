/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAddItemToCart, useGetCartItem } from "../../apis/cart/cart";
import ItemCount from "../Cart/ItemCount";
import { useSelector } from "react-redux";

const Card = ({ product }) => {
  const loggedUser = useSelector((state) => state.user);
  const { isLoading } = useAddItemToCart();
  const {
    isLoading: isLoadingCartItem,
    data: dataCartItem,
    getCartItemReq,
  } = useGetCartItem();

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    getCartItemReq(product._id);
  }, []);

  useEffect(() => {
    if (dataCartItem) {
      setItemCount(dataCartItem?.item?.quantity || 0);
    }
  }, [dataCartItem]);

  return (
    <>
      <div className="col-span-4 card bg-base-100 shadow-xl border-2">
        <figure className="h-40 w-full">
          <img
            src={product.images[0]}
            alt={product?.name}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <NavLink to={"#"} className="card-title">
              {product?.name}
            </NavLink>
            <div className="badge badge-outline">
              {product?.categoryId?.name}
            </div>
          </div>
          {loggedUser.userAccessToken &&
            (isLoading && isLoadingCartItem ? (
              <>loading...</>
            ) : (
              <ItemCount
                itemCount={itemCount}
                onIncrement={() => setItemCount(itemCount + 1)}
                onDecrement={() => setItemCount(itemCount - 1)}
                productId={product?._id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Card;
