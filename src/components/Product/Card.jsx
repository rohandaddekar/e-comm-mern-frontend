/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAddItemToCart } from "../../apis/cart/cart";
import ItemCount from "../Cart/ItemCount";

const Card = ({ product }) => {
  const { isLoading } = useAddItemToCart();

  const [itemCount, setItemCount] = useState(0);

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
          {isLoading ? (
            <>loading...</>
          ) : (
            <ItemCount
              itemCount={itemCount}
              onIncrement={() => setItemCount(itemCount + 1)}
              onDecrement={() => setItemCount(itemCount - 1)}
              productId={product?._id}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
