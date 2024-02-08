/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  const [itemCount, setItemCount] = useState(0);

  const itemCountHandler = (method) => {
    if (method === "add") {
      setItemCount(itemCount + 1);
    } else {
      itemCount > 0 && setItemCount(itemCount - 1);
    }
  };

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
        </div>
      </div>
    </>
  );
};

export default Card;
